"use client";

import { Stethoscope, HeartPulse, ShieldPlus, Crosshair } from "lucide-react";

export function HealthcareClients() {
  return (
    <section className="w-full bg-[#f2fcfb] py-16 px-6 flex flex-col items-center border-t border-teal-100">
      
      <div className="max-w-[1000px] w-full flex flex-col items-center">
         <p className="text-[14px] text-teal-800 font-bold mb-10 text-center uppercase tracking-widest opacity-80">
           Partnering with Next-Gen Health Systems & Startups
         </p>
         
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-60 mix-blend-multiply">
            {/* Dummy Client 1 */}
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors"><ShieldPlus className="text-blue-600" /></div>
              <div className="font-sans text-[24px] font-black text-slate-800 tracking-tight leading-none group-hover:text-blue-600 transition-colors">Care<span className="font-light text-slate-500">Shield</span></div>
            </div>

            {/* Dummy Client 2 */}
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors"><HeartPulse className="text-teal-600" /></div>
              <div className="font-serif italic text-[24px] font-bold text-slate-800 tracking-tight group-hover:text-teal-600 transition-colors">Vita<br/><span className="font-sans text-[12px] not-italic font-bold text-slate-400 uppercase tracking-widest">Genomics</span></div>
            </div>

            {/* Dummy Client 3 */}
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors"><Stethoscope className="text-indigo-600" /></div>
              <div className="font-sans text-[20px] font-bold text-slate-700 tracking-tighter uppercase group-hover:text-indigo-600 transition-colors">MD<span className="text-[20px] text-indigo-500 font-black">Link</span></div>
            </div>

            {/* Dummy Client 4 */}
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors"><Crosshair className="text-emerald-600" /></div>
              <div className="font-serif text-[26px] font-bold text-slate-800 tracking-tight group-hover:text-emerald-600 transition-colors">Precision<br/><span className="font-sans text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] relative -top-3">Oncology</span></div>
            </div>
         </div>
      </div>
      
    </section>
  );
}
