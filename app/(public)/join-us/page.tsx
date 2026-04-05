import { Hero } from "@/components/common/Hero";
import { VolunteerForm } from "./VolunteerForm";
import { FranchiseInquiryForm } from "./FranchiseInquiryForm";
import { SupportersList } from "./SupportersList";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen">
      <Hero headline="Join us" ctaLabel="Fill the form below" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <VolunteerForm />
        <FranchiseInquiryForm />
        <SupportersList />
      </section>
    </div>
  );
}
