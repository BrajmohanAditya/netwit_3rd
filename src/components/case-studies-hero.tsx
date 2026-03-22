"use client";

import { ArrowRight, BarChart3, Globe, LineChart, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function CaseStudiesHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#050608] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Success Emerald & Data Teal Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#10B981]/15 via-[#059669]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#3b82f6]/10 via-[#10B981]/15 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Metric Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 backdrop-blur-xl shadow-lg">
            <LineChart className="w-4 h-4 text-[#10B981]" />
            <span className="text-[#10B981] text-xs font-semibold tracking-widest uppercase">Global Success Metrics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Proven <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#3b82f6] font-extrabold tracking-tighter">Impact.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Real transformations for enterprise leaders. Explore how we architect scalable solutions that drive measurable growth, operational excellence, and digital supremacy.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#cases" className="group relative px-8 py-4 bg-[#10B981] text-[#050608] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:bg-[#059669]">
               Browse Case Studies
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Our Methodology <ArrowRight className="w-4 h-4 text-[#10B981]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">500<span className="text-[#10B981] text-2xl">+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Succesful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">98<span className="text-[#10B981] text-2xl">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Retention Rate</div>
            </div>
          </div>
        </div>

        {/* Right Column / Visual Representation */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Glass Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col p-8">
                  
                  <div className="flex justify-between items-start mb-8">
                     <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-[#10B981]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#10B981]/20">
                        Quarterly Growth
                     </span>
                  </div>

                  <div className="space-y-6 flex-1">
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#10B981] to-[#3b82f6] w-[75%] animate-[grow_2s_ease-out_forwards]"></div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                           <span className="block text-xs text-slate-400 mb-1 leading-none uppercase tracking-tighter">Scalability</span>
                           <span className="text-2xl font-bold text-white">4.2x</span>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                           <span className="block text-xs text-slate-400 mb-1 leading-none uppercase tracking-tighter">Efficiency</span>
                           <span className="text-2xl font-bold text-[#10B981]">+65%</span>
                        </div>
                     </div>

                     <div className="bg-[#10B981]/5 border border-[#10B981]/10 p-4 rounded-2xl relative overflow-hidden group">
                        <div className="flex items-center gap-3 mb-2">
                           <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                           <span className="text-[10px] font-bold text-white uppercase tracking-widest">Compliance Audit</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">Infrastructure modernized to meet global enterprise security standards (SOC2/GDPR).</p>
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.05] grayscale">
                           <Globe className="w-24 h-24" />
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                     <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                           <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#050608] bg-slate-800 flex items-center justify-center text-[10px] font-bold`}>
                              {String.fromCharCode(64 + i)}
                           </div>
                        ))}
                     </div>
                     <span className="text-[10px] text-slate-500 font-medium">Verified by Enterprise Partners</span>
                  </div>
               </div>

               {/* Success Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-[#10B981] text-[#050608] p-5 rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.2)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Zap className="w-6 h-6 fill-white text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Rapid ROI</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5">Average 8-month payback</span>
                  </div>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
