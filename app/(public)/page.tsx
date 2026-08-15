import Image from "next/image";
import Link from "next/link";
import { HowItWorksCards } from "@/components/common/HowItWorksCards";
import { FranchiseApplyForm } from "@/components/features/franchise/FranchiseApplyForm";

const DOOR_TO_DOOR_STEPS: { title: string; items: (string | { text: string; sub: string[] })[] }[] = [
  {
    title: "STEP 1 — HOME (Before Visit)",
    items: [
      "Google Form at home (no waiting!)",
      "Free metabolic calculators online",
      "Zero waiting time",
      "Home fasting sample collection (our team visits patient's home!)",
    ],
  },
  {
    title: "STEP 2 — DIAGNOSIS (AI-Powered)",
    items: [
      "OCR AI reads all lab reports",
      "Metabolism Speedometer (green/red visual gauge)",
      "Full AI-generated report",
      "First center in India working on INSULIN RESISTANCE (not just diabetes!)",
      {
        text: "Two types identified:",
        sub: ["50% Insulin Resistance", "50% Insulin Deficit", "= Different treatment for each!"],
      },
    ],
  },
  {
    title: "STEP 3 — DOCTOR CONSULTATION",
    items: [
      "Dr. Surendra explains full report",
      {
        text: "4-Step Strategy designed personally:",
        sub: ["1. Diet Plan", "2. Exercise Program", "3. Medicines", "4. Lifestyle"],
      },
    ],
  },
  {
    title: "STEP 4 — DIET (World First!)",
    items: [
      "NutriBot app — 3.5 lakh Indian foods",
      "30-day plan (30 different complications)",
      "First in world: mobile diet for diabetes complications!",
    ],
  },
  {
    title: "STEP 5 — EXERCISE",
    items: [
      "1 lakh exercise program",
      "Virtual assistant",
      "Sleep tracker",
      "Walking tracker",
    ],
  },
  {
    title: "STEP 6 — MEDICINES",
    items: ["Home delivery!", "Full assistance included"],
  },
  {
    title: "STEP 7 — ONGOING SUPPORT",
    items: [
      "YouTube videos at home",
      "Weekly Zoom meetings",
      "30-day remission guarantee — remission is the goal!",
    ],
  },
  {
    title: "STEP 8 — BACK HOME ✅",
    items: [
      "Patient goes home healthier — remission in reach!",
      "= Door-to-door complete care!",
    ],
  },
];

