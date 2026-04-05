import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Terms",
  description:
    "Legal terms governing use of the HOMA Healthcare Center website and related services.",
};

export default function LegalTermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-3xl font-bold text-primary md:text-4xl">Legal Terms</h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
          HOMA Healthcare Center
        </p>

        <div className="mt-10 space-y-8 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Acceptance</h2>
            <p>
              By accessing or using this website, you agree to these terms and our applicable
              policies (including privacy and disclaimers). If you do not agree, please do not use
              the site.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Use of the site</h2>
            <p>
              You agree to use the site only for lawful purposes and in a way that does not infringe
              the rights of others or restrict their use of the site. We may suspend or restrict
              access where necessary to protect users or our systems.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Intellectual property</h2>
            <p>
              Text, graphics, logos, and other materials on this site are owned by or licensed to HOMA
              Healthcare Center unless otherwise stated. Unauthorised reproduction or distribution is
              prohibited.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Changes</h2>
            <p>
              We may update these terms from time to time. Continued use of the site after changes
              constitutes acceptance of the revised terms.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Contact</h2>
            <p>
              For legal inquiries, contact:{" "}
              <a
                href="mailto:surendra.muddu@gmail.com"
                className="font-medium text-primary underline hover:no-underline"
              >
                surendra.muddu@gmail.com
              </a>
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
