"use client";

import { ArrowRight, Plane, Building2, Ticket, CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";

export function TravelHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#f8fafc] text-slate-900 flex items-center overflow-hidden pt-20">
      {/* Soft elegant background */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-100 via-sky-50 to-transparent blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-amber-50 via-orange-50 to-transparent blur-[120px]"></div>
      </div>
      
      {/* Light grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-sky-200 bg-white/60 backdrop-blur-md shadow-sm">
            <Globe className="w-4 h-4 text-sky-500 animate-pulse" />
            <span className="text-sky-600 text-xs font-bold tracking-widest uppercase">Travel Tech Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Scale Experiences, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Never Drop a Booking</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-[550px] leading-relaxed font-light">
            Empower booking engines, property management systems, and guest apps with elastic, highly-available cloud infrastructure designed for extreme seasonal spikes.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#solutions" className="group relative px-8 py-4 bg-sky-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-sky-400 shadow-[0_10px_30px_rgba(14,165,233,0.3)]">
               Explore Solutions
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm">
               Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-10 mt-6 pt-6 border-t border-slate-200 w-full">
            <div>
              <div className="text-3xl font-black text-slate-800">100<span className="text-sky-500">M+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Bookings Handled</div>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-800">0<span className="text-sky-500">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Downtime During Peaks</div>
            </div>
          </div>
        </div>

        {/* Right Column / Floating Elements representing bookings */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center perspective-[1200px]">
           <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
              
              {/* Floating element 1 */}
              <div className="absolute top-10 right-0 lg:right-[-20px] bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 w-[280px] z-20 transform hover:-translate-y-2 transition-transform duration-500 cursor-default">
                 <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                       <Plane className="w-5 h-5" />
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                       <CheckCircle2 className="w-3 h-3" /> Confirmed
                    </span>
                 </div>
                 <div className="h-2 w-16 bg-slate-200 rounded-full mb-2"></div>
                 <div className="h-2 w-24 bg-slate-100 rounded-full mb-6"></div>
                 <div className="flex justify-between items-center text-xs text-slate-500 font-medium border-t border-slate-100 pt-3">
                    <span>LHR → JFK</span>
                    <span className="text-slate-900 font-bold">$1,240</span>
                 </div>
              </div>

              {/* Floating element 2 */}
              <div className="absolute bottom-20 left-0 lg:left-[-40px] bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 w-[260px] z-30 transform hover:-translate-y-2 transition-transform duration-500 mt-10 cursor-default">
                 <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                       <Building2 className="w-5 h-5" />
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                       <CheckCircle2 className="w-3 h-3" /> Confirmed
                    </span>
                 </div>
                 <div className="h-2 w-16 bg-slate-200 rounded-full mb-2"></div>
                 <div className="h-2 w-20 bg-slate-100 rounded-full mb-6"></div>
                 <div className="flex justify-between items-center text-xs text-slate-500 font-medium border-t border-slate-100 pt-3">
                    <span>4 Nights</span>
                    <span className="text-slate-900 font-bold">$850</span>
                 </div>
              </div>
              
              {/* Back abstract architecture UI */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-white/50 backdrop-blur-xl border border-white rounded-full shadow-[0_0_80px_rgba(14,165,233,0.15)] flex flex-col items-center justify-center p-8 z-10 pointer-events-none">
                 <div className="w-full h-full border border-sky-100 rounded-full border-dashed animate-[spin_30s_linear_infinite] absolute"></div>
                 <div className="w-[80%] h-[80%] border border-blue-100 rounded-full animate-[spin_20s_linear_infinite_reverse] absolute"></div>
                 
                 <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex flex-col items-center gap-2 relative z-10 w-full text-center">
                    <Ticket className="w-8 h-8 text-sky-500 mb-2" />
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">API Gateway</span>
                    <span className="text-xl font-black text-slate-800">12,450 req/s</span>
                    <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                       <div className="w-[85%] h-full bg-sky-400"></div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}
