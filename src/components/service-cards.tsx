"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bot, CheckCircle, Globe, Layers, Microscope, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap, Database, Activity, Code, Cpu, ShieldAlert, MonitorPlay, BarChart3, Binary } from "lucide-react";

const services = [
  { 
    title: "AI Development Hive", 
    description: "Multi-threaded neural architectures designed for autonomous enterprise evolution. We build the intelligence engines for the next global epoch.", 
    tag: "Next-Gen AI",
    icon: Bot,
    benefit: "Neural Sync",
    href: "#"
  },
  { 
    title: "Cyber Security Shield", 
    description: "Elite-tier defensive protocols protecting global digital capital. We engineer zero-trust, mission-critical infrastructure for high-prestige assets.", 
    tag: "Zero-Trust",
    icon: ShieldAlert,
    stat: "NIST Audit",
    href: "#"
  },
  { 
    title: "Cloud Ops Architecture", 
    description: "Elastic, high-fidelity cloud ecosystems engineered for infinite scale. We migrate monolithic liabilities into strategic infrastructure assets.", 
    tag: "High Velocity",
    icon: Database,
    stat: "Global Scale",
    href: "#"
  },
  { 
    title: "Data Intelligence Hub", 
    description: "Institutional-grade technical analytics and predictive telemetry. We transform raw data streams into refined technical capital for CXOs.", 
    tag: "Actionable 360",
    icon: BarChart3,
    stat: "Pattern Lead",
    href: "#"
  },
  { 
    title: "QA Velocity Lab", 
    description: "Automated quality environments engineered for ultra-high velocity cycles. We provide the blueprints for zero-defect software evolution.", 
    tag: "Flawless Code",
    icon: MonitorPlay,
    stat: "70% Time Save",
    href: "#"
  },
  { 
    title: "Global Tech Centers", 
    description: "Strategic talent registries for the world&apos;s most ambitious builds. We curate the elite engineering capacity for your global expansion.", 
    tag: "High Capacity",
    icon: Users,
    stat: "1500+ Experts",
    href: "#"
  },
];

export function ServiceCards() {
  return (
    <section id="services" className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Service Index Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The Service Protocol Index</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm leading-[1.1]">Elite Capacity. <br/><span className="text-blue-500 underline decoration-blue-500/30 font-black italic">Refined Solutions.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed font-sans italic border-l-2 border-blue-500/30 pl-10">Our service portfolio represents the pinnacle of digital engineering. We provide the technical blueprints for high-velocity, reliable, and scalable business evolution.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-xl group">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic group-hover:text-blue-400 transition-colors">
                 <Binary className="w-4 h-4 text-blue-500 animate-[pulse_2s_linear_infinite]" /> Registry Sync: Optimal
              </span>
           </div>
        </div>

        {/* High-Fi Solution Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-10 flex flex-col h-full hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-xl font-black text-white tracking-tight italic uppercase">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">{item.tag}</span>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-6 group-hover:text-glow_blue transition-all italic underline decoration-blue-600/20 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-blue-500 transition-colors">
                 {item.description}
              </p>
              
              <Link 
                href={item.href}
                className="mt-10 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-blue-400 transition-colors italic group"
              >
                 Deploy Protocol Registry <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Global Capacity Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-blue-900/10 via-[#0f172a] to-sky-900/10 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16 shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-blue-400 font-black uppercase tracking-[0.5em] mb-4 italic">The Global Engineering Hub</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-blue-600/30">Actionable <span className="text-blue-500 italic font-black italic">Technical Capital.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed font-sans italic">Our specialists are ready to architect your high-fidelity digital ecosystem. Connect with our principal desk for a strategic roadmap audit.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                 <Link href="#contact" className="px-14 py-6 bg-blue-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(37,99,235,0.3)] italic uppercase tracking-wider">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" /> Enterprise Risk Audit
                 </Link>
                 <Link href="#contact" className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3 italic bg-white/5 shadow-sm uppercase tracking-wider">
                    <Globe className="w-4 h-4" /> Global Capacity Registry
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
