import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Camps",
  description: "Medical camps and community outreach — HOMA Clinics.",
};

export default function CampsPublicPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Medical camps
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Full schedule, photos, and stories are on the{" "}
        <Link href="/medical-camps" className="text-primary underline">
          Medical camps
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
