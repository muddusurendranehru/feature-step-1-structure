import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Disclaimer",
  description:
    "Full disclaimer for HOMA Healthcare Center — educational and general information use only.",
};

export default function FullDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-3xl font-bold text-primary md:text-4xl">
          Full Disclaimer
        </h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
          HOMA Healthcare Center
        </p>

        <div className="mt-10 space-y-8 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">General information</h2>
            <p>
              Content on this website is provided for general educational and informational purposes
              only. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">No doctor–patient relationship</h2>
            <p>
              Use of this site does not create a doctor–patient relationship. Always seek the advice
              of a qualified health provider with any questions about a medical condition.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Accuracy</h2>
            <p>
              We strive to keep information accurate and up to date but make no warranties or
              representations as to completeness, reliability, or suitability for any purpose.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, HOMA Healthcare Center and its affiliates are
              not liable for any loss or damage arising from reliance on this website or linked
              materials.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="rounded-xl bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
