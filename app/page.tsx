import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { AskAiButton } from "@/components/AskAiButton";
import { FixedVoiceButton } from "@/components/FixedVoiceButton";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="HOMA Clinics — Metabolism-First Franchise"
        ctaLabel="Enroll Now"
        ctaHref="/#enroll"
      />

      {/* Trust badges placeholder */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-2 text-primary">
            <span className="text-2xl">✓</span> Medical Advisory Board
          </span>
          <span className="flex items-center gap-2 text-primary">
            <span className="text-2xl">✓</span> CME Accredited
          </span>
          <span className="flex items-center gap-2 text-primary">
            <span className="text-2xl">✓</span> Franchise Ready
          </span>
        </div>
      </section>

      {/* Founder / Leadership */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-56">
              <Image
                src="/nehru1.png"
                alt="Dr. Muddu Surendra Nehru"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Dr. Muddu Surendra Nehru
              </h2>
              <p className="mt-1 text-primary font-medium">M.D.</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Professor of Medicine, Senior Physician. World’s first physician
                to develop an AI-based web app for nutrition, health metrics, and
                drug trials.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Education & CME
            </h2>
            <p className="mt-2 flex-1 text-gray-600 dark:text-gray-300">
              Continuing medical education and metabolism-focused training for
              practitioners.
            </p>
            <Link
              href="/education"
              className="mt-4 font-medium text-primary hover:text-primary-dark"
            >
              Learn more →
            </Link>
          </Card>
          <Card className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Doctor Training
            </h2>
            <p className="mt-2 flex-1 text-gray-600 dark:text-gray-300">
              Revenue-share model and collaboration programs for doctors.
            </p>
            <Link
              href="/doctor-training"
              className="mt-4 font-medium text-primary hover:text-primary-dark"
            >
              Learn more →
            </Link>
          </Card>
          <Card className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Investor Opportunity
            </h2>
            <p className="mt-2 flex-1 text-gray-600 dark:text-gray-300">
              Financial snapshot, use of funds, and partnership details.
            </p>
            <Link
              href="/investors"
              className="mt-4 font-medium text-primary hover:text-primary-dark"
            >
              Learn more →
            </Link>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <AskAiButton />
        </div>
      </section>
      <FixedVoiceButton />
    </div>
  );
}
