import Link from "next/link";

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-5 py-3 sm:px-6 sm:py-3.5";
const buttonOutline =
  "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2";
const buttonPrimary =
  "bg-primary hover:bg-primary-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Community & Social Impact
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Free medical camps, awareness lectures, donations — serving thousands in Telangana
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-primary">Free Medical Camps</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Regular free diabetes & metabolism screening camps in housing societies and
              underserved areas. Hundreds screened, early detection, free advice.
            </p>
            <Link
              href="/medical-camps"
              className={`${buttonBase} ${buttonOutline}`}
            >
              View Past Camps →
            </Link>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Housing Society Lectures
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Monthly awareness talks on metabolism, diet, AI health tools — delivered directly in
              residential societies.
            </p>
            <Link
              href="/education"
              className={`${buttonBase} ${buttonOutline}`}
            >
              Upcoming Lectures →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-16 text-center dark:bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-primary">Support Our Work</h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Your donations fund free camps and lectures — every rupee helps early detection &
            education.
          </p>
          <Link href="/donations" className={`${buttonBase} ${buttonPrimary}`}>
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
}
