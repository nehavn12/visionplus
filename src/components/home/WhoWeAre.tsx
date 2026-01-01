const stats = [
  { value: "15+", label: "Years of Expertise" },
  { value: "150+", label: "Franchise" },
  { value: "400+", label: "Product Basket" },
  { value: "10+", label: "Awards" },
];

export default function WhoWeAre() {
  return (
    <section className="pt-20 pb-8 max-md:pt-4 max-md:pb-6">
      <div className="max-w-360 mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 h-[2.063rem] border border-[#D4D4D4] rounded-full mb-8 max-md:mb-6">
          <span className="w-3 h-3 bg-secondary rounded-full"></span>
          <span className="text-dt max-md:text-[12px] leading-[1.5000] font-normal align-middle uppercase text-[#080E28]">
            Who We Are
          </span>
        </div>

        {/* Paragraph */}
        <p
          className="
            text-textPrimary
            text-[26px]
            md:text-[3.125rem]
            max-md:text-[18px]
            leading-[1.3400]
            max-md:leading-relaxed
            font-semibold
            align-middle
          "
        >
          VisionPlus Healthcare is a leading pharmaceutical company with over
          15+ years of experience in pharma marketing. We specialize in
          providing high-quality, innovative, and affordable healthcare
          solutions, ensuring better patient outcomes.
        </p>

        {/* Stats */}
        <div className="mt-14 max-md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-md:gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-8 max-md:p-5"
            >
              <h3 className="text-[4rem] max-md:text-[2.5rem] align-middle leading-[1.2031] font-semibold text-textPrimary">
                {item.value}
              </h3>
              <p className="mt-2 ml-4 text-[1.875rem] max-md:text-[16px] text-black tracking-[5%] align-middle font-normal">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
