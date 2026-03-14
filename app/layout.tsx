import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "HOMA Clinics | ClinicFranchise Nexus",
    template: "%s | HOMA Clinics",
  },
  description:
    "HOMA Clinics — medical camps, doctor training, community health. Volunteer, donate, or join our clinic franchise network.",
  keywords: [
    "HOMA Clinics",
    "medical camp",
    "clinic franchise",
    "community health",
    "doctor training",
    "donate",
    "volunteer",
  ],
  openGraph: {
    title: "HOMA Clinics | ClinicFranchise Nexus",
    description:
      "Medical camps, doctor training, community health. Volunteer, donate, or join our clinic franchise network.",
    type: "website",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://homahealthcarecenter.in"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <ClerkProvider>
          <ClientLayout>{children}</ClientLayout>
        </ClerkProvider>
      </body>
    </html>
  );
}
