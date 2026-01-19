import React from "react";
import {
  FaLightbulb,
  FaSearch,
  FaChess,
  FaCogs,
  FaUsers,
  FaChalkboardTeacher,
  FaRocket,
  FaRunning,
} from "react-icons/fa";

import SectionHeader from "../common/SectionHeader";

type TimelineItem = {
  id: string;
  //   index?: string;
  titleLetter: string;
  side: "left" | "right";
  color: string; // Tailwind bg color
  icon: React.ReactNode;
  title: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    id: "a",
    titleLetter: "A",
    side: "left",
    color: "bg-blue-700",
    icon: <FaLightbulb size={40} className="text-white" />,
    title: "500+ Product Bucket",
    description:
      "Extensive portfolio with fast moving molecules across multiple segments, ensuring  consistent market growth.",
  },
  {
    id: "b",
    titleLetter: "B",
    side: "right",
    color: "bg-sky-500",
    icon: <FaSearch size={40} className="text-white" />,
    title: "Same Day Dispatch",
    description:
      "Hassle free procedure with quick processing and fast delivery, so your business never faces stock delays.",
  },
  {
    id: "c",
    titleLetter: "C",
    side: "left",
    color: "bg-emerald-600",
    icon: <FaChess size={40} className="text-white" />,
    title: "25+ Years Experience",
    description:
      "Backed by decades of expertise and industry knowledge, delivering trusted products and reliable long-term support.",
  },
  {
    id: "d",
    titleLetter: "D",
    side: "right",
    color: "bg-orange-500",
    icon: <FaCogs size={40} className="text-white" />,
    title: "Monopoly Rights",
    description:
      "Exclusive monopoly rights for our partners, helping you build a strong presence with less competition in your area.",
  },
  {
    id: "e",
    titleLetter: "E",
    side: "left",
    color: "bg-orange-600",
    icon: <FaUsers size={40} className="text-white" />,
    title: "Trust & Credibility",
    description:
      "Quality, assurance and transparency with ethical practices that strengthen confidence among doctors and customers.",
  },
  {
    id: "f",
    titleLetter: "F",
    side: "right",
    color: "bg-purple-700",
    icon: <FaChalkboardTeacher size={40} className="text-white" />,
    title: "Stock Availability",
    description:
      "Ready stock available 24/7 with smooth supply management, so you can fulfill orders anytime without interruptions.",
  },
  {
    id: "g",
    titleLetter: "G",
    side: "left",
    color: "bg-pink-600",
    icon: <FaRocket size={40} className="text-white" />,
    title: "Marketing Resources",
    description:
      "Visual aids, product brochures, brand support and promotional tools to help you generate leads and boost conversions.",
  },
  {
    id: "h",
    titleLetter: "H",
    side: "right",
    color: "bg-pink-400",
    icon: <FaRunning size={40} className="text-white" />,
    title: "Team Support",
    description:
      "Scale your business with guidance from our expert team, ensuring smooth operations and continuous growth support.",
  },
];

export default function Infographic() {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="wrapper mx-auto">
        {/* TOP TITLE */}
        <div className="text-center mb-10 flex justify-center items-center ">
          {/* <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-gray-500">
            Many More Reason Why Join VisionPlus
          </h2> */}
          <SectionHeader
            heading=" Many More Reason Why Join VisionPlus"
            description="Join VisionPlus Healthcare and grow with trusted products, strong support, and a partner-first approach to success."
            descriptionCss="text-[20px] leading-[1.5] font-medium tracking-[2%] align-middle text-black  mb-4 text-center "
          />
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">
          {/* Center vertical line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-gray-500/60 rounded-full" />

          {/* top/bottom dots on line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-4 w-4 h-4 bg-gray-500 rounded-full" />
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-4 w-4 h-4 bg-gray-500 rounded-full" />

          <div className="flex flex-col lg:-space-y-6 lg:gap-0 gap-14">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 lg:grid-cols-2 items-center "
              >
                {/* LEFT SIDE CARD */}
                <div
                  className={`${
                    index % 2 == 0 ? "lg:pl-16" : "lg:pr-16 lg:opacity-0"
                  }`}
                >
                  {index % 2 == 0 && <TimelineCard item={item} index={index} />}
                </div>

                {/* RIGHT SIDE CARD */}
                <div
                  className={`${
                    index % 2 !== 0 ? "lg:pl-16" : "lg:pl-16 lg:opacity-0"
                  }`}
                >
                  {index % 2 !== 0 && (
                    <TimelineCard item={item} index={index} />
                  )}
                </div>

                {/* CENTER LETTER CIRCLE */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div
                    className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}
                  >
                    {item.titleLetter}
                  </div>
                </div>

                {/* MOBILE LETTER CIRCLE */}
                <div className=" block lg:hidden absolute sm:flex justify-center left-1/2 -top-10 ">
                  <div
                    className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                  >
                    {item.titleLetter}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, index }: { item: TimelineItem; index: any }) {
  //   const isLeft = item.side === "left";

  return (
    <div
      className={`relative w-full  ${index % 2 !== 0 ? "ml-auto" : "mr-auto"}`}
    >
      {/* White pill card */}
      <div
        className={`bg-white    max-w-[600px]  ${
          index % 2 == 0 ? "rounded-l-full " : " rounded-r-full "
        } shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden flex ${
          index % 2 == 0 ? " sm:flex-row-reverse " : " sm:flex-row"
        }  items-stretch min-h-35`}
      >
        {/* Colored icon block (semi circle) */}
        <div
          className={`relative ${item.color} w-25 sm:w-25 flex items-center justify-center`}
          style={{
            borderTopRightRadius: index % 2 !== 0 ? "9999px" : "0px",
            borderBottomRightRadius: index % 2 !== 0 ? "9999px" : "0px",
            borderTopLeftRadius: index % 2 == 0 ? "9999px" : "0px",
            borderBottomLeftRadius: index % 2 == 0 ? "9999px" : "0px",
          }}
        >
          {item.icon}
        </div>

        {/* Text */}
        <div className="flex flex-col px-6 sm:px-8 py-6 w-[70%] ">
          <h5 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2  ">
            {item?.title}
          </h5>
          <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
            {item?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
