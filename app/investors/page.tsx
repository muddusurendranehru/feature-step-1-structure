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
      {/* Hero */}
      <div className="bg-[#1B6B45] text-white py-20 px-6 text-center">
        <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">
          Seed Funding Opportunity
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          India&apos;s First Insulin Resistance
          <br />
          Franchise Platform
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Backed by 2 peer-reviewed papers published in 2026 · 5,000+ patients tested · 32
          years clinical experience
        </p>

        {/* 4 stat boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
          {[
            ["₹0.10", "Per Share Entry"],
            ["51%+", "Founder Majority"],
            ["4", "Indexed Papers"],
            ["100+", "Franchise Centers Target"],
          ].map(([val, label]) => (
            <div key={label} className="bg-white/10 rounded-2xl py-4 px-2">
              <div className="text-3xl font-bold">{val}</div>
              <div className="text-green-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Research badge */}
        <div className="inline-block bg-yellow-400 text-yellow-900 font-bold px-6 py-2 rounded-full text-sm mb-8">
          🏆 2 Papers Published in 2026 · Best Diabetologist Award 2024
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/faq"
            className="bg-white text-[#1B6B45] font-bold px-8 py-3 rounded-full hover:bg-green-50"
          >
            Read FAQ
          </a>
          <a
            href="/investor-deck.pdf"
            download
            className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#1B6B45]"
          >
            Download Investor Deck
          </a>
        </div>
      </div>

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
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>✅ Franchise-ready: 100+ centers projected in 10 years</li>
                <li>✅ Every clinic runs the ₹2500 HOMA package — 15 tests</li>
                <li>✅ Revenue from consultations, CME training, donations</li>
                <li>✅ No upper age limit — target is everyone 20–90 years</li>
                <li>✅ Waist &gt;85cm = automatic patient — 70%+ of urban India qualifies</li>
                <li>✅ One test replaces 6–7 tablets for many patients</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Social Impact</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>🏕️ 100+ free diabetes camps across Telangana</li>
                <li>🧪 5,000+ fasting insulin resistance tests conducted</li>
                <li>📖 India&apos;s first HOMA center — Gachibowli, Hyderabad</li>
                <li>❤️ Heart patients &amp; statin users — high-risk group reached</li>
                <li>🚫 Quit India Diabetes &amp; Obesity Campaign — Dr. Nehru&apos;s mission</li>
                <li>📚 Published author — HOMA-IR Early Diagnosis book, COVID Handbook</li>
              </ul>
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

      {/* Our Technology Advantage */}
      <section className="px-4 py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary">
            Our Technology Advantage
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="relative aspect-[4/3] w-full bg-gray-100 dark:bg-gray-700">
                <Image
                  src="/blog/apps-homascore1.jpg"
                  alt="HOMA Score App"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-primary">
                  HOMA Score App — Nobody Has This
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  World&apos;s first clinic app measuring HOMA-IR + TYG Index together. HbA1c is old history.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="relative aspect-[4/3] w-full bg-gray-100 dark:bg-gray-700">
                <Image
                  src="/blog/homa-diet-1.png"
                  alt="Dr Muddu Metabolism Mantra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Dr Muddu Metabolism Mantra
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  AI-powered diet protocol app
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="relative aspect-[4/3] w-full bg-gray-100 dark:bg-gray-700">
                <Image
                  src="/blog/homa-package.png"
                  alt="Clinic Package ₹2500"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Clinic Package ₹2500
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  15 tests, 33% discount, HOMA Index included
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="mb-4 text-center text-2xl font-bold text-primary">
              Why India Needs HOMA Test — Not HbA1c
            </h3>
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-lg dark:border-gray-700">
              <div className="relative aspect-[21/9] w-full bg-gray-100 dark:bg-gray-700 sm:aspect-[3/1]">
                <Image
                  src="/blog/why-.jpg"
                  alt="Why India Needs HOMA Test — Not HbA1c"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peer-Reviewed Research — green card */}
      <section className="px-4 py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-primary">
            Peer-Reviewed Research
          </h2>
          <div className="rounded-2xl border-2 border-primary bg-primary/10 p-8 shadow-lg dark:bg-primary/20 dark:border-primary/50">
            <h3 className="mb-3 text-xl font-bold text-primary dark:text-primary">
              Published Paper — International Journal of Medicine, March 2026
            </h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">
              TyG Index correlates with HbA1c (r=0.46, p=0.001).
            </p>
            <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
              <a
                href="https://doi.org/10.61336/im/26-3-10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                DOI: 10.61336/im/26-3-10
              </a>
            </p>
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
