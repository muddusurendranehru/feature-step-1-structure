import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "ClinicFranchise Nexus",
  description:
    "Private AI-first medical clinic franchise system (metabolism focus)",
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
