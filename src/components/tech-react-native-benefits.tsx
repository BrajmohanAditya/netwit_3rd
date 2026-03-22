"use client";

import { CheckCircle2, SplitSquareHorizontal, Rabbit, BarChart3 } from "lucide-react";
import Link from "next/link";

export function ReactNativeBenefits() {
  const points = [
    "One development team covers both iOS and Android App Stores.",
    "Share business logic seamlessly between Web React and Mobile apps.",
    "Lightning-fast iteration driven by 'Hot Reloading' architecture.",
    "Compiile directly to Native UI Modules, avoiding sluggish web wrappers.",
    "Incredible open-source library support specifically for mobile UI.",
    "Effortless transition for engineers who already know React.js."
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a0f1c] to-[#04060b] py-24 relative overflow-hidden text-white border-t border-[#1e293b]">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-blue-400">Mobile Investment.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            Building native iOS and Android separately doubles your overhead, creates disjointed launch schedules, and leads to severe feature desyncs. React Native unifies your product roadmap immediately without sacrificing an inch of performance.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#61DAFB] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#61DAFB] text-[#0a0f1c] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(97,218,251,0.3)] hover:shadow-[0_0_40px_rgba(97,218,251,0.5)]">
             Boot Up a Native Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#12192b] border border-[#1e293b] p-8 rounded-3xl hover:border-[#61DAFB]/50 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <SplitSquareHorizontal className="w-8 h-8 text-[#61DAFB] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">1 Code</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">2 Giant Platforms</span>
           </div>
           
           <div className="bg-[#12192b] border border-[#1e293b] p-8 rounded-3xl hover:border-indigo-500/50 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-xl">
              <Rabbit className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">60fps</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Fluid Render Targets</span>
           </div>
           
           <div className="bg-[#12192b] border border-[#1e293b] p-8 rounded-3xl hover:border-emerald-500/50 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <BarChart3 className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">-50%</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Cost & Timeline</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#61DAFB] to-blue-800 border border-[#1e293b] p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Web Parity.</h4>
              <p className="text-sm text-cyan-100 leading-relaxed relative z-10 font-bold">Scale teams effortlessly. Your React.js web developers are already 80% trained for React Native.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
