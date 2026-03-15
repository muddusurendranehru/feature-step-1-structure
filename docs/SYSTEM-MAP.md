# Complete System Map — Who Calls What

Quick reference: frontend → API → DB / external services. Don’t destroy success.

---

## Complete Medical Franchise Ecosystem

Not just a clinic — a medical platform.

**Revenue streams:**
```
├── Patient consultations
├── Diet plans (nutri_bot)
├── Doctor training (₹30,000/course)
├── CME workshops
├── Franchise fees (60% revenue share)
├── Donations
└── Investor funding
```

**Platform stack:**
| Layer     | Technology |
|----------|------------|
| Frontend | Next.js 15 (HOMA Clinics website) |
| Voice    | ElevenLabs + OpenAI (Ranbir assistant) |
| Photos   | Cloudinary (camp documentation) |
| Auth     | Clerk (admin protection) |
| Database | Neon PostgreSQL (all 10 apps) |
| Deploy   | Render (live website) |
| AI       | OpenAI GPT (voice intelligence) |
| Content  | Grok (infographics, videos) |
| Payments | UPI QR codes (donations) |

---

**Neon (this app):** `DATABASE_URL` must point at **ClinicFlow** + **myapp_user** only.

```
PROJECT: homa_neon_center
BRANCH:  production

 1. 12 dimendion dr muddus mvp  → Business Suite
 2. AI_OCR1                     → Lab Reports
 3. ClinicFlow                  → HOMA Clinics ✅ OUR APP
 4. drmuddusmvp1                → Dr. Muddu MVP
 5. drug_trials_new_neon2       → Drug Trials
 6. healthmetrics1              → Empty (harmless)
 7. loan_lens                   → Finance
 8. neondb                      → Diet Plan
 9. nutri_bot1                  → Nutrition Bot
10. pcos_neon_new_1             → PCOS
11. postgres                    → System DB (Neon internal, ignore)
```

Never use any database path other than `/ClinicFlow` in this repo’s `DATABASE_URL`. Full rules: `docs/ALL-THE-MESS.md`.

---

## Medical camps

```
BROWSER (Frontend)
        ↓
app/medical-camps/MedicalCampsContent.tsx
        ↓ calls
/api/camps (GET → fetch camps, POST → save camp)
        ↓ calls
lib/neon.ts → DATABASE_URL → Neon ClinicFlow
        ↓ reads/writes
medical_camps table
```

---

## Join us (volunteers / donors)

```
BROWSER
        ↓
app/join-us/VolunteerForm.tsx
        ↓ calls
/api/volunteers (GET/POST)
        ↓
lib/neon.ts → DATABASE_URL → Neon ClinicFlow
        ↓
volunteers_donors table
```

---

## Voice assistant (Ask AI)

```
BROWSER
        ↓
components/VoiceAssistantModal.tsx
        ↓ calls
/api/elevenlabs (POST {text})
        ↓ calls
OpenAI → smart reply text
        ↓ calls
ElevenLabs TTS → audio
        ↓
browser plays audio
```

---

## Admin dashboard

```
BROWSER
        ↓
app/admin/dashboard/page.tsx
        ↓ calls
/api/camps + /api/volunteers (GET)
        ↓
lib/neon.ts → DATABASE_URL
        ↓
medical_camps + volunteers_donors
```

---

*See also: docs/SCIENCE.md (architecture), docs/WHAT-RUNS-TODAY.md (feature status).*
