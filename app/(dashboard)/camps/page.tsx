import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Camps",
  robots: "noindex, nofollow",
};

export default function DashboardCampsPage() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Medical camps
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Manage camps via the{" "}
        <Link href="/dashboard" className="text-primary underline">
          overview
        </Link>{" "}
        (lists and actions) or the public{" "}
        <Link href="/medical-camps" className="text-primary underline">
          medical camps
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
