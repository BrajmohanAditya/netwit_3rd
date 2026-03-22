"use client";

import { ArrowRight, Box, CheckCircle, Flag, Globe, History as HistoryIcon, Layers, Navigation, Rocket, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const milestones = [
  { 
    year: "1999", 
    title: "Netwit Establishment", 
    description: "The official protocol was established. Our first headquarters opened in a single-room architectural hub, dedicated to distributed system design.", 
    tag: "Genesis",
    icon: Flag,
    stat: "Year Zero"
  },
  { 
    year: "2010", 
    title: "Global Reach Expansion", 
    description: "Breaking the regional barrier. Opening our first international capability center, providing 24/7 technical oversight to global enterprise clients.", 
    tag: "Expansion",
    icon: Globe,
    stat: "1st Int'l Office"
  },
  { 
    year: "2018", 
    title: "AI Division Integration", 
    description: "Intelligence protocol launch. Embedding high-performance machine learning models into our core architectural blueprints for the first time.", 
    tag: "Innovation",
    icon: Sparkles,
    stat: "AI Activated"
  },
  { 
    year: "2024", 
    title: "Citadel of Scale", 
    description: "Attaining the current global scale with over 1500+ principal architects and a presence in 50+ countries. The chronicle continues to evolve.", 
    tag: "Mastery",
    icon: Rocket,
    stat: "50+ Countries"
  },
];

export function TimelineFeed() {
  return (
    <section id="feed" className="bg-[#02050b] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Timeline Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-cyan-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Chronicle Record</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">25 Years of <span className="text-cyan-500">Accelerated Evolution.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our journey is more than just dates on a calendar; it's a relentless iteration towards technical perfection. Explore the core records of our evolution.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 Displaying {milestones.length} Major Milestones
              </span>
           </div>
        </div>

        {/* High-Fi Chronological Feed */}
        <div className="space-y-12">
          {milestones.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d121b] border border-white/5 rounded-[3rem] p-12 lg:p-16 flex flex-col lg:flex-row gap-12 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Year & Icon */}
              <div className="lg:w-1/4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 pb-10 lg:pb-0 lg:pr-12">
                 <div className="text-[5rem] font-black text-white/5 absolute -top-10 -left-4 group-hover:text-cyan-500/10 transition-colors italic leading-none">{item.year}</div>
                 <div className="w-20 h-20 rounded-[2rem] bg-cyan-600/10 border border-cyan-600/20 flex items-center justify-center mb-8 relative z-10 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                    <item.icon className="w-10 h-10" />
                 </div>
                 <div className="relative z-10 flex flex-col gap-2">
                    <span className="text-5xl font-black text-white tracking-tighter italic">{item.year}</span>
                    <span className="text-[10px] text-cyan-500 font-black uppercase tracking-[0.4em]">{item.tag}</span>
                 </div>
              </div>

              {/* Content Detail */}
              <div className="flex-1 flex flex-col justify-center gap-8 relative z-10">
                 <h3 className="text-4xl font-black text-white tracking-tight group-hover:text-glow transition-all">{item.title}</h3>
                 <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                    {item.description}
                 </p>
                 
                 <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                    <div>
                       <span className="block text-[8px] text-slate-600 uppercase tracking-widest mb-1">Impact Metric</span>
                       <span className="text-2xl font-black text-white italic">{item.stat}</span>
                    </div>
                    <div>
                       <span className="block text-[8px] text-slate-600 uppercase tracking-widest mb-1">Status</span>
                       <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest flex items-center gap-2">
                          <CheckCircle className="w-3 h-3" /> Fully Integrated
                       </span>
                    </div>
                 </div>
              </div>

              {/* Action Column */}
              <div className="lg:w-1/6 flex flex-col justify-end items-end gap-6 relative z-10 pt-10 lg:pt-0">
                 <Link href="#" className="w-full lg:w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                 </Link>
                 <span className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em] transform rotate-90 origin-right translate-x-3 hidden lg:block">View Chronicle Detail</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Registry Footer Banner */}
        <div className="mt-24 p-12 bg-gradient-to-br from-cyan-900/20 via-[#0d121b] to-indigo-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(6,182,212,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-cyan-400 font-black uppercase tracking-[0.5em] mb-4">The Unified Technical Chronicle</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase">Expanding Since <span className="text-cyan-500">Day Zero.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our chronicle is open for the world to see. Connect with our institutional archives to explore the full depth</p>
              
              <div className="lg:w-1/6 flex flex-col justify-center items-center gap-12 relative z-10 pt-16">
                 <HistoryIcon className="w-16 h-16 text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                 <button className="px-14 py-6 bg-cyan-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(6,182,212,0.3)]">
                    <HistoryIcon className="w-5 h-5 flex-shrink-0" /> Explore Global Archives
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Globe className="w-4 h-4" /> View Current Presence
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
