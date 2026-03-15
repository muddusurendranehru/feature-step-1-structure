import Link from "next/link";

export default function FranchiseAgreementPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Franchise Agreement</h1>
          <p className="text-lg opacity-90">Homa Health Care Center</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8 rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Letter of Intent (LOI)</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Franchise participation begins with a Letter of Intent. The LOI template outlines the intent to collaborate, key commercial terms, and next steps toward a formal franchise agreement. You may download the LOI template below.
            </p>
            <a
              href="/LOI-template.pdf"
              download
              className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              Download PDF (LOI template)
            </a>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">60% revenue share</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Under the franchise model, 60% of relevant revenue is shared with the franchisor (Homa Health Care Center / Dr. M. Surendra Nehru) as per the signed agreement. Exact revenue streams and calculation methods are defined in the full franchise agreement.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Territory rights</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Territory rights (geographic area of operation) are agreed in the LOI and formal agreement. Exclusive or non-exclusive rights will be specified per franchisee.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Training obligations</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Franchisees are required to complete training as specified by Homa Health Care Center, including protocols for HOMA-based care, clinic operations, and brand standards. Training obligations and timelines are set out in the franchise agreement.
            </p>
          </div>
        </div>
        <p className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
        </p>
      </section>
    </div>
  );
}
