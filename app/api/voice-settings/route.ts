export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { sql } from "@/lib/neon";

const KEYS = ["timings", "contact", "homa_test", "announcement"] as const;

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL not configured" },
        { status: 503 }
      );
    }
    const rows = await sql`
      SELECT key, value FROM voice_settings
    `;
    const out: Record<string, string> = {
      timings: "",
      contact: "",
      homa_test: "",
      announcement: "",
    };
    for (const r of rows as Array<{ key: string; value: string }>) {
      if (KEYS.includes(r.key as (typeof KEYS)[number])) {
        out[r.key] = r.value ?? "";
      }
    }
    return NextResponse.json(out);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch voice settings" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const userId = await auth().then((a) => a.userId).catch(() => null);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL not configured" },
        { status: 503 }
      );
    }
    const body = (await request.json()) as Record<string, unknown>;
    const timings = String(body.timings ?? "").trim();
    const contact = String(body.contact ?? "").trim();
    const homa_test = String(body.homa_test ?? "").trim();
    const announcement = String(body.announcement ?? "").trim();

    await sql`
      INSERT INTO voice_settings (key, value) VALUES
        ('timings', ${timings}),
        ('contact', ${contact}),
        ('homa_test', ${homa_test}),
        ('announcement', ${announcement})
      ON CONFLICT (key) DO UPDATE SET
        value = EXCLUDED.value,
        updated_at = NOW()
    `;
    return NextResponse.json({
      timings,
      contact,
      homa_test,
      announcement,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to save voice settings" },
      { status: 500 }
    );
  }
}
