"use client";

import { GaugeCircle, Search, Cpu, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function WebAppBenefits() {
  const points = [
    "Pre-Vetted Senior Frontend Engineers",
    "Expertise in modern component libraries",
    "Cross-Browser compatibility guaranteed",
    "Strict Accessibility (a11y) standards",
    "Flawless responsive design capabilities",
    "Continuous integration & deployment alignment"
  ];

  return (
    <section className="bg-gradient-to-b from-[#09090b] to-[#010101] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Future-Proof Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Presence</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            Slow, poorly optimized web apps kill conversions and destroy brand equity. By hiring our highly-specialized web engineers, you guarantee a product that out-performs the competition and scales flawlessly.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]">
             Hire Elite Web Devs
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group">
              <Search className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">#1</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Organic SEO Ranking</span>
           </div>
           
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-cyan-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group">
              <GaugeCircle className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">3x</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Performance Boost</span>
           </div>
           
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group">
              <Cpu className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">100%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Cross-Device Ready</span>
           </div>
           
           <div className="bg-gradient-to-br from-cyan-600 to-blue-600 border border-white/5 p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Stop the lag.</h4>
              <p className="text-sm text-cyan-100 leading-relaxed relative z-10 font-light">Deploy interactive, state-driven user interfaces that react instantly.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
