import React from "react";
import SectionHeader from "../common/SectionHeader";
import { MdVerifiedUser, MdGroupAdd, MdBiotech } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa";

export default function CommitmentSection() {
  const commitmentSectionData = {
    header: {
      heading: "Our Commitment to Healthcare Excellence",
      description:
        "At VisionPlus Healthcare, we are committed to enhancing lives by delivering scientifically advanced and clinically proven pharmaceutical products. Our formulations are backed by research, ensuring efficacy, safety, and compliance with industry standards.",
      descriptionCss:
        "text-[20px] leading-[1.5] font-medium tracking-[2%] align-middle text-black lg:w-[90%] mb-4",
    },

    highlights: [
      {
        id: 1,
        icon: MdVerifiedUser,
        text: "ISO 9001 Certified Quality Standards",
      },
      {
        id: 2,
        icon: MdGroupAdd,
        text: "Over 200 Specialist Physicians",
      },
    ],

    cards: [
      {
        id: 1,
        icon: FaNotesMedical,
        title: "Patient-First Care",
        description:
          "Providing personalized attention to every individual, ensuring comfort and clear communication throughout the healing process.",
      },
      {
        id: 2,
        icon: MdBiotech,
        title: "Advanced Tech",
        description:
          "Utilizing the latest AI-driven medical technology for precision diagnostics and minimally invasive surgical procedures.",
      },
    ],
  };
  return (
    // <section className="py-20  ">
    //   <div className="wrapper mx-auto ">
    //     <div className="flex flex-col lg:flex-row gap-16 items-start">
    //       <div className="lg:w-1/2">
    //         <SectionHeader
    //           heading="Our Commitment to Healthcare Excellence"
    //           description="At VisionPlus Healthcare, we are committed to enhancing lives by delivering scientifically advanced and clinically proven pharmaceutical products. Our formulations are backed by research, ensuring efficacy, safety, and compliance with industry standards."
    //           descriptionCss="text-[20px] leading-[1.5] font-medium tracking-[2%] align-middle text-black lg:w-[90%] mb-4"
    //         />

    //         <div className="space-y-4">
    //           <div className="flex items-center gap-4">
    //             <div className="w-12 h-12 bg-primary/5 dark:bg-sky-blue/10 rounded-full flex items-center justify-center bg-white">
    //               <MdVerifiedUser size={24} />
    //             </div>
    //             <p className="font-semibold text-xl">
    //               ISO 9001 Certified Quality Standards
    //             </p>
    //           </div>

    //           <div className="flex items-center gap-4">
    //             <div className="w-12 h-12 bg-primary/5 dark:bg-sky-blue/10 rounded-full flex items-center justify-center bg-white">
    //               <MdGroupAdd size={24} />
    //             </div>
    //             <p className="font-semibold text-xl">
    //               Over 200 Specialist Physicians
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
    //         <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-8 max-md:p-5 ">
    //           <div className=" text-textPrimary  mb-4">
    //             <FaNotesMedical size={40} />
    //           </div>
    //           <h3 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2">
    //             Patient-First Care
    //           </h3>
    //           <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary ">
    //             Providing personalized attention to every individual, ensuring
    //             comfort and clear communication throughout the healing process.
    //           </p>
    //         </div>

    //         <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-8 max-md:p-5">
    //           <div className=" text-textPrimary mb-4  ">
    //             <MdBiotech size={40} />
    //           </div>
    //           <h3 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2">
    //             Advanced Tech
    //           </h3>
    //           <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
    //             Utilizing the latest AI-driven medical technology for precision
    //             diagnostics and minimally invasive surgical procedures.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-20  ">
      <div className="wrapper mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <SectionHeader
              heading={commitmentSectionData?.header?.heading}
              description={commitmentSectionData?.header.description}
              descriptionCss="text-[20px] leading-[1.5] font-medium tracking-[2%] align-middle text-black lg:w-[90%] mb-4"
            />

            <div className="space-y-4">
              {commitmentSectionData?.highlights.map((item: any) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 dark:bg-sky-blue/10 rounded-full flex items-center justify-center bg-white">
                      <Icon size={24} />
                    </div>
                    <p className="font-semibold text-xl">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitmentSectionData?.cards.map((item: any) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-8 max-md:p-5 "
                >
                  <div className=" text-textPrimary  mb-4">
                    <Icon size={40} />
                  </div>

                  <h3 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary ">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
