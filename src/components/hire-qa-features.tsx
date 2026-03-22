"use client";

import { Settings2, Eye, GaugeCircle, ShieldCheck, Microscope, GitPullRequest } from "lucide-react";

export function QaFeatures() {
  const capabilities = [
    {
      title: "Automated E2E Testing",
      description: "We write brittle-resistant test scripts in Cypress, Playwright, and Selenium to automatically simulate user journeys and verify core business logic on every pull request.",
      icon: <Settings2 className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Exploratory Manual QA",
      description: "Automation can't catch everything. Our manual testers possess deep product intuition, actively hunting for edge cases, unusual user flows, and subtle UI/UX inconsistencies.",
      icon: <Eye className="w-8 h-8 text-cyan-400" />,
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      title: "Load & Stress Testing",
      description: "Know your breaking point before your users find it. We use JMeter and Artillery to simulate massive concurrent traffic, guaranteeing backend stability during high-demand events.",
      icon: <GaugeCircle className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "API & Integration Layer",
      description: "Frontend bugs often stem from backend failures. We execute rigorous Postman and REST Assured test suites, confirming that JSON payloads and HTTP status codes are flawless.",
      icon: <GitPullRequest className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Continuous Integration (CI)",
      description: "We wire our automated test suites directly into your GitHub Actions, GitLab CI, or Jenkins pipelines. If a test fails, the deployment is blocked. Zero exceptions.",
      icon: <Microscope className="w-8 h-8 text-purple-400" />,
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Security & Penetration",
      description: "We actively audit for OWASP Top 10 vulnerabilities, executing SQL injection attempts, XSS attacks, and authorization bypasses to ensure your data stays locked down.",
      icon: <ShieldCheck className="w-8 h-8 text-teal-400" />,
      bg: "bg-teal-500/10",
      border: "border-teal-500/20"
    }
  ];

  return (
    <section className="bg-[#070707] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-emerald-900/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Absolute Precision
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Testing That Actually <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Protects Your Product</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            QA isn't an afterthought—it's the final line of defense. We deploy holistic testing strategies that combine robotic accuracy with human intuition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0c0c0c] border border-white/5 p-8 rounded-3xl group hover:bg-[#111111] hover:border-white/10 transition-all duration-300 relative overflow-hidden cursor-default">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className={`w-16 h-16 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-white relative z-10">{c.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-300 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
