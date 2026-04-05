import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DDD operations",
  robots: "noindex, nofollow",
};

export default function DashboardDddPage() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        DDD operations
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Placeholder for domain-driven operations console. Connect APIs under{" "}
        <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">app/api/ddd</code>{" "}
        when ready.
      </p>
    </div>
  );
}
