"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { PiArrowUpRightBold } from "react-icons/pi";

// const categories = [
//   { type: "pill", title: "Gynecology Care" },
//   { type: "image", image: "/images/category/gynae.webp" },

//   { type: "pill", title: "Orthopedic Care" },
//   { type: "image", image: "/images/category/ortho.webp" },

//   { type: "pill", title: "Dermatology Care" },
//   { type: "image", image: "/images/category/derma.webp" },

//   { type: "pill", title: "ENT Surgeon" },
//   { type: "image", image: "/images/category/ent.webp" },

//   { type: "pill", title: "Pedia Care" },
//   { type: "image", image: "/images/category/pedia.webp" },

//   { type: "pill", title: "Neuro Care" },
//   { type: "image", image: "/images/category/neuro.webp" },

//   { type: "pill", title: "Cardio Diabetes" },
//   { type: "image", image: "/images/category/cardio.webp" },

//   { type: "pill", title: "General Products" },
//   { type: "image", image: "/images/category/general.webp" },
// ];

const categories = [
  {
    id: 1,
    title: "Gynecology Care",
    image: "/images/category/gynae.webp",
  },
  {
    id: 2,
    title: "Orthopedic Care",
    image: "/images/category/ortho.webp",
  },
  {
    id: 3,
    title: "Dermatology Care",
    image: "/images/category/derma.webp",
  },
  {
    id: 4,
    title: "ENT Surgeon",
    image: "/images/category/ent.webp",
  },
  {
    id: 5,
    title: "Pedia Care",
    image: "/images/category/pedia.webp",
  },
  {
    id: 6,
    title: "Neuro Care",
    image: "/images/category/neuro.webp",
  },
  {
    id: 7,
    title: "Cardio Diabetes",
    image: "/images/category/cardio.webp",
  },
  {
    id: 8,
    title: "General Products",
    image: "/images/category/general.webp",
  },
];

export default function PopularCategoriesSlider() {
  return (
    <section className="pt-10 max-md:pt-6 max-md:pb-8">
      <div className="wrapper mx-auto ">
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
          spaceBetween={32}
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
              <div className=" flex">
                <button
                  className="
                    flex items-center gap-3 px-10 py-7 md:px-8 md:py-6 max-md:px-5 max-md:py-4 border border-[#A5A5A5] rounded-full text-[18px] md:text-[1.375rem] max-md:text-[14px] leading-[1.2727] align-middle font-medium whitespace-nowrap hover:bg-gray-50 transition "
                >
                  {item.title}
                  <span className="max-md:scale-75 text-black">
                    <PiArrowUpRightBold size={24} />
                  </span>
                </button>
                <div
                  className="
                    relative
                    w-50 h-22.5
                    md:w-[17.188rem] md:h-[7.5rem]
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
