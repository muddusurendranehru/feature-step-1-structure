import Link from "next/link";

export const metadata = {
  title: "Partnerships & Sponsorships | HOMA Clinics",
  description:
    "Collaborate with nutraceutical brands, sponsors, and suppliers for metabolism health products and events.",
  robots: "index, follow",
};

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-5 py-3 sm:px-6 sm:py-3.5";
const buttonOutline =
  "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2";
const buttonPrimary =
  "bg-primary hover:bg-primary-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2";

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Partnerships & Sponsorships
          </h1>
          <p className="mb-8 text-xl opacity-90 md:text-2xl">
            Collaborate with leading nutraceutical & wellness brands to enhance patient care and generate revenue
          </p>
          <Link
            href="/contact"
            className={`${buttonBase} ${buttonOutline} bg-white text-primary hover:bg-gray-100`}
          >
            Become a Partner →
          </Link>
        </div>
      </section>

      {/* Why Partner */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Why Partner with HOMA Clinics?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Reach 5,000+ Patients</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Direct access to our patient base through camps, consultations, and AI recommendations.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Franchise Scaling</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Supply to multiple centers (target 100+ in 10 years) — recurring revenue potential.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Co-Branded Visibility</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Logo on camps/CME, YouTube videos, patient portal recommendations, voice assistant mentions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Tie Up */}
      <section className="bg-gray-100 px-4 py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Step-by-Step Partnership Process
          </h2>
          <div className="space-y-12">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold">1. Identify & Reach Out</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Start with brands matching metabolism focus: Tanishq Lifecare (GMP supplements), Zydus Wellness, Kapiva (Ayurvedic honey/almonds), Himalaya, Patanjali, etc.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Use LinkedIn (&quot;nutraceutical sponsorship India&quot;), brand websites (partnership forms), or your 1,200+ doctor network for intros.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold">2. Pitch Your Value</h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>5,000+ patient database + AI personalized recommendations</li>
                <li>Franchise scaling (supply to 100+ centers)</li>
                <li>Co-branded camps, CME events, YouTube videos</li>
                <li>Anonymized data insights for product performance</li>
              </ul>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Offer: product placement in camps, co-branded content, sponsorships (₹50k–2L/event)
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold">3. Integrate with Amazon & Software</h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>Add Amazon affiliate links in patient portal (&quot;Recommended Almond Snacks – Buy on Amazon&quot;)</li>
                <li>Nutri Engine suggests partner products (&quot;Try sponsored honey for glucose control&quot;)</li>
                <li>Voice agent answers: &quot;Where to buy almonds?&quot; → Amazon link + voice reply</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold">4. Legal & Logistics</h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>Simple MoU (your lawyer drafts — no exclusivity)</li>
                <li>PCD model (brands supply wholesale; you/franchisees sell with markup)</li>
                <li>Compliance: FSSAI labels, no false claims</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-primary">Ready to Partner?</h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Let&apos;s discuss how your brand can reach thousands of patients through our AI-powered ecosystem.
          </p>
          <Link href="/contact" className={`${buttonBase} ${buttonPrimary}`}>
            Contact Dr. Surendra →
          </Link>
        </div>
      </section>
    </div>
  );
}
