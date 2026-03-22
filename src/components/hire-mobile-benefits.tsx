"use client";

import { DownloadCloud, Target, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function MobileBenefits() {
  const stats = [
    { num: "4.9", desc: "Average App Rating" },
    { num: "5M+", desc: "Downloads Handled" },
    { num: "100%", desc: "App Store Approval Rate" },
    { num: "3G", desc: "Optimized for Low Bandwidth" }
  ];

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
                Launch Fast. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Scale Globally.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
                Rejection from the App Store costs you weeks. High crash rates cost you your user base. Hire engineers who inherently understand the rigorous standards of Apple and Google submission processes.
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "No UI blocking or main-thread freezes",
                  "Expertise in Apple Human Interface Guidelines",
                  "Deep battery & memory optimization",
                  "Secure biometrics & payment gateways"
                ].map((p, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                   </li>
                ))}
              </ul>
              
              <div className="mt-8">
                 <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg shadow-sm">
                    Find Your Developers
                 </Link>
              </div>
           </div>

           <div className="relative z-10 w-full mt-12 lg:mt-0">
              <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-100/50 blur-[80px] pointer-events-none rounded-full"></div>
                 
                 <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-10 border-b border-slate-100 pb-4">Deployment Track Record</h3>
                 
                 <div className="flex flex-col gap-6">
                    {stats.map((s, i) => (
                       <div key={i} className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors cursor-default group">
                          <div className="flex flex-col">
                             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{s.desc}</span>
                          </div>
                          <span className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{s.num}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
        
      </div>
    </section>
  );
}
