import SectionHeader from "../common/SectionHeader";
import { MdOutlineGavel } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { GiLightBulb } from "react-icons/gi";

export default function CoreValuesSection() {
  const coreValuesData = [
    {
      id: 1,
      title: "Integrity",
      description:
        "Transparency in every consultation and ethical practice in every procedure.",
      icon: MdOutlineGavel,
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "A commitment to clinical brilliance and continuous improvement of service.",
      icon: MdWorkspacePremium,
    },
    {
      id: 3,
      title: "Compassion",
      description:
        "Deep empathy for our patients, treating every individual with dignity and care.",
      icon: MdFavorite,
    },
    {
      id: 4,
      title: "Innovation",
      description:
        "Leading the way with modern medical discoveries and advanced treatments.",
      icon: GiLightBulb,
    },
  ];
  return (
    <section className="py-24 bg-white w-full">
      <div className="wrapper mx-auto ">
        <div className="text-center mb-16">
          <SectionHeader heading="Our Core Values" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValuesData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-primary rounded-xl  p-8 max-md:p-5"
              >
                <div className="w-14 h-14 bg-primary/5 dark:bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary text-textPrimary group-hover:text-textSecondary transition-colors">
                  <Icon size={40} />
                </div>

                <h3 className="text-[1.5rem] max-md:text-[1.25rem] align-middle leading-[1.2031] font-bold text-textPrimary mb-2">
                  {item.title}
                </h3>

                <p className="text-lg leading-[1.5] font-normal tracking-[2%] align-middle text-textSecondary">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
