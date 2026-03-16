export default function FAQPage() {
  const faqs = [
    {
      q: "What is HOMA?",
      a: "HOMA stands for Homeostatic Model Assessment. It's a mathematical model used to estimate insulin resistance — a condition where the body becomes less responsive to insulin. High insulin resistance is linked to type 2 diabetes, obesity, fatty liver, and heart disease.",
    },
    {
      q: "What is insulin?",
      a: "Insulin is a hormone produced by the pancreas that controls both sugar AND cholesterol (fats and lipids) levels in the body. Most people don't know insulin controls cholesterol too — this is why HOMA testing matters.",
    },
    {
      q: "Why should I get a HOMA test if I don't have diabetes?",
      a: "Everyone from age 20 to 90 years should get a Fasting Insulin Resistance (HOMA) test. Insulin resistance builds silently for 10–15 years before diabetes appears. The HOMA test catches this risk EARLY — before damage is done.",
    },
    {
      q: "Why isn't the HOMA test included in regular health checkups?",
      a: "Most health checkups only include fasting blood sugar and HbA1c tests. These only show a problem after 85% of the pancreas is already damaged. The HOMA test is a more comprehensive early assessment that most doctors are not yet aware of.",
    },
    {
      q: "Should heart patients get a HOMA test?",
      a: "Yes — absolutely. Insulin controls both sugar AND cholesterol levels. Heart patients on statins especially need HOMA testing to identify the underlying metabolic cause of their heart disease. High insulin resistance is a silent driver of heart attacks and strokes.",
    },
    {
      q: "Should people on statins get a HOMA test?",
      a: "Yes. Even if you are on statins, a HOMA test is strongly recommended. Statins manage cholesterol levels but do not address insulin resistance — the root cause. HOMA testing identifies underlying metabolic issues that statins cannot fix.",
    },
    {
      q: "How is the HOMA test different from the HbA1c test?",
      a: "HbA1c measures average blood sugar over 2–3 months — but only shows abnormal results after significant pancreatic damage. The HOMA test is an EARLY indicator that provides a risk score for diabetes development years before HbA1c becomes abnormal. HOMA is the future. HbA1c is old history.",
    },
    {
      q: "What are the benefits of getting a HOMA test?",
      a: "1. Early diagnosis — always a step ahead in recovery\n2. Insulin-dependent patients can calculate and reduce insulin doses\n3. Patients on multiple tablets can reduce their medication count\n4. New-onset diabetes (within 5 years) — remission and reversal is possible\n5. Strong family history of hypertension, heart disease, fatty liver, or cancer — compulsory testing\n6. Waist circumference above 85 cm at any age 20–90 — you must get tested",
    },
    {
      q: "Who should get tested urgently?",
      a: "• Anyone with waist circumference > 85 cm (age 20–90)\n• Heart patients and people on statins\n• Anyone with fatty liver, PCOS, or high triglycerides\n• Family history of diabetes, hypertension, or cancer\n• People taking 3 or more tablets daily for any condition\n• Anyone who feels tired, foggy, or gains weight easily",
    },
    {
      q: "Where can I get a HOMA test done?",
      a: "You can get a HOMA test done in fasting state at our center in Gachibowli, Hyderabad. Home collection is also available. Contact us at +91 99637 21999 to book your appointment.",
    },
    {
      q: "How much does the HOMA package cost?",
      a: "Our Great Star of India Package is priced at ₹6,500 and includes 15 comprehensive tests — Fasting Insulin, HOMA Index, Lipid Profile, HbA1c, Vitamin D, Vitamin B12, Thyroid, Renal Function, and more. This replaces tests worth ₹13,300 at market price.",
    },
    {
      q: "Is this a legitimate and ethical practice?",
      a: "Yes — 100% ethical. This initiative is part of the 'Quit India Diabetes & Obesity Campaign' started by Dr. M. Surendra Nehru MD, Professor of Medicine with 32+ years of experience. Dr. Nehru is the first physician in India to conduct 5,000 fasting insulin resistance tests and has received the Best Diabetologist Award at Excellence Awards 2024.",
    },
    {
      q: "Can diabetes actually be reversed with HOMA?",
      a: "Yes — for many patients, especially those diagnosed within the first 5 years. The HOMA 90-Day Metabolic Reversal Protocol has shown documented results including Triglycerides dropping from 400 to 120 in 90 days. Remission is possible when insulin resistance is treated at the root cause.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-[#1B6B45] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Everything you need to know about HOMA testing, insulin resistance, and your metabolic health
        </p>
        <p className="mt-4 text-green-200 text-sm">
          Dr. Muddu Surendra Nehru MD — HOMA Healthcare Center, Gachibowli, Hyderabad
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto py-16 px-6 space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="bg-[#E8F5EE] dark:bg-primary/20 px-6 py-4 flex items-start gap-3">
              <span className="text-[#1B6B45] dark:text-primary font-bold text-lg mt-0.5">
                Q{i + 1}
              </span>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">{faq.q}</h3>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {faq.a}
              </p>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="bg-[#1B6B45] rounded-2xl p-8 text-center text-white mt-10">
          <h3 className="text-2xl font-bold mb-2">Ready to Know Your HOMA Score?</h3>
          <p className="opacity-90 mb-6">Book your fasting insulin resistance test today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919963721999"
              className="bg-white text-[#1B6B45] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition"
            >
              📞 Call +91 99637 21999
            </a>
            <a
              href="/enroll"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#1B6B45] transition"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
