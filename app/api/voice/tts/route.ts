export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

const DEFAULT_VOICE_ID = "JBFqnCBsd6RMkjVDRZzb";
const ELEVENLABS_URL = "https://api.elevenlabs.io/v1/text-to-speech";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ELEVENLABS_API_KEY not configured" },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { text } = body as { text?: string };
    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "text required" },
        { status: 400 }
      );
    }

    const voiceId = process.env.ELEVENLABS_VOICE_ID || DEFAULT_VOICE_ID;
    const url = `${ELEVENLABS_URL}/${voiceId}?output_format=mp3_44100_128`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text: text.slice(0, 2500),
        model_id: "eleven_multilingual_v2",
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("ElevenLabs TTS error:", res.status, err);
      return NextResponse.json(
        { error: "TTS failed" },
        { status: 502 }
      );
    }

    const audioBuffer = await res.arrayBuffer();
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
