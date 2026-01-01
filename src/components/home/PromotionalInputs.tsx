"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../common/SectionHeader";

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
      <div className="wrapper mx-auto ">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <SectionHeader
            heading="Promotional Inputs"
            headingCss="text-[40px] font-sem ibold mb-5 tracking-[2%] align-middle text-white"
          />

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
              <div className="flex items-center justify-center shadow-lg mb-14 rounded-[1.25rem]">
                <Image
                  src={src}
                  alt="Promotional Item"
                  width={336}
                  height={229}
                  className="object-contain"
                  unoptimized
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
          height: 16px;
          width: 16px;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #e31e25;
          height: 16px;
          width: 16px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
