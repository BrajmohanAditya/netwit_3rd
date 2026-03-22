"use client";

import { CheckCircle2, Cloud, Lock, BarChart3, Globe } from "lucide-react";
import Link from "next/link";

export function DevopsAwsBenefits() {
  const points = [
    "AWS holds over 33% of the world's entire cloud market share. The reliability is absolutely unmatched.",
    "Decouple monoliths into Serverless AWS microservices, turning hosting costs from fixed to variable metrics.",
    "Implement Infrastructure As Code (IaC) to definitively version-control architecture, destroying configuration drift.",
    "Provide enterprise-grade defense by separating production and staging completely via virtual VPC networks.",
    "Instantly clone entire backend systems across the globe into new geographic availability zones via scripts.",
    "Remove human error entirely by blocking developers from manual deployments. The pipeline enforces CI/CD laws."
  ];

  return (
    <section className="bg-gradient-to-b from-[#0f1523] to-[#040911] py-24 relative overflow-hidden text-white border-t border-[#1e293b] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#FF9900]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Uncrashable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#527FFF] to-[#FF9900]">Ecosystem.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            When monolithic infrastructure prevents agility, AWS DevOps acts as the accelerator. By heavily utilizing Elastic Kubernetes (EKS) and declarative DevOps pipelines, your engineering output becomes significantly faster and mathematically reliable.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#FF9900] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#FF9900] text-[#0f1523] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,153,0,0.3)] hover:shadow-[0_0_50px_rgba(255,153,0,0.5)]">
             Automate AWS Environment
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#121927]/50 border border-[#1e293b] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#151c2a] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Cloud className="w-8 h-8 text-[#FF9900] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">#1</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Global Market Leader</span>
           </div>
           
           <div className="bg-[#121927]/50 border border-[#1e293b] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#151c2a] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Lock className="w-8 h-8 text-rose-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">VPC</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Virtual Private Defense</span>
           </div>
           
           <div className="bg-[#121927]/50 border border-[#1e293b] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#151c2a] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Globe className="w-8 h-8 text-[#527FFF] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">10X</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Release Velocity</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#1a2331] to-[#040911] border border-[#FF9900]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF9900]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Elastic.</h4>
              <p className="text-sm text-amber-100/70 leading-relaxed relative z-10 font-light">Auto-scaling instances mathematically adjust horizontal workloads in precisely real-time.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
