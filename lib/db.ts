import { neon } from "@neondatabase/serverless";

/**
 * Neon serverless SQL client. Requires `DATABASE_URL` in `.env.local`.
 * @see `lib/neon.ts` re-export for legacy imports
 */
export const sql = neon(process.env.DATABASE_URL!);

/*
  Neon schema (run in Neon SQL editor):

  CREATE TABLE IF NOT EXISTS medical_camps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date DATE NOT NULL,
    venue TEXT NOT NULL,
    description TEXT,
    photo_urls TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS volunteers_donors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    interest TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  -- See docs/schema-voice-settings.sql for voice_settings (id SERIAL, key VARCHAR(100) UNIQUE, value TEXT, updated_at).
  -- See docs/schema-celebrity-meetings.sql for celebrity_meetings (id UUID, name, meeting_date, description, type, photo_urls TEXT[], created_at).
*/
