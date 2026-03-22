"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Layers, Microscope, Lock, Activity, Server, Cpu, Globe, Database, Cog } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "DevSecOps Protocol",
    description: "Secure your SaaS applications with AI-powered DevSecOps. We integrate machine learning models to detect anomalies, automate threat responses, and ensure compliance—without slowing down your development cycle.",
    icon: ShieldCheck,
    tag: "Hardened",
    stat: "NIST Aligned"
  },
  {
    title: "CI/CD Optimization Hive",
    description: "Streamline your continuous integration and delivery pipelines with AI. We leverage intelligent generative AI tools for DevOps solutions to enhance workflows, speed up deployment, and improve overall quality.",
    icon: Zap,
    tag: "High Velocity",
    stat: "4x Faster"
  },
  {
    title: "Site Reliability Lab",
    description: "Our AI-enhanced SRE practices focus on system scalability, incident management, and proactive monitoring for a seamless user experience, helping you achieve unmatched reliability and performance.",
    icon: Activity,
    tag: "99.99% Core",
    stat: "Zero Downtime"
  },
  {
    title: "Infra & Config Stewardship",
    description: "We leverage AI to automate infrastructure provisioning and configuration, ensuring consistency, reducing human error, and enabling self-healing systems that adapt to real-time performance metrics.",
    icon: Server,
    tag: "Self-Healing",
    stat: "Immutable"
  },
  {
    title: "Strategic DevOps Audit",
    description: "Gain expert AI-driven insights to elevate your DevOps strategy. Our tailored assessments identify gaps and opportunities, guiding you toward enhanced efficiency and innovation.",
    icon: Microscope,
    tag: "Architectural",
    stat: "ROI Lead"
  },
  {
    title: "Global Cloud Migration",
    description: "Multi-cloud orchestration strategies for global enterprise scale. We migrate your legacy technical debt into high-value distributed assets across AWS, Azure, and GCP.",
    icon: Globe,
    tag: "Distributed",
    stat: "Multi-Cloud"
  }
];

export function DevOpsFeatures() {
  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5 italic">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The DevOps Service Matrix</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm leading-[1.1]">Elite Capacity. <br/><span className="text-blue-500 underline decoration-blue-500/30 font-black italic">Cloud Engineering.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed font-sans italic border-l-2 border-blue-500/30 pl-10">Get AI-powered DevOps automation designed to enhance efficiency, scalability, and innovation. From seamless integrations to intelligent automation, we ensure peak performance.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-xl group">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic group-hover:text-blue-400 transition-colors">
                 <Cog className="w-4 h-4 text-blue-500 animate-[spin_3s_linear_infinite]" /> Environment Sync: Verified
              </span>
           </div>
        </div>

        {/* Feature Matrix Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
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
                    <span className="block text-xl font-black text-white tracking-tight italic uppercase">{item.stat}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">{item.tag}</span>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-6 group-hover:text-glow_blue transition-all italic underline decoration-blue-600/20 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-blue-500 transition-colors">
                 {item.description}
              </p>
              
              <Link 
                href="#"
                className="mt-10 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-blue-400 transition-colors italic group"
              >
                 Deploy Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
