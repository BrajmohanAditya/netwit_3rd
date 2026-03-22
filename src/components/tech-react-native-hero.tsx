"use client";

import { ArrowRight, Smartphone, Code2, Zap, Sparkles, Binary } from "lucide-react";
import Link from "next/link";

export function ReactNativeHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0a0f1c] text-white flex items-center overflow-hidden pt-20">
      {/* React Native Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[0%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#61DAFB]/20 via-blue-900/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-indigo-600/20 via-[#61DAFB]/10 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Mobile Scaffold Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#61DAFB]/30 bg-[#61DAFB]/10 backdrop-blur-md shadow-[0_0_20px_rgba(97,218,251,0.15)]">
            <Smartphone className="w-4 h-4 text-[#61DAFB]" />
            <span className="text-[#61DAFB] text-xs font-bold tracking-widest uppercase">Cross-Platform Mobile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Write Once. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-indigo-400">Deploy Everywhere.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Why fund two massive engineering teams? We build breathtaking, 60fps Native applications for both iOS and Android simultaneously using a single, unified React Native codebase.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#61DAFB] text-[#0a0f1c] font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-[#39c4e8] shadow-[0_0_30px_rgba(97,218,251,0.3)]">
               Hire Mobile Developers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Architecture <ArrowRight className="w-4 h-4 text-[#61DAFB]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">100<span className="text-[#61DAFB]">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Native Code Compilation</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">~50<span className="text-[#61DAFB]">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Cost Reduction</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Mobile UI & JSI Bridge */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-15deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* iPhone / Android Mockup Mockup Skeleton */}
               <div className="absolute top-[5%] left-[10%] w-[320px] h-[650px] bg-[#000000] border-8 border-[#333] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative">
                  
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full z-30"></div>
                  
                  {/* Mock Mobile App UI */}
                  <div className="p-6 pt-12 relative h-full flex flex-col gap-6 w-full bg-[#111] overflow-hidden">
                     {/* Header */}
                     <div className="flex justify-between items-center w-full">
                        <div className="w-10 h-10 rounded-full bg-[#61DAFB]/20 flex items-center justify-center">
                           <div className="w-5 h-5 bg-[#61DAFB] rounded-full animate-pulse"></div>
                        </div>
                        <div className="w-20 h-4 bg-white/10 rounded-md"></div>
                     </div>
                     
                     {/* Hero Card */}
                     <div className="w-full aspect-[4/3] bg-gradient-to-br from-indigo-600 to-[#61DAFB]/40 rounded-3xl p-5 flex flex-col justify-end relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px] rounded-full"></div>
                        <div className="w-1/2 h-6 bg-white/80 rounded-md mb-2 relative z-10"></div>
                        <div className="w-3/4 h-3 bg-white/50 rounded-sm relative z-10"></div>
                     </div>
                     
                     {/* Horizontal Scroll / List */}
                     <div className="flex gap-4">
                        <div className="w-24 h-32 bg-white/5 rounded-2xl flex-shrink-0 border border-white/5"></div>
                        <div className="w-24 h-32 bg-white/5 rounded-2xl flex-shrink-0 border border-white/5"></div>
                        <div className="w-24 h-32 bg-white/5 rounded-2xl flex-shrink-0 border border-white/5"></div>
                     </div>
                     
                     {/* Bottom Navigation */}
                     <div className="absolute bottom-0 left-0 w-full h-20 bg-[#161616]/90 backdrop-blur-lg border-t border-white/5 flex justify-around items-center px-4 pb-2">
                        <div className="w-12 h-12 flex items-center justify-center"><div className="w-6 h-6 bg-[#61DAFB] rounded-md"></div></div>
                        <div className="w-12 h-12 flex items-center justify-center"><div className="w-6 h-6 bg-white/20 rounded-md"></div></div>
                        <div className="w-12 h-12 flex items-center justify-center"><div className="w-6 h-6 bg-white/20 rounded-md"></div></div>
                        <div className="w-12 h-12 flex items-center justify-center"><div className="w-6 h-6 bg-white/20 rounded-md"></div></div>
                     </div>
                  </div>
               </div>

               {/* JavaScript Interface (JSI) Bridge */}
               <div className="absolute top-[40%] -left-[20%] bg-[#0d1627] border border-indigo-500/30 p-3 rounded-2xl shadow-[0_20px_50px_rgba(99,102,241,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-center">
                     <Binary className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                     <span className="block text-xs font-bold text-white uppercase tracking-widest">Hermes Engine</span>
                     <span className="block text-[9px] text-indigo-400 mt-0.5">JS to Native Layer JSI</span>
                  </div>
               </div>

               {/* Expo Badge */}
               <div className="absolute top-[75%] right-[-10%] bg-white border border-gray-200 py-3 px-4 rounded-xl shadow-[0_20px_40px_rgba(255,255,255,0.15)] z-40 transform rotate-6 hover:scale-105 transition-transform flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-black flex items-center justify-center">
                     <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10l10 5l10-5V7L12 2zm0 2.24l7.65 3.83-7.65 3.82-7.65-3.82L12 4.24zM4.35 15.7V9.72l6.65 3.32v6.48L4.35 15.7zm15.3 0l-6.65 3.82v-6.48l6.65-3.32v6.05z"/>
                     </svg>
                  </div>
                  <div>
                     <span className="block text-[10px] font-bold text-black uppercase tracking-widest">Expo EAS</span>
                     <span className="block text-[8px] text-gray-500">Over-The-Air Active</span>
                  </div>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
