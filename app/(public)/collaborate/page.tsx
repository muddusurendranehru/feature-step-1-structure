import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Collaborate with HOMA Healthcare Center — submit your interest via our secure Google Form.",
};

const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScFyqzVxG4DzDlEgCHFlwNnPbo6Iz1jHLPHrxdQKQBwA9fEcQ/viewform?embedded=true";

export default function CollaboratePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-3xl font-bold text-primary md:text-4xl">Collaborate</h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
          HOMA Healthcare Center
        </p>

        <p className="mt-8 text-center text-gray-700 dark:text-gray-300">
          Use the form below to share your collaboration interest. If it does not load, try refreshing
          the page or opening the form in a new browser tab.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="relative w-full" style={{ minHeight: "1200px" }}>
            <iframe
              title="Collaboration interest form"
              src={FORM_EMBED_URL}
              className="absolute inset-0 h-full min-h-[1200px] w-full border-0"
              loading="lazy"
            />
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
