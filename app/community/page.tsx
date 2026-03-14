import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { AskAiButton } from "@/components/AskAiButton";
import { FixedVoiceButton } from "@/components/FixedVoiceButton";

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <Hero headline="Community & Impact" ctaLabel="Get Involved" ctaHref="/#involved" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 py-4">
          <AskAiButton />
        </div>

        <div className="grid gap-6 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Local Health Camps
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Community screening and awareness initiatives in partnership with
              franchise clinics.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Research & Outcomes
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Shared outcomes and remission data to improve metabolic care
              standards.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Volunteer & Support
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Opportunities to support education and outreach in your region.
            </p>
          </Card>
        </div>
      </section>
      <FixedVoiceButton />
    </div>
  );
}
