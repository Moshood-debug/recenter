import React from "react";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="font-yaro text-4xl text-accent max-w-md">
        What happens after delivery?{" "}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-[#bbf0ea] rounded-3xl p-8 sm:p-12 flex flex-col justify-center">
          <blockquote className="space-y-6">
            <p className="font-sans text-xl sm:text-2xl text-accent leading-relaxed">
              “After delivery, support often drops away just as recovery and
              exhaustion intensify. Many mothers are left to manage physical
              recovery, broken sleep, and emotional adjustment with little
              structured help at home. Family support isn’t always available,
              and existing services are informal or not designed around
              postpartum recovery. Recenter exists to change that ”
            </p>
            {/* <footer className="font-yaro text-lg text-accent">
              - Recenter Parent, New York, NY
            </footer> */}
          </blockquote>
        </div>

        <div className="relative h-100 lg:h-auto w-full rounded-2xl overflow-hidden ">
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
