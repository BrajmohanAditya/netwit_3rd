"use client";

import { ArrowRight, Code2, MonitorSmartphone, Zap, Server, Globe, Search } from "lucide-react";
import Link from "next/link";

export function WebAppHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#09090b] text-white flex items-center overflow-hidden pt-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-cyan-600/15 via-blue-600/5 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-teal-600/15 via-emerald-600/5 to-transparent blur-[130px] pointer-events-none"></div>
         {/* Web-like subtle dot grid */}
         <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Elite Web Engineers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Build Fast. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">Scale Infinitely.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            Hire top 1% web developers specializing in React, Next.js, Vue, and Angular. We architect ultra-fast, SEO-optimized Web Apps that delight users and drive conversions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
               Hire Web Developers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Stacks <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">100<span className="text-cyan-400"></span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Lighthouse Score</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">0<span className="text-cyan-400">ms</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Layout Shift</div>
            </div>
          </div>
        </div>

        {/* Right Column / Browser Graphic Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] perspective-[1000px] flex justify-center items-center">
           <div className="relative w-full max-w-[500px] h-full transform rotate-y-[-10deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main Browser Window */}
               <div className="absolute top-[10%] left-[5%] w-[110%] md:w-[120%] h-[350px] bg-[#111116] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-20 hover:-translate-y-2 transition-transform cursor-default">
                  {/* Browser top-bar */}
                  <div className="h-10 bg-[#0a0a0c] border-b border-white/5 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                     <div className="ml-4 w-full max-w-[200px] h-6 bg-white/5 rounded-md border border-white/5 flex items-center px-3">
                        <Search className="w-3 h-3 text-gray-500 mr-2" />
                        <span className="text-[10px] text-gray-500 font-mono">localhost:3000</span>
                     </div>
                  </div>
                  {/* Browser content */}
                  <div className="p-6 relative">
                     {/* Skeleton UI simulating a modern SaaS app */}
                     <div className="w-[30%] h-6 bg-cyan-500/20 rounded mb-8"></div>
                     <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                        <div className="h-24 bg-cyan-500/10 rounded-lg border border-cyan-500/20"></div>
                        <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                     </div>
                     <div className="w-full h-32 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-[40%] h-[80%] bg-blue-500/20 rounded-tr-xl"></div>
                        <div className="absolute bottom-0 left-[25%] w-[30%] h-[100%] bg-cyan-500/30 rounded-t-xl"></div>
                        <div className="absolute bottom-0 left-[50%] w-[40%] h-[60%] bg-emerald-500/20 rounded-tl-xl"></div>
                     </div>
                  </div>
               </div>

               {/* Lighthouse Floating Badge */}
               <div className="absolute top-[0%] -right-6 lg:-right-12 bg-[#050505] border border-white/10 p-4 rounded-2xl shadow-[0_20px_50px_rgba(6,182,212,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center">
                     <span className="text-emerald-400 font-bold text-sm">100</span>
                  </div>
                  <div>
                     <span className="block text-xs font-bold text-gray-300 uppercase tracking-widest">Performance</span>
                     <span className="block text-[10px] text-gray-500">Core Web Vitals Pass</span>
                  </div>
               </div>

               {/* React/Framework Code Window */}
               <div className="absolute bottom-[5%] left-[-10%] w-64 bg-[#050505] border border-white/10 rounded-xl p-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-30 transform hover:-translate-y-2 transition-transform cursor-default">
                  <div className="flex justify-between items-center mb-3">
                     <span className="text-[10px] text-gray-400 flex items-center gap-2"><Code2 className="w-3 h-3 text-cyan-400"/> ServerComponent.tsx</span>
                  </div>
                  <div className="font-mono text-[9px] text-gray-300 leading-relaxed overflow-hidden">
                     <span className="text-pink-400">export default async function</span> App() {`{`}<br/>
                     &nbsp;&nbsp;<span className="text-pink-400">const</span> data = <span className="text-pink-400">await</span> <span className="text-blue-300">fetchAPI</span>();<br/>
                     <br/>
                     &nbsp;&nbsp;<span className="text-pink-400">return</span> (<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-emerald-300">Suspense</span> <span className="text-teal-300">fallback</span>=&lt;<span className="text-emerald-300">Skeleton</span>/&gt;&gt;<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-emerald-300">Dashboard</span> <span className="text-teal-300">prop</span>={`{data}`} /&gt;<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-emerald-300">Suspense</span>&gt;<br/>
                     &nbsp;&nbsp;);<br/>
                     {`}`}
                  </div>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
