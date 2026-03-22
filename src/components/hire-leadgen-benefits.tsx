"use client";

import { Rocket, BadgeDollarSign, CalendarDays } from "lucide-react";
import Link from "next/link";

export function LeadGenBenefits() {
  const stats = [
    { num: "3x", desc: "Pipeline Velocity" },
    { num: "-50%", desc: "Ramp-Up Time" },
    { num: "10k+", desc: "Verified Data Points" },
    { num: "100%", desc: "Dedicated Focus" }
  ];

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
                Stop Paying For <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Empty Calendars</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
                Training an in-house SDR takes months and costs thousands. Our pre-vetted specialists hit the ground running on day one with proven playbooks, advanced tech stacks, and an unyielding focus on booking qualified demos for your closers.
              </p>
              
              <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 mt-1">
                       <BadgeDollarSign className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg text-slate-800">Radically Lower CAC</h4>
                       <p className="text-slate-600 leading-relaxed mt-1 font-light">By combining off-shore economics with tier-1 Silicon Valley playbooks, we drastically reduce your Customer Acquisition Cost.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 mt-1">
                       <CalendarDays className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg text-slate-800">Predictable Revenue</h4>
                       <p className="text-slate-600 leading-relaxed mt-1 font-light">Turn leads into a mathematical certainty. Set the volume you need, and our specialists will execute the exact cadence required to hit it.</p>
                    </div>
                 </div>
              </div>
              
              <div className="mt-12">
                 <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-orange-500 hover:shadow-lg">
                    Build Your Outbound Team
                 </Link>
              </div>
           </div>

           <div className="relative z-10 w-full mt-12 lg:mt-0">
              <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-orange-100/50 blur-[80px] pointer-events-none rounded-full"></div>
                 
                 <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-10">Performance Benchmarks</h3>
                 
                 <div className="flex flex-col gap-8">
                    {stats.map((s, i) => (
                       <div key={i} className="flex justify-between items-end border-b border-slate-100 pb-4 hover:border-orange-200 transition-colors cursor-default group">
                          <span className="text-sm font-bold text-slate-600 uppercase tracking-wide group-hover:text-slate-900 transition-colors">{s.desc}</span>
                          <span className="text-3xl md:text-4xl font-black text-slate-900 group-hover:text-orange-500 transition-colors tracking-tighter">{s.num}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
        
      </div>
    </section>
  );
}
