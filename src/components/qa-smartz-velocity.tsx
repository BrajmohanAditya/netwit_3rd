"use client";

import { ArrowRight, Bot, CheckCircle, Globe, Layers, Microscope, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap, Bug, Activity, MonitorPlay, RefreshCw, Infinity as InfinityIcon } from "lucide-react";
import Link from "next/link";

const velocityPillars = [
  { 
    title: "Test Automation Hive", 
    description: "Multi-threaded Selenium, Cypress, and Playwright automation frameworks engineered for ultra-high velocity testing cycles.", 
    tag: "High Velocity",
    icon: MonitorPlay,
    benefit: "70% Time Save"
  },
  { 
    title: "Performance Precision", 
    description: "Load, stress, and strategic endurance testing. We ensure your SaaS ecosystem remains fast, responsive, and stable under infinite-scale conditions.", 
    tag: "Stress-Proof",
    icon: Zap,
    stat: "High Scale"
  },
  { 
    title: "Neural Bug Isolation", 
    description: "AI-powered bug tracking and strategic remediation. Our automated protocols identify and neutralize critical defects with 99.9% accuracy.", 
    tag: "99.9% Defect Kill",
    icon: Bug,
    stat: "Zero-Day Clean"
  },
  { 
    title: "Infinite CI/CD Sync", 
    description: "Deep-tier CI/CD pipeline integration for continuous quality assurance. Automated test suites that stay in sync with every release protocol.", 
    tag: "Continuous",
    icon: InfinityIcon,
    stat: "Automated Feed"
  },
];

export function QASmartzVelocity() {
  return (
    <section id="velocity" className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Velocity Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-fuchsia-500 font-black uppercase tracking-[0.5em] mb-4 block italic">The QA Velocity Hive</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm">Flawless Software. <span className="text-fuchsia-500 underline decoration-fuchsia-500/30 font-black">Zero Defects.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our QA Smartz solutions represent the pinnacle of automated quality assurance. We provide the technical blueprints for high-velocity, reliable software evolution.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic">
                 <Activity className="w-4 h-4 text-fuchsia-500" /> Velocity Pulse: Stable
              </span>
           </div>
        </div>

        {/* High-Fi Solution Tiles */}
        <div className="grid md:grid-cols-2 gap-8">
          {velocityPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f172a]/40 backdrop-blur-3xl border border-fuchsia-500/10 rounded-[3.5rem] p-10 flex flex-col h-full hover:border-fuchsia-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-fuchsia-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-fuchsia-600/5 border border-fuchsia-600/10 flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:text-white transition-all shadow-lg">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-xl font-black text-white tracking-tight italic uppercase">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">{item.tag}</span>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-5 group-hover:text-glow_magenta transition-all italic underline decoration-fuchsia-600/20">{item.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-fuchsia-500 transition-colors">
                 {item.description}
              </p>
              
              <Link href="#contact" className="mt-10 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-fuchsia-400 transition-colors italic">
                 Deploy Velocity Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* High-Status Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-fuchsia-900/10 via-[#0f172a] to-blue-900/10 border border-fuchsia-500/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(217,70,239,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-fuchsia-400 font-black uppercase tracking-[0.5em] mb-4 italic">The Global QA Hive</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-fuchsia-600/30">Velocity <span className="text-fuchsia-500 italic">Engineering Core.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed font-sans">Our QA specialists are ready to architect your high-velocity testing ecosystem. Connect with our principal desk for a high-fidelity quality audit.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link 
                   href="/enterprise-quality-audit" 
                   className="px-14 py-6 bg-fuchsia-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(217,70,239,0.3)] italic"
                 >
                    <Bug className="w-5 h-5 flex-shrink-0" /> Enterprise Quality Audit
                 </Link>
                 <Link 
                   href="/global-capacity-registry" 
                   className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3 italic"
                 >
                    <Globe className="w-4 h-4" /> Global Registry
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
