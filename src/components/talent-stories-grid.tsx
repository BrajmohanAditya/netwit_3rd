"use client";

import { ArrowRight, CheckCircle, Globe, Heart, Layout, MessageSquare, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const talentPillars = [
  { 
    title: "Global Principal Lead", 
    description: "Started as a junior engineer in our regional hub. Now guiding global distributed architectures for Fortune 500 citadels. A journey of high-velocity growth.", 
    tag: "Leadership",
    icon: Star,
    benefit: "10Y Growth"
  },
  { 
    title: "AI Protocol Architect", 
    description: "Joined through the Netwit Academy. Now a leading voice in our AI-first culture, architecting complex cognitive pipelines and ML landscapes.", 
    tag: "Innovation",
    icon: Zap,
    stat: "PhD Path"
  },
  { 
    title: "Solutions Director", 
    description: "Operating from our 50+ country global capability centers. Bridging technical domains with institutional strategic visionary oversight.", 
    tag: "Strategy",
    icon: Globe,
    stat: "Global Lead"
  },
  { 
    title: "Community Advocate", 
    description: "Shaping the inclusive technical hub. Leading our wellness and cultural protocols to ensure a thriving environment for all architects.", 
    tag: "Culture",
    icon: Heart,
    stat: "Verified Hub"
  },
];

export function TalentStoriesGrid() {
  return (
    <section id="stories" className="bg-[#0d0d0d] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Stories Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-orange-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Talent Chronicle</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm">Voices of Our <span className="text-orange-500 underline decoration-orange-500/30">People.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our legacy is built on the high-performance trajectories of our team members. Explore the diverse human blueprints that define Netwit.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Human Success Verified
              </span>
           </div>
        </div>

        {/* High-Fi Story Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {talentPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#1a1a1a] border border-white/5 rounded-[3.5rem] p-12 flex flex-col h-full hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-20 h-20 rounded-3xl bg-orange-600/5 border border-orange-600/10 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <item.icon className="w-10 h-10" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight italic">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Growth</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-orange-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-orange-400 transition-colors">
                 Explore Human Path <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-orange-900/20 via-[#1a1a1a] to-pink-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,87,51,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-orange-400 font-black uppercase tracking-[0.5em] mb-4">The Global Human Blueprint</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-orange-600/30">Build Your <span className="text-orange-500">Legacy.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Join a technical collective where your human story is prioritized. Discover how you can architect your career evolution within the Netwit global ecosystem.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-orange-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(255,87,51,0.3)]">
                    <Users className="w-5 h-5 flex-shrink-0" /> Career Exploration
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <MessageSquare className="w-4 h-4" /> Direct Community Input
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
