import React from "react";
import Image from "next/image";
import { ShieldCheck, Users, ClipboardCheck } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const ExpertsSection = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <section className="py-20 bg-accent text-off-white  overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="font-yaro text-4xl sm:text-5xl leading-tight">
                Thoughtfully Structured,{" "}
                <span className="text-primary italic">Carefully Governed.</span>
              </h2>
              <p className="font-sans text-xl text-white leading-relaxed max-w-xl">
                Recenter is designed to feel calm and reassuring, but behind the
                scenes, it is carefully structured and professionally
                coordinated.
              </p>
            </div>

            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex items-start gap-4 ">
                <div className="mt-1 p-2 rounded-lg bg-off-white/10 ">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="font-sans text-lg text-white/80 leading-relaxed">
                  Support is delivered by trained postpartum support workers and
                  overseen to ensure consistency, boundaries, and quality at
                  every stage.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4 ">
                <div className="mt-1 p-2 rounded-lg bg-off-white/10 ">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <p className="font-sans text-lg text-white/80 leading-relaxed">
                  This allows families to access help with confidence, knowing
                  the service is reliable and well governed.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => scrollToSection("waiting-list")}
                className="btn-primary "
              >
                Join the waiting list to register your interest
              </button>
            </div>
          </div>

          <div className="">
            <Image
              src="/assets/images/expert-care.png"
              alt="Recenter Experts"
              width={500}
              height={500}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
