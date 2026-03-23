"use client";

import { ArrowRight, HelpCircle, LifeBuoy, MessageCircle, Search, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export function FaqHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#05060b] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Help Slate & Electric Indigo Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#6366f1]/20 via-[#1e1b4b]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#1e1b4b]/20 via-[#6366f1]/10 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Problem Solver Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse:60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 backdrop-blur-xl shadow-lg">
            <LifeBuoy className="w-4 h-4 text-[#818cf8]" />
            <span className="text-[#818cf8] text-xs font-semibold tracking-widest uppercase">The Intelligent Support Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Answers for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] via-[#6366f1] to-[#4338ca] font-extrabold tracking-tighter italic">Innovation.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Clarity for your technical journey. We've compiled responses to the most common queries regarding our engineering methodologies, global service standards, and operational benchmarks.
          </p>

          <div className="relative w-full max-w-[500px] group mt-4">
               <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none group-focus-within:text-[#6366f1] transition-colors">
                  <Search className="h-5 w-5 text-slate-500" />
               </div>
               <input 
                  type="text" 
                  placeholder="Search by topic, service, or challenge..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-14 pr-32 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:border-[#6366f1] transition-all text-sm backdrop-blur-xl" 
               />
               <div className="absolute inset-y-2 right-2 flex items-center">
                  <button className="h-full px-6 bg-[#6366f1] text-white font-bold rounded-full text-xs hover:bg-[#4f46e5] transition-all whitespace-nowrap">
                     Instant Solve
                  </button>
               </div>
          </div>
          
          <div className="flex items-center gap-8 mt-6 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Fast<span className="text-indigo-500 text-2xl font-black ml-1">#</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: High Efficiency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">99.9<span className="text-indigo-400 text-2xl ml-1">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">First-Touch Resolution</div>
            </div>
          </div>
        </div>

        {/* Right Column / FAQ Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Help Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-[#818cf8]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#818cf8] bg-[#6366f1]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#6366f1]/10">
                        Resolution Active
                     </span>
                  </div>

                  <div className="space-y-6 flex-1">
                     <div className="text-xs text-slate-500 font-mono uppercase tracking-[0.3em]">Query ID // 2026-X</div>
                     
                     <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#818cf8] transition-colors italic">
                        How does DevOps acceleration scale with multi-cloud?
                     </h2>
                     
                     <div className="flex items-center gap-6 mt-10">
                        <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex-1 text-center">
                           <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">Impact</span>
                           <span className="text-xl font-bold text-white">Full</span>
                        </div>
                        <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex-1 text-center">
                           <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">Clarity</span>
                           <span className="text-xl font-bold text-[#818cf8]">High</span>
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Verified Expert Solution</span>
                     </div>
                     <MessageCircle className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
               </div>

               {/* Interaction Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-[#6366f1] text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(99,102,241,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Zap className="w-6 h-6 fill-white text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Active Support</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest">Global Desk</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Sparkles className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
