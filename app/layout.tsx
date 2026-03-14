import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
