"use client";

import { LayoutTemplate, Layers, Braces, Smartphone, Database, Zap } from "lucide-react";

export function WebAppFeatures() {
  const capabilities = [
    {
      title: "React & Next.js Ecosystem",
      description: "Our engineers architect blazing-fast interactive UIs. We leverage Server-Side Rendering (SSR) and Edge Computing using Next.js to deliver zero-latency experiences.",
      icon: <Layers className="w-8 h-8 text-cyan-500" />
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Deliver app-like native experiences inside the browser. Increase conversion with offline modes, background syncing, and push notifications.",
      icon: <Smartphone className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Scalable Micro-Frontends",
      description: "For enterprise-tier web applications, we decompose massive monolithic codebases into independent, deployable micro-frontends.",
      icon: <LayoutTemplate className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "API-First Development",
      description: "Seamlessly integrate your Web App with robust, secure backend logic using cutting-edge GraphQL endpoints or high-performance REST APIs.",
      icon: <Braces className="w-8 h-8 text-teal-500" />
    },
    {
      title: "State & Data Caching",
      description: "Eliminate UI lag. We utilize advanced client state managers (Zustand, Redux) and intelligent data fetching (React Query, SWR) for immediate responsiveness.",
      icon: <Database className="w-8 h-8 text-fuchsia-500" />
    },
    {
      title: "Core Web Vitals Mastery",
      description: "We care obsessively about LCP, FID, and CLS. Your web app will achieve perfect Lighthouse scores, boosting your organic SEO ranking natively.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <section className="bg-[#09090b] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-cyan-900/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Frontend Excellence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Engineering that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Feels Like Magic</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Your users expect instantaneous loads, smooth 60fps animations, and perfect stability across devices. Our developers make that a reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#111116] border border-white/5 p-8 rounded-3xl group hover:bg-[#15151a] hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden cursor-default">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10">{c.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-300 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
