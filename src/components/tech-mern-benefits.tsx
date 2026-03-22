"use client";

import { CheckCircle2, Zap, Orbit, Code2, Database } from "lucide-react";
import Link from "next/link";

export function MernBenefits() {
  const points = [
    "Absolute JavaScript uniformity heavily reduces context switching for engineering teams.",
    "Immediate developer market availability; almost all modern engineers are fluent in JS.",
    "NoSQL Document structuring effortlessly bypasses frustrating SQL migrations.",
    "NPM package registry holds over 3 million pre-built solutions instantly accessible.",
    "Perfect for heavily real-time applications like websocket chats or dynamic dashboards.",
    "Backed implicitly by the tech giants who originally built the components (Meta/Facebook React)."
  ];

  return (
    <section className="bg-gradient-to-b from-[#05080a] to-[#020405] py-24 relative overflow-hidden text-white border-t border-[#16202c] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#61DAFB]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#85dffd] to-[#61DAFB]">Velocity.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            Startups die when technology gets in the way of iteration. The MERN stack is the explicit industry standard for rapid prototyping through production scale, natively sharing syntax, rules, and typing across the entire hardware network.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#61DAFB] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#61DAFB] text-[#05080a] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(97,218,251,0.3)] hover:shadow-[0_0_50px_rgba(97,218,251,0.5)]">
             Spin Up MERN Engineers
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0b1016]/50 border border-[#16202c] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0f1721] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Orbit className="w-8 h-8 text-[#61DAFB] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">React</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Virtual DOM Supremacy</span>
           </div>
           
           <div className="bg-[#0b1016]/50 border border-[#16202c] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0f1721] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Database className="w-8 h-8 text-[#47A248] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">NoSQL</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Schema-less Data</span>
           </div>
           
           <div className="bg-[#0b1016]/50 border border-[#16202c] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0f1721] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Code2 className="w-8 h-8 text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">JS</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Isomorphic Syntax</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#0a1824] to-[#04090d] border border-[#61DAFB]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#61DAFB]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">V8 Engine.</h4>
              <p className="text-sm text-cyan-200/70 leading-relaxed relative z-10 font-light">Node.js leverages Chrome's hyper-optimized C++ V8 engine to execute JavaScript at backend speeds.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
