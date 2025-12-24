import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* WORLD MAP BACKGROUND */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <Image src="/images/world-map.svg" alt="" width={900} height={500} />
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-6">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-9">
            <h2 className="text-[40px] font-semibold mb-4">Why Choose Us ?</h2>

            <p className="text-[18px] text-black leading-relaxed">
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

        {/* DIAGRAM IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/images/why-choose-us-diagram.webp"
            alt="Why Choose Vision Plus Healthcare"
            width={1100}
            height={420}
            className="w-full max-w-275 h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
