import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const features = [
  { label: "25+ years experience", icon: "/images/icons/experience.svg" },
  { label: "Trust & Credibility", icon: "/images/icons/trust.svg" },
  { label: "Monopoly Rights", icon: "/images/icons/monopoly.svg" },
  { label: "Low Investments, Max Returns", icon: "/images/icons/returns.svg" },
  { label: "Team Support", icon: "/images/icons/support.svg" },
  {
    label: "25 diverse therapeutic segments",
    icon: "/images/icons/segments.svg",
  },
  { label: "Promotional Gift", icon: "/images/icons/gift.svg" },
  { label: "Online trainings", icon: "/images/icons/onlinetraining.svg" },
  { label: "Marketing Resources", icon: "/images/icons/marketing.svg" },
  {
    label: "WHO-GMP, Ayush, ISO and FSSAI standard",
    icon: "/images/icons/certified.svg",
  },

  { label: "Strong Brand Image & Marketing", icon: "/images/icons/brand.svg" },
  { label: "Stock Availability", icon: "/images/icons/stock.svg" },
  { label: "Online trainings", icon: "/images/icons/onlinetraining.svg" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20  border-black">
      <div className="wrapper mx-auto">
        {/* Top content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-16 ">
          <div className="lg:col-span-8 lg:mb-0 mb-8">
            <SectionHeader
              heading="Trusted Pharmaceutical Manufacturer & Supplier"
              description=" Vision Plus Healthcare are a well known Manufacturer, Supplier and
              Trader of Pharmaceutical Products. Being an ISO 9001:2008
              certified company, we adopt stringent quality control process,
              which ensure supreme quality of drugs. Our products meet all the
              quality norms of Pharmaceutical industry and thus satisfy the
              needs of our precious clients."
              descriptionCss="text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black lg:w-[90%]"
            />
          </div>

          <div className="lg:col-span-4 flex lg:justify-end items-center ">
            <button className="bg-[#E31E25] text-white px-8 py-3 rounded-[10px] text-[18px] hover:bg-red-700 transition">
              Get In Touch!
            </button>
          </div>
        </div>

        {/* Icons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 "
            >
              <Image
                src={item.icon}
                alt=""
                width={82}
                height={82}
                unoptimized
              />
              {/* <p className="text-[24px] text-[#464646] font-semiboldleading-snug"> */}
              <p className="text-[24px] leading-[1.5] font-semibold tracking-[2%] align-middle text-textGray px-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
