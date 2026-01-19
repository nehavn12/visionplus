import React from "react";
import { FaEye } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";

export default function VisionMissionSection() {
  // const visionMissionData = [
  //   {
  //     id: 1,
  //     title: "Our Vision",
  //     description:
  //       "To be the global benchmark for compassionate healthcare, recognized for our innovation and the measurable impact we make on the communities we serve.",
  //     icon: FaEye,
  //     wrapperClass:
  //       "bg-black text-white p-8 lg:p-24 flex flex-col justify-center lg:rounded-l-2xl rounded-t-2xl",
  //     iconClass: "material-symbols-outlined text-secondary text-5xl mb-6",
  //     titleClass: "text-4xl font-extrabold mb-6",
  //     descClass: `text-white/80 text-[26px] max-md:text-[15px] leading-relaxed font-normal`,
  //   },
  //   {
  //     id: 2,
  //     title: "Our Mission",
  //     description:
  //       "Delivering accessible, world-class medical services through cutting-edge innovation, ethical practice, and a relentless focus on patient outcomes.",
  //     icon: MdOutlineTrackChanges,
  //     wrapperClass:
  //       " bg-white  p-8 lg:p-24 flex flex-col justify-center border-y border-primary/5 dark:border-white/5 lg:rounded-r-2xl rounded-b-2xl",
  //     iconClass:
  //       "material-symbols-outlined text-secondary dark:text-sky-blue text-5xl mb-6",
  //     titleClass: "text-4xl text-black  font-extrabold mb-6",
  //     descClass: `text-black    text-[26px] max-md:text-[15px] leading-relaxed font-normal`,
  //   },
  // ];

  const visionMissionData = [
    {
      id: 1,
      title: "Our Vision",
      description:
        "To be the global benchmark for compassionate healthcare, recognized for our innovation and the measurable impact we make on the communities we serve.",
      icon: FaEye,
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "Delivering accessible, world-class medical services through cutting-edge innovation, ethical practice, and a relentless focus on patient outcomes.",
      icon: MdOutlineTrackChanges,
    },
  ];
  return (
    <section className=" w-full  mx-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 wrapper mx-auto">
        <div className="bg-black text-white p-8 lg:p-24 flex flex-col justify-center lg:rounded-l-2xl rounded-t-2xl">
          <span className="material-symbols-outlined text-secondary text-5xl mb-6">
            <FaEye size={60} />
          </span>
          <h2 className="text-4xl font-extrabold mb-6">Our Vision</h2>
          <p
            className="text-white/80 text-[26px]
                      max-md:text-[15px]
                      leading-relaxed
                      font-normal"
          >
            To be the global benchmark for compassionate healthcare, recognized
            for our innovation and the measurable impact we make on the
            communities we serve.
          </p>
        </div>

        <div className=" bg-white  p-8 lg:p-24 flex flex-col justify-center border-y border-primary/5 dark:border-white/5 lg:rounded-r-2xl rounded-b-2xl">
          <span className="material-symbols-outlined text-secondary dark:text-sky-blue text-5xl mb-6">
            <MdOutlineTrackChanges size={60} />
          </span>
          <h2 className="text-4xl text-black  font-extrabold mb-6">
            Our Mission
          </h2>
          <p
            className="text-black    text-[26px]
                      max-md:text-[15px]
                      leading-relaxed
                      font-normal"
          >
            Delivering accessible, world-class medical services through
            cutting-edge innovation, ethical practice, and a relentless focus on
            patient outcomes.
          </p>
        </div>
      </div>
    </section>
      // <section className=" w-full  mx-auto pb-20">
      //   <div className="grid grid-cols-1 lg:grid-cols-2 wrapper mx-auto">
      //     {visionMissionData.map((item: any) => {
      //       const Icon = item.icon;

      //       return (
      //         <div key={item.id} className={item.wrapperClass}>
      //           <span className={item.iconClass}>
      //             <Icon size={60} />
      //           </span>

      //           <h2 className={item.titleClass}>{item.title}</h2>

      //           <p className={item.descClass}>{item.description}</p>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </section>
  );
}
