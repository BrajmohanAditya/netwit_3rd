"use client";

import { ArrowRight, Briefcase, CheckCircle, Globe, Layers, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

export function HiringHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#020617] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* High-Fidelity Cobalt & Cyan Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#3b82f6]/15 via-[#1e3a8a]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#1e3a8a]/20 via-[#0ea5e9]/10 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Future Career Connectivity Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse:60%_60%_at:50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl shadow-lg">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase italic">The Frontier of Technical Careers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            We're. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 font-extrabold tracking-tighter italic text-glow underline decoration-blue-600/30">Hiring.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
             Join a global collective of visionaries architecting the next era of technical excellence. Netwit is looking for high-performance talent to scale our global distributed capability.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#positions" className="group relative px-8 py-4 bg-blue-600 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:bg-blue-500">
               Explore 200+ Positions
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Our Culture <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">200<span className="text-blue-500 text-2xl font-black ml-1">+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Open Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">100<span className="text-cyan-400 text-2xl ml-1">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Remote Friendly</div>
            </div>
          </div>
        </div>

        {/* Right Column / Hiring Hub Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Hiring Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-400" />
                     </div>
                     <span className="text-[10px] font-bold text-blue-400 bg-blue-600/10 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-600/10">
                        OPPORTUNITY ACTIVE
                     </span>
                  </div>

                  <div className="space-y-6 flex-1">
                     <div className="text-xs text-slate-500 font-mono uppercase tracking-[0.3em] font-bold">Protocol // CAREER.NEXT_GEN</div>
                     
                     <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-glow transition-all italic underline decoration-blue-600/30">
                        Netwit Global Team: Join the High-Velocity Flow.
                     </h2>
                     
                     <div className="flex items-center gap-6 mt-10">
                        <div className="flex-1 bg-white/5 p-4 rounded-xl text-center border border-white/5">
                           <span className="block text-[8px] text-slate-500 uppercase tracking-widest">Growth</span>
                           <span className="text-lg font-black text-white">Aggressive</span>
                        </div>
                        <div className="flex-1 bg-white/5 p-4 rounded-xl text-center border border-white/5">
                           <span className="block text-[8px] text-slate-500 uppercase tracking-widest">Habitat</span>
                           <span className="text-lg font-black text-cyan-500">Verified</span>
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Verified Employer Trust</span>
                     </div>
                     <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
               </div>

               {/* Milestone Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-blue-600 text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(59,130,246,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Zap className="w-6 h-6 fill-white text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Active Edge</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest">Global Payout</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Globe className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
