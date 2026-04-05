import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Settings",
  description: "Edit voice assistant settings (HOMA Clinics dashboard).",
  robots: "noindex, nofollow",
};

export default function AdminVoiceSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
