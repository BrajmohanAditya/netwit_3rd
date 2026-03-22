"use client";

import { CheckCircle2, TrendingUp, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function ErpBenefits() {
  const points = [
    "Pre-vetted Salesforce, SAP, & Dynamics Veterans",
    "Flawless Zero-Downtime Data Migration",
    "High Adoption Rates via Intuitive UI Design",
    "Scalable, Cloud-First Architecture",
    "Post-Deployment Administrative Support",
    "Deep Security & Role-Based Access Controls"
  ];

  return (
    <section className="bg-gradient-to-b from-[#07101d] to-[#01050a] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Align Sales, Marketing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">& Customer Success</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            A poorly implemented CRM causes massive workflow friction and data siloing. Partnering with our implementation consultants guarantees a hyper-tailored system that actively accelerates user productivity and extracts actionable revenue intelligence.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
             Hire certified architects
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0b172a] border border-white/5 p-8 rounded-3xl hover:border-sky-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group">
              <Handshake className="w-8 h-8 text-sky-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">90%</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">User Adoption Rate</span>
           </div>
           
           <div className="bg-[#0b172a] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group">
              <TrendingUp className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">3x</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Revenue Visibility</span>
           </div>
           
           <div className="bg-[#0b172a] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group">
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">0%</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Data Redundancy</span>
           </div>
           
           <div className="bg-gradient-to-br from-blue-700 to-indigo-800 border border-white/5 p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Stop the friction.</h4>
              <p className="text-sm text-blue-100 leading-relaxed relative z-10 font-light">Eliminate duplicate entry and empower your sales floor to actually sell.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
