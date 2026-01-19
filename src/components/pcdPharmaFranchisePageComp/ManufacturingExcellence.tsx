import SectionHeader from "../common/SectionHeader";
import { MdBiotech } from "react-icons/md";
import { MdPrecisionManufacturing } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { MdEco } from "react-icons/md";
import { IconType } from "react-icons";
import Button from "../common/GlobalButton";

interface ManufacturingFeature {
  label: string;
  icon: IconType;
}

interface ManufacturingSectionData {
  heading: string;
  description: string;
  features: ManufacturingFeature[];
  button: any;
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ManufacturingExcellence() {
  const manufacturingSectionData: ManufacturingSectionData = {
    heading: "Manufacturing Excellence: WHO-GMP Certified",
    description:
      "Our state-of-the-art manufacturing facilities are equipped with the latest technology to ensure international quality standards. We maintain strict quality control at every stage of production.",
    features: [
      {
        label: "Modern Labs",
        icon: MdBiotech,
      },
      {
        label: "Advanced Machinery",
        icon: MdPrecisionManufacturing,
      },
      {
        label: "Quality Tested",
        icon: MdHealthAndSafety,
      },
      {
        label: "Eco Friendly",
        icon: MdEco,
      },
    ],
    button: {
      text: "View Facility Tour",
    },
    images: [
      {
        alt: "Production",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwpk2pzCLOtFNOI8OholmY-tAwcLsWjOz81i691pgRHipqXtRaUE5aetkVBHryLVOKp69KM3z1DrEmSBPdY14CYiPt3upbPWwO2PiV-zx3UYL5YXdNdnEGAwQm4T3HdZmHiLEtmHp7M1saegZFkHrKkbnt4roH9Qgs-haSc5eRHLZ3PjQLV3g6A7vU4g8Qciwt8rX6wgMA8MAOJCeDrAp9D9KDxT_2Kq4KV-XJ96pCrhMA6K_sP2YHsBnE4nJGGdz0CTnMqdABfbCX",
      },
      {
        alt: "Clean Room",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUVNrtWLXVC2KEFMYrhWP4spRtyldi5218fr8kd-Gt3NrowCia9D8btrRKW3zcxVlT1Y44dQU2af5PCxXqSH1EIAJ2ujbUZOVr3Kboop2DHa4KboBBX5_wsAeFzGtBz4zzvFo9SjIFdPrLYa9cuw-ZRz0WrWWl-fQg4js-IF1UXwXMka8qZLoC3pdVDMxctG8qPT9bXLmMPXeFB3_ORxGuM9cnQSnR4NoonX7jLmw6FSadAmY3nb7iKWQGeiBXBOf-Lwpl5BTDu-IY",
      },
      {
        alt: "Production",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwpk2pzCLOtFNOI8OholmY-tAwcLsWjOz81i691pgRHipqXtRaUE5aetkVBHryLVOKp69KM3z1DrEmSBPdY14CYiPt3upbPWwO2PiV-zx3UYL5YXdNdnEGAwQm4T3HdZmHiLEtmHp7M1saegZFkHrKkbnt4roH9Qgs-haSc5eRHLZ3PjQLV3g6A7vU4g8Qciwt8rX6wgMA8MAOJCeDrAp9D9KDxT_2Kq4KV-XJ96pCrhMA6K_sP2YHsBnE4nJGGdz0CTnMqdABfbCX",
      },
      {
        alt: "Clean Room",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUVNrtWLXVC2KEFMYrhWP4spRtyldi5218fr8kd-Gt3NrowCia9D8btrRKW3zcxVlT1Y44dQU2af5PCxXqSH1EIAJ2ujbUZOVr3Kboop2DHa4KboBBX5_wsAeFzGtBz4zzvFo9SjIFdPrLYa9cuw-ZRz0WrWWl-fQg4js-IF1UXwXMka8qZLoC3pdVDMxctG8qPT9bXLmMPXeFB3_ORxGuM9cnQSnR4NoonX7jLmw6FSadAmY3nb7iKWQGeiBXBOf-Lwpl5BTDu-IY",
      },
    ],
  };

  return (
    <>
      <section className="py-24 ">
        <div className="wrapper mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <SectionHeader
                heading={manufacturingSectionData?.heading}
                description={manufacturingSectionData?.description}
                descriptionCss="text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black lg:w-[90%]"
              />

              <div className="grid grid-cols-2 gap-6">
                {manufacturingSectionData.features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="flex items-center gap-3" key={index}>
                      <span className="material-symbols-outlined text-textPrimary ">
                        <Icon size={50} />
                      </span>
                      <span className="font-semibold text-xl ">
                        {item?.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className=" font-bold flex items-center gap-2 hover:gap-4 transition-all">
                <Button type="link" text=" View Facility Tour" />
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 ">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img
                    alt="Packaging"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg2h3r6CFiHetZXxSg_uyHqSrwuj-SR9Thv6jV_4y0SDLaIThbeWgSnLQJZipUiM1GHppdTm1Kh3bujIlUTwLHd-o_XgenHNRPxnh2WcLUJu0z3vpzaFwXiOaX2t_yyPQScBXthH7Fovet_76OEwjQRTYy97_K17P9KPW81Y3LWeu2_5I9X67ceDa6At3TkRI7xlbKnldcz9qx5tjRATNqsUF5j0d2bX2cVLbnBLHjrBCyjGdBXB1PFy35rjK4VezvB0RUl0fTwmpy"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                  <img
                    alt="Testing"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ugs5ipwkeuO45L4O4J8i7YfxaNQ0HRrMv1X32XsXGX1Mox2ThYd5ePaRciNbPPcnYoOowM0YVswYmXk5YWq9zsFvZHSM19BG9P_JFIxknAoGBTqJzRurYjLPeEoCzX9MiwKIllbEqN4B4m0Vo3N4Tzj5Wc8SDbZwajsi4b3MbllEqeEUKo4Os1FELun198D6YZ-4aIAAQic-3w94G8j0omoL7rAdWYhod0d8eiBUtB0M6yxy_l7bvZ78LzG0rAmiHVYIFWLiKUHB"
                  />
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                  <img
                    alt="Production"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwpk2pzCLOtFNOI8OholmY-tAwcLsWjOz81i691pgRHipqXtRaUE5aetkVBHryLVOKp69KM3z1DrEmSBPdY14CYiPt3upbPWwO2PiV-zx3UYL5YXdNdnEGAwQm4T3HdZmHiLEtmHp7M1saegZFkHrKkbnt4roH9Qgs-haSc5eRHLZ3PjQLV3g6A7vU4g8Qciwt8rX6wgMA8MAOJCeDrAp9D9KDxT_2Kq4KV-XJ96pCrhMA6K_sP2YHsBnE4nJGGdz0CTnMqdABfbCX"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img
                    alt="Clean Room"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUVNrtWLXVC2KEFMYrhWP4spRtyldi5218fr8kd-Gt3NrowCia9D8btrRKW3zcxVlT1Y44dQU2af5PCxXqSH1EIAJ2ujbUZOVr3Kboop2DHa4KboBBX5_wsAeFzGtBz4zzvFo9SjIFdPrLYa9cuw-ZRz0WrWWl-fQg4js-IF1UXwXMka8qZLoC3pdVDMxctG8qPT9bXLmMPXeFB3_ORxGuM9cnQSnR4NoonX7jLmw6FSadAmY3nb7iKWQGeiBXBOf-Lwpl5BTDu-IY"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
