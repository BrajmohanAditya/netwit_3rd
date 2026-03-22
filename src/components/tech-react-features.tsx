"use client";

import { Server, Cpu, Layers, LayoutDashboard, Globe2, GaugeCircle } from "lucide-react";

export function ReactFeatures() {
  const capabilities = [
    {
      title: "Atomic Component Engineering",
      description: "We don't just write code; we architect design systems. By leveraging highly modular, reusable React components, we drastically reduce technical debt and ensure absolute UI consistency across your entire product.",
      icon: <Layers className="w-8 h-8 text-[#61DAFB]" />,
      bg: "bg-[#61DAFB]/10",
      border: "border-[#61DAFB]/20"
    },
    {
      title: "Next.js & Server Components",
      description: "React isn't just client-side anymore. We utilize Next.js 14+ Server Components to render complex data securely on the server, shipping zero JavaScript to the client for unprecedented performance and SEO.",
      icon: <Server className="w-8 h-8 text-black dark:text-white" />,
      bg: "bg-white/10",
      border: "border-white/20"
    },
    {
      title: "Advanced State Management",
      description: "Prop-drilling creates fragile apps. We architect robust global state layers using Redux Toolkit, Zustand, or simple context hooks—deploying the exact right tool tailored to your app's complexity.",
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Virtual DOM Optimization",
      description: "Your users shouldn't wait for the browser to repaint. We heavily optimize React's reconciliation engine using useMemo, useCallback, and dynamic imports to guarantee buttery smooth 60fps renders.",
      icon: <GaugeCircle className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Framer Motion & UX",
      description: "Static interfaces are dead. We integrate deeply with Framer Motion and Spring animations to create fluid, tactile micro-interactions that elevate your product from 'usable' to 'premium'.",
      icon: <LayoutDashboard className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Why build a native app when the browser can do it? We engineer offline-ready, installable React PWAs with dedicated service workers that feel indistinguishable from App Store downloads.",
      icon: <Globe2 className="w-8 h-8 text-amber-400" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="bg-[#000000] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#61DAFB]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#61DAFB] font-bold tracking-widest uppercase mb-4 text-sm bg-[#61DAFB]/10 px-4 py-1.5 rounded-full border border-[#61DAFB]/20">
            Frontend Supremacy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-blue-500">Faster.</span> <br className="md:hidden" /> Render Instantly.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            React is the industry standard for a reason. But writing good React is an art. We write functional, immutable code that scales elegantly from startup MVPs to massive enterprise platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl group hover:bg-[#111] hover:border-[#61DAFB]/30 transition-all duration-300 relative overflow-hidden cursor-default shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#61DAFB] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
