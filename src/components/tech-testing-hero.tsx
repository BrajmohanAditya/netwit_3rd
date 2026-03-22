"use client";

import { ArrowRight, CheckCircle2, Terminal, Code2, LayoutDashboard, Bug, Play, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function TestingHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#050608] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* QA Green & Alert Red Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#10B981]/15 via-[#059669]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#3b82f6]/10 via-[#10B981]/15 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Test Matrix Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 backdrop-blur-xl shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span className="text-[#10B981] text-xs font-semibold tracking-widest uppercase">Absolute Quality Assurance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Zero <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#34d399] to-[#3b82f6] font-extrabold tracking-tighter">Regressions.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            Production failures compromise enterprise reputation. We construct rigorous, highly-automated End-to-End (E2E) testing matrices utilizing Cypress, Selenium, and intense manual exploratory QA.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#10B981] text-[#050608] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:bg-[#059669]">
               Deploy QA Engineers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit Test Coverage <ArrowRight className="w-4 h-4 text-[#10B981]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">E2E<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Automated Matrices</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Load<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Stress Benchmarks</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Cypress Test Runner UI */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Test Runner UI */}
               <div className="absolute top-[5%] left-[0%] w-full h-[90%] bg-[#0f1115]/90 backdrop-blur-3xl border border-[#10B981]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* App Header Header */}
                  <div className="h-12 bg-[#08090b] border-b border-white/5 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-4 items-center">
                        <div className="w-6 h-6 rounded bg-[#10B981]/20 flex items-center justify-center border border-[#10B981]/40">
                           <LayoutDashboard className="w-3 h-3 text-[#10B981]" />
                        </div>
                        <span className="text-xs text-slate-300 font-semibold tracking-wider flex items-center gap-2">
                           Automated Test Runner
                        </span>
                     </div>
                     <div className="flex gap-4 items-center">
                        <div className="flex gap-1.5 text-[10px] font-mono text-emerald-400 items-center bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                           <CheckCircle2 className="w-3 h-3" /> 42
                        </div>
                        <div className="flex gap-1.5 text-[10px] font-mono text-slate-500 items-center">
                           <Terminal className="w-3 h-3" /> 0.8s
                        </div>
                     </div>
                  </div>
                  
                  {/* Test Execution Body */}
                  <div className="flex flex-1 overflow-hidden font-sans">
                     
                     {/* Left Tree Nav */}
                     <div className="w-[180px] border-r border-white/5 flex flex-col py-4 px-3 gap-3 bg-[#08090b]">
                        
                        <div className="flex flex-col gap-2">
                           <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold ml-1">E2E Specs</span>
                           
                           {/* Spec 1. Passing */}
                           <div className="flex items-center gap-2 text-[10px] font-mono text-slate-300 py-1 px-2 hover:bg-white/5 rounded cursor-default border border-transparent">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              login_auth.cy.ts
                           </div>

                           {/* Spec 2. Active */}
                           <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 py-1 border border-emerald-500/20 px-2 rounded cursor-default overflow-hidden relative">
                              <div className="absolute left-0 bottom-0 h-[1px] w-1/2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
                              <Play className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                              checkout_flow.cy.ts
                           </div>
                           
                           {/* Spec 3. Pending */}
                           <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 py-1 px-2 hover:bg-white/5 rounded cursor-default border border-transparent">
                              <Terminal className="w-3 h-3 text-slate-600" />
                              api_contract.cy.ts
                           </div>

                        </div>
                     </div>

                     {/* Main DOM/Execution Frame */}
                     <div className="flex-1 p-0 flex flex-col bg-[#0a0c0f]">
                        
                        {/* URL Bar */}
                        <div className="h-8 border-b border-white/5 bg-[#050608] flex items-center px-4">
                           <div className="flex-1 h-5 bg-[#0f1115] rounded border border-white/10 flex items-center px-2">
                              <span className="text-[9px] font-mono text-slate-400">http://localhost:3000/cart/checkout</span>
                           </div>
                        </div>

                        {/* Test Assertion Logs */}
                        <div className="flex-1 p-4 font-mono text-[10px] leading-relaxed overflow-hidden relative flex flex-col gap-1">
                           
                           <div className="flex gap-2 items-center text-slate-400">
                              <span className="text-[#3b82f6] px-1 py-px rounded bg-blue-500/10">TEST</span>
                              <span>Verifying Enterprise Checkout Flow</span>
                           </div>

                           <div className="flex gap-3 items-center mt-2 group border-l border-emerald-500/30 pl-2 ml-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                              <span className="text-emerald-400 font-bold w-12 text-right">GET</span>
                              <span className="text-slate-300 truncate">data-cy="checkout-btn"</span>
                           </div>

                           <div className="flex gap-3 items-center group border-l border-emerald-500/30 pl-2 ml-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                              <span className="text-[#3b82f6] font-bold w-12 text-right">CLICK</span>
                              <span className="text-slate-300 truncate">element attached to DOM</span>
                           </div>

                           <div className="flex gap-3 items-center group border-l border-emerald-500/30 pl-2 ml-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                              <span className="text-[#8b5cf6] font-bold w-12 text-right">ASSERT</span>
                              <span className="text-slate-300 truncate">expected URL to include `/payment`</span>
                           </div>

                           <div className="flex gap-3 items-center group border-l border-emerald-500/30 pl-2 ml-1 mt-2">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                              <span className="text-emerald-400 font-bold w-12 text-right">TYPE</span>
                              <span className="text-slate-300 truncate">data-cy="card-input" -&gt; [hidden]</span>
                           </div>

                           {/* Active Assert line */}
                           <div className="flex gap-3 items-center group border-l-2 border-emerald-400 pl-2 ml-[3px] mt-2 bg-[#10B981]/5 px-2 py-1 rounded-r border border-[#10B981]/10">
                              <Terminal className="w-3 h-3 text-emerald-400 shrink-0 animate-pulse" />
                              <span className="text-[#f59e0b] font-bold w-12 text-right">INTERCEPT</span>
                              <span className="text-emerald-50 text-xs">POST /api/v1/charge</span>
                              <span className="ml-auto text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-[8px] animate-pulse cursor-pointer">
                                 AWAITING (200)
                              </span>
                           </div>

                        </div>

                     </div>
                  </div>
               </div>

               {/* Catch Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-[#08090b] border border-rose-500/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(225,29,72,0.15)] z-40 transform hover:-translate-y-2 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/30">
                     <Bug className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">Bug Caught</span>
                     <span className="block text-[10px] text-rose-400 font-medium mt-0.5">Pre-Production Branch</span>
                  </div>
               </div>

               {/* Background Test Matrix Abstract */}
               <div className="absolute -top-10 -left-16 opacity-[0.03] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Code2 className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
