"use client";

import Image from "next/image";

export function AzureMigrationHero() {
  return (
    <section className="relative w-full py-28 md:py-36 flex items-center overflow-hidden min-h-[550px] bg-surface-1">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/azure_hero_bg.png" 
          alt="Azure Migration Background" 
          fill 
          className="object-cover object-center opacity-50 mix-blend-multiply"
          priority
        />
        {/* Soft overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Content */}
        <div className="max-w-[700px] text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold mb-6 text-text leading-[1.1] tracking-tight">
            Microsoft-Funded Azure Migration Services, Built for <span className="text-primary pt-1 inline-block">Security & ROI</span>
          </h1>
          
          <p className="text-[16px] md:text-[17px] text-muted mb-10 leading-relaxed font-medium">
            Modernize your IT estate with confidence using Microsoft Azure Migration Services powered by the Azure Migration and Modernization Program (AMMP). Reduce financial and execution risk by moving to Azure through a security-led, partner-accountable approach.
          </p>
          
          <button className="bg-primary hover:bg-primary-600 text-white font-medium py-[14px] px-[22px] rounded-[6px] text-[15px] transition-colors shadow-[0_2px_10px_rgba(11,61,145,0.3)] tracking-wide">
            Get a Free Azure Cloud Readiness Assessment
          </button>
        </div>

        {/* Right Content (Microsoft Partner Badge) */}
        <div className="mt-12 md:mt-0 w-[300px] shrink-0 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] rounded-[8px] overflow-hidden border border-gray-100 flex flex-col items-center ml-0 md:ml-12 hover:-translate-y-1 transition-transform relative">
          
          <div className="w-full p-8 pb-[70px] flex flex-col bg-white relative z-10">
            <div className="flex items-center gap-3 mb-8">
              {/* Microsoft Colors Grid */}
              <div className="grid grid-cols-2 gap-[2px] w-[24px] h-[24px] shrink-0">
                <div className="bg-[#f25022]"></div>
                <div className="bg-[#7fba00]"></div>
                <div className="bg-[#00a4ef]"></div>
                <div className="bg-[#ffb900]"></div>
              </div>
              <div className="leading-[1.15]">
                <span className="text-[18px] text-[#5e5e5e] font-semibold tracking-tight">Microsoft</span><br/>
                <span className="text-[13px] text-[#5e5e5e] font-medium">Solutions Partner</span>
              </div>
            </div>
            
            <div className="text-[14px] font-medium tracking-wide text-[#707070] leading-[1.6]">
              Infrastructure<br/>
              Azure
            </div>
          </div>
          
          <div className="bg-[#4D4D4D] w-full px-7 pb-6 pt-3 text-white relative z-0 mt-[-50px]">
             {/* Curved separator */}
             <svg 
               className="absolute left-0 w-full h-[35px] top-[-34px]" 
               viewBox="0 0 300 35" 
               preserveAspectRatio="none"
             >
               <path fill="#4D4D4D" d="M0,35 C120,35 180,0 300,0 L300,35 L0,35 Z" />
             </svg>
            <div className="text-[14px] font-medium leading-[1.4] relative z-10 text-[#fdfdfd]">
              Specialist<br/>
              <span className="text-[11px] text-[#E0E0E0] font-normal tracking-wide">Infra and Database Migration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
