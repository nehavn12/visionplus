import Image from "next/image";
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
    <section className="py-20">
      <div className="max-w-360 mx-auto px-6">
        {/* HEADING */}
        <div className="mb-12">
          <h2 className="text-[40px] font-semibold mb-2">Calculators</h2>
          <p className="text-[18px] text-black">
            You can easily use the profit margin using below calculator
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {calculators.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm"
            >
              <div className="flex-1">
                <h3 className="text-[26px] font-semibold mb-3">{item.title}</h3>

                <p className="text-[16px] text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <button className="bg-[#E31E25] text-white px-6 py-3 rounded-lg text-[15px] hover:bg-red-700 transition">
                  Calculator
                </button>
              </div>

              <div className="shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={321}
                  height={272}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
