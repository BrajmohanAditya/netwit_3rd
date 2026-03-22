"use client";

import { Award, CheckCircle, Crown, ShieldAlert, Sparkles, Star, Trophy, Zap } from "lucide-react";
import Link from "next/link";

export function ExcellenceHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#050505] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Prestigious Gold & Onyx Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#ca8a04]/10 via-[#1e1b4b]/5 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#1e1b4b]/10 via-[#ca8a04]/5 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* High-Fi Milestone Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(202,138,4,0.05)_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#ca8a04]/30 bg-[#ca8a04]/10 backdrop-blur-xl shadow-lg">
             <Crown className="w-4 h-4 text-[#facc15]" />
             <span className="text-[#facc15] text-xs font-semibold tracking-widest uppercase italic">A Quarter-Century of Technical Dominance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            25 Years of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] via-[#ca8a04] to-[#854d0e] font-extrabold tracking-tighter italic">Pure Excellence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Defining the digital frontier since 1999. Our journey is a testament to unwavering quality, precision engineering, and the consistent delivery of world-class technical outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#pillars" className="group relative px-8 py-4 bg-[#ca8a04] text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(202,138,4,0.3)] hover:bg-[#a16207]">
               Explore Our Pillars
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Our Certifications <Zap className="w-4 h-4 text-[#facc15]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">99.9<span className="text-[#ca8a04] text-2xl font-black ml-1">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Uptime Reliability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Gold<span className="text-[#facc15] text-2xl ml-1">★</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">SLA Standard</div>
            </div>
          </div>
        </div>

        {/* Right Column / Excellence Hub Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Trophy Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-[#ca8a04]/10 border border-[#ca8a04]/20 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-[#facc15]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#facc15] bg-[#ca8a04]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#ca8a04]/10">
                        EXCELLENCE VERIFIED
                     </span>
                  </div>

                  <div className="space-y-6 flex-1">
                     <div className="text-xs text-slate-500 font-mono uppercase tracking-[0.3em] font-bold">Standard // ISO.9001:2026</div>
                     
                     <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-glow transition-all italic">
                        The Netwit Quality Blueprint: Engineering the Future of Trust.
                     </h2>
                     
                     <div className="flex items-center gap-6 mt-10">
                        <div className="flex-1 bg-white/5 p-4 rounded-xl text-center border border-white/5">
                           <span className="block text-[8px] text-slate-500 uppercase tracking-widest">Growth</span>
                           <span className="text-lg font-black text-white">25Y+</span>
                        </div>
                        <div className="flex-1 bg-white/5 p-4 rounded-xl text-center border border-white/5">
                           <span className="block text-[8px] text-slate-500 uppercase tracking-widest">Reach</span>
                           <span className="text-lg font-black text-[#facc15]">Global</span>
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-[#facc15]" />
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Premium Partner Status</span>
                     </div>
                     <Star className="w-5 h-5 text-[#ca8a04]" />
                  </div>
               </div>

               {/* Hall of Fame Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-[#ca8a04] text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(202,138,4,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <ShieldAlert className="w-6 h-6 fill-white text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Active Milestone</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest">Global Payout</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Sparkles className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
