import Image from "next/image";
import Link from "next/link";

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-5 py-3 sm:px-6 sm:py-3.5";
const buttonOutline =
  "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2";
const buttonPrimary =
  "bg-primary hover:bg-primary-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2";

const FOUNDER_ACHIEVEMENTS = [
  "1,000+ free diabetic camps in rural India",
  "Pioneer: first to test all hormones at night",
  "Pioneer: first to integrate wearables + metabolism",
  "Pioneer: introduced waist circumference as independent risk factor",
  "Pioneer: serum insulin testing protocol",
  "Building India's budget-friendly preventive healthcare using latest AI technology",
];

const FOUNDER_CREDENTIALS = [
  "4 International papers published",
  "Books authored",
  "Chairperson & Speaker — All India Diabetes Conference",
  "100+ doctors as patients!",
  "12 medical college visits",
  "2,500 doctor followers",
  "1,200+ doctor network",
];

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg" },
  { label: "Instagram", href: "https://instagram.com/surendramuddugmailcom" },
  { label: "Twitter", href: "https://twitter.com/surendramuddu" },
  { label: "LinkedIn", href: "https://linkedin.com/in/surendramuddu" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Clinic photo at top */}
      <section className="relative h-56 w-full sm:h-72 md:h-80">
        <Image
          src="/blog/homa-clinic-gachibowli.jpeg"
          alt="HOMA Healthcare Center Gachibowli Hyderabad"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            Community & Social Impact
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Free medical camps, awareness lectures, donations — serving thousands in Telangana
          </p>
        </div>
      </section>

      {/* Founder bio section */}
      <section className="px-4 py-16 bg-white dark:bg-gray-900" id="founder-bio">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">
            About Dr. Muddu Surendra Nehru MD
          </h2>
          <p className="mb-2 text-center text-xl font-semibold text-gray-700 dark:text-gray-300">
            Founder, HOMA Health Care Hyderabad
          </p>

          <div className="mb-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 bg-primary/5 md:h-72 md:w-80">
              <Image
                src="/blog/homa-clinic-gachibowli.jpeg"
                alt="HOMA Healthcare Center Gachibowli Hyderabad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <div className="flex-1">
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                With over <strong>25 years of experience</strong> in preventive medicine, Dr. Surendra Nehru has dedicated his career to one mission:{" "}
                <strong>making India diabetes-free and obesity-free</strong>.
              </p>
              <blockquote className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 text-lg italic text-gray-800 dark:bg-primary/10 dark:text-gray-200">
                &ldquo;Metabolism is the key to managing both acute and chronic diseases. Only through accurate testing of micro and nano molecules, combined with lifestyle changes, can India win the battle against chronic diseases.&rdquo;
              </blockquote>
            </div>
          </div>

          <h3 className="mb-4 text-center text-xl font-bold text-primary">
            Achievements
          </h3>
          <ul className="mb-8 space-y-3 text-gray-700 dark:text-gray-300">
            {FOUNDER_ACHIEVEMENTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="shrink-0 text-primary" aria-hidden>✅</span>
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 text-center text-xl font-bold text-primary">
            Credentials &amp; Recognition
          </h3>
          <ul className="mb-10 space-y-3 text-gray-700 dark:text-gray-300">
            {FOUNDER_CREDENTIALS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="shrink-0 text-primary" aria-hidden>✅</span>
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border-2 border-primary bg-primary/5 px-5 py-3 font-medium text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOMA Secrets — The Book */}
      <section className="px-4 py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-primary">
            HOMA Secrets — The Book
          </h2>
          <p className="mb-2 text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
            Reversal of Obesity, Fatty Liver, Diabetes & Heart Attacks
          </p>
          <p className="mb-1 text-center text-gray-600 dark:text-gray-400">
            Authors: Dr. Muddu Surendra Nehru MD et al.
          </p>
          <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
            Published: 2024, Mamatha Academy
          </p>
          <div className="flex justify-center">
            <a
              href="/homa-secrets-book.pdf"
              download
              className={`${buttonBase} ${buttonPrimary}`}
            >
              Download Book PDF →
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">
            Research Publications
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
              Association of TyG Index with HbA1c Levels in Adults
            </h3>
            <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">International Journal of Medicine</span>
              {" · "}ISSN: —
            </p>
            <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
              Vol. 8, Issue 2, March 2026
            </p>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
              Authors: Sachdev MC, Nehru MS, Rahul K, Varshha AS
            </p>
            <p className="mb-4 text-sm">
              <a
                href="https://doi.org/10.61336/im/26-3-10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                DOI: 10.61336/im/26-3-10
              </a>
            </p>
            <div className="mb-6 rounded-xl border border-primary/30 bg-primary/10 p-4 dark:bg-primary/20">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Key finding: TyG Index significantly predicts poor glycemic control (r=0.46,
                p=0.001)
              </p>
            </div>
            <a
              href="/research/tyg-hba1c-paper-2026.pdf"
              download
              className={`${buttonBase} ${buttonPrimary}`}
            >
              Download PDF
            </a>
          </div>
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
