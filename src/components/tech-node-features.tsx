"use client";

import { Cpu, Network, Database, Webhook, Container, Server } from "lucide-react";

export function NodeFeatures() {
  const capabilities = [
    {
      title: "Extremely Scalable Microservices",
      description: "We dismantle fragile legacy monoliths into lightning-fast, independently deployable Node.js microservices. Scaling out through Docker and Kubernetes to effortlessly handle millions of requests.",
      icon: <Network className="w-8 h-8 text-[#5FA04E]" />,
      bg: "bg-[#5FA04E]/10",
      border: "border-[#5FA04E]/20"
    },
    {
      title: "Non-Blocking I/O (Event Loop)",
      description: "Unlike PHP or Java, Node.js never waits for a database to return. Its deeply optimized single-threaded event loop processes tens of thousands of concurrent connections concurrently via callbacks.",
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      title: "Real-Time WebSocket Data",
      description: "Build systems where data moves instantly. We architect robust Socket.io/WebSocket pipelines for live financial dashboards, multi-player gaming, chatbots, and instant push notifications.",
      icon: <Webhook className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Express & NestJS Architectures",
      description: "Depending on scale, we utilize lean Express.js engines for high velocity API delivery, or heavily structured, TypeScript-first NestJS architectures for massive enterprise banking ecosystems.",
      icon: <Server className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "NoSQL DB & Data Streams",
      description: "Node.js speaks JSON natively. We pair Node environments with deep MongoDB/Mongoose or PostgreSQL integrations, creating completely seamless data streams from database to client.",
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Dockerization & CI/CD",
      description: "Code that works locally should work everywhere. Our Node solutions are packaged directly into immutable Linux containers, deploying frictionlessly through GitHub Actions or Jenkins onto AWS/Azure.",
      icon: <Container className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-900/20",
      border: "border-blue-500/30"
    }
  ];

  return (
    <section className="bg-[#0d1117] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#339933]/5 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#5FA04E] font-bold tracking-widest uppercase mb-4 text-sm bg-[#5FA04E]/10 px-4 py-1.5 rounded-full border border-[#5FA04E]/20">
            Backend Supemacy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Stop Resolving. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FA04E] to-emerald-400">Start Concurrency.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Every new library tries to dethrone Node.js, but none match its unshakeable ecosystem. It remains the absolute gold standard for building I/O heavy, brutally efficient backend networking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#161b22] border border-[#30363d] p-8 rounded-3xl group hover:border-[#5FA04E]/40 transition-all duration-300 relative overflow-hidden cursor-default shadow-lg">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#339933] to-[#5FA04E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className={`w-16 h-16 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10">{c.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-slate-300 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
