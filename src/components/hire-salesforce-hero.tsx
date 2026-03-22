"use client";

import { ArrowRight, Cloud, Database, BarChart3, Users2, Code2, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export function SalesforceHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#f8fafc] text-slate-900 flex items-center overflow-hidden pt-20">
      {/* Salesforce Brand Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[0%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#00A1E0]/15 via-blue-200/20 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-indigo-200/20 via-[#00A1E0]/10 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Light dot grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00A1E0]/30 bg-white/80 backdrop-blur-md shadow-[0_2px_15px_rgba(0,161,224,0.1)]">
            <Cloud className="w-4 h-4 text-[#00A1E0] fill-[#00A1E0]/20" />
            <span className="text-[#032d60] text-xs font-bold tracking-widest uppercase">Certified Salesforce Experts</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#032d60]">
            Customize Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] to-indigo-600">Instance Perfectly.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-[500px] leading-relaxed font-light">
            Out-of-the-box CRM limits your revenue. Hire elite Salesforce Architects, APEX Developers, and Admins to build custom Lightning flows, integrate third-party APIs, and unlock your data.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#032d60] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-[#00A1E0] shadow-[0_10px_30px_rgba(3,45,96,0.2)]">
               Hire Certified Talent
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-slate-200 text-[#032d60] bg-white hover:bg-slate-50 transition-colors shadow-sm">
               View Case Studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-slate-200 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-[#032d60]">100<span className="text-[#00A1E0]">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Trailhead Certified</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#032d60]">3<span className="text-[#00A1E0]">x</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Faster Deployments</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Salesforce Integration Graphic */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[450px] h-[550px] transform rotate-y-[-10deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main UI Cloud Dashboard */}
               <div className="absolute top-[10%] left-[5%] w-[110%] md:w-[120%] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,161,224,0.1)] z-20 hover:-translate-y-2 transition-transform cursor-default">
                  
                  {/* Dashboard Header Bar */}
                  <div className="h-12 bg-[#032d60] border-b border-[#032d60] flex items-center px-4 justify-between">
                     <div className="flex items-center gap-3">
                        <Cloud className="w-6 h-6 text-white fill-white" />
                        <span className="text-white font-semibold text-sm">Account 360 View</span>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20"></div>
                     </div>
                  </div>
                  
                  {/* Lightning UI Content */}
                  <div className="p-6 bg-slate-50 relative overflow-hidden h-[300px]">
                     {/* Top Stat Row */}
                     <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col justify-center">
                           <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total ARR</span>
                           <span className="text-lg font-black text-[#032d60]">$2.4M</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col justify-center">
                           <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">Open Opps</span>
                           <span className="text-lg font-black text-[#00A1E0]">12</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col justify-center">
                           <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">Health Score</span>
                           <span className="text-lg font-black text-emerald-500">98%</span>
                        </div>
                     </div>

                     {/* Main Chart Area */}
                     <div className="w-full h-32 bg-white rounded-lg border border-slate-100 shadow-sm relative overflow-hidden p-4">
                        <span className="text-[10px] text-slate-400 font-bold uppercase mb-2 block">Revenue Pipeline Analytics</span>
                        <div className="absolute bottom-0 left-0 w-full h-[60%] flex items-end justify-between px-4 pb-4">
                           <div className="w-1/6 bg-indigo-100 h-[30%] rounded-t-sm"></div>
                           <div className="w-1/6 bg-indigo-200 h-[50%] rounded-t-sm"></div>
                           <div className="w-1/6 bg-[#00A1E0]/50 h-[80%] rounded-t-sm"></div>
                           <div className="w-1/6 bg-[#00A1E0] h-[60%] rounded-t-sm relative">
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#032d60] text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Current</div>
                           </div>
                           <div className="w-1/6 bg-emerald-400 h-[100%] rounded-t-sm"></div>
                        </div>
                     </div>
                  </div>
                  
               </div>

               {/* APEX / LWC Code Floating Snippet */}
               <div className="absolute top-[50%] -left-[15%] lg:-left-[20%] w-[280px] bg-[#032d60] border border-blue-800 rounded-xl p-4 shadow-[0_20px_50px_rgba(3,45,96,0.3)] z-40 transform hover:scale-105 transition-transform hidden sm:block">
                  <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                     <Code2 className="w-4 h-4 text-[#00A1E0]" />
                     <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">RevenueTrigger.apxc</span>
                  </div>
                  <div className="font-mono text-[9px] text-slate-300 leading-relaxed overflow-hidden">
                     <span className="text-pink-400">trigger</span> OppTrigger <span className="text-pink-400">on</span> Opportunity (<span className="text-blue-300">after update</span>) {`{`}<br/>
                     &nbsp;&nbsp;<span className="text-pink-400">if</span> (Trigger.isUpdate) {`{`}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;RevenueEngine.<span className="text-emerald-300">syncToERP</span>(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trigger.newMap,<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trigger.oldMap<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                     &nbsp;&nbsp;{`}`}<br/>
                     {`}`}
                  </div>
               </div>

               {/* Einstein / Mulesoft Floating Node */}
               <div className="absolute top-[20%] right-[-10%] bg-white border border-slate-100 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,161,224,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-[#00A1E0]/20 bg-[#00A1E0]/10 flex items-center justify-center">
                     <Database className="w-6 h-6 text-[#00A1E0]" />
                  </div>
                  <div>
                     <span className="block text-xs font-bold text-[#032d60] uppercase tracking-widest">MuleSoft Link</span>
                     <span className="block text-[10px] text-emerald-500 font-bold flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> ERP Sync Active</span>
                  </div>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
