"use client";

import { ArrowRight, TrendingUp, Target, Users, Mail, Filter } from "lucide-react";
import Link from "next/link";

export function LeadGenHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#fcfcfd] text-slate-900 flex items-center overflow-hidden pt-20">
      {/* Soft gradient background */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-orange-400/20 via-rose-300/10 to-transparent blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-500/5 to-transparent blur-[100px]"></div>
      </div>
      
      {/* Light dot grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-orange-200 bg-white/60 backdrop-blur-md shadow-sm">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">B2B Growth Engineers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
            Scale Revenue, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Not Headcount.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-[500px] leading-relaxed font-light">
            Hire elite lead-generation specialists equipped with AI-powered prospecting frameworks. Fill your CRM with sales-qualified opportunities on autopilot.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-orange-400 shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
               Build Your Pipeline
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm">
               View Case Studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-10 mt-8 pt-6 border-t border-slate-200 w-full">
            <div>
              <div className="text-3xl font-black text-slate-800">3<span className="text-orange-500">x</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Average Pipeline Growth</div>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-800">-40<span className="text-orange-500">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Cost Per Acquisition</div>
            </div>
          </div>
        </div>

        {/* Right Column / Visual "Funnel" Abstract */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center perspective-[1200px]">
           <div className="relative w-full max-w-[480px] h-[550px]">
               
               {/* Decorative background aura */}
               <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center justify-center p-8 overflow-hidden z-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-tr-full opacity-50"></div>

                  <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8 z-10 w-full text-center">Prospecting Engine</h3>

                  {/* Funnel visual layers */}
                  <div className="w-[90%] h-16 bg-slate-50 rounded-xl border border-slate-100 mb-4 flex items-center justify-between px-6 shadow-sm z-10 transform translate-y-0 hover:-translate-y-1 transition-transform cursor-default">
                     <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold text-slate-700">Total Audience</span>
                     </div>
                     <span className="font-mono font-bold text-slate-400">140,250</span>
                  </div>

                  <div className="w-[75%] h-16 bg-slate-50 rounded-xl border border-slate-100 mb-4 flex items-center justify-between px-6 shadow-sm z-10 transform translate-y-0 hover:-translate-y-1 transition-transform cursor-default relative">
                     <div className="absolute -left-10 text-orange-500 animate-bounce">
                        <Filter className="w-5 h-5" />
                     </div>
                     <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-indigo-400" />
                        <span className="font-semibold text-slate-700">ICP Match</span>
                     </div>
                     <span className="font-mono font-bold text-slate-400">12,400</span>
                  </div>

                  <div className="w-[60%] h-16 bg-slate-50 rounded-xl border border-slate-100 mb-4 flex items-center justify-between px-6 shadow-sm z-10 transform translate-y-0 hover:-translate-y-1 transition-transform cursor-default">
                     <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-rose-400" />
                        <span className="font-semibold text-slate-700">Engaged</span>
                     </div>
                     <span className="font-mono font-bold text-slate-400">3,120</span>
                  </div>

                  <div className="w-[45%] h-16 bg-gradient-to-r from-orange-400 to-rose-500 rounded-xl mb-4 flex items-center justify-between px-6 shadow-[0_10px_20px_rgba(249,115,22,0.2)] z-10 transform translate-y-0 hover:-translate-y-2 transition-transform cursor-default relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-rose-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                     <div className="flex items-center gap-3 relative z-10">
                        <TrendingUp className="w-5 h-5 text-white" />
                        <span className="font-bold text-white tracking-wide">SQLs booked</span>
                     </div>
                     <span className="font-mono font-black text-white relative z-10 text-xl">285</span>
                  </div>
               </div>

               {/* Floating metrics box */}
               <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-30 flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <div>
                     <p className="text-sm text-slate-500 font-medium">Meeting booked via</p>
                     <p className="text-slate-900 font-black tracking-tight">AI Outreach Agent</p>
                  </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
