import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const PromiseSection = () => {
  const promises = [
    "Support often drops away as exhaustion intensify.",
    "Though sometimes willing, family isn’t always available.",
    "Many mothers are left to manage physical recovery, broken sleep, and emotional adjustment with little to no support.",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image Column */}
      <div className="relative h-100 w-full rounded-2xl overflow-hidden ">
        <Image
          src="/assets/images/promise.png"
          alt="Caregiver with family"
          fill
          className="object-cover"
        />
      </div>

      {/* Text Column */}
      <div className="space-y-8">
        <h2 className="font-yaro text-4xl text-accent">
          What Happens After Delivery.
        </h2>

        <ul className="space-y-4">
          {promises.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-green shrink-0" />
              <span className="font-sans text-lg text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <button className="btn-accent">Discover the Recenter Difference</button>
      </div>
    </div>
  );
};

export default PromiseSection;
