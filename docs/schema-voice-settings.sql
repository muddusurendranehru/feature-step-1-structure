-- Voice settings table (run in Neon SQL Editor: ClinicFlow, production, public)
-- STEP 3: After running, verify: voice_settings exists, 4 rows, medical_camps & volunteers_donors still exist.

CREATE TABLE IF NOT EXISTS voice_settings (
  id         SERIAL PRIMARY KEY,
  key        VARCHAR(100) UNIQUE NOT NULL,
  value      TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add default clinic info rows
INSERT INTO voice_settings (key, value) VALUES
('timings', 'Monday to Saturday, 9 AM to 6 PM'),
('contact', 'Contact Suresh staff for appointments'),
('homa_test', 'HOMA is Insulin Resistance test. Fast overnight 8 hours before blood test.'),
('announcement', 'Free diabetes camp coming soon!')
ON CONFLICT (key) DO NOTHING;

-- Verify: run these in Neon SQL Editor after the above
-- SELECT * FROM voice_settings;
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;
