"use client";

import { useState, useRef, useCallback } from "react";

type Message = { role: "user" | "assistant"; text: string };

export function VoiceAssistantModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [recording, setRecording] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const messagesRef = useRef<Message[]>([]);
  messagesRef.current = messages;

  const playAudioBlob = useCallback(async (blob: Blob) => {
    if (playing) return;
    setPlaying(true);
    try {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      await new Promise<void>((resolve, reject) => {
        audio.onended = () => {
          URL.revokeObjectURL(url);
          resolve();
        };
        audio.onerror = reject;
        audio.play().catch(reject);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setPlaying(false);
    }
  }, [playing]);

  const submitMessage = useCallback(async (userText: string) => {
    const text = userText.trim();
    if (!text || loading) return;
    const history = messagesRef.current;
    const fullHistory: Message[] = [...history, { role: "user", text }];
    setMessages(fullHistory);
    setLoading(true);
    try {
      const res = await fetch("/api/elevenlabs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: fullHistory }),
      });
      const data = await res.json().catch(() => ({})) as { text?: string; audio?: string; error?: string };
      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: (data.error as string) || "Something went wrong. Please try again.",
          },
        ]);
        setLoading(false);
        return;
      }
      const replyText = typeof data.text === "string" ? data.text : "";
      setMessages((prev) => [...prev, { role: "assistant", text: "Speaking…" }]);
      if (typeof data.audio === "string" && data.audio.length > 0) {
        const binary = atob(data.audio);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const blob = new Blob([bytes], { type: "audio/mpeg" });
        await playAudioBlob(blob);
        setMessages((prev) =>
          prev.map((m, i) =>
            i === prev.length - 1 && m.role === "assistant" ? { ...m, text: replyText || m.text } : m
          )
        );
      } else {
        setMessages((prev) =>
          prev.map((m, i) =>
            i === prev.length - 1 && m.role === "assistant" ? { ...m, text: replyText || m.text } : m
          )
        );
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }, [loading, playAudioBlob]);

  const startRecording = useCallback(async () => {
    if (recording || loading) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size) chunksRef.current.push(e.data);
      };
      recorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        setRecording(false);
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const formData = new FormData();
        formData.append("file", blob, "audio.webm");
        try {
          const res = await fetch("/api/voice/stt", {
            method: "POST",
            body: formData,
          });
          const data = (await res.json()) as { text?: string; error?: string };
          const text = (data.text ?? "").trim();
          if (text) await submitMessage(text);
        } catch {
          // ignore STT errors (e.g. not configured)
        }
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setRecording(true);
    } catch {
      setRecording(false);
    }
  }, [recording, loading, submitMessage]);

  const stopRecording = useCallback(() => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state === "recording") {
      recorder.stop();
      mediaRecorderRef.current = null;
    }
    setRecording(false);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    await submitMessage(text);
  }

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50"
        aria-hidden
        onClick={onClose}
      />
      <div className="fixed inset-x-4 top-1/2 z-50 mx-auto max-h-[85vh] w-full max-w-lg -translate-y-1/2 rounded-2xl bg-white shadow-xl dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            HOMA Clinics Assistant
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200"
            aria-label="Close"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>
        </div>
        <div className="flex max-h-[50vh] flex-col overflow-y-auto p-4">
          {messages.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ask anything about HOMA Clinics. I can answer in Telugu or English.
            </p>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`mb-2 rounded-lg px-3 py-2 ${
                m.role === "user"
                  ? "ml-8 bg-primary text-white"
                  : "mr-8 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {m.text}
            </div>
          ))}
          {loading && (
            <div className="mb-2 mr-8 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">
              Thinking…
            </div>
          )}
          {recording && (
            <div className="mb-2 mr-8 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400">
              Listening…
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 dark:border-gray-700">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={recording ? stopRecording : startRecording}
              disabled={loading}
              className={`rounded-lg px-3 py-2 ${
                recording
                  ? "animate-pulse bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
              }`}
              title={recording ? "Stop recording" : "Speak (speech-to-text)"}
              aria-label={recording ? "Stop recording" : "Speak"}
            >
              {recording ? (
                <span className="text-sm font-medium">Stop</span>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
                </svg>
              )}
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type or speak your question…"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg bg-primary px-4 py-2 font-medium text-white hover:bg-primary-dark disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
