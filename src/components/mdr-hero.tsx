"use client";

import Image from "next/image";

export function MdrHero() {
  return (
    <section className="relative min-h-[520px] w-full bg-surface-1 overflow-hidden flex flex-col items-center justify-center pt-24 pb-20 border-b border-primary/10">
      
      {/* Generated Background Image overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/mdr_hero_bg.png"
          alt="Cybersecurity MDR Background"
          fill
          className="object-cover object-right opacity-90 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[900px] w-full px-6 flex flex-col items-center text-center">
        
        {/* Logos Placeholder (SentinelOne | CrowdStrike | Sophos) */}
        <div className="flex items-center justify-center gap-6 md:gap-7 mb-10 text-[18px] md:text-[22px] font-bold tracking-tight text-[#1E1B4B]">
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 flex gap-[3px]">
              <div className="w-[3px] bg-purple-700 h-full rounded-sm"></div>
              <div className="w-[3px] bg-purple-700 h-full rounded-sm"></div>
              <div className="w-[3px] bg-purple-700 h-full rounded-sm"></div>
            </div>
            SentinelOne<sup className="text-[10px] font-normal leading">®</sup>
          </span>
          <span className="w-[1px] h-7 bg-gray-300"></span>
          <span className="flex items-center gap-2 text-[#D21F3C]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            CROWDSTRIKE
          </span>
          <span className="w-[1px] h-7 bg-gray-300"></span>
          <span className="text-[#0072CE] font-sans">
            SOPHOS
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#211F1D] leading-[1.15] tracking-tight mb-8">
          You&apos;re Not Under Attack. You&apos;re<br/>
          <span className="text-primary">Under-Detected.</span>
        </h1>

        {/* Description */}
        <p className="text-[15.5px] md:text-[17px] text-[#424242] leading-[1.6] max-w-[700px] font-medium mb-10">
          Most organizations don&apos;t suffer from breaches because they lack security tools. They suffer breaches because no one is actively monitoring their environment when it matters most.
        </p>

        {/* Call to Action Container */}
        <button className="bg-primary hover:bg-primary-600 text-white font-medium py-[15px] px-[28px] rounded-[6px] text-[15.5px] transition-all shadow-[0_4px_14px_rgba(11,61,145,0.30)] tracking-wide hover:shadow-[0_6px_20px_rgba(11,61,145,0.45)] hover:-translate-y-0.5">
          Get Your Free 14-Day Executive Threat Exposure Assessment
        </button>


      </div>
    </section>
  );
}
