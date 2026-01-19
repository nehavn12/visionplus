// export default async function AboutUs() {
//   return (
//     <>
//       <div className=" w-full">Hello</div>
//     </>
//   );
// }

// app/about/page.tsx

import Image from "next/image";
import { FaEye } from "react-icons/fa";
import SectionHeader from "@/components/common/SectionHeader";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa6";
import { MdBiotech } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { MdOutlineGavel } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { GiLightBulb } from "react-icons/gi";
import { ImQuotesLeft } from "react-icons/im";

import CommitmentSection from "@/components/companyPageComp/CommitmentToHealthcare";
import VisionMissionSection from "@/components/companyPageComp/Vision&Mission";
import CoreValuesSection from "@/components/companyPageComp/CoreValues";
import DirectorMessageSection from "@/components/companyPageComp/DirectorMessage";
import InfographicTimeline from "@/components/companyPageComp/WhyJoinVisionPlus";
import Infographic from "@/components/companyPageComp/WhyVisionPluse";

export default function AboutPage() {
  const doctorSpecialities = [
    { id: 1, name: "General Physicians (GP)" },
    { id: 2, name: "Consultant Physicians (CP)" },
    { id: 3, name: "Gynecology (Gyn)" },
    { id: 4, name: "Pediatrics (Pedia)" },
    { id: 5, name: "Orthopedics (Ortho)" },
    { id: 6, name: "Neurology (Neuro)" },
    { id: 7, name: "Dermatology (Derma)" },
    { id: 8, name: "ENT (Ear, Nose & Throat)" },
  ];

  const coreValuesData = [
    {
      id: 1,
      title: "Integrity",
      description:
        "Transparency in every consultation and ethical practice in every procedure.",
      icon: MdOutlineGavel,
      cardClass:
        "group bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-8 max-md:p-5",
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "A commitment to clinical brilliance and continuous improvement of service.",
      icon: MdWorkspacePremium,
      cardClass:
        "group bg-white dark:bg-white/5 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-sky-blue transition-all duration-300",
    },
    {
      id: 3,
      title: "Compassion",
      description:
        "Deep empathy for our patients, treating every individual with dignity and care.",
      icon: MdFavorite,
      cardClass:
        "group bg-white dark:bg-white/5 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-sky-blue transition-all duration-300",
    },
    {
      id: 4,
      title: "Innovation",
      description:
        "Leading the way with modern medical discoveries and advanced treatments.",
      icon: GiLightBulb,
      cardClass:
        "group bg-white dark:bg-white/5 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-sky-blue transition-all duration-300",
    },
  ];
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <div className="px-4 py-4">
          <div className="w-full mx-auto">
            <div className="relative overflow-hidden rounded-4xl min-h-[calc(100vh)] flex items-center justify-center  ">
              <div className="absolute inset-0 bg-[url('/images/aboutUsPage/who.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 shadow-[inset_0_0_140px_40px_rgba(0,0,0,0.75)] bg-black/20" />
              <div className="relative z-10 wrapper mx-auto  text-center mt-20">
                <div className="bg-primary/10 text-white   backdrop-blur-[12px] border border-primary/20 p-4 md:p-16 rounded-2xl shadow-2xl">
                  <h1 className="  text-[48px] md:text-[70px] max-md:text-[30px] leading-22.5 max-md:leading-tight font-normal">
                    Who We Are
                  </h1>
                  <p className="  mt-6 text-[26px]  max-md:text-[15px]  max-md:mt-4    font-normal">
                    VisionPlus Healthcare Private Limited is a leading
                    pharmaceutical company with over 10 years of experience in
                    pharma marketing. We specialize in providing high-quality,
                    innovative, and affordable healthcare solutions, ensuring
                    better patient outcomes.
                  </p>
                  {/* <p className="  mt-6 text-[26px]  max-md:text-[15px]  max-md:mt-4    font-normal">
                    With a diverse portfolio of 300+ products, we cater to
                    multiple therapeutic segments, including:
                  </p>
                  <div className=" flex justify-center">
                    <ul className="grid md:grid-cols-2 w-[50%] gap-x-4 gap-y-2">
                      {doctorSpecialities?.map((data, index) => (
                        <li key={index} className="  flex justify-start gap-1">
                          <div className="  relative h-[3rem] w-[3rem] rounded-t-[0.625rem]  rounded-bl-[0.625rem] flex items-center justify-center bg-white">
                            <Image
                              src="/images/check-arrow.svg"
                              alt=""
                              width={25}
                              height={25}
                              className="object-contain"
                            />
                          </div>
                         
                          <div className=" h-full flex items-center justify-center  w-full rounded-t-[0.625rem]  rounded-br-[0.625rem] bg-white">
                            <span className=" text-[14px] max-md:text-[10px] text-black font-bold ">
                              {data?.name}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative  overflow-hidden pt-10 pb-20 lg:py-24 border-2 border-black">
        <div className="wrapper mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span className="text-textSecondary text-xs font-bold uppercase tracking-widest">
                  Our Mission
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.04em] dark:text-white">
                Humanity meets <br />
                <span className="text-textSecondary italic font-light">
                  Innovation.
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-[#657e86] max-w-lg leading-relaxed dark:text-gray-400 font-normal">
                Redefining healthcare through personalized patient care and
                cutting-edge clinical excellence. We bridge the gap between
                medical science and human touch.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <button className="bg-textSecondary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-textSecondary/30">
                  Learn More
                </button>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-textSecondary flex items-center justify-center text-textSecondary group-hover:bg-textSecondary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">
                      play_arrow
                    </span>
                  </div>
                  <span className="font-bold text-sm tracking-wide uppercase">
                    Watch Story
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Doctor interacting warmly with a patient in clinical setting"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRslR7QaiwwYT68U8H6p5XZO-4f6pcFl303OoMNnJ3KMie3VdcOJZ0WhBppDccdkHi2oEXfIjdVJmLy3y9IlXZHYG2nvCFufWpEQgl-cWHfMkqGVNNrGeMqDjUx1LGbbiHcwBxCFSiMFLMRvoUb91J9UgjaKu-kQVLwtTQjJzakiARMdytux__t92qvxPTWt30PA7Qp5V1vllR0ojZiq-HbBIeQtCvqcRLIILm0u2WwPuQwY62tA3KUJUFREeSmOzaoBKDh9apEOwF")',
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-textSecondary/60 to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
                  <p className="text-white font-medium italic">
                    "The care here isn't just medical, it's deeply personal.
                    They saw me as a human first."
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20"></div>
                    <span className="text-white text-sm font-bold">
                      — Sarah J., Patient
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= SECTION 1 ================= */}
      <CommitmentSection />

      {/* ================= VISION / MISSION ================= */}
      <VisionMissionSection />

      {/* ================= CORE VALUES ================= */}
      <CoreValuesSection />

      {/* ================= DIRECTOR MESSAGE ================= */}
      <DirectorMessageSection />

      {/* ================= Why join ================= */}
      {/* <InfographicTimeline /> */}
      <Infographic />

      {/* ================= CTA ================= */}
      {/* <section className="relative py-24 overflow-hidden medical-gradient dark:bg-background-dark">
        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[200px] text-sky-blue">
            stethoscope
          </span>
        </div>

        <div className="absolute bottom-0 left-10 opacity-5 pointer-events-none">
          <svg
            className="w-full h-32 text-sky-blue"
            preserveAspectRatio="none"
            viewBox="0 0 400 100"
          >
            <path
              d="M0 50 L50 50 L60 20 L75 80 L90 50 L140 50 L150 10 L165 90 L180 50 L230 50 L240 30 L255 70 L270 50 L320 50 L330 0 L345 100 L360 50 L400 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Experience Better Healthcare?
          </h2>

          <p className="text-sky-blue/90 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Join the thousands of patients who trust Vision Plus for excellence
            in medical care. Book your consultation with our specialists today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-sky-blue text-primary px-10 py-5 rounded-xl font-extrabold text-lg shadow-xl hover:bg-white hover:scale-105 transition-all duration-300">
              Book a Consultation
            </button>

            <button className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-xl font-extrabold text-lg hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}
