"use client";

import { ArrowRight, Signal, Network, WifiHigh, Activity } from "lucide-react";
import Link from "next/link";

export function TelecomHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#020817] text-white flex items-center overflow-hidden pt-20">
      {/* Background Grid & Nodes */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_20%,transparent_100%)]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8 z-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <Signal className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Next-Gen Connectivity</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            Architecting the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Future of Telecom</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[550px] leading-relaxed font-light">
            Modernize your OSS/BSS, orchestrate 5G rollouts, and enable edge computing with our cloud-native DevOps solutions designed for global telecom providers.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#solutions" className="group relative px-8 py-4 bg-white text-blue-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-cyan-50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
               Modernize Your Network
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Speak to an Expert <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-10 mt-6 pt-6 border-t border-white/10 w-full">
            <div>
              <div className="text-3xl font-black text-white">5<span className="text-cyan-400">G</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Ready Infrastructure</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">99.999<span className="text-cyan-400">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Carrier-Grade Uptime</div>
            </div>
          </div>
        </div>

        {/* Visual / 3D Abstract Representation */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center perspective-[1200px]">
           {/* Floating Nodes */}
           <div className="relative w-full h-full max-w-[500px] max-h-[500px] transform rotate-x-12 rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-1000">
               {/* Main Core */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-[2px] flex items-center justify-center border-4 border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.5)] z-20">
                   <Network className="w-12 h-12 text-white/90" />
               </div>
               
               {/* Orbiting Elements */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#020817] border border-cyan-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                     <WifiHigh className="w-5 h-5 text-cyan-400" />
                  </div>
               </div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-indigo-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none">
                  <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#020817] border border-indigo-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                     <Activity className="w-6 h-6 text-indigo-400" />
                  </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
