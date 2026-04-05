import Image from "next/image";
import Link from "next/link";

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-5 py-3 sm:px-6 sm:py-3.5";
const buttonOutline =
  "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2";
const buttonPrimary =
  "bg-primary hover:bg-primary-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2";

export default function DoctorTrainingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            3-Month Certificate Course in Metabolism
          </h1>
          <p className="mb-8 text-xl opacity-90 md:text-2xl">
            ₹30,000 only • Hybrid (Online + Offline Hands-on) • Led by Professor Dr. Surendra
          </p>
          <Link
            href="#curriculum"
            className={`${buttonBase} ${buttonOutline} bg-white text-primary hover:bg-gray-100`}
          >
            View Curriculum
          </Link>
        </div>
      </section>

      {/* Led by – Doctor image */}
      <section className="border-b border-primary/10 bg-white px-4 py-12 dark:bg-gray-900 dark:border-primary/20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 bg-primary/5 ring-2 ring-primary/10 sm:h-64 sm:w-64">
            <Image
              src="/blog/drmuddusmvp.png"
              alt="Dr. Muddu Surendra Nehru MD – Professor of Medicine, Founder HOMA Healthcare Center"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 224px, 256px"
              priority
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="mb-2 text-2xl font-bold text-primary">Led by your instructor</h2>
            <p className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
              Dr. Muddu Surendra Nehru MD
            </p>
            <p className="mb-3 text-gray-600 dark:text-gray-400">
              Professor of Medicine • Senior Physician • Founder, HOMA Health Care Hyderabad
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              30+ years in preventive medicine. Pioneer in metabolism testing, insulin resistance protocols, and AI-driven care. Trusted by 1,200+ doctors and 10,000+ patients.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-primary">
              Become a Metabolism Expert
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Master diabetes & metabolism A to Z — physiology, nutrition, drugs, AI tools — with
              hands-on experience in our franchise clinics.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-primary">
              Revenue-Share Opportunity
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Top performers get priority to open/partner in new HOMA centers — 60% revenue share
              model, no fixed salary.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-primary">Prestige & Growth</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Certificate boosts your CV. Speak at our quarterly 5-star CME (4 NMC/IMA credits). Join
              1200+ doctor network.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section
        id="curriculum"
        className="bg-gray-100 px-4 py-16 dark:bg-gray-800"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary">
            Curriculum – A to Z Coverage
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold">
                Module 1: Physiology of Metabolism & Diabetes
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>Normal & abnormal carbohydrate/lipid/protein metabolism</li>
                <li>Insulin resistance, beta-cell dysfunction, metabolic syndrome</li>
                <li>All types of diabetes</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold">
                Module 2: Nutrition in Diabetes & Metabolism
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>Evidence-based diets (Indian adaptations, our 3-lakh database)</li>
                <li>Personalized nutrition plans using AI Nutri Engine</li>
                <li>Special cases: pregnancy, elderly, CKD, obesity</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold">
                Module 3: Drugs & Pharmacotherapy A to Z
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>Oral agents: Metformin, SGLT2i, GLP-1 RA, etc.</li>
                <li>Insulin therapies & newer agents (Tirzepatide, Semaglutide)</li>
                <li>Complications management & de-prescribing</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold">
                Module 4: AI & Technology in Metabolism Practice
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>AI OCR for lab reports & vitals</li>
                <li>Metabolism Speedometer (green-red gauges)</li>
                <li>Voice reminders & patient engagement</li>
                <li>Data analytics for clinic profitability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOI Download */}
      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-primary">Ready to Start?</h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Download the Letter of Intent (LOI) template and join our network.
          </p>
          <a
            href="/LOI-template.pdf"
            download
            className={`${buttonBase} ${buttonPrimary}`}
          >
            Download LOI Template (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
