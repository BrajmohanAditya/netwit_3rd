"use client";

import { CheckCircle2, Globe2, Cpu, FileSliders } from "lucide-react";
import Link from "next/link";

export function AndroidBenefits() {
  const points = [
    "Over 70% of the entire global mobile market shares the Android OS.",
    "Immediate, unrestricted access to Google Services, ML Kit, and Maps APIs.",
    "Deeply capable background processes allowing massive offline syncs.",
    "Completely open distribution—deploy to Play Store, Amazon, or Samsung.",
    "Android devices span from low-RAM wearables to massive folding flagships.",
    "Pristine hardware efficiency utilizing raw Kotlin/C++ integrations."
  ];

  return (
    <section className="bg-gradient-to-b from-[#101216] to-[#0a0c0e] py-24 relative overflow-hidden text-white border-t border-white/5 font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#3DDC84]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            The Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DDC84] to-emerald-400">Digital Standard.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            If you want to reach massive international audiences, Android is non-negotiable. Building directly in Kotlin ensures your application executes gracefully across ten thousand different hardware combinations, screen sizes, and battery states without crashing.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#3DDC84] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#3DDC84] text-[#101216] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(61,220,132,0.2)] hover:shadow-[0_0_50px_rgba(61,220,132,0.4)]">
             Boot Up Android Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#1E1F22]/50 border border-white/5 backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#2B2D30] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Globe2 className="w-8 h-8 text-[#3DDC84] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">70%</span>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">Global Share</span>
           </div>
           
           <div className="bg-[#1E1F22]/50 border border-white/5 backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#2B2D30] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Cpu className="w-8 h-8 text-[#7F52FF] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">ART</span>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">Low Level Hardware</span>
           </div>
           
           <div className="bg-[#1E1F22]/50 border border-white/5 backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#2B2D30] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <FileSliders className="w-8 h-8 text-[#E5554E] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Flex</span>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">Any Spec/Foldable</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#1b2f21] to-[#0c1a11] border border-[#3DDC84]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#3DDC84]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-[#3DDC84] relative z-10 tracking-tight">Open APIs.</h4>
              <p className="text-sm text-[#3DDC84]/80 leading-relaxed relative z-10 font-light">Bypass strict OS cages. Android allows deep, system-level customization that iOS literally forbids.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
