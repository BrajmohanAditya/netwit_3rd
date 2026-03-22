"use client";

import { TrendingUp, Lock, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function EcommerceBenefits() {
  const points = [
    "Pre-Vetted Headless Commerce Architects",
    "Flawless Mobile-First Execution",
    "Black-Friday Grade Infrastructure",
    "Absolute PCI-DSS Data Security",
    "Conversion-Obsessed UI/UX Designers",
    "Custom Liquid & Shopify App Development"
  ];

  return (
    <section className="bg-gradient-to-b from-[#050505] to-[#000000] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-pink-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Stop Losing Sales to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Bad Code.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            In E-Commerce, technical debt equals literal lost revenue. Off-the-shelf themes won't cut it when scaling to enterprise volumes. Partner with specialized engineers who build custom, conversion-maximized stores capable of handling peak global traffic.
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
             Assemble Your Dev Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0a0a0f] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group">
              <Zap className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">99.9%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Historical Uptime</span>
           </div>
           
           <div className="bg-[#0a0a0f] border border-white/5 p-8 rounded-3xl hover:border-pink-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group">
              <TrendingUp className="w-8 h-8 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">35%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Average ROAS Lift</span>
           </div>
           
           <div className="bg-[#0a0a0f] border border-white/5 p-8 rounded-3xl hover:border-cyan-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group">
              <Lock className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">Zero</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Data Breaches</span>
           </div>
           
           <div className="bg-gradient-to-br from-emerald-600 to-teal-700 border border-white/5 p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Capture Everything.</h4>
              <p className="text-sm text-emerald-100 leading-relaxed relative z-10 font-light">Eliminate cart abandonment with frictionless, sub-second checkout loading.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
