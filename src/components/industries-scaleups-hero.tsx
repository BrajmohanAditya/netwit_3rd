"use client";

import Image from "next/image";

export function ScaleupsHero() {
  return (
    <section className="w-full flex flex-col items-center">
      
      {/* Dark Hero Section */}
      <div className="relative min-h-[500px] w-full flex flex-col items-center justify-center p-6 bg-black overflow-hidden m-0">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Abstract dark photo stand-in */}
           <div className="w-full h-full bg-gradient-to-r from-gray-900 to-slate-800 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-[900px] w-full flex flex-col items-center text-center mt-8">
          <h1 className="text-[36px] md:text-[46px] font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Scaleup SaaS Development Services
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-gray-200 mb-10 max-w-[650px] leading-[1.6] drop-shadow-sm">
            Our world-class expertise and cutting-edge solutions have helped 200+ Organizations scale their operations with path-breaking innovation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
            <button className="bg-white text-black text-[13px] font-bold py-3 px-8 transition-transform hover:-translate-y-0.5 w-[160px] h-[48px] shadow-[0_4px_14px_rgba(255,255,255,0.15)] rounded-sm">
              Build Your Team
            </button>
            <button className="bg-transparent border-[1.5px] border-white text-white text-[13px] font-bold py-3 px-8 transition-colors hover:bg-white/10 w-[160px] h-[48px] rounded-sm">
              Work with Us
            </button>
          </div>
        </div>
      </div>

      {/* Light Banner Section */}
      <div className="w-full bg-[#f8fbff] py-16 px-6 flex flex-col items-center border-b border-gray-100">
        <p className="text-[10px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
          SCALE BETTER — FASTER — SMARTER
        </p>
        <h2 className="text-[26px] md:text-[32px] font-bold text-[#222] mb-6 text-center tracking-tight">
          Leverage the Right Level of Skill, Support and<br/>Network
        </h2>
        <p className="text-[13px] text-[#666] mb-4 text-center max-w-[800px] leading-[1.6]">
          Solve Critical Scaling Up problems with Netsmartz&apos;s curated services & dedicated engineering talent and overcome talent bottlenecks, attrition troubles, and maintain quality of performance during this important business phase.
        </p>
      </div>

    </section>
  );
}
