import Link from "next/link";

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Medical Disclaimer</h1>
          <p className="text-lg opacity-90">HOMA Healthcare Center</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8 rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Not a substitute for medical advice</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The content on this website (including text, voice assistant responses, and general information) is for educational and awareness purposes only. It is not intended to replace consultation with a qualified healthcare provider. Always seek the advice of your physician or another qualified doctor regarding any medical condition or treatment.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">HOMA test information only</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Information about HOMA (Homeostatic Model Assessment) and insulin resistance is provided for general understanding. Interpretation of results and treatment decisions must be made by a qualified doctor based on your individual health profile.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Consult a qualified doctor</h2>
            <p className="text-gray-700 dark:text-gray-300">
              For diagnosis, treatment, prescriptions, or any clinical decisions, please consult Dr. M. Surendra Nehru or another registered medical practitioner in person. Do not rely solely on website or voice assistant content for medical decisions.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-primary">Emergency</h2>
            <p className="text-gray-700 dark:text-gray-300">
              In case of a medical emergency, call <strong>108</strong> (India emergency number) or go to the nearest hospital immediately. This website and the Ask HOMA assistant are not for emergency use.
            </p>
          </div>
        </div>
        <p className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
        </p>
      </section>
    </div>
  );
}
