# Environment & Troubleshooting — "Env and Mess" Guide

This doc explains environment variables and fixes for the main problems you might see.

---

## 1. Environment variables (what they do)

| Variable | Required for | Where to get it |
|----------|--------------|------------------|
| **DATABASE_URL** | Join us form save, Medical camps list/save, Supporters list | Neon dashboard → Connection string (pooler recommended) |
| **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY** | Admin sign-in; Medical camps **upload form** | Clerk dashboard → API Keys |
| **CLERK_SECRET_KEY** | Same as above (server-side auth) | Clerk dashboard → API Keys |

- **File name must be `.env.local`** (with a dot before `local`).  
  Next.js does **not** load `.envlocal` — if the file is misnamed, nothing from it is used and you get "mess" (DB not connecting, etc.).
- **Variable name is `DATABASE_URL`** (not `DATABASE`). The app only reads `DATABASE_URL`.
- **No quotes** around values in `.env.local`. Write `DATABASE_URL=postgresql://...` not `DATABASE_URL='postgresql://...'`. Quotes can break the connection.
- Never commit real values. `.env.local` is gitignored; use `.env.example` as a template only.

---

## 2. Common "mess" problems and fixes

### 2.1 404 — "This page could not be found"

- **Cause:** Opening a path that doesn’t exist or typing the URL wrong (e.g. searching "join-us" on Google instead of your app).
- **Fix:**
  - Start the app: `npm run dev` (or `PORT=3001 npm run dev` if you use port 3001).
  - Open **http://localhost:3000** or **http://localhost:3001** in the browser.
  - Use the **nav or footer** links (Join us, Donations, Medical Camps) instead of typing paths.
  - Correct paths: `/join-us`, `/donations`, `/medical-camps` (no trailing slash needed).

### 2.2 "Sign in (Clerk) to add new camps. Configure NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to enable."

