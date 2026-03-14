"use client";

export function VoiceAssistantButton() {
  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 z-40 rounded-full bg-primary p-4 text-white shadow-lg hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Voice assistant"
      onClick={() => alert("Voice assistant starting...")}
    >
      Ask AI
    </button>
  );
}
