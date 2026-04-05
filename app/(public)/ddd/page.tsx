import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DDD",
  description:
    "Domain-driven design and clinical operations context for HOMA Clinics.",
};

export default function DddPublicPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        DDD & operations
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        High-level overview of how clinical and franchise workflows are modeled.
        Detailed tools live in the{" "}
        <Link href="/dashboard/ddd-operations" className="text-primary underline">
          dashboard
        </Link>{" "}
        after sign-in.
      </p>
    </div>
  );
}
