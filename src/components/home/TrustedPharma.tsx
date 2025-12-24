import Image from "next/image";

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
    <section className="bg-white py-20">
      <div className="max-w-360 mx-auto px-6">
        {/* Top content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-9">
            <h2 className="text-[40px] font-semibold mb-4">
              Trusted Pharmaceutical Manufacturer & Supplier
            </h2>

            <p className="text-[18px] text-black">
              Vision Plus Healthcare are a well known Manufacturer, Supplier and
              Trader of Pharmaceutical Products. Being an ISO 9001:2008
              certified company, we adopt stringent quality control process,
              which ensure supreme quality of drugs. Our products meet all the
              quality norms of Pharmaceutical industry and thus satisfy the
              needs of our precious clients.
            </p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end items-center">
            <button className="bg-[#E31E25] text-white px-8 py-3 rounded-[10px] text-[18px] hover:bg-red-700 transition">
              Get In Touch!
            </button>
          </div>
        </div>

        {/* Icons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <Image src={item.icon} alt="" width={80} height={80} />
              <p className="text-[24px] text-[#464646] font-semiboldleading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
