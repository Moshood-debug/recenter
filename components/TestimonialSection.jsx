import React from "react";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="font-yaro text-4xl text-accent max-w-md">
        See why families trust & recommend Recenter.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Testimonial Card */}
        <div className="bg-[#bbf0ea] rounded-3xl p-8 sm:p-12 flex flex-col justify-center">
          <blockquote className="space-y-6">
            <p className="font-sans text-xl sm:text-2xl text-accent leading-relaxed">
              “The staff at Recenter are caring and genuinely care about my
              child’s growth. The support we received was thoughtfully designed
              to spark confidence and encourage bonding. I am happy my family
              loves the care we receive every day and we cannot ask for more.”
            </p>
            <footer className="font-yaro text-lg text-accent">
              - Recenter Parent, New York, NY
            </footer>
          </blockquote>
        </div>

        {/* Image */}
        <div className="relative h-100 lg:h-auto w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/assets/images/testimonial.png"
            alt="Happy mother and baby"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <button className="btn-accent">Read More Reviews</button>
      </div>
    </div>
  );
};

export default TestimonialSection;
