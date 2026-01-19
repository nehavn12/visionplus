import React from "react";
import Faq from "@/components/pcdPharmaFranchisePageComp/Faq";
import ManufacturingExcellence from "@/components/pcdPharmaFranchisePageComp/ManufacturingExcellence";
import StartYourJourney from "@/components/pcdPharmaFranchisePageComp/StartYourJourney";
import Benefits from "@/components/pcdPharmaFranchisePageComp/Benefits";
import HowItWork from "@/components/pcdPharmaFranchisePageComp/HowItWork";
import PharmaFranchiseHero from "@/components/pcdPharmaFranchisePageComp/PharmaFranchiseHero";
import WhyIsPCDPharma from "@/components/pcdPharmaFranchisePageComp/WhyIsPCDPharma";

import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/common/GlobalButton";

export default function PharmaFranchisePage() {
  return (
    <>
      {/* Sticky Enquiry Button */}
      {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          className="bg-[#198ed7] text-white py-6 px-3 rounded-l-xl font-bold flex items-center gap-2 hover:bg-[#198ed7]/90 transition-colors shadow-lg"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="material-symbols-outlined rotate-90">mail</span>
          ENQUIRE NOW
        </button>
      </div> */}

      {/* Header */}

      <main>
        <PharmaFranchiseHero />

        {/* Why Section */}
        <WhyIsPCDPharma />

        {/* How it Works */}
        <HowItWork />

        {/* Benefits */}
        <Benefits />

        {/* Monopoly Rights */}
        {/* <section className="py-24 px-6 ">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold mb-4 dark:text-white">
                Monopoly Rights: Claim Your Territory
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Select your preferred region to check availability. We provide
                exclusive marketing and distribution rights to our franchise
                partners.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-100 dark:border-gray-800">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <div
                    className="aspect-video bg-cover bg-center rounded-2xl shadow-inner border border-gray-200 dark:border-gray-700 flex items-center justify-center bg-white"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnGYhZNAzB7sBBjwvDamPIhgISQ2aIzYqR0gvAn9neUafZC5e13Yq_0qw35cE-LqvQGJ86tMaksDfjPp1fZ7bX_AaN7qfQHlEtAbTJfCeZLZqtp-GlhbvsHOIvSmMca0VjWFrLKQE3bQR9GAlVvCPFrDj9mK_5l21ZWlEUk3JCokezIhdXUbakQ4vl0pDCATh1eIhqjKbaRkLqQJvnSfBOMNVCc-_RNPIWlW7KbfQqzx9JEgLJH8h2x4gzrfLnI5BEACypeXDeQDIj')",
                    }}
                  >
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur px-6 py-4 rounded-xl shadow-xl border border-[#198ed7]/20 flex flex-col items-center">
                      <span className="material-symbols-outlined text-[#198ed7] text-4xl mb-2">
                        location_on
                      </span>
                      <span className="text-sm font-bold dark:text-white uppercase tracking-wider">
                        Interactive Distribution Map
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        120+ Territories Available
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold dark:text-white">
                    Available Zones
                  </h3>

                  <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-green-500 flex justify-between items-center">
                      <span className="font-semibold dark:text-white">
                        North India
                      </span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">
                        AVAILABLE
                      </span>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-[#198ed7] flex justify-between items-center">
                      <span className="font-semibold dark:text-white">
                        South India
                      </span>
                      <span className="text-xs bg-[#198ed7]/10 text-[#198ed7] px-2 py-1 rounded font-bold">
                        LIMITED
                      </span>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-gray-300 flex justify-between items-center">
                      <span className="font-semibold dark:text-white">
                        East India
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-bold">
                        OCCUPIED
                      </span>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-green-500 flex justify-between items-center">
                      <span className="font-semibold dark:text-white">
                        West India
                      </span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">
                        AVAILABLE
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-[#198ed7]/10 text-[#198ed7] font-bold py-4 rounded-xl border-2 border-[#198ed7]/20 hover:bg-[#198ed7] hover:text-white transition-all">
                    Check Full List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/*  How to Start Your Journey */}
        <StartYourJourney />

        {/*  Manufacturing Excellence */}
        <ManufacturingExcellence />

        {/* FAQ */}
        <Faq />

        {/* CTA */}
      </main>
    </>
  );
}
