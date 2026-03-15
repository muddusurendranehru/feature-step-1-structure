"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-5 py-3 sm:px-6 sm:py-3.5";
const buttonOutline =
  "border-2 border-white bg-white text-primary hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary";

const INVESTMENT_CAPACITY_OPTIONS = [
  { value: "", label: "Select" },
  { value: "1-5 lakh", label: "₹1-5 lakh (seed supporter)" },
  { value: "5-25 lakh", label: "₹5-25 lakh (angel investor)" },
  { value: "25 lakh-1 crore", label: "₹25 lakh-1 crore (strategic)" },
  { value: "above 1 crore", label: "Above 1 crore (institutional)" },
];

export default function InvestorsPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [investmentCapacity, setInvestmentCapacity] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleInvestorSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    setSubmitting(true);
    const payload = { fullName, phone, email, investmentCapacity, message };
    console.log("Investor inquiry:", payload);
    setSubmitting(false);
    setSuccess(true);
    setFullName("");
    setPhone("");
    setEmail("");
    setInvestmentCapacity("");
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            Seed Funding Opportunity
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Private placement at ₹0.10 (10 paise) per share • Founder retains 51%+ majority •
            10-year horizon
          </p>
          <a
            href="/investor-deck.pdf"
            download
            className={`${buttonBase} ${buttonOutline}`}
          >
            Download Investor Deck (PDF)
          </a>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Why Invest?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Proven Traction</h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>5,000+ patients treated</li>
                <li>350+ YouTube medical education videos</li>
                <li>6 AI-powered apps built by the doctor himself</li>
                <li>1,200+ doctor network</li>
                <li>3 published indexed research papers</li>
                <li>Free diabetes camps across Telangana</li>
              </ul>
              <a
                href="https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Watch Dr. Surendra&apos;s 350+ videos →
              </a>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Scalable Model</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Franchise-ready: 100+ centers projected in 10 years. Revenue from consultations,
                training, donations.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Social Impact</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Free camps, awareness lectures, doctor training — real change in metabolic health
                crisis.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="mb-4 text-center text-2xl font-bold text-primary">Apps proof</h3>
            <div className="flex justify-center">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg dark:border-gray-700">
                <Image
                  src="/blog/app-%20(1).jpg"
                  alt="HOMA 6 AI-powered apps screenshot"
                  width={800}
                  height={450}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">
            Research Publications
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
              Association of TyG Index with HbA1c Levels in Adults
            </h3>
            <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">International Journal of Medicine</span>
              {" · "}ISSN: —
            </p>
            <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
              Vol. 8, Issue 2, March 2026
            </p>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
              Authors: Sachdev MC, Nehru MS, Rahul K, Varshha AS
            </p>
            <p className="mb-4 text-sm">
              <a
                href="https://doi.org/10.61336/im/26-3-10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                DOI: 10.61336/im/26-3-10
              </a>
            </p>
            <div className="mb-6 rounded-xl border border-primary/30 bg-primary/10 p-4 dark:bg-primary/20">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Key finding: TyG Index significantly predicts poor glycemic control (r=0.46,
                p=0.001)
              </p>
            </div>
            <a
              href="/research/tyg-hba1c-paper-2026.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-medium text-white shadow-sm hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-6 sm:py-3.5"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-16 text-center dark:bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-primary">Investment Structure</h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Private placement • ₹0.10/share • Founder retains 51%+ • 10-year horizon • Exploratory
            Health Coin (HOMA) next
          </p>
          <Button variant="primary" className="px-6 py-3">
            Express Interest (Coming Soon)
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="mb-6 text-2xl font-bold text-primary">
              Express Investment Interest
            </h2>
            {success && (
              <p className="mb-4 text-primary font-medium">
                Thank you! We&apos;ll be in touch soon.
              </p>
            )}
            <form onSubmit={handleInvestorSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-1 text-left">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name <span className="text-primary">*</span>
                </span>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-1 text-left">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone <span className="text-primary">*</span>
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-1 text-left">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email <span className="text-primary">*</span>
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-1 text-left">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Investment capacity <span className="text-primary">*</span>
                </span>
                <select
                  required
                  value={investmentCapacity}
                  onChange={(e) => setInvestmentCapacity(e.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  {INVESTMENT_CAPACITY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-left">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message (optional)
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-medium text-white shadow-lg hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
              >
                {submitting ? "Submitting…" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
