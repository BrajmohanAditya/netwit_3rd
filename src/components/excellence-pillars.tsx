"use client";

import { Award, Cloud, Cpu, Globe, GraduationCap, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  { 
    title: "Pioneer in DevOps", 
    description: "Architecting the world's most resilient CI/CD pipelines since the early days of infrastructure-as-code. Our methodology is the global standard.", 
    tag: "Evolution",
    icon: Zap,
    stat: "10K+ Deploys"
  },
  { 
    title: "Cloud Native Mastery", 
    description: "An early adopter of global cloud distribution. Managing multi-region hybrid environments for the world's most demanding enterprises.", 
    tag: "Stability",
    icon: Cloud,
    stat: "99.9% Uptime"
  },
  { 
    title: "AI Pivot Leader", 
    description: "Integrating intelligent automation before it was a trend. Our deep-tier AI models drive efficiency across 2000+ active projects.", 
    tag: "Innovation",
    icon: Cpu,
    stat: "50+ ML Models"
  },
  { 
    title: "Enterprise Trust", 
    description: "The partner of choice for Fortune 500 giants. Decades of excellence in high-compliance, mission-critical infrastructure delivery.", 
    tag: "Authority",
    icon: ShieldCheck,
    stat: "25+ F500 Clients"
  },
];

export function ExcellencePillars() {
  return (
    <section id="pillars" className="bg-[#050505] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Excellence Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-[#ca8a04] font-black uppercase tracking-[0.5em] mb-4 block">The Pillars of Global Mastery</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#ca8a04]">Quality.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our 25-year legacy isn't built on longevity alone—it's built on the persistent refinement of these core technical pillars.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <Star className="w-4 h-4 text-[#facc15]" /> Platinum Class Standard
              </span>
           </div>
        </div>

        {/* Pillars High-Fi Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {pillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0d0d] border border-white/5 rounded-[3rem] p-12 flex flex-col h-full hover:border-[#ca8a04]/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#ca8a04]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 rounded-2xl bg-[#ca8a04]/5 border border-[#ca8a04]/10 flex items-center justify-center group-hover:bg-[#ca8a04] group-hover:text-black transition-all">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight">{item.stat}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Benchmark</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-[#ca8a04] transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5">
                 <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-[#ca8a04] flex items-center gap-2 group/link">
                    Case Study Access <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1" />
                 </Link>
                 <Sparkles className="w-5 h-5 text-slate-800 group-hover:text-[#facc15]" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Authority Footer Banner */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#ca8a04]/15 via-[#0d0d0d] to-[#1e1b4b]/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(202,138,4,0.1),transparent)] pointer-events-none grayscale opacity-10">
              <Award className="w-[800px] h-[800px]" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-[#facc15] font-black uppercase tracking-[0.5em] mb-4">The Hall of Technical Excellence</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none italic uppercase">A Legacy <span className="text-[#facc15]">Unmatched.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our quarter-century of innovation isn't just a timeline—it's a global standard of technical delivery. Connect with our institutional desk to explore how this legacy can serve your project.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-[#ca8a04] text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(202,138,4,0.3)]">
                    <Star className="w-5 h-5 fill-white text-white" /> Partner with Perfection
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Globe className="w-4 h-4" /> Global Registry
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
