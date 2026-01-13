import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-accent overflow-hidden relative min-h-125 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="">
          <div className="max-w-xl text-white space-y-8 py-12 lg:py-0">
            <h1 className="font-yaro text-4xl sm:text-5xl lg:text-5xl  leading-[1.1]">
              Because new mothers deserve rest, not exhaustion.
            </h1>

            <p className="font-sans text-gray-200 text-md leading-relaxed max-w-lg">
              The weeks after birth are tender, overwhelming, and deeply
              important. Recenter provides trusted, in-home postpartum support
              so mothers can sleep, recover, and feel held not alone.
            </p>

            <button className="btn-primary">Register your interest</button>
          </div>
        </div>
      </div>

      {/* Image Container with Curve */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full lg:h-full lg:block hidden">
        <div className="relative w-full h-full lg:rounded-l-[50%_100%] overflow-hidden bg-accent">
          <Image
            src="/assets/images/hero.png"
            alt="Mother holding child"
            fill
            className="object-cover object-center rounded-b-[50px]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
