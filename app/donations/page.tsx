import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { DonationsVoiceButton } from "./DonationsVoiceButton";
import { DonationTiers } from "./DonationTiers";

const qrImages = [
  { src: "/gpay.png", alt: "Google Pay" },
  { src: "/phonepe.png", alt: "PhonePe" },
  { src: "/paytm1.png", alt: "Paytm" },
  { src: "/qrcodehoma1.png", alt: "UPI (9963721999@hdfc)" },
];

export default function DonationsPage() {
  return (
    <div className="min-h-screen">
      <Hero headline="Donate" ctaLabel="See options below" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 py-4">
          <DonationsVoiceButton />
        </div>

        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Donation tiers
        </h2>
        <DonationTiers />

        <h2 className="mb-4 mt-8 text-lg font-semibold text-gray-900 dark:text-white">
          UPI QR codes
        </h2>
        <div className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {qrImages.map((qr) => (
            <Card key={qr.alt} className="flex flex-col items-center">
              <div className="relative h-32 w-32 bg-gray-100 dark:bg-gray-700">
                <Image
                  src={qr.src}
                  alt={qr.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {qr.alt}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
