"use client";

import React, { useState } from "react";
import { User, Mail, Phone, ArrowRight } from "lucide-react";

/**
 * WaitingListSection - Comprehensive registration form.
 * Features fields for First Name, Last Name, Email, and Mobile Number.
 */
const WaitingListSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  return (
    <section className="py-24 bg-accent text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="font-yaro text-4xl lg:text-5xl leading-tight">
              If you’re interested in accessing support for you or your loved
              one after delivery, or simply want to learn more as we launch, you
              can join the waiting list below.
            </h2>
            <h3 className="font-sans text-2xl font-medium text-primary">
              Be the first to know when we launch
            </h3>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6 bg-white/5 backdrop-blur-sm p-8 sm:p-12 rounded-[2.5rem] border border-white/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {/* First Name */}
              <div className="space-y-2">
                <label className="font-sans text-sm font-semibold text-primary/80 ml-4 uppercase tracking-wider">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 opacity-60" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl text-accent bg-off-white border-2 border-transparent focus:border-primary focus:outline-none transition-all"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="font-sans text-sm font-semibold text-primary/80 ml-4 uppercase tracking-wider">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 opacity-60" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl text-accent bg-off-white border-2 border-transparent focus:border-primary focus:outline-none transition-all"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="font-sans text-sm font-semibold text-primary/80 ml-4 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 opacity-60" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl text-accent bg-off-white border-2 border-transparent focus:border-primary focus:outline-none transition-all"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <label className="font-sans text-sm font-semibold text-primary/80 ml-4 uppercase tracking-wider">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 opacity-60" />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl text-accent bg-off-white border-2 border-transparent focus:border-primary focus:outline-none transition-all"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-accent font-yaro text-lg py-4 rounded-2xl  flex items-center justify-center gap-3"
              >
                Join
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <p className="text-sm text-off-white/40 ">
              We’ll only contact you with relevant updates regarding our launch.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitingListSection;
