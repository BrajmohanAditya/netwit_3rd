"use client";

import { Server, Activity, Database, Braces, Component, Network } from "lucide-react";

export function MernFeatures() {
  const capabilities = [
    {
      title: "React Virtual DOM",
      description: "We don't manually manipulate HTML architectures. React utilizes an absurdly fast Virtual DOM to precisely diff state changes, rewriting only exact pixels that require updates resulting in 60-FPS UI interfaces.",
      icon: <Component className="w-8 h-8 text-[#61DAFB]" />,
      bg: "bg-[#61DAFB]/10",
      border: "border-[#61DAFB]/20"
    },
    {
      title: "Express.js REST APIs",
      description: "When microservices demand raw unopinionated speed, we wire directly into Express. The minimalist Node framework provides instantaneous routing layers handling tens of thousands of requests per second.",
      icon: <Network className="w-8 h-8 text-slate-300" />,
      bg: "bg-slate-200/10",
      border: "border-slate-200/20"
    },
    {
      title: "MongoDB NoSQL Scaling",
      description: "Rigid SQL schemas crush startup pivots. MongoDB relies on dynamic BSON documents, allowing our engineers to wildly restructure massive gigabytes of data instantly without locking database transactions.",
      icon: <Database className="w-8 h-8 text-[#47A248]" />,
      bg: "bg-[#47A248]/10",
      border: "border-[#47A248]/20"
    },
    {
      title: "Redux State Matrices",
      description: "Component chaos is destroyed by Redux Toolkit. We extract complex UX variables into an immutable global state store, drastically simplifying intense single-page application (SPA) data cascades.",
      icon: <Braces className="w-8 h-8 text-[#764ABC]" />,
      bg: "bg-[#764ABC]/10",
      border: "border-[#764ABC]/20"
    },
    {
      title: "Node.js Event Loop",
      description: "Node isn't multithreaded; it's smarter. By defaulting strictly to non-blocking I/O calls, the Node V8 engine continuously loops operations without violently consuming server CPU and RAM allocations.",
      icon: <Activity className="w-8 h-8 text-[#8CC84B]" />,
      bg: "bg-[#8CC84B]/10",
      border: "border-[#8CC84B]/20"
    },
    {
      title: "JSON Universal Types",
      description: "Zero data parsing friction. MERN uses JSON from the database memory entirely through the backend API strictly into the frontend UI layer, eradicating the need for complex, heavy XML or ORM re-mappings.",
      icon: <Server className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    }
  ];

  return (
    <section className="bg-[#05080a] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#61DAFB]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#61DAFB] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#61DAFB]/10 border border-[#61DAFB]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The JavaScript Monopoly
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            One Language. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-[#47A248]">Every Single Layer.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            Polyglot applications are expensive to maintain. The MERN stack enforces absolute JavaScript ubiquity. Your frontend architects can natively understand your backend APIs and cloud database logic perfectly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0b1016]/50 border border-[#16202c] p-8 rounded-3xl group hover:bg-[#0f1721] hover:border-[#61DAFB]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#61DAFB] to-[#47A248] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
