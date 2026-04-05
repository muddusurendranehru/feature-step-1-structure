/**
 * Clerk-hosted auth URLs (App Router). Route groups do not change the path.
 */
export const SIGN_IN_URL = "/sign-in";
export const SIGN_UP_URL = "/sign-up";

/** Paths that require a signed-in user (mirror `middleware.ts`). */
export const PROTECTED_PATH_PREFIXES = ["/dashboard", "/admin"] as const;
