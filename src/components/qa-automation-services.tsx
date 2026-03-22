"use client";

import { ArrowRight, CheckCircle, Globe, Layers, Microscope, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap, MonitorPlay, RefreshCw, Infinity as InfinityIcon } from "lucide-react";
import Link from "next/link";

const services = [
  { 
    title: "Functional Testing", 
    description: "We validate every core feature of your application using AI-enabled test case generation and prioritization, ensuring it functions as expected in various real-world scenarios. This intelligent approach to software testing tools helps maintain a smooth and intuitive user experience.", 
    tag: "Integrity",
    icon: MonitorPlay,
    benefit: "End-to-End"
  },
  { 
    title: "Performance Testing", 
    description: "We assess your product's ability to handle different levels of usage, using anomaly detection and AI tools for software testing to ensure it remains fast, responsive, and stable even under peak traffic conditions.", 
    tag: "Velocity",
    icon: Zap,
    stat: "High Scale"
  },
  { 
    title: "Security Testing", 
    description: "Protecting user data is a top priority. We conduct rigorous security assessments to identify vulnerabilities, safeguard against potential threats, and prevent unauthorized access, ensuring your application remains safe and trustworthy.", 
    tag: "Fortified",
    icon: ShieldCheck,
    stat: "NIST Audit"
  },
  { 
    title: "Regression Testing", 
    description: "Every update or new feature should integrate seamlessly without disrupting existing functionalities. We automate regression tests using self-healing AI scripts to ensure continuous stability and prevent unexpected issues in evolving software environments.", 
    tag: "Autopilot",
    icon: RefreshCw,
    stat: "Self-Healing"
  },
  { 
    title: "CI/CD Testing", 
    description: "We support modern development workflows with AI test automation at every stage of CI/CD. Our data-driven pipelines enable quicker deployments, early bug detection, and improved reliability helping you maintain a fast-paced development cycle.", 
    tag: "Sync",
    icon: InfinityIcon,
    stat: "Automated Feed"
  },
  { 
    title: "UI/UX Automation", 
    description: "Ensuring visual and experiential excellence across all devices. We use visual regression and pixel-perfect comparison tools to guarantee that your brand’s aesthetic remains consistent across every deployment.", 
    tag: "Aesthetic",
    icon: Sparkles,
    stat: "Pixel Perfect"
  },
];

export function QAAutomationServices() {
  return (
    <section id="services" className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Services Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit QA Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Precision Quality <span className="text-blue-500 underline decoration-blue-500/30">Assurance.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our QA services are engineered for high-performance SaaS environments. We provide a full spectrum of automated validation protocols to ensure your product's excellence.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> QA Status: Optimized
              </span>
           </div>
        </div>

        {/* High-Fi Service Tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f172a]/40 backdrop-blur-3xl border border-blue-500/10 rounded-[3.5rem] p-10 flex flex-col h-full hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-blue-600/5 border border-blue-600/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-xl font-black text-white tracking-tight italic uppercase">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">{item.tag}</span>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-5 group-hover:text-glow_blue transition-all italic underline decoration-blue-600/20">{item.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-blue-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-10 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-blue-400 transition-colors italic">
                 Deploy Service Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Authority Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-blue-900/10 via-[#0f172a] to-indigo-900/10 border border-blue-500/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-blue-400 font-black uppercase tracking-[0.5em] mb-4 italic">The Global QA Hub</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-blue-600/30">Zero <span className="text-blue-500">Defects.</span> Total Velocity.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our QA specialists are ready to architect your testing ecosystem. Connect with our engineering desk for a high-fidelity roadmap audit.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-blue-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(59,130,246,0.3)] italic">
                    <Microscope className="w-5 h-5 flex-shrink-0" /> Enterprise QA Audit
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3 italic">
                    <Globe className="w-4 h-4" /> Global Desk
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
