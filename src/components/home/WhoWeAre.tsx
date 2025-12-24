const stats = [
  { value: "15+", label: "Years of Expertise" },
  { value: "150+", label: "Franchise" },
  { value: "400+", label: "Product Basket" },
  { value: "10+", label: "Awards" },
];

export default function WhoWeAre() {
  return (
    <section className="pt-20 pb-8 max-md:pt-4 max-md:pb-6">
      <div className="max-w-360 mx-auto px-6 max-md:px-4">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D4D4D4] rounded-full mb-8 max-md:mb-6">
          <span className="w-2 h-2 bg-[#E31E25] rounded-full"></span>
          <span className="text-[14px] max-md:text-[12px] tracking-widest uppercase text-[#080E28]">
            Who We Are
          </span>
        </div>

        {/* Paragraph */}
        <p
          className="
            text-[#121B60]
            text-[26px]
            md:text-[50px]
            max-md:text-[18px]
            leading-[1.3]
            max-md:leading-relaxed
            font-semibold
          "
        >
          VisionPlus Healthcare is a leading pharmaceutical company with over
          15+ years of experience in pharma marketing. We specialize in
          providing high-quality, innovative, and affordable healthcare
          solutions, ensuring better patient outcomes.
        </p>

        {/* Stats */}
        <div className="mt-14 max-md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-md:gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-8 max-md:p-5"
            >
              <h3 className="text-[64px] max-md:text-[40px] font-semibold text-[#121B60]">
                {item.value}
              </h3>
              <p className="mt-2 text-[30px] max-md:text-[16px] text-black">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
