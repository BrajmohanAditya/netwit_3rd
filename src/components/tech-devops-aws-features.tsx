"use client";

import { Box, Network, CloudCog, ShieldCheck, Activity, Lock, Orbit, Zap } from "lucide-react";

export function DevopsAwsFeatures() {
  const capabilities = [
    {
      title: "Elastic Kubernetes (EKS)",
      description: "When containerized web traffic surges violently, Amazon EKS natively detects the CPU load and instantly provisions massive clusters of identical EC2 worker nodes perfectly to handle the demand, turning them off afterwards.",
      icon: <Box className="w-8 h-8 text-[#FF9900]" />,
      bg: "bg-[#FF9900]/10",
      border: "border-[#FF9900]/20"
    },
    {
      title: "AWS CloudFormation & CDK",
      description: "Do not rely on the AWS web console. We write explicit Cloud Development Kit (CDK) scripts mapped via CloudFormation, explicitly tracking all infrastructure setups, VPCs, and Firewalls inside version control.",
      icon: <CloudCog className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "AWS CodePipeline CI/CD",
      description: "Seamless deployment velocity is non-negotiable. CodePipeline merges Git commits immediately into automated unit test matrices before seamlessly rolling Docker image binaries directly out to production.",
      icon: <Network className="w-8 h-8 text-[#527FFF]" />,
      bg: "bg-[#527FFF]/10",
      border: "border-[#527FFF]/20"
    },
    {
      title: "Lambda Serverless Backend",
      description: "Eliminate idle server costs permanently. We craft highly sophisticated microservices via AWS Lambda, executing isolated logic components precisely when event triggers fire, directly writing to DynamoDB.",
      icon: <Zap className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "IAM & Zero Trust Defense",
      description: "Identity and Access Management (IAM) is the most critical perimeter. We configure ruthlessly narrow execution roles, strictly preventing any specific database layer or microservice from leaking cross-zone network access.",
      icon: <Lock className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "CloudWatch Telemetry",
      description: "You cannot scale what you cannot see. Azure-deep metrics via AWS CloudWatch grant engineering teams absolute visibility into sub-millisecond API latency, sudden memory exhaustion alerts, and security faults.",
      icon: <Activity className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    }
  ];

  return (
    <section className="bg-[#0f1523] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#FF9900]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#FF9900] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#FF9900]/10 border border-[#FF9900]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Global Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Deploy specifically for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#527FFF]">Hyper-Growth.</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed font-light">
            Startups die when they hard-code directly onto single-server Linux boxes. We utilize the dominant market leader, Amazon Web Services, to build uncrashable, infinitely elastic multi-availability zone architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#121927]/50 border border-[#1e293b] p-8 rounded-3xl group hover:bg-[#151c2a] hover:border-[#FF9900]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#FF9900] to-[#527FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
