"use client";

import { ArrowRight, BookOpen, Clock, Newspaper, Search, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export function BlogHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#050608] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Insight Blue & News White Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#3b82f6]/15 via-[#1e40af]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#F8FAFC]/10 via-[#3b82f6]/15 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Feed Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 backdrop-blur-xl shadow-lg">
            <Newspaper className="w-4 h-4 text-[#60A5FA]" />
            <span className="text-[#60A5FA] text-xs font-semibold tracking-widest uppercase">Expert Technical Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#3b82f6] to-[#F8FAFC] font-extrabold tracking-tighter">Intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Stay ahead of the architectural curve. We share deep technical analyses, DevOps trends, and engineering breakthroughs directly from our global labs.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="relative flex-1 min-w-[300px] max-w-md group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#3b82f6] transition-colors" />
               <input 
                  type="text" 
                  placeholder="Search technical insights..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm text-slate-300 focus:outline-none focus:border-[#3b82f6]/50 focus:bg-white/10 transition-all placeholder:text-slate-600 shadow-2xl"
               />
            </div>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Weekly<span className="text-blue-400 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Breakthrough News</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Lead<span className="text-blue-400 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">The Innovation Feed</div>
            </div>
          </div>
        </div>

        {/* Right Column / Featured Post Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Blog Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#0d1017]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group">
                  
                  {/* Image Placeholder with Gradient */}
                  <div className="h-2/5 w-full bg-gradient-to-br from-[#1e40af] via-blue-900 to-[#0d1017] relative">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.2),transparent)]"></div>
                     <div className="absolute bottom-6 left-8 flex gap-2">
                        <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">Featured</span>
                        <span className="px-3 py-1 bg-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md">Architectural</span>
                     </div>
                  </div>

                  <div className="p-8 space-y-4 flex-1">
                     <div className="flex items-center gap-4 text-slate-500 text-xs font-mono uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 8 min read</span>
                        <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> High Impact</span>
                     </div>
                     
                     <h2 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors leading-tight">
                        Moving Beyond Kubernetes: The Future of Cloud Abstraction in 2025.
                     </h2>
                     
                     <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-2">
                        Abstracting complexity for global development teams. How we built the next-generation engine for serverless platforms.
                     </p>

                     <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-blue-600 border border-blue-400 shadow-xl flex items-center justify-center font-black text-xs">EL</div>
                           <span className="text-xs text-white font-bold opacity-80">Edmond L. - CTO</span>
                        </div>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#3b82f6] transition-colors">
                           <ArrowRight className="w-5 h-5" />
                        </Link>
                     </div>
                  </div>
               </div>

               {/* Trending Tag */}
               <div className="absolute top-[65%] -right-[15%] bg-[#3b82f6] text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(59,130,246,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Zap className="w-6 h-6 fill-white text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Trending Insight</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5">Updated 2h ago</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <BookOpen className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
