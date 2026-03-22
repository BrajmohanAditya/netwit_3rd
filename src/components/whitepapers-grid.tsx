"use client";

import { ArrowRight, Book, Download, FileText, Globe, Layers, Search, ShieldCheck, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const whitepaperItems = [
  { 
    title: "Enterprise DevOps Guide", 
    description: "Our complete implementation framework for automating high-compliance infrastructure at global scale.", 
    tag: "Download",
    category: "DevOps",
    pages: "42",
    date: "March 22, 2026",
    level: "Strategic"
  },
  { 
    title: "Cloud Architecture Patterns", 
    description: "A catalog of scalable architecture designs for multi-cloud enterprise deployments with unified policy control.", 
    tag: "Download",
    category: "Cloud",
    pages: "58",
    date: "March 15, 2026",
    level: "Architectural"
  },
  { 
    title: "AI Implementation Strategy", 
    description: "An executive guide for integrating and scaling generative AI models within private enterprise data environments.", 
    tag: "Download",
    category: "AI",
    pages: "36",
    date: "March 10, 2026",
    level: "Executive"
  },
  { 
    title: "Security Compliance Handbook", 
    description: "The definitive guide to achieving and maintaining HIPAA, SOC2, and GDPR compliance in a cloud-first infrastructure.", 
    tag: "Download",
    category: "Security",
    pages: "64",
    date: "March 05, 2026",
    level: "Compliance"
  },
  { 
    title: "Cost Optimization Playbook", 
    description: "Strategic frameworks for cloud cost governance and FinOps excellence across massive distributed environments.", 
    tag: "Download",
    category: "Business",
    pages: "24",
    date: "March 01, 2026",
    level: "Strategic"
  },
  { 
    title: "DevOps Maturity Model", 
    description: "A self-assessment framework for evaluating your organization's DevOps progress against global engineering benchmarks.", 
    tag: "Download",
    category: "Maturity",
    pages: "18",
    date: "Feb 25, 2026",
    level: "Assessment"
  },
];

export function WhitepapersGrid() {
  const [activeLevel, setActiveLevel] = useState("All");
  const levels = ["All", "Strategic", "Architectural", "Executive", "Compliance", "Assessment"];

  const filteredItems = activeLevel === "All" 
    ? whitepaperItems 
    : whitepaperItems.filter(item => item.level === activeLevel);

  return (
    <section id="whitepapers" className="bg-[#05060b] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Research Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {levels.map((l) => (
                 <button
                    key={l}
                    onClick={() => setActiveLevel(l)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeLevel === l 
                        ? "bg-[#3b82f6] text-white border-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {l}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-emerald-500" /> Peer-Reviewed Research
              </span>
           </div>
        </div>

        {/* Whitepaper Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0f14] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:border-[#3b82f6]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3b82f6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Document Header */}
              <div className="p-10 pb-4 flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-10">
                    <div className="w-12 h-14 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-[#3b82f6]/10 group-hover:text-[#60A5FA] transition-all border border-white/5">
                       <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-[#60A5FA]/60 bg-[#3b82f6]/5 px-3 py-1 rounded-full">{item.category}</span>
                 </div>
                 
                 <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight group-hover:text-blue-50 transition-colors">
                    {item.title}
                 </h3>
                 <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 flex-1">
                    {item.description}
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4 mt-auto mb-6">
                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl text-center">
                       <span className="block text-[8px] text-slate-600 uppercase tracking-widest mb-1 font-bold">Volume Level</span>
                       <span className="text-xs font-black text-white/50 group-hover:text-white transition-colors">{item.level}</span>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl text-center">
                       <span className="block text-[8px] text-slate-600 uppercase tracking-widest mb-1 font-bold">Research Load</span>
                       <span className="text-xs font-black text-white/50 group-hover:text-white transition-colors">{item.pages} Pages</span>
                    </div>
                 </div>
              </div>

              {/* Action Bar Footer */}
              <div className="px-10 py-8 bg-white/5 border-t border-white/5 flex items-center justify-between group-hover:bg-[#3b82f6]/10 transition-colors duration-500">
                 <Link 
                    href="#" 
                    className="text-xs font-black text-white flex items-center gap-2 group/btn tracking-[0.2em] uppercase hover:text-white transition-all"
                 >
                    Download PDF <Download className="w-4 h-4 transition-transform group-hover/btn:translate-y-1" />
                 </Link>
                 <span className="text-[10px] font-bold text-slate-700 group-hover:text-white/40 transition-colors">{item.date}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Global Technical Desk Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-r from-slate-900 via-[#0d0f14] to-slate-900 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent)] flex items-center justify-center grayscale opacity-10">
              <Book className="w-[800px] h-[800px]" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-[#3b82f6] font-bold uppercase tracking-[0.4em] mb-4">Research & Development</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#3b82f6]">Obsidian</span> Intelligence Labs.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our labs are constantly benchmarking the latest architectural shifts. Subscribe to receive our high-fidelity technical reports before they are published globally.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-10 py-5 bg-[#3b82f6] text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl">
                    <Download className="w-5 h-5" /> Download Full Catalog
                 </button>
                 <button className="px-10 py-5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Globe className="w-4 h-4" /> Strategic Consultation
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
