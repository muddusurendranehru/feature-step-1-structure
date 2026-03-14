"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { VoiceAssistantButton } from "@/components/VoiceAssistantButton";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <VoiceAssistantButton />
    </>
  );
}
