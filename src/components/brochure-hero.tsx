"use client";

import { ArrowRight, Book, Download, FileText, Globe, Layers, Ribbon, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function BrochureHero() {
   return (
      <section className="relative w-full min-h-[90vh] bg-[#0c0d12] text-white flex items-center overflow-hidden pt-20 font-sans">
         {/* Brand Charcoal & Vibrant Coral Gradients */}
         <div className="absolute inset-0 z-0">
            <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#f97316]/15 via-[#475569]/10 to-transparent blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#475569]/15 via-[#f97316]/10 to-transparent blur-[150px] pointer-events-none"></div>
         </div>

         {/* Brand Grid Pattern */}
         <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

         <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">

            {/* Left Column */}
            <div className="flex flex-col items-start gap-8 z-20 pt-10">
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 backdrop-blur-xl shadow-lg">
                  <Ribbon className="w-4 h-4 text-[#fb923c]" />
                  <span className="text-[#fb923c] text-xs font-semibold tracking-widest uppercase">The Official Brand Identity</span>
               </div>

               <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
                  Experience <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#fde047] font-extrabold tracking-tighter italic">Netsmartz.</span>
               </h1>

               <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
                  Download our company portfolio. A comprehensive deep-dive into our global engineering ecosystem, service benchmarks, and the cultural DNA that fuels our partners' success.
               </p>

               <div className="flex flex-wrap items-center gap-4 mt-2">
                  <Link href="#brochures" className="group relative px-8 py-4 bg-[#f97316] text-[#0c0d12] font-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:bg-[#ea580c]">
                     Get Official Brochure
                  </Link>
                  <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
                     Our Brand Story <ArrowRight className="w-4 h-4 text-[#fb923c]" />
                  </button>
               </div>

               <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
                  <div>
                     <div className="text-3xl font-bold text-white tracking-tighter">Gold<span className="text-[#fb923c] text-2xl font-black ml-1">★</span></div>
                     <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: Identity Certified</div>
                  </div>
                  <div>
                     <div className="text-3xl font-bold text-white tracking-tighter">Global<span className="text-[#fb923c] text-2xl ml-1">●</span></div>
                     <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Updates: Brand Hub</div>
                  </div>
               </div>
            </div>

            {/* Right Column / Brochure Abstract */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
               <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">

                  {/* Translucent Brand Card */}
                  <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">

                     <div className="flex justify-between items-start mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center">
                           <FileText className="w-6 h-6 text-[#fb923c]" />
                        </div>
                        <span className="text-[10px] font-bold text-[#fb923c] bg-[#f97316]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#f97316]/10">
                           Brand Artifact
                        </span>
                     </div>

                     <div className="space-y-6 flex-1">
                        <div className="text-xs text-slate-500 font-mono uppercase tracking-[0.3em]">Identity Core // 2026.V1</div>

                        <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#fb923c] transition-colors italic">
                           The Netwit Ledger: Engineering at Infinite Scale.
                        </h2>

                        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-12 bg-white/5 p-4 rounded-xl border border-white/5">
                           <ShieldCheck className="w-4 h-4 text-emerald-500" /> Authorized Marketing Release
                        </div>
                     </div>

                     <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                        <div className="flex flex-col">
                           <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase mb-1">Print Resolution</span>
                           <span className="text-xs text-white font-bold tracking-tight">300 DPI // Vector Ready</span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#f97316] text-[#0c0d12] flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform">
                           <Download className="w-5 h-5 group-hover:animate-bounce" />
                        </div>
                     </div>
                  </div>

                  {/* Quality Badge */}
                  <div className="absolute top-[65%] -right-[15%] bg-white text-[#0c0d12] p-5 rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10">
                        <Zap className="w-6 h-6 fill-[#fb923c] text-[#fb923c]" />
                     </div>
                     <div>
                        <span className="block text-sm font-bold tracking-tight">HD Content</span>
                        <span className="block text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">Master Brochure</span>
                     </div>
                  </div>

                  {/* Abstract Backdrop */}
                  <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                     <Layers className="w-64 h-64" />
                  </div>

               </div>
            </div>
         </div>
      </section>
   );
}
