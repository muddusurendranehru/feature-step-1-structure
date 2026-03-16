import Image from "next/image";
import Link from "next/link";

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
      {/* Hero section with Dr. Surendra photo on the right */}
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-3xl flex-1 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
              HOMA Clinics
            </h1>
            <div className="mt-6 sm:mt-8">
              <Link
                href="/apps"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-primary-dark sm:px-5 sm:py-3"
              >
                Explore
              </Link>
            </div>
          </div>
          <div className="relative h-64 w-64 shrink-0 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <Image
              src="/blog/drmuddusmvp.png"
              alt="Dr. Surendra"
              fill
              className="rounded-2xl object-contain object-top shadow-lg"
              sizes="(max-width: 1024px) 288px, 320px"
              priority
            />
          </div>
        </div>
      </section>

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
