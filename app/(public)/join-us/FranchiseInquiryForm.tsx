"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const MEDICAL_BACKGROUND_OPTIONS = [
  { value: "", label: "Select" },
  { value: "MBBS", label: "MBBS" },
  { value: "Other Doctor", label: "Other Doctor" },
  { value: "Non-Medical", label: "Non-Medical" },
];

const INVESTMENT_CAPACITY_OPTIONS = [
  { value: "", label: "Select" },
  { value: "Up to ₹10 lakh", label: "Up to ₹10 lakh" },
  { value: "₹10-25 lakh", label: "₹10-25 lakh" },
  { value: "₹25-50 lakh", label: "₹25-50 lakh" },
  { value: "Above ₹50 lakh", label: "Above ₹50 lakh" },
];

export function FranchiseInquiryForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cityLocation, setCityLocation] = useState("");
  const [medicalBackground, setMedicalBackground] = useState("");
  const [investmentCapacity, setInvestmentCapacity] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    setSubmitting(true);
    const payload = {
      fullName,
      phone,
      email,
      cityLocation,
      medicalBackground,
      investmentCapacity,
      message,
    };
    console.log("Franchise inquiry:", payload);
    setSubmitting(false);
    setSuccess(true);
    setFullName("");
    setPhone("");
    setEmail("");
    setCityLocation("");
    setMedicalBackground("");
    setInvestmentCapacity("");
    setMessage("");
  }

  return (
    <Card className="mb-12">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Franchise Inquiry Form
      </h2>
      {success && (
        <p className="mt-3 text-primary">
          Thank you! We&apos;ll get back to you soon.
        </p>
      )}
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Full Name</span>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
          <span className="text-sm font-medium">City / Location</span>
          <input
            type="text"
            required
            value={cityLocation}
            onChange={(e) => setCityLocation(e.target.value)}
            className="min-h-[48px] w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Medical background?</span>
          <select
            required
            value={medicalBackground}
            onChange={(e) => setMedicalBackground(e.target.value)}
            className="min-h-[48px] w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            {MEDICAL_BACKGROUND_OPTIONS.map((opt) => (
              <option key={opt.value || "select"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Investment capacity</span>
          <select
            required
            value={investmentCapacity}
            onChange={(e) => setInvestmentCapacity(e.target.value)}
            className="min-h-[48px] w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            {INVESTMENT_CAPACITY_OPTIONS.map((opt) => (
              <option key={opt.value || "select"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </label>
        <Button type="submit" disabled={submitting} className="min-h-[48px] w-full">
          {submitting ? "Submitting…" : "Submit"}
        </Button>
      </form>
    </Card>
  );
}
