# All the mess — one place

Everything that goes wrong and how to fix it. Use this when something breaks.

---

## What was the mess (DATABASE_URL override) — summary

**What happened:** The app showed `password authentication failed for user 'neondb_owner'` even though `.env.local` had the correct URL with `myapp_user`. **Cause:** Windows had a **User (or System) environment variable** named `DATABASE_URL` set to the old `neondb_owner` connection string. When you run `npm run dev`, Node loads that Windows variable first; it overrode the value from `.env.local`, so the app kept using the wrong (old) credentials.

**Fix (what we did):**
1. **Delete** the `DATABASE_URL` variable from Windows Environment Variables (Win + R → `sysdm.cpl` → Advanced → Environment Variables → User variables → select DATABASE_URL → Delete → OK).
2. **Restart VS Code** (or at least close and reopen the terminal) so the env is refreshed.
3. Run `npm run dev` from the project folder. The app now uses only `.env.local` and the DB connection works (e.g. "Camp saved. Photo previews below." on Medical Camps).

**If you can’t delete the Windows variable:** Use `npm run dev:local` instead of `npm run dev`; that script loads `.env.local` first so it overrides the system value.

**Don’t destroy success:** Don’t add `DATABASE_URL` back to Windows. Keep the real connection string only in the project’s `.env.local`.

