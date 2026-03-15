# What Actually Runs Today (Verified)

**For Grok / handoff.** Don't destroy success. Last verified: March 2026 (Step 7 branch).

---

## Verified from logs/screenshots

- **Dev server:** `npm run dev:local` → Local http://localhost:3006, Network http://192.168.0.200:3006, env from `.env.local`.
- **Voice:** `POST /api/elevenlabs` returns 200 (~3.8s) — user types in Ask AI modal → hears TTS reply (ElevenLabs).
- **Photos:** Medical camps upload to Cloudinary (unsigned preset); `secure_url` saved to Neon `photo_urls` array; displayed with Next `<Image>`.

---

## Feature status

| Feature | Status | How it works today | Where it lives |
|--------|--------|--------------------|----------------|
| **Neon Postgres (ClinicFlow DB)** | ✅ Live | Tables: `medical_camps`, `volunteers_donors`. Data saves & reads correctly. | Neon Console → Tables |
| **Next.js 15 App Router** | ✅ Live | All routes compile, SSR/CSR mix, responsive layout (flex-1 pt-16). | localhost:3006 / Render |
| **Clerk auth** | ✅ Live | Sign-in modal, `<SignedIn>`/`<SignedOut>`, admin gating on /medical-camps. | Clerk dashboard + app |
| **Admin upload form (medical camps)** | ✅ Live | Date, venue, description, multiple photos → upload to Cloudinary → save URLs to Neon (`photo_urls` array). | /medical-camps (after login) |
| **Volunteer/Donor form** | ✅ Live | Name, phone, email, interest, role → save to Neon `volunteers_donors`. | /join-us (no login needed) |
| **Donations page with UPI QR codes** | ✅ Live | Images load from /public/ (Google Pay, PhonePe, etc.). | /donations |
| **Floating "Ask AI" voice button** | ✅ Live | Fixed bottom-right; click → modal with text input → POST /api/elevenlabs → TTS reply (ElevenLabs + optional OpenAI chat). | Multiple pages (ClientLayout) |
| **Admin dashboard (/admin/dashboard)** | ✅ Live | Shows real camps & volunteers from Neon (cards/tables, loading skeletons). | /admin/dashboard (Clerk protected) |
| **Responsive mobile UI** | ✅ Live | Hamburger menu, stacking grids, readable on small screens. | All pages |
| **SEO + error/loading states** | ✅ Live | Metadata template, custom error.tsx, loading.tsx skeletons. | Global |
| **Health check endpoint** | ✅ Live | GET /api/health → `{ "status": "ok" }`. | /api/health |

---

## What is not yet real / placeholder

- **Edit/Delete in admin dashboard** → placeholder buttons (console.log/alert).
- **Doctor-training content** → page exists but mostly empty (add real copy next).
- **Other placeholder pages** (education, community, investors, content-studio) → titles only.
- **Voice STT (mic)** → optional; uses /api/voice/stt if configured; not required for Ask AI flow.

Everything else in the table is real, connected, and saving data.

---

## How to verify changes (when Review button is gone)

- **See what changed:** Source Control (branch icon) → click changed files to view diff.
- **Voice parrot fix:** Open `components/VoiceAssistantModal.tsx` and `app/api/elevenlabs/route.ts`; confirm modal sends `{ text, messages: fullHistory }` and API builds `[ system, ...previousMessages, { user, currentMessage } ]`.
- **Test flow:** Ask AI → say "Hello" → then "Surendra" → must say "Thank you Surendra, phone number?" (no repeated greeting). Then "9963721999" → "Perfect, your area?"

---

## Branch

- Step 7 work lives on: `feature/step-7-voice-cloudinary`.
- Push: `git push origin feature/step-7-voice-cloudinary`.
