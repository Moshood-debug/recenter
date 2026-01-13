import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero.png"
          alt="Mother holding child"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-accent/20 bg-linear-to-t from-accent/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-yaro text-3xl md:text-4xl lg:text-5xl text-white leading-tight drop-shadow-md">
            Because new mothers deserve rest, not exhaustion.
          </h1>

          <p className="font-sans text-gray-100 text-md md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            System-led day and night support for mothers post delivery, designed
            to help you rest, recover and navigate postpartum with reassurance
          </p>

          <div className="pt-4">
            <button className="btn-primary text-lg lg:text-xl">
              Register your interest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
