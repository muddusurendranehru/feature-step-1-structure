import { NextResponse } from "next/server";
import { sql } from "@/lib/neon";

const SYSTEM_PROMPT_BASE = `You are Ranbir,
friendly voice assistant for HOMA Clinics.
Location: Plot 140, Vinayak Nagar, Gachibowli, Hyderabad.
Doctor: Prof. Dr. M. Surendra Nehru MD.
Phone: +91 9963721999.

FLOW: Collect name → phone → area, then help with questions.

STATE AWARENESS (CRITICAL — READ HISTORY EVERY TURN):
- Before replying, read the full conversation. The user may have ALREADY given name, phone, or area.
- If they gave their name (e.g. "good morning", "I am X", "X") → do NOT ask for name again. Ask only for phone.
- If they gave a phone number (digits, "nine eight four...", "98497...", etc.) → do NOT ask for phone again. Ask only for area, or if you have all three, say "How can I help you today?"
- Never repeat the same question. If you already asked for phone and they replied with numbers, move to area. If they gave area, move to "How can I help?"
- Parrot behavior is forbidden: do not say the same line twice after the user has already answered.

First message only: "Welcome to HOMA Clinics! I am Ranbir, your AI assistant. May I have your name please?"
After name: "Thank you [name]! Your phone number please?"
After phone: "And your area or colony?"
After area: "Thank you [name]! How can I help you today?"

AFTER COLLECTING INFO - answer freely:
- Clinic timings, services, doctors
- Apps: visit homahealthcarecenter.in/apps
- Calculators: free at our tools app
- Camps: free diabetes checkups in Hyderabad
- Training: 3-month course Rs.30,000
- Franchise: 60% revenue share
- Any health question in Telugu or English

RULES:
- Keep answers under 3 sentences
- Always warm and helpful
- End with: Inkemi help kavali?`;
const ELEVENLABS_TTS_URL = "https://api.elevenlabs.io/v1/text-to-speech";
const FALLBACK_WELCOME = "Welcome. May I have your good name please?";

type MessageItem = { role: "user" | "assistant"; text: string };
const HISTORY_LIMIT = 12; // last 12 turns to avoid token limit, keep chain clear

function normalizeMessage(m: unknown): MessageItem | null {
  if (!m || typeof m !== "object" || typeof (m as MessageItem).text !== "string") return null;
  const r = (m as MessageItem).role;
  if (r !== "user" && r !== "assistant") return null;
  return { role: r, text: (m as MessageItem).text };
}

/** Convert spoken digits (e.g. "nine eight four ... double five") to a string of digits. */
function spokenToDigits(msg: string): string {
  const lower = msg.toLowerCase().trim();
  const words = lower.split(/\s+|,|\./).filter(Boolean);
  const digitWords: Record<string, string> = {
    zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5",
    six: "6", seven: "7", eight: "8", nine: "9", oh: "0",
  };
  const out: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (digitWords[w] !== undefined) {
      out.push(digitWords[w]);
    } else if (w === "double" || w === "triple") {
      const next = words[i + 1];
      const d = next ? digitWords[next] : null;
      if (d) {
        out.push(d, d);
        if (w === "triple") out.push(d);
        i++;
      }
    }
  }
  return out.join("");
}

