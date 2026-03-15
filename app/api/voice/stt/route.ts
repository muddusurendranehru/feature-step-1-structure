export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

const ELEVENLABS_STT_URL = "https://api.elevenlabs.io/v1/speech-to-text";
const STT_MODEL = "scribe_v2";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ELEVENLABS_API_KEY not configured" },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "file required (audio)" },
        { status: 400 }
      );
    }

    const body = new FormData();
    body.append("model_id", STT_MODEL);
    body.append("file", file);

    const res = await fetch(ELEVENLABS_STT_URL, {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
      },
      body,
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("ElevenLabs STT error:", res.status, err);
      return NextResponse.json(
        { error: "Transcription failed" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as { text?: string };
    const text = (data.text ?? "").trim();
    return NextResponse.json({ text });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
