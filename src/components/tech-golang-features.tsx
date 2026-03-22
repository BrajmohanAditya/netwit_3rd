"use client";

import { Server, Activity, ArrowRightLeft, ShieldCheck, Box, Network } from "lucide-react";

export function GolangFeatures() {
  const capabilities = [
    {
      title: "Goroutines & Channels",
      description: "We don't use heavy operating system threads. Go utilizes ultra-lightweight goroutines communicating via strict memory channels, allowing us to map hundreds of thousands of concurrent connections efficiently.",
      icon: <Network className="w-8 h-8 text-[#00ADD8]" />,
      bg: "bg-[#00ADD8]/10",
      border: "border-[#00ADD8]/20"
    },
    {
      title: "gRPC & Protocol Buffers",
      description: "JSON parsing is too slow for internal microservices. We architect deep inter-service communication layers using strongly typed gRPC and binary Protocol Buffers to serialize data infinitely faster.",
      icon: <ArrowRightLeft className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Cloud-Native Binaries",
      description: "Go compiles directly to a single, statically linked machine code binary. There is no heavy runtime, no node_modules, and zero external dependencies, allowing us to deploy 10MB Docker containers.",
      icon: <Box className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "High-Throughput APIs",
      description: "When APIs need to process 10,000+ requests per second (RPS), NodeJS collapses. We use Go frameworks like Fiber and Gin to build web sockets and financial ledger APIs that never throttle.",
      icon: <Activity className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Strict Static Typing",
      description: "Go prevents disastrous runtime crashes by enforcing rigid type safety entirely at compile time. It refuses to compile unused variables and ignores implicit typecasting, resulting in extremely clean code.",
      icon: <ShieldCheck className="w-8 h-8 text-[#10b981]" />,
      bg: "bg-[#10b981]/10",
      border: "border-[#10b981]/20"
    },
    {
      title: "Memory Safety & GC",
      description: "Unlike C++, Go natively manages its memory footprint via a highly concurrent Garbage Collector (GC), guaranteeing latency-free execution while preventing catastrophic memory leak faults.",
      icon: <Server className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    }
  ];

  return (
    <section className="bg-[#0a0f12] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#00ADD8]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#00ADD8] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#00ADD8]/10 border border-[#00ADD8]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The Microservice Engine
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Compiled For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADD8] to-[#10b981]">Scale.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            Go was explicitly engineered by Google to solve the problems of multi-core processor environments. We write extremely explicit, minimalist backend architecture that scales instantly alongside Kubernetes clusters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0d1318]/50 border border-[#1a2530] p-8 rounded-3xl group hover:bg-[#111a22] hover:border-[#00ADD8]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#00ADD8] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-semibold mb-4 text-white tracking-tight relative z-10">{c.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-slate-200 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
