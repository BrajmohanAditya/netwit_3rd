"use client";

import React from "react";
import { MoveRight, Building, Settings, LayoutDashboard, HardHat } from "lucide-react";

const evaluateFeatures = [
  {
    icon: <MoveRight className="w-5 h-5 text-[#ea580c]" />,
    title: "India Entry Strategy",
    items: [
      "Business case development",
      "Regulatory approvals and legal entity registrations",
      "Location assessment and selection"
    ]
  },
  {
    icon: <Building className="w-5 h-5 text-[#ea580c]" />,
    title: "Premises & Lease Management",
    items: [
      "Premises search and identification",
      "Lease negotiation and agreement management"
    ]
  },
  {
    icon: <Settings className="w-5 h-5 text-[#ea580c]" />,
    title: "Operational Setup",
    items: [
      "Talent recruitment and onboarding",
      "Company incubation and local establishment"
    ]
  },
  {
    icon: <LayoutDashboard className="w-5 h-5 text-[#ea580c]" />,
    title: "Workplace & Facility Management",
    items: [
      "Workplace management and occupancy planning",
      "Integrated facility management"
    ]
  },
  {
    icon: <HardHat className="w-5 h-5 text-[#ea580c]" />,
    title: "Fit-Out & Construction Services",
    items: [
      "Design and build of workspace",
      "Construction and fit-out to meet specific operational needs"
    ]
  }
];

export default function EvaluateSetup() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] mb-4">
            Evaluate Your GCC Setup with Netwit
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#4b5563] max-w-[800px] mx-auto leading-[1.6]">
            Global Capability Centers (GCCs) have evolved from cost-saving centers to hubs of talent, innovation, and excellence. Netwit partners with organizations to build GCCs that are seamless to run, manage, and scale for long-term success.
          </p>
        </div>

        {/* 5-Column Wrapper / Flex Box */}
        <div className="flex flex-col lg:flex-row w-full bg-white border border-gray-200 shadow-sm rounded-sm">
          {evaluateFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className={`flex-1 p-6 md:p-8 flex flex-col items-start ${
                idx !== evaluateFeatures.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''
              }`}
            >
              {/* Feature Icon and Title Wrapper */}
              <div className="flex items-center gap-3 mb-6">
                <div className="shrink-0 p-1.5 rounded-full border border-[#ea580c]/20 bg-[#ea580c]/5">
                  {feature.icon}
                </div>
                <h3 className="text-[15px] md:text-[16px] font-bold text-[#111827]">
                  {feature.title}
                </h3>
              </div>
              
              {/* Feature Sub-list */}
              <ul className="flex flex-col gap-3 h-full">
                {feature.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[12.5px] md:text-[13px] text-gray-600 leading-[1.5]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
