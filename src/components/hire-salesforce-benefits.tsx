"use client";

import { LineChart, CheckCircle2, Target, Network } from "lucide-react";
import Link from "next/link";

export function SalesforceBenefits() {
  const stats = [
    { num: "100%", desc: "Governor Limit Compliant" },
    { num: "360°", desc: "Customer Account Visibility" },
    { num: "Zero", desc: "Data Sync Delays" },
    { num: "4x", desc: "Sales Rep Productivity" }
  ];

  return (
    <section className="bg-[#f8fafc] py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#00A1E0]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-[#032d60]">
                Extract Every Dollar <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] to-indigo-600">Of Your License Cost.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
                Salesforce licenses are an immense investment. Don't waste them on an un-customized, un-integrated instance that your reps hate using. By deploying our certified engineers, you transform a bloated CRM into an ultra-fast, automated revenue engine.
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Complex CPQ (Configure, Price, Quote) architecture",
                  "MuleSoft integration bypassing rate limits",
                  "LWC UI refactoring for rapid page loads",
                  "Strict security matrix and sharing rules"
                ].map((p, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#00A1E0] flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                   </li>
                ))}
              </ul>
              
              <div className="mt-8">
                 <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#032d60] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#00A1E0] hover:shadow-[0_10px_30px_rgba(0,161,224,0.3)] shadow-sm">
                    View Integration Engineers
                 </Link>
              </div>
           </div>

           <div className="relative z-10 w-full mt-12 lg:mt-0">
              <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-50/50 blur-[60px] pointer-events-none rounded-full"></div>
                 
                 <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-10 border-b border-slate-100 pb-4">Architectural Outcomes</h3>
                 
                 <div className="flex flex-col gap-6">
                    {stats.map((s, i) => (
                       <div key={i} className="flex justify-between items-center bg-[#f8fafc] p-4 rounded-xl border border-slate-100 hover:border-[#00A1E0]/30 transition-colors cursor-default group">
                          <div className="flex flex-col">
                             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{s.desc}</span>
                          </div>
                          <span className="text-2xl font-black text-[#032d60] group-hover:text-[#00A1E0] transition-colors">{s.num}</span>
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
