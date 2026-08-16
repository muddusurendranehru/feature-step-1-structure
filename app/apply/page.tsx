"use client";
import { useState } from "react";

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh","Puducherry","Other"
];

const BUDGETS = [
  "Under ₹5 Lakhs",
  "₹5–10 Lakhs",
  "₹10–25 Lakhs",
  "₹25–50 Lakhs",
  "₹50 Lakhs – 1 Crore",
  "Above ₹1 Crore",
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  type: string;
  mci_number: string;
  specialization: string;
  experience_years: string;
  lab_name: string;
  investment_budget: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  city: "",
  state: "",
  type: "",
  mci_number: "",
  specialization: "",
  experience_years: "",
  lab_name: "",
  investment_budget: "",
  message: "",
};

export default function ApplyPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/franchise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          experience_years: form.experience_years ? parseInt(form.experience_years) : null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Dr. Surendra, I want to apply for HOMA Franchise.\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}, ${form.state}\nType: ${form.type}`
    );
    window.open(`https://wa.me/919963721999?text=${msg}`, "_blank");
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in HOMA Clinics franchise. Dr. Surendra's team will
            contact you within 24 hours.
          </p>
          <a
            href={`https://wa.me/919963721999?text=${encodeURIComponent("Hi, I just submitted my HOMA franchise application. Please confirm receipt.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl transition-colors mb-3 w-full justify-center"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Also message us on WhatsApp
          </a>
          <a href="/" className="text-primary hover:underline text-sm">← Back to HOMA Clinics</a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <a href="/" className="text-primary hover:underline text-sm">← Back to HOMA Clinics</a>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-2">
          Join the HOMA Franchise Network
        </h1>
        <p className="text-gray-600">
          India's first diabetes reversal franchise. Apply below — Dr. Surendra's team reviews every application personally.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {["32 Years Experience", "9 Books Published", "DPIIT Recognised", "350+ YouTube Videos"].map((tag) => (
            <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6"
      >
        {/* Type selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            I am a <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Doctor", "Lab Partner", "Investor", "Other"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => set("type", t)}
                className={`py-2.5 px-3 rounded-xl border-2 text-sm font-medium transition-all ${
                  form.type === t
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 text-gray-600 hover:border-primary/50"
                }`}
              >
                {t === "Doctor" ? "👨‍⚕️ " : t === "Lab Partner" ? "🔬 " : t === "Investor" ? "💼 " : "👤 "}
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Basic info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Dr. Ramesh Kumar"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="9876543210"
              maxLength={10}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="doctor@example.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => set("city", e.target.value)}
              placeholder="Hyderabad"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">State</label>
            <select
              value={form.state}
              onChange={(e) => set("state", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white"
            >
              <option value="">Select state</option>
              {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Doctor-specific fields */}
        {form.type === "Doctor" && (
          <div className="bg-blue-50 rounded-xl p-4 space-y-4">
            <p className="text-sm font-semibold text-blue-700">Doctor Details</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">MCI Registration Number</label>
                <input
                  type="text"
                  value={form.mci_number}
                  onChange={(e) => set("mci_number", e.target.value)}
                  placeholder="MH-12345"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Specialization</label>
                <input
                  type="text"
                  value={form.specialization}
                  onChange={(e) => set("specialization", e.target.value)}
                  placeholder="General Medicine / Diabetology"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Years of Practice</label>
              <input
                type="number"
                min="0"
                max="60"
                value={form.experience_years}
                onChange={(e) => set("experience_years", e.target.value)}
                placeholder="10"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white"
              />
            </div>
          </div>
        )}

        {/* Lab-specific fields */}
        {form.type === "Lab Partner" && (
          <div className="bg-purple-50 rounded-xl p-4 space-y-4">
            <p className="text-sm font-semibold text-purple-700">Lab Details</p>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Lab Name</label>
              <input
                type="text"
                value={form.lab_name}
                onChange={(e) => set("lab_name", e.target.value)}
                placeholder="Ramesh Diagnostics Pvt Ltd"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white"
              />
            </div>
          </div>
        )}

        {/* Investment budget */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Investment Budget</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {BUDGETS.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => set("investment_budget", b)}
                className={`py-2 px-3 rounded-xl border-2 text-xs font-medium transition-all text-left ${
                  form.investment_budget === b
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-gray-200 text-gray-600 hover:border-primary/50"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Why do you want to join HOMA?
          </label>
          <textarea
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            rows={3}
            placeholder="Tell us about your clinic / lab / interest in diabetes reversal..."
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
            {errorMsg} —{" "}
            <button type="button" onClick={openWhatsApp} className="underline font-medium">
              Contact us on WhatsApp instead
            </button>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading" || !form.type || !form.name || !form.phone}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
        >
          {status === "loading" ? "Submitting..." : "Submit Application →"}
        </button>

        <p className="text-center text-xs text-gray-400">
          Or reach us directly on{" "}
          <button type="button" onClick={openWhatsApp} className="text-green-600 underline font-medium">
            WhatsApp +91 99637 21999
          </button>
        </p>
      </form>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919963721999?text=Hi%20Dr.%20Surendra%2C%20I%20want%20to%20apply%20for%20HOMA%20Franchise"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors z-50"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}
