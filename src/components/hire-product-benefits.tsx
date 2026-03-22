"use client";

import { CheckCircle2, DollarSign, Clock, Users } from "lucide-react";
import Link from "next/link";

export function ProductBenefits() {
  const points = [
    "Eliminate 4-Month Recruitment Cycles",
    "Replace Unpredictable Freelancer Quality",
    "Dedicated PM for Transparent Reporting",
    "End-to-End Ownership (Design to Deploy)",
    "Rigorous QA & Automated Testing standards",
    "Intellectual Property strictly protected"
  ];

  return (
    <section className="bg-gradient-to-b from-[#030303] to-[#010101] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Transform Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">Development Economics</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            Building an elite in-house product team from scratch is exorbitantly expensive and fraught with risk. Sourcing a pre-assembled, specialized squad from us drastically reduces your runway burn-rate while guaranteeing enterprise-grade output.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]">
             Hire Your Dedicated Squad
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0a0a0c] border border-white/5 p-8 rounded-3xl hover:border-indigo-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default">
              <Clock className="w-8 h-8 text-indigo-400 mb-4" />
              <span className="text-4xl font-black text-white mb-2">50%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Faster Time-to-Market</span>
           </div>
           
           <div className="bg-[#0a0a0c] border border-white/5 p-8 rounded-3xl hover:border-fuchsia-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default">
              <DollarSign className="w-8 h-8 text-fuchsia-400 mb-4" />
              <span className="text-4xl font-black text-white mb-2">40%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Reduction in Dev Costs</span>
           </div>
           
           <div className="bg-[#0a0a0c] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <span className="text-4xl font-black text-white mb-2">Zero</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Turnover Impact</span>
           </div>
           
           <div className="bg-[#0a0a0c] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden group cursor-default">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Stop the Chaos</h4>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10 font-light">Get a cohesive unit that knows how to ship, rather than managing disjointed freelancers.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
