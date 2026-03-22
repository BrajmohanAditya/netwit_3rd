"use client";

import { CheckCircle2, Shield, CloudCog, Boxes } from "lucide-react";
import Link from "next/link";

export function DotnetBenefits() {
  const points = [
    "Absolute defense via native integration with Microsoft Entra ID (Active Directory).",
    "Unrivaled IDE experience using Visual Studio, massively boosting engineer workflow.",
    "Compile highly compressed Linux executables strictly for lightweight Docker deployments.",
    "Decades of backward compatibility explicitly guaranteed by Microsoft legacy policies.",
    "One unified framework compiling to Web, Cloud, IoT, and Mobile (MAUI/Xamarin).",
    "Drastically higher performance testing metrics than standard Node.js infrastructure."
  ];

  return (
    <section className="bg-gradient-to-b from-[#090b10] to-[#040508] py-24 relative overflow-hidden text-white border-t border-[#1e2638] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#5C2D91]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Unified <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#967ce2] to-[#0078D4]">Ecosystem.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            Fragmented codebases cause bugs. By standardizing entirely on .NET and C#, your teams share massive libraries of core business logic seamlessly between the backend microservices, web-based blazor frontends, and mobile OS applications natively.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#967ce2] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#5C2D91] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(92,45,145,0.3)] hover:shadow-[0_0_50px_rgba(92,45,145,0.5)]">
             Spin Up .NET Architects
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#10141f]/50 border border-[#1e2638] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#151a29] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Shield className="w-8 h-8 text-[#0078D4] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Entra</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Active Directory Native</span>
           </div>
           
           <div className="bg-[#10141f]/50 border border-[#1e2638] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#151a29] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <CloudCog className="w-8 h-8 text-[#967ce2] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Azure</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Deep Cloud Binding</span>
           </div>
           
           <div className="bg-[#10141f]/50 border border-[#1e2638] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#151a29] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Boxes className="w-8 h-8 text-[#5C2D91] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">MAUI</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Cross-Platform UI</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#1c0f2e] to-[#0d1421] border border-[#5C2D91]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#5C2D91]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Kestrel.</h4>
              <p className="text-sm text-purple-200/70 leading-relaxed relative z-10 font-light">The built-in web server runs independently of IIS, routinely shattering millions of parallel benchmarks natively on Linux distributions.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
