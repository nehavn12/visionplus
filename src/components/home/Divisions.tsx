"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const divisions = [
  { name: "Casca", logo: "/images/divisions/casca.webp" },
  { name: "Skin Venture", logo: "/images/divisions/skin-venture.webp" },
  { name: "Neoliva", logo: "/images/divisions/neoliva.webp" },
  { name: "Herb Venture", logo: "/images/divisions/herb-venture.webp" },
  { name: "Medliva", logo: "/images/divisions/medliva.webp" },
  { name: "Fluff Adore", logo: "/images/divisions/fluff-adore.webp" },
];

export default function Divisions() {
  return (
    <section className="bg-black py-20 max-md:py-8">
      <div className="max-w-360 mx-auto px-6 max-md:px-4">
        {/* Heading */}
        <h2 className="text-white text-[40px] font-semibold mb-2">Divisions</h2>

        <p className="text-white text-[24px] mb-14">
          11+ division with 1500+ products
        </p>

        {/* Logos */}
        <div className="relative -mx-4 md:mx-0">
          <Swiper
            slidesPerView={1.8} // mobile
            spaceBetween={16}
            breakpoints={{
              640: {
                slidesPerView: 2.4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: "auto", // ✅ DESKTOP FIX
                spaceBetween: 40,
              },
            }}
            className="overflow-visible"
          >
            {divisions.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto flex justify-center">
                <div className="w-50 h-50 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={218}
                    height={218}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
