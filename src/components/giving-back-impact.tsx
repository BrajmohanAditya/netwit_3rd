"use client";

import { ArrowRight, BookOpen, CheckCircle, Globe, GraduationCap, Heart, Layers, Leaf, Microscope, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const impactPillars = [
  { 
    title: "Education & Scholarships", 
    description: "Architecting paths for the next generation. We provide full technical scholarships and learning resources to underprivileged students across 50+ schools.", 
    tag: "Education",
    icon: GraduationCap,
    benefit: "Future Growth"
  },
  { 
    title: "Environmental Stewardship", 
    description: "Beyond green code. We support global reforestation and clean energy initiatives to offset the digital carbon footprint of our enterprise partners.", 
    tag: "Nature",
    icon: Leaf,
    stat: "Verified Hub"
  },
  { 
    title: "Community Social Labs", 
    description: "Direct human-tier support in every hub we operate. Over 1000+ volunteer hours dedicated annually to local social and healthcare causes.", 
    tag: "Community",
    icon: Users,
    stat: "1000+ Hours"
  },
  { 
    title: "Technical Philanthropy", 
    description: "Building 'Tech for Good'. We provide free architectural consultation and delivery for NGOs and social enterprises scaling global impact.", 
    tag: "Service",
    icon: Heart,
    stat: "Free Blueprints"
  },
];

export function GivingBackImpact() {
  return (
    <section id="impact" className="bg-[#020502] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Impact Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-pink-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Stewardship Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Transforming <span className="text-pink-500 underline decoration-pink-500/30">Communities.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our legacy is measured by the human impact we deliver. Explore the core pillars of our global corporate social responsibility registry.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Impact Status Verified
              </span>
           </div>
        </div>

        {/* High-Fi Impact Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {impactPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0a0d] border border-white/5 rounded-[3.5rem] p-12 flex flex-col h-full hover:border-pink-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-pink-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-20 h-20 rounded-3xl bg-pink-600/5 border border-pink-600/10 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <item.icon className="w-10 h-10" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight italic">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Level</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-pink-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-pink-400 transition-colors">
                 Explore Impact Registry <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-pink-900/20 via-[#0d0a0d] to-emerald-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-pink-400 font-black uppercase tracking-[0.5em] mb-4">The Global Human Heart</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-pink-600/30">Making a <span className="text-pink-500">Difference.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Innovation is only valuable if it serves humanity. Connect with our stewardship team to discuss partnership, volunteering, or social initiatives.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-pink-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(236,72,153,0.3)]">
                    <Heart className="w-5 h-5 flex-shrink-0" /> Application Desk
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Globe className="w-4 h-4" /> Global Impact Registry
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
