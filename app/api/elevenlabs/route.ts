import { NextResponse } from "next/server";

const SYSTEM_PROMPT =
  "You are a helpful clinic assistant for HOMA Clinics. Answer in Telugu or English.";
const ELEVENLABS_TTS_URL = "https://api.elevenlabs.io/v1/text-to-speech";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text: userMessage } = body as { text?: string };
    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json(
        { error: "text required" },
        { status: 400 }
      );
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
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userMessage },
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
    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
