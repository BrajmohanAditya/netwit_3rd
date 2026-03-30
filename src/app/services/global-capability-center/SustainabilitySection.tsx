"use client";

import React from "react";
import { Leaf } from "lucide-react";

const greenBlocks = [
  {
    title: "Green Infrastructure & Energy Efficiency",
    items: [
      "Renewable Energy Integration (10 MW Netwit's owned Solar Energy Project)",
      "Green Building Certification (WELL, LEED)",
      "Energy-Efficient Lighting & HVAC Systems",
      "Smart Building Automation & Energy Monitoring",
      "Low-Carbon Footprint Design"
    ]
  },
  {
    title: "Water & Waste Management",
    items: [
      "Water-Efficient Fixtures & Usage Monitoring",
      "Rainwater Harvesting & Recycling Systems",
      "Waste Management & Recycling Systems"
    ]
  }
];

const ecoBlocks = [
  {
    title: "Eco-Friendly Construction & Materials",
    items: [
      "Use of Sustainable / Eco-Friendly Construction Materials",
      "Sustainable Vendor & Procurement Policy"
    ]
  },
  {
    title: "Mobility & Commute Initiatives",
    items: [
      "EV Charging Stations / Green Parking",
      "Shuttle Services & Shared Transport"
    ]
  },
  {
    title: "Governance, Awareness & Monitoring",
    items: [
      "Sustainability Reporting",
      "Employee & Tenant Sustainability Awareness"
    ]
  }
];

export default function SustainabilitySection() {
  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] mb-4">
            Sustainability at Netwit
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#4b5563] max-w-[700px] mx-auto leading-[1.6]">
            Our GCC campuses are designed to meet high sustainability standards with a deep commitment to environmental responsibility, wellness, and operational excellence.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Left Column Container */}
          <div className="flex flex-col gap-6 lg:gap-8 bg-primary/5 p-6 lg:p-8 rounded-sm border border-primary/20">
            {greenBlocks.map((block, idx) => (
              <div key={idx} className="flex gap-4">
                {/* Orange Left Indicator */}
                <div className="w-[6px] h-[36px] bg-primary rounded-full mt-1 shrink-0"></div>
                <div className="flex-1 w-full">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111827] mb-4">
                    {block.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start justify-between text-[13px] md:text-[14px] text-gray-700 leading-[1.5]">
                        <div className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-[18px] leading-none">•</span>
                          <span>{item}</span>
                        </div>
                        <div className="w-5 h-5 ml-4 shrink-0 rounded-[4px] border border-gray-300 flex items-center justify-center bg-white shadow-sm">
                          <Leaf className="w-3 h-3 text-primary" strokeWidth={2} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Container */}
          <div className="flex flex-col gap-6 lg:gap-8 p-6 lg:p-8 rounded-sm border border-gray-200 bg-white shadow-sm">
            {ecoBlocks.map((block, idx) => (
              <div key={idx} className="flex gap-4">
                {/* Orange Left Indicator */}
                <div className="w-[6px] h-[36px] bg-primary rounded-full mt-1 shrink-0"></div>
                <div className="flex-1 w-full">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111827] mb-4">
                    {block.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start justify-between text-[13px] md:text-[14px] text-gray-700 leading-[1.5]">
                        <div className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-[18px] leading-none">•</span>
                          <span>{item}</span>
                        </div>
                        <div className="w-5 h-5 ml-4 shrink-0 rounded-[4px] border border-gray-300 flex items-center justify-center bg-white shadow-sm">
                          <Leaf className="w-3 h-3 text-primary" strokeWidth={2} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-[12px] font-bold uppercase tracking-wider py-3 px-8 rounded-sm">
            OUR SUSTAINABILITY COMMITMENT
          </button>
        </div>

      </div>
    </section>
  );
}
