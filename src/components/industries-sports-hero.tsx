"use client";

import { ArrowRight, Activity, Zap, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SportsHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#09090b] text-white flex items-center overflow-hidden pt-20">
      {/* Dynamic abstract background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-green-500/40 via-blue-600/20 to-transparent blur-[120px] animate-pulse"></div>
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-600/20 to-transparent blur-[100px]"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Live Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
            Unleashing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Peak Performance</span> <br/>
            in Sports Tech
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            Empower fan experiences, ultra-low latency streaming, and real-time analytics with our cutting-edge sports DevOps and infrastructure solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm font-semibold">
            <Link href="#solutions" className="group relative px-8 py-4 bg-emerald-500 text-black rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Explore Engineering <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors">
              <PlayCircle className="w-5 h-5 text-emerald-400" /> Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-8 mt-6 pt-6 border-t border-white/10 w-full">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black text-white">0.2<span className="text-emerald-500">s</span></span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Stream Latency</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black text-white">99.99<span className="text-emerald-500">%</span></span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Uptime</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black text-white">10<span className="text-emerald-500">M+</span></span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Concurrent Streams</span>
            </div>
          </div>
        </div>

        {/* Right Column / Visuals */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] perspective-[1000px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-3xl transform rotate-3 scale-105 blur-md"></div>
          <div className="w-full h-full relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl p-2 flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-700">
            {/* Visual placeholder for high tech sports dashboard */}
            <div className="w-full h-full bg-[#0a0a0a] rounded-2xl relative overflow-hidden flex flex-col p-6">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <span className="text-xs font-mono text-gray-500">live_match_telemetry.jsx</span>
              </div>
              <div className="flex-grow flex items-center justify-center relative">
                 <Activity className="w-48 h-48 text-emerald-500/20 absolute" />
                 <Zap className="w-24 h-24 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] z-10 animate-bounce" />
                 
                 {/* Decorative chart bars */}
                 <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-10 gap-2 h-32 opacity-30">
                    {[30, 45, 60, 40, 80, 50, 70, 90, 65, 85].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-emerald-500 to-teal-300 rounded-t-sm" style={{height: `${h}%`}}></div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
