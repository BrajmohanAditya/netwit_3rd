"use client";

import { ArrowRight, BarChart3, CheckCircle, Cpu, Globe, Layers, Microscope, Sparkles, Zap, Database, Activity, PieChart } from "lucide-react";
import Link from "next/link";

export function DataSmartzHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#020617] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* High-Fidelity Sapphire & Arctic Blue Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#1e40af]/20 via-[#1e3a8a]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#0ea5e9]/10 via-[#1e3a8a]/10 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Precision Data Grid Mesh Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-xl shadow-lg">
            <Database className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-xs font-semibold tracking-widest uppercase italic text-glow_blue">The 360 Intelligence Infrastructure Protocol</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Data Smartz. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 font-extrabold tracking-tighter italic text-glow_blue underline decoration-sky-600/30">Actionable 360.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
             We architect high-fidelity data ecosystems for global SaaS enterprises. Data Smartz 360 is the definitive protocol for technical intelligence and predictive evolution.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#intelligence" className="group relative px-8 py-4 bg-sky-600 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:bg-sky-500 italic">
               Launch Data Engine
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md italic">
               Intelligence ROI Sync <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter italic">360<span className="text-sky-500 text-2xl font-black ml-1">°</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 italic">Intelligence View</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter italic">100<span className="text-blue-400 text-2xl font-black ml-1">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 italic">Data Integrity Verified</div>
            </div>
          </div>
        </div>

        {/* Right Column / Intelligence Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Intelligence Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#0a0f1d]/60 backdrop-blur-3xl border border-sky-500/20 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-sky-600/10 border border-sky-600/20 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-sky-400" />
                     </div>
                     <span className="text-[10px] font-bold text-sky-400 bg-sky-600/10 px-3 py-1 rounded-full uppercase tracking-widest border border-sky-600/10 italic">
                        ENGINE ACTIVE
                     </span>
                  </div>

                  <div className="space-y-6 flex-1">
                     <div className="text-xs text-slate-500 font-mono uppercase tracking-[0.3em] font-bold">Standard // DATA.360_VISUAL</div>
                     
                     <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-glow_blue transition-all italic underline decoration-sky-600/30">
                        The Insight Hub: Predictive Analytics Engine.
                     </h2>
                     
                     <div className="flex items-center gap-6 mt-10">
                        <div className="flex-1 bg-white/5 p-4 rounded-xl text-center border border-white/5">
                           <span className="block text-[8px] text-slate-500 uppercase tracking-widest italic">Latency</span>
                           <span className="text-lg font-black text-white italic">Zero-Delay</span>
                        </div>
                        <div className="flex-1 bg-white/5 p-4 rounded-xl text-center border border-white/5">
                           <span className="block text-[8px] text-slate-500 uppercase tracking-widest italic">Integrity</span>
                           <span className="text-lg font-black text-sky-500 italic">Target Match</span>
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-sky-500" />
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase italic">Neural Network: Optimal</span>
                     </div>
                     <Sparkles className="w-5 h-5 text-sky-400" />
                  </div>
               </div>

               {/* Asset Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-sky-600 text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(14,165,233,0.4)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <PieChart className="w-6 h-6 fill-white text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight italic uppercase">Big Data Ops</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest font-mono italic">Scalable Feed: 100%</span>
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
