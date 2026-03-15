import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
          <p className="text-lg opacity-90">HOMA Healthcare Center</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8 rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Data collection</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We collect name, phone, and email when you use our forms (e.g. Join us, Enroll, contact). This information is used to respond to your requests and manage enrollments.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">How we use patient data</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your data is used only to provide services you requested (appointments, course enrollment, volunteer/donor coordination). We do not sell your data to third parties.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Neon database storage</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Form submissions (volunteers, donors, camp data, enrollments) are stored securely in our Neon PostgreSQL database (ClinicFlow). Access is restricted and used only for clinic operations.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Third parties</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We use Clerk for authentication (sign-in, admin protection), and Cloudinary for photo uploads (e.g. medical camp images). These providers have their own privacy policies. We do not share your data beyond what is necessary for these services.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300">
              For privacy questions or to request access/deletion of your data, contact:{" "}
              <a href="mailto:surendra.muddu@gmail.com" className="text-primary underline hover:no-underline">
                surendra.muddu@gmail.com
              </a>
            </p>
          </div>
        </div>
        <p className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
        </p>
      </section>
    </div>
  );
}
