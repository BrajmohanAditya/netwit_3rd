"use client";

import { CheckCircle2, Lock, Smartphone, Combine } from "lucide-react";
import Link from "next/link";

export function SwiftBenefits() {
  const points = [
    "Unmatched scrolling performance and physics using the ProMotion 120hz engine.",
    "Immediate, Day-1 access to all new Apple SDKs (ARKit, CoreML, Dynamic Island).",
    "Absolute security compliance natively passing App Store human review effortlessly.",
    "Incredible hardware efficiency utilizing Apple Silicon architectures.",
    "Native accessibility (VoiceOver, Dynamic Type) built-in automatically.",
    "Seamless interconnectivity across iCloud, Apple Pay, and HealthKit."
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#050505] py-24 relative overflow-hidden text-white border-t border-white/5 font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-pink-900/20 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            The Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">User Demographic.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            iOS consumers demand absolute perfection. They spend significantly more inside apps, but they abandon poorly designed, non-native interfaces immediately. Engineering in raw Swift protects your brand's luxury status.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
             Build For iPhone
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] hover:bg-white/10 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Smartphone className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Day 1</span>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">Immediate OS Support</span>
           </div>
           
           <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] hover:bg-white/10 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Lock className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Enclave</span>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">Absolute Security</span>
           </div>
           
           <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] hover:bg-white/10 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Combine className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Unified</span>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">App Store Rules</span>
           </div>
           
           <div className="bg-gradient-to-br from-purple-600 to-indigo-800 border border-white/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Luxury UX.</h4>
              <p className="text-sm text-purple-100 leading-relaxed relative z-10 font-light">Do not settle for "good enough." Leverage the raw physics engine embedded across all iPad and iPhone hardware.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
