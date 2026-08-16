import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      city,
      state,
      type,
      mci_number,
      specialization,
      experience_years,
      lab_name,
      investment_budget,
      message,
    } = body;

    // Basic validation
    if (!name || !phone || !type) {
      return NextResponse.json(
        { error: "Name, phone and type are required" },
        { status: 400 }
      );
    }

    const sql = neon(process.env.DATABASE_URL!);

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS franchise_applications (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        city TEXT,
        state TEXT,
        type TEXT NOT NULL,
        mci_number TEXT,
        specialization TEXT,
        experience_years INTEGER,
        lab_name TEXT,
        investment_budget TEXT,
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Insert application
    const result = await sql`
      INSERT INTO franchise_applications
        (name, phone, email, city, state, type, mci_number, specialization, experience_years, lab_name, investment_budget, message)
      VALUES
        (${name}, ${phone}, ${email || null}, ${city || null}, ${state || null}, ${type},
         ${mci_number || null}, ${specialization || null}, ${experience_years || null},
         ${lab_name || null}, ${investment_budget || null}, ${message || null})
      RETURNING id
    `;

    return NextResponse.json({
      success: true,
      id: result[0].id,
      message: "Application saved successfully",
    });
  } catch (error) {
    console.error("Franchise application error:", error);
    return NextResponse.json(
      { error: "Failed to save application. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}
