"use client";

import { Award, BadgeCheck, Book, Globe, Linkedin, MessageSquare, ShieldCheck, Sparkles, Twitter, UserPlus, Zap } from "lucide-react";
import Link from "next/link";

const leaders = [
  { 
    name: "Architect Principal", 
    role: "Chief Executive Officer", 
    bio: "Visionary leader with 25+ years in global distributed technical delivery. Formerly lead architect at world-class enterprise citadels.", 
    expertise: "Global Scale & Strategy",
    icon: ShieldCheck,
    tag: "Board Member"
  },
  { 
    name: "Engineering Lead", 
    role: "Chief Technology Officer", 
    bio: "Deep-tier technical expert with a Ph.D. in High-Scale Systems. Driving the Netwit technical audit and intelligence protocols.", 
    expertise: "Protocol Engineering",
    icon: Zap,
    tag: "PhD Principal"
  },
  { 
    name: "Technical Director", 
    role: "Chief Operating Officer", 
    bio: "Master of operational technical excellence. Overseeing the 1500+ engineer strong global capability center network.", 
    expertise: "Operational Excellence",
    icon: Globe,
    tag: "Operations Head"
  },
  { 
    name: "Strategy Architect", 
    role: "Head of AI Innovation", 
    bio: "Pioneer in intelligent automation and industrial-grade machine learning. Shaping the future of our AI-first technical culture.", 
    expertise: "Intelligence Era",
    icon: Sparkles,
    tag: "Innovation Lead"
  },
];

export function LeadershipProfiles() {
  return (
    <section id="profiles" className="bg-[#030303] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Executive Board Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.5em] mb-4 block">The Executive Technical Council</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">World-Class <span className="text-white/40">Architects.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our board is comprised of high-impact leaders who have shaped the technical foundations of the world's most successful enterprises.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <BadgeCheck className="w-4 h-4 text-slate-400" /> Council Integrity Verified
              </span>
           </div>
        </div>

        {/* High-Fi Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-10 flex flex-col h-full hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <item.icon className="w-10 h-10" />
                 </div>
                 <span className="text-[8px] font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full uppercase tracking-widest border border-white/5">
                    {item.tag}
                 </span>
              </div>

              <div className="flex-1 space-y-4">
                 <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-glow transition-all">{item.name}</h3>
                 <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">{item.role}</span>
                 <p className="text-xs text-slate-400 font-light leading-relaxed border-l border-white/5 pl-6 group-hover:border-white transition-colors">
                    {item.bio}
                 </p>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <Linkedin className="w-4 h-4 text-slate-600 hover:text-white transition-colors cursor-pointer" />
                    <Twitter className="w-4 h-4 text-slate-600 hover:text-white transition-colors cursor-pointer" />
                 </div>
                 <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest group-hover:text-white transition-colors">
                    View Portfolio
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Board Integrity Banner Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-white/10 via-[#0d0d0d] to-slate-900/10 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <div className="flex justify-center -space-x-4 mb-4">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full bg-slate-800 border-2 border-[#030303] flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">
                       <ShieldCheck className="w-5 h-5 text-slate-500" />
                    </div>
                 ))}
              </div>
              <span className="inline-block text-[10px] text-slate-400 font-black uppercase tracking-[0.5em] mb-4 text-glow">The Global Council Registry</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase">Unparalleled <span className="text-white/40">Direction.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our executive board is committed to the long-term architectural integrity of every partnership. Connect with our principal counsel to discuss your institutional vision.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-white text-black font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(255,255,255,0.1)]">
                    <UserPlus className="w-5 h-5 flex-shrink-0" /> Direct Executive Sync
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Globe className="w-4 h-4" /> Global Presence
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
