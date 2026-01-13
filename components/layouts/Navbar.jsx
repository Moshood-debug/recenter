"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/logos/recenter_logo.svg"
              alt="Recenter Logo"
              width={140}
              height={40}
              className={`transition-all duration-300 ${
                scrolled ? "h-10 w-auto" : "h-10 md:h-12 w-auto"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-gray-700 hover:text-accent relative group text-sm tracking-wide"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <button className="bg-accent text-white px-6 py-2.5 rounded-full font-sans font-medium text-sm hover:bg-[#002D5C]/90 hover:shadow-lg">
              Care Center
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-accent focus:outline-none p-2"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md border-t z-50">
          <div className="flex flex-col items-start px-6 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-sans font-medium text-gray-700 hover:text-accent transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={() => setOpen(false)}
              className="font-sans font-medium text-gray-700 hover:text-accent transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="font-sans font-medium text-gray-700 hover:text-accent transition-colors"
            >
              Contact Us
            </Link>

            <button
              className="btn-accent text-light-green w-full"
              onClick={() => setOpen(false)}
            >
              Care Center
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