/** Infer name/phone/area from conversation so fallback never parrots. */
function getContextAwareFallback(messages: MessageItem[]): string {
  const userMessages = messages.filter((m) => m.role === "user").map((m) => m.text.trim());
  let name: string | null = null;
  let phone: string | null = null;
  let area: string | null = null;
  for (const msg of userMessages) {
    const digitsOnly = (msg.replace(/\D/g, "").slice(-10));
    const spokenDigits = spokenToDigits(msg);
    const combined = (digitsOnly.length >= 10 ? digitsOnly : spokenDigits.length >= 10 ? spokenDigits.slice(-10) : "");
    const hasPhone = combined.length >= 10;

    if (name == null) {
      const myNameIs = msg.match(/\b(?:my name is|i am|i'm|this is)\s+(.+)/i);
      const goodMorning = msg.match(/\b(?:good morning|hello|hi),?\s*(.+)/i);
      if (myNameIs) name = myNameIs[1].trim().replace(/\.$/, "");
      else if (goodMorning && goodMorning[1].trim().length > 0) name = goodMorning[1].trim().replace(/\.$/, "");
      else if (msg.length <= 40 && !msg.includes("?") && !/^\d+$/.test(msg) && !hasPhone) name = msg.replace(/\.$/, "");
    }
    if (name != null && phone == null && hasPhone) {
      phone = combined.slice(-10);
    }
    if (name != null && phone != null && area == null && msg.length > 0 && !hasPhone && msg.length <= 80) {
      area = msg.replace(/\.$/, "");
    }
  }
  if (name && !phone) return `Thank you ${name}. And your phone number please? So we can stay in touch.`;
  if (name && phone && !area) return "Perfect. And your area or colony name? Just brief.";
  if (name && phone && area) return `Thank you ${name}. I have your number as ${phone} and you're from ${area}. How can I help you today?`;
  return FALLBACK_WELCOME;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      text?: string;
      message?: string;
      history?: unknown[];
      messages?: unknown[];
    };
    let messages: MessageItem[];
    if (Array.isArray(body.messages) && body.messages.length > 0) {
      messages = body.messages.map(normalizeMessage).filter(Boolean) as MessageItem[];
    } else if (typeof (body.text ?? body.message) === "string" && Array.isArray(body.history)) {
      const history = body.history.map(normalizeMessage).filter(Boolean) as MessageItem[];
      const current = (body.text ?? body.message) as string;
      messages = [...history, { role: "user", text: current.trim() }];
    } else {
      return NextResponse.json(
        { error: "body must have { text, messages: fullHistory } or { message, history }" },
        { status: 400 }
      );
    }
    const lastUser = messages.filter((m) => m.role === "user").pop();
    const userMessage = lastUser?.text?.trim();
    if (!userMessage) {
      return NextResponse.json(
        { error: "at least one user message required" },
        { status: 400 }
      );
    }

    let systemPrompt = SYSTEM_PROMPT_BASE;
    if (process.env.DATABASE_URL) {
      try {
        const rows = await sql`SELECT key, value FROM voice_settings`;
        const map = new Map<string, string>();
        for (const r of rows as Array<{ key: string; value: string }>) {
          map.set(r.key, r.value ?? "");
        }
        const timings = map.get("timings")?.trim();
        const contact = map.get("contact")?.trim();
        const homaTest = map.get("homa_test")?.trim();
        const announcement = map.get("announcement")?.trim();
        if (timings || contact || homaTest || announcement) {
          const parts: string[] = ["\n\nCURRENT CLINIC SETTINGS (use these when relevant):"];
          if (timings) parts.push(`- Timings: ${timings}`);
          if (contact) parts.push(`- Contact: ${contact}`);
          if (homaTest) parts.push(`- HOMA test info: ${homaTest}`);
          if (announcement) parts.push(`- Today's announcement: ${announcement}`);
          systemPrompt = SYSTEM_PROMPT_BASE + parts.join("\n");
        }
      } catch {
        // keep base prompt if DB read fails
      }
    }

    // Full history to OpenAI — do NOT reset. Last message MUST be current user turn.
    const previousMessages = messages.slice(0, -1).slice(-(HISTORY_LIMIT - 1));
    const currentMessage = messages[messages.length - 1];
    const openaiMessages = [
      { role: "system" as const, content: systemPrompt },
      ...previousMessages.map((m) => ({ role: m.role, content: m.text })),
      { role: "user" as const, content: currentMessage.text },
    ];

    let replyText: string;
    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      const chatRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: openaiMessages,
          max_tokens: 300,
        }),
      });
      if (chatRes.ok) {
        const chatData = (await chatRes.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
        };
        replyText =
          chatData.choices?.[0]?.message?.content?.trim() ||
          getContextAwareFallback(messages);
      } else {
        replyText = getContextAwareFallback(messages);
      }
    } else {
      replyText = getContextAwareFallback(messages);
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    const voiceId = process.env.ELEVENLABS_VOICE_ID;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ELEVENLABS_API_KEY not configured" },
        { status: 503 }
      );
    }

    const url = `${ELEVENLABS_TTS_URL}/${voiceId || "JBFqnCBsd6RMkjVDRZzb"}?output_format=mp3_44100_128`;
    const ttsRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text: replyText.slice(0, 2500),
        model_id: "eleven_multilingual_v2",
      }),
    });

    if (!ttsRes.ok) {
      const err = await ttsRes.text();
      console.error("ElevenLabs TTS error:", ttsRes.status, err);
      return NextResponse.json(
        { error: "TTS failed" },
        { status: 502 }
      );
    }

    const audioBuffer = await ttsRes.arrayBuffer();
    const b64 = Buffer.from(audioBuffer).toString("base64");
    return NextResponse.json({
      text: replyText,
      audio: b64,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
