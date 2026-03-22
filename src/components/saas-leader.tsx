"use client";

import { Sparkles, ShieldCheck, Network, Leaf, ArrowUpRight, Compass, ShieldAlert, Zap, Globe, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SaasLeaderSection() {
  const cards = [
    {
      title: "Scale Smarter with AI",
      label: "Autonomous Era",
      icon: Sparkles,
      href: "/services/sales-acceleration",
      color: "text-blue-500",
      bg: "bg-blue-500/5"
    },
    {
      title: "Lockdown Cybersecurity",
      label: "Zero-Trust Protocol",
      icon: ShieldAlert,
      href: "/cyber-smartz",
      color: "text-indigo-500",
      bg: "bg-indigo-500/5"
    },
    {
      title: "Infinite QA & Automation",
      label: "Flawless Velocity",
      icon: Cpu,
      href: "/qa-smartz",
      color: "text-sky-500",
      bg: "bg-sky-500/5"
    },
    {
      title: "Sustainable Data Future",
      label: "ESG Alignment",
      icon: Leaf,
      href: "/data-smartz360",
      color: "text-emerald-500",
      bg: "bg-emerald-500/5"
    },
  ];

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden font-sans border-t border-white/5 italic">
      <div className="max-w-[1250px] mx-auto px-6 relative z-10">
        
        {/* Leader Intent Header */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
           <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The SaaS Leadership Protocol</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm leading-[1.1] max-w-3xl">
              As a <span className="text-blue-500 underline decoration-blue-500/30 font-black italic">SaaS Leader,</span> <br/>what is your intent?
           </h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl font-sans italic">Select your strategic roadmap objective. Our engineering hive is prepared to architect your next global epoch.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <Link 
              key={idx} 
              href={card.href}
              className="group relative bg-white/5 backdrop-blur-3xl aspect-square flex flex-col items-center justify-center p-12 text-center transition-all duration-500 border border-white/5 rounded-[4rem] hover:border-blue-500/30 hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className={`absolute inset-0 ${card.bg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative z-10 space-y-8">
                 <div className={`w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] ${card.color}`}>
                    <card.icon className="w-8 h-8" />
                 </div>
                 
                 <div className="space-y-4">
                    <span className="text-[8px] text-slate-500 font-black uppercase tracking-[0.4em] block italic group-hover:text-blue-400 transition-colors">Target // {card.label}</span>
                    <h3 className="text-xl font-black text-white leading-tight italic tracking-tight uppercase underline decoration-white/5 group-hover:decoration-blue-500/20 transition-all">
                      {card.title}
                    </h3>
                 </div>
              </div>

              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-blue-500">
                 <ArrowUpRight className="w-6 h-6" />
              </div>
            </Link>
          ))}
        </div>

        {/* Dynamic Stewardship Callout */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                 <Compass className="w-5 h-5 text-slate-400 italic" />
              </div>
              <div>
                 <span className="block text-[8px] text-slate-500 font-black uppercase tracking-[0.4em] italic mb-1">Strategic Guidance</span>
                 <span className="block text-sm font-bold text-white italic">Institutional Roadmap Refinement</span>
              </div>
           </div>
           <div className="flex items-center gap-10">
              <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] italic">Netwit Global Systems // Registry Active</span>
              <Link href="#contact" className="text-xs font-black text-blue-500 hover:text-white transition-colors uppercase tracking-widest italic flex items-center gap-2 group">
                 Initialize Stewardship <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
}
