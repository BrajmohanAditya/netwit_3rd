"use client";

import { ArrowRight, Bot, CheckCircle, Globe, Layers, Microscope, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap, Cpu, BrainCircuit, Activity } from "lucide-react";
import Link from "next/link";

const intelligencePillars = [
  { 
    title: "AI Threat Automation", 
    description: "Real-time threat detection and remediation powered by deep-tier neural protocols. Our AI identifies anomalies before they impact your operational baseline.", 
    tag: "Proactive",
    icon: Bot,
    benefit: "Zero Loss"
  },
  { 
    title: "Predictive Intelligence", 
    description: "Strategic forecasting of global threat vectors. We analyze millions of daily signals to provide your business with a predictive defense roadmap.", 
    tag: "Future-Proof",
    icon: BrainCircuit,
    stat: "High Accuracy"
  },
  { 
    title: "Smart Decision Core", 
    description: "Institutional-grade decision support systems for CISOs. AI-powered risk modeling and tactical response coordination at enterprise scale.", 
    tag: "Executive",
    icon: Cpu,
    stat: "Decision Logic"
  },
  { 
    title: "Hardened AI Models", 
    description: "Custom machine learning models designed for mission-critical reliability. Built within secure enclaves for high-prestige data integrity.", 
    tag: "Integrity",
    icon: ShieldCheck,
    stat: "NIST Audit"
  },
];

export function CyberSmartzIntelligence() {
  return (
    <section id="solutions" className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Intelligence Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.5em] mb-4 block italic">The Cyber Intelligence Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm">AI Safeguarded. <span className="text-emerald-500 underline decoration-emerald-500/30 font-black">Business Evolution.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our Cyber Smartz solutions represent the pinnacle of AI-driven defense. We provide the technical blueprints for secure, intelligent, and scalable digital transformation.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic">
                 <Activity className="w-4 h-4 text-emerald-500" /> Sentinel Pulse: Active
              </span>
           </div>
        </div>

        {/* High-Fi Solution Tiles */}
        <div className="grid md:grid-cols-2 gap-8">
          {intelligencePillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f172a]/40 backdrop-blur-3xl border border-emerald-500/10 rounded-[3.5rem] p-10 flex flex-col h-full hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-emerald-600/5 border border-emerald-600/10 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-xl font-black text-white tracking-tight italic uppercase">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">{item.tag}</span>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-5 group-hover:text-glow_emerald transition-all italic underline decoration-emerald-600/20">{item.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-emerald-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-10 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-emerald-400 transition-colors italic">
                 Deploy Sentinel Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* High-Status Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-emerald-900/10 via-[#0f172a] to-blue-900/10 border border-emerald-500/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-emerald-400 font-black uppercase tracking-[0.5em] mb-4 italic">The Global Sentinel Hub</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-emerald-600/30">Hardened <span className="text-emerald-500 italic">Security Core.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed font-sans">Our cyber specialists are ready to architect your AI-safeguarded ecosystem. Connect with our principal desk for a high-fidelity risk audit.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-emerald-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(16,185,129,0.3)] italic">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" /> Enterprise Risk Audit
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
