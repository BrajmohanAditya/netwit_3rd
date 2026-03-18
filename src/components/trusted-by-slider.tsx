"use client";

import React from "react";

const companies = [
  { name: "Officetrax", logo: "" }, // Relies on CSS fallback
  { name: "SAMSUNG", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "NMN", logo: "" }, // Relies on CSS fallback
  { name: "Telstra", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Telstra_Logo.svg" },
  { name: "Level 3", logo: "" } // Relies on CSS fallback
];

// Duplicate multiple times for smooth infinite scroll
const repeatedCompanies = [...companies, ...companies, ...companies, ...companies];

export function TrustedBySlider() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 mb-12">
        <h2 className="text-[26px] md:text-[32px] font-bold text-center text-[#001e36]">
          Trusted By
        </h2>
      </div>

      {/* Infinite slider */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex w-max animate-marquee space-x-16 md:space-x-32 hover:[animation-play-state:paused] px-8 items-center">
          {repeatedCompanies.map((company, index) => (
            <div key={index} className="flex items-center justify-center min-w-[120px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="max-h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
              ) : (
                <div className="hidden items-center justify-center uppercase font-black text-gray-900 tracking-tight">
                  {company.name === 'Level 3' ? (
                    <div className="flex flex-col items-center leading-none mt-1">
                      <div className="flex items-end gap-1.5"><span className="text-2xl font-black">Level</span> <span className="text-[34px] font-black leading-[0.8]">3</span></div>
                      <span className="text-[6px] tracking-[0.3em] text-gray-500 uppercase mt-1 ml-1">Communications</span>
                    </div>
                  ) : company.name === 'NMN' ? (
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-4xl font-black tracking-tighter">N<span className="mx-0.5">M</span>N</span>
                      <span className="text-[5.5px] tracking-[0.2em] text-gray-400 mt-1 uppercase">Nested Minds Network</span>
                    </div>
                  ) : company.name === 'Officetrax' ? (
                    <div className="flex items-baseline text-[22px] font-bold tracking-tight text-gray-800 capitalize">
                      Officetra<span className="text-[30px] text-gray-500 -ml-0.5 font-black">X</span>
                    </div>
                  ) : (
                    company.name
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Gradient fades for the edges to blend smoothly */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
      
      {/* Inline styles for custom infinite marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } 
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />
    </section>
  );
}
