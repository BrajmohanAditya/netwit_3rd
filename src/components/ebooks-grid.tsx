"use client";

import { ArrowRight, BookOpen, Download, GraduationCap, Layers, Share2, Sparkles, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ebookItems = [
  { 
    title: "DevOps for Beginners", 
    description: "The essential starting point for engineers transitioning to a high-automation cloud culture.", 
    tag: "Free",
    pages: "120",
    rating: "4.8",
    category: "Foundations"
  },
  { 
    title: "Cloud Computing Guide", 
    description: "A comprehensive overview of serverless, microservices, and unified cloud governance patterns.", 
    tag: "Free",
    pages: "185",
    rating: "4.9",
    category: "Architecture"
  },
  { 
    title: "AI in Business", 
    description: "An executive guide to the practical implementation of generative AI for business automation and product scaling.", 
    tag: "Premium",
    pages: "95",
    rating: "5.0",
    category: "Strategic"
  },
  { 
    title: "Security Best Practices", 
    description: "Protect your digital assets with a zero-trust manual designed for the modern distributed enterprise.", 
    tag: "Free",
    pages: "210",
    rating: "4.7",
    category: "Security"
  },
  { 
    title: "DevOps Tools Comparison", 
    description: "A technical deep-dive into the 2024 toolchain—Jenkins, GitHub Actions, Terraform, and beyond.", 
    tag: "Premium",
    pages: "150",
    rating: "4.9",
    category: "Toolchain"
  },
  { 
    title: "Scaling Your Startup", 
    description: "Architectural and organizational growth strategies for technical startups scaling to the series A/B level.", 
    tag: "Free",
    pages: "80",
    rating: "4.8",
    category: "Growth"
  },
];

export function EbooksGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Foundations", "Architecture", "Strategic", "Security", "Toolchain", "Growth"];

  const filteredItems = activeFilter === "All" 
    ? ebookItems 
    : ebookItems.filter(item => item.category === activeFilter);

  return (
    <section id="ebooks" className="bg-[#080510] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Knowledge Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                 <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeFilter === f 
                        ? "bg-[#10b981] text-[#08050d] border-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {f}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center gap-2">
                 <GraduationCap className="w-4 h-4 text-[#a855f7]" /> Master Library Series
              </span>
           </div>
        </div>

        {/* eBooks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f0b1a] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col h-full hover:border-[#10b981]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#10b981]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Cover Design Abstract */}
              <div className="h-64 w-full bg-slate-900/40 relative overflow-hidden border-b border-white/5 p-8 flex flex-col justify-between">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent pointer-events-none"></div>
                 <div className="flex justify-between items-start">
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      item.tag === "Premium" 
                        ? "bg-[#a855f7] text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]" 
                        : "bg-[#10b981] text-[#08050d]"
                    }`}>
                       {item.tag} Edition
                    </span>
                    <Share2 className="w-5 h-5 text-slate-700 hover:text-white cursor-pointer transition-colors" />
                 </div>
                 <div className="relative">
                    <BookOpen className="w-12 h-12 text-[#10b981]/40 mb-4 group-hover:text-[#10b981] transition-colors" />
                    <h4 className="text-xl font-black text-white leading-tight pr-10">{item.title}</h4>
                 </div>
              </div>

              {/* eBook Details */}
              <div className="p-10 pt-4 flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white/50 group-hover:text-white transition-colors">
                       <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" /> {item.rating}
                    </div>
                    <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-2">
                       <Layers className="w-4 h-4" /> {item.pages} Pages
                    </div>
                 </div>
                 
                 <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 flex-1">
                    {item.description}
                 </p>
                 
                 <Link 
                    href="#" 
                    className="group/btn flex items-center justify-between w-full p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-[#10b981] hover:text-[#080510] transition-all duration-500 font-black text-xs uppercase tracking-widest"
                 >
                    {item.tag === "Premium" ? "Purchase Guide" : "Download Now"}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
              </div>

              {/* Genre Bar Footer */}
              <div className="px-10 py-4 bg-white/[0.02] flex items-center justify-between text-[8px] font-black uppercase tracking-[0.4em] text-slate-700 group-hover:text-[#10b981]">
                 <span>{item.category} Series</span>
                 <Sparkles className="w-3.5 h-3.5" />
              </div>

            </div>
          ))}
        </div>

        {/* Global Technical Library Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#10b981]/10 via-[#0f0b1a] to-[#a855f7]/10 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent)] flex items-center justify-center grayscale opacity-10">
              < GraduationCap className="w-[800px] h-[800px]" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-[#10b981] font-bold uppercase tracking-[0.5em] mb-4">Engineering Evolution</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Expand Your <span className="text-[#a855f7]">Digital</span> Domain.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our library is constantly updated with new architectural guides and technical roadmaps. Join our engineering alumni to get premium eBooks delivered to your inbox every quarter.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-12 py-5 bg-[#10b981] text-[#08050d] font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl">
                    <Zap className="w-5 h-5" /> Join Masterclass Series
                 </button>
                 <button className="px-12 py-5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <BookOpen className="w-4 h-4" /> View Full Catalog
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
