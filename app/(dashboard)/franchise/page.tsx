import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise",
  robots: "noindex, nofollow",
};

export default function DashboardFranchisePage() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Franchise operations
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Placeholder for franchise workflows (aligned with public{" "}
        <a href="/join-us" className="text-primary underline">
          Join us
        </a>
        ).
      </p>
    </div>
  );
}
