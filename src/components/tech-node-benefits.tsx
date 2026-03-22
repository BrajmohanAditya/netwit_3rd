"use client";

import { CheckCircle2, Zap, Terminal, Box } from "lucide-react";
import Link from "next/link";

export function NodeBenefits() {
  const points = [
    "JavaScript used across both the Frontend and Backend.",
    "Chrome V8 Engine compiles JS directly to machine code.",
    "10M+ NPM libraries to instantly solve complex logic.",
    "Native support for JSON data serialization without ORMs.",
    "Extremely efficient hardware usage compared to Ruby/PHP.",
    "Perfectly orchestrated for modern serverless (AWS Lambda)."
  ];

  return (
    <section className="bg-gradient-to-b from-[#0d1117] to-[#010409] py-24 relative overflow-hidden text-white border-t border-[#30363d]">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-emerald-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FA04E] to-emerald-400">Full-Stack Economy.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            Context switching between backend Java and frontend React destroys developer velocity. By unifying your entire product stack under Node.js Server environments, your engineering team speaks a single, universal language.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#5FA04E] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#339933] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(51,153,51,0.3)] hover:shadow-[0_0_40px_rgba(51,153,51,0.5)]">
             Hire Node Backends
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#161b22] border border-[#30363d] p-8 rounded-3xl hover:border-[#339933]/50 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <Zap className="w-8 h-8 text-[#5FA04E] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">V8</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Google JS Engine</span>
           </div>
           
           <div className="bg-[#161b22] border border-[#30363d] p-8 rounded-3xl hover:border-cyan-500/50 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-xl">
              <Terminal className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">I/O</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Asynchronous Ops</span>
           </div>
           
           <div className="bg-[#161b22] border border-[#30363d] p-8 rounded-3xl hover:border-[#f5b331]/50 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <Box className="w-8 h-8 text-[#f5b331] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">NPM</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Infinite Packages</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#339933] to-[#1e5c1e] border border-[#30363d] p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Microservices.</h4>
              <p className="text-sm text-green-100 leading-relaxed relative z-10 font-bold">Decouple logic. Spin up highly independent Node APIs inside isolated Docker swarms.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
