"use client";

import React from "react";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  UserCheck,
  Clock,
} from "lucide-react";

const PromiseSection = () => {
  const promises = [
    {
      text: "Compassionate Postpartum Care",
      icon: HeartHandshake,
      description: "Dedicated support for your recovery and bonding.",
    },
    {
      text: "Experienced Doulas & Nurses",
      icon: UserCheck,
      description: "Certified professionals you can trust implicitly.",
    },
    {
      text: "Daily Wellness Check-ins",
      icon: Clock,
      description: "Consistent monitoring for peace of mind.",
    },
    {
      text: "Rigorous Safety Protocols",
      icon: ShieldCheck,
      description: "Highest standards of hygiene and safety.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image Column - Organic Shape */}
      <div className="relative h-[500px] w-full group">
        <div className="absolute inset-0 bg-primary/20 rounded-[2rem] rounded-tl-[8rem] rounded-br-[8rem] rotate-3 transition-transform duration-500 group-hover:rotate-1"></div>
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] rounded-tl-[8rem] rounded-br-[8rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <Image
            src="/assets/images/promise.png"
            alt="Caregiver with family"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Text Column */}
      <div className="space-y-10">
        <div className="space-y-4">
          <h2 className="font-yaro text-4xl lg:text-5xl text-accent leading-tight">
            The Recenter{" "}
            <span className="relative inline-block">
              Promise
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>{" "}
            to Families
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-md">
            We provide more than just care; we provide a partnership rooted in
            safety, empathy, and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {promises.map((item, index) => (
            <div
              key={index}
              className="group p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-10 h-10 bg-light-green rounded-full flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                <item.icon size={20} />
              </div>
              <h3 className="font-bold text-accent mb-1">{item.text}</h3>
              <p className="text-sm text-gray-500 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <button className="btn-accent group flex items-center gap-2 pr-6">
          Discover the Recenter Difference
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default PromiseSection;
