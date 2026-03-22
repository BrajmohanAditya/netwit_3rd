"use client";

import { Map, Zap, Database, LocateFixed, GitMerge, Settings } from "lucide-react";

export function LogisticsSolutions() {
  const solutions = [
    {
      title: "Real-Time Fleet Tracking",
      description: "Ingest and process millions of GPS coordinates per second. Build highly available data lakes and streaming architectures for instant visibility.",
      icon: <LocateFixed className="w-7 h-7 text-amber-400" />,
      delay: "0",
    },
    {
      title: "Route Optimization AI",
      description: "Deploy machine learning models seamlessly at the edge and globally. Scale algorithmic workloads up and down to solve the traveling salesman problem in real-time.",
      icon: <Map className="w-7 h-7 text-orange-400" />,
      delay: "100",
    },
    {
      title: "WMS Integration Hub",
      description: "Modernize legacy Warehouse Management Systems by building agile API gateways, microservices layers, and event-driven architectures.",
      icon: <Database className="w-7 h-7 text-yellow-400" />,
      delay: "200",
    },
    {
      title: "Supply Chain Observability",
      description: "Get predictive maintenance monitoring for fleets and automated anomaly detection for logistics routing with advanced DevOps tooling.",
      icon: <Settings className="w-7 h-7 text-green-400" />,
      delay: "0",
    },
    {
      title: "Automated Deliveries",
      description: "From drone deployments to last-mile fulfillment, power the logic layer that orchestrates unmanned vehicles using cloud-native frameworks.",
      icon: <Zap className="w-7 h-7 text-teal-400" />,
      delay: "100",
    },
    {
      title: "Carrier API Aggregation",
      description: "We build reliable proxy services and resilient middleware that handles thousands of concurrent carrier lookups with zero packet loss.",
      icon: <GitMerge className="w-7 h-7 text-blue-400" />,
      delay: "200",
    },
  ];

  return (
    <section id="solutions" className="bg-[#09090b] py-32 relative text-white border-b border-white/5 overflow-hidden">
      {/* Abstract decorative graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] border-[1px] border-amber-500/10 rounded-full pointer-events-none"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] border-[1px] border-orange-500/20 rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start mb-20 md:w-2/3">
          <span className="text-amber-400 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 opacity-80"></span> Platform Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Logistics that <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Never Sleeps</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Your logistics operations require systems that are fault-tolerant, elastic, and blistering fast. Stop relying on outdated IT and embrace DevOps-driven supply chain modernization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div 
              key={i} 
              className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Highlight gradient on hover */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500"></div>
              
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 drop-shadow group-hover:scale-110 group-hover:bg-amber-500/10 transition-all duration-300">
                 {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light relative z-10">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
