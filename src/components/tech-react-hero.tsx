"use client";

import { ArrowRight, Layers, Code2, Zap, LayoutTemplate, Box, Sparkles } from "lucide-react";
import Link from "next/link";

export function ReactHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#000000] text-white flex items-center overflow-hidden pt-20">
      {/* React Cyan Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[0%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#61DAFB]/20 via-cyan-800/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-indigo-600/10 via-[#61DAFB]/10 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Atomic Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#61DAFB]/30 bg-[#61DAFB]/5 backdrop-blur-md shadow-[0_0_20px_rgba(97,218,251,0.1)]">
            <Sparkles className="w-4 h-4 text-[#61DAFB]" />
            <span className="text-[#61DAFB] text-xs font-bold tracking-widest uppercase">Elite UI Engineering</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Componentize <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#61DAFB] to-blue-400">Everything.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            Build fluid, blazing-fast user interfaces that your users never want to leave. We architect massively scalable React and Next.js applications driven by the Virtual DOM and Server Components.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
               Hire React Developers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               View Architecture <ArrowRight className="w-4 h-4 text-[#61DAFB]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">0.1<span className="text-[#61DAFB]">s</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Render Speeds</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">100<span className="text-[#61DAFB]">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Reusable Logic</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract React Component Tree */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main UI Skeleton / Dashboard */}
               <div className="absolute top-[10%] left-[5%] w-[110%] md:w-[120%] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default">
                  
                  {/* Mock Browser Header */}
                  <div className="h-10 bg-[#161616] border-b border-white/5 flex items-center px-4 justify-between">
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                     </div>
                     <div className="w-40 h-4 bg-white/5 rounded-full"></div>
                  </div>
                  
                  {/* React Component Layout */}
                  <div className="p-6 relative overflow-hidden h-[300px] flex gap-4">
                     {/* Sidebar Component */}
                     <div className="w-1/4 h-full bg-[#111] rounded-xl border border-white/5 flex flex-col gap-3 p-3">
                        <div className="w-full h-8 bg-white/5 rounded-lg"></div>
                        <div className="w-full h-4 bg-white/5 rounded-sm"></div>
                        <div className="w-3/4 h-4 bg-white/5 rounded-sm"></div>
                     </div>
                     
                     {/* Main Feed Component */}
                     <div className="w-3/4 h-full flex flex-col gap-4">
                        <div className="w-full h-1/4 bg-[#111] rounded-xl border border-white/5 p-3 flex flex-col justify-between">
                           <div className="w-1/3 h-3 bg-[#61DAFB]/40 rounded-sm"></div>
                           <div className="w-full h-8 bg-[#61DAFB]/10 rounded-lg flex items-center px-3">
                               <div className="w-2 h-2 rounded-full bg-[#61DAFB] animate-pulse"></div>
                           </div>
                        </div>
                        
                        <div className="w-full h-3/4 bg-[#111] rounded-xl border border-[#61DAFB]/30 p-4 shadow-[0_0_40px_rgba(97,218,251,0.1)] relative">
                           {/* Floating state badge */}
                           <div className="absolute -top-3 -right-3 bg-[#61DAFB] text-black text-[9px] font-bold px-2 py-1 rounded-md shadow-lg">useState(data)</div>
                           <div className="w-1/2 h-4 bg-white/10 rounded-sm mb-4"></div>
                           <div className="w-full h-full bg-gradient-to-t from-[#61DAFB]/10 to-transparent rounded-lg border border-[#61DAFB]/20 flex items-end p-2 gap-2">
                               <div className="w-1/5 bg-[#61DAFB] h-1/3 rounded-sm"></div>
                               <div className="w-1/5 bg-[#61DAFB] h-1/2 rounded-sm"></div>
                               <div className="w-1/5 bg-[#61DAFB] h-[80%] rounded-sm"></div>
                               <div className="w-1/5 bg-[#61DAFB] h-1/4 rounded-sm"></div>
                               <div className="w-1/5 bg-[#61DAFB] h-[60%] rounded-sm"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Virtual DOM Hover Node */}
               <div className="absolute top-[40%] -left-[10%] bg-[#111111] border border-[#61DAFB]/30 p-3 rounded-2xl shadow-[0_20px_50px_rgba(97,218,251,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-[#61DAFB]/50 bg-[#61DAFB]/10 flex items-center justify-center">
                     <Layers className="w-5 h-5 text-[#61DAFB]" />
                  </div>
                  <div>
                     <span className="block text-xs font-bold text-white uppercase tracking-widest">Virtual DOM</span>
                     <span className="block text-[9px] text-gray-400 mt-0.5">Diffing Algorithm Active</span>
                  </div>
               </div>

               {/* NextJS / SSR Tag */}
               <div className="absolute top-[80%] right-[0%] bg-white border border-gray-200 p-3 rounded-xl shadow-[0_20px_40px_rgba(255,255,255,0.15)] z-40 transform rotate-6 hover:scale-105 transition-transform flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px]">N</div>
                  <div>
                     <span className="block text-[10px] font-bold text-black uppercase tracking-widest">Next.js</span>
                     <span className="block text-[8px] text-gray-500">Server-Side Rendered</span>
                  </div>
               </div>

               {/* React Atom Glowing Logo */}
               <div className="absolute -top-12 -right-8 w-32 h-32 text-[#61DAFB] opacity-40 z-0 animate-[spin_20s_linear_infinite]">
                  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                    <g fill="none" stroke="currentColor" strokeWidth="1">
                      <ellipse rx="11" ry="4.2"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                  </svg>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
