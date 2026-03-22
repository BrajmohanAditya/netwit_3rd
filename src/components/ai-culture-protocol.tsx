"use client";

import { ArrowRight, Bot, CheckCircle, Cpu, Layers, Microscope, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

const aiPillars = [
  { 
    title: "AI-Powered DevOps", 
    description: "Self-healing infrastructure and cognitive CI/CD pipelines. Our DevOps protocols use predictive analytics to eliminate downtime before it occurs.", 
    tag: "Autonomic",
    icon: Cpu,
    benefit: "Predictive"
  },
  { 
    title: "Predictive Analytics", 
    description: "Enterprise-grade data intelligence. Transforming complex global data streams into clear, actionable technical and business strategy.", 
    tag: "Intelligence",
    icon: TrendingUp,
    stat: "99% Results"
  },
  { 
    title: "Cognitive Automation", 
    description: "Intelligent workflows that evolve with your enterprise. Our automation engines learn from environment feedback to continuously optimize delivery.", 
    tag: "Evolution",
    icon: Zap,
    stat: "High Velocity"
  },
  { 
    title: "Custom ML Models", 
    description: "Specialized models for unique technical challenges. We architect deep-tier machine learning solutions tailored to your specific institutional domain.", 
    tag: "Specialized",
    icon: Microscope,
    stat: "50+ Solutions"
  },
];

export function AiCultureProtocol() {
  return (
    <section id="protocol" className="bg-[#020202] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Protocol Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-purple-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit AI-First Blueprint</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">The Intelligence <span className="text-purple-500 italic underline decoration-purple-500/30">Protocol.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">At Netwit, AI is not an adjunct service; it is the fundamental fabric of our technical culture. Explore the core pillars of our intelligent architecture.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> AI-First DNA Verified
              </span>
           </div>
        </div>

        {/* High-Fi Protocol Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {aiPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0d14] border border-white/5 rounded-[3rem] p-12 flex flex-col h-full hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 rounded-2xl bg-purple-600/5 border border-purple-600/10 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Edge</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-purple-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-purple-400 transition-colors">
                 Explore AI Strategy <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global AI Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-purple-900/20 via-[#0d0d14] to-[#0ea5e9]/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(126,34,206,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-purple-400 font-black uppercase tracking-[0.5em] mb-4">The Global Intelligence Pulse</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase">Evolving <span className="text-purple-500 underline decoration-purple-500/30">Everything.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Join a technical collective where AI is not just used, but built into the core. Connect with our AI architects to design your future.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-purple-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(126,34,206,0.3)]">
                    <Bot className="w-5 h-5 flex-shrink-0" /> AI Strategy Session
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Cpu className="w-4 h-4" /> Solution Registry
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
