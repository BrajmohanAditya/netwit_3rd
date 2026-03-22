"use client";

import { CheckCircle2, Shield, Zap, TrendingDown } from "lucide-react";
import Link from "next/link";

export function TestingBenefits() {
  const points = [
    "Dramatically shield your brand's reputation by preventing catastrophic UI/DB bugs before users ever see them.",
    "Convert QA into code: Automated E2E specs run instantaneously without paying ongoing manual hourly salaries.",
    "Engineers code vastly faster when deep testing suites instantly scream if they broke peripheral legacy logic.",
    "Identify backend architectural bottlenecks immediately via K6 stress-loads before scaling AWS.",
    "Close dangerous security loopholes (XSS, Injection) ensuring compliance with GDPR, SOC2, and HIPAA.",
    "Stop wasting engineering hours manually reviewing staging links. Trust the continuous automated pipeline."
  ];

  return (
    <section className="bg-gradient-to-b from-[#050608] to-[#020203] py-24 relative overflow-hidden text-white border-t border-[#181a20] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#10B981]/5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Confidence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#10B981]">Delivery.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            Software isn't finished simply because a developer claims it is. By offloading quality assurance directly into impenetrable Cypress automation and relentless manual interrogation, you guarantee total market readiness.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-[#050608] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]">
             Spin Up QA Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0b0c10]/50 border border-[#181a20] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0f1115] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Shield className="w-8 h-8 text-[#10B981] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Zero</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Critical Regressions</span>
           </div>
           
           <div className="bg-[#0b0c10]/50 border border-[#181a20] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0f1115] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <TrendingDown className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">-60%</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Manual Testing Costs</span>
           </div>
           
           <div className="bg-[#0b0c10]/50 border border-[#181a20] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0f1115] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Zap className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">10X</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Faster PR Merges</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#061814] to-[#040a0e] border border-[#10B981]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#10B981]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Code Coverage.</h4>
              <p className="text-sm text-emerald-100/70 leading-relaxed relative z-10 font-light">Guarantee mathematically pristine production pushes by enforcing automated validations.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
