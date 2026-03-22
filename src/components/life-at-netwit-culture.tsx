"use client";

import { ArrowRight, Coffee, Heart, Layout, Leaf, MessageSquare, Sparkles, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

const culturePillars = [
  { 
    title: "Flexible Work Protocol", 
    description: "Autonomy is our default state. Whether remote, hybrid, or in-citadel, we empower our engineers to design their own high-performance work environment.", 
    tag: "Autonomy",
    icon: Layout,
    benefit: "Remote Friendly"
  },
  { 
    title: "Continuous Evolution", 
    description: "The learning never stops. Access to global certification paths, high-tier technical bootcamps, and a 24/7 dedicated learning ecosystem.", 
    tag: "Growth",
    icon: Zap,
    stat: "100% Access"
  },
  { 
    title: "Inclusive Hub", 
    description: "Diverse global perspectives are our greatest asset. We cultivate a radically inclusive environment where every technical voice is prioritized.", 
    tag: "Inclusion",
    icon: Users,
    stat: "Global Reach"
  },
  { 
    title: "Integrated Wellness", 
    description: "High-scale delivery requires high-scale well-being. From mental health support to physical wellness initiatives, we prioritize your long-term health.", 
    tag: "Well-being",
    icon: Heart,
    stat: "Verified Balance"
  },
];

export function LifeAtNetwitCulture() {
  return (
    <section id="culture" className="bg-[#09020f] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Culture Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-violet-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Cultural Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Where <span className="text-violet-500 underline decoration-violet-500/30">Life</span> Scales.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our culture is a living, breathing architectural blueprint for human success. We don't just provide a workplace; we provide a habitat for technical mastery.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <Star className="w-4 h-4 text-violet-400" /> Culture Verified High-Prestige
              </span>
           </div>
        </div>

        {/* High-Fi Culture Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {culturePillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0d14] border border-white/5 rounded-[3rem] p-12 flex flex-col h-full hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-violet-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 rounded-2xl bg-violet-600/5 border border-violet-600/10 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Status</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-violet-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-violet-400 transition-colors">
                 Explore Human Core <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Community Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-violet-900/20 via-[#0d0d14] to-indigo-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at:50%_0%,rgba(124,58,237,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-violet-400 font-black uppercase tracking-[0.5em] mb-4">The Global Habitat Pulse</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase">A Place to <span className="text-violet-500 font-black">Thrive.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Join a global collective where your humanity is as prioritized as your technical output. Explore our current openings and design your future at Netwit.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/about/we-are-hiring" className="px-14 py-6 bg-violet-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(124,58,237,0.3)]">
                    <Users className="w-5 h-5 flex-shrink-0" /> Explore Careers
                 </Link>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Leaf className="w-4 h-4" /> Stewardship
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
