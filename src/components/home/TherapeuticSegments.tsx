import Image from "next/image";

const segments = [
  "General Physicians (GP)",
  "Consultant Physicians (CP)",
  "Gynecology (Gyn)",
  "Pediatrics (Pedia)",
  "Orthopedics (Ortho)",
  "Neurology (Neuro)",
  "Dermatology (Derma)",
  "ENT (Ear, Nose & Throat)",
];

export default function TherapeuticSegments() {
  return (
    <section className="py-2 pb-20 max-md:pb-12">
      <div className="max-w-360 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-14 max-md:gap-8 items-start">
          {/* LEFT CONTENT – DESKTOP SAME */}
          <div className="lg:col-span-5 ">
            <p
              className="
                text-xl
                max-md:text-base
                tracking-[2%]
                align-middle
                leading-[1.4500]
                text-black
                mb-5
                max-md:mb-4
                font-bold
              "
            >
              With a diverse portfolio of 400+ products, we cater to multiple
              therapeutic segments, including:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-md:gap-4">
              {segments.map((item, index) => (
                <div
                  key={index}
                  className=" flex items-center h-full gap-1"
                  // className="
                  //   flex items-center gap-3
                  //   bg-white
                  //   rounded-xl
                  //   shadow-sm
                  //   px-4 py-2
                  //   max-md:px-3 max-md:py-2.5
                  // "
                >
                  <div className="  relative h-[3.375rem] w-[3.625rem] rounded-t-[0.625rem]  rounded-bl-[0.625rem] flex items-center justify-center bg-white">
                    <Image
                      src="/images/check-arrow.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="max-md:w-6 max-md:h-6"
                    />
                  </div>
                  <div className=" h-full flex items-center justify-center w-[18.75rem] rounded-t-[0.625rem]  rounded-br-[0.625rem] bg-white">
                    <span
                      className="
                      text-[18px]
                      max-md:text-[14px]
                      text-black
                      font-bold
                    "
                    >
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE – DESKTOP SAME */}
          <div className="lg:col-span-4 flex items-end h-full max-md:mt-6">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/segments.webp"
                alt="Manufacturing Facility"
                width={608}
                height={349}
                className="object-cover w-full h-full max-md:rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
