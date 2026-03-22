"use client";

import { CheckCircle2, PiggyBank, Clock, HeartHandshake, Zap } from "lucide-react";
import Link from "next/link";

export function TeamBenefits() {
  const points = [
    "Zero Recruitment or Headhunter Fees",
    "No complicated HR payroll or local compliance",
    "Replace underperforming talent instantly",
    "Absolute focus on your product roadmap",
    "Direct communication with your developers",
    "Fixed, predictable monthly burn-rate"
  ];

  return (
    <section className="bg-gradient-to-b from-[#0c0c0e] to-[#000000] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-violet-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            The Economics of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Intelligent Scaling.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            In-house hiring is rigid and incredibly expensive. Freelancer marketplaces are chaotic and unreliable. A dedicated team model gives you the absolute control of full-time employees, combined with the elastic scalability of an agency.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-amber-500 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]">
             Draft Your Squad
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-amber-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <Clock className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">48 Hrs</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">To Complete Setup</span>
           </div>
           
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-orange-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-xl">
              <PiggyBank className="w-8 h-8 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">40%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Reduced Labor Cost</span>
           </div>
           
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-violet-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <HeartHandshake className="w-8 h-8 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">96%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Talent Retention</span>
           </div>
           
           <div className="bg-gradient-to-br from-amber-600 to-orange-700 border border-white/5 p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Agile velocity.</h4>
              <p className="text-sm text-yellow-100 leading-relaxed relative z-10 font-light">Eliminate blockers and hit every deployment deadline with perfect consistency.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
