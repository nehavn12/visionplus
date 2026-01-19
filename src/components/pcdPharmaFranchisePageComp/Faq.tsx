import SectionHeader from "../common/SectionHeader";
import { MdOutlineExpandMore } from "react-icons/md";

export default function Faq() {
  return (
    <>
      <section className="py-24  bg-white  w-full">
        <div className=" wrapper mx-auto w-full  flex justify-center">
          <div className="lg:w-[80%]">
            <div className="text-center mb-16">
              <div className="text-center mb-14 ">
                <SectionHeader
                  heading="FAQ’S"
                  headingCss="text-[40px] font-semibold leading-[1.5] tracking-[2%] align-middle text-black"
                  description="VisionPlus Healthcare PCD Pharma Franchise"
                  descriptionCss="font-medium text-2xl leading-[1.3750] tracking-[2%] text-textSecondary"
                />
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is VisionPlus Healthcare?",
                  answer:
                    "VisionPlus Healthcare is a leading pharmaceutical company providing high-quality healthcare solutions across India.",
                },
                {
                  question:
                    "Why choose VisionPlus Healthcare for a pharma franchise?",
                  answer:
                    "We offer monopoly rights, strong marketing support, quality products, and reliable supply.",
                },
                {
                  question:
                    "What documents are required to start a franchise with VisionPlus?",
                  answer:
                    "A Franchise allows individuals or businesses to promote and distribute VisionPlus Healthcare products in their designated territory with monopoly rights.",
                },
                {
                  question: "What is the minimum investment required?",
                  answer:
                    "Investment depends on product range and territory. Contact us for exact details.",
                },
                {
                  question: "What kind of monopoly rights are provided?",
                  answer:
                    "A Franchise allows individuals or businesses to promote and distribute VisionPlus Healthcare products in their designated territory with monopoly rights..",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white  rounded-2xl 0  overflow-hidden border border-[#e8e8e8]"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer focus:outline-none list-none">
                    <h4 className="text-xl font-medium text-textFaq tracking-[2%] leading-[1.5000]">
                      {faq?.question}
                    </h4>
                    <span className="material-symbols-outlined  transition-transform duration-300 group-open:rotate-180">
                      <MdOutlineExpandMore size={32} />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-textGray text-xl font-normal leading-[1.5000]">
                    {faq?.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
