export default function ContentStudioPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Content Studio — Powered by Grok & AI
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Create infographics, videos, blogs — all metabolism-focused, ready for social media &
            YouTube
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-12 text-3xl font-bold text-primary">
            Coming Soon — Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold">Grok Infographics</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Generate clean, branded metabolism charts & speedometer visuals
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold">Hypernatural Video Prompts</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ready-to-paste scripts for AI video generation (explainer, testimonials)
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold">SEO Blog Writer</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Auto-generate neutral articles from patient data & metabolism research
              </p>
            </div>
          </div>
          <p className="mt-12 text-lg text-gray-700 dark:text-gray-300">
            Early access coming soon for franchise partners & doctors.
          </p>
        </div>
      </section>
    </div>
  );
}
