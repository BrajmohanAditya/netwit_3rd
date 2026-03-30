"use client";

import { CheckCircle, Globe, Layers, Microscope, Sparkles, Star, TrendingUp, Users, Zap, HelpCircle } from "lucide-react";
import { useState } from "react";

const challenges = [
  {
    id: 1,
    question: "In-house Accounting Resource Gaps?",
    title: "AI-Augmented Financial Support Teams",
    content: "Access principal-level finance professionals via an AI-powered service model. We augment your accounting on demand, scaling your resource utilization without unnecessary internal headcount overhead.",
    tag: "Resource"
  },
  {
    id: 2,
    question: "Complex Daily Bookkeeping Overhead?",
    title: "AI-Driven Ledger Management & Reporting",
    content: "From general ledger automation to real-time reconciliation and institutional reporting. Our intelligent systems automate routine tasks while unlocking actionable fiscal insights.",
    tag: "Operations"
  },
  {
    id: 3,
    question: "Scaling Requirements Outpacing Systems?",
    title: "On-demand AI-Optimized Global Support",
    content: "Handle back-office financial tasks with startup agility and enterprise-level scale. We provide error-proof bookkeeping automation that matches the pace of your global expansion.",
    tag: "Expansion"
  }
];

export function AccountingChallenges() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
           <span className="text-[10px] text-primary-500 font-black uppercase tracking-[0.5em] italic">The Architectural Solution</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Solve Your <span className="text-primary-500 underline decoration-primary-500/30">Fiscal Challenges.</span></h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed">Our AI-driven financial services are designed to address the most complex bookkeeping and accounting bottlenecks in the SaaS ecosystem.</p>
        </div>

        {/* High-Fi Challenge Flow */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-center">
            
            {/* Challenge Selection Tabs */}
            <div className="flex flex-col gap-4">
               {challenges.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`group relative p-8 rounded-[2.5rem] text-left transition-all duration-500 border overflow-hidden ${
                      activeStep === step.id 
                        ? "bg-primary border-primary-500 shadow-[0_20px_60px_rgba(11,61,145,0.3)] scale-[1.02]" 
                        : "bg-[#0f172a]/40 border-white/5 hover:border-primary-500/20"
                    }`}
                  >
                     <div className="flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-5">
                            <span className={`text-4xl font-black italic tracking-tighter ${activeStep === step.id ? "text-white/20" : "text-primary-500/10 group-hover:text-primary-500/20 transition-colors"}`}>0{step.id}</span>
                            <h3 className={`text-xl font-black italic tracking-tight uppercase ${activeStep === step.id ? "text-white" : "text-slate-500 group-hover:text-white transition-colors"}`}>{step.question}</h3>
                        </div>
                        {activeStep === step.id && <HelpCircle className="w-5 h-5 text-white/40" />}
                     </div>
                     
                     <div className={`absolute bottom-0 left-0 h-1 bg-white/20 transition-all duration-500 ${activeStep === step.id ? "w-full" : "w-0"}`}></div>
                  </button>
               ))}
            </div>

            {/* Challenge Content Card */}
            <div className="relative h-[500px] perspective-[1400px]">
               <div className="w-full h-full bg-gradient-to-br from-primary-900/10 via-[#0f172a] to-blue-900/10 border border-primary/20 rounded-[4rem] p-16 flex flex-col justify-center relative shadow-2xl backdrop-blur-3xl group overflow-hidden">
                  
                  {/* Abstract Background Element */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>

                  <div className="relative z-10 space-y-10 animate-in fade-in slide-in-from-right-8 duration-500" key={activeStep}>
                     <div className="flex items-center gap-4">
                        <span className="text-[10px] text-primary-400 font-black uppercase tracking-[0.5em] italic">Solution Registry</span>
                        <div className="h-[1px] w-12 bg-primary-500/30"></div>
                        <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest italic">{challenges.find(s => s.id === activeStep)?.tag} Level</span>
                     </div>

                     <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-tight uppercase underline decoration-primary-600/30">
                        {challenges.find(s => s.id === activeStep)?.title}
                     </h2>

                     <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed border-l-2 border-primary-500/30 pl-10 italic">
                        {challenges.find(s => s.id === activeStep)?.content}
                     </p>

                     <div className="pt-10 flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                           <CheckCircle className="w-6 h-6 text-primary-400" />
                        </div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest italic">Solution Outcome Verified</span>
                     </div>
                  </div>

                  {/* Icon Abstract */}
                  <div className="absolute bottom-12 right-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000 grayscale">
                     <TrendingUp className="w-32 h-32" />
                  </div>
               </div>
            </div>

        </div>

      </div>
    </section>
  );
}
