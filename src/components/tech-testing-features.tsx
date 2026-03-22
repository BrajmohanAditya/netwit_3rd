"use client";

import { PlayCircle, ShieldCheck, Activity, Pointer, GitCommit, FileCode2 } from "lucide-react";

export function TestingFeatures() {
  const capabilities = [
    {
      title: "Automated E2E Engineering",
      description: "We architect indestructible E2E (End-to-End) suites using Cypress and Playwright. Every major user flow—login, checkout, database writes—is mathematically verified thousands of times a day via headless browsers.",
      icon: <PlayCircle className="w-8 h-8 text-[#10B981]" />,
      bg: "bg-[#10B981]/10",
      border: "border-[#10B981]/20"
    },
    {
      title: "Exploratory Manual QA",
      description: "Code doesn't understand UX frustration. We deploy senior manual QA engineers strictly to attempt breaking edge cases, identifying bizarre mobile layouts, broken modals, and human-experience bottlenecks.",
      icon: <Pointer className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Load & Stress Benchmarking",
      description: "Monolithic crash prevention. We construct massive simulated request floods utilizing Apache JMeter or K6, violently pushing server concurrency to its absolute limit to find where databases begin to choke.",
      icon: <Activity className="w-8 h-8 text-rose-500" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Cyber Security Penetration",
      description: "We orchestrate highly-specific OWASP top-10 vulnerability assessments. We aggressively attempt SQL Injections, Cross-Site Scripting (XSS), and JWT Auth token hijacking long before malicious actors do.",
      icon: <ShieldCheck className="w-8 h-8 text-[#8b5cf6]" />,
      bg: "bg-[#8b5cf6]/10",
      border: "border-[#8b5cf6]/20"
    },
    {
      title: "CI/CD Pipeline Gates",
      description: "Developers cannot push broken code. We directly embed Jest unit tests and SonarQube static analysis tools directly into your GitHub Actions; the branch literally rejects PRs if an assertion fails.",
      icon: <GitCommit className="w-8 h-8 text-amber-500" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "API Contract Validation",
      description: "Frontend crashes often stem from silent backend JSON payload changes. We deploy strict Postman server-contract assertions ensuring APIs always return explicitly typed objects with correct HTTP status codes.",
      icon: <FileCode2 className="w-8 h-8 text-cyan-400" />,
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    }
  ];

  return (
    <section className="bg-[#050608] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#10B981]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#10B981] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#10B981]/10 border border-[#10B981]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The QA Assurance Tier
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Eradicate production <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3b82f6]">Exceptions.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            Hope is a terrible release strategy. We enforce software quality by surrounding raw developer logic with impenetrable layers of automated validation, security checks, and deep performance analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0b0c10]/50 border border-[#181a20] p-8 rounded-3xl group hover:bg-[#0f1115] hover:border-[#10B981]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#10B981] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
