"use client";

import React from "react";

const tools = [
  {
    name: "Meta",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "Google Analytics",
    icon: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg"
  },
  {
    name: "Google My Business",
    icon: "https://cdn.worldvectorlogo.com/logos/google-my-business.svg"
  },
  {
    name: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
  },
  {
    name: "Ahrefs",
    icon: "https://cdn.worldvectorlogo.com/logos/ahrefs.svg"
  },
  {
    name: "Hubspot",
    icon: "https://cdn.worldvectorlogo.com/logos/hubspot.svg"
  },
  {
    name: "Semrush",
    icon: "https://cdn.worldvectorlogo.com/logos/semrush.svg"
  },
  {
    name: "Buffer",
    icon: "https://cdn.worldvectorlogo.com/logos/buffer-2.svg"
  }
];

export default function MarketingTools() {
  return (
    <section className="py-24 bg-[#fefaf6]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#111827]">
            Marketing Tools and Platforms
          </h2>
        </div>

        {/* Tools Grid / Flex Container */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-[1000px] mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              {/* Icon Box */}
              <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 flex items-center justify-center p-5">
                <img 
                  src={tool.icon} 
                  alt={`${tool.name} Logo`} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to text initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center font-bold text-[#ea580c] uppercase text-xl">
                  {tool.name.substring(0, 2)}
                </div>
              </div>
              
              {/* Tool Name */}
              <span className="text-[12px] md:text-[13px] font-semibold text-gray-700">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
