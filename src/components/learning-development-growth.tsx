"use client";

import { ArrowRight, BookOpen, CheckCircle, GraduationCap, Layout, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const growthPillars = [
  { 
    title: "Personalized Pathways", 
    description: "Your career is unique. Access tailor-made learning paths designed specifically for your professional trajectory and institutional technical goals.", 
    tag: "Individual",
    icon: Layout,
    benefit: "Smart Mapping"
  },
  { 
    title: "Industry Certifications", 
    description: "We sponsor your global certification. From AWS to Deep Learning, the Netwit registry covers all high-prestige technical credentials.", 
    tag: "Certified",
    icon: GraduationCap,
    stat: "50+ Paths"
  },
  { 
    title: "Leadership Sync", 
    description: "Learn directly from the executive Technical Council. Our leadership development programs transform lead engineers into global technical visionaries.", 
    tag: "Strategy",
    icon: Users,
    stat: "High Density"
  },
  { 
    title: "Technical Bootcamps", 
    description: "Intensive 24/7 technical labs. Dive deep into new protocols with month-long immersive sessions led by the world's principal technical leads.", 
    tag: "Velocity",
    icon: Zap,
    stat: "Live Hubs"
  },
];

export function LearningDevelopmentGrowth() {
  return (
    <section id="growth" className="bg-[#050b1a] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Growth Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-amber-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Growth Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Evolve without <span className="text-amber-500 underline decoration-amber-500/30">Limits.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">At Netwit, we provide the architectural blueprints for your personal professional evolution. Our high-fidelity growth ecosystem is designed for universal technical mastery.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Talent Pathway Verified
              </span>
           </div>
        </div>

        {/* High-Fi Growth Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {growthPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d1526] border border-white/5 rounded-[3rem] p-12 flex flex-col h-full hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 rounded-2xl bg-amber-600/5 border border-amber-600/10 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Edge</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-amber-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-amber-400 transition-colors">
                 Explore Learning Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Learning Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-blue-900/20 via-[#0d1526] to-amber-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-amber-400 font-black uppercase tracking-[0.5em] mb-4">The Universal Growth Pulse</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase">A Place to <span className="text-amber-500 italic">Thrive.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Join a global collective where your humanity is as prioritized as your technical growth. Connect with our growth advisors to design your future.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-amber-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(245,158,11,0.3)]">
                    <GraduationCap className="w-5 h-5 flex-shrink-0" /> Learning Portal Access
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Zap className="w-4 h-4" /> Skill Registry
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
