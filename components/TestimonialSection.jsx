import React from "react";
import Image from "next/image";
import { HeartHandshake, Clock, ShieldCheck, LayoutGrid } from "lucide-react";

/**
 * TestimonialSection - Re-purposed to show "What Recenter provides"
 * This component provides a premium overview of the core services offered.
 */
const TestimonialSection = () => {
  const provisions = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-accent" />,
      text: "Non-medical, in-home support after hospital discharge",
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      text: "Daytime and night-time assistance designed around recovery",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-accent" />,
      text: "A structured system, not casual hourly help",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      text: "Professionally governed and supervised support",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <h2 className="font-yaro text-4xl text-accent max-w-2xl leading-tight">
            What Recenter provides
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-primary rounded-full" />
            <p className="font-yaro text-xl text-accent/60 uppercase tracking-wide">
              This is:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Features Card */}
          <div className="bg-[#f0f5e8] rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
            {/* Subtle background decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

            <ul className="space-y-8 relative z-10">
              {provisions.map((item, index) => (
                <li key={index} className="flex items-start gap-5 group/item">
                  <div className="mt-1 p-3 rounded-2xl bg-white shadow-sm text-accent group-hover/item:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="font-sans text-lg md:text-xl text-accent leading-relaxed pt-1 font-medium">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Container */}
          <div className="relative min-h-[400px] lg:h-auto w-full rounded-2xl overflow-hidden ">
            <Image
              src="/assets/images/testimonial.png"
              alt="Supportive care and recovery"
              fill
              className="object-cover "
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-6 flex justify-center lg:justify-start">
          <button className="btn-accent px-12 py-4 text-xl shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-1 active:translate-y-0">
            Register your Interest
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
