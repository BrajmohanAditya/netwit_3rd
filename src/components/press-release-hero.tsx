"use client";

import { ArrowRight, BarChart3, Globe, Newspaper, Radio, Share2, Zap } from "lucide-react";
import Link from "next/link";

export function PressReleaseHero() {
   return (
      <section className="relative w-full min-h-[90vh] bg-[#05060d] text-white flex items-center overflow-hidden pt-20 font-sans">
         {/* Editorial Indigo & Platinum Silver Gradients */}
         <div className="absolute inset-0 z-0">
            <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#4338CA]/15 via-[#1E1B4B]/10 to-transparent blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#E2E8F0]/5 via-[#4338CA]/10 to-transparent blur-[150px] pointer-events-none"></div>
         </div>

         {/* Broadcast Pattern */}
         <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(67,56,202,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

         <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">

            {/* Left Column */}
            <div className="flex flex-col items-start gap-8 z-20 pt-10">
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#4338CA]/30 bg-[#4338CA]/10 backdrop-blur-xl shadow-lg">
                  <Radio className="w-4 h-4 text-[#818CF8]" />
                  <span className="text-[#818CF8] text-xs font-semibold tracking-widest uppercase">Official Corporate Announcements</span>
               </div>

               <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
                  Company <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-slate-100 font-extrabold tracking-tighter italic">Frontline.</span>
               </h1>

               <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
                  Insights from the engineering frontier. Stay informed about our global expansion, strategic partnerships, and new service benchmarks as we redefine digital transformation.
               </p>

               <div className="flex flex-wrap items-center gap-4 mt-2">
                  <Link href="#feed" className="group relative px-8 py-4 bg-slate-100 text-[#05060d] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:bg-white">
                     Explore Press Feed
                  </Link>
                  <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
                     Media Inquiries <ArrowRight className="w-4 h-4 text-[#818CF8]" />
                  </button>
               </div>

               <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
                  <div>
                     <div className="text-3xl font-bold text-white tracking-tighter">Global<span className="text-[#818CF8] text-2xl font-black ml-1">#</span></div>
                     <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: International Core</div>
                  </div>
                  <div>
                     <div className="text-3xl font-bold text-white tracking-tighter">Live<span className="text-indigo-400 text-2xl ml-1">●</span></div>
                     <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Updates: Verified Source</div>
                  </div>
               </div>
            </div>

            {/* Right Column / Press Abstract */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
               <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">

                  {/* Translucent Editorial Card */}
                  <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">

                     <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-[#4338CA]/10 border border-[#4338CA]/20 flex items-center justify-center">
                           <Radio className="w-6 h-6 text-[#818CF8]" />
                        </div>
                        <span className="text-[10px] font-bold text-[#818CF8] bg-[#4338CA]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#4338CA]/10">
                           Official Release
                        </span>
                     </div>

                     <div className="space-y-6 flex-1">
                        <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">March 22, 2026 // NEW YORK</div>

                        <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#818CF8] transition-colors">
                           Netwit Reaches 500+ Engineering Milestone.
                        </h2>

                        <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-3">
                           Today we announce a massive surge in our global engineering capacity, solidifying our mission to provide unparalleled technical scale for our enterprise partners...
                        </p>
                     </div>

                     <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white/40 grayscale">
                              <Globe className="w-4 h-4" />
                           </div>
                           <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase uppercase">Distributed Core</span>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#818CF8]">Read Full Bulletin</button>
                     </div>
                  </div>

                  {/* New Release Badge */}
                  <div className="absolute top-[65%] -right-[15%] bg-white text-[#05060d] p-5 rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10">
                        <Zap className="w-6 h-6 text-[#818CF8] fill-[#818CF8]" />
                     </div>
                     <div>
                        <span className="block text-sm font-bold tracking-tight">Active Bulletin</span>
                        <span className="block text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">Released Today</span>
                     </div>
                  </div>

                  {/* Abstract Backdrop */}
                  <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                     <Newspaper className="w-64 h-64" />
                  </div>

               </div>
            </div>
         </div>
      </section>
   );
}
