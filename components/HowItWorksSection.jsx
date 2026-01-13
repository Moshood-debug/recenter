"use client";

import React from "react";
import { ClipboardList, HeartHandshake, Users, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Join the waiting list",
      description: "Register your interest ahead of launch.",
      icon: ClipboardList,
    },
    {
      number: "02",
      title: "Access support after delivery",
      description:
        "Choose day or night support that fits your needs in the early weeks.",
      icon: HeartHandshake,
    },
    {
      number: "03",
      title: "We coordinate everything",
      description: "Support is arranged and supervised through Recenter.",
      icon: Users,
    },
    {
      number: "04",
      title: "Rest and recover",
      description: "You get the help you need, when you need it most.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-light-green">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-yaro text-4xl lg:text-5xl text-accent mb-4">
            How Recenter Works
          </h2>
          <p className="font-sans text-xl text-accent/80">
            Clear, human, non-technical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          {/* <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-red-400 -z-10"></div> */}

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-accent shadow-md  border-4 border-white/50">
                  <step.icon size={32} />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-yaro font-bold text-sm shadow-sm border-2 border-white">
                  {step.number}
                </div>
              </div>

              <h3 className="font-yaro text-xl text-accent mb-3 min-h-[3.5rem] flex items-center justify-center">
                {step.title}
              </h3>
              <p className="font-sans text-accent/70 leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
