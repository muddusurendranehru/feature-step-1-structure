-- Step 5: Run in Neon SQL editor (Database: ClinicFlow, Branch: production, Schema: public)
-- This app expects these exact column names. If your tables have different columns (e.g. camp_name, location, camp_date), drop them and run this.

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

-- If Join us form fails with "volunteers_donors_role_check" (or interest_check), run in Neon:
--   ALTER TABLE volunteers_donors DROP CONSTRAINT IF EXISTS volunteers_donors_role_check;
--   ALTER TABLE volunteers_donors DROP CONSTRAINT IF EXISTS volunteers_donors_interest_check;
