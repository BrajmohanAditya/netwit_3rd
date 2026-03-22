"use client";

import { ArrowRight, BarChart, Download, Eye, Globe, Hexagon, Layers, Share2, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const infographicItems = [
  { 
    title: "DevOps Lifecycle", 
    description: "A continuous flow visualization from requirement gathering to automated deployment and feedback loops.", 
    tag: "View",
    format: "SVG / High Res",
    complexity: "Architectural",
    category: "DevOps"
  },
  { 
    title: "Cloud Comparison", 
    description: "Multi-cloud feature parity matrix: AWS vs Azure vs GCP across storage, compute, and AI services.", 
    tag: "View",
    format: "PNG / Interactive",
    complexity: "Strategic",
    category: "Cloud"
  },
  { 
    title: "Security Checklist", 
    description: "The zero-trust infrastructure checklist. Essential hardening steps for modern cloud-native environments.", 
    tag: "View",
    format: "PDF Booklet",
    complexity: "Compliance",
    category: "Security"
  },
  { 
    title: "AI Benefits Breakdown", 
    description: "Quantifying the impact of LLM integration on developer velocity and operational overhead reduction.", 
    tag: "View",
    format: "SVG / Animated",
    complexity: "Strategic",
    category: "AI"
  },
  { 
    title: "Cloud Cost Breakdown", 
    description: "Identifying hidden cloud egress costs and waste. A visual guide to FinOps cost governance at scale.", 
    tag: "View",
    format: "PNG / High Res",
    complexity: "Executive",
    category: "Business"
  },
  { 
    title: "Team Structure Guide", 
    description: "Evolving from siloed teams to high-performance platform engineering and SRE organizational models.", 
    tag: "View",
    format: "PDF Poster",
    complexity: "Organizational",
    category: "Culture"
  },
];

export function InfographicsGrid() {
  const [activeComplexity, setActiveComplexity] = useState("All");
  const complexities = ["All", "Architectural", "Strategic", "Compliance", "Executive", "Organizational"];

  const filteredItems = activeComplexity === "All" 
    ? infographicItems 
    : infographicItems.filter(item => item.complexity === activeComplexity);

  return (
    <section id="gallery" className="bg-[#050805] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Gallery Filter Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {complexities.map((c) => (
                 <button
                    key={c}
                    onClick={() => setActiveComplexity(c)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeComplexity === c 
                        ? "bg-[#84cc16] text-[#050805] border-[#84cc16] shadow-[0_0_20px_rgba(132,204,22,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {c}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-[#84cc16]/5 px-6 py-2 rounded-full border border-[#84cc16]/5 flex items-center gap-2">
                 <Sparkles className="w-4 h-4 text-[#a3e635]" /> Visual Intelligence Feed
              </span>
           </div>
        </div>

        {/* Infographic Tiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d120d] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col h-full hover:border-[#84cc16]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#84cc16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Visualization Placeholder Top */}
              <div className="h-64 w-full bg-slate-900/40 relative overflow-hidden border-b border-white/5 p-10 flex flex-col justify-between">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/5 to-transparent pointer-events-none"></div>
                 <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#a3e635]/40 group-hover:text-[#a3e635] transition-colors">
                       <Hexagon className="w-6 h-6" />
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600 hover:text-white transition-colors">
                       <Download className="w-5 h-5" />
                    </button>
                 </div>
                 
                 <div className="relative">
                    <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#84cc16] mb-2 block">{item.complexity} Flow</span>
                    <h4 className="text-2xl font-extrabold text-white leading-tight group-hover:text-emerald-50 transition-colors italic">{item.title}</h4>
                 </div>
              </div>

              {/* Data Content Body */}
              <div className="p-10 pb-6 flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest border-b border-white/5 pb-4">
                    <span className="flex items-center gap-1.5"><Layers className="w-4 h-4" /> {item.format}</span>
                    <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4" /> Optimized</span>
                 </div>
                 
                 <p className="text-[13px] text-slate-400 font-light leading-relaxed mb-10 flex-1">
                    {item.description}
                 </p>
                 
                 <Link 
                    href="#" 
                    className="flex items-center justify-center w-full p-6 bg-white/[0.03] rounded-[1.5rem] border border-white/5 hover:bg-[#84cc16] hover:text-[#050805] transition-all duration-500 font-extrabold text-xs uppercase tracking-widest group/btn"
                 >
                    View Interactive Map <Eye className="w-5 h-5 ml-4 group-hover/btn:scale-110 transition-transform" />
                 </Link>
              </div>

              {/* Visualization Footer Strip */}
              <div className="px-10 py-5 bg-white/5 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.4em] text-slate-700 group-hover:text-[#a3e635] transition-colors">
                 <span>Strategic Intel // {item.category}</span>
                 <Share2 className="w-3.5 h-3.5 group-hover:scale-125 transition-transform" />
              </div>

            </div>
          ))}
        </div>

        {/* Global Visual Command Center Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#84cc16]/10 via-[#050805] to-[#06b6d4]/10 border border-white/10 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden backdrop-blur-3xl">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(132,204,22,0.1),transparent)] pointer-events-none opacity-50"></div>
           
           <div className="max-w-xl text-center md:text-left space-y-4 relative z-10">
              <span className="inline-block text-[10px] text-[#a3e635] font-black uppercase tracking-[0.5em] mb-4">Engineering Visuals</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none italic">The <span className="text-[#a3e635]">Blueprints</span> of Future-Fit Cloud.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our design team translates complex architectural shift into clear, geometric blueprints. Download the full visual system for your team's tactical planning sessions.</p>
           </div>
           
           <div className="flex flex-col gap-4 w-full md:w-auto relative z-10">
              <button className="px-12 py-5 bg-white text-[#050805] font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl">
                 <BarChart className="w-5 h-5" /> Full Visual Catalog
              </button>
              <button className="px-12 py-5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                 <Globe className="w-4 h-4" /> Global Design Desk
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
