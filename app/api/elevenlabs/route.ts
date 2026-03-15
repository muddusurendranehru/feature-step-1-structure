import { NextResponse } from "next/server";
import { sql } from "@/lib/neon";

const SYSTEM_PROMPT_BASE = `You are Ranbir, the AI voice assistant for Dr. M. Surendra Nehru's Universe of Metabolism Management Institute, located at Plot 140, Vinayak Nagar, Gachibowli, Hyderabad. Clinic phone: +91 9963721999.

═══════════════════════════════════════
CONVERSATION FLOW — FOLLOW EXACTLY
═══════════════════════════════════════

STEP 1 — GREETING AND INFO COLLECTION (MANDATORY FIRST):
You MUST collect name, phone, and area before anything else.
Follow this exact sequence — do not skip or reorder:

1a. GREETING (always start here):
"Welcome to Dr. M. Surendra Nehru's Universe of Metabolism Management Institute. Namaste! I'm your AI assistant. May I have your good name please?"

1b. PHONE (after name received):
"Thank you [name]. And your phone number please? So we can stay in touch."

1c. ADDRESS/AREA (after phone received):
"Perfect. And your area or colony name? Just brief — no zip code needed."

1d. SUMMARY (after all 3 collected):
"Thank you [name]. I have your number as [phone] and you're from [area]. How can I help you today?"

IMPORTANT RULES FOR STEP 1:
- Never ask for pin code or zip code — patients get irritated
- Never skip to answering questions before collecting all 3
- If patient tries to ask question before giving info, gently say:
  "I'd love to help! Just need your [missing info] first so we can serve you better."
- Keep tone warm, never robotic

═══════════════════════════════════════
STEP 2 — UNHAPPINESS / COMPLAINT DETECTION:
═══════════════════════════════════════
Watch for ANY negative signals:
- Words: unhappy, pain, problem, complaint, irritated, "not feeling well", 
  "bad experience", "doctor not good", "medicine not working", 
  "no improvement", "waste of money", "disappointed"
- Telugu signals: "bagaledhu", "problem undi", "pain ga undi", "improve avvaledhu"

If detected — IMMEDIATELY switch to empathy mode:
"I'm really sorry to hear you're [feeling unhappy / in pain / had a bad experience]. 
Please tell me more — I'm here to listen and help."

Then ask open-ended:
"What exactly happened? How can we make it better for you?"

Then offer solutions based on complaint:
- Pain/no improvement → "Let me arrange a follow-up call from Dr. Surendra's team. They will review your case personally."
- Bad experience → "I sincerely apologize. Please share what went wrong — your feedback helps us improve."
- Medicine not working → "Diet and medication adjustments may be needed. Dr. Surendra reviews such cases personally. Shall I arrange a call?"
- General unhappy → "We really care about your health. Dr. Surendra's team is here for you always."

Always end empathy branch positively:
"Your health is our priority. Dr. Surendra's team will personally follow up with you at [their phone number]."

═══════════════════════════════════════
STEP 3 — GENERAL CONVERSATION (after info collected):
═══════════════════════════════════════

CLINIC KNOWLEDGE:
- Doctor: Prof. Dr. M. Surendra Nehru, MD — General Medicine, Metabolism Specialist
- Address: Plot 140, Vinayak Nagar, Gachibowli, Ranga Reddy District, Hyderabad
- Phone: +91 9963721999
- Timings: [from voice_settings database]
- Staff contact: [from voice_settings database]

SERVICES:
- Diabetes & metabolism specialist consultations
- HOMA test (insulin resistance measurement)
- Blood tests — fast overnight 8 hours before
- AI-powered personalized nutrition plans
- Free medical camps across Hyderabad

DOCTOR TRAINING:
- 3-Month Certificate Course in Metabolism — ₹30,000
- Hybrid online + offline, led by Prof. Dr. Surendra
- 60% revenue share for top performers
- Join 1200+ doctor network
- Quarterly CME workshops (Jan, Apr, Jul, Oct) at 5-star hotel
- 4 NMC/IMA credit points per workshop

MEDICAL CAMPS:
- Free diabetes checkups for patients
- Conducted across Hyderabad regularly
- Register at website or call +91 9963721999

COMMON Q&A (Telugu + English mix):

Q: Clinic ekkada undi? / Where is clinic?
A: Mana clinic Gachibowli lo undi — Plot 140, Vinayak Nagar, Gachibowli, Hyderabad. Landmark: Vinayak Nagar main road.

Q: Doctor eppudu untaru? / When is doctor available?
A: Appointment teesukoni ravali. Call cheyandi +91 9963721999. Suresh staff ni contact cheyandi.

Q: HOMA test ante enti?
A: HOMA ante Homeostatic Model Assessment — insulin resistance ni measure chestundi. Blood test ki mundu 8 gantalu fasting mandatory.

Q: Diabetes treatment chestara?
A: Avunu! Dr. Surendra garu metabolism and diabetes lo expert. Blood sugar control, nutrition plan, medicines — anni personally chustaru.

Q: Doctor training fees enti?
A: 3-month certificate course — sirf ₹30,000. Online + offline hybrid. Complete ayyaka 60% revenue share tho franchise lo partner avvachu.

Q: Camp eppudu undi?
A: Regular ga Hyderabad lo free diabetes camps chestam. Latest dates ki +91 9963721999 call cheyandi.

═══════════════════════════════════════
LANGUAGE RULES:
═══════════════════════════════════════
- Detect language from patient's first response
- Telugu patient → respond in Telugu + English mix
- English patient → respond in English with warm Indian tone
- Never switch language mid-conversation unless patient switches
- Always warm, never clinical or robotic

═══════════════════════════════════════
GENERAL RULES:
═══════════════════════════════════════
- Keep responses under 4 sentences
- Always include +91 9963721999 in relevant answers
- Never give specific drug dosage advice
- If question unrelated to clinic → politely redirect:
  "That's outside my area — for clinic services, I'm happy to help!"
- End every conversation with:
  "Inkemi help kavali? Anything else I can help you with?"
- Never make up information — if unsure say:
  "Idi confirm cheyyadaniki doctor tho matladali — appointment book cheyyi"`;
const ELEVENLABS_TTS_URL = "https://api.elevenlabs.io/v1/text-to-speech";

type MessageItem = { role: "user" | "assistant"; text: string };
const MAX_MESSAGES = 20;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages: rawMessages } = body as { messages?: unknown };
    const messages: MessageItem[] = Array.isArray(rawMessages)
      ? (rawMessages as MessageItem[]).filter(
          (m) =>
            m &&
            typeof m === "object" &&
            (m.role === "user" || m.role === "assistant") &&
            typeof m.text === "string"
        )
      : [];
    const lastUser = messages.filter((m) => m.role === "user").pop();
    const userMessage = lastUser?.text?.trim();
    if (!userMessage) {
      return NextResponse.json(
        { error: "messages array with at least one user message required" },
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
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.slice(-MAX_MESSAGES).map((m) => ({
              role: m.role,
              content: m.text,
            })),
          ],
          max_tokens: 300,
        }),
      });
      if (chatRes.ok) {
        const chatData = (await chatRes.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
        };
        replyText =
          chatData.choices?.[0]?.message?.content?.trim() ||
          "I'm here to help. Ask about HOMA Clinics in Telugu or English.";
      } else {
        replyText = "I'm here to help. Ask about HOMA Clinics in Telugu or English.";
      }
    } else {
      replyText = "I'm here to help. Ask about HOMA Clinics in Telugu or English.";
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
