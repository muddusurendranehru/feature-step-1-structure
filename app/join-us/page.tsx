import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { VolunteerForm } from "./VolunteerForm";
import { SupportersList } from "./SupportersList";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen">
      <Hero headline="Join us" ctaLabel="Fill the form below" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <VolunteerForm />
        <SupportersList />
      </section>
    </div>
  );
}
