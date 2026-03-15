"use client";

import { useState, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function AdminVoiceSettingsPage() {
  const [timings, setTimings] = useState("");
  const [contact, setContact] = useState("");
  const [homaTest, setHomaTest] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/voice-settings")
      .then((r) => r.json())
      .then((data: Record<string, string>) => {
        setTimings(data.timings ?? "");
        setContact(data.contact ?? "");
        setHomaTest(data.homa_test ?? "");
        setAnnouncement(data.announcement ?? "");
      })
      .catch(() => setMessage({ type: "err", text: "Could not load settings." }))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSaving(true);
    try {
      const res = await fetch("/api/voice-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timings,
          contact,
          homa_test: homaTest,
          announcement,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      setMessage({ type: "ok", text: "Voice settings saved. Ask AI will use the latest info." });
    } catch (err) {
      setMessage({
        type: "err",
        text: err instanceof Error ? err.message : "Something went wrong",
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <SignedOut>
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Voice Settings
          </h1>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Sign in to edit voice assistant settings.
          </p>
          <SignInButton mode="modal" forceRedirectUrl="/admin/voice-settings">
            <button
              type="button"
              className="rounded-xl bg-primary px-6 py-3 font-medium text-white hover:opacity-90"
            >
              Sign in
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="mx-auto max-w-2xl px-4 py-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Voice Settings
            </h1>
            <div className="flex gap-2">
              <Link
                href="/admin/dashboard"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                ← Dashboard
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Home
              </Link>
            </div>
          </div>

          <Card>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
              These values are used by the Ask AI voice assistant (Ranbir). Keep them short and clear.
            </p>
            {loading ? (
              <div className="h-64 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-800" />
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Clinic Timings
                  </span>
                  <textarea
                    value={timings}
                    onChange={(e) => setTimings(e.target.value)}
                    rows={2}
                    className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Staff Contact
                  </span>
                  <textarea
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    rows={2}
                    className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    HOMA Test Info
                  </span>
                  <textarea
                    value={homaTest}
                    onChange={(e) => setHomaTest(e.target.value)}
                    rows={3}
                    className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Today&apos;s Announcement
                  </span>
                  <textarea
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    rows={2}
                    className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </label>
                {message && (
                  <p
                    className={
                      message.type === "ok"
                        ? "text-primary"
                        : "text-red-600 dark:text-red-400"
                    }
                  >
                    {message.text}
                  </p>
                )}
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving…" : "Save"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </SignedIn>
    </>
  );
}
