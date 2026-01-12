"use client";

import React from "react";
import Image from "next/image";

const TeacherAwardSection = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-[4.9rem] ">
        <div className="bg-white rounded-3xl sm:rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-lg">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-75 md:min-h-100">
            <Image
              src="/assets/images/expert-care.png"
              alt="Teacher with child"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-start">
            <h2 className="font-yaro text-3xl sm:text-4xl text-accent mb-4 sm:mb-6">
              Teacher of the Year Award
            </h2>
            <p className="font-sans text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Let's celebrate the heart behind every day at School: Goddard
              teachers! Give them the recognition they deserve by nominating
              them for Teacher of the Year by 1/30.
            </p>
            <button className="btn-accent">Submit a Nomination</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherAwardSection;
