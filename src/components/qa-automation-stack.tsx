"use client";

import { CheckCircle, Code, Cpu, Database, Layout, ShieldCheck, Smartphone, Target, Zap } from "lucide-react";

const toolsData = [
  {
    title: "Test Management",
    tools: ["Jira", "Zephyr", "TestRail"],
    icon: Layout,
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "Automation Frameworks",
    tools: ["Selenium", "Cypress", "TestComplete", "Playwright"],
    icon: Code,
    color: "from-cyan-500/10 to-transparent"
  },
  {
    title: "CI/CD Integration",
    tools: ["Jenkins", "CircleCI", "GitLab", "GitHub", "Azure"],
    icon: Zap,
    color: "from-indigo-500/10 to-transparent"
  },
  {
    title: "Cybersecurity",
    tools: ["VeraCode", "Checkmarx", "Fortify"],
    icon: ShieldCheck,
    color: "from-blue-600/10 to-transparent"
  },
  {
    title: "Performance & API",
    tools: ["JMeter", "Gatling", "Postman", "SoapUI"],
    icon: Target,
    color: "from-sky-500/10 to-transparent"
  },
  {
    title: "Mobile & Cloud",
    tools: ["Appium", "Sauce Labs", "BrowserStack", "AWS Farm"],
    icon: Smartphone,
    color: "from-blue-400/10 to-transparent"
  }
];

export function QAAutomationStack() {
  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
           <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] italic">The Technical Arsenal</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Unified <span className="text-blue-500 underline decoration-blue-500/30">Tech Stack.</span></h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed">We leverage the world's most high-fidelity testing frameworks and platforms to ensure 100% architectural integrity for your SaaS ecosystem.</p>
        </div>

        {/* High-Fi Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((category, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>

              <div className="flex items-center gap-5 mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                    <category.icon className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-black text-white italic tracking-tight uppercase underline decoration-blue-600/20">{category.title}</h3>
              </div>

              <div className="space-y-4">
                 {category.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 group/item">
                       <CheckCircle className="w-4 h-4 text-emerald-500/40 group-hover/item:text-emerald-500 transition-colors" />
                       <span className="text-sm text-slate-400 font-medium tracking-wide group-hover/item:text-white transition-colors">{tool}</span>
                    </div>
                 ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] text-blue-500 font-black uppercase tracking-widest italic">Standard Deployment</span>
                 <Cpu className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
