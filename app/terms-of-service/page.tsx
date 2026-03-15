import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Terms of Service</h1>
          <p className="text-lg opacity-90">HOMA Healthcare Center</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8 rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Medical disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Information on this website is for general awareness only and is not a substitute for professional medical advice. Always consult a qualified doctor for diagnosis and treatment.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Course enrollment terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Enrollment in the 3-Month Certificate Course in Metabolism is subject to acceptance of the course curriculum and fee (₹30,000). Participants must provide accurate information and comply with course requirements.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Franchise terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Franchise participation is subject to a separate Letter of Intent (LOI) and agreement. Terms include 60% revenue share, territory rights, and training obligations as set out in the franchise agreement.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Payment terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Course fee (₹30,000) and other payments are as stated at the time of enrollment or agreement. Payment methods and deadlines will be communicated during registration.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Governing law</h2>
            <p className="text-gray-700 dark:text-gray-300">
              These terms are governed by the laws of Telangana, India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Telangana.
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