**Project rules (also in `.cursor/rules/env-and-db.mdc`):**
1. Always start with: `npm run dev:local`
2. Never use: `npm run dev` (reads wrong Windows variable)
3. Never touch: `neondb_owner` (that's your diet plan)
4. Never commit: `.env.local`; ClinicFlow = `myapp_user`; never set `DATABASE_URL` in Windows

---

## The .env.local file (root cause of most mess)

- **Filename:** Must be **`.env.local`** in the project root. Not `.env`, not `.envlocal`, not `.env.local.txt`.
- **Variable name:** **`DATABASE_URL`** — not `DATABASE`. The app only reads `DATABASE_URL`.
- **Format:** One line per variable. No quotes. No spaces around `=`.

**Correct:**
```
DATABASE_URL=postgresql://neondb_owner:YOUR_PASSWORD@ep-xxx-pooler.region.aws.neon.tech/ClinicFlow?sslmode=require
```

**Wrong:**
```
DATABASE='postgresql://...'     ← wrong variable name + quotes
DATABASE_URL = postgresql://... ← space around =
```

**Quick fix checklist:**
1. Variable is exactly `DATABASE_URL`?
2. No space before or after `=`?
3. No quotes around the URL?
4. URL ends with `/ClinicFlow?sslmode=require` (or `?sslmode=verify-full`)?
5. Did you save the file?
6. After any change: restart dev server (`npm run dev`) or re-run `node test-db.js`.

---

## Neon database (ClinicFlow)

- **Where:** [console.neon.tech](https://console.neon.tech) → your project.
- **Database name:** **ClinicFlow** (case-sensitive — not `clinicflow`).
- **Branch:** production. **Schema:** public.
- **Connection string:** Use the **Pooled** (pooler) URL from Connection details. Do not use the direct URL for the app.

**If you get "password authentication failed for user 'neondb_owner'":**
1. Neon dashboard → Connection details.
2. Copy the connection string again (or reset the database password and copy the new string).
3. In `.env.local`: replace the whole `DATABASE_URL=...` line with the new string. No quotes.
4. Save. Restart dev server. Try again.

**If you get "database ClinicFlow does not exist":**  
Check the database name in Neon → Databases. It must be exactly `ClinicFlow`.

---

## Schema (tables the app expects)

Run **`docs/schema-step5.sql`** in the Neon SQL editor (ClinicFlow, production, public). If your tables already exist with different column names (e.g. camp_name, location, camp_date), drop them first:

```sql
DROP TABLE IF EXISTS medical_camps;
DROP TABLE IF EXISTS volunteers_donors;
```

Then run the full contents of `docs/schema-step5.sql`.

**Exact columns this app uses:**

| Table | Columns |
|-------|---------|
| **medical_camps** | id, date, venue, description, photo_urls, created_at |
| **volunteers_donors** | id, name, phone, email, interest, role, created_at |

No `camp_id` in volunteers_donors in this project. Tables are independent.

---

## test-db.js (local connection test)

- **What:** A script that loads `.env.local` and connects to Neon with `pg`. Confirms DATABASE_URL works.
- **Run:** `node test-db.js` (from project root).
- **Requires:** `pg` and `dotenv` installed (`npm install pg dotenv`).
- **Success output looks like:**
  ```
  ⏳ Connecting to Neon...
  ✅ Connected successfully!
  ✅ Basic ping: { ping: 1 }
  ✅ Connected to database: ClinicFlow
  ✅ Tables in ClinicFlow:
     - medical_camps
     - volunteers_donors
  ⏹️  Connection closed.
  ```
- **Delete:** Remove `test-db.js` after you’ve confirmed it works (it’s only for verification).
- **If you get "Cannot find module test-db.js":** The file was deleted. Recreate it or skip the test; fix DATABASE_URL and use the app instead.

**SSL warning when running test-db.js:**  
Safe to ignore. Or change the URL to use `sslmode=verify-full` instead of `sslmode=require`.

---

## Error → cause → fix (diagnosis table)

| Error | Cause | Fix |
|-------|--------|-----|
| `password authentication failed for user 'neondb_owner'` | Wrong password in DATABASE_URL | Neon → re-copy connection string or reset password |
| `database "ClinicFlow" does not exist` | Wrong DB name (case-sensitive) | Neon → Databases → use exact name `ClinicFlow` |
| `ENOTFOUND ep-xxx...neon.tech` | Wrong host / typo in URL | Re-copy full connection string from Neon |
| `DATABASE_URL is undefined` / `Cannot find module .env.local` | .env.local missing or wrong name | File must be `.env.local` in project root |
| `SSL connection required` | Missing ssl in URL | URL must end with `?sslmode=require` or `?sslmode=verify-full` |
| `too many connections` | Using direct URL under load | Use **Pooled** connection string from Neon |
| `Failed to create camp` (red on Save camp) | Often: wrong password, no DB, or not signed in | Check error text; fix DATABASE_URL or sign in with Clerk |
| `volunteers_donors_role_check` or `volunteers_donors_interest_check` (Join us form) | Neon table has a CHECK that rejects form values (e.g. "Camp helper", "Volunteer") | In Neon SQL editor run: `ALTER TABLE volunteers_donors DROP CONSTRAINT IF EXISTS volunteers_donors_role_check;` and same for `volunteers_donors_interest_check` if present. |
| `Unauthorized` on Save camp | Not signed in with Clerk | Sign in via nav; then Save camp again |
| `Only PNG and JPG images are allowed` | Wrong file type | Use PNG or JPG only for camp photos |
| `Total photo size too large` | Photos > 5MB total | Use smaller or fewer images (under 5MB total) |

---

## Dev server and ports

- **Start:** `npm run dev` (from project root).
- **URL:** If port 3000 is in use, Next.js uses 3001, 3002, etc. Use the URL shown in the terminal (e.g. http://localhost:3005).
- **"localhost is currently unable to handle this request":** Dev server is not running or you’re on the wrong port. Start `npm run dev` and open the URL it prints.
- **Env reload:** Next.js loads `.env.local` at startup. After changing it, restart the dev server (Ctrl+C, then `npm run dev`).

---

## Medical Camps page (Save camp, Past camps)

- **Admin form (Add camp):** Only visible when signed in with Clerk. Sign in via the nav.
- **"No camps yet":** Normal if no camps have been saved. After a successful Save camp, the new camp appears here.
- **"Saving..."** then error: Read the red message (e.g. password auth failed, Unauthorized). Fix DATABASE_URL or sign in, then try again.
- **Photos:** PNG or JPG only. Under 5MB total. Stored with the camp in the database (not in the public folder).

---

## Security

- **`.env.local`** is in `.gitignore`. Never commit it. Never paste the full DATABASE_URL (it contains the password) in chat or Discord.
- Always use **pooled** connection string and **sslmode=require** (or verify-full) in the URL.
- Never hardcode the password in code; use `process.env.DATABASE_URL`.

---

## One-page checklist (to get out of the mess)

1. [ ] File **`.env.local`** exists in project root (not .envlocal).
2. [ ] It contains **`DATABASE_URL=postgresql://...`** (no quotes, no spaces around =).
3. [ ] Neon project has database **ClinicFlow**, branch **production**.
4. [ ] **`docs/schema-step5.sql`** has been run in Neon SQL editor (tables medical_camps, volunteers_donors with correct columns).
5. [ ] Optional: run **`node test-db.js`** — should print Connected + database + tables; then delete test-db.js.
6. [ ] **`npm run dev`** is running; open the URL it shows (e.g. http://localhost:3000 or 3001).
7. [ ] For Medical Camps admin form: Clerk keys in `.env.local` and signed in.
8. [ ] After any .env.local change: restart dev server.

---

## PowerShell commands (Windows)

**Go to project folder:**
```powershell
Set-Location "C:\Users\pc\Desktop\feature-step-1-structure"
```
Or: `cd C:\Users\pc\Desktop\feature-step-1-structure`

**Test database connection** (only after fixing DATABASE_URL in .env.local):
```powershell
node test-db.js
```
- If you see `❌ Connection failed: password authentication failed` → fix DATABASE_URL in .env.local (get new connection string from Neon), then run again.
- **Do not** run `del test-db.js` until you see `✅ Connected successfully!` and the tables list. If you delete it first, you get `Cannot find module ... test-db.js`.

**Delete test file** (only after connection test succeeded):
```powershell
Remove-Item test-db.js
```
Or: `del test-db.js`

**Start dev server (use this every time):**
```powershell
npm run dev:local
```
Use **`npm run dev:local`** instead of `npm run dev` so the app always uses `DATABASE_URL` from `.env.local` (not the Windows system variable). Then open the URL shown. Stop with Ctrl+C.

**Permanently remove the Windows DATABASE_URL variable (so it never overrides):**
1. Press **Windows key + R** → type `sysdm.cpl` → Enter.
2. Open the **Advanced** tab → click **Environment Variables**.
3. Under **User variables** or **System variables**, find **DATABASE_URL**.
4. Select it → **Delete** → OK.
5. Restart the terminal (or PC) so env is refreshed. After that you can use `npm run dev` again if you prefer; until then, use `npm run dev:local`.

**If test-db.js is missing:** The file was deleted. Recreate it from the version in the repo (see project root) or skip the test and fix DATABASE_URL, then use the app.

---

## Where things live in this project

| Thing | Location |
|-------|----------|
| Env template | `.env.example` |
| Real env (do not commit) | `.env.local` |
| Schema to run in Neon | `docs/schema-step5.sql` |
| Full troubleshooting | `docs/ENV-AND-TROUBLESHOOTING.md` |
| This “all the mess” doc | `docs/ALL-THE-MESS.md` |
| DB connection in app | `lib/neon.ts` (uses DATABASE_URL) |
| Camps API | `app/api/camps/route.ts` |
| Volunteers API | `app/api/volunteers/route.ts` |
