"use client";

import { CheckCircle, Globe, Layers, Microscope, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Strategic Analysis & Planning",
    content: "We assess your SaaS product architecture, identify high-risk delivery zones, and set objective test protocols for maximum architectural efficiency.",
    tag: "Blueprint"
  },
  {
    id: 2,
    title: "Hybrid Protocol Integration",
    content: "We implement robust automated testing frameworks while retaining strategic manual validation for complex human-centric elements.",
    tag: "Engineering"
  },
  {
    id: 3,
    title: "Continuous CI/CD Optimization",
    content: "We integrate automated test suites directly into your cloud-native pipelines enabling faster release cycles and verified software delivery.",
    tag: "Deployment"
  },
  {
    id: 4,
    title: "Ongoing Performance Monitoring",
    content: "Post-deployment validation and system performance monitoring. We update test scripts and leverage AI insights to maintain high-fidelity quality.",
    tag: "Stewardship"
  }
];

export function QAAutomationFlow() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
           <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] italic">The Delivery Protocol</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Engineered for <span className="text-blue-500 underline decoration-blue-500/30">Success.</span></h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed">Our proven QA automation process is designed for high-prestige SaaS delivery. From blueprint to stewardship, we ensure your product's excellence.</p>
        </div>

        {/* High-Fi Process Flow */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-center">
            
            {/* Step Selection Tabs */}
            <div className="flex flex-col gap-4">
               {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`group relative p-8 rounded-[2.5rem] text-left transition-all duration-500 border overflow-hidden ${
                      activeStep === step.id 
                        ? "bg-blue-600 border-blue-500 shadow-[0_20px_60px_rgba(59,130,246,0.3)] scale-[1.02]" 
                        : "bg-[#0f172a]/40 border-white/5 hover:border-blue-500/20"
                    }`}
                  >
                     <div className="flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-5">
                            <span className={`text-4xl font-black italic tracking-tighter ${activeStep === step.id ? "text-white/20" : "text-blue-500/10 group-hover:text-blue-500/20 transition-colors"}`}>0{step.id}</span>
                            <h3 className={`text-xl font-black italic tracking-tight uppercase ${activeStep === step.id ? "text-white" : "text-slate-500 group-hover:text-white transition-colors"}`}>{step.title}</h3>
                        </div>
                        {activeStep === step.id && <Sparkles className="w-5 h-5 text-white/40" />}
                     </div>
                     
                     <div className={`absolute bottom-0 left-0 h-1 bg-white/20 transition-all duration-500 ${activeStep === step.id ? "w-full" : "w-0"}`}></div>
                  </button>
               ))}
            </div>

            {/* Step Content Card */}
            <div className="relative h-[500px] perspective-[1400px]">
               <div className="w-full h-full bg-gradient-to-br from-blue-900/10 via-[#0f172a] to-blue-900/10 border border-blue-500/20 rounded-[4rem] p-16 flex flex-col justify-center relative shadow-2xl backdrop-blur-3xl group overflow-hidden">
                  
                  {/* Abstract Background Element */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>

                  <div className="relative z-10 space-y-10 animate-in fade-in slide-in-from-right-8 duration-500" key={activeStep}>
                     <div className="flex items-center gap-4">
                        <span className="text-[10px] text-blue-400 font-black uppercase tracking-[0.5em] italic">Phase Registry</span>
                        <div className="h-[1px] w-12 bg-blue-500/30"></div>
                        <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">{steps.find(s => s.id === activeStep)?.tag} Level</span>
                     </div>

                     <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-tight uppercase underline decoration-blue-600/30">
                        {steps.find(s => s.id === activeStep)?.title}
                     </h2>

                     <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed border-l-2 border-blue-500/30 pl-10 italic">
                        {steps.find(s => s.id === activeStep)?.content}
                     </p>

                     <div className="pt-10 flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                           <CheckCircle className="w-6 h-6 text-blue-400" />
                        </div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Procedural Outcome Verified</span>
                     </div>
                  </div>

                  {/* Icon Abstract */}
                  <div className="absolute bottom-12 right-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000 grayscale">
                     <Microscope className="w-32 h-32" />
                  </div>
               </div>
            </div>

        </div>

      </div>
    </section>
  );
}
