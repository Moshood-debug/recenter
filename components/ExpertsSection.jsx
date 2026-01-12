import React from "react";
import Image from "next/image";

const ExpertsSection = () => {
  const features = [
    {
      image: "/assets/images/expert-care.png",
      text: "Personalized care plans tailored to your recovery needs and parenting goals.",
    },
    {
      image: "/assets/images/expert-wellness.png",
      text: "Emotional support and mindfulness practices to foster resilience and bonding.",
    },
    {
      image: "/assets/images/expert-nutrition.png",
      text: "Holistic wellness guidance including nutrition and physical recovery.",
    },
  ];

  return (
    <section className="py-16 bg-accent text-center">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16">
          <h2 className="font-yaro text-4xl sm:text-5xl text-off-white">
            A Support Program Created by Parenting Experts
          </h2>
          <p className="font-sans text-off-white/80 text-xl max-w-2xl mx-auto">
            Recenter is our exclusive program designed to embrace how families
            thrive best — through support and connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg p-3"
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={feature.image}
                  alt="Feature illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-sans text-lg font-semibold text-accent px-4 pb-4">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <button className="btn-primary bg-off-white">Learn More</button>
      </div>
    </section>
  );
};

export default ExpertsSection;
