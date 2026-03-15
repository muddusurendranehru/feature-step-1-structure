-- Run in Neon SQL editor (same DB as medical_camps).
-- Celebrities & meetings: name, meeting date, up to 20+ photos per entry.

CREATE TABLE IF NOT EXISTS celebrity_meetings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  meeting_date DATE NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('celebrity', 'meeting')),
  photo_urls TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Optional: index for listing by type and date
CREATE INDEX IF NOT EXISTS celebrity_meetings_type_date ON celebrity_meetings (type, meeting_date DESC);
