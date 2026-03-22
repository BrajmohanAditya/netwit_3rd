"use client";

import { ArrowRight, BookOpen, Download, GraduationCap, Library, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export function EbooksHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#08050d] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Knowledge Violet & Growth Emerald Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#7e22ce]/20 via-[#10b981]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#10b981]/15 via-[#7e22ce]/15 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Learning Path Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 backdrop-blur-xl shadow-lg">
            <GraduationCap className="w-4 h-4 text-[#10b981]" />
            <span className="text-[#10b981] text-xs font-semibold tracking-widest uppercase">Structured Technical Acceleration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Read & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#a855f7] font-extrabold tracking-tighter italic">Evolve.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Master the engineering stack. From fundamental DevOps to advanced scaling strategies, our eBooks provide the comprehensive roadmaps for modern digital dominance.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#ebooks" className="group relative px-8 py-4 bg-[#10b981] text-[#08050d] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:bg-[#059669]">
               Access Library
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Our Roadmap <ArrowRight className="w-4 h-4 text-[#10b981]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Premium<span className="text-[#10b981] text-2xl font-black ml-1">#</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: Master Edition</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">80K<span className="text-[#10b981] text-2xl ml-1">+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Acquired Knowledge</div>
            </div>
          </div>
        </div>

        {/* Right Column / eBook Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Book Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-[#a855f7]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#10b981]/10">
                        Top Rated
                     </span>
                  </div>

                  <div className="space-y-6 flex-1">
                     <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#10b981] transition-colors italic">
                        DevOps Mastery: Scaling to the Next Billion.
                     </h2>
                     
                     <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-6">
                        <div className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> 250+ Pages</div>
                        <div className="flex items-center gap-2"><TrendingUp className="w-3.5 h-3.5" /> 4.9 Rating</div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase mb-1">Impact Factor</span>
                        <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                           <div className="w-[85%] h-full bg-[#10b981]"></div>
                        </div>
                     </div>
                     <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:bg-[#10b981] group-hover:scale-110 transition-all">
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                     </button>
                  </div>
               </div>

               {/* Growth Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-[#10b981] text-[#08050d] p-5 rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Zap className="w-6 h-6 fill-[#08050d] text-[#08050d]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Rapid Growth</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest">Global Series</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Library className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
