import ArrowIcon from "@/components/common/ArrowIcon";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Outer spacing – screen gap */}
      <div className="px-4 py-4">
        {/* Same width as header */}
        <div className="w-full mx-auto">
          {/* Rounded hero container */}
          <div className="relative overflow-hidden rounded-4xl min-h-[calc(100vh-120px)] ">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/images/hero-banner.webp')] bg-cover bg-center" />

            {/* Overlay */}
            <div className="absolute inset-0" />

            {/* Content */}
            <div className="wrapper relative z-10 h-full max-w-360 mx-auto flex items-center">
              <div className="h-full flex pt-62 pb-16 max-md:pt-32 max-md:pb-12">
                <div className="text-white py-36 max-md:py-10 ">
                  {/* HEADING */}
                  <h1
                    className="
                    text-[48px] md:text-[70px]
                    max-md:text-[30px]
                    leading-22.5 max-md:leading-tight
                    font-normal
                  "
                  >
                    Trusted Manufacturing for <br />
                    <span className="capitalize">
                      FRANCHISE Pharma Partners
                    </span>
                  </h1>

                  {/* DESCRIPTION */}
                  <p
                    className="
                    mt-6 text-[26px]
                    max-md:text-[15px]
                    max-md:mt-4
                    leading-relaxed
                    font-normal
                  "
                  >
                    Offering end-to-end pharmaceutical manufacturing and
                    <br className="hidden max-md:block" />
                    <span className="hidden max-md:block">
                      Franchise solutions across India.
                    </span>
                    <br />
                    <span className="max-md:hidden">
                      Franchise solutions across India.
                    </span>
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-10 max-md:mt-6 flex flex-wrap gap-5 max-md:flex-col">
                    <button className="bg-white text-black px-7 py-3 rounded-full text-[15px] flex items-center gap-3 w-fit">
                      Send Enquiry
                      <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                        <ArrowIcon />
                      </span>
                    </button>

                    <button className="border border-white text-white px-7 py-3 rounded-full text-[15px] flex items-center gap-3 w-fit hover:bg-white hover:text-black transition">
                      Download Price list
                      <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                        <ArrowIcon />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
