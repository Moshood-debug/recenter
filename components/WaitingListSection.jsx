"use client";

import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

const WaitingListSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-accent text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-yaro text-4xl lg:text-5xl leading-tight">
            If you’re interested in accessing support for you or your loved one
            after delivery, or simply want to learn more as we launch, you can
            join the waiting list below.
          </h2>

          <div className="space-y-6">
            <h3 className="font-sans text-2xl font-medium text-primary">
              Be the first to know when we launch
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="w-full sm:w-auto bg-primary text-accent font-bold px-8 py-4 rounded-full hover:bg-[#bace66] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                Join the waiting list
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-400">
              We’ll only contact you with relevant updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingListSection;
