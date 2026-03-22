"use client";

import { ArrowRight, CheckCircle, Globe, Layers, Leaf, Microscope, Sparkles, Star, Sun, TrendingUp, Users, Wind, Zap } from "lucide-react";
import Link from "next/link";

const impactPillars = [
  { 
    title: "Green Cloud Computing", 
    description: "Architecting for energy efficiency. We deploy high-performance cloud solutions that leverage serverless protocols and green data center clusters to minimize energy waste.", 
    tag: "Energy",
    icon: Wind,
    benefit: "Efficient"
  },
  { 
    title: "Eco-Friendly SDLC", 
    description: "Sustainable software development lifecycle. Our engineering protocols prioritize resource-efficient code and lean technical architectures to reduce compute overhead.", 
    tag: "Lifecycle",
    icon: Leaf,
    stat: "Verified"
  },
  { 
    title: "Digital Carbon Track", 
    description: "Real-time carbon footprint visibility. We integrate high-fidelity monitoring tools to help our partners track and reduce the environmental impact of their technical stack.", 
    tag: "Monitoring",
    icon: TrendingUp,
    stat: "40% Reduc"
  },
  { 
    title: "Renewable Operations", 
    description: "100% green energy powered global capability centers. Our commitment to sustainability begins within our own technical walls and extends globally.", 
    tag: "Compliance",
    icon: Sun,
    stat: "100% Green"
  },
];

export function SustainabilityImpact() {
  return (
    <section id="impact" className="bg-[#030303] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Impact Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Sustainability Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Scaling <span className="text-emerald-500 italic underline decoration-emerald-500/30">Green.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Sustainability is an architectural requirement at Netwit. We build the technical blueprints for a greener, more efficient global digital future.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Green Tech DNA Verified
              </span>
           </div>
        </div>

        {/* High-Fi Impact Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {impactPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0d0d] border border-white/5 rounded-[3rem] p-12 flex flex-col h-full hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 rounded-2xl bg-emerald-600/5 border border-emerald-600/10 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Edge</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-emerald-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-emerald-400 transition-colors">
                 Explore Green Strategy <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Green Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-emerald-900/20 via-[#0d0d0d] to-green-900/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-emerald-400 font-black uppercase tracking-[0.5em] mb-4">The Global Green Pulse</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-emerald-600/30">Sustainability as <span className="text-emerald-500">Standard.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Join a technical collective where sustainability is an architectural requirement. Connect with our green tech advisors to design your carbon-neutral future.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-emerald-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(16,185,129,0.3)]">
                    <Leaf className="w-5 h-5 flex-shrink-0" /> Green Strategy Session
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
