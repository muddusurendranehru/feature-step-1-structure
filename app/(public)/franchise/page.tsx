import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franchise",
  description: "HOMA Clinics franchise network — join, collaborate, grow.",
};

export default function FranchisePublicPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Clinic franchise
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Explore partnership options and agreements. For inquiries, see{" "}
        <Link href="/join-us" className="text-primary underline">
          Join us
        </Link>{" "}
        and{" "}
        <Link href="/franchise-agreement" className="text-primary underline">
          Franchise agreement
        </Link>
        .
      </p>
    </div>
  );
}
