"use client";

import Image from "next/image";

export function DataPodsHero() {
  return (
    <section className="relative w-full py-32 flex items-center justify-center overflow-hidden min-h-[500px]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/data_pods_hero.png" 
          alt="Data Foundation Background" 
          fill 
          className="object-cover object-center opacity-60"
          priority
        />
        {/* Soft overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/50"></div>
      </div>
      
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center mt-12 mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold mb-6 text-text leading-[1.15]">
          Fix Your Data Foundation.<br className="hidden md:block" />
          Unlock AI ROI in <span className="text-primary">90 Days</span>
        </h1>
        
        <p className="text-[16px] md:text-[18px] text-muted mb-10 leading-relaxed font-medium mx-auto max-w-[850px]">
          Most AI initiatives don&apos;t fail because of models, tools, or platforms. They fail because data pipelines, quality, and governance are not production-ready. Data Pods stabilize your data foundation first, so AI and analytics can scale safely, predictably, and with measurable ROI.
        </p>
        
        <button className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-[4px] text-[15px] md:text-[17px] transition-colors shadow-lg shadow-primary/20">
          Book a 20-Minute Data Readiness Call
        </button>
      </div>
    </section>
  );
}
