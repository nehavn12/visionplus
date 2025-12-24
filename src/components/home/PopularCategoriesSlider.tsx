"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ArrowIcon from "@/components/common/ArrowIcon";

const categories = [
  { type: "pill", title: "Gynecology Care" },
  { type: "image", image: "/images/category/gynae.webp" },

  { type: "pill", title: "Orthopedic Care" },
  { type: "image", image: "/images/category/ortho.webp" },

  { type: "pill", title: "Dermatology Care" },
  { type: "image", image: "/images/category/derma.webp" },

  { type: "pill", title: "ENT Surgeon" },
  { type: "image", image: "/images/category/ent.webp" },

  { type: "pill", title: "Pedia Care" },
  { type: "image", image: "/images/category/pedia.webp" },

  { type: "pill", title: "Neuro Care" },
  { type: "image", image: "/images/category/neuro.webp" },

  { type: "pill", title: "Cardio Diabetes" },
  { type: "image", image: "/images/category/cardio.webp" },

  { type: "pill", title: "General Products" },
  { type: "image", image: "/images/category/general.webp" },
];

export default function PopularCategoriesSlider() {
  return (
    <section className="pt-10 max-md:pt-6 max-md:pb-8">
      <div className="max-w-360 mx-auto px-6 max-md:px-4">
        {/* Heading */}
        <h2
          className="
          text-[40px]
          md:text-[34px]
          max-md:text-[24px]
          font-normal
          mb-12
          max-md:mb-6
          text-[#0D0D0D]
        "
        >
          Popular Categories
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            0: {
              spaceBetween: 14,
            },
            768: {
              spaceBetween: 18,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
          slidesPerView="auto"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              {item.type === "pill" ? (
                <button
                  className="
                    flex items-center gap-3
                    px-10 py-7
                    md:px-8 md:py-6
                    max-md:px-5 max-md:py-4
                    border border-[#A5A5A5]
                    rounded-full
                    text-[22px]
                    md:text-[18px]
                    max-md:text-[14px]
                    font-medium
                    whitespace-nowrap
                    hover:bg-gray-50
                    transition
                  "
                >
                  {item.title}
                  <span className="max-md:scale-75">
                    <ArrowIcon />
                  </span>
                </button>
              ) : (
                <div
                  className="
                    relative
                    w-50 h-22.5
                    md:w-40 md:h-20
                    max-md:w-28 max-md:h-14
                    rounded-full
                    overflow-hidden
                  "
                >
                  <Image
                    src={item.image!}
                    alt="Category"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
