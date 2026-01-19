import SectionHeader from "../common/SectionHeader";
import { MdOutlineExpandMore } from "react-icons/md";
import { GoCheckCircleFill } from "react-icons/go";
import Image from "next/image";

export default function Benefits() {
  const data = {
    header: {
      heading: " Unmatched Benefits for the Indian Market",
      description:
        "As a premier PCD provider in India, we understand the local dynamics and provide tools specifically designed for your regional success",
    },

    benefits: [
      {
        title: "Exclusive Monopoly Rights",
        desc: "Zero competition in your allocated district or region.",
      },
      {
        title: "Full Marketing Support",
        desc: "Visual aids, catch covers, and MR bags provided.",
      },
      {
        title: "Varied Product Range",
        desc: "Access 500+ products across all therapeutic segments.",
      },
      {
        title: "Timely Delivery",
        desc: "Robust logistics network ensuring stock reaches you within 48-72 hours.",
      },
    ],

    benefitIcon: {
      src: "/images/check-arrow.svg",
      alt: "",
    },

    stats: [
      { value: "500+", label: "SKUs Available" },
      { value: "20+", label: "States Present" },
      { value: "100%", label: "Quality Guarantee" },
      { value: "24/7", label: "Partner Support" },
    ],
  };

  return (
    <>
      <section className="py-24  bg-white ">
        <div className="wrapper mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                heading={" Unmatched Benefits for the Indian Market"}
                description="As a premier PCD provider in India, we understand the local
                dynamics and provide tools specifically designed for your
                regional success"
                descriptionCss="text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black lg:w-[90%] mb-8"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Exclusive Monopoly Rights",
                    desc: "Zero competition in your allocated district or region.",
                  },
                  {
                    title: "Full Marketing Support",
                    desc: "Visual aids, LBLs, catch covers, and MR bags provided.",
                  },
                  {
                    title: "Varied Product Range",
                    desc: "Access 500+ products across all therapeutic segments.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Robust logistics network ensuring stock reaches you within 48-72 hours.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 ">
                    <div className=" w-[15%] relative  h-[3rem] w-[3rem] rounded-t-[0.625rem]  rounded-bl-[0.625rem] flex items-center justify-center bg-white">
                      <Image
                        src="/images/check-arrow.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="  w-[85%]">
                      <h5 className="text-[1.25rem]  align-middle leading-[1.2031] font-semibold text-textPrimary mb-2">
                        {item.title}
                      </h5>
                      <p className="text-base leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-3xl p-10 grid grid-cols-2 gap-6 border border-[#e8e8e8]">
              {[
                { value: "500+", label: "SKUs Available" },
                { value: "20+", label: "States Present" },
                { value: "100%", label: "Quality Guarantee" },
                { value: "24/7", label: "Partner Support" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white  p-6 rounded-2xl text-center"
                >
                  {/* <span className="text-3xl font-bold  block mb-1"> */}
                  <span className="text-3xl  align-middle leading-[1.2031] block font-bold text-textPrimary mb-2">
                    {stat.value}
                  </span>
                  <span className="text-lg leading-[1.5] font-semibold tracking-[2%] align-middle text-textSecondary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
