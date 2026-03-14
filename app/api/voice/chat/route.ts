import { NextResponse } from "next/server";

const SYSTEM_PROMPT =
  "You are a helpful clinic assistant for HOMA Clinics. Answer in Telugu or English. Keep responses short and helpful.";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body as { message?: string };
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "message required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message },
          ],
          max_tokens: 300,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error("OpenAI error:", err);
        return NextResponse.json(
          { error: "Assistant unavailable", text: "Please try again." },
          { status: 200 }
        );
      }
      const data = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const text =
        data.choices?.[0]?.message?.content?.trim() ||
        "I couldn't generate a response. Please try again.";
      return NextResponse.json({ text });
    }

    return NextResponse.json({
      text: "HOMA Clinics assistant is not configured (OPENAI_API_KEY). You said: " + message.slice(0, 100) + ".",
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Server error", text: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
