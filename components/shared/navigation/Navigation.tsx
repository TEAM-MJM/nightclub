"use client";

import NavItem from "@/components/shared/nav-item/NavItem";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 lg:h-[124px] h-[107px] bg-[#000000e1] border-2 border-primary z-50">
      <div className="absolute -top-0.5 -left-0.5 w-0 h-0 border-t-30 border-t-primary border-r-30 border-r-transparent" />
      <div className="flex items-center justify-between mx-auto px-8 max-w-350 h-full gap-16">
        <Link href="/" className="relative shrink-0">
          <Image
            src="/assets/Logo.png"
            alt="NIGHTCLUB - HAVE A GOOD TIME"
            width={228}
            height={54}
            className="object-contain lg:w-[228px] lg:h-[54px] w-[189px] h-[46px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full max-w-3xl gap-4">
          <NavItem label="Home" href="/" />
          <NavItem label="Blog" href="/blog" />
          <NavItem label="Book table" href="/book-table" />
          <NavItem label="Contact us" href="/contact" />
          <NavItem label="Log In" href="/login" />
        </div>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-2 z-50 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`w-11 h-1 rounded-[1px] bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <span
            className={`w-11 h-1 rounded-[1px] bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-11 h-1 rounded-[1px] bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[105px] left-0 right-0 bg-[#000000e1] border-2 border-t-0 border-primary transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          <NavItem label="Home" href="/" />
          <NavItem label="Blog" href="/blog" />
          <NavItem label="Book table" href="/book-table" />
          <NavItem label="Contact us" href="/contact" />
          <NavItem label="Log In" href="/login" />
        </div>
      </div>

      <div className="absolute -bottom-0.5 -right-0.5 w-0 h-0 border-b-30 border-b-primary border-l-30 border-l-transparent" />
    </nav>
  );
};

export default Navigation;
