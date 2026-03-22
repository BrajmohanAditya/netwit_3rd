"use client";

import { Layers, Cpu, Figma, Github, Orbit, Blocks } from "lucide-react";

export function ProductFeatures() {
  const capabilities = [
    {
      title: "UI/UX & Prototyping",
      description: "We don't just write code. Our world-class designers map user-journeys, create wireframes in Figma, and build high-fidelity prototypes that secure stakeholder buy-in.",
      icon: <Figma className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Full-Stack Architecture",
      description: "Our engineers master modern ecosystems—React, Next.js, Node.js, and Python. We build robust, scalable monolithic or microservice architectures depending on your exact need.",
      icon: <Layers className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Agile PM Execution",
      description: "Dedicated Product Managers lead your squad. Utilizing strictly enforced 2-week sprints, daily standups, and rigorous backlog grooming to guarantee velocity.",
      icon: <Orbit className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Fast-Track MVP (4 Weeks)",
      description: "Test the market. We are experts at scoping down complex requirements into their atomic components, launching lean, highly functional MVPs in record time.",
      icon: <Blocks className="w-8 h-8 text-fuchsia-500" />
    },
    {
      title: "CI/CD & DevOps Automation",
      description: "Code pushed is code deployed. Your dedicated team establishes robust GitOps pipelines requiring zero manual intervention to ship to production.",
      icon: <Github className="w-8 h-8 text-slate-300" />
    },
    {
      title: "Scalable Database Design",
      description: "From relational PostgreSQL arrays to massive NoSQL MongoDB clusters, we architect data schemas engineered for high read/write volumes and complex relational queries.",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />
    }
  ];

  return (
    <section className="bg-[#030303] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-indigo-900/10 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-indigo-400 font-bold tracking-widest uppercase mb-4 text-sm bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
            A Complete Pod
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Everything You Need To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">Build Brilliant Software</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Hiring random freelancers is a gamble. We deploy fully cohesive, cross-functional squads (PMs, Designers, Engineers, QA) who already know how to work together perfectly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0a0a0c] border border-white/5 p-8 rounded-3xl group hover:bg-[#0d0d12] hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden cursor-default">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-300">
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10">{c.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-400 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
