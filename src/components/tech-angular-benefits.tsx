"use client";

import { CheckCircle2, Lock, Workflow, Terminal } from "lucide-react";
import Link from "next/link";

export function AngularBenefits() {
  const points = [
    "Google-backed stability and long-term support",
    "Absolute architectural consistency across large teams",
    "Out-of-the-box routing, HTTP clients, and forms",
    "Deeply integrated Ahead-of-Time (AOT) compilation",
    "Dependency injection built-in from the ground up",
    "Seamless integration with NestJS backend stacks"
  ];

  return (
    <section className="bg-gradient-to-b from-[#09090b] to-[#000000] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-rose-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Stop Re-Inventing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DD0031] to-rose-500">The Architecture.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            When you use a library, you spend months debating architecture, state management, and routing. Angular is a full-fledged enterprise framework. It makes those decisions for you, enforcing clean architecture out of the box so your engineers spend their time building product instead of plumbing.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#DD0031] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#DD0031] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#b80029] shadow-[0_0_20px_rgba(221,0,49,0.2)] hover:shadow-[0_0_40px_rgba(221,0,49,0.4)]">
             Hire Angular Experts
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <Terminal className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">CLI</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Standardized Generators</span>
           </div>
           
           <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl hover:border-[#DD0031]/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-xl">
              <Workflow className="w-8 h-8 text-[#DD0031] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">RxJS</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">First-Class Reactive State</span>
           </div>
           
           <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <Lock className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">Type</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Absolute Safety</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#DD0031] to-rose-700 border border-white/5 p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Cross-Platform.</h4>
              <p className="text-sm text-pink-100 leading-relaxed relative z-10 font-light">Share logic flawlessly across Web, Mobile (Ionic), and Desktop (Electron).</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
