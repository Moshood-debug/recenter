"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="container mx-auto relative">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 xl:px-0 bg-white">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logos/recenter_logo.svg"
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="font-sans font-medium text-gray-700 hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="font-sans font-medium text-gray-700 hover:text-accent transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="font-sans font-medium text-gray-700 hover:text-accent transition-colors"
          >
            Contact Us
          </Link>
          <button className="btn-accent text-light-green">Care Center</button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
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
