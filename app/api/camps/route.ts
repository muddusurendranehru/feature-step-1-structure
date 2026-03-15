export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { sql } from "@/lib/neon";

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL not configured" },
        { status: 503 }
      );
    }
    const rows = await sql`
      SELECT id, date, venue, description, photo_urls, created_at
      FROM medical_camps
      ORDER BY date DESC
      LIMIT 50
    `;
    return NextResponse.json(rows);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch camps" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    let userId: string | null = null;
    try {
      const a = await auth();
      userId = a.userId;
    } catch {
      // Clerk not configured or auth failed
    }
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL not configured" },
        { status: 503 }
      );
    }
    const body = await request.json();
    const { date, venue, description, photo_urls } = body as {
      date: string;
      venue: string;
      description?: string;
      photo_urls?: string[];
    };
    if (!date || !venue) {
      return NextResponse.json(
        { error: "date and venue required" },
        { status: 400 }
      );
    }
    const urls = Array.isArray(photo_urls) ? photo_urls : [];
    const [row] = await sql`
      INSERT INTO medical_camps (date, venue, description, photo_urls)
      VALUES (${date}, ${venue}, ${description ?? ""}, ${urls})
      RETURNING id, date, venue, description, photo_urls, created_at
    `;
    return NextResponse.json(row);
  } catch (e) {
    console.error(e);
    const message =
      e instanceof Error ? e.message : "Failed to create camp";
    return NextResponse.json(
      { error: "Failed to create camp", detail: message },
      { status: 500 }
    );
  }
}
