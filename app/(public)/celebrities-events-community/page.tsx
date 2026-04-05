import Link from "next/link";
import { BlogCardImage } from "@/components/ui/BlogCardImage";
import { CelebritiesMeetingsContent } from "./CelebritiesMeetingsContent";

export const metadata = {
  title: "Celebrities, Events & Community | HOMA Clinics",
  description:
    "Celebrities who trust Dr. Surendra Nehru, upcoming events, free medical camps, and our growing community of patients, doctors & partners.",
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-5 py-3 bg-primary hover:bg-primary-dark text-white shadow-sm";
const btnOutlineWhite =
  "inline-flex items-center justify-center rounded-xl border-2 border-white bg-white px-5 py-3 font-medium text-primary transition hover:bg-gray-100";

export default function CelebritiesEventsCommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Celebrities • Events • Community
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Join thousands who trust Dr. M. Surendra Nehru&apos;s Universe of Metabolism Management
          </p>
        </div>
      </section>

      <CelebritiesMeetingsContent />

      {/* Upcoming Events & Free Camps */}
      <section className="py-16 md:py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
            Upcoming Events & Free Camps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 md:h-56">
                <BlogCardImage
                  src="/blog/infographic-%20(1).jpg"
                  alt="Free Diabetes Camp"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Free Diabetes & Metabolism Checkup Camp
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Date: 28 February 2026
                  <br />
                  Time: 9 AM – 2 PM
                  <br />
                  Venue: Gachibowli Community Hall, Hyderabad
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Free blood sugar test, BMI, HOMA-IR check, diet advice by Dr. Surendra team
                </p>
                <Link href="/medical-camps" className={btnPrimary}>
                  Register / View Details
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 md:h-56">
                <BlogCardImage
                  src="/blog/infographic-%20(4).jpg"
                  alt="Quarterly CME Workshop"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Quarterly CME on Metabolism (4 Credits)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Date: April 12, 2026
                  <br />
                  Time: 9 AM – 5 PM
                  <br />
                  Venue: 5-Star Hotel, Hyderabad
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  For MBBS doctors, dentists, physiotherapists, nurses — hands-on AI tools & latest
                  protocols
                </p>
                <Link href="/education" className={btnPrimary}>
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-primary">
            Our Growing Community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">5,000+ Patients</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tracked & helped with metabolism, diabetes, PCOS & obesity reversal programs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">1,200+ Doctor Network</h3>
              <p className="text-gray-700 dark:text-gray-300">
                MBBS, dentists, physiotherapists & health-tech enthusiasts learning & collaborating.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Free Camps & Lectures</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Monthly free camps & awareness talks in housing societies — early detection &
                education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Community</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands who are transforming their metabolism health with Dr. Surendra&apos;s
            guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-us" className={btnOutlineWhite}>
              Join Us →
            </Link>
            <Link href="/medical-camps" className={btnOutlineWhite}>
              Attend a Free Camp →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
