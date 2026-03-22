"use client";

import { ArrowRight, Cloud, GitMerge, Settings, Terminal } from "lucide-react";
import Link from "next/link";

export function DevopsAzureHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#050b14] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Azure Blue & Cloud Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#0078D4]/20 via-[#00adef]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#5C2D91]/15 via-[#0078D4]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Cloud Pipeline Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,120,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#0078D4]/30 bg-[#0078D4]/10 backdrop-blur-xl shadow-lg">
            <Cloud className="w-4 h-4 text-[#0078D4]" />
            <span className="text-[#0078D4] text-xs font-semibold tracking-widest uppercase">Microsoft Cloud Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Automate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] via-[#00adef] to-[#5C2D91] font-extrabold tracking-tighter">Everything.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-50/60 max-w-[480px] leading-relaxed font-light">
            Eradicate manual server provisioning. We construct impenetrable, automated CI/CD pipelines utilizing Azure DevOps, Kubernetes (AKS), and declarative Infrastructure as Code (IaC).
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#0078D4] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,120,212,0.3)] hover:bg-[#005ea6]">
               Deploy DevOps Architects
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit Infrastructure <ArrowRight className="w-4 h-4 text-[#0078D4]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">CI/CD<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-blue-100/50 font-medium uppercase tracking-wider mt-1">Zero Downtime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">IaC<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-blue-100/50 font-medium uppercase tracking-wider mt-1">Bicep & Terraform</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract DevOps Pipeline UI */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent UI Dashboard */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#081220]/90 backdrop-blur-3xl border border-[#0078D4]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* Dashboard Header */}
                  <div className="h-12 bg-[#040912] border-b border-[#0078D4]/20 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-4 items-center">
                        <div className="flex gap-2">
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        </div>
                        <span className="text-xs text-blue-100/70 font-semibold tracking-wider uppercase ml-2 flex items-center gap-2">
                           <GitMerge className="w-3 h-3 text-[#0078D4]" /> Azure Pipelines
                        </span>
                     </div>
                     <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-widest font-bold">
                        Building...
                     </span>
                  </div>
                  
                  {/* Pipeline Graph Content */}
                  <div className="p-6 flex flex-col gap-6 flex-1 bg-[linear-gradient(rgba(0,120,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,120,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px]">
                     
                     {/* Job 1: Build */}
                     <div className="w-full bg-[#050b14] border border-[#0078D4]/40 rounded-xl p-4 flex flex-col gap-2 relative">
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0078D4] border-4 border-[#081220] z-10"></div>
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold text-white flex gap-2 items-center">
                              <Terminal className="w-4 h-4 text-[#0078D4]" /> Job: Docker Compose Build
                           </span>
                           <span className="text-[#0078D4] text-[10px] font-mono">1m 12s</span>
                        </div>
                        <div className="w-full bg-[#03070b] h-1.5 rounded-full mt-2 overflow-hidden">
                           <div className="h-full bg-[#0078D4] w-full"></div>
                        </div>
                     </div>

                     {/* Job 2: Test & Analyze */}
                     <div className="w-full bg-[#050b14] border border-emerald-500/40 rounded-xl p-4 flex flex-col gap-2 relative ml-8">
                        <div className="absolute -left-[3.25rem] top-1/2 -translate-y-1/2 w-[3.5rem] h-px bg-[#0078D4]/50"></div>
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#081220] z-10"></div>
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold text-white flex gap-2 items-center">
                              <Settings className="w-4 h-4 text-emerald-500" /> Unit Tests & SonarQube
                           </span>
                           <span className="text-emerald-500 text-[10px] font-mono">Completed</span>
                        </div>
                     </div>

                     {/* Job 3: AKS Deployment (In Progress) */}
                     <div className="w-full bg-[#050b14] border border-amber-500/40 rounded-xl p-4 flex flex-col gap-2 relative shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                        <div className="absolute -left-[3.25rem] top-[-3.5rem] w-px h-[6rem] bg-emerald-500/50"></div>
                        <div className="absolute -left-[3.25rem] top-1/2 -translate-y-1/2 w-[3.5rem] h-px bg-amber-500/50"></div>
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#081220] z-10 animate-pulse"></div>
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold text-white flex gap-2 items-center">
                              <Cloud className="w-4 h-4 text-amber-500" /> Deploy to AKS Cluster (Production)
                           </span>
                           <span className="text-amber-500 text-[10px] font-mono animate-pulse">Running...</span>
                        </div>
                        <div className="mt-2 bg-[#040912] p-2 rounded-lg border border-amber-500/20 font-mono text-[9px] text-slate-400">
                           <span className="text-[#0078D4]">kubectl</span> apply -f k8s/production-deployment.yaml<br/>
                           deployment.apps/enterprise-api configured<br/>
                           Waiting for rollout to finish: 1 of 6 updated replicas are available...
                        </div>
                     </div>

                  </div>
               </div>

               {/* ARM Badge */}
               <div className="absolute top-[65%] -left-[15%] bg-[#081220] border border-[#5C2D91]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(92,45,145,0.2)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#5C2D91]/10 flex items-center justify-center border border-[#5C2D91]/30">
                     <span className="font-mono text-[#c59cf0] font-bold text-lg">IaC</span>
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">ARM / Bicep</span>
                     <span className="block text-[10px] text-[#c59cf0] font-medium mt-0.5">Resources Provisioned</span>
                  </div>
               </div>

               {/* Background Azure Logo Abstract */}
               <div className="absolute -top-10 -right-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Cloud className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
