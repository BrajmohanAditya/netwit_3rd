"use client";

import { Factory, Cog, Wrench, HardHat } from "lucide-react";

export function ManufacturingClients() {
  return (
    <section className="w-full bg-[#171a21] py-16 px-6 flex flex-col items-center border-t border-gray-800">
      
      <div className="max-w-[1000px] w-full flex flex-col items-center">
         <p className="text-[14px] text-gray-400 font-bold mb-10 text-center uppercase tracking-[0.2em] relative">
           <span className="bg-[#171a21] px-4">Trusted by Industry Leaders</span>
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -z-10"></div>
         </p>
         
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-70">
            {/* Dummy Client 1 */}
            <div className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-10 h-10 border-2 border-gray-700 bg-gray-800 flex items-center justify-center p-1 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors"><Factory className="text-gray-400 group-hover:text-amber-500" /></div>
              <div className="font-sans text-[20px] font-black text-gray-300 tracking-tight leading-none group-hover:text-white transition-colors">Aero<span className="font-light text-gray-500">Forge</span></div>
            </div>

            {/* Dummy Client 2 */}
            <div className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-10 h-10 border-2 border-gray-700 bg-gray-800 flex items-center justify-center p-1 group-hover:bg-[#1e40af]/30 group-hover:border-[#1e40af] transition-colors"><Cog className="text-gray-400 group-hover:text-blue-500" /></div>
              <div className="font-serif italic text-[24px] font-bold text-gray-300 tracking-tight group-hover:text-white transition-colors">Titan<br/><span className="font-sans text-[10px] not-italic font-bold text-gray-500 uppercase tracking-widest relative -top-2">Motors</span></div>
            </div>

            {/* Dummy Client 3 */}
            <div className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300 transform -skew-x-12">
              <div className="w-10 h-10 border-2 border-gray-700 bg-gray-800 flex items-center justify-center p-1 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-colors transform skew-x-12"><Wrench className="text-gray-400 group-hover:text-red-500" /></div>
              <div className="font-sans text-[22px] font-bold text-gray-400 tracking-tighter uppercase group-hover:text-gray-200 transition-colors transform skew-x-12">Steel<span className="text-[22px] text-gray-600 group-hover:text-red-500 font-black">X</span></div>
            </div>

            {/* Dummy Client 4 */}
            <div className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300">
               <div className="font-serif text-[26px] font-bold text-gray-300 tracking-tight group-hover:text-white transition-colors">Build<span className="font-sans text-[16px] font-black text-gray-600 uppercase tracking-[0.2em] relative top-[-4px] group-hover:text-amber-500">Corp</span></div>
              <div className="w-10 h-10 border-2 border-gray-700 bg-gray-800 flex items-center justify-center p-1 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors"><HardHat className="text-gray-400 group-hover:text-amber-500" /></div>
            </div>
         </div>
      </div>
      
    </section>
  );
}
