"use client";

import Image from "next/image";

export function AzureMigrationHero() {
  return (
    <section className="relative w-full py-28 md:py-36 flex items-center overflow-hidden min-h-[550px] bg-[#FFF8F3]">
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
            Microsoft-Funded Azure Migration Services, Built for <span className="text-accent-gold pt-1 inline-block">Security & ROI</span>
          </h1>
          
          <p className="text-[16px] md:text-[17px] text-muted mb-10 leading-relaxed font-medium">
            Modernize your IT estate with confidence using Microsoft Azure Migration Services powered by the Azure Migration and Modernization Program (AMMP). Reduce financial and execution risk by moving to Azure through a security-led, partner-accountable approach.
          </p>
          
          <button className="bg-accent-gold hover:bg-accent-gold/90 text-white font-bold py-3.5 px-8 rounded-[4px] text-[15px] md:text-base transition-colors shadow-lg shadow-accent-gold/20">
            Get a Free Azure Cloud Readiness Assessment
          </button>
        </div>

        {/* Right Content (Microsoft Partner Badge) */}
        <div className="mt-12 md:mt-0 w-[300px] shrink-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[12px] overflow-hidden border border-gray-100 flex flex-col items-center ml-0 md:ml-12 hover:-translate-y-1 transition-transform">
          <div className="w-full p-8 pb-10 flex flex-col bg-white overflow-hidden rounded-t-[12px]">
            <div className="flex items-center gap-3 mb-8">
              {/* Microsoft Colors Grid */}
              <div className="grid grid-cols-2 gap-[2px] w-[26px] h-[26px] shrink-0">
                <div className="bg-[#f25022]"></div>
                <div className="bg-[#7fba00]"></div>
                <div className="bg-[#00a4ef]"></div>
                <div className="bg-[#ffb900]"></div>
              </div>
              <div className="leading-[1.1]">
                <span className="text-[18px] text-[#5e5e5e] font-semibold tracking-tight">Microsoft</span><br/>
                <span className="text-[12.5px] text-[#5e5e5e]">Solutions Partner</span>
              </div>
            </div>
            
            <div className="text-[15px] text-[#5e5e5e] leading-relaxed">
              Infrastructure<br/>
              Azure
            </div>
          </div>
          
          <div className="bg-[#4d4d4d] w-full p-5 px-6 text-white rounded-b-[12px]">
            <div className="text-[15px] font-medium leading-[1.4]">
              Specialist<br/>
              <span className="text-[12px] text-gray-300 font-normal">Infra and Database Migration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
