"use client";

import { ArrowRight, MapPin, Navigation, Compass, Target } from "lucide-react";
import Link from "next/link";

export function LogisticsHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#09090b] text-white flex items-center overflow-hidden pt-20">
      {/* Dynamic Background Network / Map vibe */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] border-[1px] border-amber-500/20 rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] border-[1px] border-orange-500/10 rounded-full -translate-x-[5vw] -translate-y-[5vw]"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        {/* Animated route lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
           <path d="M 100 800 Q 300 400 800 200 T 1500 100" fill="transparent" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="2" strokeDasharray="10 10"/>
           <path d="M -100 500 Q 400 600 900 300 T 1800 400" fill="transparent" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="2" strokeDasharray="5 15"/>
           <circle cx="800" cy="200" r="4" fill="#f59e0b" className="animate-pulse" />
           <circle cx="900" cy="300" r="4" fill="#f97316" className="animate-ping" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
            <Navigation className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Smart Logistics Orchestration</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            Engineering the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">Global Supply Chain</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[550px] leading-relaxed font-light">
            Optimize fleet management, predictive routing, and warehouse automation with low-latency, scalable DevOps infrastructure engineered specifically for modern logistics.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#solutions" className="group relative px-8 py-4 bg-amber-500 text-gray-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
               Deploy Smarter Routes
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               View Architecture <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-10 mt-6 pt-6 border-t border-white/10 w-full">
            <div>
              <div className="text-3xl font-black text-white">0<span className="text-amber-400">ms</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Data Latency</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">100<span className="text-amber-400">K+</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Fleets Tracked/Sec</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract UI Map */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center perspective-[1200px]">
           <div className="relative w-full h-full max-w-[500px] max-h-[500px] bg-[#111] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(245,158,11,0.1)] p-6 transform rotate-x-6 hover:rotate-x-0 rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-700 overflow-hidden flex flex-col group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/20 transition-colors"></div>
              
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10 relative z-10">
                 <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-mono text-gray-300 font-bold uppercase tracking-widest">Global Overview</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                 </div>
              </div>
              
              <div className="flex-grow relative rounded-xl bg-[#030303] border border-white/5 overflow-hidden">
                 {/* Map representation dots */}
                 <div className="absolute inset-0 bg-[#09090b]"></div>
                 <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.2)_0%,transparent_70%)]"></div>
                 <MapPin className="absolute top-[30%] left-[20%] w-6 h-6 text-amber-400 border border-amber-400/30 rounded-full p-1 bg-amber-400/10 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] z-10" />
                 <MapPin className="absolute top-[60%] left-[70%] w-8 h-8 text-orange-500 border border-orange-500/30 rounded-full p-1 bg-orange-500/10 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-bounce z-10" />
                 <Compass className="absolute bottom-[20%] left-[20%] w-5 h-5 text-gray-500 z-10" />
                 
                 {/* Connecting line */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                    <line x1="25%" y1="35%" x2="70%" y2="60%" stroke="rgba(245,158,11,0.4)" strokeWidth="2" strokeDasharray="5 5" />
                 </svg>
                 
                 {/* Data overlay */}
                 <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex flex-col gap-2 z-20 shadow-xl">
                    <div className="flex justify-between items-center gap-6">
                       <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Active Fleet:</span>
                       <span className="text-[10px] text-amber-400 font-mono font-bold">ETA 02:40</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                       <div className="w-[70%] h-full bg-gradient-to-r from-amber-500 to-orange-400"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
