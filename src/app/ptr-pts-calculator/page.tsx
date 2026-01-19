import React from "react";

export default function PTRPTSCalculatorPage() {
  return (
    <div className=" transition-colors duration-300">
      {/* Header */}
      {/* <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#101322]/80 backdrop-blur-md border-b border-[#f0f1f4] dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#4259f0] p-1.5 rounded-lg">
              <svg
                className="size-6 text-white"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              Vision Plus <span className="text-[#4259f0]">Healthcare</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-semibold hover:text-[#4259f0] transition-colors"
              href="#"
            >
              Products
            </a>
            <a
              className="text-sm font-semibold hover:text-[#4259f0] transition-colors"
              href="#"
            >
              Calculators
            </a>
            <a
              className="text-sm font-semibold hover:text-[#4259f0] transition-colors"
              href="#"
            >
              Partner Portal
            </a>

            <button className="bg-[#4259f0] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-[#4259f0]/20">
              Log In
            </button>
          </nav>
        </div>
      </header> */}

      {/* Main */}
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-[#4259f0] bg-[#4259f0]/10 rounded-full">
            Pricing Transparency Initiative
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            PTR &amp; PTS Calculator
          </h1>

          <p className="text-[#616789] dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A precise tool for pharmaceutical distributors and retailers to
            calculate Price to Retailer and Price to Stockist with integrated
            tax modules.
          </p>
        </div>

        {/* Calculator Card */}
        <div
          className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-[#f0f1f4] dark:border-gray-800 flex flex-col lg:flex-row"
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.04), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Left Panel */}
          <div className="flex-1 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-[#4259f0]">
                edit_note
              </span>
              <h2 className="text-xl font-bold">Calculation Parameters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MRP */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111218] dark:text-gray-300">
                  Maximum Retail Price (MRP)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                    ₹
                  </span>
                  <input
                    className="w-full pl-8 pr-4 py-3.5 bg-[#f6f6f8] dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-[#4259f0]/50 text-lg font-semibold"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </div>

              {/* GST */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111218] dark:text-gray-300">
                  GST Rate (%)
                </label>
                <select className="w-full px-4 py-3.5 bg-[#f6f6f8] dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-[#4259f0]/50 text-lg font-semibold appearance-none">
                  <option value="12">12% Standard</option>
                  <option value="5">5% Essential</option>
                  <option value="18">18% Luxury</option>
                  <option value="0">0% Exempt</option>
                </select>
              </div>

              {/* Retailer Margin */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111218] dark:text-gray-300">
                  Retailer Margin (%)
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3.5 bg-[#f6f6f8] dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-[#4259f0]/50 text-lg font-semibold"
                    placeholder="20"
                    type="number"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    %
                  </span>
                </div>
              </div>

              {/* Stockist Margin */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111218] dark:text-gray-300">
                  Stockist Margin (%)
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3.5 bg-[#f6f6f8] dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-[#4259f0]/50 text-lg font-semibold"
                    placeholder="10"
                    type="number"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    %
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#4259f0] mt-0.5">
                info
              </span>
              <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                Values are calculated based on the standard pharmaceutical trade
                discount structure currently active in the market.
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div
            className="lg:w-[400px] dark:bg-gray-800 p-8 md:p-10 border-l border-[#f0f1f4] dark:border-gray-800 flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, #f8faff 0%, #f0f3ff 100%)",
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-[#4259f0]">
                  analytics
                </span>
                <h2 className="text-xl font-bold">Live Breakdown</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Price to Retailer (PTR)
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-[#4259f0]">
                      ₹357.14
                    </span>
                    <span className="text-xs font-bold text-[#4259f0]/60 bg-[#4259f0]/10 px-2 py-0.5 rounded uppercase">
                      Final
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Price to Stockist (PTS)
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-[#4259f0]">
                      ₹321.43
                    </span>
                    <span className="text-xs font-bold text-[#4259f0]/60 bg-[#4259f0]/10 px-2 py-0.5 rounded uppercase">
                      Final
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Est. Trade Margin
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-[#10B981]">
                      ₹71.42
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded uppercase">
                      +22%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-12 py-4 bg-[#4259f0] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#4259f0]/30 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">download</span>
              Save Calculation
            </button>
          </div>
        </div>

        {/* Understanding Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-[#4259f0] p-2 bg-[#4259f0]/10 rounded-lg">
              calculate
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Understanding the Calculation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PTR */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#4259f0] rounded-full"></span>
                PTR Calculation
              </h3>

              <div
                className="p-6 rounded-xl mb-6 flex items-center justify-center"
                style={{
                  background: "rgba(66, 89, 240, 0.03)",
                  border: "1px dashed #4259f0",
                }}
              >
                <code className="text-[#4259f0] font-mono text-lg md:text-xl font-bold text-center">
                  PTR = (MRP / (1 + GST% / 100)) / (1 + Retailer Margin% / 100)
                </code>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#f6f6f8] dark:bg-gray-800 flex items-center justify-center text-xs font-bold">
                    MRP
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Maximum Retail Price:</strong> The final price at
                    which the product is sold to the end consumer, including all
                    taxes.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#f6f6f8] dark:bg-gray-800 flex items-center justify-center text-xs font-bold">
                    GST
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Goods and Services Tax:</strong> The percentage of
                    tax applicable to the specific medicine or healthcare
                    product category.
                  </p>
                </div>
              </div>
            </div>

            {/* PTS */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#4259f0] rounded-full"></span>
                PTS Calculation
              </h3>

              <div
                className="p-6 rounded-xl mb-6 flex items-center justify-center"
                style={{
                  background: "rgba(66, 89, 240, 0.03)",
                  border: "1px dashed #4259f0",
                }}
              >
                <code className="text-[#4259f0] font-mono text-lg md:text-xl font-bold text-center">
                  PTS = PTR / (1 + Stockist Margin% / 100)
                </code>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#f6f6f8] dark:bg-gray-800 flex items-center justify-center text-xs font-bold">
                    RM
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Retailer Margin:</strong> The percentage discount
                    offered to the retailer from the base price (excluding GST).
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#f6f6f8] dark:bg-gray-800 flex items-center justify-center text-xs font-bold">
                    SM
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Stockist Margin:</strong> The percentage discount
                    allowed for the distributor or stockist, calculated on the
                    PTR base.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-[#f0f1f4] dark:border-gray-800">
            <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-gray-400">
              Example Scenario
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              If a product has an MRP of ₹500 with 12% GST and a 20% Retailer
              Margin, the PTR is derived by first removing the tax component
              (₹500 / 1.12 = ₹446.43) and then adjusting for the retailer margin
              (₹446.43 / 1.20 = ₹372.02).
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-[#f0f1f4] dark:border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-[#4259f0]/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#4259f0]">
                sell
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">1. Define MRP</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Enter the final retail price and the applicable GST percentage for
              the medicine.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-[#f0f1f4] dark:border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-[#4259f0]/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#4259f0]">
                percent
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">2. Set Margins</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Adjust the trade margins for both the retailer and the stockist as
              per policy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-[#f0f1f4] dark:border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-[#4259f0]/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#4259f0]">
                speed
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">3. Real-time Results</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Instantly view the PTR, PTS, and profitability breakdown for your
              business.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="mt-20 border-t border-[#f0f1f4] dark:border-gray-800 bg-white dark:bg-[#101322] py-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-[#4259f0]/20 p-1.5 rounded-lg">
              <svg
                className="size-5 text-[#4259f0]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="font-bold text-gray-500">
              Vision Plus Healthcare v2.1.0
            </span>
          </div>

          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a className="hover:text-[#4259f0]" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-[#4259f0]" href="#">
              Terms of Service
            </a>
            <a className="hover:text-[#4259f0]" href="#">
              Contact Support
            </a>
          </div>

          <p className="text-xs text-gray-400">
            © 2024 Vision Plus Healthcare. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}
