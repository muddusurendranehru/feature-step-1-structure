"use client";

import { useState } from "react";
import Image from "next/image";

const INVESTMENT_CAPACITY_OPTIONS = [
  { value: "", label: "Select investment range" },
  { value: "1-5 lakh", label: "₹1–5 lakh (seed supporter)" },
  { value: "5-25 lakh", label: "₹5–25 lakh (angel investor)" },
  { value: "25 lakh-1 crore", label: "₹25 lakh–1 crore (strategic)" },
  { value: "above 1 crore", label: "Above ₹1 crore (institutional)" },
];

export default function InvestorsPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [investmentCapacity, setInvestmentCapacity] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleInvestorSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/surendra.muddu@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Investor Inquiry — ${fullName} (${investmentCapacity})`,
          name: fullName,
          phone,
          email,
          investment_capacity: investmentCapacity,
          message: message || "No message",
          _template: "table",
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setFullName(""); setPhone(""); setEmail("");
        setInvestmentCapacity(""); setMessage("");
      } else {
        setError("Something went wrong. Please WhatsApp us directly.");
      }
    } catch {
      setError("Network error. Please WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* ── DOCTOR PROFILE STRIP ── */}
      <section className="bg-white border-b border-gray-100 px-6 py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_400/v1786780762/drnehruprogfilenew1_cfburo.jpg"
              alt="Dr. Muddu Surendra Nehru MD"
              className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-[#1B6B45]"
            />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1B6B45] uppercase tracking-widest mb-2">Founder & Chief Physician</div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">Dr. Muddu Surendra Nehru MD</h2>
            <p className="text-gray-500 text-sm mb-3">HOMA Health Care Center · Gachibowli, Hyderabad · Since 1994</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["32 Years Experience", "3 Indexed Papers", "8 Books Published", "5,000+ HOMA Tests", "6+ Best Doctor Awards", "DPIIT Recognised"].map((badge) => (
                <span key={badge} className="bg-[#f0fdf4] text-[#1B6B45] border border-[#1B6B45]/20 rounded-full px-3 py-1 font-semibold text-xs">
                  ✅ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BHASKAR STRIP ── */}
      <div className="bg-orange-600 text-white text-center py-2 px-4 text-xs font-bold tracking-wide">
        🏛️ DPIIT Recognised Startup · BHASKAR ID: OI-0726-9506QM · HOMA CLINICS PRIVATE LIMITED · Telangana, India
      </div>

      {/* ── HERO ── */}
      <div className="bg-[#1B6B45] text-white py-20 px-6 text-center">
        <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">
          Seed Funding Opportunity
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          India&apos;s First Insulin Resistance
          <br />
          Franchise Platform
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Backed by 3 peer-reviewed indexed papers · 5,000+ patients tested · 32 years clinical experience
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
          {[
            ["₹0.10", "Per Share Entry"],
            ["51%+", "Founder Majority"],
            ["3", "Indexed Papers"],
            ["100+", "Franchise Centers Target"],
          ].map(([val, label]) => (
            <div key={label} className="bg-white/10 rounded-2xl py-4 px-2">
              <div className="text-3xl font-bold">{val}</div>
              <div className="text-green-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="inline-block bg-yellow-400 text-yellow-900 font-bold px-6 py-2 rounded-full text-sm mb-8">
          🏆 2 Papers Published 2026 · Best Diabetologist Award 2024 · 8 Books Published
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-white text-[#1B6B45] font-bold px-8 py-3 rounded-full hover:bg-green-50">
            Express Interest →
          </a>
          <a href="https://wa.me/919963721999?text=Hi%20Dr.%20Surendra%2C%20I%20want%20to%20discuss%20investment%20in%20HOMA%20Clinics"
            target="_blank" rel="noopener"
            className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#1B6B45]">
            WhatsApp for Pitch Deck
          </a>
        </div>
      </div>

      {/* ── MARKET SIZE ── */}
      <section className="px-4 py-14 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-4 py-2 text-sm font-bold mb-4">
              🇮🇳 The Problem Is Enormous
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">India&apos;s Diabetes Crisis — Nobody Is Solving the Root Cause</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Every hospital treats the symptom. HOMA treats the cause. That gap is the opportunity.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { stat: "101M+", label: "Diabetics in India", sub: "World's largest diabetic population", color: "bg-red-50 border-red-200" },
              { stat: "₹48,000Cr", label: "Annual Pharma Spend", sub: "Treating symptoms, not causes", color: "bg-orange-50 border-orange-200" },
              { stat: "0", label: "Insulin Resistance Labs", sub: "In any Tier-2 city in India", color: "bg-yellow-50 border-yellow-200" },
              { stat: "136M", label: "Pre-diabetics", sub: "Will become diabetic without early intervention", color: "bg-green-50 border-green-200" },
            ].map((m) => (
              <div key={m.label} className={`rounded-2xl border p-5 ${m.color}`}>
                <div className="text-3xl font-black text-gray-900">{m.stat}</div>
                <div className="font-bold text-gray-800 text-sm mt-1">{m.label}</div>
                <div className="text-gray-500 text-xs mt-1">{m.sub}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1B6B45] text-white rounded-2xl p-6 text-center">
            <div className="text-lg font-black mb-1">HOMA&apos;s Addressable Market: Every Diabetic + Every Pre-Diabetic in India</div>
            <p className="text-white/70 text-sm max-w-2xl mx-auto">Starting with Telangana &amp; AP — 8.5M diabetics, 500+ OPHC centers, zero insulin resistance clinics. First-mover advantage in the fastest-growing disease category in India.</p>
          </div>
        </div>
      </section>

      {/* ── CELEBRITY + GOVERNMENT RECOGNITION ── */}
      <section className="bg-[#0f2942] text-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              🌟 Recognition · Credibility · Trust
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Trusted by Icons</h2>
            <p className="opacity-75 max-w-xl mx-auto text-sm">
              From Tollywood&apos;s biggest superstar to Telangana&apos;s IT Minister — HOMA Health Care has earned recognition at the highest levels.
            </p>
          </div>

          {/* TWO photos side by side */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Chiranjeevi */}
            <div className="rounded-2xl overflow-hidden border-2 border-yellow-400/40 shadow-2xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_700/v1786781678/CHIRU1_1_uyuz78.jpg"
                alt="Dr. Surendra Nehru with Megastar Chiranjeevi"
                className="w-full block"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="text-yellow-300 font-black text-sm">⭐ Megastar Chiranjeevi</div>
                <div className="text-white/80 text-xs mt-1">Tollywood Superstar · Padma Vibhushan · Former Union Minister</div>
              </div>
            </div>
            {/* IT Minister */}
            <div className="rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_700/v1786783988/minsridharsirbook4_y4zoov.jpg"
                alt="Dr. Surendra with Telangana IT Minister Duddilla Sridhar Babu"
                className="w-full block"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="text-yellow-300 font-black text-sm">🏛️ Shri Duddilla Sridhar Babu</div>
                <div className="text-white/80 text-xs mt-1">Hon&apos;ble Minister for IT · Electronics &amp; Commerce · Govt. of Telangana</div>
              </div>
            </div>
          </div>

          {/* Books row below photos */}
          <div className="border-t border-white/10 pt-8">
            <div className="text-yellow-300 font-bold text-sm mb-5 uppercase tracking-wide text-center">📚 8 Books · Zero Pharma Money · No Ghost-Writers</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
              {[
                { img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_300/v1786773530/10e237d2-f6fa-46d6-b327-a96958b3533c_o7xwp1.jpg", title: "BP: The Untold Truth", price: "₹399", href: "https://amazon.in/dp/B0H23M9VPF" },
                { img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_300/v1786772726/1vDSg_png1mr.jpg", title: "Your Kidneys Are Not Silent", price: "₹299", href: null },
                { img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_300/v1786781231/bedscover300dp_fhqgqr.jpg", title: "Bedside Cardiology", price: "Kindle", href: null },
                { img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_300/v1786782550/drnormal1_v5k384.jpg", title: "Doctor Said Normal", price: "₹299", href: null },
              ].map((book) => (
                <div key={book.title} className="flex flex-col items-center">
                  <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg w-full aspect-[3/4]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-white text-xs font-bold leading-tight">{book.title}</div>
                    <div className="text-yellow-300 text-xs mt-0.5">{book.price}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="https://amazon.in/dp/B0H23M9VPF" target="_blank" rel="noopener" className="bg-yellow-400 text-yellow-900 font-bold px-5 py-2 rounded-full text-sm">Amazon India ₹399 →</a>
              <a href="https://amazon.com/dp/B0H2RLJKV2" target="_blank" rel="noopener" className="bg-white/15 text-white border border-white/30 font-bold px-5 py-2 rounded-full text-sm">Amazon US $12 →</a>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3 KEY INVESTOR MOTIVATORS ── */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#1B6B45]">Why Invest in HOMA?</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Three reasons investors say yes — backed by 32 years of clinical proof.</p>

          <div className="grid gap-8 md:grid-cols-3">

            {/* #1 Traction */}
            <div className="rounded-2xl bg-white p-8 shadow-md border-t-4 border-[#1B6B45]">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="mb-2 text-xl font-bold text-[#1B6B45]">1. It Already Works</h3>
              <p className="text-sm text-gray-500 mb-4">Not a theory. Real proof running today.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ 2 franchise clinics already operating</li>
                <li>✅ 5,000+ fasting insulin tests done</li>
                <li>✅ COD Diet Tracker live at Render</li>
                <li>✅ 3 indexed research papers (2026)</li>
                <li>✅ 350+ YouTube education videos</li>
                <li>✅ 6 AI-powered apps built by the doctor</li>
                <li>✅ 1,000+ free diabetes camps held</li>
              </ul>
            </div>

            {/* #2 Scalability */}
            <div className="rounded-2xl bg-white p-8 shadow-md border-t-4 border-[#1B6B45]">
              <div className="text-4xl mb-4">🔁</div>
              <h3 className="mb-2 text-xl font-bold text-[#1B6B45]">2. Scales Without Dr. Surendra</h3>
              <p className="text-sm text-gray-500 mb-4">The system runs the clinic — not the person.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Standardised HOMA protocol — any trained doctor can run it</li>
                <li>✅ HOMA Score software does the diagnosis</li>
                <li>✅ 32 years documented in 8 books + 3 papers</li>
                <li>✅ 3-day training program for new franchise doctors</li>
                <li>✅ Monthly Zoom CME for all franchise doctors</li>
                <li>✅ NutriBot app — 3.5 lakh Indian foods database</li>
              </ul>
            </div>

            {/* #3 Return */}
            <div className="rounded-2xl bg-white p-8 shadow-md border-t-4 border-yellow-400">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="mb-2 text-xl font-bold text-[#1B6B45]">3. Clear Return Timeline</h3>
              <p className="text-sm text-gray-500 mb-4">Unit economics per franchise center.</p>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="font-bold text-gray-800">Franchise Fee</div>
                  <div className="text-[#1B6B45] font-black text-lg">₹5,00,000</div>
                  <div className="text-gray-500 text-xs">One-time per clinic</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="font-bold text-gray-800">Monthly Royalty</div>
                  <div className="text-[#1B6B45] font-black text-lg">₹8,000–₹15,000</div>
                  <div className="text-gray-500 text-xs">Per clinic per month</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="font-bold text-gray-800">Break-even</div>
                  <div className="text-[#1B6B45] font-black text-lg">Month 4–5</div>
                  <div className="text-gray-500 text-xs">Franchise doctor net positive</div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                  <div className="font-bold text-gray-800">At 100 Centers</div>
                  <div className="text-yellow-700 font-black text-lg">₹1–1.5 Cr/year</div>
                  <div className="text-gray-500 text-xs">Royalty income alone</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SCALE ROADMAP ── */}
      <section className="px-4 py-16 bg-[#f8f9fa]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1B6B45] px-4 py-2 text-sm font-bold text-white mb-4">
              🗺️ The Collection Network
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">1,755 Touchpoints. Already Mapped.</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Not just franchise clinics — a full statewide insulin resistance screening network across Telangana &amp; Andhra Pradesh.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {[
              { icon: "🔬", count: "1,000", label: "Small Labs", desc: "Existing labs enrolled as HOMA collection centers — zero new infrastructure needed.", tag: "Largest channel" },
              { icon: "🏥", count: "500", label: "Govt OPHC Centers", desc: "Tie-up with Telangana Govt DDD Diabetes Scheme — outpatient health centers statewide.", tag: "Govt backed" },
              { icon: "👨‍⚕️", count: "100", label: "Primary Private Practitioners", desc: "Pilot collection centers with GPs and family physicians across districts.", tag: "Pilot phase" },
              { icon: "🏢", count: "100", label: "Clinic-in-Clinic Centers", desc: "HOMA module running inside existing multi-speciality clinics.", tag: "Zero rent" },
              { icon: "🩺", count: "50", label: "MD Physician Centers", desc: "Senior physician-led centers with full HOMA protocol and consultation.", tag: "Premium tier" },
              { icon: "🏛️", count: "5", label: "Hospital Research Modules", desc: "Exclusive diabetes research tie-ups with top hospitals — publications + referrals.", tag: "Flagship" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-bold text-[#1B6B45] bg-[#1B6B45]/10 px-2 py-1 rounded-full">{item.tag}</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#1B6B45]">{item.count}</div>
                  <div className="font-bold text-gray-900 text-sm mt-0.5">{item.label}</div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Courier + logistics strip */}
          <div className="bg-gradient-to-r from-[#0a3d26] to-[#1B6B45] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center gap-6">
            <div className="text-4xl">🚌</div>
            <div className="flex-1">
              <div className="font-black text-lg mb-1">End-to-End Logistics: TSRTC + APRTC Courier Tie-Up</div>
              <p className="text-white/70 text-sm">Samples collected from every touchpoint move via state transport networks — no private courier dependency. EDTA tubes, ice packs, DDD branded bags, and lab printers standardised across all 1,755 points.</p>
            </div>
            <div className="text-center shrink-0">
              <div className="text-3xl font-black text-yellow-300">1,755</div>
              <div className="text-white/60 text-xs">Total touchpoints</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE OF FUNDS ── */}
      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1B6B45] px-4 py-2 text-sm font-bold text-white mb-4">
              💼 Use of Funds
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Every Rupee Is Budgeted</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Capital goes into field infrastructure, people, and data — not overheads. Here is exactly where investor funds are deployed.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🧪",
                title: "Field Consumables",
                items: ["EDTA tubes & chemicals", "Ice packs for cold-chain", "HOMA DDD branded sample bags", "Lab print printers at each center"],
              },
              {
                icon: "🚚",
                title: "Logistics & Transport",
                items: ["TSRTC / APRTC courier tie-up", "Executive TA/DA & travel", "Last-mile sample transport", "Tablet devices for field staff"],
              },
              {
                icon: "👥",
                title: "Core Team (Full-Time)",
                items: ["5 salaried MBBS/MD doctors", "3 data engineers (server + millions of samples)", "3 digital marketing professionals", "1 full-time healthcare lawyer"],
              },
              {
                icon: "📡",
                title: "Communications & Tech",
                items: ["Mobile phones for executives", "Server infrastructure & cloud", "Data entry QC (3 senior professionals)", "Human error prevention systems"],
              },
              {
                icon: "🏗️",
                title: "Network Setup",
                items: ["Signage & branding at all 1,755 points", "Franchise doctor training programs", "Govt OPHC onboarding (DDD scheme)", "Hospital research module setup"],
              },
              {
                icon: "💊",
                title: "Clinical & Medicines",
                items: ["Approved medicine stock for franchise centers", "Monthly CME & Zoom training", "NutriBot & HOMA Score app licensing", "Protocol books & training material"],
              },
            ].map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <div className="font-black text-gray-900 mb-3">{cat.title}</div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#1B6B45] mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#f8f9fa] rounded-2xl p-6 border border-gray-200 text-center">
            <p className="text-gray-500 text-sm mb-2">Raising capital to deploy this network across Telangana &amp; Andhra Pradesh</p>
            <div className="text-2xl font-black text-[#1B6B45]">Serious investor? Let&apos;s talk numbers in person.</div>
            <a href="#invest" className="inline-block mt-4 bg-[#1B6B45] text-white font-bold px-8 py-3 rounded-full text-sm">
              Schedule a Meeting →
            </a>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PROOF ── */}
      <section className="px-4 py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1B6B45]">
            Technology Nobody Else Has
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { img: "/blog/apps-homascore1.jpg", title: "HOMA Score App", desc: "World's first clinic app measuring HOMA-IR + TyG Index together. HbA1c is old history." },
              { img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_600/v1786776439/90day_web_app1_d179lp.png", title: "90-Day Metabolic Triumph", desc: "Structured 90-day remission program. Day 1 HOMA Score → Day 90 target: HbA1c under 6.5 without tablets." },
              { img: "https://res.cloudinary.com/drhsco04l/image/upload/q_auto,f_auto,w_600/v1786780825/30dietimg1_ze8dou.png", title: "30-Day C.O.D. Diet Plan", desc: "World first — mobile diet for 30 diabetes complications. 3.5 lakh Indian foods. Live at Render today." },
            ].map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="relative aspect-[4/3] w-full bg-gray-100">
                  <Image src={item.img} alt={item.title} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-[#1B6B45]">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="px-4 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#1B6B45]">3 Indexed Research Papers</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "TyG Index as a Surrogate Marker for Insulin Resistance",
                journal: "International Journal of Medicine · IJM 2026;8(2):977–983",
                doi: "DOI: 10.61336/im/26-2-12",
                authors: "Sathyanarayana EV, Reddy BL, Ram YS, Nehru MS, Krishna PV, Subbareddy VV",
              },
              {
                num: "02",
                title: "Evaluation of Biochemical and Anthropometric Parameters Associated with Insulin Resistance Using TyG Index",
                journal: "International Journal of Medicine · IJM 2026;8(5):977–983 · Published 21 May 2026",
                doi: "DOI: 10.61336/im/26-2-12",
                authors: "Sathyanarayana EV, Reddy BL, Ram YS, Nehru MS, Krishna PV, Subbareddy VV",
              },
              {
                num: "03",
                title: "Association of TyG Index with HbA1c Levels in Adults",
                journal: "International Journal of Medicine · Vol 8, Issue 2, March 2026",
                doi: "DOI: 10.61336/im/26-3-10",
                authors: "Sachdev MC, Nehru MS, Rahul K, Varshha AS",
              },
            ].map((p) => (
              <div key={p.num} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex gap-5">
                <div className="text-3xl font-black text-[#1B6B45] flex-shrink-0">{p.num}</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">{p.title}</div>
                  <div className="text-sm text-gray-500 mb-1">{p.journal}</div>
                  <div className="text-sm font-semibold text-[#1B6B45] mb-1">{p.doi}</div>
                  <div className="text-xs text-gray-500">{p.authors}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTMENT STRUCTURE ── */}
      <section className="bg-[#0f2942] text-white px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold">Investment Structure</h2>
          <p className="mb-8 text-lg opacity-80 max-w-xl mx-auto">
            Private placement · ₹0.10 per share · Founder retains 51%+ control · 10-year growth horizon
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              ["₹0.10", "Entry Price/Share"],
              ["51%+", "Founder Retains"],
              ["10 yr", "Growth Horizon"],
              ["100+", "Centers Planned"],
            ].map(([v, l]) => (
              <div key={l} className="bg-white/10 rounded-2xl py-4 px-3">
                <div className="text-2xl font-black text-yellow-300">{v}</div>
                <div className="text-xs text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
          <p className="text-sm opacity-60">
            DPIIT BHASKAR ID: OI-0726-9506QM · HOMA CLINICS PRIVATE LIMITED · Telangana, India
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 py-16 bg-[#f8f9fa]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1B6B45] px-4 py-2 text-sm font-bold text-white mb-4">
              ❓ Investor FAQs
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Questions Every Serious Investor Asks</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Is HOMA protocol approved by NMC / AYUSH / govt bodies?",
                a: "HOMA Clinics operate as registered medical centres under NMC-licensed MBBS/MD physicians. The HOMA-IR and TyG Index tests used are internationally validated, published in indexed journals, and approved for clinical use. We are registered under DPIIT Startup India (OI-0726-9506QM) and BHASKAR. No alternative medicine claims are made — this is evidence-based internal medicine.",
              },
              {
                q: "How is royalty collected — honour system or software-enforced?",
                a: "Software-enforced. Every franchise center runs the HOMA Score app, which logs each patient test centrally. Royalty is calculated automatically from test volume — not self-reported by the franchise doctor. Data engineers monitor for anomalies. Millions of sample records are verified by 3 senior data professionals monthly.",
              },
              {
                q: "What happens if a franchise doctor quits or shuts down?",
                a: "The HOMA protocol is documented in 8 books and 3 indexed papers — it is not person-dependent. A trained replacement doctor can be onboarded in 3 days via our standardised training program. The clinic brand, software licence, and patient database remain with HOMA HQ — not the individual doctor. Franchise agreements include a 6-month notice clause and equipment buy-back option.",
              },
              {
                q: "What is the investor exit strategy?",
                a: "Three structured paths: (1) Dividend route — royalty income from 100+ centers distributed annually from Year 3. (2) Strategic acquisition — as we scale to 500+ centers, institutional healthcare groups (hospital chains, diagnostic labs, pharma) become natural acquirers. (3) Buyback — Dr. Surendra retains right of first refusal to buy back shares at a mutually agreed premium after Year 5. All terms documented in SHA before investment.",
              },
              {
                q: "Why Telangana & AP first — why not pan-India?",
                a: "Concentrated execution beats scattered expansion. AP + Telangana has 8.5M diabetics, an existing TSRTC/APRTC logistics backbone, a Telangana Govt DDD scheme tie-up already in progress, and Dr. Surendra's 32-year clinical network. Once 500 centers are operating profitably here, the model copy-pastes to Maharashtra, Karnataka, Tamil Nadu with local franchise masters.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="font-black text-gray-900 mb-3 flex gap-3">
                  <span className="text-[#1B6B45] shrink-0">Q{i + 1}.</span>
                  <span>{faq.q}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1B6B45] mb-3">Express Investment Interest</h2>
            <p className="text-gray-500">We will call you within 24 hours to discuss further.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            {success && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 text-green-800 font-medium text-center">
                ✅ Thank you! Dr. Surendra&apos;s team will contact you within 24 hours.
              </div>
            )}
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center">
                {error}
              </div>
            )}
            <form onSubmit={handleInvestorSubmit} className="flex flex-col gap-4">
              {[
                { label: "Full Name", type: "text", val: fullName, set: setFullName, required: true },
                { label: "Phone", type: "tel", val: phone, set: setPhone, required: true },
                { label: "Email", type: "email", val: email, set: setEmail, required: true },
              ].map(({ label, type, val, set, required }) => (
                <label key={label} className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label} {required && <span className="text-[#1B6B45]">*</span>}
                  </span>
                  <input
                    type={type}
                    required={required}
                    value={val}
                    onChange={(e) => set(e.target.value)}
                    className="min-h-[48px] w-full rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#1B6B45] focus:border-[#1B6B45] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </label>
              ))}
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Investment Range <span className="text-[#1B6B45]">*</span>
                </span>
                <select
                  required
                  value={investmentCapacity}
                  onChange={(e) => setInvestmentCapacity(e.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#1B6B45] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                >
                  {INVESTMENT_CAPACITY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Message (optional)</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#1B6B45] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 rounded-xl bg-[#1B6B45] px-6 py-4 font-bold text-white text-lg shadow-lg hover:bg-[#155534] disabled:opacity-70"
              >
                {submitting ? "Sending…" : "Submit — We'll Call in 24 Hours"}
              </button>
            </form>

            <div className="mt-6 text-center border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-400 mb-3">Prefer direct contact?</p>
              <a
                href="https://wa.me/919963721999?text=Hi%20Dr.%20Surendra%2C%20I%20am%20interested%20in%20investing%20in%20HOMA%20Clinics"
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1fb858]"
              >
                💬 WhatsApp Dr. Surendra Directly
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
