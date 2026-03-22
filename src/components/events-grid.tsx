"use client";

import { ArrowRight, Calendar, CheckCircle, Globe, Layout, MapPin, Sparkles, Star, TrendingUp, Users, Video, Zap } from "lucide-react";
import Link from "next/link";

const eventPillars = [
  { 
    title: "Global Tech Summit", 
    description: "Our flagship annual conference gathering principal architects and enterprise visionaries across 50+ countries. High-level technical strategy meets global scale.", 
    tag: "Conference",
    icon: Star,
    benefit: "Annual"
  },
  { 
    title: "Industry Webinars", 
    description: "Weekly high-fidelity technical deep-dives into AI, Cloud, and DevOps. Learn institutional strategies directly from the technical council.", 
    tag: "Webinar",
    icon: Video,
    stat: "Weekly"
  },
  { 
    title: "Community Meetups", 
    description: "Regional gathering hubs for peer-to-peer technical exchange. Building high-prestige technical community connections at the human level.", 
    tag: "Meetup",
    icon: Users,
    stat: "Global hubs"
  },
  { 
    title: "Partner Summits", 
    description: "Exclusive strategic sessions for our 500+ global referral and technology partners. Engineering a unified ecosystem for high-velocity growth.", 
    tag: "Strategic",
    icon: Zap,
    stat: "Quarterly"
  },
];

export function EventsGrid() {
  return (
    <section id="grid" className="bg-[#0d021c] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Grid Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Event Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Connect with <span className="text-indigo-500 underline decoration-indigo-500/30">Excellence.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our event ecosystem is designed for high-prestige technical exchange. Explore the spaces where institutional knowledge meets global innovation.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Event Status Verified
              </span>
           </div>
        </div>

        {/* High-Fi Event Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {eventPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#160a2c] border border-white/5 rounded-[3.5rem] p-12 flex flex-col h-full hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-20 h-20 rounded-3xl bg-indigo-600/5 border border-indigo-600/10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <item.icon className="w-10 h-10" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight italic">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Level</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-indigo-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-indigo-400 transition-colors">
                 Explore Event Registry <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-indigo-900/20 via-[#160a2c] to-purple-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at:50%_0%,rgba(129,140,248,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-indigo-400 font-black uppercase tracking-[0.5em] mb-4">The Universal Gathering Pulse</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase">Evolve with <span className="text-indigo-500">Netwit.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">The global technical conversation is happening here. Connect with our events desk to discuss sponsorship, attendance, or speaking opportunities.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-indigo-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(129,140,248,0.3)]">
                    <Calendar className="w-5 h-5 flex-shrink-0" /> Application Desk
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
