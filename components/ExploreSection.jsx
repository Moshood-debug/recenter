"use client";

import React from "react";
import { Home, Moon, ShieldCheck, UserCheck } from "lucide-react";

const ExploreSection = () => {
  const features = [
    {
      icon: Home,
      text: "Non-medical, in-home support after hospital discharge",
    },
    {
      icon: Moon,
      text: "Daytime and night-time assistance designed around recovery",
    },
    {
      icon: ShieldCheck,
      text: "A structured system, not casual hourly help",
    },
    {
      icon: UserCheck,
      text: "Professionally governed and supervised support",
    },
  ];

  return (
    <section className="py-24 bg-[#F9F4E8]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-yaro text-4xl sm:text-5xl text-accent mb-16">
          What Recenter provides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm"
            >
              <div className="bg-light-green w-20 h-20 rounded-full flex items-center justify-center mb-6 text-accent text-3xl shrink-0">
                <feature.icon className="w-10 h-10" />
              </div>
              <p className="font-sans text-gray-700 text-lg leading-relaxed font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
