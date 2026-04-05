"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const INTERESTS = ["Volunteer", "Donor", "Both"];
const ROLES = [
  "Camp helper",
  "Awareness lecture",
  "Social media",
  "Admin support",
];

export function VolunteerForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [role, setRole] = useState("");
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
          interest,
          role,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.error || "Failed");
      setSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setInterest("");
      setRole("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="mb-12">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Volunteer / Donor form
      </h2>
      {success && (
        <p className="mt-3 text-primary">
          Thank you — we&apos;ll contact you soon!
        </p>
      )}
      {error && (
        <p className="mt-3 text-red-600 dark:text-red-400">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="min-h-[48px] w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Phone</span>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="min-h-[48px] w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-h-[48px] w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Interest</span>
          <select
            required
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="min-h-[48px] w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select</option>
            {INTERESTS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Role</span>
          <select
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="min-h-[48px] w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <Button type="submit" disabled={submitting} className="min-h-[48px] w-full">
          {submitting ? "Submitting…" : "Submit"}
        </Button>
      </form>
    </Card>
  );
}
