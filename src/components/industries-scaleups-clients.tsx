"use client";

import { Play } from "lucide-react";

export function ScaleupsClients() {
  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
        
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#222] mb-16 tracking-tight">
          What <span className="text-[#f06f12]">Our Clients</span> Say
        </h2>
        
        <div className="max-w-[850px] w-full grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-16 items-center mx-auto">
          
          <div className="flex flex-col relative w-full pr-4">
             <div className="text-[80px] text-black font-serif absolute -top-12 -left-6 opacity-[0.05] leading-none pointer-events-none">
                &ldquo;
             </div>
             <p className="text-[15px] text-[#333] font-medium leading-[1.6] mb-8 z-10">
               My experience with Netsmartz far exceeded my expectations. They delivered on the same level as what I&apos;m used to working with on our global outsourcing projects.
             </p>
             <div className="flex items-center gap-4 z-10">
               <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm shrink-0 shadow-md">
                 <span className="text-white text-[32px] font-serif leading-none mt-2">&ldquo;</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-[14px] font-bold text-[#222]">Jeff Gorson</span>
                 <span className="text-[10px] text-[#777] font-bold mt-0.5 tracking-wide uppercase">Director of Technology, Merck Tech</span>
               </div>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-start w-full gap-4 relative pl-4 md:pl-0 border-l border-gray-100/50 md:border-none">
             
             {/* Thumbnail card offset representation */}
             <div className="bg-[#f06f12] p-5 text-white font-bold h-[160px] w-full max-w-[320px] relative flex flex-col justify-end shadow-md overflow-hidden rounded-[2px] cursor-pointer group hover:shadow-lg transition-transform hover:-translate-y-1">
                <span className="text-[14px] z-10">#ClientSpeak</span>
                <span className="text-[18px] uppercase tracking-widest leading-[1.1] mt-1 z-10 drop-shadow-sm opacity-90">JEFF<br/>BURTON</span>
                
                {/* Visual Avatar Placeholder representing the guy in the video frame */}
                <div className="absolute right-[-10px] bottom-0 w-[60%] h-[95%] opacity-95 mix-blend-luminosity z-0 flex items-end justify-center">
                   <div className="w-full h-full bg-white/20 rounded-tl-full flex items-end justify-center px-4 overflow-hidden pt-8 pb-[-5px]">
                       <div className="w-full h-full bg-[#111] rounded-full flex flex-col items-center justify-end pb-0 overflow-hidden">
                          <div className="w-[30px] h-[35px] bg-orange-100 rounded-[8px] mb-[2px]"></div>
                          <div className="w-[65px] h-[35px] bg-black rounded-t-[18px] mb-[-10px]"></div>
                       </div>
                   </div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 z-20">
                    <Play className="w-12 h-12 text-white fill-white" />
                </div>
             </div>

             <div className="flex items-center gap-2 justify-start mt-2 w-full pl-2">
                <div className="w-[36px] h-[36px] rounded-full bg-gray-100 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center opacity-60 hover:opacity-100 cursor-pointer">
                    <div className="text-[10px] text-gray-500 font-bold">JB</div>
                </div>
                <div className="w-[36px] h-[36px] rounded-full bg-gray-100 border-2 border-white shadow-sm -ml-3 overflow-hidden flex items-center justify-center opacity-100 border-orange-500 z-10">
                    <div className="text-[10px] text-orange-600 font-bold">JG</div>
                </div>
                <div className="w-[36px] h-[36px] rounded-full bg-gray-100 border-2 border-white shadow-sm -ml-3 overflow-hidden flex items-center justify-center opacity-60 hover:opacity-100 cursor-pointer">
                    <div className="text-[10px] text-gray-500 font-bold">AK</div>
                </div>
            </div>
          </div>

        </div>

    </section>
  );
}
