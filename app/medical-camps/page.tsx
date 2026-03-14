import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { MedicalCampsContent } from "./MedicalCampsContent";

export const metadata: Metadata = {
  title: "Medical Camps | HOMA Clinics",
  description:
    "Free medical camps, diabetes checkups, and community health drives by HOMA Clinics. View past camps, patient impact, and upcoming camp dates.",
  keywords: [
    "medical camp",
    "free health camp",
    "diabetes checkup camp",
    "community health",
    "HOMA Clinics",
    "free medical checkup",
    "health screening",
    "rural health camp",
  ],
  openGraph: {
    title: "Medical Camps | HOMA Clinics",
    description:
      "Free medical camps, diabetes checkups, and community health drives. View past camps and patient impact.",
  },
};

export default function MedicalCampsPage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="Medical Camps"
        ctaLabel="View past camps"
        ctaHref="#past-camps"
      />
      <MedicalCampsContent />
    </div>
  );
}
