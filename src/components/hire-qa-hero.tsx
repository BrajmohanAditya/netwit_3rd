"use client";

import { ArrowRight, CheckCircle2, ShieldAlert, TerminalSquare, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function QaHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#070707] text-white flex items-center overflow-hidden pt-20">
      {/* Precision / Pipeline Background Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[10%] left-[0%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-emerald-600/15 via-teal-600/5 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-cyan-600/10 via-emerald-600/5 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Technical Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Elite QA Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Ship Code <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Without Fear.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            Bugs in production cost more than just money—they destroy trust. Hire top-tier QA engineers specializing in Selenium, Cypress, Playwright, and rigorous manual exploratory testing.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
               Hire QA Engineers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               See Testing Frameworks <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">100<span className="text-emerald-400">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Test Coverage Goal</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">99<span className="text-emerald-400">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Bug Containment</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Test Suite Graphic */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[450px] h-[550px] transform rotate-y-[-10deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main Test Suite Terminal Window */}
               <div className="absolute top-[5%] left-[5%] w-[110%] md:w-[120%] bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default">
                  
                  {/* Terminal Header */}
                  <div className="h-10 bg-[#111116] border-b border-white/5 flex items-center px-4 justify-between">
                     <div className="flex items-center gap-2">
                        <TerminalSquare className="w-4 h-4 text-gray-400"/>
                        <span className="text-[10px] text-gray-500 font-mono">cypress run --browser chrome</span>
                     </div>
                     <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  </div>
                  
                  {/* Terminal Content / Logs */}
                  <div className="p-5 font-mono text-[11px] leading-relaxed space-y-3 relative overflow-hidden">
                     {/* Overlay gradient for fade effect at bottom */}
                     <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10"></div>
                     
                     <div className="flex items-start gap-3 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5" />
                        <div>
                           <span className="font-bold">Auth Flow passes</span>
                           <span className="text-gray-500 ml-2">845ms</span>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-3 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5" />
                        <div>
                           <span className="font-bold">Cart calculation is exact</span>
                           <span className="text-gray-500 ml-2">102ms</span>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-3 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-2 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <div>
                           <span className="font-bold">Checkout webhook triggers correct payload</span>
                           <div className="text-[9px] text-gray-400 mt-1 pl-2 border-l border-emerald-500/30 ml-1">
                              cy.intercept('POST', '/api/checkout').as('checkoutRequest')<br/>
                              assert: request.body.amount == 24900
                           </div>
                           <span className="text-gray-500 mt-1 block">420ms</span>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-3 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5" />
                        <div>
                           <span className="font-bold">User profile saves data</span>
                           <span className="text-gray-500 ml-2">232ms</span>
                        </div>
                     </div>

                     <div className="flex items-start gap-3 text-emerald-400 opacity-50">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5" />
                        <div>
                           <span className="font-bold">Password reset sends email</span>
                           <span className="text-gray-500 ml-2">501ms</span>
                        </div>
                     </div>
                  </div>
                  
                  {/* Summary Footer */}
                  <div className="h-10 bg-emerald-500/10 border-t border-emerald-500/20 flex items-center px-4 justify-between">
                     <span className="text-xs font-bold text-emerald-400">All tests passed!</span>
                     <span className="text-[10px] text-emerald-300/70 font-mono">142 passing (12.4s)</span>
                  </div>
               </div>

               {/* Defensive Security Shield Add-on */}
               <div className="absolute top-[20%] right-[-15%] bg-[#111116] border border-cyan-500/30 p-4 rounded-2xl shadow-[0_20px_50px_rgba(6,182,212,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center">
                     <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                     <span className="block text-xs font-bold text-white uppercase tracking-widest">Pen-Tested</span>
                     <span className="block text-[10px] text-gray-400">0 vulnerabilities found</span>
                  </div>
               </div>

               {/* CI Pipeline Tag */}
               <div className="absolute bottom-[10%] left-[-5%] bg-slate-800 text-white font-black text-xs py-3 px-5 rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-40 transform -rotate-3 hover:scale-110 transition-transform flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  Deploy to Production
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
