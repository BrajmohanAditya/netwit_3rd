"use client";

import { ServerCrash, RadioTower, Database, Lock, Cpu, CloudCog } from "lucide-react";

export function TelecomSolutions() {
  const solutions = [
    {
      title: "5G & Edge Computing",
      description: "Deploy ultra-low latency applications closer to the user with our edge computing architectures designed specifically for 5G network slicing.",
      icon: <RadioTower className="w-7 h-7 text-cyan-400" />,
      delay: "0",
    },
    {
      title: "OSS/BSS Modernization",
      description: "Break down monolithic legacy billing and operational systems into agile, scalable microservices for faster time-to-market.",
      icon: <Database className="w-7 h-7 text-blue-400" />,
      delay: "100",
    },
    {
      title: "NFV & SDN Orchestration",
      description: "Implement Network Functions Virtualization and Software-Defined Networking with seamless CI/CD pipelines.",
      icon: <Cpu className="w-7 h-7 text-indigo-400" />,
      delay: "200",
    },
    {
      title: "Zero-Trust Security",
      description: "Protect critical infrastructure and subscriber data with end-to-end encryption, identity routing, and zero-trust policies.",
      icon: <Lock className="w-7 h-7 text-rose-400" />,
      delay: "0",
    },
    {
      title: "Disaster Recovery & HA",
      description: "Ensure carrier-grade 99.999% uptime with automated failovers, multi-region redundancy, and instant recovery protocols.",
      icon: <ServerCrash className="w-7 h-7 text-emerald-400" />,
      delay: "100",
    },
    {
      title: "Cloud-Native Infrastructure",
      description: "Transition your workloads to hybrid or multi-cloud environments utilizing Kubernetes and Terraform for complete automation.",
      icon: <CloudCog className="w-7 h-7 text-purple-400" />,
      delay: "200",
    },
  ];

  return (
    <section id="solutions" className="bg-[#020817] py-32 relative text-white border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start mb-20 md:w-2/3">
          <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> Solutions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Next-Gen Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Automation</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Telecom providers are facing unprecedented data demands. We help you transition from proprietary hardware constraints to fully virtualized, automated, and scalable software-defined networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div 
              key={i} 
              className="bg-[#0a1122] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 hover:bg-[#0d162d] transition-colors duration-300 group relative overflow-hidden"
            >
              {/* Highlight gradient on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
              
              <div className="w-14 h-14 rounded-xl bg-[#020817] border border-white/5 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                 {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
