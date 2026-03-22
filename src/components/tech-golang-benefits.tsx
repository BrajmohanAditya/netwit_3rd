"use client";

import { CheckCircle2, Zap, Cpu, Box } from "lucide-react";
import Link from "next/link";

export function GolangBenefits() {
  const points = [
    "Compile directly to incredibly tiny machine-code binaries in milliseconds.",
    "Near-C++ performance, but with managed syntax and garbage collection.",
    "Extensively trusted by cloud giants (Docker, Kubernetes, Terraform are all written in Go).",
    "Absolute eradication of callback hell and promise chaining syntax.",
    "Trivally spin up 100,000+ background workers utilizing native Goroutines.",
    "Pristine memory utilization, dropping AWS orchestration costs drastically."
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a0f12] to-[#040608] py-24 relative overflow-hidden text-white border-t border-[#1a2530] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#00ADD8]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Operational <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADD8] to-emerald-400">Velocity.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            Monoliths consume entirely too much server RAM. By refactoring CPU-intensive backend bottlenecks into ultra-lean Go microservices, you drastically slash your AWS hosting overhead while simultaneously expanding your parallel load bandwidth by 10x.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#00ADD8] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#00ADD8] text-[#0a0f12] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,173,216,0.3)] hover:shadow-[0_0_50px_rgba(0,173,216,0.5)]">
             Spin Up Go Engineers
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0d1318]/50 border border-[#1a2530] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#111a22] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Zap className="w-8 h-8 text-[#00ADD8] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Fast</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">C++ Level Speed</span>
           </div>
           
           <div className="bg-[#0d1318]/50 border border-[#1a2530] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#111a22] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Cpu className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">-80%</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Memory Overhead</span>
           </div>
           
           <div className="bg-[#0d1318]/50 border border-[#1a2530] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#111a22] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Box className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">10MB</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Docker Containers</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#062630] to-[#041217] border border-[#00ADD8]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00ADD8]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Google Native.</h4>
              <p className="text-sm text-cyan-200/70 leading-relaxed relative z-10 font-light">Architected by the exact engineers who distribute Google's search algorithms. Perfect for scaling.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
