import Image from "next/image";
import Link from "next/link";
import { HowItWorksCards } from "@/components/HowItWorksCards";

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
              <Image
                src="/blog/homa-msn-graphic.png"
                alt="Dr. Muddu Surendra Nehru MD"
                width={384}
                height={480}
                className="relative max-w-sm w-full rounded-3xl object-cover shadow-2xl"
                priority
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
    </main>
  );
}
