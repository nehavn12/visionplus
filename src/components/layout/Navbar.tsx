"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "@/components/common/SearchIcon";

const menuItems = [
  "Home",
  "Company",
  "Products",
  "Visual Aid",
  "Franchise",
  "Calculators",
  "Blog",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //  Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* BACKGROUND LAYER */}
      <div
        className={`
          transition-all duration-300
          ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        {/* OUTER WRAPPER */}
        <div
          className={`
            mx-auto transition-all duration-300
            ${scrolled ? "w-full" : "max-w-360 px-6 lg:px-10"}
          `}
        >
          {/* NAVBAR CARD */}
          <div
            className={`
              flex items-center justify-between transition-all duration-300
              ${
                scrolled
                  ? "px-6 lg:px-10 py-4 rounded-b-2xl"
                  : "bg-white px-8 py-4 mt-10 rounded-2xl shadow-md"
              }
            `}
          >
            {/* LOGO */}
            <Image
              src="/images/logo.webp"
              alt="Vision Plus Healthcare"
              width={134}
              height={72}
              priority
            />

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8 text-[16px] font-semibold text-black">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-red-600 transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block bg-[#E31E25] text-white px-10 py-3 rounded-full text-[16px] font-medium hover:bg-red-700 transition">
                Contact Us
              </button>

              <button
                aria-label="Search"
                className="w-11 h-11 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition"
              >
                <SearchIcon />
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden w-10 h-10 rounded-full border flex items-center justify-center text-xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-[16px] font-semibold hover:text-red-600"
            >
              {item}
            </a>
          ))}

          <button className="w-full bg-[#E31E25] text-white py-3 rounded-full text-[16px] font-medium">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
