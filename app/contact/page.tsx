import Link from "next/link";

export const metadata = {
  title: "Contact HOMA Clinics | Dr. M. Surendra Nehru",
  description:
    "Get in touch with Dr. Surendra Nehru for clinic consultations, franchise inquiries, partnerships, or questions.",
};

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-5 py-3 sm:px-6 sm:py-3.5 w-full";
const buttonPrimary =
  "bg-primary hover:bg-primary-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2";
const buttonOutline =
  "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            Get in Touch with HOMA Clinics
          </h1>
          <p className="mb-8 text-xl opacity-90 md:text-2xl">
            Reach Dr. M. Surendra Nehru and our team for consultations, franchise, partnerships, or questions.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Left: Details */}
          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
            <h2 className="mb-8 text-3xl font-bold text-primary">Our Details</h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Dr. M. Surendra Nehru</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Professor of Medicine & Founder, HOMA Clinics
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Phone / WhatsApp</h3>
                <p className="text-2xl font-bold text-primary">+91 99637 21999</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  (Best for quick queries & appointments)
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Email</h3>
                <p className="text-xl font-medium text-primary">
                  <a href="mailto:surendra.muddu@gmail.com" className="hover:underline">
                    surendra.muddu@gmail.com
                  </a>
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  (For franchise, partnership, or detailed inquiries)
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Location</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Gachibowli, Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>

          {/* Right: Quick Actions */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h2 className="mb-6 text-2xl font-bold text-primary">Quick Actions</h2>
              <div className="space-y-4">
                <a
                  href="tel:+919963721999"
                  className={`${buttonBase} ${buttonPrimary}`}
                >
                  Call / WhatsApp Now
                </a>
                <a
                  href="mailto:surendra.muddu@gmail.com"
                  className={`${buttonBase} ${buttonOutline}`}
                >
                  Send Email
                </a>
                <Link
                  href="/join-us"
                  className={`${buttonBase} ${buttonOutline}`}
                >
                  Volunteer / Donate
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h2 className="mb-6 text-2xl font-bold text-primary">Business Inquiries</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Interested in franchise, sponsorship, nutraceutical partnership, or Amazon supply tie-up?
              </p>
              <a
                href="mailto:surendra.muddu@gmail.com?subject=Partnership%20Inquiry%20-%20HOMA%20Clinics"
                className={`${buttonBase} ${buttonPrimary}`}
              >
                Send Partnership Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
