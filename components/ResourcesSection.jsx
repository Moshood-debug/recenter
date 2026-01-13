"use client";

import React, { useEffect, useState } from "react";
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
  ];

  const [startIndex, setStartIndex] = useState(0);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // tablet
      } else {
        setVisibleCount(3); // desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = resources.length - visibleCount;

  const totalPages = Math.ceil(resources.length - visibleCount + 1);

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
    <section className="py-20 bg-light-green overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Column: Text & Controls */}
        <div className="lg:w-1/3 px-4 lg:pl-[max(2rem,calc((100vw-80rem)/2))]">
          <div className="space-y-6 max-w-lg">
            <h2 className="font-yaro text-4xl sm:text-5xl text-accent">
              Every family deserves a village.
            </h2>
            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              We’re here to support you, not just by providing the best
              childcare, but with understanding and connection, helping you
              navigate every step of your parenting journey.
            </p>

            {/* Controls */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Pagination */}
              <div className="flex items-center space-x-2 ">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      startIndex === index
                        ? "w-6 bg-accent"
                        : "w-2 bg-accent/40 hover:bg-accent/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Carousel */}
        <div className="lg:w-2/3 w-full pr-4 lg:pr-0 pl-4 lg:pl-0">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(100 / visibleCount) * startIndex}%)`,
              }}
            >
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 px-3 shrink-0"
                >
                  <div
                    className={`${resource.color} rounded-4xl overflow-hidden flex flex-col h-full  `}
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col grow">
                      <h3 className="font-yaro text-xl text-accent mb-4 leading-tight line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="font-sans text-accent/80 text-sm mb-6 grow line-clamp-3">
                        {resource.description}
                      </p>
                      <div>
                        <button
                          className={`${resource.btnColor} text-white font-sans text-sm font-bold px-6 py-2 rounded-full hover:opacity-90 transition-opacity`}
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
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
