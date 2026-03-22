"use client";

import { CheckCircle2, RefreshCw, Feather, Settings } from "lucide-react";
import Link from "next/link";

export function VueBenefits() {
  const points = [
    "Significantly faster onboarding compared to React or Angular",
    "First-class, native TypeScript support natively in Vue 3",
    "Incredibly small bundle size (~16kb gzipped)",
    "Two-way data binding via v-model for complex form logistics",
    "Absolute official documentation that devs actually enjoy",
    "Effortless adoption—drop it into legacy apps piece by piece"
  ];

  return (
    <section className="bg-gradient-to-b from-[#0c1322] to-[#05080f] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-emerald-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Build Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42b883] to-teal-400">That Doesn't Break.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            You shouldn't have to fight your framework. Vue's reactivity system is deeply intuitive, automatically tracking dependencies behind the scenes. This means you write incredibly concise logic that executes perfectly on the Virtual DOM.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#42b883] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#42b883] text-[#0f172a] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(66,184,131,0.2)] hover:shadow-[0_0_40px_rgba(66,184,131,0.4)]">
             Spin up a Vue Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#121c32] border border-white/5 p-8 rounded-3xl hover:border-[#42b883]/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <RefreshCw className="w-8 h-8 text-[#42b883] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">v-model</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">2-Way Reactivity</span>
           </div>
           
           <div className="bg-[#121c32] border border-white/5 p-8 rounded-3xl hover:border-[#35495e]/60 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-xl">
              <Settings className="w-8 h-8 text-[#35495e] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">Vite</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Instant HMR Builds</span>
           </div>
           
           <div className="bg-[#121c32] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <Feather className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">16kb</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Ultra-light Core</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#42b883] to-teal-700 border border-white/5 p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Drop it in.</h4>
              <p className="text-sm text-green-100 leading-relaxed relative z-10 font-bold">Unlike React/Angular, Vue can be injected cleanly into legacy JS codebases without a complete rewrite.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
