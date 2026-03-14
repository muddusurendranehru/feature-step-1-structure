import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { AskAiButton } from "@/components/AskAiButton";
import { FixedVoiceButton } from "@/components/FixedVoiceButton";

export default function ContentStudioPage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="Content Studio"
        ctaLabel="Explore Content"
        ctaHref="/#explore"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 py-4">
          <AskAiButton />
        </div>

        <div className="py-8">
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Grok infographic & assets
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Infographics, patient handouts, and social assets for metabolism
              and franchise messaging. Content is produced for clinics and
              partners to use in local marketing.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Downloadable PDFs and image placeholders will be available here.
            </p>
          </Card>
        </div>
      </section>
      <FixedVoiceButton />
    </div>
  );
}