const STATS_ITEMS = [
  "100+ Doctors as Patients",
  "2,500 Doctor Followers",
  "4 International Papers",
  "12 Medical Colleges",
  "3.5 Lakh Foods Database",
  "1 Lakh Exercises",
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <div className="min-h-screen bg-gradient-to-br from-[#f0faf4] to-white dark:from-gray-900 dark:to-gray-800">
        {/* Top hero - two column */}
        <div className="mx-auto max-w-7xl grid items-center gap-8 px-6 pb-8 pt-16 md:grid-cols-2">
          {/* Left - Text */}
          <div>
            {/* D-D-D Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1B6B45] px-4 py-2 text-sm font-bold text-white">
              🚪 D · D · D — Door to Door Diabetes Delivery
            </div>

            <h1 className="mb-4 text-5xl font-black leading-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              <span className="text-[#1B6B45]">HOMA</span> Clinics
            </h1>

            <p className="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-300">
              India&apos;s First Complete End-to-End
              <br />
              <span className="text-[#1B6B45]">Diabetes &amp; Metabolism Reversal System</span>
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              From your <strong>doorstep blood test</strong> → AI-powered <strong>HOMA Score</strong> → personalised <strong>diet protocol</strong> → 90-day <strong>metabolic reversal</strong>.
              <br />
              No hospital. No queue. No confusion.
            </p>

            {/* D-D-D 3 steps */}
            <div className="mb-8 grid grid-cols-3 gap-3">
              {[
                ["🚪", "Door 1", "Home Collection", "Fasting insulin test at your door"],
                ["📊", "Door 2", "HOMA Score", "Your insulin resistance report"],
                ["💊", "Door 3", "Delivery", "Diet plan + reversal protocol"],
              ].map(([icon, door, title, sub]) => (
                <div
                  key={door}
                  className="rounded-2xl border border-green-100 bg-white p-4 text-center shadow-sm dark:border-gray-600 dark:bg-gray-800"
                >
                  <div className="mb-1 text-2xl">{icon}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#1B6B45]">
                    {door}
                  </div>
                  <div className="mt-1 text-xl font-bold text-gray-800 dark:text-gray-200">
                    {title}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{sub}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/enroll"
                className="rounded-full bg-[#1B6B45] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#155534]"
              >
                Enroll Now — ₹6,500
              </Link>
              <Link
                href="/faq"
                className="rounded-full border-2 border-[#1B6B45] px-8 py-4 text-lg font-bold text-[#1B6B45] transition hover:bg-[#f0faf4] dark:hover:bg-gray-800"
              >
                What is HOMA?
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400 dark:text-gray-500">
              <span>✅ 5,000+ tests done</span>
              <span>✅ 32 years experience</span>
              <span>✅ 2 published papers 2026</span>
              <span>✅ 🏆 Best Diabetologist 2024</span>
            </div>
          </div>

          {/* Right - Doctor photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[#1B6B45] opacity-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_600/v1786780762/drnehruprogfilenew1_cfburo.jpg"
                alt="Dr. Muddu Surendra Nehru MD — HOMA Health Care"
                className="relative max-w-sm w-full rounded-3xl object-cover shadow-2xl"
                style={{ maxWidth: 384 }}
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-bold text-yellow-900 shadow-lg">
                🏆 Best Diabetologist 2024
              </div>
              <div className="absolute -top-4 -right-4 rounded-2xl bg-[#1B6B45] px-4 py-2 text-sm font-bold text-white shadow-lg">
                📄 2 Papers — 2026
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-8 bg-[#1B6B45] px-6 py-6 text-white">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              ["5,000+", "HOMA Tests Done"],
              ["1,000+", "Free Camps Held"],
              ["6", "AI-Powered Apps"],
              ["100+", "Franchise Centers Planned"],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-3xl font-black">{val}</div>
                <div className="mt-1 text-sm text-green-200">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 90-DAY METABOLIC TRIUMPH ── */}
      <section className="bg-gradient-to-br from-[#0a3d26] to-[#1B6B45] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_900/v1786776439/90day_web_app1_d179lp.png"
                alt="90-Day Metabolic Triumph Program — HOMA Clinic"
                className="w-full block"
              />
            </div>
            {/* Right — content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest mb-6">
                🏆 Metabolic Triumph Program
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                90 Days to
                <br />
                <span className="text-yellow-300">Diabetes Remission</span>
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                India&apos;s first structured 90-day program combining HOMA-IR testing,
                personalised diet, and insulin resistance reversal — not just sugar control.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  ["Day 1", "HOMA Score + full metabolic report"],
                  ["Day 7", "Personalised diet + medicine plan"],
                  ["Day 30", "First remission checkpoint"],
                  ["Day 90", "Target: HbA1c under 6.5 without tablets"],
                ].map(([day, desc]) => (
                  <div key={day} className="bg-white/10 rounded-2xl p-4 border border-white/15">
                    <div className="text-yellow-300 font-black text-sm mb-1">{day}</div>
                    <div className="text-white/80 text-xs leading-snug">{desc}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="/enroll"
                  className="bg-yellow-400 text-yellow-900 font-black px-6 py-3 rounded-full hover:bg-yellow-300 transition"
                >
                  Start My 90 Days — ₹6,500
                </a>
                <a
                  href="https://wa.me/919963721999?text=Hi%20Dr.%20Surendra%2C%20I%20want%20to%20know%20about%20the%2090-day%20Metabolic%20Triumph%20program"
                  target="_blank" rel="noopener"
                  className="border-2 border-white/40 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition"
                >
                  💬 Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 30-DAY COD DIET SECTION ── */}
      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f0fdf4] text-[#1B6B45] border border-[#1B6B45]/20 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest mb-6">
                🥗 World First · Mobile Diet for Diabetes
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                30-Day C.O.D.
                <br />
                <span className="text-[#1B6B45]">Remission Diet Plan</span>
              </h2>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                India&apos;s first AI-powered 30-day diet plan built specifically for
                diabetes complications — 3.5 lakh Indian foods, 30 different complication
                protocols, delivered to your phone daily.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  ["🍽️", "3.5 Lakh Indian Foods Database", "Every regional cuisine covered — Telugu, Tamil, Bengali, Punjabi"],
                  ["📅", "30 Days · 30 Complications", "Kidney, heart, nerve, eye — each gets its own protocol"],
                  ["📱", "Mobile-First · Free to Try", "Live app — track meals, get reminders, see progress"],
                ].map(([icon, title, desc]) => (
                  <div key={title as string} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] flex items-center justify-center text-xl flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://healthmetrics30daymeals.onrender.com/diet"
                  target="_blank" rel="noopener"
                  className="bg-[#1B6B45] text-white font-black px-6 py-3 rounded-full hover:bg-[#155534] transition"
                >
                  🥗 Try the Diet Tracker — Free
                </a>
                <a
                  href="/enroll"
                  className="border-2 border-[#1B6B45] text-[#1B6B45] font-bold px-6 py-3 rounded-full hover:bg-[#f0fdf4] transition"
                >
                  Full Program ₹6,500
                </a>
              </div>
            </div>
            {/* Right — image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_900/v1786780825/30dietimg1_ze8dou.png"
                alt="30-Day COD Remission Diet Plan — HOMA Clinic"
                className="w-full block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── A TO Z FOODS ── */}
      <section className="bg-gradient-to-br from-[#0a3d26] to-[#1B6B45] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 border border-yellow-400/40 px-4 py-2 text-sm font-bold text-yellow-300 mb-4">
              🍎 A to Z Foods — Apple to Zanzibar
            </div>
            <h2 className="text-3xl font-black text-white mb-3">
              3.5 Lakh Indian Foods in One App
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm">
              NutriBot knows every food — from everyday dal-rice to exotic Zanzibar spices.
              The world&apos;s first diabetes diet app built for Indian metabolisms.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-400/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_1200/v1786786124/zanzicorrect1_adr85e.jpg"
              alt="A to Z Foods — Apple to Zanzibar — HOMA NutriBot"
              className="w-full block"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            {[
              { stat: "3.5 Lakh", label: "Indian Foods" },
              { stat: "30", label: "Complication Diets" },
              { stat: "A–Z", label: "Every Food Covered" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-2xl py-4 px-2">
                <div className="text-2xl font-black text-yellow-300">{s.stat}</div>
                <div className="text-white/70 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="https://healthmetrics30daymeals.onrender.com/diet"
              target="_blank" rel="noopener"
              className="inline-block bg-yellow-400 text-yellow-900 font-black px-8 py-3 rounded-full text-sm hover:bg-yellow-300 transition"
            >
              Try NutriBot Free →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works — expandable D-D-D cards */}
      <HowItWorksCards />

      {/* USP: Door-to-Door Diabetes Reversal */}
      <section className="border-b border-primary/20 bg-white px-4 py-12 dark:bg-gray-50 dark:border-primary/30 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            India&apos;s First Complete End-to-End
            <br />
            Diabetes &amp; Metabolism Reversal System
          </h2>
          <div className="space-y-6">
            {DOOR_TO_DOOR_STEPS.map((block, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-5 dark:bg-primary/10 sm:p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-primary sm:text-xl">
                  {block.title}
                </h3>
                <ul className="space-y-2">
                  {block.items.map((item, j) =>
                    typeof item === "string" ? (
                      <li key={j} className="flex items-start gap-2 text-gray-800 dark:text-gray-200">
                        <span className="mt-0.5 shrink-0 text-primary" aria-hidden>✅</span>
                        <span className="text-base leading-relaxed sm:text-lg">{item}</span>
                      </li>
                    ) : (
                      <li key={j} className="flex flex-col gap-1.5 pl-6">
                        <span className="flex items-start gap-2 font-medium text-gray-800 dark:text-gray-200">
                          <span className="mt-0.5 shrink-0 text-primary" aria-hidden>✅</span>
                          {item.text}
                        </span>
                        <ul className="space-y-1">
                          {item.sub.map((s, k) => (
                            <li key={k} className="text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
                              — {s}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
          {/* Stats bar */}
          <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-primary/5 px-4 py-5 dark:bg-primary/10 sm:px-6 sm:py-6">
            <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200 sm:text-base">
              {STATS_ITEMS.join(" | ")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-10 text-white sm:px-6 sm:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            🚨 Why 99% of Health Check-ups Miss the ONE Test That Can Save Your Life?
          </h2>
          <p className="mb-3 text-lg leading-snug opacity-95">
            BMI is lying to you.
            <br />
            Waist &gt; 85cm = already obese (Indian adults 20+) even if BMI says normal!
          </p>
          <p className="mb-4 text-lg leading-snug opacity-95">
            The missing test: <strong>HOMA Test</strong>
            <br />
            Measures insulin resistance — root cause of 70%+ of urban India&apos;s health crisis.
          </p>
          <p className="mb-6 text-lg font-semibold opacity-95">
            Join the Quit India Diabetes &amp; Obesity Campaign!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919963721999"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-white/10 px-5 py-3 font-medium text-white hover:bg-white hover:text-primary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:px-6 sm:py-3.5"
            >
              Call Now: +91 9963721999
            </a>
            <Link
              href="/apps"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-white/10 px-5 py-3 font-medium text-white hover:bg-white hover:text-primary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:px-6 sm:py-3.5"
            >
              Free HOMA Test Info →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FRANCHISE APPLICATION FORM ── */}
      <section id="apply" className="bg-[#f0faf4] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#1B6B45] px-4 py-2 text-sm font-bold text-white">
              🏥 Own a HOMA Clinic — Apply Now
            </div>
            <h2 className="mb-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Build Your Own Clinic.
              <br />
              <span className="text-[#1B6B45]">Own Your Career.</span>
            </h2>
            <p className="mx-auto max-w-xl text-gray-500">
              ₹5,00,000 total investment · 21 days to first patient · ₹1.5L+ net profit by Month 5.
              Apply below — our team will call you within 24 hours.
            </p>
          </div>

          {/* What you get — quick bullets */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["🧪", "Metric Explorer Software"],
              ["🏷️", "HOMA Brand & Signage"],
              ["🎓", "3-Day Clinical Training"],
              ["🔁", "Monthly Zoom CME"],
            ].map(([icon, label]) => (
              <div
                key={label as string}
                className="rounded-xl border border-green-100 bg-white p-3 text-center shadow-sm"
              >
                <div className="text-xl">{icon}</div>
                <div className="mt-1 text-xs font-semibold text-gray-700">{label}</div>
              </div>
            ))}
          </div>

          {/* The form */}
          <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-lg">
            <FranchiseApplyForm />
          </div>

          {/* Trust line */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already running: Dr. Vamsee Krishna (Leela Hospital) · Dr. Basavaraj (Maruthi Hospital) · and more joining every month.
          </p>
        </div>
      </section>

      {/* ── BOOKS SHELF ── */}
      <section className="bg-[#f8f9fa] px-4 py-14 sm:px-6 border-t border-gray-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#0f2942] text-white rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest mb-4">
              📚 8 Books · Zero Pharma Money
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              32 Years of Knowledge. Published.
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto text-sm">No pharmaceutical sponsorship. No ghost-writers. Every book written from real patient cases.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              {
                img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_300/v1786773530/10e237d2-f6fa-46d6-b327-a96958b3533c_o7xwp1.jpg",
                title: "BP: The Untold Truth",
                tag: "Bestseller",
                href: "https://amazon.in/dp/B0H23M9VPF",
              },
              {
                img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_300/v1786772726/1vDSg_png1mr.jpg",
                title: "Your Kidneys Are Not Silent",
                tag: "New",
                href: null,
              },
              {
                img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_300/v1786781231/bedscover300dp_fhqgqr.jpg",
                title: "Bedside Cardiology",
                tag: "For Doctors",
                href: null,
              },
              {
                img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_300/v1786782550/drnormal1_v5k384.jpg",
                title: "Doctor Said Normal",
                tag: "Must Read",
                href: null,
              },
            ].map((book) => (
              <div key={book.title} className="flex flex-col group">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[3/4] group-hover:shadow-xl transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 text-center">
                  <div className="inline-block bg-[#1B6B45]/10 text-[#1B6B45] text-xs font-bold px-2 py-0.5 rounded-full mb-1">{book.tag}</div>
                  <div className="text-gray-900 text-sm font-bold leading-tight">{book.title}</div>
                  {book.href && (
                    <a href={book.href} target="_blank" rel="noopener" className="text-[#1B6B45] text-xs font-semibold mt-1 inline-block hover:underline">Buy on Amazon →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">+ 4 more books on insulin resistance, diabetes, and metabolic health</p>
        </div>
      </section>

      {/* ── TRUSTED BY ICONS ── */}
      <section className="bg-gradient-to-br from-[#0a3d26] to-[#1B6B45] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 border border-yellow-400/40 px-4 py-2 text-sm font-bold text-yellow-300 mb-4">
              ⭐ Icons Who Trust Dr. Surendra
            </div>
            <h2 className="text-3xl font-black text-white mb-3">
              When Stars Need Real Results, They Choose HOMA
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm">
              Public figures and government leaders who have personally engaged with Dr. Muddu Surendra Nehru&apos;s work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Chiranjeevi */}
            <div className="rounded-2xl overflow-hidden border-2 border-yellow-400/40 shadow-2xl relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_700/v1786781678/CHIRU1_1_uyuz78.jpg"
                alt="Dr. Surendra with Megastar Chiranjeevi"
                className="w-full object-cover"
                style={{ maxHeight: 380 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5">
                <div className="text-yellow-300 font-black text-base">⭐ Megastar Chiranjeevi</div>
                <div className="text-white/80 text-xs mt-1">Tollywood Superstar · Padma Vibhushan · Former Union Minister</div>
              </div>
            </div>

            {/* IT Minister */}
            <div className="rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_700/v1786783988/minsridharsirbook4_y4zoov.jpg"
                alt="Dr. Surendra with IT Minister Duddilla Sridhar Babu"
                className="w-full object-cover"
                style={{ maxHeight: 380 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5">
                <div className="text-yellow-300 font-black text-base">🏛️ Shri Duddilla Sridhar Babu</div>
                <div className="text-white/80 text-xs mt-1">Hon&apos;ble Minister for IT · Electronics &amp; Commerce · Govt. of Telangana</div>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 text-white/40 text-xs">
            Photos shared with consent for educational and professional credibility purposes.
          </p>
        </div>
      </section>

      {/* ── PATIENT TESTIMONIALS ── */}
      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1B6B45] px-4 py-2 text-sm font-bold text-white mb-4">
              ❤️ Real Patients. Real Results.
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Diabetes Reversed. Lives Changed.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              These are real HOMA Clinic patients — not paid actors, not stock photos.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Tadhicherla Lakshmi",
                age: "55F · 8 Years Diabetes",
                quote: "8 years of diabetes tablets — gone in 90 days. My HbA1c went from 9.2 to 5.8. Dr. Surendra found the insulin resistance nobody else tested.",
                result: "HbA1c: 9.2 → 5.8",
                place: "Hyderabad",
                img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_200/v1786782867/pt3_xjwa8v.jpg",
              },
              {
                name: "Krishnapur Rajaiah",
                age: "60M · Farmer",
                quote: "I was spending ₹3,000/month on medicines. Now I spend ₹0. The HOMA test showed my real problem — nobody told me this in 10 years.",
                result: "Medicines: ₹3,000 → ₹0/month",
                place: "Nalgonda",
                img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_200/v1786783593/wc3_kwewhe.jpg",
              },
              {
                name: "Padmavathi",
                age: "44F · Thyroid + Diabetes",
                quote: "Thyroid and diabetes together for 7 years. Every doctor gave me more tablets. Dr. Surendra found insulin resistance was the root. Now off 4 medicines.",
                result: "Off 4 medicines in 90 days",
                place: "Warangal",
                img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_200/v1786782867/pt2_xtvbhg.jpg",
              },
              {
                name: "Swathi",
                age: "28F · PCOS · Mancherial",
                quote: "PCOS for 6 years. Doctors only gave me Metformin. Dr. Surendra found the root cause — insulin resistance. 90 days, PCOS controlled.",
                result: "PCOS controlled at 28",
                place: "Mancherial",
                img: null,
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 flex flex-col">
                {/* Photo placeholder — replace with Grok image */}
                <div className="w-16 h-16 rounded-full bg-[#1B6B45]/10 border-2 border-[#1B6B45]/20 flex items-center justify-center text-2xl mb-4">
                  {t.img
                    ? <img src={t.img} alt={t.name} className="w-full h-full rounded-full object-cover" />
                    : "👤"}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="bg-[#1B6B45]/10 rounded-xl px-3 py-2 mb-3">
                  <div className="text-[#1B6B45] font-black text-sm">{t.result}</div>
                </div>
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs">{t.age} · {t.place}</div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-gray-400">
            📸 Patient photos coming soon — <a href="https://wa.me/919963721999" className="text-[#1B6B45] font-semibold">share your story on WhatsApp</a>
          </p>
        </div>
      </section>
    </main>
  );
}
