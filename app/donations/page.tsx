import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";
import { DonationsVoiceButton } from "./DonationsVoiceButton";
import { DonationTiers } from "./DonationTiers";

const qrImages = [
  { src: "/blog/gpay.png", alt: "Google Pay" },
  { src: "/blog/phonepe.png", alt: "PhonePe" },
  { src: "/blog/paytm1.png", alt: "Paytm" },
  { src: "/blog/qrcodehoma1.png", alt: "UPI (9963721999@hdfc)" },
];

export default function DonationsPage() {
  return (
    <div className="min-h-screen">
      {/* First hero section with appreciation image */}
      <section className="relative w-full overflow-hidden bg-primary">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-20">
          <div className="order-2 text-center text-white lg:order-1 lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Donate
            </h1>
            <p className="mt-4 text-lg opacity-95">
              Your support funds free camps, awareness, and early detection. Join us in making India diabetes-free.
            </p>
            <Link
              href="#donation-tiers"
              className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-white bg-white/10 px-5 py-3 font-medium text-white hover:bg-white hover:text-primary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:px-6 sm:py-3.5"
            >
              See options below
            </Link>
          </div>
          <div className="relative order-1 w-full lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10">
              <Image
                src="/blog/homa-chiru.jpg"
                alt="Dr. Surendra Nehru with Megastar Chiranjeevi – appreciation for HOMA Healthcare Center"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-white/95 lg:text-left">
              Dr. Surendra Nehru with Megastar Chiranjeevi – appreciation for HOMA Healthcare Center
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 py-4">
          <DonationsVoiceButton />
        </div>

        {/* Awareness – why donate */}
        <section className="mb-12 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 dark:bg-primary/10 md:p-8">
          <h2 className="mb-4 text-center text-xl font-bold text-primary sm:text-2xl">
            Insulin resistance? Know the signs.
          </h2>
          <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
            Your support funds free camps, awareness, and early detection. Many don’t know the signs until it’s too late.
          </p>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
            <Image
              src="/blog/insulin-resistance-awareness.png"
              alt="Insulin resistance – know the signs. Awareness for diabetes and metabolic health."
              width={800}
              height={450}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </section>

        <h2 id="donation-tiers" className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
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
