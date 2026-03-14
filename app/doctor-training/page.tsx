import { Hero } from "@/components/Hero";
import { AskAiButton } from "@/components/AskAiButton";
import { FixedVoiceButton } from "@/components/FixedVoiceButton";
import { RevenueShareCalculator } from "@/components/RevenueShareCalculator";

export default function DoctorTrainingPage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="Doctor Training & Collaboration"
        ctaLabel="Get in Touch"
        ctaHref="/#contact"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 py-4">
          <AskAiButton />
        </div>

        <div className="grid gap-6 py-8 sm:grid-cols-1">
          <RevenueShareCalculator />
        </div>
      </section>
      <FixedVoiceButton />
    </div>
  );
}
