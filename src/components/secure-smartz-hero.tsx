"use client";

export function SecureSmartzHero() {
  return (
    <section className="relative min-h-[600px] w-full bg-[#050505] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden border-b border-white/5">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <div className="w-[80%] max-w-[1200px] h-[400px] bg-[#f06f12]/10 blur-[120px] rounded-[100%] absolute bottom-[-200px]"></div>
      </div>

      <div className="relative z-10 max-w-[900px] w-full px-6 flex flex-col items-center text-center">
        
        {/* Headline */}
        <h1 className="text-[44px] md:text-[56px] lg:text-[68px] font-black text-white leading-[1.1] tracking-tight mb-2">
          Intelligence-Driven
        </h1>
        <h1 className="text-[44px] md:text-[56px] lg:text-[68px] font-black leading-[1.1] tracking-tight mb-8 text-[#f06f12] drop-shadow-[0_0_15px_rgba(240,111,18,0.4)]">
          Cybersecurity
        </h1>

        {/* Description */}
        <p className="text-[14.5px] md:text-[16px] text-gray-400 leading-[1.7] max-w-[700px] mb-24 font-normal tracking-wide">
          SecureSmartz leverages adaptive AI, continuous monitoring, and expert insight to identify and stop threats faster
          <br className="hidden md:block"/> — providing smaller protective spaces, your environment.
        </p>

        {/* Partners Section */}
        <p className="text-[12px] md:text-[13px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-10">
          Our Partners
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <span className="text-[#0072CE] font-bold text-[18px]">SOPHOS</span>
          
          <div className="flex items-center gap-1">
            <svg className="w-8 h-8 text-[#00A1E0]" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 16.5l-4-4 1.41-1.41L9 13.67l7.59-7.59L18 7.5l-9 9z" />
            </svg>
            <span className="text-white text-[15px] font-bold">Salesforce</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-[2px] w-[18px] h-[18px]">
              <div className="bg-[#f25022]"></div>
              <div className="bg-[#7fba00]"></div>
              <div className="bg-[#00a4ef]"></div>
              <div className="bg-[#ffb900]"></div>
            </div>
            <span className="text-white text-[16px] font-semibold">Microsoft</span>
          </div>

          <span className="text-[#FF9900] font-bold text-[22px] tracking-tighter">aws</span>

          <span className="text-white text-[16px] font-semibold flex items-center gap-1.5">
             <div className="w-3.5 h-3.5 flex gap-[2px]">
              <div className="w-[3px] bg-purple-600 h-full rounded-sm"></div>
              <div className="w-[3px] bg-purple-600 h-full rounded-sm"></div>
              <div className="w-[3px] bg-purple-600 h-full rounded-sm"></div>
            </div>
            SentinelOne
          </span>

          <span className="text-[#D21F3C] font-bold text-[16px] tracking-tight">CROWDSTRIKE</span>
        </div>
      </div>
    </section>
  );
}
