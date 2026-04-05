"use client";

import { useState } from "react";
import Image from "next/image";

const CARDS = [
  {
    id: "door1",
    icon: "🏠",
    title: "Door 1 — Home blood collection",
    short: "Fasting insulin test at your doorstep. No hospital, no queue.",
    details: [
      "Google Form at home (no waiting!)",
      "Free metabolic calculators online",
      "Home fasting sample collection — our team visits your home",
      "Zero waiting time",
    ],
    image: "/blog/homa-bloodcollection.png",
  },
  {
    id: "door2",
    icon: "📊",
    title: "Door 2 — AI HOMA Score diagnosis",
    short: "Your insulin resistance report with HOMA-IR + TYG Index.",
    details: [
      "OCR AI reads all lab reports",
      "Metabolism Speedometer (green/red visual gauge)",
      "Full AI-generated report",
      "First center in India working on INSULIN RESISTANCE (not just diabetes!)",
      "Two types identified: Insulin Resistance vs Insulin Deficit — different treatment for each",
    ],
    image: "/blog/apps-homascore1.jpg",
  },
  {
    id: "door3",
    icon: "🥗",
    title: "Door 3 — Diet + 90-day reversal",
    short: "Personalised diet protocol and metabolic reversal plan.",
    details: [
      "NutriBot app — 3.5 lakh Indian foods",
      "30-day plan (30 different complications)",
      "Dr. Surendra explains full report + 4-Step Strategy (Diet, Exercise, Medicines, Lifestyle)",
      "90-day metabolic reversal protocol with documented results",
      "Weekly Zoom support, YouTube education, remission goal",
    ],
    image: "/blog/homa-diet-1.png",
  },
  {
    id: "result",
    icon: "✅",
    title: "Result — Metabolic reversal with real numbers",
    short: "Triglycerides 400 → 120 in 90 days. Remission in reach.",
    details: [
      "Patient goes home healthier — remission in reach",
      "Documented results: e.g. Triglycerides dropping from 400 to 120 in 90 days",
      "One test can replace 6–7 tablets for many patients",
      "Door-to-door complete care — no hospital stay",
    ],
    image: "/blog/homa-90-day-1.png",
  },
];

export function HowItWorksCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="border-b border-primary/20 bg-white px-4 py-12 dark:bg-gray-900 dark:border-primary/30 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
          How It Works
        </h2>
        <p className="mb-10 text-center text-gray-600 dark:text-gray-400">
          Tap any door to expand the full details
        </p>
        <div className="space-y-4">
          {CARDS.map((card) => {
            const isExpanded = expandedId === card.id;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : card.id)}
                className="w-full rounded-2xl border-2 border-primary/30 bg-primary/5 text-left shadow-sm transition hover:border-primary/50 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary/10 dark:hover:bg-primary/20"
              >
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-2xl" aria-hidden>
                        {card.icon}
                      </span>
                      <h3 className="text-lg font-bold text-primary sm:text-xl">
                        {card.title}
                      </h3>
                      <span
                        className="ml-auto shrink-0 text-primary transition sm:ml-2"
                        aria-hidden
                      >
                        {isExpanded ? "▼" : "▶"}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{card.short}</p>
                    {isExpanded && (
                      <ul className="mt-4 space-y-2 border-t border-primary/20 pt-4 dark:border-primary/30">
                        {card.details.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-800 dark:text-gray-200"
                          >
                            <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                              ✅
                            </span>
                            <span className="text-sm leading-relaxed sm:text-base">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 sm:h-28 sm:w-40">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 160px"
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
