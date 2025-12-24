"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const promotionalItems = [
  "/images/promotional/promo-1.webp",
  "/images/promotional/promo-2.webp",
  "/images/promotional/promo-3.webp",
  "/images/promotional/promo-4.webp",
  "/images/promotional/promo-1.webp",
];

export default function PromotionalInputs() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-360 mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-white text-[40px] font-semibold">
            Promotional Inputs
          </h2>

          <button className="bg-[#E31E25] text-white px-6 py-2 rounded-lg text-[14px] hover:bg-red-700 transition">
            View All
          </button>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {promotionalItems.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center shadow-lg mb-4">
                <Image
                  src={src}
                  alt="Promotional Item"
                  width={336}
                  height={229}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination color override */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #e31e25;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
