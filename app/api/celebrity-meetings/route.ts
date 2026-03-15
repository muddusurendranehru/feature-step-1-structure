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
      SELECT id, name, meeting_date, description, type, photo_urls, created_at
      FROM celebrity_meetings
      ORDER BY meeting_date DESC
      LIMIT 100
    `;
    return NextResponse.json(rows);
  } catch (e) {
    console.error(e);
    const isMissingTable = (err: unknown) =>
      (err as { code?: string })?.code === "42P01" ||
      String((err as Error)?.message).includes("celebrity_meetings");
    if (isMissingTable(e)) {
      return NextResponse.json(
        {
          error: "Table celebrity_meetings not set up. Run docs/schema-celebrity-meetings.sql in Neon SQL editor.",
          code: "TABLE_MISSING",
        },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: "Failed to fetch celebrity/meetings" },
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
    const { name, meeting_date, description, type, photo_urls } = body as {
      name: string;
      meeting_date: string;
      description?: string;
      type: string;
      photo_urls?: string[];
    };
    if (!name || !meeting_date) {
      return NextResponse.json(
        { error: "name and meeting_date required" },
        { status: 400 }
      );
    }
    const entryType =
      type === "meeting" ? "meeting" : "celebrity";
    const urls = Array.isArray(photo_urls) ? photo_urls.slice(0, 30) : [];
    const [row] = await sql`
      INSERT INTO celebrity_meetings (name, meeting_date, description, type, photo_urls)
      VALUES (${name}, ${meeting_date}, ${description ?? ""}, ${entryType}, ${urls})
      RETURNING id, name, meeting_date, description, type, photo_urls, created_at
    `;
    return NextResponse.json(row);
  } catch (e) {
    console.error(e);
    const isMissingTable = (err: unknown) =>
      (err as { code?: string })?.code === "42P01" ||
      String((err as Error)?.message).includes("celebrity_meetings");
    if (isMissingTable(e)) {
      return NextResponse.json(
        {
          error: "Table celebrity_meetings not set up. Run docs/schema-celebrity-meetings.sql in Neon SQL editor.",
          code: "TABLE_MISSING",
        },
        { status: 503 }
      );
    }
    const message =
      e instanceof Error ? e.message : "Failed to create entry";
    return NextResponse.json(
      { error: "Failed to create entry", detail: message },
      { status: 500 }
    );
  }
}
