"use client";

export function AskAiButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-primary/5 px-4 py-2.5 text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-5 sm:py-3"
      aria-label="Ask AI"
    >
      <span className="text-lg" aria-hidden>
        🤖
      </span>
      Ask AI
    </button>
  );
}
