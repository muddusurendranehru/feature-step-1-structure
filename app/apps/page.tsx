export const metadata = {
  title: "HOMA Ecosystem — All Apps | HOMA Clinics",
  description:
    "World's First Physician-Built AI Medical Platform — Health Metrics, Nutrition Bot, PCOS HOMA Score, OCR Lab Reports, Drug Trials, and more.",
  robots: "index, follow",
};

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors px-4 py-2.5 sm:px-5 sm:py-3";
const buttonPrimary =
  "bg-primary hover:bg-primary-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2";

type AppCard = {
  icon: string;
  title: string;
  description: string;
  href: string;
  comingSoon?: boolean;
  buttonLabel?: string;
};

const patientTools: AppCard[] = [
  {
    icon: "📊",
    title: "Health Metrics (Diet Tracking)",
    description: "Track your diet, steps and daily health metrics",
    href: "https://healthmetrics-render1.onrender.com",
  },
  {
    icon: "🍎",
    title: "Nutrition Bot",
    description: "AI nutrition guidance with 3 lakh Indian foods database",
    href: "https://nutrition-bot-frontend.onrender.com",
  },
  {
    icon: "🎯",
    title: "PCOS HOMA Score",
    description: "Calculate your PCOS HOMA-IR insulin resistance score",
    href: "https://pcos-homaiq-score-frontend.onrender.com",
  },
  {
    icon: "📄",
    title: "OCR Lab Reports",
    description: "Upload your lab reports — AI reads and explains them",
    href: "https://ai-image-ocr-1.onrender.com",
  },
];

const doctorTools: AppCard[] = [
  {
    icon: "💊",
    title: "Drug Trials Tracker",
    description: "Latest clinical trials for diabetes and metabolism drugs",
    href: "https://drug-trials-frontend.onrender.com",
  },
  {
    icon: "🏥",
    title: "Dr. Muddu MVP (Main Clinic Site)",
    description: "Full clinic website with calculators, blog, assessments",
    href: "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com",
  },
];

const comingSoon: AppCard[] = [
  { icon: "🏃", title: "Exercise Database", description: "Coming soon", href: "#", comingSoon: true },
  { icon: "🔐", title: "Patient Portal (unified login)", description: "Coming soon", href: "#", comingSoon: true },
  {
    icon: "💬",
    title: "WhatsApp Bot",
    description: "Chat with Dr. Surendra's team on WhatsApp",
    href: "https://wa.me/919963721999",
    buttonLabel: "Open WhatsApp →",
  },
];

function AppCardRow({ app }: { app: AppCard }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800">
      <div className="mb-3 text-3xl">{app.icon}</div>
      <h3 className="mb-2 text-xl font-bold text-primary">{app.title}</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{app.description}</p>
      {app.comingSoon ? (
        <span className={`${buttonBase} cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400`}>
          Coming soon
        </span>
      ) : (
        <a
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} ${buttonPrimary}`}
        >
          {app.buttonLabel ?? "Open App →"}
        </a>
      )}
    </div>
  );
}

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            HOMA Ecosystem — All Apps
          </h1>
          <p className="text-xl opacity-90 md:text-2xl">
            World&apos;s First Physician-Built AI Medical Platform
          </p>
        </div>
      </section>

      {/* Patient Tools */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-primary sm:text-3xl">
            Patient Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {patientTools.map((app) => (
              <AppCardRow key={app.href} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Tools */}
      <section className="bg-gray-100 px-4 py-12 dark:bg-gray-800 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-primary sm:text-3xl">
            Doctor Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {doctorTools.map((app) => (
              <AppCardRow key={app.href} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-primary sm:text-3xl">
            Coming Soon
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {comingSoon.map((app) => (
              <AppCardRow key={app.title} app={app} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
