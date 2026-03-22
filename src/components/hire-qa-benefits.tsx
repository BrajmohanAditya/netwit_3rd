"use client";

import { Shield, BugOff, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function QaBenefits() {
  const points = [
    "Catch regressions before they reach production",
    "Reduce support tickets and bad app ratings",
    "Release updates twice as fast with CI/CD",
    "Pre-vetted QA engineers ready to scale instantly",
    "Comprehensive test documentation and reporting",
    "Both black-box manual and white-box automated logic"
  ];

  return (
    <section className="bg-gradient-to-b from-[#070707] to-[#000000] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Stop Paying Your Users <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">To Find Your Bugs.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            When users encounter a broken checkout, a crashing app, or a secure data leak, they don't file a bug report—they leave. Deploying an elite QA team is the most effective insurance policy you can buy for your software investment.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
             Build Your QA Suite
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0c0c0c] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group">
              <BugOff className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">99%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Defect Removal</span>
           </div>
           
           <div className="bg-[#0c0c0c] border border-white/5 p-8 rounded-3xl hover:border-cyan-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group">
              <Rocket className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">2x</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Release Velocity</span>
           </div>
           
           <div className="bg-[#0c0c0c] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group">
              <Shield className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">$0</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Cost of Reputation</span>
           </div>
           
           <div className="bg-gradient-to-br from-emerald-600 to-teal-700 border border-white/5 p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Automate it.</h4>
              <p className="text-sm text-emerald-100 leading-relaxed relative z-10 font-light">Transform manual slog into continuous, instantaneous CI/CD automated test verification.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
