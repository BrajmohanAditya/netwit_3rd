"use client";

import { Box, Layers, Globe2, Cpu, Wrench, ShieldCheck } from "lucide-react";

export function PhpFeatures() {
  const capabilities = [
    {
      title: "Laravel Monoliths & APIs",
      description: "Laravel is the gold standard for PHP. We engineer complex, highly secure enterprise architectures leveraging Laravel's Eloquent ORM, Job Queues, Broadcasting, and native API scaffolding.",
      icon: <Box className="w-8 h-8 text-[#FF2D20]" />,
      bg: "bg-[#FF2D20]/10",
      border: "border-[#FF2D20]/20"
    },
    {
      title: "WordPress Sub-Systems",
      description: "We don't just 'install' WordPress; we architect it. We build completely custom Headless WordPress environments, massive multisite networks, and bespoke plugin logic used by major publishers.",
      icon: <Globe2 className="w-8 h-8 text-[#21759B]" />,
      bg: "bg-[#21759B]/10",
      border: "border-[#21759B]/20"
    },
    {
      title: "Symfony Enterprise",
      description: "For systems demanding absolute flexibility and component reusability, we pivot to Symfony. We utilize its decoupled architecture to build heavily customized B2B portals and CRM ecosystems.",
      icon: <Layers className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "PHP 8.x Modernization",
      description: "Legacy PHP 5 apps suffer severe performance bottlenecks. We comprehensively upgrade core business logic to PHP 8+, utilizing its Just-In-Time (JIT) compiler and strict typing to double server speed.",
      icon: <Cpu className="w-8 h-8 text-[#8892BF]" />,
      bg: "bg-[#4F5B93]/20",
      border: "border-[#4F5B93]/30"
    },
    {
      title: "Bespoke System Migration",
      description: "Sometimes 'off the shelf' destroys your business logic. We reverse-engineer terrifyingly old legacy PHP spaghetti-code, gracefully migrating the data models and API endpoints into maintainable MVC patterns.",
      icon: <Wrench className="w-8 h-8 text-amber-500" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Imperative Security Defense",
      description: "PHP gets a bad reputation because of poor coding. We lock down applications against SQL injection, Cross-Site Scripting (XSS), and CSRF using modern prepared statements and strict server middleware.",
      icon: <ShieldCheck className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    }
  ];

  return (
    <section className="bg-[#0b0f19] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#4F5B93]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#8892BF] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#4F5B93]/10 border border-[#4F5B93]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The Omnipresent Backend
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Stop Over-Engineering. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8892BF] to-[#FF2D20]">Ship Reality.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            In a world obsessed with complex JavaScript mid-tiers, PHP remains the absolute king of direct, stable, server-rendered revenue. We write strictly typed, thoroughly tested PHP that keeps servers humming quietly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#121929]/50 border border-[#1e2a44] p-8 rounded-3xl group hover:bg-[#161f33] hover:border-[#4F5B93]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#8892BF] to-[#FF2D20] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
