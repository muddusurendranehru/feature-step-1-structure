# Clerk production keys — GitHub & Render (skip local Clerk)

## Why localhost fails with `pk_live_`

`pk_live_` / `sk_live_` are for your **production domain** (e.g. `homahealthcarecenter.in` or your Render URL). Clerk validates the browser **origin**. **`http://localhost:3000` is not allowed** for production keys, so you see **“Publishable key not valid”** when running Next.js locally with live keys.

**Local dev:** use **Development** keys (`pk_test_` / `sk_test_`) in `.env.local`, or don’t run the app locally.

**Production:** use **Production** keys only in the **hosting provider’s environment** (Render), not in `.env.local` on your laptop for localhost.

---

## What to put on Render (production)

In Render → your Web Service → **Environment**, add:

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Production publishable key (`pk_live_…`) from Clerk → API Keys → **Production** |
| `CLERK_SECRET_KEY` | Production secret (`sk_live_…`) |
| `DATABASE_URL` | Neon connection string (pooler) |
| `NEXT_PUBLIC_APP_URL` | Your public site URL, e.g. `https://your-app.onrender.com` or `https://homahealthcarecenter.in` |

Redeploy after saving env vars.

In **Clerk Dashboard** → **Configure** → **Domains**: add the same hostname you use in production (Render URL or custom domain).

---

## GitHub

- **Do not commit** `.env.local` (already in `.gitignore`).
- **Do not commit** production secrets. Use Render (or GitHub Actions secrets for CI) only.
- Push code without secrets; configure keys only on Render.

---

## Commit message example

```text
chore: document Clerk production env for Render (no secrets in repo)
```

---

## Quick reference

| Where | Clerk keys |
|-------|------------|
| Laptop + `localhost` | Development `pk_test_` / `sk_test_` only |
| Render / production URL | Production `pk_live_` / `sk_live_` |
