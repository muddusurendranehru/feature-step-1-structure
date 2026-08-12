export const dynamic = "force-dynamic";

import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL not configured" },
        { status: 503 }
      );
    }

    const sql = neon(process.env.DATABASE_URL);
    const body = await request.json();
    const { fullName, phone, city, nmcNumber } = body as {
      fullName: string;
      phone: string;
      city: string;
      nmcNumber: string;
    };

    if (!fullName || !phone || !city || !nmcNumber) {
      return NextResponse.json(
        { error: "fullName, phone, city, nmcNumber are all required" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO franchise_applications (full_name, phone, city, nmc_number)
      VALUES (${fullName.trim()}, ${phone.trim()}, ${city.trim()}, ${nmcNumber.trim()})
    `;

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("/api/apply error:", e);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
