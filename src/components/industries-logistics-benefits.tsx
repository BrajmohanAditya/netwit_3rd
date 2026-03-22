"use client";

import { Timer, Maximize, ArrowUpRight, BarChart2 } from "lucide-react";

export function LogisticsBenefits() {
  const benefits = [
    {
      title: "Real-Time Accuracy",
      description: "Sub-second geolocation updates mean your logistics dashboard always reflects the exact state of operations.",
      icon: <Timer className="w-5 h-5" />
    },
    {
      title: "Unmatched Elasticity",
      description: "From holiday spikes to unexpected supply chain disruptions, our auto-scaling infrastructure handles traffic seamlessly.",
      icon: <Maximize className="w-5 h-5" />
    },
    {
      title: "Predictive Intelligence",
      description: "Integrate vast data-lakes to forecast delays, optimize fuel consumption, and reroute dynamically.",
      icon: <BarChart2 className="w-5 h-5" />
    },
    {
      title: "ROI-Focused Delivery",
      description: "Reduce unneeded cloud spend by 40% while accelerating development cycles through modern DevOps tooling.",
      icon: <ArrowUpRight className="w-5 h-5" />
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#09090b] to-[#12100e] py-24 relative overflow-hidden text-white">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1fr,1.2fr] gap-16 items-center">
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Deliver Results, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Not Just Packages</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
            Our cloud-native approach empowers transport companies to move faster, lower costs, and guarantee end-to-end security and uptime across all transit operations.
          </p>
          
          <div className="bg-[#1a1714] border border-amber-500/20 p-8 rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(245,158,11,0.05)]">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full"></div>
             <div className="relative z-10 flex items-end gap-4 mb-4">
                <span className="text-6xl font-black text-white">99.9<span className="text-amber-500">%</span></span>
                <span className="pb-2 text-sm font-bold text-gray-400 uppercase tracking-widest">SLA Uptime</span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               Reliability you can stake your global supply chain on.
             </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
          {benefits.map((b, i) => (
             <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                   {b.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{b.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
