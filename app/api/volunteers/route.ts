import { NextResponse } from "next/server";
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
      SELECT id, name, phone, email, interest, role, created_at
      FROM volunteers_donors
      ORDER BY created_at DESC
      LIMIT 500
    `;
    return NextResponse.json(rows);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch volunteers" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL not configured" },
        { status: 503 }
      );
    }
    const body = await request.json();
    const { name, phone, email, interest, role: roleRaw } = body as {
      name: string;
      phone: string;
      email: string;
      interest: string;
      role: string;
    };
    const role = (roleRaw ?? "").toString().toLowerCase();
    if (!name || !phone || !email || !interest || !role) {
      return NextResponse.json(
        { error: "name, phone, email, interest, role required" },
        { status: 400 }
      );
    }
    await sql`
      INSERT INTO volunteers_donors (name, phone, email, interest, role)
      VALUES (${name}, ${phone}, ${email}, ${interest}, ${role})
    `;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    const message =
      e && typeof e === "object" && "constraint" in e
        ? (e as { constraint?: string; detail?: string }).detail ||
          `Constraint failed: ${(e as { constraint?: string }).constraint}`
        : e instanceof Error
          ? e.message
          : "Failed to submit";
    return NextResponse.json(
      { error: "Failed to submit", detail: message },
      { status: 500 }
    );
  }
}
