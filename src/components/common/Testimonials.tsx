"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Rahul Verma",
    image: "/images/testimonials/user-1.webp",
    text: "VisionPlus has truly transformed my experience with healthcare. The staff was knowledgeable, and I felt well taken care of every step of the way. Highly recommend!",
  },
  {
    name: "Daniel Rodriguez",
    image: "/images/testimonials/user-2.webp",
    text: "Thank you, VisionPlus, for providing exceptional eye care. Your team is professional, and the quality of service exceeded my expectations.",
  },
  {
    name: "Megan Thompson",
    image: "/images/testimonials/user-3.webp",
    text: "I'm so grateful for the outstanding service I received at VisionPlus. The staff was friendly, the technology was advanced, and I'm seeing better than ever!",
  },
  {
    name: "Amit Sharma",
    image: "/images/testimonials/user-1.webp",
    text: "Great experience overall. Reliable products, timely delivery, and excellent support from the team.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-360 mx-auto px-6">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-9">
            <h2 className="text-[40px] font-semibold mb-3">
              What Customer Say About Us
            </h2>
            <p className="text-[16px] text-black max-w-175">
              Our customers value our consistent product quality, timely
              delivery, transparent dealings, and reliable support, making us a
              trusted pharmaceutical partner nationwide.
            </p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end items-center">
            <button className="bg-[#E31E25] text-white px-6 py-3 rounded-lg text-[15px] hover:bg-red-700 transition">
              View More
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-sm p-8 h-full">
                {/* STARS */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                      key={i}
                      src="/images/star.svg"
                      alt="star"
                      width={22}
                      height={22}
                    />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-[18px] text-black leading-relaxed mb-8">
                  {item.text}
                </p>

                {/* USER */}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <span className="text-[18px] font-semibold">{item.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
