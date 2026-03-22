"use client";

import { CheckCircle2, MonitorSmartphone, PenTool, Zap } from "lucide-react";
import Link from "next/link";

export function FlutterBenefits() {
  const points = [
    "Compiles strictly into native ARM machine code for Apple/Android CPUs.",
    "Completely eliminates UI inconsistency—what you see is universally identical.",
    "Stateful Hot Reload allows infinite iteration speed without losing data.",
    "Expand from Mobile to Desktop (Windows/Mac) and Web seamlessly.",
    "Massively backed, financially and technically, by Google Alphabet.",
    "Deep native integration for Firebase, Maps, and GCP architecture."
  ];

  return (
    <section className="bg-gradient-to-b from-[#040b16] to-[#010306] py-24 relative overflow-hidden text-white border-t border-[#13284f]">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            The Definitive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13B9FD] to-indigo-400">UI Architecture.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            When you build an app using native widgets, an Android update can unexpectedly destroy your meticulously positioned layout. Flutter guarantees absolute UI stability by painting its own widgets, locking in your branding permanently.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#42A5F5] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#0175C2] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(1,117,194,0.3)] hover:shadow-[0_0_40px_rgba(1,117,194,0.5)]">
             Spin up a Flutter Squad
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#081326] border border-[#13284f] p-8 rounded-3xl hover:border-[#13B9FD]/50 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <MonitorSmartphone className="w-8 h-8 text-[#13B9FD] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">6</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Deployable Form Factors</span>
           </div>
           
           <div className="bg-[#081326] border border-[#13284f] p-8 rounded-3xl hover:border-indigo-500/50 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-xl">
              <Zap className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">ARM</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">Direct C++ Compilation</span>
           </div>
           
           <div className="bg-[#081326] border border-[#13284f] p-8 rounded-3xl hover:border-[#42A5F5]/50 transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-xl">
              <PenTool className="w-8 h-8 text-[#42A5F5] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black text-white mb-2">Custom</span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-bold">100% Canvas Control</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#13B9FD] to-[#02569B] border border-[#13284f] p-8 rounded-3xl flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10">Brand Identity.</h4>
              <p className="text-sm text-cyan-100 leading-relaxed relative z-10 font-bold">Stop looking exactly like Apple settings or Android menus. Reclaim your custom product identity.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
