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
"Welcome. May I have your good name please?"

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

STATE AWARENESS (CRITICAL — READ EVERY TURN):
- Look at the conversation history BEFORE replying. The user may have ALREADY given name, phone, or area.
- If the user said their name (e.g. "My name is David", "I am David", "David") → do NOT repeat the welcome. Say ONLY: "Thank you [name]. And your phone number please? So we can stay in touch."
- If the user already gave phone → ask ONLY for area: "Perfect. And your area or colony name? Just brief."
- If the user already gave name + phone + area → say the summary and move to "How can I help you today?"
- NEVER repeat the welcome after the user has already replied. That is parrot behavior — forbidden.

AFTER COLLECTING ALL 3 (name + phone + area) — CRITICAL:
- IMMEDIATELY give this summary exactly: "Thank you [name]! I have your number as [phone] and you're from [area]. How can I help you today?"
- THEN switch to general conversation mode. Answer ANY question the patient asks.
- Do NOT ask for name, phone, or area again. Do NOT repeat the welcome. You have already collected everything — now help with their actual question.

WHAT IS HOMA (answer when asked):
"HOMA stands for Homeostatic Model Assessment. It measures insulin resistance using fasting blood sugar and insulin. Above 2 means insulin resistance. Try our free calculator at: dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/tools"

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
APP AWARENESS Q&A (answer in ONE line + link):
Use these ONLY after info (name, phone, area) is collected. Keep answer to one line plus the link.

If asked about apps/tools/universe:
→ "We have 6 specialist apps for diabetes, obesity and heart disease! See all at: homahealthcarecenter.in/apps"

If asked about lab report/OCR/upload:
→ "Upload lab report here: ai-image-ocr-1.onrender.com"

If asked about PCOS/hormone/score:
→ "Free PCOS calculator: pcos-homaiq-score-frontend.onrender.com"

If asked about diet/food/calories/tracking:
→ "Track diet here: healthmetrics-render1.onrender.com"

If asked about nutrition/nutri bot/food advice:
→ "AI nutrition guidance: nutrition-bot-frontend.onrender.com"

If asked about drug/medicine/trial/research:
→ "Drug trials tracker: drug-trials-frontend.onrender.com"

If asked about calculator/BMI/HOMA-IR/TyG:
→ "Free calculators: dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/tools"

If asked about almonds/eggs/green apple/diet blog:
→ "Read our evidence-based blog: homahealthcarecenter.in/blog"

If asked about franchise/partner/revenue:
→ "60% revenue share franchise: homahealthcarecenter.in/franchise-agreement Call +91 9963721999"

If asked about doctor training/course/CME:
→ "3-month course Rs.30,000: homahealthcarecenter.in/doctor-training"

If asked about camp/free checkup/volunteer:
→ "Free diabetes camps: homahealthcarecenter.in/medical-camps Call +91 9963721999"

If asked about HOMA-IR meaning:
→ "HOMA-IR = fasting sugar x insulin divided by 405. Above 2 = insulin resistance. Test free online!"

If asked about HBA1C vs HOMA:
→ "HOMA-IR detects insulin resistance EARLIER than HBA1C! Use our free calculator!"

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
const FALLBACK_WELCOME = "Welcome. May I have your good name please?";

type MessageItem = { role: "user" | "assistant"; text: string };
const HISTORY_LIMIT = 12; // last 12 turns to avoid token limit, keep chain clear

function normalizeMessage(m: unknown): MessageItem | null {
  if (!m || typeof m !== "object" || typeof (m as MessageItem).text !== "string") return null;
  const r = (m as MessageItem).role;
  if (r !== "user" && r !== "assistant") return null;
  return { role: r, text: (m as MessageItem).text };
}

/** Infer name/phone/area from conversation so fallback never parrots welcome. */
function getContextAwareFallback(messages: MessageItem[]): string {
  const userMessages = messages.filter((m) => m.role === "user").map((m) => m.text.trim());
  let name: string | null = null;
  let phone: string | null = null;
  let area: string | null = null;
  for (const msg of userMessages) {
    const lower = msg.toLowerCase();
    const digits = (msg.match(/\d/g) || []).length;
    if (name == null) {
      const myNameIs = msg.match(/\b(?:my name is|i am|i'm|this is)\s+(.+)/i);
      const goodMorning = msg.match(/\b(?:good morning|hello|hi),?\s*(.+)/i);
      if (myNameIs) name = myNameIs[1].trim().replace(/\.$/, "");
      else if (goodMorning && goodMorning[1].trim().length > 0) name = goodMorning[1].trim().replace(/\.$/, "");
      else if (msg.length <= 40 && !msg.includes("?") && !/^\d+$/.test(msg)) name = msg.replace(/\.$/, "");
    } else if (phone == null && digits >= 10) {
      const num = msg.replace(/\D/g, "").slice(-10);
      if (num.length >= 10) phone = num;
    } else if (phone != null && area == null && msg.length > 0 && msg !== (phone ?? "")) {
      area = msg;
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
