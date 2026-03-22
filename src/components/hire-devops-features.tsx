"use client";

import { Boxes, CloudCog, ArrowLeftRight, DatabaseZap, LockOpen, ServerCog } from "lucide-react";

export function DevOpsFeatures() {
  const capabilities = [
    {
      title: "Cloud Architecture & Migration",
      description: "Hire AWS, GCP, and Azure certified engineers to seamlessly migrate legacy monolithic apps or architect net-new cloud-native elastic infrastructure.",
      icon: <CloudCog className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Kubernetes & Containerization",
      description: "Stop dealing with 'it works on my machine'. We build robust Docker & Kubernetes ecosystems ensuring parity across all dev, staging, and production environments.",
      icon: <Boxes className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "CI/CD Pipeline Orchestration",
      description: "Implement zero-downtime rolling deployments and blue/green patterns with GitLab CI, GitHub Actions, ArgoCD, or Jenkins.",
      icon: <ArrowLeftRight className="w-8 h-8 text-teal-400" />
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "Define, version control, and automate your entire infrastructure provisioning securely using Terraform, Ansible, or AWS CloudFormation.",
      icon: <ServerCog className="w-8 h-8 text-blue-400" />
    },
    {
      title: "DevSecOps & Compliance",
      description: "Embed security checks directly into your pipeline. Protect sensitive data with automated vulnerability scanning, IAM boundaries, and secret management.",
      icon: <LockOpen className="w-8 h-8 text-indigo-400" />
    },
    {
      title: "SRE & Observability",
      description: "Identify problems before your users do. Build sophisticated telemetry and alert pipelines using Datadog, Prometheus, Grafana, and ELK stack.",
      icon: <DatabaseZap className="w-8 h-8 text-violet-400" />
    }
  ];

  return (
    <section className="bg-[#050505] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-teal-900/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-teal-400 font-bold tracking-widest uppercase mb-4 text-sm bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Specialized Engineering
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Stop Managing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Servers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Our pre-vetted DevOps and SRE professionals treat infrastructure as software, maximizing agility, automating compliance, and ensuring infinite scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0a0a0c] border border-white/5 p-8 rounded-3xl group hover:bg-[#0f0f12] hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden cursor-default">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none"></div>
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-300">
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 relative z-10">{c.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-400 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
