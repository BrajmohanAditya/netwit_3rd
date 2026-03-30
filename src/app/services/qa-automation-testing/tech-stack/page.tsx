"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, ArrowRight, CheckCircle, Cpu, Globe, Layers, Microscope, ShieldCheck, Sparkles, Zap, MonitorPlay, Infinity as InfinityIcon } from "lucide-react";
import Link from "next/link";

const techStacks = [
  {
    category: "Web Automation",
    icon: MonitorPlay,
    description: "High-fidelity browser automation frameworks for complex SaaS environments.",
    tools: [
      { name: "Selenium", rating: "Standard", description: "The industry standard for cross-browser validation." },
      { name: "Playwright", rating: "Next-Gen", description: "High-speed, multi-tab, and reliable automation." },
      { name: "Cypress", rating: "E2E", description: "Developer-centric frontend testing orchestration." }
    ]
  },
  {
    category: "Mobile Testing",
    icon: Globe,
    description: "Validating mobile experiences across iOS and Android ecosystems.",
    tools: [
      { name: "Appium", rating: "Cross-Platform", description: "Automating native, hybrid, and mobile web apps." },
      { name: "XCUITest", rating: "iOS Native", description: "Precision testing for the Apple ecosystem." },
      { name: "Espresso", rating: "Android Native", description: "High-performance Android UI validation." }
    ]
  },
  {
    category: "Performance & Load",
    icon: Zap,
    description: "Simulating massive user traffic to ensure total system stability.",
    tools: [
      { name: "JMeter", rating: "Standard", description: "Robust load testing for various protocol types." },
      { name: "K6", rating: "Modern", description: "Developer-friendly performance testing in Javascript." },
      { name: "Locust", rating: "Scalable", description: "Distributed user load testing written in Python." }
    ]
  },
  {
    category: "CI/CD & DevOps",
    icon: InfinityIcon,
    description: "Seamlessly integrating QA protocols into the engineering pipeline.",
    tools: [
      { name: "GitHub Actions", rating: "Integrative", description: "Automated workflows triggered by code commits." },
      { name: "Jenkins", rating: "Enterprise", description: "Flexible CI/CD orchestration for global scale." },
      { name: "CircleCI", rating: "Velocity", description: "Rapid testing and deployment automation." }
    ]
  }
];

export default function QATechStackPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30">
      <Header />
      
      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-blue-500/5 rounded-full blur-[200px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          {/* Header Link */}
          <Link href="/services/qa-automation-testing" className="inline-flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest mb-12 hover:text-white transition-colors group italic">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to QA Hub
          </Link>

          {/* Hero Section */}
          <div className="mb-24 space-y-6">
            <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] italic">The Technical Arsenal</span>
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
              The QA <br/>
              <span className="text-blue-500 text-glow_blue">Architecture.</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl border-l-2 border-blue-500/30 pl-8 mt-10">
              We leverage an elite selection of industry-leading technologies to engineer zero-defect software environments. Our stack is curated for scalability, velocity, and total reliability.
            </p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {techStacks.map((stack, idx) => (
              <div key={idx} className="bg-[#0f172a]/60 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 hover:border-blue-500/20 transition-all group">
                <div className="flex justify-between items-start mb-10">
                   <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                      <stack.icon className="w-8 h-8 text-white" />
                   </div>
                   <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest italic group-hover:text-blue-400 transition-colors">Stack Section // 0{idx + 1}</span>
                </div>

                <h2 className="text-3xl font-black text-white italic uppercase tracking-tight mb-4 underline decoration-blue-600/30">{stack.category}</h2>
                <p className="text-slate-400 font-light mb-12 leading-relaxed">{stack.description}</p>

                <div className="space-y-4">
                   {stack.tools.map((tool, tIdx) => (
                     <div key={tIdx} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors flex justify-between items-center group/tool">
                        <div>
                           <div className="flex items-center gap-3 mb-1">
                              <span className="text-white font-black italic">{tool.name}</span>
                              <span className="text-[8px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">{tool.rating}</span>
                           </div>
                           <p className="text-xs text-slate-500 font-light italic">{tool.description}</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-emerald-500 opacity-0 group-hover/tool:opacity-100 transition-opacity" />
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>

          {/* Global Certification Footer */}
          <div className="mt-24 p-16 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-[5rem] text-center relative overflow-hidden backdrop-blur-3xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="relative z-10 max-w-2xl mx-auto space-y-10">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
                   <Microscope className="w-4 h-4 text-blue-400" />
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic tracking-tighter">Verified Stack Integrator</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
                  Total <span className="text-blue-500">Tech</span> Integration.
                </h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed">
                  Our engineering desk is ready to architect a custom tech strategy for your unique SaaS requirements.
                </p>

                <div className="flex justify-center pt-6">
                   <Link href="/schedule-demo" className="px-14 py-6 bg-blue-600 text-white font-black rounded-full hover:scale-105 transition-transform shadow-[0_20px_60px_rgba(59,130,246,0.3)] italic uppercase text-sm">
                      Initialize Tech Audit
                   </Link>
                </div>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
