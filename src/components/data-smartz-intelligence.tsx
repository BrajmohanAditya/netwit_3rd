"use client";

import { ArrowRight, Bot, CheckCircle, Globe, Layers, Microscope, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap, Database, Activity, BarChart3, PieChart, Cpu, LineChart } from "lucide-react";
import Link from "next/link";

const intelligencePillars = [
  { 
    title: "Data Engineering Core", 
    description: "Scalable data pipelines and architecture design engineered for high-velocity SaaS growth. We transform raw data streams into refined technical capital.", 
    tag: "Architectural",
    icon: Database,
    benefit: "Scalable Feed"
  },
  { 
    title: "Strategic BI Dashboards", 
    description: "Institutional-grade business intelligence dashboards with real-time telemetry and AI-driven variance analysis. Tactical decision support for global executives.", 
    tag: "Executive",
    icon: BarChart3,
    stat: "Zero-Delay Insight"
  },
  { 
    title: "Advanced Data Insights", 
    description: "Deep-tier neural analytics and automated visualization. We uncover the strategic technical narratives hidden within your enterprise data silos.", 
    tag: "Predictive",
    icon: LineChart,
    stat: "Pattern Recognition"
  },
  { 
    title: "Standard Governance", 
    description: "Quality management and defensive security protocols. We ensure your data ecosystem remains audit-proof and compliant across global jurisdictions.", 
    tag: "Fortified",
    icon: ShieldCheck,
    stat: "Global Integrity"
  },
];

export function DataSmartzIntelligence() {
  return (
    <section id="intelligence" className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Intelligence Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-sky-500 font-black uppercase tracking-[0.5em] mb-4 block italic">The Data Intelligence Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm">Refined Intelligence. <span className="text-sky-500 underline decoration-sky-500/30 font-black">Capital Velocity.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our Data Smartz 360 solutions represent the pinnacle of technical analytics. We provide the blueprints for data-driven, scalable, and predictive business evolution.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic">
                 <Activity className="w-4 h-4 text-sky-500" /> Intelligence Pulse: Active
              </span>
           </div>
        </div>

        {/* High-Fi Solution Tiles */}
        <div className="grid md:grid-cols-2 gap-8">
          {intelligencePillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f172a]/40 backdrop-blur-3xl border border-sky-500/10 rounded-[3.5rem] p-10 flex flex-col h-full hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sky-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-sky-600/5 border border-sky-600/10 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all shadow-lg">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-xl font-black text-white tracking-tight italic uppercase">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">{item.tag}</span>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-5 group-hover:text-glow_blue transition-all italic underline decoration-sky-600/20">{item.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-sky-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-10 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-sky-400 transition-colors italic">
                 Deploy Intelligence Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* High-Status Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-blue-900/10 via-[#0f172a] to-sky-900/10 border border-sky-500/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-sky-400 font-black uppercase tracking-[0.5em] mb-4 italic">The Global Intelligence Desk</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-sky-600/30">Actionable <span className="text-sky-500 italic">Big Data.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed font-sans">Our data specialists are ready to architect your high-fidelity intelligence ecosystem. Connect with our principal desk for a strategic infrastructure audit.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-sky-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(14,165,233,0.3)] italic">
                    <PieChart className="w-5 h-5 flex-shrink-0" /> Enterprise Data Audit
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3 italic">
                    <Globe className="w-4 h-4" /> Global Registry
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
