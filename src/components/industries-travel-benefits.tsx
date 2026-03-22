"use client";

import { CheckCircle, ShieldCheck, TrendingUp, Zap, Globe, Sparkles, Navigation } from "lucide-react";

export function TravelBenefits() {
  const stats = [
    { value: "0", label: "Lost Bookings" },
    { value: "99.99%", label: "Platform Availability" },
    { value: "3x", label: "Faster Search Returns" },
    { value: "50%", label: "Cloud Cost Reduction" },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden font-sans border-t border-slate-100 italic">
      <div className="max-w-[1250px] mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Left Column: Narrative */}
        <div className="lg:w-1/2 relative z-10 space-y-10">
          <div className="space-y-6 max-w-xl">
             <span className="text-[10px] text-sky-600 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The Reliability Protocol</span>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic leading-[1.05] shadow-sm">Digital Reliability. <br/><span className="text-sky-600 underline decoration-sky-600/30 font-black">Institutional Trust.</span></h2>
             <p className="text-slate-500 text-lg font-light leading-relaxed font-sans">In travel and hospitality, downtime means lost revenue and damaged reputation. We build highly-resilient, self-healing platforms that protect your brand and delight your guests at every digital touchpoint.</p>
          </div>

          {/* High-Fi Testimonial Card */}
          <div className="bg-[#0f172a] rounded-[4rem] p-12 shadow-2xl overflow-hidden relative group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px] rounded-full group-hover:bg-sky-500/20 transition-colors"></div>
             
             <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-sky-400" />
                   </div>
                   <span className="text-[10px] text-sky-400 font-black uppercase tracking-widest italic">Migration Success // Verified</span>
                </div>

                <p className="text-xl md:text-3xl font-light text-white italic leading-tight tracking-tight border-l-2 border-sky-500/30 pl-10 group-hover:border-sky-500 transition-colors">
                  "Since migrating our booking engine to their cloud-native architecture, we survived our heaviest holiday influx with <span className="text-sky-400 font-black italic">zero latency</span> and significantly lowered our operating costs."
                </p>

                <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                   <div className="w-16 h-16 bg-slate-800 rounded-3xl flex items-center justify-center text-white font-black text-xl italic shadow-lg">CTO</div>
                   <div>
                      <h4 className="text-white font-black text-lg italic tracking-tight uppercase">Global Hospitality Chain</h4>
                      <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] block mt-1 italic">Enterprise Stewardship Registry</span>
                   </div>
                </div>
             </div>
             
             <Sparkles className="absolute bottom-10 right-10 w-24 h-24 text-sky-500/5 rotate-12" />
          </div>
        </div>

        {/* Right Column: High-Fi Stats */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-8 relative z-10 w-full mt-10 lg:mt-0">
          {stats.map((s, i) => (
             <div 
               key={i} 
               className="bg-[#f8fafc]/80 backdrop-blur-3xl border border-sky-100/50 p-12 rounded-[4rem] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-sky-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <span className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter group-hover:text-glow_blue transition-all italic mb-6 shadow-sm">{s.value}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic group-hover:text-sky-600 transition-colors">{s.label}</span>
                
                {/* Micro-Indicator */}
                <div className="mt-8 w-12 h-1 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-sky-500 transition-all"></div>
             </div>
          ))}
          
          {/* Abstract Global Decoration */}
          <div className="absolute -bottom-20 -right-20 opacity-[0.05] grayscale z-0 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
             <Globe className="w-[400px] h-[400px]" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
