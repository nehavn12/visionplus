"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Button from "./GlobalButton";
import "swiper/css";

const review = {
  heading: "What Customer Say About Us",
  subHeading:
    "Our customers value our consistent product quality, timely delivery, transparent dealings, and reliable support, making us a trusted pharmaceutical partner nationwide.",
  buttonName: "",
  buttonLink: "#",
  testimonials: [
    {
      name: "Rahul Verma",
      image: "/images/testimonials/user-1.webp",
      text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
    },
    {
      name: "Daniel Rodriguez",
      image: "/images/testimonials/user-2.webp",
      text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
    },
    {
      name: "Megan Thompson",
      image: "/images/testimonials/user-3.webp",
      text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
    },
    {
      name: "Amit Sharma",
      image: "/images/testimonials/user-1.webp",
      text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
    },
  ],
};

const testimonials = [
  {
    name: "Rahul Verma",
    image: "/images/testimonials/user-1.webp",
    text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
  },
  {
    name: "Daniel Rodriguez",
    image: "/images/testimonials/user-2.webp",
    text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
  },
  {
    name: "Megan Thompson",
    image: "/images/testimonials/user-3.webp",
    text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
  },
  {
    name: "Amit Sharma",
    image: "/images/testimonials/user-1.webp",
    text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 w-full">
      <div className="wrapper mx-auto ">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-9">
            <SectionHeader
              heading="What Customer Say About Us"
              headingCss="text-[40px] font-semibold mb-2 leading-[1.5] tracking-[2%] align-middle text-black"
              description=" Our customers value our consistent product quality, timely
              delivery, transparent dealings, and reliable support, making us a
              trusted pharmaceutical partner nationwide."
              descriptionCss="text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black max-w-210 "
            />
          </div>

          <div className="lg:col-span-3 flex lg:justify-end items-center">
            <Button
              type="link"
              text="View More"
              href="#"
              className="py-4 px-12 font-normal text-lg leading-[1.2778] align-middle rounded-[0.625rem] bg-secondary text-white  hover:bg-red-700 transition"
            />
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          className="h-full"
          autoHeight={false}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full">
                <div className="bg-white rounded-[0.625rem] shadow-sm p-6 min-h-[20.063rem] min-w-[28.125rem] flex flex-col ">
                  {/* STARS */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src="/images/star.svg"
                        alt="star"
                        unoptimized
                        width={22}
                        height={22}
                      />
                    ))}
                  </div>

                  {/* TEXT */}
                  <p className="text-lg leading-[1.5] text-black font-medium tracking-[2%] mb-8">
                    {item.text}
                  </p>

                  {/* USER */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      unoptimized
                      className="rounded-full object-center"
                    />
                    <span className="text-lg text-textSecondary font-semibold leading-[1.5] tracking-[2%] line-clamp-4">
                      {item.name}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
