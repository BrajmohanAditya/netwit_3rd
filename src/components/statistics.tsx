"use client";

import { motion } from "framer-motion";
import { Users, Code, Building, Globe, Activity, Database, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { 
    label: "SaaS Systems Built", 
    value: "2000+", 
    icon: Building, 
    color: "text-blue-500", 
    tag: "Institutional" 
  },
  { 
    label: "AI Neural Specialists", 
    value: "200+", 
    icon: Code, 
    color: "text-primary-400", 
    tag: "High Velocity" 
  },
  { 
    label: "Global SaaS Experts", 
    value: "1500+", 
    icon: Users, 
    color: "text-indigo-500", 
    tag: "Technical Collective" 
  },
  { 
    label: "Global Compliance Nodes", 
    value: "100%", 
    icon: ShieldCheck, 
    color: "text-sky-500", 
    tag: "Hardened" 
  },
];

export function Statistics() {
  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />
      </div>

      <div className="max-w-[1250px] mx-auto px-6 relative z-10">
        
        {/* Dynamic Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The Metrics of Digital Capital</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm leading-[1.1]">Proven Scale. <br/><span className="text-blue-500 underline decoration-blue-500/30 font-black italic">Refined Performance.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed font-sans italic border-l-2 border-blue-500/30 pl-10">We transform complex technical requirements into high-value digital assets. Our scale is a testament to the institutional precision we bring to every global partnership.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-xl group">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic group-hover:text-blue-400 transition-colors">
                 <Activity className="w-4 h-4 text-blue-500 animate-[pulse_2s_linear_infinite]" /> Global Sync Rate: 100%
              </span>
           </div>
        </div>

        {/* High-Fi Statistics Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="group bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 p-12 rounded-[4rem] flex flex-col items-center justify-center text-center hover:border-blue-500/30 hover:shadow-[0_25px_80px_rgba(37,99,235,0.2)] transition-all duration-500 relative overflow-hidden"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                   <stat.icon className="w-8 h-8" />
                </div>

                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter group-hover:text-glow_blue transition-all italic mb-6 shadow-sm leading-none">{stat.value}</span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest italic h-10 flex items-center">{stat.label}</span>
                
                {/* Micro-Brand Tag */}
                <span className="mt-8 text-[8px] text-blue-500 font-black uppercase tracking-[0.4em] italic opacity-40 group-hover:opacity-100 transition-opacity">Registry // {stat.tag}</span>
             </motion.div>
          ))}
        </div>

        {/* Dynamic Global Presence Context */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-10 md:gap-24 items-center">
           <div className="flex items-center gap-4 text-slate-500 grayscale group hover:grayscale-0 transition-all">
              <Database className="w-10 h-10 opacity-30 group-hover:text-blue-500 group-hover:opacity-100 transition-all" />
              <div className="text-left">
                 <span className="block text-[10px] font-black uppercase tracking-widest italic">Data Capacity</span>
                 <span className="block text-sm font-bold text-white italic">Hardened Infrastructure</span>
              </div>
           </div>
           <div className="flex items-center gap-4 text-slate-500 grayscale group hover:grayscale-0 transition-all">
              <Zap className="w-10 h-10 opacity-30 group-hover:text-sky-500 group-hover:opacity-100 transition-all" />
              <div className="text-left">
                 <span className="block text-[10px] font-black uppercase tracking-widest italic">Actionable Velocity</span>
                 <span className="block text-sm font-bold text-white italic">Zero-Latency Sync</span>
              </div>
           </div>
           <div className="flex items-center gap-4 text-slate-500 grayscale group hover:grayscale-0 transition-all">
              <Globe className="w-10 h-10 opacity-30 group-hover:text-indigo-500 group-hover:opacity-100 transition-all" />
              <div className="text-left">
                 <span className="block text-[10px] font-black uppercase tracking-widest italic">Global Protocol</span>
                 <span className="block text-sm font-bold text-white italic">Strategic Stewardship</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
