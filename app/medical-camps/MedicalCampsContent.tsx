"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

const patientCampImages = [
  { src: "/camp26b.png", alt: "Camp" },
  { src: "/camp26mar1.png", alt: "Camp" },
  { src: "/camp26marc.png", alt: "Camp" },
];

type Camp = {
  id: string;
  date: string;
  venue: string;
  description: string | null;
  photo_urls: string[];
  created_at: string;
};

function formatCampDate(iso: string): string {
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

export function MedicalCampsContent() {
  const [camps, setCamps] = useState<Camp[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/camps")
      .then((r) => r.json())
      .then((data) => (Array.isArray(data) ? setCamps(data) : []))
      .catch(() => setCamps([]))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSubmitting(true);
    try {
      const photo_urls: string[] = [];
      const maxTotalBytes = 5 * 1024 * 1024; // 5MB total for photos
      if (files?.length) {
        let totalSize = 0;
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        for (let i = 0; i < files.length; i++) {
          totalSize += files[i].size;
        }
        if (totalSize > maxTotalBytes) {
          setMessage({
            type: "err",
            text: "Total photo size too large. Use smaller images or fewer files (under 5MB total).",
          });
          setSubmitting(false);
          return;
        }
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (!allowedTypes.includes(file.type)) {
            setMessage({ type: "err", text: "Only PNG and JPG images are allowed." });
            setSubmitting(false);
            return;
          }
          const reader = new FileReader();
          const dataUrl = await new Promise<string>((res) => {
            reader.onload = () => res(reader.result as string);
            reader.readAsDataURL(file);
          });
          photo_urls.push(dataUrl);
        }
      }
      const res = await fetch("/api/camps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          venue,
          description: description || undefined,
          photo_urls,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        const detail = data.detail || data.error;
        throw new Error(typeof detail === "string" ? detail : "Failed");
      }
      setCamps((prev) => [data, ...prev]);
      setDate("");
      setVenue("");
      setDescription("");
      setFiles(null);
      setMessage({ type: "ok", text: "Camp saved. Photo previews below." });
    } catch (err) {
      setMessage({
        type: "err",
        text: err instanceof Error ? err.message : "Something went wrong",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SignedIn>
        <Card className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Admin: Add camp
          </h2>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Date</span>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Venue</span>
              <input
                type="text"
                required
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Description</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Photos</span>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                multiple
                onChange={(e) => setFiles(e.target.files)}
                className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                PNG or JPG only. Use smaller files (e.g. under 1MB each) to avoid errors. Stored with the camp (not in public folder).
              </span>
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
            <Button type="submit" disabled={submitting}>
              {submitting ? "Saving…" : "Save camp"}
            </Button>
          </form>
        </Card>
      </SignedIn>
      <SignedOut>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <p className="text-sm text-gray-500">Sign in to add new camps.</p>
          <SignInButton mode="modal" forceRedirectUrl="/medical-camps">
            <button
              type="button"
              className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
            >
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="modal" forceRedirectUrl="/medical-camps">
            <button
              type="button"
              className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Sign up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

      <h2 id="past-camps" className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Past camps
      </h2>
      {loading ? (
        <p className="text-gray-500">Loading…</p>
      ) : camps.length === 0 ? (
        <p className="text-gray-500">No camps yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {camps.map((camp) => (
            <Card key={camp.id}>
              <p className="text-sm font-medium text-primary">{formatCampDate(camp.date)}</p>
              <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                {camp.venue}
              </h3>
              {camp.description && (
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {camp.description}
                </p>
              )}
              {camp.photo_urls?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {camp.photo_urls.slice(0, 6).map((url, i) => (
                    <div
                      key={i}
                      className="h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700"
                    >
                      {url.startsWith("data:") ? (
                        <img
                          src={url}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-full w-full bg-gray-200"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      <h2 id="patients" className="mb-4 mt-12 text-lg font-semibold text-gray-900 dark:text-white">
        Patients & camp impact
      </h2>
      <div className="grid gap-4 py-6 sm:grid-cols-1 md:grid-cols-3">
        {patientCampImages.map((img) => (
          <Card key={img.src} className="overflow-hidden p-0">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
