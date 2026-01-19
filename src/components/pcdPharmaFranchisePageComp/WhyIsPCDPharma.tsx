import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import Button from "../common/GlobalButton";
import { MdOutlineCorporateFare } from "react-icons/md";
export default function WhyIsPCDPharma() {
  return (
    <>
      <section className="py-24 px-6 bg-white ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl font-extrabold mb-4 dark:text-white">
              Why Is PCD Pharma Franchise a Great Idea?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Discover why thousands of entrepreneurs are choosing the PCD model
              for sustainable business growth.
            </p> */}
            <SectionHeader
              heading={"Why Is PCD Pharma Franchise a Great Idea?"}
              headingCss="text-[40px] font-semibold leading-[1.5] tracking-[2%] align-middle text-black"
              description=" Discover why thousands of entrepreneurs are choosing the PCD model
              for sustainable business growth."
              descriptionCss="text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black "
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-primary p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all  ">
              <div className="w-14 h-14 group-hover:bg-textPrimary/10 rounded-lg flex items-center justify-center mb-4  text-textPrimary group-hover:text-textSecondary transition-colors">
                <MdOutlineCorporateFare size={40} />
              </div>
              <h4 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2">
                Low Investment, Low Risk
              </h4>
              <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
                Start your own business with minimal capital investment. The PCD
                model reduces financial risks while offering high returns on
                investment.
              </p>
            </div>
            {/* 
            <div className="p-8 rounded-3xl bg-[#F5F8FA] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group hover:border-[#198ed7]/50 transition-all">
              <div className="w-14 h-14 bg-[#198ed7]/10 rounded-2xl flex items-center justify-center mb-6 text-[#198ed7]">
                <span className="material-symbols-outlined text-3xl">
                  query_stats
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                Rapid Industry Growth
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                The Indian pharmaceutical market is expanding at an
                unprecedented rate, providing a fertile ground for new franchise
                partners to thrive.
              </p>
            </div> */}
            <div className="group relative bg-primary p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all  ">
              <div className="w-14 h-14 group-hover:bg-textPrimary/10 rounded-lg flex items-center justify-center mb-4  text-textPrimary group-hover:text-textSecondary transition-colors">
                <MdOutlineCorporateFare size={40} />
              </div>
              <h4 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2">
                Rapid Industry Growth
              </h4>
              <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
                The Indian pharmaceutical market is expanding at an
                unprecedented rate, providing a fertile ground for new franchise
                partners to thrive.
              </p>
            </div>
            {/* 
            <div className="p-8 rounded-3xl bg-[#F5F8FA] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group hover:border-[#198ed7]/50 transition-all">
              <div className="w-14 h-14 bg-[#198ed7]/10 rounded-2xl flex items-center justify-center mb-6 text-[#198ed7]">
                <span className="material-symbols-outlined text-3xl">
                  workspace_premium
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                Established Brand Name
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Leverage Vision Plus Healthcare's reputation and WHO-GMP
                certifications to gain instant trust from healthcare
                professionals.
              </p>
            </div> */}
            <div className="group relative bg-primary p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all  ">
              <div className="w-14 h-14 group-hover:bg-textPrimary/10 rounded-lg flex items-center justify-center mb-4  text-textPrimary group-hover:text-textSecondary transition-colors">
                <MdOutlineCorporateFare size={40} />
              </div>
              <h4 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2">
                Established Brand Name
              </h4>
              <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
                Leverage Vision Plus Healthcare's reputation and WHO-GMP
                certifications to gain instant trust from healthcare
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
