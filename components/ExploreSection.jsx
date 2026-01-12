import React from "react";
import { Home, Users } from "lucide-react";

const ExploreSection = () => {
  return (
    <section className="py-20 bg-[#F9F4E8]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-yaro text-4xl sm:text-5xl text-accent mb-12">
          Explore Our Care Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-4xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#0077B6] w-24 h-24 rounded-full flex items-center justify-center mb-6 text-white text-4xl">
              <Home className="w-12 h-12" />
            </div>
            <h3 className="font-yaro text-2xl text-accent mb-4">
              The In-Home Experience
            </h3>
            <p className="font-sans text-gray-600 mb-8 leading-relaxed">
              From compassionate doula support to medical check-ins, our home
              visits are specifically designed for your recovery and peace of
              mind.
            </p>
            <button className="text-[#0077B6] font-bold font-sans text-lg hover:underline">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-4xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#8CC6C2] w-24 h-24 rounded-full flex items-center justify-center mb-6 text-white text-4xl">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="font-yaro text-2xl text-accent mb-4">
              Recenter Caregivers
            </h3>
            <p className="font-sans text-gray-600 mb-8 leading-relaxed">
              Our team consists of highly skilled nurses and doulas who are
              mentored and trained in postpartum wellness and family support.
            </p>
            <button className="text-[#0077B6] font-bold font-sans text-lg hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
