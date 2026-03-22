"use client";

import { Gauge, ShieldAlert } from "lucide-react";
import Link from "next/link";

export function DevOpsBenefits() {
  const stats = [
    { num: "-40%", desc: "Cloud Spend Optimization" },
    { num: "300+", desc: "Pipelines Orchestrated" },
    { num: "< 24h", desc: "Talent Matching Speed" },
    { num: "99.99%", desc: "Average Uptime Delivery" }
  ];

  return (
    <section className="bg-gradient-to-b from-[#050505] to-[#010101] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-center mb-20">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
                Developer Acceleration <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Unleashed</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                Without a robust DevOps culture, your product engineers spend 40% of their time fighting infrastructure, writing bash scripts, and manually debugging production servers. We fix that.
              </p>
              
              <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                       <Gauge className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg text-gray-200">Scale Without Fear</h4>
                       <p className="text-sm text-gray-500 leading-relaxed mt-1">Auto-scaling infrastructure means you never go offline during a traffic spike, nor pay for idle resources at night.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                       <ShieldAlert className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg text-gray-200">Automated Security</h4>
                       <p className="text-sm text-gray-500 leading-relaxed mt-1">Don't wait for independent audits. We shift security left, integrating container scanning directly into every merge request.</p>
                    </div>
                 </div>
              </div>
              
              <div className="mt-12">
                 <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    Build Your DevOps Team
                 </Link>
              </div>
           </div>

           <div className="relative z-10 w-full">
              <div className="bg-[#0a0a0c] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/20 blur-[100px] pointer-events-none rounded-full"></div>
                 
                 <div className="flex flex-col gap-8">
                    {stats.map((s, i) => (
                       <div key={i} className="flex flex-col border-l-2 border-emerald-500/50 pl-6 hover:border-emerald-400 transition-colors cursor-default">
                          <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1">{s.num}</span>
                          <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{s.desc}</span>
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
