"use client";

import { ArrowRight, Leaf, Code2, Zap, LayoutTemplate, Box, Sparkles, TerminalSquare } from "lucide-react";
import Link from "next/link";

export function VueHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0c1322] text-white flex items-center overflow-hidden pt-20">
      {/* Vue Green / Nuxt Emerald Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[0%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#42b883]/20 via-emerald-800/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#35495e]/30 via-[#42b883]/10 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Progressive Dots Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#42b883]/30 bg-[#42b883]/10 backdrop-blur-md shadow-[0_0_20px_rgba(66,184,131,0.15)]">
            <Leaf className="w-4 h-4 text-[#42b883]" />
            <span className="text-[#42b883] text-xs font-bold tracking-widest uppercase">The Progressive Framework</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Elegantly <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42b883] to-emerald-400">Reactive.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Build applications that scale from a single dropped-in library to a massive Nuxt.js SSR enterprise platform. We leverage Vue 3 and the Composition API to write hyper-readable, blazing-fast code.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#42b883] text-[#0f172a] font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-[#3aa372] shadow-[0_0_30px_rgba(66,184,131,0.3)]">
               Hire Vue Developers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Nuxt ecosystem <ArrowRight className="w-4 h-4 text-[#42b883]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">Vue <span className="text-[#42b883]">3</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Composition API</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">~16<span className="text-[#42b883]">kb</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Minified Size</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Vue Component Syntax */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main IDE Window (.vue SFC) */}
               <div className="absolute top-[5%] left-[5%] w-[110%] md:w-[110%] bg-[#1e1e24] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#2d2d36] flex items-center px-4 justify-between select-none border-b border-[#1e1e24]">
                     <div className="flex items-center gap-2">
                        <TerminalSquare className="w-4 h-4 text-[#42b883]"/>
                        <span className="text-[10px] text-slate-400 font-mono tracking-wider">Dashboard.vue</span>
                     </div>
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-500/50"></div>
                     </div>
                  </div>
                  
                  {/* Editor Content - SFC (Template/Script/Style) */}
                  <div className="p-5 font-mono text-[11px] md:text-[13px] leading-[1.7] text-gray-300 relative overflow-hidden bg-[#1e1e24]">
                     <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#282830] border-r border-[#333] flex flex-col items-center py-5 text-[#666] select-none">
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                     </div>
                     <div className="pl-6">
                        <span className="text-[#89DDFF]">&lt;</span><span className="text-[#FFCB6B]">script </span><span className="text-[#82AAFF]">setup</span><span className="text-[#89DDFF]">&gt;</span><br/>
                        <span className="text-[#C792EA]">import</span> {`{ `}<span className="text-[#82AAFF]">ref</span>, <span className="text-[#82AAFF]">computed</span>{` }`} <span className="text-[#C792EA]">from</span> <span className="text-[#C3E88D]">'vue'</span><br/>
                        <span className="text-[#C792EA]">import</span> {`{ `}<span className="text-[#82AAFF]">useStore</span>{` }`} <span className="text-[#C792EA]">from</span> <span className="text-[#C3E88D]">'@/stores/main'</span><br/>
                        <br/>
                        <span className="text-[#89DDFF]">const</span> <span className="text-[#82AAFF]">store</span> = <span className="text-[#82AAFF]">useStore</span>()<br/>
                        <span className="text-[#89DDFF]">const</span> <span className="text-[#82AAFF]">revenue</span> = <span className="text-[#82AAFF]">ref</span>(<span className="text-[#F78C6C]">249500</span>)<br/>
                        <span className="text-[#89DDFF]">const</span> <span className="text-[#82AAFF]">formatted</span> = <span className="text-[#82AAFF]">computed</span>(() <span className="text-[#C792EA]">=&gt;</span> <span className="text-[#C3E88D]">{"`$${revenue.value}`"}</span>)<br/>
                        <span className="text-[#89DDFF]">&lt;/</span><span className="text-[#FFCB6B]">script</span><span className="text-[#89DDFF]">&gt;</span><br/>
                        <br/>
                        <span className="text-[#89DDFF]">&lt;</span><span className="text-[#FFCB6B]">template</span><span className="text-[#89DDFF]">&gt;</span><br/>
                        &nbsp;&nbsp;<span className="text-[#89DDFF]">&lt;</span><span className="text-[#FFCB6B]">div </span><span className="text-[#82AAFF]">class</span>=<span className="text-[#C3E88D]">"dashboard-metric"</span><span className="text-[#89DDFF]">&gt;</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`{{ `}<span className="text-[#82AAFF]">formatted</span>{` }}`}<br/>
                        &nbsp;&nbsp;<span className="text-[#89DDFF]">&lt;/</span><span className="text-[#FFCB6B]">div</span><span className="text-[#89DDFF]">&gt;</span><br/>
                        <span className="text-[#89DDFF]">&lt;/</span><span className="text-[#FFCB6B]">template</span><span className="text-[#89DDFF]">&gt;</span>
                     </div>
                  </div>
               </div>

               {/* Pinia State Tag */}
               <div className="absolute top-[35%] -left-[15%] bg-[#111827] border border-[#f5b331]/30 p-3 rounded-2xl shadow-[0_20px_50px_rgba(245,179,49,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-[#f5b331]/50 bg-[#f5b331]/10 flex items-center justify-center">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#f5b331" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <div>
                     <span className="block text-xs font-bold text-white uppercase tracking-widest">Pinia Store</span>
                     <span className="block text-[9px] text-[#f5b331] font-mono mt-0.5">HMR active</span>
                  </div>
               </div>

               {/* NuxtJS / SSR Badge */}
               <div className="absolute top-[80%] right-[-5%] bg-white border border-gray-200 py-3 px-4 rounded-xl shadow-[0_20px_40px_rgba(255,255,255,0.15)] z-40 transform rotate-6 hover:scale-105 transition-transform flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00DC82] flex items-center justify-center">
                     <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 1.5L24 19.5H19.5L13.5 9L7.5 19.5H3L13.5 1.5Z"/><path d="M13.5 13L17 19.5H10L13.5 13Z"/></svg>
                  </div>
                  <div>
                     <span className="block text-[10px] font-bold text-black uppercase tracking-widest">Nuxt 3</span>
                     <span className="block text-[8px] text-gray-500">Universal SSR Mounted</span>
                  </div>
               </div>

               {/* Vue Logo Giant Silhouette */}
               <div className="absolute -top-[10%] -right-[10%] w-48 h-48 opacity-20 z-0 animate-[pulse_6s_ease-in-out_infinite]">
                  <svg viewBox="0 0 196 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M121 0H196L98 170L0 0H75L98 39.5L121 0Z" fill="#42B883"/>
                    <path d="M121 0H153L98 95L43 0H75L98 39.5L121 0Z" fill="#35495E"/>
                  </svg>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
