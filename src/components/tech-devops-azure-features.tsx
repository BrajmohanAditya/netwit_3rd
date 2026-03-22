"use client";

import { Box, Network, CloudCog, ShieldCheck, Activity, Lock } from "lucide-react";

export function DevopsAzureFeatures() {
  const capabilities = [
    {
      title: "Azure Kubernetes (AKS)",
      description: "We deploy massive, self-healing Docker container grids to AKS. This guarantees your backend APIs can dynamically clone themselves during erratic user traffic spikes, absolutely eliminating downtime.",
      icon: <Box className="w-8 h-8 text-[#0078D4]" />,
      bg: "bg-[#0078D4]/10",
      border: "border-[#0078D4]/20"
    },
    {
      title: "Infrastructure as Code",
      description: "Manual server configuration is a severe security risk. We explicitly code your entire Azure networking architecture via Terraform or Azure Bicep, allowing you to instantly rebuild production environments.",
      icon: <CloudCog className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Azure Pipelines",
      description: "We orchestrate relentless Continuous Integration/Continuous Deployment (CI/CD) pipelines. At the exact moment your engineers commit code, Azure compiles, tests, and deploys it effortlessly across global regions.",
      icon: <Network className="w-8 h-8 text-[#00adef]" />,
      bg: "bg-[#00adef]/10",
      border: "border-[#00adef]/20"
    },
    {
      title: "Entra ID (Active Directory)",
      description: "We enforce Zero Trust infrastructure. By intrinsically binding your DevOps rollout into Microsoft Entra ID, we guarantee that only strictly authenticated corporate engineers can touch database logic.",
      icon: <Lock className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Application Insights",
      description: "Blind infrastructure is lethal. We inject deep Azure Monitor telemetry into your codebases, providing exact latency graphs, real-time SQL execution tracking, and automatic alerts before memory crashes occur.",
      icon: <Activity className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Compliance & Security",
      description: "Azure leads the globe in compliance (HIPAA, SOC 2, ISO). We map specific Azure Policy rules directly into the cloud subnet, ensuring illegal open ports and unencrypted storage blobs are outright banned.",
      icon: <ShieldCheck className="w-8 h-8 text-[#5C2D91]" />,
      bg: "bg-[#5C2D91]/10",
      border: "border-[#5C2D91]/20"
    }
  ];

  return (
    <section className="bg-[#050b14] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#0078D4]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#0078D4] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#0078D4]/10 border border-[#0078D4]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Cloud Supremacy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Immutable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] to-[#5C2D91]">Architecture.</span>
          </h2>
          <p className="text-blue-50/60 text-lg max-w-2xl leading-relaxed font-light">
            When enterprises move beyond single web servers, they require orchestration. We build Azure cloud architectures that automatically scale, automatically heal, and defend themselves against cyber threats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#081220]/50 border border-[#14233a] p-8 rounded-3xl group hover:bg-[#0c182a] hover:border-[#0078D4]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0078D4] to-[#5C2D91] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-semibold mb-4 text-white tracking-tight relative z-10">{c.title}</h3>
               <p className="text-blue-50/50 text-sm leading-relaxed font-light relative z-10 group-hover:text-blue-50/80 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
