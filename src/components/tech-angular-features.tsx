"use client";

import { Box, Layers, ShieldCheck, Zap, Server, Network } from "lucide-react";

export function AngularFeatures() {
  const capabilities = [
    {
      title: "Standalone Components",
      description: "We utilize modern Angular architecture to build lightweight, aggressively tree-shakable standalone components, completely eliminating legacy NgModules for maximum performance.",
      icon: <Box className="w-8 h-8 text-[#DD0031]" />,
      bg: "bg-[#DD0031]/10",
      border: "border-[#DD0031]/20"
    },
    {
      title: "RxJS Reactive Programming",
      description: "Tame complex asynchronous events. Our engineers architect intricate data streams using advanced RxJS operators to handle websockets, complex polling, and race conditions flawlessly.",
      icon: <Network className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    },
    {
      title: "Strict TypeScript Safety",
      description: "Zero runtime errors in production. We enforce absolute strict-mode TypeScript across the entire monorepo, ensuring data contracts between the frontend and your APIs are unbreakable.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Angular Universal (SSR)",
      description: "Enterprise apps shouldn't sacrifice SEO. We implement Angular Universal to pre-render your application on the server, delivering instantaneous First Contentful Paint (FCP) metrics.",
      icon: <Server className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "NGRX State Management",
      description: "For massive applications, we implement the NGRX Redux pattern. This creates a deeply predictable, immutable state machine that makes debugging and scaling incredibly straightforward.",
      icon: <Layers className="w-8 h-8 text-violet-400" />,
      bg: "bg-violet-500/10",
      border: "border-violet-500/20"
    },
    {
      title: "Micro-Frontend Architecture",
      description: "Scale your development teams independently. We use Angular and Webpack Module Federation to split monolithic frontends into distinctly deployable, autonomous sub-applications.",
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="bg-[#09090b] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#DD0031]/10 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#DD0031] font-bold tracking-widest uppercase mb-4 text-sm bg-[#DD0031]/10 px-4 py-1.5 rounded-full border border-[#DD0031]/20">
            Angular Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DD0031] to-rose-500">Scale.</span> Not Scripts.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            While simpler frameworks collapse under the weight of hundreds of interacting components and complex state requirements, Angular provides the rigid, scalable structure enterprise engineering demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#121214] border border-white/5 p-8 rounded-3xl group hover:bg-[#161619] hover:border-white/10 transition-all duration-300 relative overflow-hidden cursor-default shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#DD0031] to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className={`w-16 h-16 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10">{c.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-300 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
