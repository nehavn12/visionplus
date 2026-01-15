"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionHeader from "../common/SectionHeader";
import "swiper/css";

const products = [
  { name: "Lulilion", image: "/images/products/lulilion.webp" },
  { name: "Nevill SP", image: "/images/products/nevill-sp.webp" },
  { name: "Folfol-DHA", image: "/images/products/folfol-dha.webp" },
  { name: "Vitn-AD", image: "/images/products/vitn-ad.webp" },
  { name: "Lulilion", image: "/images/products/lulilion.webp" },
  { name: "Nevill SP", image: "/images/products/nevill-sp.webp" },
  { name: "Folfol-DHA", image: "/images/products/folfol-dha.webp" },
  // later you can add more
];

export default function OurProducts() {
  return (
    <section className="py-16 bg-primary ">
      <div className=" wrapper mx-auto ">
        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <SectionHeader heading="Our Products" />

          <button className="bg-[#E31E25] text-white px-8 py-3 rounded-[10px] text-[18px] hover:bg-red-700 transition">
            View All
          </button>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          loopAdditionalSlides={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <div className="mb-6 relative w-[20.875rem] h-[25rem] overflow-hidden p-5 shadow-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain mx-auto "
                  />
                </div>

                <p className="text-[22px] leading-[1.4000] font-bold align-middle text-textSecondary">
                  {product.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
