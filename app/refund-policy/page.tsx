import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Refund Policy</h1>
          <p className="text-lg opacity-90">Homa Health Care Center</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8 rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Course fee refund</h2>
            <p className="text-gray-700 dark:text-gray-300">
              For the 3-Month Certificate Course in Metabolism (course fee ₹30,000), refunds are available if you request cancellation within 7 days of payment and before the course start date. After 7 days or after the course has commenced, the course fee is non-refundable. Refund requests must be sent in writing to surendra.muddu@gmail.com.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Camp donations</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Donations made toward medical camps and community health initiatives are non-refundable. They are treated as voluntary contributions to support camp operations and outreach.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">CME workshop cancellation</h2>
            <p className="text-gray-700 dark:text-gray-300">
              For quarterly CME workshops: if we cancel or postpone the workshop, you will be offered a full refund or transfer to the next workshop date. If you cancel your registration, refund eligibility and any administrative charges will be communicated at the time of registration and may vary by event.
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
