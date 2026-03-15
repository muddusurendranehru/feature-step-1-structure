export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

/**
 * Health check for 24/7 monitoring and load balancers.
 * GET /api/health → { status: "ok" }
 */
export async function GET() {
  return NextResponse.json({ status: "ok" });
}
