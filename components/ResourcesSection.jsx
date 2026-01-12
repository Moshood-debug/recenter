"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      image: "/assets/images/expert-care.png",
      title: "Ten Indoor Activities to Keep Young Children Busy During Winter",
      description:
        "Keep kids entertained indoors during cold weather with fun and educational indoor activities for kids.",
      color: "bg-[#F9E8D0]",
      btnColor: "bg-[#092540]",
    },
    {
      image: "/assets/images/expert-wellness.png",
      title: "Look How Far They've Come!: Celebrating Your Child's Growth",
      description:
        "Celebrate your child's growth beyond first steps and words. Discover milestones, tips and ways to track development.",
      color: "bg-[#AEE2FF]",
      btnColor: "bg-[#092540]",
    },
    {
      image: "/assets/images/expert-nutrition.png",
      title: "Routines Are Essential After the Holidays",
      description:
        "Get back on track after holiday disruptions with consistent routines. Tips for reestablishing structure.",
      color: "bg-[#A7E8E2]",
      btnColor: "bg-[#092540]",
    },
    {
      image: "/assets/images/promise.png",
      title: "Outdoor Play in Cold Weather",
      description:
        "Discover fun outdoor winter activities for preschoolers! Learn how cold-weather play boosts health.",
      color: "bg-[#F9E8D0]",
      btnColor: "bg-[#092540]",
    },
    {
      image: "/assets/images/expert-care.png",
      title: "More Winter Fun",
      description: "Another article example for carousel scrolling.",
      color: "bg-[#FFE5E5]",
      btnColor: "bg-[#092540]",
    },
    {
      image: "/assets/images/expert-care.png",
      title: "More Winter Fun",
      description: "Another article example for carousel scrolling.",
      color: "bg-[#FFE5E5]",
      btnColor: "bg-[#092540]",
    },
  ];

  // State to track how many items are visible based on screen size
  const [visibleCount, setVisibleCount] = useState(4); // Default to desktop
  const [startIndex, setStartIndex] = useState(0);

  // Update visible items on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(4); // Desktop
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, resources.length - visibleCount);

  const next = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goTo = (index) => {
    setStartIndex(index);
  };

  return (
    <section className="py-12 sm:py-20 bg-light-green overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 className="font-yaro text-3xl sm:text-4xl md:text-5xl text-accent">
            Every family deserves a village.
          </h2>
          <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed">
            We’re here to support you, not just by providing the best childcare,
            but with understanding and connection, helping you navigate every
            step of your parenting journey.
          </p>
        </div>
      </div>
      <div className="w-full xl:w-[90%] lg:ml-auto px-4 sm:px-0 mb-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / visibleCount) * startIndex}%)`,
          }}
        >
          {resources.map((resource, index) => (
            <div
              key={index}
              className="px-2 sm:px-3 shrink-0"
              // Dynamically set width based on visibleCount
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div
                className={`${resource.color} rounded-3xl sm:rounded-4xl overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-1 duration-300 shadow-sm`}
              >
                <div className="relative h-48 sm:h-52 md:h-60 w-full">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col grow">
                  <h3 className="font-yaro text-lg sm:text-xl text-accent mb-3 sm:mb-4 leading-tight">
                    {resource.title}
                  </h3>
                  <p className="font-sans text-accent/80 text-sm sm:text-base mb-4 sm:mb-6 grow">
                    {resource.description}
                  </p>
                  <div>
                    <button
                      className={`${resource.btnColor} text-white font-sans text-xs sm:text-sm font-bold px-5 sm:px-6 py-2 rounded-full hover:opacity-90 transition-opacity`}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 3. CONTROLS */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-4">
          <button onClick={prev} className="text-accent hover:text-accent/80">
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Dots: Adjust number of dots based on the new maxIndex */}
          <div className="flex space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  startIndex === index
                    ? "bg-accent"
                    : "bg-transparent border-2 border-accent"
                }`}
              />
            ))}
          </div>

          <button onClick={next} className="text-accent hover:text-accent/80">
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>

        <div className="flex items-center justify-center mt-5">
          <button className="btn-accent">Join our Village</button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
