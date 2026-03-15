import Image from "next/image";

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
  image?: string;
};

// Heart disease tools
const heartTools: AppCard[] = [
  {
    icon: "❤️",
    title: "TyG Index (Heart Risk Before 60)",
    description: "Enter triglycerides and fasting glucose to see heart attack risk. TyG Index used by doctors worldwide.",
    href: "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com",
    image: "/blog/HOMA%20TyG%20Index%20or%20TyG%20Heart%20Risk.jpg",
  },
];

const diabetesTools: AppCard[] = [
  {
    icon: "🎯",
    title: "PCOS HOMA Score",
    description: "Calculate your PCOS HOMA-IR insulin resistance score",
    href: "https://pcos-homaiq-score-frontend.onrender.com",
    image: "/blog/apps-homascore1%20(1).jpg",
  },
  {
    icon: "🍎",
    title: "Nutrition Bot",
    description: "AI nutrition guidance with 3 lakh Indian foods database",
    href: "https://nutrition-bot-frontend.onrender.com",
    image: "/blog/appsnutri-bot-promo.jpg",
  },
  {
    icon: "📄",
    title: "OCR Lab Reports",
    description: "Upload your lab reports — AI reads and explains them",
    href: "https://ai-image-ocr-1.onrender.com",
    image: "/blog/homaocraiapp.jpg",
  },
  {
    icon: "💊",
    title: "Drug Trials Tracker",
    description: "Latest clinical trials for diabetes and metabolism drugs",
    href: "https://drug-trials-frontend.onrender.com",
    image: "/blog/homadrugtiralapp.png",
  },
  {
    icon: "🏥",
    title: "Dr. Muddu MVP (Main Clinic Site)",
    description: "Full clinic website with calculators, blog, assessments",
    href: "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com",
    image: "/blog/homamvpmetabolictool.jpg",
  },
];

const obesityMetabolismTools: AppCard[] = [
  {
    icon: "📊",
    title: "Health Metrics (Diet Tracking)",
    description: "Track your diet, steps and daily health metrics — HOMA-IR, TyG, BMI, waist at a glance",
    href: "https://healthmetrics-render1.onrender.com",
    image: "/blog/homahealthmetrics.jpeg",
  },
  {
    icon: "📏",
    title: "Belly Fat Danger Zone Meter",
    description: "Check if your waist size is in the danger zone. Big waist = high risk of heart attack and diabetes.",
    href: "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com",
    image: "/blog/homawaistcircumferencetool.jpg",
  },
  {
    icon: "📝",
    title: "Dr. Muddu MVP Blog",
    description:
      "Latest articles on diabetes reversal, metabolism, calculators, and patient success stories by Dr. Surendra Nehru.",
    href: "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/blog",
    buttonLabel: "Read the Blog →",
    image: "/blog/drmuddusmvp.png",
  },
  { icon: "🏃", title: "Exercise Database", description: "Coming soon", href: "#", comingSoon: true },
  { icon: "🔐", title: "Patient Portal (unified login)", description: "Coming soon", href: "#", comingSoon: true },
  {
    icon: "💬",
    title: "WhatsApp Bot",
    description: "Chat with Dr. Surendra's team on WhatsApp",
    href: "https://wa.me/919963721999",
    buttonLabel: "Open WhatsApp →",
    image: "/blog/whatsappbot.jpg",
  },
];

function AppCardRow({ app }: { app: AppCard }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800">
      {app.image ? (
        <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
          <Image
            src={app.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      ) : (
        <div className="mb-3 text-3xl">{app.icon}</div>
      )}
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
