import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metabolism",
  robots: "noindex, nofollow",
};

export default function DashboardMetabolismPage() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Metabolism analysis
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Placeholder for metabolism workflows. Wire to{" "}
        <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">app/api/metabolism</code>{" "}
        when the backend is ready.
      </p>
    </div>
  );
}
