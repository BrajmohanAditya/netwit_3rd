"use client";

import { ArrowRight, CloudLightning, Activity, Server, Zap, Globe } from "lucide-react";
import Link from "next/link";

export function DevopsAwsHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0f1523] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* AWS Orange & Midnight Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#FF9900]/20 via-[#d17d00]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#527FFF]/15 via-[#FF9900]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* AWS Infrastructure Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,153,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#FF9900]/30 bg-[#FF9900]/10 backdrop-blur-xl shadow-lg">
            <CloudLightning className="w-4 h-4 text-[#FF9900]" />
            <span className="text-[#FF9900] text-xs font-semibold tracking-widest uppercase">Amazon Cloud Engine</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Infinite <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-[#ffaa2b] to-[#527FFF] font-extrabold tracking-tighter">Elasticity.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-[480px] leading-relaxed font-light">
            Eradicate massive monolithic server limits. We construct declarative, ultra-scalable environments utilizing AWS Event-Driven Serverless architecture, EKS, and deep CloudFormation automation.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#FF9900] text-[#0f1523] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,153,0,0.3)] hover:bg-[#e08600]">
               Deploy AWS Experts
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit Cloud Assets <ArrowRight className="w-4 h-4 text-[#FF9900]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">S3 / EC2<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Foundational Nodes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Lambda<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Zero Server Config</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract AWS Lambda & CI/CD Pipeline GUI */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Serverless Dashboard */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#1c2436]/90 backdrop-blur-3xl border border-[#FF9900]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* Dashboard Header */}
                  <div className="h-12 bg-[#121927] border-b border-[#FF9900]/20 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-4 items-center">
                        <div className="flex gap-2">
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        </div>
                        <span className="text-xs text-slate-300 font-semibold tracking-wider uppercase ml-2 flex items-center gap-2">
                           <Globe className="w-3 h-3 text-[#FF9900]" /> AWS CloudFormation
                        </span>
                     </div>
                     <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-widest font-bold">
                        STACK SYNCED
                     </span>
                  </div>
                  
                  {/* Visual Node Graph Content */}
                  <div className="p-6 flex flex-col gap-6 flex-1 bg-[linear-gradient(rgba(255,153,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,153,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] relative items-center justify-center">
                     
                     {/* Lambda Node (Event Source) */}
                     <div className="w-full max-w-[280px] bg-[#1a293b] border border-[#FF9900]/40 rounded-xl p-3 flex flex-col gap-1 relative z-20 shadow-xl">
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-xs font-bold text-white flex gap-2 items-center">
                              <Zap className="w-4 h-4 text-[#FF9900]" /> API Gateway
                           </span>
                           <span className="text-[#FF9900] text-[9px] font-mono px-1 border border-[#FF9900]/30 rounded">req/12ms</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">Trigger: POST /checkout/process</span>
                     </div>

                     {/* Vertical Arrow Line */}
                     <div className="h-8 w-px bg-gradient-to-b from-[#FF9900] to-[#527FFF] z-10 shrink-0"></div>

                     {/* Event Processing Node */}
                     <div className="w-full max-w-[280px] bg-[#1a293b] border border-[#527FFF]/40 rounded-xl p-3 flex flex-col gap-1 relative z-20 shadow-xl">
                        <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-[#527FFF] animate-pulse"></div>
                        <div className="flex items-center gap-2 mb-1">
                           <Server className="w-4 h-4 text-[#527FFF]" />
                           <span className="text-xs font-bold text-white">AWS Lambda Execution</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">Memory: 1024MB | Concurrency: +540</span>
                     </div>

                     {/* Split Arrow Lines */}
                     <div className="w-full max-w-[200px] flex justify-between relative mt-[-1px] z-10">
                        <div className="w-px h-8 bg-gradient-to-b from-[#527FFF] to-emerald-400 absolute left-0"></div>
                        <div className="h-px bg-[#527FFF] w-full absolute top-0"></div>
                        <div className="w-px h-8 bg-gradient-to-b from-[#527FFF] to-rose-400 absolute right-0"></div>
                     </div>

                     {/* Output Destinations */}
                     <div className="w-full max-w-[340px] flex justify-between gap-4 z-20 mt-7">
                        {/* DynamoDB */}
                        <div className="flex-1 bg-[#1a293b] border border-emerald-400/30 rounded-xl p-3 flex flex-col items-center justify-center shadow-xl">
                           <Activity className="w-5 h-5 text-emerald-400 mb-1" />
                           <span className="text-[10px] font-bold text-white uppercase tracking-wider">DynamoDB</span>
                           <span className="text-[8px] text-slate-400 font-mono mt-0.5">Write Item</span>
                        </div>

                        {/* S3 Storage */}
                        <div className="flex-1 bg-[#1a293b] border border-rose-400/30 rounded-xl p-3 flex flex-col items-center justify-center shadow-xl">
                           <CloudLightning className="w-5 h-5 text-rose-400 mb-1" />
                           <span className="text-[10px] font-bold text-white uppercase tracking-wider">S3 Bucket</span>
                           <span className="text-[8px] text-slate-400 font-mono mt-0.5">Store Receipt PDF</span>
                        </div>
                     </div>

                  </div>
               </div>

               {/* Elasticity Badge */}
               <div className="absolute top-[35%] -right-[15%] bg-[#121927] border border-[#FF9900]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(255,153,0,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#FF9900]/10 flex items-center justify-center border border-[#FF9900]/30">
                     <Activity className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">EKS Cloned</span>
                     <span className="block text-[10px] text-[#FF9900] font-medium mt-0.5">Traffic Spike Defeated</span>
                  </div>
               </div>

               {/* Background AWS Logo Abstract */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Globe className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
