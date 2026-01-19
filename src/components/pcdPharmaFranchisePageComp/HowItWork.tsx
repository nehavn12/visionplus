import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { MdOutlineCorporateFare } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { IoHappySharp } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function HowItWork() {
  const data = {
    heading: " How Does it Work?",
    description: " A transparent look at our collaborative ecosystem..",

    arrow: {
      icon: IoArrowForwardOutline,
    },

    steps: [
      {
        title: "Parent Company",
        description:
          "Vision Plus handles high-quality manufacturing, R&D, and bulk supply.",
        icon: MdOutlineCorporateFare,
        showArrow: true,
      },

      {
        title: "Franchise Partner",
        description:
          "You manage distribution, stock-keeping, and local marketing in your territory.",
        icon: FaHandshake,
        showArrow: true,
      },

      {
        title: "Healthcare Professional",
        description:
          "Doctors and clinics prescribe our certified products based on quality trust.",
        icon: FaBriefcaseMedical,
        showArrow: true,
      },

      {
        title: "End Patient",
        description:
          "Patients receive affordable, effective, and reliable medical treatment.",
        wrapperClassName:
          "relative z-10 text-center flex flex-col items-center",
        iconBoxClassName:
          "w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-green-500",
        iconWrapperClassName:
          "material-symbols-outlined text-3xl text-green-500",
        showArrow: false,
        icon: IoHappySharp,
        iconSize: 60,
        titleClassName: "font-bold mb-2 dark:text-white",
        descClassName: "text-xs text-gray-500 px-4",
      },
    ],
  };
  return (
    <>
      <section className="py-24">
        <div className="wrapper mx-auto">
          <div className="text-center mb-16">
            <SectionHeader
              heading={data?.heading || "How Does it Work?"}
              headingCss="text-[40px] font-semibold leading-[1.5] tracking-[2%] align-middle text-black"
              description={
                data?.description ||
                "A transparent look at our collaborative ecosystem.."
              }
              descriptionCss="text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black "
            />
          </div>

          <div className="relative grid md:grid-cols-4 gap-8">
            {data.steps.map((step, index) => {
              const Icon = step.icon;
              const ArrowIcon = data.arrow.icon;

              return (
                <div
                  className="relative z-10 text-center flex flex-col items-center"
                  key={index}
                >
                  <div className="w-40 h-40 bg-white  rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-textPrimary">
                    <span className="material-symbols-outlined text-3xl text-textPrimary">
                      <Icon size={60} />
                    </span>
                  </div>
                  <h4 className="text-[1.25rem]  align-middle leading-[1.2031] font-semibold text-black mb-2">
                    {step?.title}
                  </h4>
                  <p className="text-base leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
                    {step?.description}
                  </p>
                  {step.showArrow && (
                    <div className="hidden md:block absolute top-10 -right-4 translate-x-1/2 text-textPrimary/50 opacity-30">
                      <span className="material-symbols-outlined text-4xl">
                        <ArrowIcon size={60} />
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
            {/* <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-40 h-40 bg-white  rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-textPrimary">
                <span className="material-symbols-outlined text-3xl text-textPrimary">
                  <MdOutlineCorporateFare size={60} />
                </span>
              </div>
              <h4 className="text-[1.25rem]  align-middle leading-[1.2031] font-semibold text-textPrimary mb-2">
                Parent Company
              </h4>
              <p className="text-base leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
                Vision Plus handles high-quality manufacturing, R&amp;D, and
                bulk supply.
              </p>
              <div className="hidden md:block absolute top-10 -right-4 translate-x-1/2 text-[#198ed7] opacity-30">
                <span className="material-symbols-outlined text-4xl">
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-[#198ed7]">
                <span className="material-symbols-outlined text-3xl text-[#198ed7]">
                  <FaHandshake size={60} />
                </span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">
                Franchise Partner
              </h4>
              <p className="text-xs text-gray-500 px-4">
                You manage distribution, stock-keeping, and local marketing in
                your territory.
              </p>
              <div className="hidden md:block absolute top-10 -right-4 translate-x-1/2 text-[#198ed7] opacity-30">
                <span className="material-symbols-outlined text-4xl">
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-[#198ed7]">
                <span className="material-symbols-outlined text-3xl text-[#198ed7]">
                  <FaBriefcaseMedical size={60} />
                </span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">
                Healthcare Professional
              </h4>
              <p className="text-xs text-gray-500 px-4">
                Doctors and clinics prescribe our certified products based on
                quality trust.
              </p>
              <div className="hidden md:block absolute top-10 -right-4 translate-x-1/2 text-[#198ed7] opacity-30">
                <span className="material-symbols-outlined text-4xl">
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-green-500">
                <span className="material-symbols-outlined text-3xl text-green-500">
                  <IoHappySharp size={60} />
                </span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">End Patient</h4>
              <p className="text-xs text-gray-500 px-4">
                Patients receive affordable, effective, and reliable medical
                treatment.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
