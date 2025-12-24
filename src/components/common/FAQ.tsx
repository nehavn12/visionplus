"use client";
import { useState } from "react";

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
    question: "What documents are required to start a franchise?",
    answer:
      "Drug license, GST certificate, and basic identity/address proof are required.",
  },
  {
    question: "What is the minimum investment required?",
    answer:
      "Investment depends on product range and territory. Contact us for exact details.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-360 mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[40px] font-semibold text-[#262626]">FAQ’S</h2>
          <p className="text-[#3A3A3A] text-2xl">Instant Questions</p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT – Questions */}
          <div className="space-y-3">
            {faqData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-xl text-left transition
                  ${active === index ? "bg-[#f6f6f6]" : "bg-white"}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-black" />
                  <span className="text-[20px] font-medium text-[#262626]">
                    {item.question}
                  </span>
                </div>

                <span
                  className={`transition ${
                    active === index ? "rotate-90" : ""
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT – Answer (Desktop) */}
          <div className="hidden lg:block">
            <h3 className="text-[18px] font-semibold mb-4">
              {faqData[active].question}
            </h3>
            <p className="text-black text-[20px]leading-relaxed">
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
