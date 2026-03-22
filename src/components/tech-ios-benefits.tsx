"use client";

import { CheckCircle2, History, Banknote, Shield } from "lucide-react";
import Link from "next/link";

export function IosBenefits() {
  const points = [
    "iOS generates over 60% of all global app revenue despite holding less market share.",
    "Seamlessly bridge millions of lines of C and Objective-C logic into Modern Swift.",
    "Eliminate memory leaks completely via strict ARC (Automatic Reference Counting).",
    "Highest-in-class security preventing reverse engineering of intellectual property.",
    "Standardized enterprise deployment via Apple Business Manager (ABM).",
    "Absolute stability across all iPads, iPhones, and macOS operating systems."
  ];

  return (
    <section className="bg-gradient-to-b from-[#020816] to-[#01030a] py-24 relative overflow-hidden text-white border-t border-[#1e2d4a] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#007AFF]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-blue-400">Scalability.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            When you build for Fortune 500s or massive consumer platforms, toy architectures fail. We establish deeply routed CI/CD automation, write thousands of UI integration tests, and strictly isolate Apple SDKs behind pure clean-architecture principles.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,122,255,0.3)] hover:shadow-[0_0_50px_rgba(0,122,255,0.5)]">
             Audit iOS Architecture
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0d1627]/50 border border-[#1e2d4a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#111d35] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Banknote className="w-8 h-8 text-[#34C759] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">60%</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">App Store ROI</span>
           </div>
           
           <div className="bg-[#0d1627]/50 border border-[#1e2d4a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#111d35] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <History className="w-8 h-8 text-[#007AFF] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Legacy</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Obj-C Integration</span>
           </div>
           
           <div className="bg-[#0d1627]/50 border border-[#1e2d4a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#111d35] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Shield className="w-8 h-8 text-[#5856D6] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">ABM</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Enterprise Distro</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#004e9a] to-[#002f5c] border border-[#007AFF]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#007AFF]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">CI/CD Tested.</h4>
              <p className="text-sm text-blue-200 leading-relaxed relative z-10 font-light">Eliminate launch-day anxiety. 100% test coverage using XCTest and automated cloud building pipelines.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
