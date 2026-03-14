import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { AskAiButton } from "@/components/AskAiButton";
import { FixedVoiceButton } from "@/components/FixedVoiceButton";

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="Education & CME"
        ctaLabel="View Programs"
        ctaHref="/#programs"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 py-4">
          <span className="flex items-center gap-2 text-primary">✓ CME Accredited</span>
          <AskAiButton />
        </div>

        <div className="grid gap-6 py-8 sm:grid-cols-1 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Metabolism & Nutrition
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Evidence-based modules on metabolic health, nutrition metrics, and
              patient assessment for clinicians.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Franchise Practitioner Training
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Standardized protocols and operational training for HOMA clinic
              franchise partners.
            </p>
          </Card>
        </div>
      </section>
      <FixedVoiceButton />
    </div>
  );
}
