export const metadata = {
  title: "HOMA Ecosystem — All Apps | HOMA Clinics",
  description:
    "Informational guide to India's first complete digital universe for Diabetes, Obesity and Heart Disease management. We inform visitors about available specialist apps; we do not provide services directly here.",
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

// Heart disease tools (informational only; more coming)
const heartTools: AppCard[] = [];

const diabetesTools: AppCard[] = [
  {
    icon: "🎯",
    title: "PCOS HOMA Score",
    description: "Calculate your PCOS HOMA-IR insulin resistance score",
    href: "https://pcos-homaiq-score-frontend.onrender.com",
  },
  {
    icon: "🍎",
    title: "Nutrition Bot",
    description: "AI nutrition guidance with 3 lakh Indian foods database",
    href: "https://nutrition-bot-frontend.onrender.com",
  },
  {
    icon: "📄",
    title: "OCR Lab Reports",
    description: "Upload your lab reports — AI reads and explains them",
    href: "https://ai-image-ocr-1.onrender.com",
  },
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

const obesityMetabolismTools: AppCard[] = [
  {
    icon: "📊",
    title: "Health Metrics (Diet Tracking)",
    description: "Track your diet, steps and daily health metrics",
    href: "https://healthmetrics-render1.onrender.com",
  },
  {
    icon: "📝",
    title: "Dr. Muddu MVP Blog",
    description:
      "Latest articles on diabetes reversal, metabolism, calculators, and patient success stories by Dr. Surendra Nehru.",
    href: "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/blog",
    buttonLabel: "Read the Blog →",
  },
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
          {app.buttonLabel ?? "Visit App →"}
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
            Informational only — we are not providing services directly here.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-gray-200 px-4 py-10 dark:border-gray-700">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
            HOMA Universe — Your Complete Metabolic Health Ecosystem
          </h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            We have built India&apos;s first complete digital universe for Diabetes, Obesity and Heart Disease management.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Each tool below is a separate specialist app. Click to visit the one you need.
          </p>
        </div>
      </section>

      {/* 🫀 HEART DISEASE TOOLS */}
      <section className="bg-gray-100 px-4 py-10 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-bold text-primary sm:text-2xl">
            🫀 HEART DISEASE TOOLS
          </h2>
          {heartTools.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {heartTools.map((app) => (
                <AppCardRow key={app.href || app.title} app={app} />
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-white/80 px-4 py-3 text-gray-600 dark:bg-gray-700/80 dark:text-gray-400">
              More tools coming soon.
            </p>
          )}
        </div>
      </section>

      {/* 🩸 DIABETES MANAGEMENT */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-xl font-bold text-primary sm:text-2xl">
            🩸 DIABETES MANAGEMENT
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diabetesTools.map((app) => (
              <AppCardRow key={app.href} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* ⚖️ OBESITY & METABOLISM */}
      <section className="bg-gray-100 px-4 py-12 dark:bg-gray-800 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-xl font-bold text-primary sm:text-2xl">
            ⚖️ OBESITY & METABOLISM
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {obesityMetabolismTools.map((app) => (
              <AppCardRow key={app.href || app.title} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-gray-200 px-4 py-8 dark:border-gray-700">
        <div className="mx-auto max-w-3xl text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            These apps provide information and tracking tools only. Always consult Dr. M. Surendra Nehru MD for medical advice. Call: +91 9963721999
          </p>
        </div>
      </section>
    </div>
  );
}
