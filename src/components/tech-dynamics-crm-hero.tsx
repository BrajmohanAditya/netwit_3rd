"use client";

import { ArrowRight, Users, Search, Building2, Link2, MessageSquare, BarChart3 } from "lucide-react";
import Link from "next/link";

export function DynamicsCrmHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#050b14] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Microsoft Corporate Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#015CBB]/20 via-[#00A4EF]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#5C2D91]/15 via-[#015CBB]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Enterprise Data Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(1,92,187,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#015CBB]/30 bg-[#015CBB]/10 backdrop-blur-xl shadow-lg">
            <Building2 className="w-4 h-4 text-[#00A4EF]" />
            <span className="text-[#00A4EF] text-xs font-semibold tracking-widest uppercase">Enterprise Global Operations</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Total Pipeline <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] via-[#015CBB] to-[#5C2D91] font-extrabold tracking-tighter">Command.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-50/60 max-w-[480px] leading-relaxed font-light">
            We architect end-to-end sales pipelines using Microsoft Dynamics 365. Centralize fragmented emails, disconnected ERP data, and rogue spreadsheets into one intelligent, AI-powered system of record.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#015CBB] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(1,92,187,0.3)] hover:bg-[#014790]">
               Deploy Dynamics 365
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit Current CRM <ArrowRight className="w-4 h-4 text-[#00A4EF]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Copilot<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-blue-100/50 font-medium uppercase tracking-wider mt-1">Native AI Integration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Dataverse<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-blue-100/50 font-medium uppercase tracking-wider mt-1">Unified Data Schema</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Dynamics 365 UI */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent CRM Dashboard */}
               <div className="absolute top-[5%] left-[0%] w-full h-[90%] bg-[#081220]/90 backdrop-blur-3xl border border-[#015CBB]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* Web Header Menu */}
                  <div className="h-14 bg-[#040912] border-b border-[#015CBB]/20 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-4 items-center">
                        <div className="w-6 h-6 rounded bg-[#015CBB]/20 flex items-center justify-center border border-[#015CBB]/40">
                           <span className="text-[10px] font-bold text-[#00A4EF]">D</span>
                        </div>
                        <span className="text-xs text-blue-100/70 font-semibold tracking-wider flex items-center gap-2">
                           Dynamics 365 Sales
                        </span>
                     </div>
                     <div className="flex gap-3">
                        <Search className="w-4 h-4 text-slate-500" />
                        <div className="w-6 h-6 rounded-full bg-[#00A4EF]/20 border border-[#00A4EF]/30 flex items-center justify-center text-[10px] text-[#00A4EF] font-bold">AJ</div>
                     </div>
                  </div>
                  
                  {/* Dashboard Sidebar & Main View */}
                  <div className="flex flex-1 overflow-hidden font-sans">
                     
                     {/* Left Nav */}
                     <div className="w-16 border-r border-[#015CBB]/10 flex flex-col items-center py-4 gap-6 bg-[#040912]">
                        <BarChart3 className="w-4 h-4 text-slate-500" />
                        <Users className="w-4 h-4 text-[#00A4EF]" />
                        <Building2 className="w-4 h-4 text-slate-500" />
                        <MessageSquare className="w-4 h-4 text-slate-500" />
                     </div>

                     {/* Main Content Area */}
                     <div className="flex-1 p-5 flex flex-col gap-4">
                        
                        <div className="flex justify-between items-center mb-2">
                           <div>
                              <h3 className="text-sm font-bold text-white">Open Opportunities</h3>
                              <p className="text-[10px] text-slate-400 font-medium">Sorted by: Estimated Close Date</p>
                           </div>
                           <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                              Pipeline: $4.2M
                           </span>
                        </div>

                        {/* CRM List View */}
                        <div className="flex flex-col gap-2">
                           
                           {/* Opportunity Row 1 */}
                           <div className="bg-[#0b1626] border border-[#015CBB]/20 rounded-lg p-3 group hover:bg-[#101f35] transition-colors relative">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 rounded-l-lg"></div>
                              <div className="flex justify-between items-start">
                                 <div>
                                    <span className="text-xs font-bold text-white block mb-0.5">Enterprise License Expansion</span>
                                    <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
                                       <Building2 className="w-3 h-3 text-slate-500" /> Globex Corp
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <span className="text-xs font-bold text-white block">$1,250,500</span>
                                    <span className="text-[9px] font-bold text-rose-400 bg-rose-500/10 px-1.5 rounded uppercase">Proposed</span>
                                 </div>
                              </div>
                           </div>

                           {/* Opportunity Row 2 (Active) */}
                           <div className="bg-[#0b1626] border border-[#00A4EF]/40 rounded-lg p-3 shadow-[0_0_15px_rgba(0,164,239,0.1)] relative">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00A4EF] rounded-l-lg"></div>
                              <div className="flex justify-between items-start">
                                 <div>
                                    <span className="text-xs font-bold text-white block mb-0.5">Dynamics 365 Migration</span>
                                    <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
                                       <Building2 className="w-3 h-3 text-[#00A4EF]" /> Initech LLC
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <span className="text-xs font-bold text-[#00A4EF] block">$840,000</span>
                                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 rounded uppercase">Contract Sent</span>
                                 </div>
                              </div>
                           </div>
                           
                           {/* Opportunity Row 3 */}
                           <div className="bg-[#0b1626] border border-[#015CBB]/20 rounded-lg p-3 group hover:bg-[#101f35] transition-colors relative">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l-lg"></div>
                              <div className="flex justify-between items-start">
                                 <div>
                                    <span className="text-xs font-bold text-white block mb-0.5">Global Rollout Phase 2</span>
                                    <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
                                       <Building2 className="w-3 h-3 text-slate-500" /> Massive Dynamic
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <span className="text-xs font-bold text-white block">$2,100,000</span>
                                    <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 px-1.5 rounded uppercase">Discovery</span>
                                 </div>
                              </div>
                           </div>

                        </div>

                        {/* Power BI Abstract Graph */}
                        <div className="mt-auto bg-[#040912] border border-[#5C2D91]/30 rounded-lg p-3 relative overflow-hidden">
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] text-[#c59cf0] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                 <BarChart3 className="w-3 h-3" /> Q3 Outlook
                              </span>
                           </div>
                           <div className="flex items-end gap-1.5 h-10 w-full overflow-hidden">
                              <div className="w-1/6 bg-[#00A4EF]/30 h-[40%] rounded-t-sm"></div>
                              <div className="w-1/6 bg-[#00A4EF]/50 h-[60%] rounded-t-sm"></div>
                              <div className="w-1/6 bg-[#00A4EF]/70 h-[30%] rounded-t-sm"></div>
                              <div className="w-1/6 bg-[#00A4EF] h-[80%] rounded-t-sm"></div>
                              <div className="w-1/6 bg-[#5C2D91] h-[50%] rounded-t-sm"></div>
                              <div className="w-1/6 bg-emerald-500 h-[90%] rounded-t-sm relative shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                                 <div className="absolute -top-1 w-full h-[2px] bg-emerald-400"></div>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>

               {/* App Ecosystem Link Node */}
               <div className="absolute top-[40%] -right-[15%] bg-[#081220] border border-[#00A4EF]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,164,239,0.2)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#00A4EF]/10 flex items-center justify-center border border-[#00A4EF]/30">
                     <Link2 className="w-6 h-6 text-[#00A4EF]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">Teams Linked</span>
                     <span className="block text-[10px] text-[#00A4EF] font-medium mt-0.5">Record Update Pushed</span>
                  </div>
               </div>

               {/* Background Corporate Flow Abstract */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Users className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
