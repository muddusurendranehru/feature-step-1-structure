import { Button } from "@/components/Button";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            Quarterly CME Workshops on Metabolism
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            4 NMC/IMA Credit Points • 9 AM – 5 PM • 5-Star Hotel Venue
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Program Details
          </h2>
          <div className="flex justify-center">
            <div className="text-center">
              <img
                src="/blog/homa-book.jpg"
                alt="Dr. Muddu Surendra Nehru with The COVID-19 Handbook at Bravera Health USA"
                className="mx-auto mb-2 w-64 rounded-xl object-cover shadow-lg md:w-80"
              />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Dr. Muddu Surendra Nehru MD, Author — The COVID-19 Handbook, Bravera Health USA
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold">Schedule & Format</h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>Every 3 months (Jan, Apr, Jul, Oct)</li>
                <li>Full day: 9:00 AM – 5:00 PM</li>
                <li>5-star hotel (breakfast, lunch, high tea included)</li>
                <li>20-minute focused lectures + interactive sessions</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold">Target Audience</h3>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>Junior MBBS doctors</li>
                <li>Dentists</li>
                <li>Physiotherapists</li>
                <li>Engineering students (health-tech/AI interest)</li>
                <li>Nurses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-16 text-center dark:bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-primary">Why Attend?</h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Led by Professor Dr. Surendra. Network with 1200+ doctors. Gain 4 NMC/IMA credits.
            Hands-on AI tools & metabolism protocols.
          </p>
          <Button variant="primary" className="px-6 py-3">
            Register Interest (Coming Soon)
          </Button>
        </div>
      </section>
    </div>
  );
}
