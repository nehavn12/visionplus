import Image from "next/image";
import Button from "../common/GlobalButton";
import SectionHeader from "../common/SectionHeader";
const calculator = {
  heading: "What Customer Say About Us",
  subHeading:
    "Our customers value our consistent product quality, timely delivery, transparent dealings, and reliable support, making us a trusted pharmaceutical partner nationwide.",
  calculators: [
    {
      title: "PTR & PTS Calculator",
      description:
        "Our PTR & PTS Calculator does all this math for you. Just input the MRP, GST, your desired margins, you get the right prices.",
      image: "/images/ptr.webp",
      buttonName: "Calculator",
      buttonLink: "#",
    },
    {
      title: "Profit Margin Calculator",
      description:
        "Our Profit Margin Calculator does all this math for you. Just input the right calculated values, and you will get the right prices.",
      image: "/images/ptr.webp",
      buttonName: "Calculator",
      buttonLink: "#",
    },
  ],
};
const calculators = [
  {
    title: "PTR & PTS Calculator",
    description:
      "Our PTR & PTS Calculator does all this math for you. Just input the MRP, GST, your desired margins, you get the right prices.",
    image: "/images/ptr.webp",
  },
  {
    title: "Profit Margin Calculator",
    description:
      "Our Profit Margin Calculator does all this math for you. Just input the right calculated values, and you will get the right prices.",
    image: "/images/ptr.webp",
  },
];

export default function Calculators() {
  return (
    <section className="pt-16 w-ful pb-20">
      <div className="wrapper mx-auto ">
        {/* HEADING */}
        <div className="mb-6">
          <SectionHeader
            heading="Calculator"
            headingCss="text-[40px] font-semibold mb-2 leading-[1.5] tracking-[2%] align-middle text-black"
            description="You can easily use the profit margin using below calculator"
            descriptionCss="text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black max-w-210 "
          />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {calculators.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[1.25rem] p-8 flex flex-col sm:flex-row   shadow-sm h-full"
            >
              <div className="flex flex-col justify-between mt-4 ">
                <div>
                  <h3 className="text-[26px] font-semibold mb-3 tracking-[2%] align-bottom text-black">
                    {item.title}
                  </h3>

                  <p className="text-base text-black mb-6 tracking-[2%] w-[90%] align-middle font-medium ">
                    {item.description}
                  </p>
                </div>

                <Button
                  type="link"
                  text="Calculator"
                  href="#"
                  className="py-4 px-12 w-fit font-bold text-lg leading-[1.2778] align-middle rounded-[0.625rem] bg-secondary text-white  hover:bg-red-700 transition"
                />
              </div>

              <div className="shrink-0 relative overflow-hidden h-[17.048rem] w-[20.063rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  unoptimized
                  // width={321}
                  // height={272}
                  fill
                  className=" object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
