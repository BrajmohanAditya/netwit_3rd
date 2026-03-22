"use client";

import { ArrowRight, AudioLines, Headphones, Mic2, Play, Radio, Share2, Zap } from "lucide-react";
import Link from "next/link";

export function PodcastsHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#0a050d] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Broadcast Purple & Dynamic Pink Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#7e22ce]/20 via-[#4c1d95]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#db2777]/10 via-[#7e22ce]/20 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Frequency Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(126,34,206,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#7e22ce]/30 bg-[#7e22ce]/10 backdrop-blur-xl shadow-lg">
            <Radio className="w-4 h-4 text-[#C084FC]" />
            <span className="text-[#C084FC] text-xs font-semibold tracking-widest uppercase">The Unfiltered Technical Broadcast</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Listen & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#7e22ce] to-[#db2777] font-extrabold tracking-tighter italic">Innovate.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Insights at the speed of sound. Join our engineering leads as they pull back the curtain on the architectures, failures, and breakthroughs that fuel the modern enterprise.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#episodes" className="group relative px-8 py-4 bg-[#7e22ce] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(126,34,206,0.3)] hover:bg-[#6b21a8]">
               Stream New Episode
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Our Playlists <ArrowRight className="w-4 h-4 text-[#C084FC]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Weekly<span className="text-rose-400 text-2xl font-black ml-1">●</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: New Stream</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">10K<span className="text-purple-400 text-2xl ml-1">+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Monthly Listeners</div>
            </div>
          </div>
        </div>

        {/* Right Column / Podcast Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Podcast Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  {/* Speaker Avatars */}
                  <div className="flex items-center gap-4 mb-10">
                     <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-gradient-to-br from-[#7e22ce] to-[#db2777] flex items-center justify-center font-black text-xs">A{i}</div>
                        ))}
                     </div>
                     <div className="flex items-center gap-2 px-3 py-1 bg-rose-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full animate-pulse">
                        <AudioLines className="w-3 h-3" /> Recorded Live
                     </div>
                  </div>

                  <div className="space-y-6 flex-1">
                     <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#C084FC] transition-colors italic">
                        The Architect's Edge // Episode 42: Scaling for Zero Downtime.
                     </h2>
                     
                     {/* Abstract Soundwave */}
                     <div className="flex items-end gap-1.5 h-16 w-full opacity-30">
                        {Array.from({length: 20}).map((_, i) => (
                           <div key={i} className={`flex-1 bg-gradient-to-t from-[#7e22ce] to-[#db2777] rounded-full`} style={{height: `${Math.random() * 100}%`}}></div>
                        ))}
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase mb-1">Duration: 42:15</span>
                        <span className="text-xs text-white font-bold tracking-tight">Hosted by Netsmartz Labs</span>
                     </div>
                     <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-slate-900 translate-x-0.5" />
                     </div>
                  </div>
               </div>

               {/* Stream Status Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-[#7e22ce] text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(126,34,206,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">High Fidelity</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest">Podcast Network</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Mic2 className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
