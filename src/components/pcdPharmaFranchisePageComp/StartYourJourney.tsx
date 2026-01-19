import SectionHeader from "../common/SectionHeader";
import Button from "../common/GlobalButton";

import { MdContactPage } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";

export default function StartYourJourney() {
  const data = {
    header: {
      heading: " How to Start Your Journey",
      description:
        "A streamlined 4-step process to becoming a Vision Plus distributor.",
    },
    cards: [
      {
        number: "01",
        icon: MdContactPage,
        title: "Submit Inquiry",
        description:
          "Fill out our franchise application form with your details and target territory.",
      },

      {
        number: "02",
        icon: MdVerifiedUser,
        title: "Verification",
        description:
          "Our team reviews your credentials and checks territory exclusivity status.",
      },

      {
        number: "03",
        icon: MdInventory,
        title: "Select Range",
        description:
          "Choose from our wide range of therapeutic segments and product categories.",
      },

      {
        number: "04",
        icon: MdRocketLaunch,
        title: "Launch",
        description:
          "Receive your stock and marketing material to start operations immediately.",
      },
    ],
  };
  return (
    <>
      <section className="py-24  bg-white ">
        <div className="wrapper mx-auto">
          <div className="text-center mb-16">
            <SectionHeader
              heading=" How to Start Your Journey"
              headingCss="text-[40px] font-semibold leading-[1.5] tracking-[2%] align-middle text-black"
              description="A streamlined 4-step process to becoming a Vision Plus distributor."
              descriptionCss="text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black "
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.cards?.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="group relative bg-primary p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all  "
                  key={index}
                >
                  <div className="text-[5rem] font-black text-textPrimary/10 absolute -top-6 right-6 group-hover:text-textPrimary/20 transition-colors">
                    {item?.number}
                  </div>
                  <div className="w-14 h-14 group-hover:bg-textPrimary/10 rounded-lg flex items-center justify-center mb-4  text-textPrimary group-hover:text-textSecondary transition-colors">
                    <Icon size={40} />
                  </div>
                  <h4 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2">
                    {item?.title}
                  </h4>
                  <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
                    {item?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
