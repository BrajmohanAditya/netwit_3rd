"use client";

import { CheckCircle, Calculator, Database, Layout, ShieldCheck, PieChart, Target, Zap, Globe, Cpu } from "lucide-react";

const toolsData = [
  {
    title: "Core Ledger",
    tools: ["QuickBooks", "NetSuite", "Xero", "Sage"],
    icon: Database,
    color: "from-primary-500/10 to-transparent"
  },
  {
    title: "Financial Planning",
    tools: ["Zoho Books", "FreshBooks", "MYOB", "Wave"],
    icon: PieChart,
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "P2P & Receivables",
    tools: ["Bill.com", "Dext", "Expensify", "Ramp"],
    icon: Zap,
    color: "from-primary-600/10 to-transparent"
  }
];

export function AccountingStack() {
  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
           <span className="text-[10px] text-primary-500 font-black uppercase tracking-[0.5em] italic">The Fiscal Arsenal</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm">Unified <span className="text-primary-500 underline decoration-primary-500/30">Capital Stack.</span></h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed">We leverage the world's most high-fidelity financial platforms and AI protocols to ensure 100% architectural integrity for your SaaS capital.</p>
        </div>

        {/* High-Fi Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((category, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 shadow-2xl`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] pointer-events-none group-hover:bg-primary/10 transition-colors"></div>

              <div className="flex items-center gap-5 mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                    <category.icon className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-black text-white italic tracking-tight uppercase underline decoration-primary/20">{category.title}</h3>
              </div>

              <div className="space-y-4">
                 {category.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 group/item">
                       <CheckCircle className="w-4 h-4 text-emerald-500/40 group-hover/item:text-emerald-500 transition-colors" />
                       <span className="text-sm text-slate-400 font-medium tracking-wide group-hover/item:text-white transition-colors">{tool}</span>
                    </div>
                 ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] text-primary-500 font-black uppercase tracking-widest italic">Institutional Registry</span>
                 <Cpu className="w-4 h-4 text-primary-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
