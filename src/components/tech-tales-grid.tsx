"use client";

import { ArrowRight, Book, Clock, Globe, Map, MessageSquare, Mic2, Share2, Sparkles, User, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const taleItems = [
  { 
    title: "Scaling a Million Users", 
    description: "The night the traffic surge became a tidal wave. An unfiltered look at our architectural scramble to scale a SaaS portal under extreme pressure.", 
    tag: "Popular",
    author: "Elena S.",
    role: "Principal Architect",
    readTime: "8 min",
    category: "Infrastructure"
  },
  { 
    title: "Zero Downtime Migration", 
    description: "The high-wire act of legacy-to-cloud migration. How we moved a global fintech's core database without dropping a single packet.", 
    tag: "Technical",
    author: "Marco V.",
    role: "Cloud Engineer",
    readTime: "12 min",
    category: "Cloud Ops"
  },
  { 
    title: "Building a Chatbot", 
    description: "A story of failed prompts and breakthrough models. The iterative journey of training our first specialized LLM for enterprise support.", 
    tag: "AI",
    author: "Sasha K.",
    role: "Machine Learning Engineer",
    readTime: "10 min",
    category: "AI & ML"
  },
  { 
    title: "24/7 Support Chronicles", 
    description: "The lessons learned from the midnight rotation. Stories of weird bugs, rapid resolutions, and the culture of extreme technical ownership.", 
    tag: "Popular",
    author: "David R.",
    role: "Support Lead",
    readTime: "9 min",
    category: "Operations"
  },
  { 
    title: "Debugging Journey", 
    description: "Tracking a memory leak across 400 microservices. A technical detective story about the mystery of the vanishing resources.", 
    tag: "Technical",
    author: "Leo J.",
    role: "Site Reliability Engineer",
    readTime: "15 min",
    category: "Troubleshooting"
  },
  { 
    title: "Startup to Enterprise", 
    description: "The awkward growth phase of codebases. How a 'quick-and-dirty' startup MVP evolved into a multi-region enterprise platform.", 
    tag: "Story",
    author: "Nora B.",
    role: "Lead Developer",
    readTime: "7 min",
    category: "Growth"
  },
];

export function TechTalesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Infrastructure", "Cloud Ops", "AI & ML", "Operations", "Troubleshooting", "Growth"];

  const filteredItems = activeCategory === "All" 
    ? taleItems 
    : taleItems.filter(item => item.category === activeCategory);

  return (
    <section id="tales" className="bg-[#050608] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Narrative Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                 <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeCategory === cat 
                        ? "bg-[#d97706] text-[#050608] border-[#d97706] shadow-[0_0_20px_rgba(217,119,6,0.2)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {cat}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center gap-2">
                 <Mic2 className="w-4 h-4 text-amber-500" /> Recorded Narratives
              </span>
           </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d1012] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:border-[#d97706]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d97706]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Story Header */}
              <div className="p-10 pb-6 flex-1">
                 <div className="flex justify-between items-center mb-10">
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#fbbf24] bg-[#d97706]/5 px-3 py-1 rounded-full border border-[#d97706]/10">
                       {item.tag} Chronicle
                    </span>
                    <Clock className="w-4 h-4 text-slate-700" />
                 </div>
                 
                 <h3 className="text-2xl font-extrabold text-white mb-6 leading-tight group-hover:text-amber-50 transition-colors italic">
                    {item.title}
                 </h3>
                 <p className="text-sm text-slate-400 font-light leading-relaxed mb-10 border-l border-white/5 pl-6 group-hover:border-amber-500 transition-colors">
                    {item.description}
                 </p>
                 
                 <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d97706] to-amber-900 flex items-center justify-center text-[#050608] font-bold text-xs ring-2 ring-white/5">
                       {item.author[0]}
                    </div>
                    <div>
                       <span className="block text-xs font-bold text-white tracking-tight">{item.author}</span>
                       <span className="block text-[10px] text-slate-600 uppercase tracking-widest leading-none mt-0.5">{item.role}</span>
                    </div>
                 </div>
              </div>

              {/* Interaction Strip Footer */}
              <div className="px-10 py-8 bg-white/5 border-t border-white/5 flex items-center justify-between group-hover:bg-[#d97706]/10 transition-colors">
                 <Link 
                    href="#" 
                    className="text-xs font-black text-white flex items-center gap-2 group/btn tracking-[0.2em] uppercase"
                 >
                    Read Full Tale <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                 </Link>
                 <span className="text-[10px] font-bold text-slate-700 group-hover:text-white/40 transition-colors">{item.readTime}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Global Storyteller Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#d97706]/15 via-[#0d1012] to-[#1e1b4b]/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(217,119,6,0.1),transparent)] flex items-center justify-center grayscale opacity-10">
              <Book className="w-[800px] h-[800px]" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-[#fbbf24] font-black uppercase tracking-[0.5em] mb-4">Engineering Anthropology</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none italic">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#ea580c]">Greatest</span> Scripts Ever Told.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our tales are written by the engineers who lived them. No marketing fluff, just raw technical truth. Join our archive to receive the latest chronicles before the public release.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-12 py-5 bg-[#d97706] text-[#050608] font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl">
                    <Zap className="w-5 h-5" /> Access Full Archive
                 </button>
                 <button className="px-12 py-5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Mic2 className="w-4 h-4" /> Listen to Audio Logs
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
