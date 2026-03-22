"use client";

import { BarChart3, Cloud, Code2, Users } from "lucide-react";

export function SportsBenefits() {
  const benefits = [
    {
      title: "Cost Optimization at Scale",
      description: "Stop over-provisioning for peak events. Our auto-scaling architectures dynamically allocate resources purely when needed, drastically reducing cloud bills.",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Accelerated Feature Delivery",
      description: "With robust CI/CD pipelines, your teams can push features and hotfixes during live matches without downtime, keeping you ahead of the competition.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Enhanced Fan Engagement",
      description: "Deliver personalized, responsive, and seamless experiences across all platforms. Fast apps and zero-buffering streams retain users.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Real-Time Actionable Insights",
      description: "Process massive streams of telemetry data instantly to gain deep insights into player performance and audience behavior.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-[#030303] py-24 relative overflow-hidden border-t border-white/5 text-white">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-teal-900/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1fr,1.2fr] gap-16 items-center">
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Why Partner With Us for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Sports Tech</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
            We don't just build infrastructure; we engineer competitive advantages. Experience unparalleled reliability and speed when it matters most.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
             <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-black text-emerald-400 mb-2">100%</div>
                <div className="text-sm font-bold text-gray-300 uppercase tracking-widest">Match-Day Uptime</div>
             </div>
             <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-black text-teal-400 mb-2">3x</div>
                <div className="text-sm font-bold text-gray-300 uppercase tracking-widest">Faster Deployments</div>
             </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 relative z-10">
          {benefits.map((b, i) => (
             <div key={i} className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                   {b.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{b.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
