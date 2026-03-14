import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { AskAiButton } from "@/components/AskAiButton";
import { FixedVoiceButton } from "@/components/FixedVoiceButton";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="Investor Opportunity"
        ctaLabel="Contact Us"
        ctaHref="/#contact"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 py-4">
          <AskAiButton />
        </div>

        <div className="grid gap-6 py-8 lg:grid-cols-1">
          <Card>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Financial snapshot
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[280px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <th className="pb-2 pr-4 font-semibold">Metric</th>
                    <th className="pb-2 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 pr-4">Target clinics (Y3)</td>
                    <td className="py-2">Placeholder</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 pr-4">Revenue model</td>
                    <td className="py-2">Franchise + CME + content</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 pr-4">Remission focus</td>
                    <td className="py-2">Metabolism-first protocols</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
              Use of funds
            </h3>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full min-w-[280px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <th className="pb-2 pr-4 font-semibold">Category</th>
                    <th className="pb-2 font-semibold">%</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 pr-4">Clinic rollout</td>
                    <td className="py-2">50%</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 pr-4">Tech & content</td>
                    <td className="py-2">25%</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 pr-4">Operations & CME</td>
                    <td className="py-2">25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <a
                href="/documents/investor-overview.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 font-medium text-white shadow-sm hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-5 sm:py-3"
              >
                Download PDF
              </a>
            </div>
          </Card>
        </div>
      </section>
      <FixedVoiceButton />
    </div>
  );
}
