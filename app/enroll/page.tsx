"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

const COURSE_OPTIONS = [
  "CME Workshop",
  "Doctor Training",
  "Medical Camp",
  "Franchise",
];

export default function EnrollPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setSubmitting(true);
    try {
      const res = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          interest: "Enrollment",
          role: course,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.error || "Failed");
      setSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setCourse("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Enroll</h1>
          <p className="text-lg opacity-90">
            Register your interest — we&apos;ll get in touch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-4 py-12">
        <Card className="shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Enrollment form
          </h2>
          {success && (
            <p className="mt-3 text-primary">
              Thank you — we&apos;ll contact you soon!
            </p>
          )}
          {error && (
            <p className="mt-3 text-red-600 dark:text-red-400">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone
              </span>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Course interest
              </span>
              <select
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select</option>
                {COURSE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <Button
              type="submit"
              disabled={submitting}
              variant="primary"
              className="mt-2"
            >
              {submitting ? "Submitting…" : "Submit"}
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
}
