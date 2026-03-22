"use client";

import { ArrowRight, Figma, Code2, Rocket, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ProductHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#030303] text-white flex items-center overflow-hidden pt-20">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-indigo-600/20 via-violet-600/5 to-transparent blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-fuchsia-600/10 via-blue-600/5 to-transparent blur-[100px]"></div>
         {/* Subtle linear grid */}
         <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 lg:grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">End-to-End Product Teams</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Idea to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">Market Dominance.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            Skip the hiring headache. Instantly deploy elite squads of product managers, UI/UX designers, and full-stack engineers to build, launch, and scale your vision.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
               Assemble Your Team
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               See Our Workflow <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">4<span className="text-violet-400">wks</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Av. MVP Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">0<span className="text-violet-400">1</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Cross-Functional Team</div>
            </div>
          </div>
        </div>

        {/* Right Column / Visual "Product Builder" Abstract */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] perspective-[1000px] flex justify-center items-center">
           <div className="relative w-full max-w-[500px] h-full transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Design Wireframe Block */}
               <div className="absolute top-[5%] left-[0%] w-64 bg-[#0a0a0c] border border-white/10 rounded-2xl p-4 shadow-2xl z-20 hover:-translate-y-2 transition-transform cursor-pointer overflow-hidden group">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                     <div className="flex items-center gap-2">
                        <Figma className="w-4 h-4 text-pink-400" />
                        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">UI/UX Design</span>
                     </div>
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <div className="space-y-2">
                     <div className="w-full h-8 bg-[#151518] rounded-md border border-white/5"></div>
                     <div className="grid grid-cols-2 gap-2">
                        <div className="w-full h-12 bg-[#151518] rounded-md border border-white/5 group-hover:border-indigo-500/30 transition-colors"></div>
                        <div className="w-full h-12 bg-[#151518] rounded-md border border-white/5"></div>
                     </div>
                  </div>
                  {/* Connection Line */}
                  <svg className="absolute top-[80%] -right-16 w-24 h-24 overflow-visible pointer-events-none hidden md:block" viewBox="0 0 100 100">
                     <path d="M 0 0 C 40 0 40 40 80 40" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]"/>
                  </svg>
               </div>

               {/* Sprint Kanban Block */}
               <div className="absolute top-[35%] right-[0%] w-72 bg-[#111116] border border-indigo-500/30 rounded-2xl p-4 shadow-[0_20px_50px_rgba(99,102,241,0.1)] z-30 hover:-translate-y-2 transition-transform cursor-pointer">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                     <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                        <span className="text-[10px] font-medium text-indigo-200 uppercase tracking-widest">Agile Sprint 04</span>
                     </div>
                     <div className="flex gap-[-5px]">
                        <div className="w-5 h-5 rounded-full bg-blue-500 border border-black z-30"></div>
                        <div className="w-5 h-5 rounded-full bg-rose-500 border border-black -ml-2 z-20"></div>
                        <div className="w-5 h-5 rounded-full bg-emerald-500 border border-black -ml-2 z-10"></div>
                     </div>
                  </div>
                  <div className="flex gap-2 h-24">
                     <div className="flex-1 bg-[#0a0a0c] rounded-md p-2 flex flex-col gap-1.5 border border-white/5">
                        <span className="text-[8px] text-gray-500 font-bold uppercase">To Do</span>
                        <div className="w-full h-4 bg-white/5 rounded-sm"></div>
                        <div className="w-full h-4 bg-white/5 rounded-sm"></div>
                     </div>
                     <div className="flex-1 bg-indigo-500/5 rounded-md p-2 flex flex-col gap-1.5 border border-indigo-500/20">
                        <span className="text-[8px] text-indigo-400 font-bold uppercase">Doing</span>
                        <div className="w-full h-4 bg-indigo-500/20 rounded-sm"></div>
                     </div>
                     <div className="flex-1 bg-[#0a0a0c] rounded-md p-2 flex flex-col gap-1.5 border border-white/5">
                        <span className="text-[8px] text-gray-500 font-bold uppercase">Done</span>
                        <div className="w-full h-4 bg-emerald-500/20 rounded-sm"></div>
                        <div className="w-full h-4 bg-emerald-500/20 rounded-sm"></div>
                     </div>
                  </div>
               </div>

               {/* Code & Launch Block */}
               <div className="absolute bottom-[5%] left-[5%] w-64 bg-[#0a0a0c] border border-white/10 rounded-2xl p-4 shadow-2xl z-40 hover:-translate-y-2 transition-transform cursor-pointer">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                     <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Full-Stack Eng</span>
                     </div>
                     <Rocket className="w-3 h-3 text-fuchsia-400" />
                  </div>
                  <div className="font-mono text-[10px] text-gray-300 leading-relaxed overflow-hidden">
                     <span className="text-pink-400">const</span> product <span className="text-pink-400">=</span> <span className="text-blue-300">useBuild</span>();<br/>
                     <span className="text-pink-400">await</span> product.<span className="text-emerald-300">launch</span>({`{`}<br/>
                     &nbsp;&nbsp;scale: <span className="text-yellow-300">"infinite"</span>,<br/>
                     &nbsp;&nbsp;bugs: <span className="text-purple-300">null</span><br/>
                     {`}`});
                  </div>
               </div>

               {/* Floating Success Notification */}
               <div className="absolute bottom-[40%] left-[-10%] bg-emerald-500 text-black font-bold text-xs py-2 px-4 rounded-xl shadow-[0_10px_30px_rgba(16,185,129,0.3)] z-50 flex items-center gap-2 transform -rotate-6 animate-pulse">
                  Deploy Successful <ArrowUpRight className="w-3 h-3" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
