"use client";

import { motion } from "framer-motion";
import { LineChart, Lightbulb, Settings, LifeBuoy, ArrowRight, Zap, Target, Code, Cpu, Activity, Database, Globe } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Strategic Audit",
    description: "Our experts analyze the current IT infrastructure, resources, and product portfolio to devise a winning DevOps strategy for your SaaS business.",
    icon: Target,
    label: "Registry Audit",
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Implementation Flow",
    description: "Architecting the multi-threaded deployment pipelines and environment parity. We bridge the gap between development intent and operations reality.",
    icon: Code,
    label: "Protocol Build",
    color: "bg-indigo-600"
  },
  {
    id: 3,
    title: "Solution Sync",
    description: "Continuous integration and automated delivery cycles. We deploy self-healing infrastructure that adapts to real-time performance telemetry.",
    icon: Cpu,
    label: "Dynamic Scaling",
    color: "bg-sky-600"
  },
  {
    id: 4,
    title: "Operational Stewardship",
    description: "Proactive monitoring, incident prevention, and infinite maintenance. We ensure your technical capital remains resilient and secure 24/7/365.",
    icon: Activity,
    label: "24/7 Velocity",
    color: "bg-emerald-600"
  }
];

export function DevOpsProcess() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5 italic">
      <div className="max-w-[1250px] mx-auto px-6 relative z-10">
        
        {/* Process Header */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
           <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The Lifecycle Protocol</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm leading-[1.1] max-w-4xl">
              Accelerating Your Product <br className="hidden md:block" />Development in <span className="text-blue-500 underline decoration-blue-500/30 font-black italic">Four Critical Steps.</span>
           </h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl font-sans italic border-l-2 border-blue-500/30 pl-10 md:pl-0 md:border-l-0">Seamlessly integrate DevOps best practices into your SaaS operations with Netsmartz.</p>
        </div>

        {/* Process Visualizer */}
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center">
           
           {/* Left: Dynamic Grid */}
           <div className="grid grid-cols-2 gap-8 relative">
              {/* Central Neural Hub Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full z-0"></div>
              
              {steps.map((step, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setActiveTab(idx)}
                   className={`relative group p-10 rounded-[3.5rem] border transition-all duration-500 text-left overflow-hidden ${activeTab === idx ? 'bg-[#0f172a] border-blue-500/50 shadow-[0_30px_100px_rgba(37,99,235,0.2)]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                 >
                    {/* Step Number Badge */}
                    <div className={`absolute top-0 right-0 w-16 h-16 flex items-center justify-center font-black text-xs italic ${activeTab === idx ? 'bg-blue-600 text-white shadow-xl' : 'bg-white/5 text-slate-500'}`} style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}>
                       <span className="rotate-[-45deg] translate-x-3 translate-y-[-12px]">{step.id}</span>
                    </div>

                    <step.icon className={`w-12 h-12 mb-8 transition-transform duration-500 ${activeTab === idx ? 'text-blue-400 scale-110' : 'text-slate-500 group-hover:scale-110 group-hover:text-blue-400'}`} strokeWidth={1.5} />
                    
                    <div className="space-y-2">
                       <span className={`text-[8px] font-black uppercase tracking-[0.4em] italic block ${activeTab === idx ? 'text-blue-400' : 'text-slate-600'}`}>Protocol // {step.label}</span>
                       <h4 className="text-xl font-black text-white italic tracking-tight uppercase leading-snug">{step.title}</h4>
                    </div>

                    {/* Progress Indicator Line (Active) */}
                    {activeTab === idx && (
                       <motion.div 
                         layoutId="process-progress"
                         className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"
                       />
                    )}
                 </button>
              ))}
           </div>

           {/* Right: Narrative Detail */}
           <div className="space-y-12">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                 <div className="flex items-center gap-4">
                    <span className="text-7xl font-black text-white/5 italic select-none">0{steps[activeTab].id}</span>
                    <div className="h-0.5 flex-1 bg-white/5">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: "100%" }}
                         transition={{ duration: 1 }}
                         className="h-full bg-blue-600/30"
                       />
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter shadow-sm">{steps[activeTab].title}</h3>
                    <p className="text-slate-400 text-lg font-light leading-relaxed italic border-l-2 border-blue-500/30 pl-10">
                       {steps[activeTab].description}
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-4 pt-6">
                    <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black tracking-widest uppercase italic group hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                       <Zap className="w-4 h-4" /> Deploy Analysis Registry
                    </div>
                    <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-slate-500 text-[10px] font-black tracking-widest uppercase italic hover:bg-white/10 transition-all cursor-pointer">
                       <Database className="w-4 h-4" /> Global Node Sync
                    </div>
                 </div>
              </motion.div>
              
              <div className="pt-12 border-t border-white/5">
                 <div className="flex items-center justify-between">
                    <div className="flex -space-x-4">
                       {[1,2,3,4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-[#0f172a] flex items-center justify-center text-[10px] font-bold text-slate-500 italic">0{i}</div>
                       ))}
                    </div>
                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest italic flex items-center gap-3">
                       <Globe className="w-4 h-4 text-blue-500" /> Operational Stewardship Core Active
                    </span>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
