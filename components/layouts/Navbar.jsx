import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center py-4 bg-white ">
        <Image
          src="/assets/logos/recenter_logo.svg"
          alt="Logo"
          width={150}
          height={150}
        />

        <button className="btn-accent text-light-green">Care Center</button>
      </div>
    </nav>
  );
};

export default Navbar;
