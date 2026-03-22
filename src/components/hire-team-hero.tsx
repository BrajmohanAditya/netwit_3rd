"use client";

import { ArrowRight, Users, Orbit, GitMerge, UserPlus, Zap, Terminal, Code2, Figma, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function TeamHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0c0c0e] text-white flex items-center overflow-hidden pt-20">
      {/* Synergy Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-amber-500/15 via-orange-500/5 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-violet-600/15 via-fuchsia-600/5 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Node Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <Orbit className="w-4 h-4 text-amber-400 animate-[spin_10s_linear_infinite]" />
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Cross-Functional Pods</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Scale Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-violet-500">On Demand.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            Skip the 6-month recruiting cycles. Embed pre-vetted, cohesive engineering squads directly into your workflow. From Product Managers to DevOps, scale your bandwidth instantly.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-amber-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
               Deploy Your Team
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Meet the Talent <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">48<span className="text-amber-400">hr</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Deployment Time</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">96<span className="text-amber-400">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Talent Retention</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract "Pod" Graphic */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[450px] h-[550px] transform rotate-y-[-10deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Center Node: The Project/Product */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#111116] border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] z-30 flex flex-col items-center justify-center cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-2">
                     <LayoutDashboard className="w-6 h-6 text-violet-400" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-widest uppercase">Your App</span>
               </div>

               {/* Engineer 1: Full Stack */}
               <div className="absolute top-[10%] left-[10%] w-48 bg-[#18181f] border border-amber-500/30 p-3 rounded-2xl shadow-xl z-40 transform hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-amber-400" />
                     </div>
                     <div>
                        <span className="block text-xs font-bold text-white">Senior Full-Stack</span>
                        <span className="block text-[9px] text-amber-400">Node.js · React</span>
                     </div>
                  </div>
                  <div className="w-full bg-black/50 h-6 pt-1 px-2 rounded font-mono text-[8px] text-gray-400 border border-white/5">
                     git commit -m "scale API"
                  </div>
                  {/* Connection Line */}
                  <svg className="absolute top-12 -right-16 w-24 h-24 pointer-events-none -z-10 hidden sm:block" viewBox="0 0 100 100">
                     <path d="M 0 0 L 100 100" fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                  </svg>
               </div>

               {/* Engineer 2: UI/UX Design */}
               <div className="absolute bottom-[15%] left-[5%] w-48 bg-[#18181f] border border-pink-500/30 p-3 rounded-2xl shadow-xl z-40 transform hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <Figma className="w-4 h-4 text-pink-400" />
                     </div>
                     <div>
                        <span className="block text-xs font-bold text-white">Product Designer</span>
                        <span className="block text-[9px] text-pink-400">Figma · Wireframes</span>
                     </div>
                  </div>
                  <div className="flex gap-1">
                     <div className="w-full h-8 bg-black/50 rounded flex items-center justify-center border border-white/5"><div className="w-6 h-4 bg-blue-500/50 rounded-sm"></div></div>
                     <div className="w-full h-8 bg-black/50 rounded flex items-center justify-center border border-white/5"><div className="w-8 h-2 bg-emerald-500/50 rounded-full"></div></div>
                  </div>
                  {/* Connection Line */}
                  <svg className="absolute bottom-12 -right-20 w-24 h-24 pointer-events-none -z-10 hidden sm:block" viewBox="0 0 100 100">
                     <path d="M 0 100 L 100 0" fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                  </svg>
               </div>

               {/* Engineer 3: DevOps / Cloud */}
               <div className="absolute top-[35%] right-[-10%] w-44 bg-[#18181f] border border-blue-500/30 p-3 rounded-2xl shadow-xl z-40 transform hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-blue-400" />
                     </div>
                     <div>
                        <span className="block text-xs font-bold text-white">DevOps Engineer</span>
                        <span className="block text-[9px] text-blue-400">AWS · Docker</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                     <span className="text-[9px] font-mono text-gray-400">All systems operational</span>
                  </div>
                  {/* Connection Line */}
                  <svg className="absolute top-8 -left-16 w-24 h-12 pointer-events-none -z-10 hidden sm:block" viewBox="0 0 100 50">
                     <path d="M 100 25 L 0 25" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                  </svg>
               </div>
               
               {/* Team Sync Floating Badge */}
               <div className="absolute bottom-[0%] right-[0%] bg-[#111116] border border-violet-500/30 py-2 px-4 rounded-xl shadow-[0_20px_50px_rgba(139,92,246,0.2)] z-50 transform hover:scale-105 transition-transform flex items-center gap-2">
                  <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-amber-500 border border-[#111116]"></div>
                     <div className="w-6 h-6 rounded-full bg-blue-500 border border-[#111116]"></div>
                     <div className="w-6 h-6 rounded-full bg-pink-500 border border-[#111116]"></div>
                  </div>
                  <span className="text-xs font-bold text-white ml-2">Daily Standup Active</span>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
