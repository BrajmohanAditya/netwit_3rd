"use client";

import { ArrowRight, CheckCircle, Globe, Layers, Layout, Microscope, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const programPillars = [
  { 
    title: "Generous Commissions", 
    description: "Industry-leading 30% commission rates for every high-fidelity client introduced to our technical delivery ecosystem. High reward for high-prestige introduces.", 
    tag: "Reward",
    icon: Star,
    benefit: "30% Rate"
  },
  { 
    title: "Dedicated Partner Support", 
    description: "Access to a global team of partner success leads. We provide the 24/7 architectural and strategic support you need to close high-tier enterprise deals.", 
    tag: "Support",
    icon: Users,
    stat: "Verified"
  },
  { 
    title: "Global Marketing Arsenal", 
    description: "Full access to our high-fidelity marketing materials, case studies, and technical whitepapers. Professional tools designed for high-velocity conversion.", 
    tag: "Resource",
    icon: Layout,
    stat: "Full Access"
  },
  { 
    title: "Exclusive Partner Deals", 
    description: "Be the first to access new service protocols and high-status technical solutions. High-prestige technical routes reserved for our global partner network.", 
    tag: "Exclusive",
    icon: Zap,
    stat: "Early Access"
  },
];

export function ReferralProgram() {
  return (
    <section id="program" className="bg-[#0d0d0d] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* program Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-amber-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Referral Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm">Scale your <span className="text-amber-500 underline decoration-amber-500/30">Business.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our partner ecosystem is designed for high-prestige growth. Join a global registry of business visionaries scaling with Netwit.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Partner Status Verified
              </span>
           </div>
        </div>

        {/* High-Fi program Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {programPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#1a1a1a] border border-white/5 rounded-[3.5rem] p-12 flex flex-col h-full hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-20 h-20 rounded-3xl bg-amber-600/5 border border-amber-600/10 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <item.icon className="w-10 h-10" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight italic">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Level</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-amber-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-amber-400 transition-colors">
                 Explore Partner Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-amber-900/20 via-[#1a1a1a] to-blue-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-amber-400 font-black uppercase tracking-[0.5em] mb-4">The Global Partnership Registry</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-amber-600/30">A Shared <span className="text-amber-500">Success.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Join a technical collective where partnership is prioritized. Connect with our partner desk to discuss your registry status or explore our full referral archives.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-amber-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(245,158,11,0.3)]">
                    <Users className="w-5 h-5 flex-shrink-0" /> Application Desk
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
