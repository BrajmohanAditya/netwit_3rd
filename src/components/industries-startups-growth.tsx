"use client";

import Image from "next/image";

export function StartupsGrowth() {
  return (
    <section className="bg-white w-full flex flex-col items-center m-0">
      
      {/* Top Banner section */}
      <div className="relative w-full max-w-[1100px] h-[400px] mt-24 mb-32 mx-auto overflow-hidden shadow-sm border border-gray-100">
        <Image 
          src="/images/startups_agile_bg.png" 
          alt="Agile Startup Team" 
          fill 
          className="object-cover object-top opacity-90 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[#000]/60 flex flex-col items-center pt-16">
          <h2 className="text-[28px] md:text-[34px] font-bold text-white text-center max-w-[800px] leading-[1.3] mb-16 tracking-tight drop-shadow-md">
            Agile in our Outset, Seasoned in our Scale —<br/> Bring Reliable Growth for your Startup
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 bg-white shadow-xl max-w-[850px] w-[90%] mx-auto mt-4">
            <div className="flex flex-col items-center justify-center px-4 py-8 border-b md:border-b-0 border-r border-gray-100">
              <span className="text-[40px] font-bold text-[#f06f12]">22</span>
              <span className="text-[10px] text-[#444] font-bold text-center uppercase mt-1 tracking-wide">Startups<br/>Launched</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-8 border-b md:border-b-0 border-r border-gray-100">
              <span className="text-[40px] font-bold text-[#f06f12]">4</span>
              <span className="text-[10px] text-[#444] font-bold text-center uppercase mt-1 tracking-wide">Startups<br/>Helped With<br/>Funding</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-8 border-b md:border-b-0 bg-gray-50/50 md:bg-white border-r border-gray-100 md:col-span-1 col-span-2">
              <span className="text-[40px] font-bold text-[#f06f12]">200</span>
              <span className="text-[10px] text-[#444] font-bold text-center uppercase mt-1 tracking-wide">Startups<br/>Supported</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-8 border-r border-gray-100">
              <span className="text-[40px] font-bold text-[#f06f12]">8</span>
              <span className="text-[10px] text-[#444] font-bold text-center uppercase mt-1 tracking-wide">Startups<br/>Weekends<br/>Conducted</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-8">
              <span className="text-[40px] font-bold text-[#f06f12]">36</span>
              <span className="text-[10px] text-[#444] font-bold text-center uppercase mt-1 tracking-wide">Startups in<br/>Incubator</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accelerator Chamber Block */}
      <div className="w-full max-w-[1240px] px-6 mb-28">
        <div className="bg-gradient-to-r from-[#FF8733] to-[#FFF3EB] max-w-[1050px] mx-auto p-8 rounded-sm flex items-center justify-start gap-8 shadow-sm">
          <div className="w-[85px] h-[85px] bg-white rounded-full flex items-center justify-center shrink-0 border-[4px] border-[#FFF3EB] shadow-md">
            <span className="text-[#f06f12] font-black text-[30px] italic pr-1">S</span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-[24px] mb-2 drop-shadow-sm tracking-tight">
              Startup Accelerator Chamber of Commerce
            </h3>
            <p className="text-white/95 text-[14px] max-w-[650px] leading-relaxed font-medium">
              Group of like-minded, selfless entrepreneurs and professionals committed to bringing a change in the Startup eco-system
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories Block */}
      <div className="w-full max-w-[1240px] px-6 mb-24 flex flex-col items-center">
        <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
          2510+ ENTERPRISE CLIENTS
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#222] mb-5 text-center tracking-tight">
          Success Stories
        </h2>
        <p className="text-[13.5px] text-[#666] mb-12 text-center max-w-[600px] leading-[1.6]">
          Learn how organizations are redefining business norms with our cutting-edge Cloud and IT Infrastructure services.
        </p>

        <div className="w-full max-w-[1000px] bg-black grid grid-cols-1 md:grid-cols-2 relative shadow-[0_10px_40px_rgba(0,0,0,0.15)] mb-12 overflow-hidden min-h-[460px] rounded-[4px] group cursor-pointer border border-gray-800">
          <div className="p-12 pr-10 flex flex-col justify-center relative z-10">
            <span className="text-[11px] text-white font-bold mb-4 uppercase tracking-widest opacity-80">Sports Analytics / India</span>
            <h3 className="text-white text-[32px] font-bold leading-[1.1] mb-24 tracking-tight pr-4">
              How a Sports Analytics Firm used Netsmartz&apos;s Resources to Ensure Quality
            </h3>
            <p className="text-[#f06f12] text-[12.5px] font-bold uppercase mt-auto flex items-center gap-2 tracking-wide group-hover:text-white transition-colors">
              Read Success Story <span className="text-[18px] leading-none mb-0.5">&rarr;</span>
            </p>
          </div>
          <div className="relative w-full h-[300px] md:h-full z-0 overflow-hidden">
             <Image 
                src="/images/startups_success_check.png" 
                alt="Glowing Checkmark over hand" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none md:block hidden"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none md:hidden block"></div>
          </div>
        </div>

        <button className="bg-black text-white text-[13px] font-bold py-4 px-10 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-0.5 rounded-sm">
          View all Success Stories
        </button>
      </div>
      
    </section>
  );
}
