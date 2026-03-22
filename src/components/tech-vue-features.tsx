"use client";

import { Box, Code2, Server, LayoutDashboard, Database, Rocket } from "lucide-react";

export function VueFeatures() {
  const capabilities = [
    {
      title: "Vue 3 Composition API",
      description: "We abandon bloated Options API logic. Utilizing Vue 3's native Composition API, we group feature-specific code natively, allowing us to build extremely complex platforms that are remarkably simple to read and maintain.",
      icon: <Code2 className="w-8 h-8 text-[#42b883]" />,
      bg: "bg-[#42b883]/10",
      border: "border-[#42b883]/20"
    },
    {
      title: "Nuxt 3 Architecture (SSR)",
      description: "We deploy Nuxt framework to server-side render your Vue components. This guarantees instantaneous page loads via Nitro engines and flawless core web vitals for Google's search crawlers.",
      icon: <Server className="w-8 h-8 text-[#00DC82]" />,
      bg: "bg-[#00DC82]/10",
      border: "border-[#00DC82]/20"
    },
    {
      title: "Pinia State Engine",
      description: "Vuex is obsolete. We architect global store mechanisms using Pinia. It's fully type-safe, extraordinarily lightweight, drops mutations entirely, and integrates perfectly with Vue DevTools.",
      icon: <Database className="w-8 h-8 text-[#f5b331]" />,
      bg: "bg-[#f5b331]/10",
      border: "border-[#f5b331]/20"
    },
    {
      title: "Single File Components",
      description: "Forget context switching between three different files. We leverage Vue's elegant `.vue` SFC format, encapsulating markup (HTML), logic (TS), and styling (SCSS/Tailwind) intimately together.",
      icon: <Box className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Vuetify & Tailwind",
      description: "We build pixel-perfect UI libraries utilizing heavy-duty Material Design via Vuetify 3, or constructing entirely bespoke, highly-branded interfaces dropping raw Tailwind CSS into Vue components.",
      icon: <LayoutDashboard className="w-8 h-8 text-pink-400" />,
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      title: "Micro-Frontends ready",
      description: "We architect applications capable of breaking apart. By utilizing Webpack Module Federation with Vue, your monolithic dashboard smoothly fragments into autonomous apps for scaling teams.",
      icon: <Rocket className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    }
  ];

  return (
    <section className="bg-[#0c1322] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#42b883]/10 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#42b883] font-bold tracking-widest uppercase mb-4 text-sm bg-[#42b883]/10 px-4 py-1.5 rounded-full border border-[#42b883]/20">
            Progressive Scalability
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Unmatched <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42b883] to-emerald-400">Developer Experience.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Vue.js refuses to compromise. It merges the deep architectural control of Angular with the lightweight component flexibility of React, making it a spectacular weapon for building modern SPAs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#121c32] border border-white/5 p-8 rounded-3xl group hover:bg-[#16213a] hover:border-[#42b883]/30 transition-all duration-300 relative overflow-hidden cursor-default shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#42b883] to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
