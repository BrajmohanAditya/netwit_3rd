"use client";

import { Cloud, Database, Lock, Fingerprint, Activity, Terminal } from "lucide-react";

export function DotnetFeatures() {
  const capabilities = [
    {
      title: "ASP.NET Core Performance",
      description: "We deploy the fastest framework on the market. ASP.NET Core consistently outperforms NodeJS, Python, and Java in sheer request-per-second benchmarks, effortlessly handling millions of concurrent users.",
      icon: <Activity className="w-8 h-8 text-[#5C2D91]" />,
      bg: "bg-[#5C2D91]/10",
      border: "border-[#5C2D91]/20"
    },
    {
      title: "Entity Framework Data",
      description: "Database schemas change, but your application shouldn't break. We utilize Entity Framework Core (EF Core) to map highly secure, type-safe data pipelines directly to automated Azure SQL databases.",
      icon: <Database className="w-8 h-8 text-[#0078D4]" />,
      bg: "bg-[#0078D4]/10",
      border: "border-[#0078D4]/20"
    },
    {
      title: "Azure Cloud Integration",
      description: "Built strictly for the Microsoft Cloud. We seamlessly integrate .NET backends with Azure Active Directory (Entra ID), Azure Functions, and Azure Key Vault for unparalleled enterprise defense and identity management.",
      icon: <Cloud className="w-8 h-8 text-sky-400" />,
      bg: "bg-sky-500/10",
      border: "border-sky-500/20"
    },
    {
      title: "C# Object-Oriented Safety",
      description: "Scripting languages fail at scale. We write strictly enforced, massively scalable object-oriented C# architectures (SOLID principles), catching massive data flaws at compile-time instead of crashing servers in production.",
      icon: <Lock className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Cross-Platform Universality",
      description: "No longer restricted strictly to Windows. The modern .NET architecture allows us to compile ultra-lightweight, self-contained microservices running natively inside lean Linux Docker containers via Kubernetes.",
      icon: <Terminal className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Identity & Authentication",
      description: "We deploy Microsoft's battle-hardened ASP.NET Identity networks out-of-the-box, managing complex token refreshes, two-factor authentication (2FA), and biometric policies effortlessly.",
      icon: <Fingerprint className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    }
  ];

  return (
    <section className="bg-[#090b10] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#5C2D91]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#967ce2] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#5C2D91]/10 border border-[#5C2D91]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The Azure Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5C2D91] to-[#0078D4]">Supremacy.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            Major financial institutions, hospitals, and governments do not trust untested technology. .NET offers absolute legacy stability coupled with modern, lightweight cross-platform containerization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#10141f]/50 border border-[#1e2638] p-8 rounded-3xl group hover:bg-[#151a29] hover:border-[#5C2D91]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#5C2D91] to-[#0078D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
