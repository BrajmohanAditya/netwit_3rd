"use client";

import { CheckCircle2, Cloud, Lock, BarChart3, Globe } from "lucide-react";
import Link from "next/link";

export function DevopsAzureBenefits() {
  const points = [
    "Eliminate 'It works on my machine' entirely by containerizing all code into isolated Docker environments.",
    "Slash Azure billing by 40% through intelligent Kubernetes auto-scaling (turning off servers at night).",
    "Integrate natively into the existing Microsoft ecosystem (Windows Server, SQL Server, Office 365, Teams).",
    "Provide enterprise-grade governance guaranteeing SOC 2 and highly-auditable compliance across networks.",
    "Bypass slow manual deployments; release software 10x faster with absolute automated confidence.",
    "Maintain strict Zero Trust cloud networking, utilizing isolated VPN tunnels between backend resources."
  ];

  return (
    <section className="bg-gradient-to-b from-[#050b14] to-[#02050a] py-24 relative overflow-hidden text-white border-t border-[#14233a] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#0078D4]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Absolute <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adef] to-[#0078D4]">Reliability.</span>
          </h2>
          <p className="text-blue-100/50 text-lg mb-8 leading-relaxed font-light">
            Downtime is a direct result of manual human error. By migrating your engineering teams into a fully declarative Infrastructure as Code (IaC) model via Azure DevOps, your platform becomes mathematically predictable, hyper-scalable, and infinitely secure.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-blue-100/70 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#0078D4] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,120,212,0.3)] hover:shadow-[0_0_50px_rgba(0,120,212,0.5)]">
             Automate Pipelines
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#081220]/50 border border-[#14233a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0c182a] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Globe className="w-8 h-8 text-[#0078D4] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">99.99%</span>
              <span className="text-xs text-blue-200/50 tracking-widest uppercase font-semibold">Uptime SLA</span>
           </div>
           
           <div className="bg-[#081220]/50 border border-[#14233a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0c182a] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Lock className="w-8 h-8 text-rose-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Zero</span>
              <span className="text-xs text-blue-200/50 tracking-widest uppercase font-semibold">Trust Networking</span>
           </div>
           
           <div className="bg-[#081220]/50 border border-[#14233a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0c182a] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <BarChart3 className="w-8 h-8 text-[#5C2D91] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">-40%</span>
              <span className="text-xs text-blue-200/50 tracking-widest uppercase font-semibold">Cloud Billing</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#061e38] to-[#04101e] border border-[#0078D4]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0078D4]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Enterprise.</h4>
              <p className="text-sm text-blue-200/70 leading-relaxed relative z-10 font-light">Microsoft Azure is the defacto backbone for 95% of Fortune 500 corporations globally.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
