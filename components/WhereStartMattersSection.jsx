"use client";

import React from "react";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";

const WhereStartMattersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-yaro text-3xl sm:text-4xl md:text-5xl text-[#092540]">
                Where They Start Matters
              </h2>
              <p className="font-sans text-[#092540]/80 text-base sm:text-lg leading-relaxed max-w-xl">
                We don’t just prepare children for the next step; we prepare
                them for a lifetime of possibilities, so every child has the
                freedom to explore, learn at their own pace and discover their
                unique potential.
              </p>
            </div>

            {/* Search Card */}
            <div className="bg-[#092540] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl max-w-md">
              <h3 className="font-sans font-bold text-xl text-white">
                Give Them the Best Start
              </h3>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter address, city, state or zip"
                  className="w-full bg-white rounded-full py-3 pl-6 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/80"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-primary text-light-green w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              <button className="flex items-center text-white font-sans font-semibold hover:text-primary/80 transition-colors group">
                <MapPin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform cursor-pointer" />
                Use Current Location
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden shadow-lg  border-white/20">
              <Image
                src="/assets/images/expert-care.png"
                alt="Teacher confirming possibilities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereStartMattersSection;
