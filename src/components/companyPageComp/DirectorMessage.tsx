import React from "react";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

export default function DirectorMessageSection() {
  const directorMessageData = {
    image: {
      src: "/images/aboutUsPage/Director.png",
      alt: "Director Portrait",
    },

    badgeText: "Leadership Note",

    heading: "A Message from the Director",

    messageParagraphs: [
      `“At VisionPlus Healthcare, we don’t just manufacture medicines—we create hope, healing, and a promise for a healthier tomorrow. Every formulation we develop carries a silent pledge—to relieve pain, restore dignity, and bring comfort to those who need it most..”`,
      `To those joining us today—Welcome to the VisionPlus family. You are not just stepping into a business; you are embracing a mission to touch lives and build a legacy of trust and care. To those who have walked this journey with us—Your dedication fuels our vision. Your belief in us is our greatest strength. Together, we are not just distributing medicines; we are delivering life, relief, and hope to countless homes.`,
      `At VisionPlus Healthcare, every tablet we craft, every vial we seal, and every solution we create is a step toward a healthier world. Because health is not a privilege—it is a fundamental right. Let’s continue this journey together, shaping a future where no one is left behind.`,
    ],

    signature: {
      name: "Dilip Mahajan",
      designation: "MD VisionPlus Healthcare Private Limited",
    },

    bottomTitle: "This is more than a business; this is our purpose.",

    bottomDescription:
      "For over a decade, we have walked alongside healthcare warriors—doctors, pharmacists, and medical professionals—who trust us to deliver safe, effective, and innovative solutions. With a 300+ product portfolio, we serve a wide spectrum of specialties, including GP, CP, Gyn, Pedia, Ortho, Neuro, Derma, and ENT. Each product is a result of tireless research, strict quality control, and an unwavering commitment to human well-being.",
  };

  return (
    
    <section className="py-24  bg-black overflow-hidden">
      <div className="wrapper mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-blue/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white/5 aspect-[4/5] shadow-2xl">
              <Image
                alt={directorMessageData?.image.alt}
                className=" object-cover"
                fill
                unoptimized
                src={directorMessageData?.image.src}
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              {directorMessageData?.badgeText}
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">
              {directorMessageData?.heading}
            </h2>

            <div className="relative">
              <div className="text-primary absolute -top-26  -left-12 text-7xl opacity-20 ">
                <ImQuotesLeft size={60} />
              </div>

              <p className="text-xl italic leading-relaxed text-white/90 mb-10">
                &quot;
                {directorMessageData?.messageParagraphs[0].replace(/“|”/g, "")}
                &quot;
              </p>

              <p className="text-xl  leading-relaxed text-white/90 mb-10">
                {directorMessageData?.messageParagraphs[1]}
              </p>

              <p className="text-xl  leading-relaxed text-white/90 mb-10">
                {directorMessageData?.messageParagraphs[2]}{" "}
              </p>
            </div>

            <div>
              <p className="text-2xl font-signature text-white mb-1">
                {directorMessageData?.signature.name}
              </p>
              <p className="text-sm font-bold text-white tracking-widest uppercase">
                {directorMessageData?.signature.designation}
              </p>
            </div>
          </div>
        </div>

        <div className=" text-white flex flex-col items-center mt-8">
          <div className="text-2xl font-signature text-white mb-1 font-semibold">
            {directorMessageData?.bottomTitle}
          </div>

          <p className="text-xl  leading-relaxed text-white/90 lg:text-center">
            {directorMessageData?.bottomDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
