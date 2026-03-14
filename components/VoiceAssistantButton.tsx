"use client";

import { useState } from "react";
import { VoiceAssistantModal } from "@/components/VoiceAssistantModal";

export function VoiceAssistantButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fixed bottom-4 right-4 z-40 rounded-full bg-primary p-4 text-white shadow-xl hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Voice assistant"
        onClick={() => setOpen(true)}
      >
        Ask AI
      </button>
      <VoiceAssistantModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
