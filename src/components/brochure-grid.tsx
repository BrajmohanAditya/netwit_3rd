"use client";

import { ArrowRight, Book, Download, FileText, Globe, Layers, Ribbon, ShieldCheck, Tag, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const brochureItems = [
  { 
    title: "Company Profile", 
    description: "Our comprehensive corporate identity detailing our mission, leadership, and technical history from startup roots to enterprise scale.", 
    tag: "Download",
    pages: "24",
    resolution: "Print Ready",
    category: "Corporate"
  },
  { 
    title: "Services Overview", 
    description: "A complete catalog of our DevOps, Cloud, AI, and Cybersecurity engineering services with deep-tier methodology breakdowns.", 
    tag: "Download",
    pages: "18",
    resolution: "HD Digital",
    category: "Capabilities"
  },
  { 
    title: "Industry Solutions", 
    description: "Vertical-specific engineering solutions for Fintech, Healthcare, SaaS, and E-commerce organizations with success metrics.", 
    tag: "Download",
    pages: "32",
    resolution: "Multi-Hub",
    category: "Verticals"
  },
  { 
    title: "Case Studies Summary", 
    description: "A visual portfolio of our most high-impact engineering transformations, featuring 20+ global enterprise success stories.", 
    tag: "Download",
    pages: "15",
    resolution: "High Fidelity",
    category: "Impact"
  },
  { 
    title: "Partnership Program", 
    description: "Official guide for consulting partners, technical vendors, and shared-client ecosystems within the Netsmartz network.", 
    tag: "Download",
    pages: "12",
    resolution: "Global Scale",
    category: "Partners"
  },
  { 
    title: "Career Opportunities", 
    description: "An insider's look into our engineering culture, benefit structures, and professional development paths for global talent.", 
    tag: "Download",
    pages: "20",
    resolution: "Digital PDF",
    category: "Culture"
  },
];

export function BrochureGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Corporate", "Capabilities", "Verticals", "Impact", "Partners", "Culture"];

  const filteredItems = activeCategory === "All" 
    ? brochureItems 
    : brochureItems.filter(item => item.category === activeCategory);

  return (
    <section id="brochures" className="bg-[#0c0d12] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Brand Filter System */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                 <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-8 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeCategory === c 
                        ? "bg-[#f97316] text-[#0c0d12] border-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {c}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full border border-white/5 flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-[#fb923c]" /> Official Brand Repository
              </span>
           </div>
        </div>

        {/* Brochure Assets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#15171f] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col h-full hover:border-[#f97316]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              {/* Asset Identity Top */}
              <div className="h-64 w-full bg-slate-900/40 relative overflow-hidden border-b border-white/5 p-10 flex flex-col justify-between">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/10 to-transparent pointer-events-none"></div>
                 <div className="flex justify-between items-start">
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#fb923c]">
                       <Ribbon className="w-4 h-4" /> Identity {index+1}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-colors border border-white/5">
                       <Download className="w-5 h-5" />
                    </button>
                 </div>
                 <h4 className="text-2xl font-black text-white leading-tight group-hover:text-[#fb923c] transition-colors">{item.title}</h4>
              </div>

              {/* Asset Meta Body */}
              <div className="p-10 pb-6 flex-1">
                 <div className="flex justify-between items-center mb-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Layers className="w-4 h-4" /> {item.pages} Pages</span>
                    <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> {item.resolution}</span>
                 </div>
                 
                 <p className="text-[13px] text-slate-400 font-light leading-relaxed mb-10 border-l border-white/10 pl-6 group-hover:border-[#f97316] transition-colors">
                    {item.description}
                 </p>
                 
                 <Link 
                    href="#" 
                    className="flex items-center justify-center w-full p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:bg-[#f97316] hover:text-[#0c0d12] transition-all duration-500 font-black text-xs uppercase tracking-widest group/btn"
                 >
                    Get PDF Document <ArrowRight className="w-5 h-5 ml-4 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
              </div>

              {/* Vertical Genre Footer */}
              <div className="px-10 py-5 bg-white/5 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.4em] text-slate-700 group-hover:text-[#fb923c] transition-colors">
                 <span>Brand Hub // {item.category}</span>
                 <Globe className="w-3.5 h-3.5" />
              </div>

            </div>
          ))}
        </div>

        {/* Global Brand Command Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#f97316]/15 via-[#0c0d12] to-slate-900 border border-white/10 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden backdrop-blur-3xl">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(249,115,22,0.1),transparent)] pointer-events-none grayscale opacity-30"></div>
           
           <div className="max-w-xl text-center md:text-left space-y-4 relative z-10">
              <span className="inline-block text-[10px] text-[#fb923c] font-black uppercase tracking-[0.5em] mb-4">Marketing Infrastructure</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none italic">The <span className="text-[#f97316]">Artifacts</span> of Engineering.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Looking for specific brand assets, vector logos, or high-fidelity style guides? Our brand command center provides all the institutional layers for your media requirements.</p>
           </div>
           
           <div className="flex flex-col gap-4 w-full md:w-auto relative z-10">
              <button className="px-12 py-5 bg-white text-[#0c0d12] font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl">
                 <Book className="w-5 h-5 flex-shrink-0" /> Full Identity Bundle
              </button>
              <button className="px-12 py-5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                 Institutional Media Team
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
