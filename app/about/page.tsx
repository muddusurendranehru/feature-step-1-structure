import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dr. Muddu Surendra Nehru MD | HOMA Health Care Hyderabad",
  description:
    "Dr. Surendra Nehru, Founder of HOMA Health Care Hyderabad — 25+ years in preventive medicine, making India diabetes-free and obesity-free. Pioneer in metabolism testing, wearables, and AI-driven preventive healthcare.",
  openGraph: {
    title: "About Dr. Muddu Surendra Nehru MD | HOMA Health Care Hyderabad",
    description:
      "25+ years in preventive medicine. Pioneer in metabolism testing, wearables, and AI. Making India diabetes-free and obesity-free.",
    type: "profile",
  },
};

const ACHIEVEMENTS = [
  "1,000+ free diabetic camps in rural India",
  "Pioneer: first to test all hormones at night",
  "Pioneer: first to integrate wearables + metabolism",
  "Pioneer: introduced waist circumference as independent risk factor",
  "Pioneer: serum insulin testing protocol",
  "Building India's budget-friendly preventive healthcare using latest AI technology",
];

const CREDENTIALS = [
  "4 International papers published",
  "Books authored",
  "Chairperson & Speaker — All India Diabetes Conference",
  "100+ doctors as patients!",
  "12 medical college visits",
  "2,500 doctor followers",
  "1,200+ doctor network",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-16 text-center text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            About Dr. Muddu Surendra Nehru MD
          </h1>
          <p className="text-xl font-medium opacity-95 md:text-2xl">
            Founder, HOMA Health Care Hyderabad
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            With over <strong>25 years of experience</strong> in preventive medicine, Dr. Surendra Nehru has dedicated his career to one mission:{" "}
            <strong>making India diabetes-free and obesity-free</strong>.
          </p>
          <blockquote className="mb-10 border-l-4 border-primary bg-white pl-6 pr-4 py-4 text-lg italic text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:border-primary">
            &ldquo;Metabolism is the key to managing both acute and chronic diseases. Only through accurate testing of micro and nano molecules, combined with lifestyle changes, can India win the battle against chronic diseases.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="bg-white px-4 py-12 dark:bg-gray-800 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-primary sm:text-3xl">
            Achievements
          </h2>
          <ul className="space-y-4">
            {ACHIEVEMENTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                  ✅
                </span>
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mb-6 mt-10 text-xl font-bold text-primary sm:text-2xl">
            Credentials &amp; Recognition
          </h3>
          <ul className="space-y-4">
            {CREDENTIALS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                  ✅
                </span>
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            Connect with HOMA Health Care — join, collaborate, franchise, or donate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919963721999"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-primary/5 px-5 py-3 font-medium text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary/10 dark:hover:bg-primary/20"
            >
              Call: +91 9963721999
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-medium text-white shadow-sm hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Contact / Enquire
            </Link>
            <Link
              href="/donations"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-5 py-3 font-medium text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
