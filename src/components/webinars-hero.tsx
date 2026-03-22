"use client";

import { ArrowRight, Calendar, PlayCircle, Users, Video, Wifi, Zap } from "lucide-react";
import Link from "next/link";

export function WebinarsHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#050814] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Seminar Blue & Masterclass Amber Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#1E3A8A]/20 via-[#F59E0B]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#3b82f6]/10 via-[#1E3A8A]/15 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Stream Signal Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:50px:50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 backdrop-blur-xl shadow-lg">
            <Video className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-[#F59E0B] text-xs font-semibold tracking-widest uppercase">Live Masterclasses & Workshops</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Watch & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#fbbf24] to-[#3b82f6] font-extrabold tracking-tighter">Ascend.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Direct access to engineering excellence. Join our live sessions and recorded deep-dives to master the architectures that define the modern digital landscape.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#webinars" className="group relative px-8 py-4 bg-[#F59E0B] text-[#050814] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:bg-[#D97706]">
               Register for Next Session
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               View All Recordings <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Live<span className="text-rose-500 text-2xl ml-2">●</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: Active Stream</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">15K<span className="text-amber-400 text-2xl ml-1">+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Professional Attendees</div>
            </div>
          </div>
        </div>

        {/* Right Column / Live Stream Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Video Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#081220]/90 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group">
                  
                  {/* Video Viewport Placeholder */}
                  <div className="h-3/5 w-full bg-slate-900 relative group-hover:bg-slate-800 transition-colors">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white/20 group-hover:text-[#F59E0B]/80 group-hover:scale-110 transition-all cursor-pointer" />
                     </div>
                     <div className="absolute bottom-4 left-6 flex gap-2">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-lg animate-pulse">
                           <Wifi className="w-3 h-3" /> Live
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md">
                           428 Watching
                        </span>
                     </div>
                  </div>

                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                     <h3 className="text-xl font-bold text-white group-hover:text-amber-50 transition-colors leading-tight">
                        DevOps 2.0: Orchestrating Autonomous Infrastructure at Scale.
                     </h3>
                     
                     <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-amber-600 border border-amber-400 shadow-xl flex items-center justify-center font-black text-xs text-[#050814]">EL</div>
                           <div className="text-[10px] space-y-0.5">
                              <span className="block text-white font-bold opacity-80">Edmond L. - Host</span>
                              <span className="block text-slate-500 font-medium">Head of Architecture</span>
                           </div>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F59E0B] border border-[#F59E0B]/30 px-4 py-2 rounded-full hover:bg-[#F59E0B] hover:text-[#050814] transition-all">
                           Join Chat
                        </button>
                     </div>
                  </div>
               </div>

               {/* Schedule Tag */}
               <div className="absolute top-[65%] -right-[15%] bg-[#F59E0B] text-[#050814] p-5 rounded-2xl shadow-[0_20px_50px_rgba(245,158,11,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Calendar className="w-6 h-6 text-[#050814]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Next Webinar</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5">Tomorrow, 10:00 AM EST</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Users className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
