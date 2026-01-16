"use client";

import Hero from "@/components/Hero";
import PromiseSection from "@/components/PromiseSection";
import TestimonialSection from "@/components/TestimonialSection";
import ExpertsSection from "@/components/ExpertsSection";
import ExploreSection from "@/components/ExploreSection";
import ResourcesSection from "@/components/ResourcesSection";
import TeacherAwardSection from "@/components/TeacherAwardSection";
import WhereStartMattersSection from "@/components/WhereStartMattersSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WaitingListSection from "@/components/WaitingListSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      <Hero />

      <section className="py-16 bg-light-green">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <PromiseSection />

          {/* <TestimonialSection /> */}
        </div>
      </section>
      <ExploreSection />
      <ExpertsSection />
      {/* <WhereStartMattersSection /> */}
      {/* <TeacherAwardSection /> */}
      <HowItWorksSection />
      <WaitingListSection />
      <ResourcesSection />
    </div>
  );
}
