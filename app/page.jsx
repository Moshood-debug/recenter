import Hero from "@/components/Hero";
import PromiseSection from "@/components/PromiseSection";
import TestimonialSection from "@/components/TestimonialSection";
import ExpertsSection from "@/components/ExpertsSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="py-16 bg-light-green">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <PromiseSection />
          <TestimonialSection />
        </div>
      </section>

      <ExpertsSection />
    </div>
  );
}
