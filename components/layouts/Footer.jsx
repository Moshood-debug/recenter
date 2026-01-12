"use client";

import React from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronUp,
} from "lucide-react";

// Mocking the TikTok icon since it might not be in the version of lucide-react present or just to be safe with standard imports
const TikTok = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-accent text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-2xl font-bold mb-6 font-sans">
            Let's Stay in Touch!
          </h2>
          <div className="flex w-full max-w-md bg-white rounded-full overflow-hidden p-1">
            <input
              type="email"
              placeholder="Email Address"
              className="grow px-4 py-2 text-gray-700 outline-none"
            />
            <button className="bg-[#A8DADC] text-[#002D5C] font-semibold px-6 py-2 rounded-full hover:bg-[#8ecbc9] transition-colors">
              Sign Up
            </button>
          </div>
          <p className="text-xs text-gray-300 mt-4 max-w-2xl">
            By submitting this form, you agree to receive messages from The
            Goddard School, Goddard Franchisor LLC and its affiliates and/or
            subsidiaries, including Goddard Systems, LLC.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 items-start">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/logos/recenter_logo2.svg"
              alt="Recenter Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-gray-300 transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              School Locations
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              FAQs
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Franchising
            </a>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Careers at GSL
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Goddard Leadership
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Goddard Goods
            </a>
          </div>

          {/* Links Column 3 & Socials */}
          <div className="flex flex-col space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <a href="#" className="hover:text-gray-300 transition-colors">
                News
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Family Connect
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Sitemap
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Tuition Benefits
              </a>
            </div>

            <div className="mt-6">
              <h3 className="font-bold mb-3 text-lg">Connect with Us!</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white text-[#002D5C] p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white text-[#002D5C] p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white text-[#002D5C] p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <TikTok className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white text-[#002D5C] p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex flex-col items-center mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-center hover:text-gray-300 transition-colors cursor-pointer"
          >
            <ChevronUp size={32} />
            <span className="font-bold tracking-widest mt-1">BACK TO TOP</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-300 flex flex-wrap justify-center gap-4">
          <span>© 2026 Goddard Franchisor LLC</span>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Cookie Management
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Do Not Sell or Share My Personal Information
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
