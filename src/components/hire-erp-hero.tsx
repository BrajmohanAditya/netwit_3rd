"use client";

import { ArrowRight, Database, TrendingUp, Users, LineChart, Workflow, Network } from "lucide-react";
import Link from "next/link";

export function ErpHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#07101d] text-white flex items-center overflow-hidden pt-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-600/5 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-sky-600/15 via-cyan-600/5 to-transparent blur-[130px] pointer-events-none"></div>
      </div>

      {/* Corporate Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <Database className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Enterprise Systems Experts</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Unify Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">Business Data.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Siloed data destroys revenue. Hire elite ERP & CRM implementation specialists to deploy, customize, and migrate your enterprise onto Salesforce, SAP, and Microsoft Dynamics perfectly.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-blue-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
               Hire Implementation Teams
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Architectures <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">100<span className="text-blue-400">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Data Integrity</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">0<span className="text-blue-400">hr</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Business Downtime</div>
            </div>
          </div>
        </div>

        {/* Right Column / ERP Integration Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] perspective-[1000px] flex justify-center items-center">
           <div className="relative w-full max-w-[500px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Core Central Hub (CRM/ERP) */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#0b172a] border-2 border-blue-500/50 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.3)] z-30 flex flex-col items-center justify-center cursor-default">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center animate-pulse mb-3">
                     <Workflow className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-sm font-bold text-white tracking-widest uppercase">Central ERP</span>
                  <span className="text-[10px] text-blue-300 font-mono mt-1">Status: Syncing</span>
               </div>

               {/* Surrounding Nodes */}
               {/* Sales Node */}
               <div className="absolute top-[5%] left-[5%] w-36 h-28 bg-[#111827] border border-sky-400/30 rounded-2xl shadow-xl z-20 p-4 flex flex-col justify-center transform -rotate-6 hover:rotate-0 transition-transform">
                  <Users className="w-6 h-6 text-sky-400 mb-2" />
                  <span className="text-xs font-bold text-white">Sales Cloud</span>
                  <div className="w-full h-1 bg-white/5 rounded-full mt-2">
                     <div className="w-full h-full bg-sky-400 rounded-full animate-pulse"></div>
                  </div>
                  {/* Connection Line */}
                  <svg className="absolute -bottom-16 -right-10 w-24 h-24 pointer-events-none" viewBox="0 0 100 100">
                     <path d="M 0 0 C 50 0 50 100 100 100" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinite]" />
                  </svg>
               </div>

               {/* Finance Node */}
               <div className="absolute top-[10%] right-[0%] w-36 h-28 bg-[#111827] border border-emerald-400/30 rounded-2xl shadow-xl z-20 p-4 flex flex-col justify-center transform rotate-6 hover:rotate-0 transition-transform">
                  <LineChart className="w-6 h-6 text-emerald-400 mb-2" />
                  <span className="text-xs font-bold text-white">Finance & Billing</span>
                  <div className="text-emerald-400 text-sm font-mono font-bold mt-1">+$420,105</div>
                  {/* Connection Line */}
                  <svg className="absolute -bottom-16 -left-10 w-24 h-24 pointer-events-none" viewBox="0 0 100 100">
                     <path d="M 100 0 C 50 0 50 100 0 100" fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinite]" />
                  </svg>
               </div>

               {/* Logistics/Ops Node */}
               <div className="absolute bottom-[10%] left-[10%] w-40 h-32 bg-[#111827] border border-orange-400/30 rounded-2xl shadow-xl z-20 p-4 flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex justify-between items-center">
                     <Network className="w-6 h-6 text-orange-400" />
                     <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
                  </div>
                  <span className="text-xs font-bold text-white">Supply Chain Ops</span>
                  <div className="flex gap-1 mt-1">
                     <div className="h-6 w-3 bg-orange-400 rounded-sm"></div>
                     <div className="h-4 w-3 bg-orange-400/50 rounded-sm"></div>
                     <div className="h-8 w-3 bg-orange-400 rounded-sm"></div>
                     <div className="h-5 w-3 bg-orange-400/80 rounded-sm"></div>
                  </div>
               </div>

               {/* Marketing Node */}
               <div className="absolute bottom-[5%] right-[5%] w-36 h-28 bg-[#111827] border border-purple-400/30 rounded-2xl shadow-xl z-20 p-4 flex flex-col justify-center transform rotate-6 hover:rotate-0 transition-transform">
                  <TrendingUp className="w-6 h-6 text-purple-400 mb-2" />
                  <span className="text-xs font-bold text-white">Marketing Automation</span>
                  <span className="text-[10px] text-gray-400 mt-1">10,240 Leads Syncing</span>
               </div>
               
               {/* Global Orbital rings */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full z-10 hidden sm:block pointer-events-none"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 border-dashed rounded-full z-10 hidden sm:block animate-[spin_60s_linear_infinite] pointer-events-none"></div>

           </div>
        </div>
      </div>
    </section>
  );
}
