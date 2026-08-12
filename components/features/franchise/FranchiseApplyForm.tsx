"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function FranchiseApplyForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [nmcNumber, setNmcNumber] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, city, nmcNumber }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setFormState("success");
      setFullName("");
      setPhone("");
      setCity("");
      setNmcNumber("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-2xl border-2 border-green-200 bg-green-50 px-8 py-10 text-center">
        <div className="mb-3 text-4xl">🎉</div>
        <h3 className="mb-2 text-2xl font-bold text-[#1B6B45]">
          Application Received!
        </h3>
        <p className="text-gray-600">
          Thank you. Dr. Surendra&apos;s team will call you within 24 hours to walk you through the next steps.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 text-sm text-[#1B6B45] underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-700">Full Name *</span>
          <input
            type="text"
            required
            placeholder="Dr. Firstname Lastname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={formState === "submitting"}
            className="min-h-[48px] rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-[#1B6B45] focus:outline-none focus:ring-2 focus:ring-[#1B6B45]/30 disabled:opacity-60"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-700">Phone Number *</span>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={formState === "submitting"}
            className="min-h-[48px] rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-[#1B6B45] focus:outline-none focus:ring-2 focus:ring-[#1B6B45]/30 disabled:opacity-60"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-700">City *</span>
          <input
            type="text"
            required
            placeholder="Hyderabad, Mumbai…"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={formState === "submitting"}
            className="min-h-[48px] rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-[#1B6B45] focus:outline-none focus:ring-2 focus:ring-[#1B6B45]/30 disabled:opacity-60"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-700">NMC / State Medical Council Reg. No. *</span>
          <input
            type="text"
            required
            placeholder="Your registration number"
            value={nmcNumber}
            onChange={(e) => setNmcNumber(e.target.value)}
            disabled={formState === "submitting"}
            className="min-h-[48px] rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-[#1B6B45] focus:outline-none focus:ring-2 focus:ring-[#1B6B45]/30 disabled:opacity-60"
          />
        </label>
      </div>

      {formState === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          ⚠️ {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="min-h-[52px] w-full rounded-full bg-[#1B6B45] px-8 py-3 text-lg font-bold text-white shadow-md transition hover:bg-[#155534] disabled:opacity-60"
      >
        {formState === "submitting" ? "Submitting…" : "Apply Now — Free →"}
      </button>

      <p className="text-center text-xs text-gray-400">
        No payment needed to apply. Our team will call you within 24 hours.
      </p>
    </form>
  );
}
