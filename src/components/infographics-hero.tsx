"use client";

import { ArrowRight, BarChart3, Layout, PieChart, Share2, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export function InfographicsHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#050805] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Visual Lime & Intelligent Cyan Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#84cc16]/15 via-[#06b6d4]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#fbbf24]/10 via-[#84cc16]/15 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Cartesian Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(132,204,22,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#84cc16]/30 bg-[#84cc16]/10 backdrop-blur-xl shadow-lg">
            <Layout className="w-4 h-4 text-[#a3e635]" />
            <span className="text-[#a3e635] text-xs font-semibold tracking-widest uppercase">Simplifying Architectural Complexity</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Visual <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-[#facc15] to-[#22d3ee] font-extrabold tracking-tighter italic">Intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Engineered for clarity. Our infographics translate high-level technical strategies into actionable visual blueprints for immediate organizational alignment.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#gallery" className="group relative px-8 py-4 bg-[#84cc16] text-[#050805] font-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(132,204,22,0.3)] hover:bg-[#65a30d]">
               Explore Visual Gallery
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Our Design System <ArrowRight className="w-4 h-4 text-[#a3e635]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">HD<span className="text-[#a3e635] text-2xl font-black ml-1">#</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: High Fidelity</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Instant<span className="text-[#a3e635] text-2xl ml-1">●</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Updates: Live Insights</div>
            </div>
          </div>
        </div>

        {/* Right Column / Infographic Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Data Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-[#84cc16]/10 border border-[#84cc16]/20 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-[#a3e635]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#a3e635] bg-[#84cc16]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#84cc16]/10">
                        Visual Blueprint
                     </span>
                  </div>

                  <div className="space-y-6 flex-1">
                     <div className="text-xs text-slate-500 font-mono uppercase tracking-[0.3em]">Data Layer // V.4.0</div>
                     
                     <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#a3e635] transition-colors italic">
                        The Global DevOps Flow: From Code to Consumer.
                     </h2>
                     
                     {/* Simplified Data Viz Abstract */}
                     <div className="flex items-end gap-2 h-20 w-full opacity-30 mt-8">
                        {[40, 70, 45, 90, 60, 100, 30].map((h, i) => (
                           <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-[#84cc16] to-[#06b6d4]" style={{height: `${h}%`}}></div>
                        ))}
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase mb-1">Clarity Score</span>
                        <span className="text-xs text-white font-black tracking-tight tracking-widest">99.8% ACCURATE</span>
                     </div>
                     <div className="w-12 h-12 rounded-full bg-white text-[#050805] flex items-center justify-center shadow-[0_0_30px_rgba(132,204,22,0.3)] group-hover:bg-[#a3e635] group-hover:scale-110 transition-all">
                        <Share2 className="w-5 h-5 group-hover:animate-pulse" />
                     </div>
                  </div>
               </div>

               {/* Data Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-[#84cc16] text-[#050805] p-5 rounded-2xl shadow-[0_20px_50px_rgba(132,204,22,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Zap className="w-6 h-6 fill-[#050805] text-[#050805]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Active Intel</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest">Global Series</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <PieChart className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
