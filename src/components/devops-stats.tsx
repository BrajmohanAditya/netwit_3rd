"use client";

import { motion } from "framer-motion";
import { Users, Globe, Building, Code, Activity, ShieldCheck, Zap, Database, Cpu } from "lucide-react";

export function DevOpsStats() {
  const stats = [
    { value: "150+", label: "Certified Talent", icon: Users, tag: "Registry // Experts" },
    { value: "12+", label: "Industries", icon: Building, tag: "Global Vertical" },
    { value: "300+", label: "Cloud Ecosystems", icon: Database, tag: "Technical Assets" },
    { value: "10+", label: "Locations", icon: Globe, tag: "Distributed Delivery" },
  ];

  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5 italic">
      <div className="max-w-[1250px] mx-auto px-6 relative z-10">
        
        {/* Statistics Header */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
           <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The Metrics of Cloud Capital</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm leading-[1.1] max-w-4xl">
              Trusted <span className="text-blue-500 underline decoration-blue-500/30 font-black italic">DevOps Expertise.</span> <br/>Proven Architectural Scale.
           </h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl font-sans italic border-l-2 border-blue-500/30 pl-10 md:pl-0 md:border-l-0">We go beyond automation. By embedding AI-driven DevOps into your processes, we ensure intelligent deployments, predictive maintenance, and continuous innovation.</p>
        </div>

        {/* High-Fi Statistics Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="group bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 p-12 rounded-[4rem] flex flex-col items-center justify-center text-center hover:border-blue-500/30 hover:shadow-[0_25px_80px_rgba(37,99,235,0.2)] transition-all duration-500 relative overflow-hidden"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                   <stat.icon className="w-8 h-8" />
                </div>

                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter group-hover:text-glow_blue transition-all italic mb-6 shadow-sm leading-none">{stat.value}</span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest italic h-10 flex items-center">{stat.label}</span>
                
                {/* Micro-Brand Tag */}
                <span className="mt-8 text-[8px] text-blue-500 font-black uppercase tracking-[0.4em] italic opacity-40 group-hover:opacity-100 transition-opacity">{stat.tag}</span>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
