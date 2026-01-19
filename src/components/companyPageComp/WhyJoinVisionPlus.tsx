import React from "react";
import {
  FaLightbulb as Lightbulb,
  FaSearch as Search,
  FaFortAwesome as Castle,
  FaCog as Settings,
  FaUsers as Users,
  FaChalkboardTeacher as Presentation,
  FaRocket as Rocket,
  FaFlag as Flag,
} from "react-icons/fa";

const InfographicTimeline = () => {
  const items = [
    {
      id: "A",
      icon: Lightbulb,
      color: "bg-blue-600",
      dotColor: "bg-blue-500",
      semicircleColor: "bg-blue-600",
      side: "left",
    },
    {
      id: "B",
      icon: Search,
      color: "bg-cyan-400",
      dotColor: "bg-cyan-400",
      semicircleColor: "bg-cyan-400",
      side: "right",
    },
    {
      id: "C",
      icon: Castle,
      color: "bg-emerald-500",
      dotColor: "bg-emerald-500",
      semicircleColor: "bg-emerald-500",
      side: "left",
    },
    {
      id: "D",
      icon: Settings,
      color: "bg-orange-500",
      dotColor: "bg-orange-500",
      semicircleColor: "bg-orange-500",
      side: "right",
    },
    {
      id: "E",
      icon: Users,
      color: "bg-orange-600",
      dotColor: "bg-orange-600",
      semicircleColor: "bg-orange-600",
      side: "left",
    },
    {
      id: "F",
      icon: Presentation,
      color: "bg-purple-600",
      dotColor: "bg-purple-600",
      semicircleColor: "bg-purple-600",
      side: "right",
    },
    {
      id: "G",
      icon: Rocket,
      color: "bg-pink-600",
      dotColor: "bg-pink-600",
      semicircleColor: "bg-pink-600",
      side: "left",
    },
    {
      id: "H",
      icon: Flag,
      color: "bg-pink-400",
      dotColor: "bg-pink-400",
      semicircleColor: "bg-pink-400",
      side: "right",
    },
  ];

  const colorDots = [
    "bg-blue-600",
    "bg-cyan-500",
    "bg-emerald-500",
    "bg-orange-500",
    "bg-orange-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-pink-400",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-500 tracking-wider mb-4">
            INFOGRAPHIC
          </h1>
          <div className="flex justify-center gap-2 sm:gap-3">
            {colorDots.map((color, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${color}`}
              />
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full hidden md:block" />

          {/* Top cap */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-gray-400 rounded-full hidden md:block" />

          {/* Bottom cap */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-4 h-4 bg-gray-400 rounded-full hidden md:block" />

          {/* Mobile line */}
          <div className="absolute left-8 w-1 bg-gray-400 h-full md:hidden" />
          <div className="absolute left-8 transform -translate-x-1/2 -top-4 w-4 h-4 bg-gray-400 rounded-full md:hidden" />
          <div className="absolute left-8 transform -translate-x-1/2 -bottom-4 w-4 h-4 bg-gray-400 rounded-full md:hidden" />

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Left content (desktop) / All content container (mobile) */}
                <div
                  className={`flex-1 ${
                    item.side === "left" ? "md:pr-12" : "md:pl-12"
                  } flex items-center md:justify-${
                    item.side === "left" ? "end" : "start"
                  }`}
                >
                  <div className="flex items-center w-full md:max-w-md ml-16 md:ml-0">
                    {/* Semicircle with icon (left side on mobile and desktop left items) */}
                    {item.side === "left" && (
                      <div className="relative flex-shrink-0 mr-4 md:mr-0 md:order-2 md:ml-4">
                        <div
                          className={`w-24 h-24 sm:w-28 sm:h-28 ${item.semicircleColor} rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center shadow-lg`}
                        >
                          <item.icon
                            className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                    )}

                    {/* Text box */}
                    <div
                      className={`bg-white rounded-full px-6 py-5 sm:px-8 sm:py-6 shadow-lg flex-1 ${
                        item.side === "left" ? "md:order-1" : ""
                      }`}
                    >
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim
                      </p>
                    </div>

                    {/* Semicircle with icon (right side items on desktop) */}
                    {item.side === "right" && (
                      <div className="relative flex-shrink-0 ml-4 hidden md:block">
                        <div
                          className={`w-28 h-28 ${item.semicircleColor} rounded-r-full flex items-center justify-center shadow-lg`}
                        >
                          <item.icon
                            className="w-12 h-12 text-white"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center circle with letter */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 ${item.dotColor} rounded-full flex items-center justify-center shadow-lg border-4 border-gray-200`}
                  >
                    <span className="text-white text-2xl sm:text-3xl font-bold">
                      {item.id}
                    </span>
                  </div>
                </div>

                {/* Right content (desktop only) */}
                <div
                  className={`flex-1 ${
                    item.side === "right" ? "md:pr-12" : "md:pl-12"
                  } hidden md:flex items-center md:justify-${
                    item.side === "right" ? "end" : "start"
                  }`}
                >
                  <div className="flex items-center max-w-md">
                    {/* Semicircle with icon (right side items) */}
                    {item.side === "right" && (
                      <div className="relative flex-shrink-0 mr-4">
                        <div
                          className={`w-28 h-28 ${item.semicircleColor} rounded-l-full flex items-center justify-center shadow-lg`}
                        >
                          <item.icon
                            className="w-12 h-12 text-white"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                    )}

                    {/* Text box */}
                    <div className="bg-white rounded-full px-8 py-6 shadow-lg flex-1">
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile semicircle for right-side items */}
                {item.side === "right" && (
                  <div className="relative flex-shrink-0 mr-4 ml-16 md:hidden">
                    <div
                      className={`w-24 h-24 sm:w-28 sm:h-28 ${item.semicircleColor} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <item.icon
                        className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicTimeline;
