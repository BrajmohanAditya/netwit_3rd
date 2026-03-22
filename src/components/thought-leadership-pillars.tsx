"use client";

import { ArrowRight, BookOpen, CheckCircle, Globe, Layout, Microscope, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const leadershipPillars = [
  { 
    title: "Industry Experts", 
    description: "Our technical council consists of world-class architects and domain visionaries. We provide the strategic technical blueprints that drive global enterprise transformation.", 
    tag: "Principal",
    icon: Star,
    benefit: "Market Edge"
  },
  { 
    title: "Elite Research Papers", 
    description: "Deep-tier technical research into AI, Cloud, and High-Scale Distributed Systems. Our whitepapers are the industry standard for tactical and strategic engineering.", 
    tag: "Scholarly",
    icon: Microscope,
    stat: "500+ Pubs"
  },
  { 
    title: "Global Conference Keynotes", 
    description: "Netwit thought leaders are a frequent presence at the world's most high-prestige technical summits. Sharing visionary technical strategy with the global community.", 
    tag: "Keynote",
    icon: Users,
    stat: "Global Lead"
  },
  { 
    title: "Strategic Media Presence", 
    description: "Authoritative technical commentary in the world's leading business and tech publications. Shaping the global conversation on digital evolution and the ROI of tech.", 
    tag: "Authority",
    icon: Globe,
    stat: "100K+ Reach"
  },
];

export function ThoughtLeadershipPillars() {
  return (
    <section id="pillars" className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Pillars Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-sky-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Leadership Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm">Shaping the <span className="text-sky-500 underline decoration-sky-500/30">Future of Tech.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Thought leadership is our core institutional capability. Discover the pillars of our strategic technical authority and global influence.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Leadership Status Verified
              </span>
           </div>
        </div>

        {/* High-Fi Pillar Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {leadershipPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f172a] border border-white/5 rounded-[3.5rem] p-12 flex flex-col h-full hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sky-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-20 h-20 rounded-3xl bg-sky-600/5 border border-sky-600/10 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <item.icon className="w-10 h-10" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight italic">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Level</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-sky-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-sky-400 transition-colors">
                 Explore Thought Leadership <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Authority Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-sky-900/20 via-[#0f172a] to-blue-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-sky-400 font-black uppercase tracking-[0.5em] mb-4">The Global Insight Hub</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-sky-600/30">Connect with <span className="text-sky-500 italic">Visionaries.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">The technical narrative of tomorrow is being written here. Connect with our principal editors to discuss high-status contributions or explore our full technical repository.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-sky-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(14,165,233,0.3)]">
                    <TrendingUp className="w-5 h-5 flex-shrink-0" /> Enterprise Insight Sync
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
