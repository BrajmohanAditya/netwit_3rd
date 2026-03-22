"use client";

import { Database, ShieldCheck, Box, Network, Fingerprint, Zap } from "lucide-react";

export function JavaFeatures() {
  const capabilities = [
    {
      title: "Spring Boot Microservices",
      description: "We obliterate monolithic bottlenecks. By leveraging the Spring Boot distributed ecosystem (Eureka, Zipkin, Gateway), we decouple complex legacy monolithic servers into highly independent, resilient micro-pods.",
      icon: <Network className="w-8 h-8 text-[#6DB33F]" />,
      bg: "bg-[#6DB33F]/10",
      border: "border-[#6DB33F]/20"
    },
    {
      title: "JVM Garbage Collection Tuning",
      description: "Memory limits create catastrophic downtimes. We deep-profile the Java Virtual Machine (JVM), optimizing heap sizes, ZGC strategies, and thread pooling to guarantee absolute stability underneath extreme server loads.",
      icon: <Zap className="w-8 h-8 text-[#007396]" />,
      bg: "bg-[#007396]/10",
      border: "border-[#007396]/20"
    },
    {
      title: "JPA & Hibernate ORM",
      description: "Banking and retail data cannot afford a single dropped row. We orchestrate impenetrable, highly-normalized relational databases utilizing JPA and Hibernate, strictly enforcing database ACID transactions across clusters.",
      icon: <Database className="w-8 h-8 text-[#F18E33]" />,
      bg: "bg-[#F18E33]/10",
      border: "border-[#F18E33]/20"
    },
    {
      title: "Spring Security & OAuth2",
      description: "We lock down endpoints using Spring Security configurations, implementing zero-trust architectures, stateless JWTs, role-based access controls (RBAC), and deeply integrated Active Directory layers.",
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Strict Type Safety",
      description: "Compiling catches bugs before they destroy revenue. By relying strictly on Java's verbose, strongly-typed object-oriented architecture and SOLID principles, we systematically erase runtime type errors entirely.",
      icon: <Box className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "JUnit & Mockito Test Automation",
      description: "Enterprise commits require brutal scrutiny. We mandate exhaustive JUnit matrices and Mockito class injection to isolate components, yielding 99%+ code coverage before Jenkins permits any production merge.",
      icon: <Fingerprint className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section className="bg-[#080d15] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#007396]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#F18E33] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#F18E33]/10 border border-[#F18E33]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The World Standard
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007396] to-[#6DB33F]">The Enterprise.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            While startups chase the latest javascript trend, Fortune 500 companies rely exclusively on Java. We build strictly-regulated software with multi-decade lifespans, impervious to the chaos of modern package managers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0b111c]/50 border border-[#17223b] p-8 rounded-3xl group hover:bg-[#101826] hover:border-[#007396]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#007396] to-[#F18E33] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
