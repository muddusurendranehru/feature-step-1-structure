"use client";

import { useState } from "react";
import { VoiceAssistantModal } from "@/components/VoiceAssistantModal";

export function VoiceAssistantButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fixed bottom-6 right-6 z-40 flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-primary p-5 text-white shadow-xl hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:bottom-8 sm:right-8"
        aria-label="Voice assistant"
        onClick={() => setOpen(true)}
      >
        Ask AI
      </button>
      <VoiceAssistantModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
