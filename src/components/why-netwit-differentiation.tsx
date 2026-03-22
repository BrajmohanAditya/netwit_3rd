"use client";

import { ArrowRight, Bot, CheckCircle, Globe, Handshake, Layout, MessageSquare, ShieldCheck, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const differentiators = [
  { 
    title: "AI-First Solutions", 
    description: "Intelligence is not a feature; it's our foundation. Every line of code and architectural decision we make is optimized for the intelligent automation era.", 
    tag: "Intelligence",
    icon: Bot,
    benefit: "40% Efficiency"
  },
  { 
    title: "Agile Mastery", 
    description: "High-velocity delivery without technical debt. Our agile frameworks ensure rapid iteration while maintaining enterprise-grade architectural integrity.", 
    tag: "Velocity",
    icon: Zap,
    stat: "High Density"
  },
  { 
    title: "Transparent Partnering", 
    description: "Radical clarity in communication. We operate as an open-book extension of your team, with real-time visibility into every phase of the technical lifecycle.", 
    tag: "Trust",
    icon: MessageSquare,
    stat: "24/7 Sync"
  },
  { 
    title: "Proven Global Track", 
    description: "2000+ successful projects across 50+ countries. Our global experience ensures we understand the nuances of local scale and international technical standards.", 
    tag: "Scale",
    icon: Globe,
    stat: "50+ Countries"
  },
];

export function WhyNetwitDifferentiation() {
  return (
    <section id="differentiation" className="bg-[#080a0d] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Differentiation Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Differentiation Matrix</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Why the World's Best Choose <span className="text-blue-500 underline decoration-blue-500/30">Netwit.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">We don't just solve problems; we redefine what success looks like in high-scale technical delivery. Our differentiation is built on four core pillars of partnership.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-emerald-500" /> Strategic Alignment Verified
              </span>
           </div>
        </div>

        {/* High-Fi Differentiation Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d1014] border border-white/5 rounded-[3rem] p-12 flex flex-col h-full hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 rounded-2xl bg-blue-600/5 border border-blue-600/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Edge</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-blue-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-blue-400 transition-colors">
                 Explore Strategic Pillar <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Partnership Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-blue-900/20 via-[#0d1014] to-[#1e1b4b]/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-blue-400 font-black uppercase tracking-[0.5em] mb-4">Strategic Technical Alignment</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic">The Partner for <span className="text-blue-500">Scale.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Choosing Netwit means choosing a partner who values your long-term success as much as you do. Connect with our principal advisors to design your strategic technical roadmap.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-blue-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(37,99,235,0.3)]">
                    <Zap className="w-5 h-5 flex-shrink-0" /> Launch Strategy Session
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Globe className="w-4 h-4" /> Global Desk
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
