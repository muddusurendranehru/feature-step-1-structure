"use client";

import { useState, useEffect, useRef } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { BlogCardImage } from "@/components/ui/BlogCardImage";

type Entry = {
  id: string;
  name: string;
  meeting_date: string;
  description: string | null;
  type: "celebrity" | "meeting";
  photo_urls: string[];
  created_at: string;
};

const MAX_PHOTOS = 20;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024; // 10MB total
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function CelebritiesMeetingsContent() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"celebrity" | "meeting">("celebrity");
  const [files, setFiles] = useState<FileList | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [schemaMissing, setSchemaMissing] = useState<string | null>(null);
  const successSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/celebrity-meetings")
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok && (data.code === "TABLE_MISSING" || data.error?.includes("celebrity_meetings"))) {
          setSchemaMissing(data.error || "Database table not set up.");
          return [];
        }
        setSchemaMissing(null);
        return Array.isArray(data) ? data : [];
      })
      .then(setEntries)
      .catch(() => setEntries([]))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSubmitting(true);
    try {
      const photo_urls: string[] = [];
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

      if (files?.length) {
        if (!cloudName || !uploadPreset) {
          setMessage({ type: "err", text: "Photo upload is not configured (Cloudinary)." });
          setSubmitting(false);
          return;
        }
        if (files.length > MAX_PHOTOS) {
          setMessage({
            type: "err",
            text: `Maximum ${MAX_PHOTOS} photos allowed. You selected ${files.length}.`,
          });
          setSubmitting(false);
          return;
        }
        let totalSize = 0;
        for (let i = 0; i < files.length; i++) totalSize += files[i].size;
        if (totalSize > MAX_TOTAL_BYTES) {
          setMessage({
            type: "err",
            text: `Total size too large. Use smaller images or fewer files (under ${MAX_TOTAL_BYTES / 1024 / 1024}MB total).`,
          });
          setSubmitting(false);
          return;
        }
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (!ALLOWED_TYPES.includes(file.type)) {
            setMessage({ type: "err", text: "Only PNG and JPG images are allowed." });
            setSubmitting(false);
            return;
          }
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", uploadPreset);
          const uploadRes = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            { method: "POST", body: formData }
          );
          const uploadData = await uploadRes.json().catch(() => ({}));
          const secureUrl = uploadData.secure_url;
          if (uploadRes.ok && typeof secureUrl === "string") {
            photo_urls.push(secureUrl);
          } else {
            setMessage({
              type: "err",
              text: uploadData.error?.message || "Photo upload failed. Try again.",
            });
            setSubmitting(false);
            return;
          }
        }
      }

      const res = await fetch("/api/celebrity-meetings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          meeting_date: meetingDate,
          description: description.trim() || undefined,
          type,
          photo_urls,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        const detail = data.detail ?? data.error;
        throw new Error(typeof detail === "string" ? detail : "Failed");
      }
      setEntries((prev) => [data, ...prev]);
      setName("");
      setMeetingDate("");
      setDescription("");
      setFiles(null);
      setMessage({ type: "ok", text: "Entry saved. It will appear below." });
      setTimeout(() => successSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (err) {
      setMessage({
        type: "err",
        text: err instanceof Error ? err.message : "Something went wrong.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const celebrities = entries.filter((e) => e.type === "celebrity");
  const meetings = entries.filter((e) => e.type === "meeting");

  return (
    <>
      {schemaMissing && (
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200">
            <p className="font-medium">Database setup required</p>
            <p className="mt-1 text-sm">{schemaMissing}</p>
            <p className="mt-2 text-sm opacity-90">
              Open your Neon project → SQL Editor → paste and run the contents of{" "}
              <code className="rounded bg-amber-200/50 px-1 dark:bg-amber-900/50">
                docs/schema-celebrity-meetings.sql
              </code>
              .
            </p>
          </div>
        </div>
      )}
      {/* Admin form — only when signed in */}
      <SignedIn>
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="mb-6 text-xl font-bold text-primary">Add Celebrity or Meeting</h2>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Celebrity or event name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Meeting date
                </label>
                <input
                  type="date"
                  value={meetingDate}
                  onChange={(e) => setMeetingDate(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as "celebrity" | "meeting")}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:max-w-xs"
              >
                <option value="celebrity">Celebrity</option>
                <option value="meeting">Meeting</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description (optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Short note or quote"
              />
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Photos (up to {MAX_PHOTOS}, 10MB total)
              </label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                multiple
                onChange={(e) => setFiles(e.target.files)}
                className="w-full text-sm text-gray-600 dark:text-gray-400"
              />
            </div>
            {message && (
              <div
                className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                  message.type === "ok"
                    ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/50 dark:text-green-200"
                    : "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200"
                }`}
              >
                <span className="font-medium">{message.type === "ok" ? "✓ Success — " : ""}</span>
                {message.text}
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 rounded-xl bg-primary px-5 py-3 font-medium text-white hover:bg-primary-dark disabled:opacity-50"
            >
              {submitting ? "Saving…" : "Add entry"}
            </button>
          </form>
        </section>
      </SignedIn>
      <SignedOut>
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm text-gray-500 dark:text-gray-400">
          <SignInButton mode="modal">Sign in</SignInButton> to add celebrities or meetings.
        </div>
      </SignedOut>

      {/* Celebrities Who Trust HOMA Clinics */}
      <section ref={successSectionRef} className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:mb-16 md:text-4xl">
            Celebrities Who Trust HOMA Clinics
          </h2>
          {loading ? (
            <p className="text-center text-gray-500 dark:text-gray-400">Loading…</p>
          ) : celebrities.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No celebrity entries yet. Add one using the form above when signed in.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
              {celebrities.map((entry) => (
                <div
                  key={entry.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl dark:bg-gray-800"
                >
                  <div className="relative h-64 md:h-72">
                    <BlogCardImage
                      src={entry.photo_urls?.[0] ?? "/blog/placeholder.svg"}
                      alt={entry.name}
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-primary">{entry.name}</h3>
                    {entry.description && (
                      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                        {entry.description}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(entry.meeting_date)}
                      {entry.photo_urls?.length > 0 && ` • ${entry.photo_urls.length} photo(s)`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Meetings (from same form) */}
      <section className="bg-gray-100 px-4 py-16 dark:bg-gray-800 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:mb-16 md:text-4xl">
            Celebrity & Team Meetings
          </h2>
          {loading ? (
            <p className="text-center text-gray-500 dark:text-gray-400">Loading…</p>
          ) : meetings.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No meeting entries yet. Add one using the form above when signed in.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {meetings.map((entry) => (
                <div
                  key={entry.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-900"
                >
                  <div className="relative h-48 md:h-56">
                    <BlogCardImage
                      src={entry.photo_urls?.[0] ?? "/blog/placeholder.svg"}
                      alt={entry.name}
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-primary">{entry.name}</h3>
                    <p className="mb-2 text-gray-700 dark:text-gray-300">
                      {formatDate(entry.meeting_date)}
                    </p>
                    {entry.description && (
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {entry.description}
                      </p>
                    )}
                    {entry.photo_urls?.length > 0 && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {entry.photo_urls.length} photo(s)
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
