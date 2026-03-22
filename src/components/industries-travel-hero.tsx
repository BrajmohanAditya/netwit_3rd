"use client";

import { ArrowRight, Plane, Building2, Ticket, CheckCircle2, Globe, MapPin, Compass, Sparkles, Navigation } from "lucide-react";
import Link from "next/link";

export function TravelHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#f8fafc] text-slate-900 flex items-center overflow-hidden pt-20 font-sans">
      {/* High-Fidelity Global Nomad Abstracts */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-200/40 via-sky-100/30 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-amber-100/40 via-orange-50/30 to-transparent blur-[140px] pointer-events-none"></div>
      </div>
      
      {/* Precision Navigation Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1250px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-sky-200 bg-white/80 backdrop-blur-xl shadow-lg">
            <Compass className="w-4 h-4 text-sky-500" />
            <span className="text-sky-600 text-[10px] font-black tracking-[0.3em] uppercase italic">The Global Nomad Protocol</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 shadow-sm italic">
            Scale Experiences. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 font-black tracking-tighter underline decoration-sky-600/30">Never Drop a Booking.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-[550px] leading-relaxed font-light font-sans">
             We architect high-fidelity travel ecosystems for global OTAs and airlines. Our elastic cloud infrastructure is designed to handle extreme seasonal spikes with institutional precision.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#solutions" className="group relative px-10 py-5 bg-sky-600 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_20px_50px_rgba(14,165,233,0.4)] hover:bg-sky-500 italic">
               Unveil Travel Ops
            </Link>
            <button className="flex items-center gap-2 px-10 py-5 rounded-full font-bold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm italic">
               Seasonal Stress Audit <ArrowRight className="w-4 h-4 text-sky-500" />
            </button>
          </div>
          
          <div className="flex items-center gap-10 mt-8 pt-8 border-t border-slate-200 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-slate-900 tracking-tighter italic">100<span className="text-sky-500 text-2xl ml-1">M+</span></div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Bookings Handled</div>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900 tracking-tighter italic">Zero<span className="text-sky-500 text-2xl ml-1">%</span></div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Downtime Peak Ratio</div>
            </div>
          </div>
        </div>

        {/* Right Column / Travel Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[580px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Booking Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-white/60 backdrop-blur-3xl border border-white rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-12">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-14 h-14 rounded-2xl bg-sky-600/10 border border-sky-600/20 flex items-center justify-center">
                        <Navigation className="w-6 h-6 text-sky-600" />
                     </div>
                     <span className="text-[10px] font-black text-emerald-600 bg-emerald-100/60 px-4 py-1.5 rounded-full uppercase tracking-widest italic border border-emerald-500/20">
                        BOOKING CONFIRMED
                     </span>
                  </div>

                  <div className="space-y-8 flex-1">
                     <div className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.3em] font-black">Route // LHR-SYD_DIRECT</div>
                     
                     <h2 className="text-3xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-sky-600 transition-all italic underline decoration-sky-600/20">
                        First-Class Infrastructure: Global Grid Sync.
                     </h2>
                     
                     <div className="flex items-center gap-6 mt-12">
                        <div className="flex-1 bg-slate-50 p-5 rounded-2xl text-center border border-slate-100">
                           <span className="block text-[8px] text-slate-400 uppercase tracking-widest italic mb-1">Status</span>
                           <span className="text-lg font-black text-slate-900 italic">Optimized</span>
                        </div>
                        <div className="flex-1 bg-slate-50 p-5 rounded-2xl text-center border border-slate-100">
                           <span className="block text-[8px] text-slate-400 uppercase tracking-widest italic mb-1">Load</span>
                           <span className="text-lg font-black text-sky-600 italic">100% Core</span>
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-10 border-t border-slate-100 group-hover:border-sky-100 transition-colors">
                     <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-sky-500" />
                        <span className="text-[10px] text-slate-400 font-black tracking-widest uppercase italic">Transit Active</span>
                     </div>
                     <Sparkles className="w-5 h-5 text-amber-500" />
                  </div>
               </div>

               {/* Velocity Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-sky-600 text-white p-6 rounded-3xl shadow-[0_25px_60px_rgba(14,165,233,0.4)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Plane className="w-7 h-7 fill-white text-white rotate-[-45deg]" />
                  </div>
                  <div>
                     <span className="block text-sm font-black tracking-tight italic uppercase">High Velocity</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest font-mono italic">Sync: 12ms</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-16 -left-16 opacity-[0.03] z-0 animate-[spin_60s_linear_infinite] grayscale">
                  <Globe className="w-[450px] h-[450px]" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
