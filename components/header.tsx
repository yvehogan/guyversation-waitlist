import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/svgs/logo.svg"
          alt="Guyversation Logo"
          width={200}
          height={200}
          className=""
        />
      </div>

      <div className="hidden md:flex items-center justify-center gap-12 flex-1">
        <Link
          href="#about"
          className="text-gray-700 hover:text-[#6a2fad] transition-colors"
        >
          About
        </Link>
        <Link
          href="#benefits"
          className="text-gray-700 hover:text-[#6a2fad] transition-colors"
        >
          Benefits
        </Link>
      </div>

      <div>
        <Link
          href="https://forms.gle/V93vo9ivBraT13Kc9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#6a2fad] border border-[#6a2fad] rounded-full px-6 py-2 hover:bg-[#6a2fad] hover:text-white transition-all hidden md:inline-block"
        >
          Join the Waitlist
        </Link>
        <Link
          href="https://forms.gle/V93vo9ivBraT13Kc9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#6a2fad] border border-[#6a2fad] rounded-full px-4 py-1.5 text-sm hover:bg-[#6a2fad] hover:text-white transition-all md:hidden"
        >
          Join the Waitlist
        </Link>
      </div>
    </header>
  );
};

export default Header;
