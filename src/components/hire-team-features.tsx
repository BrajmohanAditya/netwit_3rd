"use client";

import { UserCheck, Layers, GitPullRequest, LineChart, Cpu, ShieldCheck } from "lucide-react";

export function TeamFeatures() {
  const capabilities = [
    {
      title: "Hand-Picked Engineering Pods",
      description: "We don't assign random freelancers. Your team is meticulously assembled based on strict technical alignment, cultural fit, and previous history working together.",
      icon: <UserCheck className="w-8 h-8 text-amber-500" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Seamless Tech Stack Integration",
      description: "Our developers adopt your tools immediately. Integrating flawlessly into your Jira, Slack, GitHub, and daily agile ceremonies. We operate as an extension of your own office.",
      icon: <GitPullRequest className="w-8 h-8 text-orange-500" />,
      bg: "bg-orange-500/10",
      border: "border-orange-500/20"
    },
    {
      title: "Elastic Scalability",
      description: "Scale your pod size up or down with 2-weeks notice. If a deadline condenses, we drop in additional vetted senior engineers instantly to ensure you hit the deployment date.",
      icon: <Layers className="w-8 h-8 text-violet-500" />,
      bg: "bg-violet-500/10",
      border: "border-violet-500/20"
    },
    {
      title: "Dedicated Project Management",
      description: "Every pod comes with an embedded Agile PM (Scrum Master). They shield your internal stakeholders from the chaos, handling sprint velocity, backlog grooming, and blockages.",
      icon: <LineChart className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Senior-Heavy Composition",
      description: "We stack our dedicated teams with architects and senior engineers, avoiding the trap of junior-heavy bloat that plagues traditional outsourcing agencies.",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Strict IP Protection",
      description: "Your code is your code. Every developer operates under ironclad NDAs, utilizing highly secure, client-controlled VPNs and compartmentalized repository access.",
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    }
  ];

  return (
    <section className="bg-[#0c0c0e] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-amber-900/10 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            The Team Model
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Stop Recruiting. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Start Shipping.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Hiring an in-house engineer takes 45 days and costs 20% of their base salary in agency fees. We deploy a full squad in 48 hours for $0 in hiring costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#121217] border border-white/5 p-8 rounded-3xl group hover:bg-[#15151c] hover:border-white/10 transition-all duration-300 relative overflow-hidden cursor-default shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className={`w-16 h-16 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10">{c.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-300 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
