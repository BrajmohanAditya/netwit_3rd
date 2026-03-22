"use client";

import { ArrowRight, TerminalSquare, Activity, GitCommit, Cloud, GitBranch } from "lucide-react";
import Link from "next/link";

export function DevOpsHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white flex items-center overflow-hidden pt-20">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-emerald-600/10 via-teal-600/5 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-cyan-600/10 via-blue-600/5 to-transparent blur-[130px]"></div>
        {/* Engineering grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1fr,1fr] gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Elite SRE & DevOps Talent</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Automate. <br/>
            Scale. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Dominate.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            Skip the recruiting bottleneck. Hire world-class DevOps engineers to architect your CI/CD, orchestrate Kubernetes, and implement bulletproof Infrastructure as Code.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
               Hire a DevOps Engineer
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Review Tech Stacks <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-10 mt-8 pt-6 border-t border-white/10 w-full">
            <div>
              <div className="text-3xl font-black text-white">10<span className="text-emerald-400">x</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Deployment Speed</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">0<span className="text-emerald-400">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Manual Provisioning</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual abstract pipeline */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] perspective-[1000px] flex justify-center items-center">
           <div className="relative w-full max-w-[500px] h-[500px] transform rotate-x-12 rotate-y-[-12deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* 3D connected blocks representing CI/CD */}
               <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-[#111] border border-cyan-500/30 rounded-2xl flex flex-col items-center justify-center p-4 shadow-2xl z-20 hover:-translate-y-2 transition-transform cursor-pointer">
                  <GitBranch className="w-8 h-8 text-cyan-400 mb-2" />
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider">Source Control</span>
                  {/* Pipeline edge */}
                  <svg className="absolute top-1/2 left-full w-24 h-24 overflow-visible pointer-events-none" viewBox="0 0 100 100">
                     <path d="M 0 0 C 50 0 50 80 100 80" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]"/>
                  </svg>
               </div>

               <div className="absolute top-[35%] right-[15%] w-36 h-36 bg-[#111] border border-emerald-500/30 rounded-2xl flex flex-col items-center justify-center p-4 shadow-2xl z-30 hover:-translate-y-2 transition-transform cursor-pointer bg-gradient-to-br from-[#111] to-[#0a1511]">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center animate-ping"></div>
                  <GitCommit className="w-10 h-10 text-emerald-400 mb-2" />
                  <span className="text-[10px] font-mono text-emerald-100 tracking-wider font-bold">CI/CD Build</span>
                  {/* Pipeline edge to production */}
                  <svg className="absolute top-full left-1/2 w-24 h-40 overflow-visible pointer-events-none" viewBox="0 0 100 150">
                     <path d="M 0 0 C 0 80 -80 80 -120 120" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]"/>
                  </svg>
               </div>

               <div className="absolute bottom-[5%] left-[20%] w-48 h-32 bg-[#111] border border-teal-500/30 rounded-2xl flex flex-col items-center justify-center p-6 shadow-2xl z-40 hover:-translate-y-2 transition-transform cursor-pointer">
                  <Cloud className="w-10 h-10 text-teal-400 mb-3" />
                  <span className="text-[11px] font-mono text-gray-300 tracking-wider font-bold">Kubernetes Prod</span>
                  <div className="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                     <div className="w-full h-full bg-gradient-to-r from-teal-400 to-emerald-500"></div>
                  </div>
               </div>
               
               {/* Terminal overlay */}
               <div className="absolute bottom-[35%] right-[0%] w-40 h-auto bg-[#0a0a0c] border border-white/10 rounded-xl p-3 shadow-2xl z-50">
                  <div className="flex items-center gap-1.5 mb-2">
                     <TerminalSquare className="w-3 h-3 text-gray-500" />
                     <span className="text-[8px] font-mono text-gray-500">terraform apply</span>
                  </div>
                  <div className="font-mono text-[8px] leading-relaxed text-gray-400">
                     <p><span className="text-emerald-400">+</span> aws_eks_cluster.main</p>
                     <p><span className="text-emerald-400">+</span> aws_rds_cluster.db</p>
                     <p className="text-gray-500">Plan: 12 to add, 0 to destroy.</p>
                  </div>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
