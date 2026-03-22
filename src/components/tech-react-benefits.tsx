"use client";

import { CheckCircle2, Blocks, Rocket, LineChart } from "lucide-react";
import Link from "next/link";

export function ReactBenefits() {
  const points = [
    "Maximum component reusability and isolated testing",
    "Declarative UI that updates intuitively on data change",
    "Massive open-source ecosystem (NPM) for any integration",
    "Extremely SEO-friendly via Next.js SSR and SSG",
    "Unidirectional data flow makes debugging painless",
    "Easy migration path to React Native for mobile apps"
  ];

  return (
    <section className="bg-gradient-to-b from-[#000000] to-[#050510] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-indigo-500">Developer Experience.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            You don't just want an app that works; you want a codebase your engineers love working on. React's massive ecosystem, backed by Meta, guarantees long-term support, infinite third-party integrations, and a massive pool of hireable talent.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#61DAFB] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
             Build with React
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-[#61DAFB]/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <Blocks className="w-8 h-8 text-[#61DAFB] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">100%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Reusable Code</span>
           </div>
           
           <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-indigo-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-xl">
              <Rocket className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">SSR</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Via Next.js</span>
           </div>
           
           <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <LineChart className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">LCP</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Core Web Vitals</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#61DAFB] to-indigo-700 border border-white/5 p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 text-black">SEO Perfect.</h4>
              <p className="text-sm text-indigo-900 leading-relaxed relative z-10 font-bold">Eliminate blank loading screens. Send fully parsed HTML directly to Google's crawlers.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
