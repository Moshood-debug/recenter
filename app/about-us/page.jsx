import React from "react";
import Image from "next/image";
import { Heart, Users, ShieldCheck } from "lucide-react";

export default function AboutUsPage() {
  const coreValues = [
    {
      title: "Compassion First",
      description:
        "We approach every interaction with empathy and understanding, recognizing that every parenting journey is unique.",
      icon: Heart,
    },
    {
      title: "Community Built",
      description:
        "We believe in the power of connection. You were never meant to do this alone, and with Recenter, you don't have to.",
      icon: Users,
    },
    {
      title: "Trusted Expertise",
      description:
        "All our specialists are vetted, certified, and experienced, ensuring you receive the highest standard of care.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className=" h-100 flex items-center justify-center bg-accent overflow-hidden">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-yaro text-4xl md:text-5xl text-white mb-6">
            Our Mission
          </h1>
          <p className="font-sans text-lg text-light-green max-w-2xl mx-auto">
            Restoring the village for every new mother.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative h-125 w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden ">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-lg">About Us Image</span>
              </div>
              <Image
                src="/assets/images/promise.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-yaro text-4xl text-accent mb-6">
              Reimagining Motherhood Care
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
              At Recenter, we believe that the postpartum period is not just
              about recovery—it's about transformation. Too often, mothers are
              expected to bounce back immediately, without the support systems
              that previous generations relied on.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
              Our mission is to bridge that gap by connecting families with
              certified doulas, expert lactation consultants, and a supportive
              community that understands the unique challenges of the fourth
              trimester.
            </p>
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-xl italic text-accent font-semibold">
                "We are not just a service provider; we are your village,
                reimagined for the modern world."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-yaro text-4xl text-accent mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {coreValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-light-green rounded-full flex items-center justify-center mb-6 text-accent">
                    <Icon size={40} />
                  </div>

                  <h3 className="font-yaro text-2xl text-accent mb-4">
                    {value.title}
                  </h3>

                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-center text-dark-blue">
        <div className="container mx-auto px-4">
          <h2 className="font-yaro text-4xl mb-6 ">
            Ready to find your support system?
          </h2>
          <p className="text-xl text-dark-blue/80 mb-10 max-w-2xl mx-auto">
            Join hundreds of families who have found peace, support, and
            confidence with Recenter.
          </p>
          <button className="btn-accent text-xl px-10 py-4">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
