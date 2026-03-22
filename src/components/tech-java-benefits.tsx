"use client";

import { CheckCircle2, Shield, CloudCog, Building2 } from "lucide-react";
import Link from "next/link";

export function JavaBenefits() {
  const points = [
    "Compile once, execute absolutely anywhere (WORA) via the isolated JVM.",
    "Used by over 90% of all Fortune 500 corporations for core infrastructure.",
    "Decades of backward compatibility means code written today will run in 2040.",
    "Extensive, heavily monitored, deeply audited security logic and cryptographic libraries.",
    "Native horizontal scaling designed to sit beautifully inside Google Kubernetes Engine.",
    "The largest global pool of rigorously trained, classically educated senior engineers."
  ];

  return (
    <section className="bg-gradient-to-b from-[#080d15] to-[#04060b] py-24 relative overflow-hidden text-white border-t border-[#17223b] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#007396]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Infinite <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F18E33] to-[#007396]">Durability.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            When you execute millions of financial ledger transactions per minute, scripting languages collapse. Java's absolute immutability, multithreading control, and rigid Spring abstractions are specifically designed to stop catastrophic failures before they enter production.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#6DB33F] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#007396] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,115,150,0.3)] hover:shadow-[0_0_50px_rgba(0,115,150,0.5)]">
             Mobilize Java Architects
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0b111c]/50 border border-[#17223b] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#101826] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Building2 className="w-8 h-8 text-[#007396] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">90%</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Fortune 500 Usage</span>
           </div>
           
           <div className="bg-[#0b111c]/50 border border-[#17223b] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#101826] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <CloudCog className="w-8 h-8 text-[#6DB33F] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">K8s</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Cloud Native Microservices</span>
           </div>
           
           <div className="bg-[#0b111c]/50 border border-[#17223b] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#101826] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Shield className="w-8 h-8 text-[#F18E33] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">ACID</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Absolute Data Integrity</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#042836] to-[#041922] border border-[#007396]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#007396]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">WORA.</h4>
              <p className="text-sm text-sky-200/70 leading-relaxed relative z-10 font-light">Write Once. Run Anywhere. The Java Virtual Machine allows isolated compliance across every cloud hosting fabric globally.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
