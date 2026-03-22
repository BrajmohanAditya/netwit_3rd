"use client";

import { ArrowRight, Book, Database, Globe, Layers, Search, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export function AllResourcesHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#020202] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Universal Multi-Gradient (Indigo, Rose, Emerald) */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#6366f1]/20 via-[#be123c]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#10b981]/15 via-[#6366f1]/10 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Global Citadel Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
            <Database className="w-4 h-4 text-[#818cf8]" />
            <span className="text-slate-300 text-xs font-semibold tracking-widest uppercase italic">The Unified Technical Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Infinite <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] via-[#fb7185] to-[#34d399] font-extrabold tracking-tighter italic">Intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Our complete repository of engineering excellence. Browse through every whitepaper, technical tale, elite masterclass, and strategic infographic in a single unified ecosystem.
          </p>

          <div className="relative w-full max-w-[550px] group mt-4">
               <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none group-focus-within:text-[#818cf8] transition-colors">
                  <Search className="h-5 w-5 text-slate-500" />
               </div>
               <input 
                  type="text" 
                  placeholder="Query our global knowledge base..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-6 pl-14 pr-36 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/50 focus:border-[#818cf8] transition-all text-sm backdrop-blur-3xl" 
               />
               <div className="absolute inset-y-2 right-2 flex items-center">
                  <button className="h-full px-8 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white font-black rounded-full text-xs hover:scale-95 transition-all whitespace-nowrap shadow-lg">
                     Search All
                  </button>
               </div>
          </div>
          
          <div className="flex items-center gap-8 mt-6 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Global<span className="text-indigo-400 text-2xl font-black ml-1">#</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: Fully Synchronized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">500<span className="text-indigo-300 text-2xl ml-1">+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Total Technical Assets</div>
            </div>
          </div>
        </div>

        {/* Right Column / Hub Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Hub Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Layers className="w-6 h-6 text-white" />
                     </div>
                     <span className="text-[10px] font-bold text-[#818cf8] bg-[#6366f1]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#6366f1]/10">
                        UNIVERSAL ACCESS
                     </span>
                  </div>

                  <div className="space-y-6 flex-1">
                     <div className="text-xs text-slate-500 font-mono uppercase tracking-[0.3em] font-bold">Registry // CORE.GLOBAL</div>
                     
                     <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-indigo-300 transition-colors italic">
                        The Netsmartz Intelligence Citadel: A Decade of Mastery.
                     </h2>
                     
                     <div className="grid grid-cols-3 gap-3 mt-10">
                        <div className="h-1.5 rounded-full bg-indigo-500/30 overflow-hidden"><div className="w-[100%] h-full bg-indigo-500"></div></div>
                        <div className="h-1.5 rounded-full bg-rose-500/30 overflow-hidden"><div className="w-[85%] h-full bg-rose-500"></div></div>
                        <div className="h-1.5 rounded-full bg-emerald-500/30 overflow-hidden"><div className="w-[90%] h-full bg-emerald-500"></div></div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Verified Knowledge Base</span>
                     </div>
                     <Sparkles className="w-5 h-5 text-indigo-400 group-hover:animate-pulse" />
                  </div>
               </div>

               {/* Hub Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-gradient-to-r from-slate-900 to-black text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-500/20 transition-colors">
                     <Zap className="w-6 h-6 fill-white text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Active Citadel</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest text-[#818cf8]">Infinite Mode</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Book className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
