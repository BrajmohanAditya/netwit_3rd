"use client";

import { Radio, Database, Shield, Zap, LayoutDashboard, Globe2 } from "lucide-react";

export function SportsSolutions() {
  const solutions = [
    {
      title: "Ultra-Low Latency Streaming",
      description: "Scale your video delivery with custom CDN architectures ensuring sub-second latency for millions of concurrent viewers worldwide.",
      icon: <Radio className="w-8 h-8 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/5",
    },
    {
      title: "Real-Time Betting Architectures",
      description: "Build robust, high-frequency transactional systems designed to handle thousands of bets per second with absolutely zero downtime.",
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/5",
    },
    {
      title: "Fan Data & Analytics",
      description: "Centralize your fan data with highly scalable data lakes and warehouses to drive personalized, real-time engagement and marketing.",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/20 to-indigo-500/5",
    },
    {
      title: "DDoS Protection & Security",
      description: "Sports platforms are massive targets. We implement zero-trust architectures and edge security to absorb the largest DDoS attacks.",
      icon: <Shield className="w-8 h-8 text-rose-400" />,
      color: "from-rose-500/20 to-red-500/5",
    },
    {
      title: "Global Traffic Routing",
      description: "Intelligent multi-region DNS routing and load balancing to dynamically direct fans to the optimal edge node for maximum performance.",
      icon: <Globe2 className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-fuchsia-500/5",
    },
    {
      title: "Live Operations Dashboards",
      description: "Custom observability stacks giving you complete, real-time visibility into infrastructure health during critical live matches.",
      icon: <LayoutDashboard className="w-8 h-8 text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/5",
    },
  ];

  return (
    <section id="solutions" className="bg-[#09090b] py-32 relative text-white border-b border-white/5">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-900/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Live Environments</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            In sports technology, every millisecond counts. We build resilient, automated infrastructures that thrive under the immense pressure of live event scaling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 transition-colors duration-500 cursor-pointer"
            >
              <div className="h-full w-full bg-[#111] rounded-[23px] p-8 flex flex-col relative overflow-hidden">
                <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${item.color} blur-3xl group-hover:blur-2xl transition-all duration-500 rounded-full`}></div>
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm relative z-10">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
