"use client";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { HiMiniChevronRight } from "react-icons/hi2";
import { MdChevronRight } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";

const faq = {
  heading: "FAQ’S",
  subHeading: "VisionPlus Healthcare PCD Pharma Franchise",
  faqData: [
    {
      question: "What is VisionPlus Healthcare?",
      answer:
        "VisionPlus Healthcare is a leading pharmaceutical company providing high-quality healthcare solutions across India.",
    },
    {
      question: "Why choose VisionPlus Healthcare for a pharma franchise?",
      answer:
        "We offer monopoly rights, strong marketing support, quality products, and reliable supply.",
    },
    {
      question:
        "What documents are required to start a franchise with VisionPlus?",
      answer:
        "A Franchise allows individuals or businesses to promote and distribute VisionPlus Healthcare products in their designated territory with monopoly rights.",
    },
    {
      question: "What is the minimum investment required?",
      answer:
        "Investment depends on product range and territory. Contact us for exact details.",
    },
    {
      question: "What kind of monopoly rights are provided?",
      answer:
        "A Franchise allows individuals or businesses to promote and distribute VisionPlus Healthcare products in their designated territory with monopoly rights..",
    },
  ],
};

const faqData = [
  {
    question: "What is VisionPlus Healthcare?",
    answer:
      "VisionPlus Healthcare is a leading pharmaceutical company providing high-quality healthcare solutions across India.",
  },
  {
    question: "Why choose VisionPlus Healthcare for a pharma franchise?",
    answer:
      "We offer monopoly rights, strong marketing support, quality products, and reliable supply.",
  },
  {
    question:
      "What documents are required to start a franchise with VisionPlus?",
    answer:
      "A Franchise allows individuals or businesses to promote and distribute VisionPlus Healthcare products in their designated territory with monopoly rights.",
  },
  {
    question: "What is the minimum investment required?",
    answer:
      "Investment depends on product range and territory. Contact us for exact details.",
  },
  {
    question: "What kind of monopoly rights are provided?",
    answer:
      "A Franchise allows individuals or businesses to promote and distribute VisionPlus Healthcare products in their designated territory with monopoly rights..",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-white w-full">
      <div className="wrapper mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 ">
          <SectionHeader
            heading="FAQ’S"
            headingCss="text-[40px] font-semibold leading-[1.5] tracking-[2%] align-middle text-black"
            description="Instant Questions"
            descriptionCss="font-medium text-2xl leading-[1.3750] tracking-[2%] text-textSecondary"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT – Questions */}
          <div className="space-y-1.5">
            {faqData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-full flex items-center justify-between px-4 py-6 rounded-md text-left transition
                  ${active === index ? "bg-[#f6f6f6]" : "bg-white"}
                `}
              >
                <div className="flex  gap-3  max-w-[75%]">
                  <span className="min-w-6 max-h-6 rounded-full bg-black" />
                  <span className="text-xl font-medium text-textFaq tracking-[2%] leading-[1.5000]">
                    {item.question}
                  </span>
                </div>

                <span
                  className={`transition   ${
                    active === index ? "rotate-90" : ""
                  }`}
                >
                  <GoChevronRight size={24} />
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT – Answer (Desktop) */}
          <div className="hidden lg:block">
            <h3 className="text-xl font-medium   mb-4 leading-[1.5000] text-textFaq">
              {faqData[active].question}
            </h3>
            <p className="text-black text-xl font-medium leading-[1.5000]">
              {faqData[active].answer}
            </p>
          </div>
        </div>

        {/* MOBILE ANSWER */}
        <div className="lg:hidden mt-6 bg-gray-50 p-5 rounded-xl">
          <p className="text-black">{faqData[active].answer}</p>
        </div>
      </div>
    </section>
  );
}
