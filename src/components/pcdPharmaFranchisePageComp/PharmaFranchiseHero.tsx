import { MdVerified } from "react-icons/md";
import Button from "../common/GlobalButton";
export default function PharmaFranchiseHero() {
  return (
    <>
      <section className="relative  pb-20 py-56 overflow-hidden">
        <div className="wrapper px-4 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 bg-white/50 text-textPrimary text-sm font-bold tracking-widest uppercase rounded-full mb-6">
              PCD Franchise Opportunity
            </span>

            <h1 className=" text-[48px] md:text-[60px] max-md:text-[30px] leading-22.5 max-md:leading-tight font-semibold ">
              Partner with Excellence: Leading Pharma{" "}
              <span className="text-secondary">Franchise</span>
            </h1>

            <p className="mt-4 text-[24px] max-md:text-[15px] max-md:mt-4 leading-relaxed font-normal ">
              Join a network of WHO-GMP certified pharmaceutical leaders. Secure
              monopoly rights in your territory today with high-quality medicine
              ranges.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className=" font-bold flex items-center gap-2 hover:gap-4 transition-all">
                <Button
                  type="link"
                  text=" Apply Now"
                  className="px-8 py-4 rounded-[0.625rem] bg-secondary text-white align-middle leading-[1.4063]  text-lg font-bold  hover:bg-red-700 transition"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-square rounded-3xl bg-cover bg-center shadow-2xl ring-8 ring-white  "
              style={{
                backgroundImage: "url('images/pcd/Franchise Opportunity.jpg')",
              }}
            ></div>

            <div className=" lg:block hidden absolute -top-8 -left-8 bg-textSecondary p-4 rounded-2xl shadow-xl ">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <span className="material-symbols-outlined text-3xl font-bold">
                    <MdVerified />
                  </span>
                </div>
                <div>
                  <p className="text-base font-bold dark:text-white">
                    WHO-GMP Certified
                  </p>
                  <p className="text-sm text-white">
                    Industry Quality Standard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#198ed7]/5 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}
