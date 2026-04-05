import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for HOMA Healthcare Center — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-3xl font-bold text-primary md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
          HOMA Healthcare Center
        </p>

        <div className="mt-10 space-y-8 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Data collection</h2>
            <p>
              We collect name, phone, and email when you use our forms (e.g. Join us, Enroll,
              contact). This information is used to respond to your requests and manage enrollments.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">How we use patient data</h2>
            <p>
              Your data is used only to provide services you requested (appointments, course
              enrollment, volunteer/donor coordination). We do not sell your data to third parties.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Neon database storage</h2>
            <p>
              Form submissions (volunteers, donors, camp data, enrollments) are stored securely in
              our Neon PostgreSQL database (ClinicFlow). Access is restricted and used only for
              clinic operations.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Third parties</h2>
            <p>
              We use Clerk for authentication (sign-in, admin protection), and Cloudinary for photo
              uploads (e.g. medical camp images). These providers have their own privacy policies. We
              do not share your data beyond what is necessary for these services.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Contact</h2>
            <p>
              For privacy questions or to request access/deletion of your data, contact:{" "}
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
