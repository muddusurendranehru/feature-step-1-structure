import { Button } from "@/components/Button";

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-5 py-3 sm:px-6 sm:py-3.5";
const buttonOutline =
  "border-2 border-white bg-white text-primary hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Seed Funding Opportunity
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Private placement at ₹0.10 (10 paise) per share • Founder retains 51%+ majority •
            10-year horizon
          </p>
          <a
            href="/investor-deck.pdf"
            download
            className={`${buttonBase} ${buttonOutline}`}
          >
            Download Investor Deck (PDF)
          </a>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Why Invest?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Proven Traction</h3>
              <p className="text-gray-700 dark:text-gray-300">
                5000+ patients, 350 YouTube videos, 1200+ doctor network, quarterly CME, AI tools
                live.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Scalable Model</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Franchise-ready: 100+ centers projected in 10 years. Revenue from consultations,
                training, donations.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-primary">Social Impact</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Free camps, awareness lectures, doctor training — real change in metabolic health
                crisis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-16 text-center dark:bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-primary">Investment Structure</h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Private placement • ₹0.10/share • Founder retains 51%+ • 10-year horizon • Exploratory
            Health Coin (HOMA) next
          </p>
          <Button variant="primary" className="px-6 py-3">
            Express Interest (Coming Soon)
          </Button>
        </div>
      </section>
    </div>
  );
}
