"use client";

export function DonationsVoiceButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-primary/5 px-4 py-2.5 text-primary hover:bg-primary/10 sm:px-5 sm:py-3"
      onClick={() => alert("Ask AI about donations")}
    >
      Ask AI about donations
    </button>
  );
}
