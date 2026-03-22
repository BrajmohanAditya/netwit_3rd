"use client";

import { CheckCircle2, Bot, Library, LineChart } from "lucide-react";
import Link from "next/link";

export function PythonBenefits() {
  const points = [
    "Absolute monopoly over the entire Artificial Intelligence (AI) and Machine Learning (ML) sectors.",
    "Unrivaled ecosystem of data science tools (NumPy, SciPy, Pandas).",
    "Highly readable, almost English-like syntax drastically minimizes technical debt.",
    "FastAPI allows Python APIs to rival the speed of NodeJS and Go.",
    "Universally adopted across academia, finance, and major Big Tech corporations.",
    "Seamlessly interfaces directly with lower-level C and C++ libraries for hardware speed."
  ];

  return (
    <section className="bg-gradient-to-b from-[#0b101e] to-[#04070d] py-24 relative overflow-hidden text-white border-t border-[#1a2542] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#FFD43B]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Future-Proof <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE873] to-[#10b981]">Data Architecture.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            If your backend lacks Python, you are locked out of the AI revolution. By building your core infrastructure in Python today, you natively prepare your system to integrate with transformers, vector databases, and deep learning models tomorrow.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#FFD43B] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#FFD43B] text-[#0b101e] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,212,59,0.3)] hover:shadow-[0_0_50px_rgba(255,212,59,0.5)]">
             Boot Up Python Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0f1629]/50 border border-[#1a2542] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#121a30] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Bot className="w-8 h-8 text-[#10b981] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">AI</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Native ML Integration</span>
           </div>
           
           <div className="bg-[#0f1629]/50 border border-[#1a2542] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#121a30] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <LineChart className="w-8 h-8 text-[#FFD43B] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Data</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Science Ready</span>
           </div>
           
           <div className="bg-[#0f1629]/50 border border-[#1a2542] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#121a30] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Library className="w-8 h-8 text-[#306998] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">PyPI</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Massive Package Matrix</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#1b2640] to-[#0c1322] border border-[#306998]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#306998]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">FastAPI.</h4>
              <p className="text-sm text-blue-200/70 leading-relaxed relative z-10 font-light">Python is no longer 'slow'. By utilizing modern ASGI servers like Uvicorn, Python APIs easily handle massive modern internet loads.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