- **Cause:** Clerk is not configured. The app is built to work without Clerk; when the key is missing, the Medical Camps **admin form** is hidden and this message is shown.
- **Fix (if you want the admin upload form):**
  1. Create an app at [Clerk](https://dashboard.clerk.com).
  2. In **API Keys**, copy **Publishable key** and **Secret key**.
  3. In your project root, add to **`.env.local`**:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
     CLERK_SECRET_KEY=sk_test_...
     ```
  4. Restart dev server and sign in; the "Add camp" form will appear on `/medical-camps`.
- **If you don’t use Clerk:** The message is expected. The public "Past camps" grid still works; only adding new camps is disabled.

### 2.3 Join us form — submit does nothing or error

- **Cause:** No database or wrong `DATABASE_URL`; or tables not created in Neon.
- **Fix:**
  1. In **`.env.local`**, set `DATABASE_URL` to your Neon connection string (from Neon dashboard).
  2. In the **Neon SQL editor** (Database **ClinicFlow**, branch **production**, schema **public**), run the schema once:  
     Copy from **`docs/schema-step5.sql`** and execute (creates `volunteers_donors` and `medical_camps`).
  3. **Column names must match.** This app expects:
     - **medical_camps:** `id`, `date`, `venue`, `description`, `photo_urls`, `created_at` (not camp_name, location, camp_date, etc.).
     - **volunteers_donors:** `id`, `name`, `phone`, `email`, `interest`, `role`, `created_at`.
     If your tables have different columns, drop them and run `schema-step5.sql` again (0 rows is fine).
  4. Restart dev server and submit the form again. You should see "Thank you — we'll contact you soon!" and the supporters list (if any) below.

### 2.4 Donations page — UPI QR 404s or placeholder only

- **Cause:** The app requests `/qr-googlepay.png`, `/qr-phonepe.png`, `/qr-paytm.png`, `/qr-upi.png` from `public/`. If those files were missing, the server returned 404 and the console showed "Failed to load resource: 404 (Not Found)". Placeholder PNGs are now in `public/` so 404s are gone; they are tiny transparent images until you add real QRs.
- **Fix (to use real QR codes):**
  1. Export or generate real UPI QR images (e.g. from your bank/UPI app).
  2. Save them in **`public/`** with these exact names (overwrite the placeholders):
     - `qr-googlepay.png`
     - `qr-phonepe.png`
     - `qr-paytm.png`
     - `qr-upi.png`
  3. Refresh the Donations page; the real QR images will load.

### 2.5 Medical Camps — "No camps yet" and can’t add any

- **Possible causes:**
  - **No Clerk:** Without `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, the add form is hidden (see 2.2).
  - **No DB/tables:** Without `DATABASE_URL` or without running `schema-step5.sql`, the list is empty and POST will fail (see 2.3).
- **Fix:** Configure Clerk if you want the upload form; always set `DATABASE_URL` and run the schema for list + save to work.

### 2.6 "password authentication failed for user 'neondb_owner'"

- **Cause:** The **password in `DATABASE_URL` is wrong or outdated**. Neon may have rotated it, or the connection string was copied incorrectly (missing character, extra space). The app must use the variable name **`DATABASE_URL`** (not `DATABASE`).
- **Fix:**
  1. Open [Neon Console](https://console.neon.tech) → your project → **Connection details** (or **Dashboard**).
  2. Copy the **connection string** again. Prefer the **pooler** (e.g. `...pooler....neon.tech/YourDbName?sslmode=require`). To avoid Node/pg SSL warnings, you can use `sslmode=verify-full` instead of `sslmode=require`.
  3. If Neon shows a **password** separately, copy it and replace only the password part in the URL (between the first `:` and `@` in `postgresql://user:PASSWORD@host/...`).
  4. In **`.env.local`** set exactly: `DATABASE_URL=<paste the full string>`. No quotes, no spaces before/after `=`.
  5. **Restart the dev server** (stop with Ctrl+C, then `npm run dev`). Env is loaded only at startup.
  6. Try **Save camp** again.

**Connection diagnosis table (when `node test-db.js` or app fails):**

| Error | Cause | Fix |
|-------|--------|-----|
| `password authentication failed` | Wrong password in DATABASE_URL | Neon dashboard → re-copy connection string (reveal password) |
| `database "ClinicFlow" does not exist` | Wrong DB name (case-sensitive) | Neon → Databases → exact name `ClinicFlow` |
| `ENOTFOUND ep-xxx...neon.tech` | Wrong host / typo in URL | Re-copy full string from Neon |
| `DATABASE_URL is undefined` | .env.local missing or wrong name | File must be `.env.local` in project root (not .env.local.txt) |
| `SSL connection required` | Missing ssl in URL | URL must end with `?sslmode=require` or `?sslmode=verify-full` |
| `too many connections` | Direct URL under load | Use **Pooled** connection string from Neon |

**Quick fix checklist for DATABASE_URL:**
1. In `.env.local`, is the variable name exactly `DATABASE_URL`?
2. No space before or after `=`?
3. No quotes around the URL?
4. Does the URL end with `/ClinicFlow?sslmode=require` (or `verify-full`)?
5. Did you save `.env.local` after editing?
6. Restart dev server / re-run `node test-db.js` after changes.

### 2.7 Medical Camps — "Failed to create camp" (red error on Save camp)

- **Possible causes:**
  - **Photos too large:** Base64 images can exceed the server body limit. The UI blocks over 5MB total photos; use smaller or fewer images.
  - **Not signed in:** API returns 401; sign in with Clerk and try again.
  - **Database:** Missing `DATABASE_URL`, wrong connection string, or `medical_camps` table not created (run `docs/schema-step5.sql` in Neon).
- **Fix:** The form now shows the **actual error message** (e.g. "Unauthorized", "DATABASE_URL not configured"). Use that to fix env or DB; keep camp photos under ~5MB total.

---

## 3. Quick checklist (to get out of the "mess")

1. **Env file**
   - [ ] File is named **`.env.local`** (not `.envlocal`) in the project root.
   - [ ] Contains at least **`DATABASE_URL`** (Neon connection string).

2. **Database**
   - [ ] **`docs/schema-step5.sql`** has been run once in the Neon SQL editor.
   - [ ] `volunteers_donors` and `medical_camps` tables exist.

3. **App**
   - [ ] `npm run dev` is running; you open **http://localhost:3000** (or **http://localhost:3001** if you use that port).
   - [ ] You use **nav/footer** links to open Join us, Donations, Medical Camps (no Google search, no wrong path).

4. **Optional (Clerk)**
   - [ ] If you want the Medical Camps **admin form**, add Clerk keys to `.env.local` and restart.

5. **Optional (QR codes)**
   - [ ] To show real UPI QR codes on Donations, add `qr-googlepay.png` etc. under `public/`.

---

## 4. Security reminder

- **`.env.local`** is in `.gitignore` — never commit it. Use **pooled** connection string and **sslmode=require** (or verify-full) in the URL.
- Never hardcode the password in code; always use `process.env.DATABASE_URL`. Never paste the full DATABASE_URL in chat or Discord (it contains the password).

## 5. Summary

- **Env:** Use **`.env.local`** with **`DATABASE_URL`** (and Clerk keys if you want admin camps). No real secrets in repo.
- **404s:** Use the app at **localhost:3000** and the nav/footer links.
- **Clerk message on Medical Camps:** Expected until you set Clerk keys; rest of the app works without them.
- **Join us form:** Works once `DATABASE_URL` is set and schema is run.
- **Donations QR “mess”:** Add real QR images in `public/` with the expected filenames; not an env issue.
- **Local connection test:** Run `node test-db.js` to verify DATABASE_URL; delete `test-db.js` after it works.
- **Schema:** `medical_camps` and `volunteers_donors` per `docs/schema-step5.sql` (no camp_id FK in this project).
