"use client";

import { ArrowRight, BookOpen, CheckCircle, Clock, Globe, Layers, MessageSquare, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const journalPillars = [
  { 
    title: "AI & Distributed Systems", 
    description: "Deep-tier insights into architecting high-scale intelligent ecosystems. Explore the protocols behind our AI-first technical culture.", 
    tag: "Intelligence",
    icon: Zap,
    benefit: "Technical"
  },
  { 
    title: "The Modern DevOps Citadel", 
    description: "Transforming delivery velocity with automated cognitive pipelines. Insights on enterprise-grade infrastructure and continuous evolution.", 
    tag: "Strategy",
    icon: Layers,
    stat: "Blueprint"
  },
  { 
    title: "Global Talent Habitat", 
    description: "Perspectives on building high-prestige technical communities across 50+ countries. The human architecture of successful delivery.", 
    tag: "Business",
    icon: Users,
    stat: "Corporate"
  },
  { 
    title: "Sustainable Tech Standard", 
    description: "Architecting for a greener future. How Netwit leverages renewable energy protocols to reduce global carbon footprint.", 
    tag: "Future",
    icon: Sparkles,
    stat: "Green Tech"
  },
];

export function GpwJournalArticles() {
  return (
    <section id="articles" className="bg-[#020512] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Journal Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit GPW Journal Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Insights for the <span className="text-blue-500 underline decoration-blue-500/30 font-black">Modern Enterprise.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our thought leadership is open to the world. Explore verified strategies on technology trends, business architectures, and technical best practices.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Executive Insight Verified
              </span>
           </div>
        </div>

        {/* High-Fi Article Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {journalPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0d1a] border border-white/5 rounded-[3.5rem] p-12 flex flex-col h-full hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-20 h-20 rounded-3xl bg-blue-600/5 border border-blue-600/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <item.icon className="w-10 h-10" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight italic">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Edge</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-blue-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-blue-400 transition-colors">
                 Read Full Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Journal Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-blue-900/20 via-[#0d0d1a] to-indigo-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-blue-400 font-black uppercase tracking-[0.5em] mb-4">The Global Technical Registry</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-blue-600/30">Weekly <span className="text-blue-500">Insights.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">The technical revolution is documented here. Connect with our principal editors to discuss your thought leadership or explore our full historical archives.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-blue-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(59,130,246,0.3)]">
                    <BookOpen className="w-5 h-5 flex-shrink-0" /> Explore Global Archives
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
