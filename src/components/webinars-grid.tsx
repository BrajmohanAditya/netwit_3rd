"use client";

import { Play, Calendar, Users, Clock, ArrowRight, Share2, MoreVertical, Wifi } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const webinarItems = [
  { 
    title: "DevOps Best Practices Workshop", 
    description: "A live, deep-dive session exploring the absolute latest in continuous integration and automated deployment architectures for 2024.", 
    tag: "Live",
    speaker: "Elena M.",
    date: "March 25, 2026",
    duration: "45 min",
    attendees: "1.2k+"
  },
  { 
    title: "Cloud Migration Strategies", 
    description: "Step-by-step technical guide for migrating mission-critical legacy enterprise systems to AWS/Azure with zero operational downtime.", 
    tag: "Recorded",
    speaker: "David K.",
    date: "March 20, 2026",
    duration: "60 min",
    attendees: "3.5k+"
  },
  { 
    title: "AI in Enterprise", 
    description: "An expert panel discussion on the practical implementation of LLMs and generative AI inside Fortune 500 business environments.", 
    tag: "Recorded",
    speaker: "Sarah L.",
    date: "March 18, 2026",
    duration: "90 min",
    attendees: "2.8k+"
  },
  { 
    title: "Security in the Cloud", 
    description: "Best practices for maintaining a zero-trust architecture in shared cloud environments while meeting global regulatory requirements.", 
    tag: "Live",
    speaker: "Josh T.",
    date: "March 15, 2026",
    duration: "45 min",
    attendees: "800+"
  },
  { 
    title: "Kubernetes Deep Dive", 
    description: "Technical workshop focusing on cost-effective resource allocation and automated scaling in massive multi-cluster environments.", 
    tag: "Recorded",
    speaker: "Michael B.",
    date: "March 12, 2026",
    duration: "120 min",
    attendees: "5k+"
  },
  { 
    title: "DevOps Transformation", 
    description: "Real-world success stories detailing how organizations transitioned from silos to high-performance engineering culture via DevOps.", 
    tag: "Live",
    speaker: "Jane D.",
    date: "March 10, 2026",
    duration: "60 min",
    attendees: "1.5k+"
  },
];

export function WebinarsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Live", "Recorded"];

  const filteredItems = activeFilter === "All" 
    ? webinarItems 
    : webinarItems.filter(item => item.tag === activeFilter);

  return (
    <section id="webinars" className="bg-[#050814] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-3">
              {filters.map((f) => (
                 <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-8 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeFilter === f 
                        ? "bg-[#F59E0B] text-[#050814] border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {f}
                 </button>
              ))}
           </div>
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center gap-2">
                 <Wifi className="w-4 h-4 text-emerald-500" /> Professional Broadcast Only
              </span>
           </div>
        </div>

        {/* Webinar Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f1423] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:border-[#F59E0B]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              {/* Thumbnail Abstract */}
              <div className="h-48 w-full bg-slate-900/50 relative overflow-hidden border-b border-white/5">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/30 to-[#050814] transition-all duration-700 group-hover:scale-110"></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#050814]/40 backdrop-blur-sm">
                    <div className="w-14 h-14 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-2xl">
                       <Play className="w-6 h-6 fill-[#050814] text-[#050814] translate-x-0.5" />
                    </div>
                 </div>
                 
                 {/* Live/Recorded Badge */}
                 <div className="absolute top-6 left-6 flex gap-2">
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      item.tag === "Live" 
                        ? "bg-rose-500 text-white animate-pulse" 
                        : "bg-white/10 text-white/50 backdrop-blur-md"
                    }`}>
                       {item.tag === "Live" && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                       {item.tag}
                    </span>
                 </div>
                 <div className="absolute bottom-6 right-6">
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                       <Share2 className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-4 flex-1">
                 <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {item.duration}</span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white group-hover:text-amber-50 transition-colors leading-tight">
                    {item.title}
                 </h3>
                 <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                    {item.description}
                 </p>
                 
                 <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <div className="w-8 h-8 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] font-black text-[10px]">
                       {item.speaker.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div className="text-[10px] space-y-0.5">
                       <span className="block text-white font-bold opacity-80">{item.speaker}</span>
                       <span className="block text-slate-600 font-medium flex items-center gap-1.5">
                          <Users className="w-3 h-3" /> {item.attendees} Professionals
                       </span>
                    </div>
                 </div>
              </div>

              {/* Footer Button Card */}
              <div className="px-8 py-6 bg-white/5 flex items-center justify-between group-hover:bg-[#F59E0B]/10 transition-colors duration-500">
                 <Link 
                    href="#" 
                    className="text-xs font-bold text-white flex items-center gap-2 group/btn tracking-widest uppercase hover:text-[#F59E0B] transition-all"
                 >
                    {item.tag === "Live" ? "Reserve My Spot" : "Watch Recording"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                 </Link>
                 <MoreVertical className="w-4 h-4 text-slate-700 hover:text-white cursor-pointer" />
              </div>

            </div>
          ))}
        </div>

        {/* Global Webinar Series Row */}
        <div className="mt-24 p-12 bg-gradient-to-r from-[#1E3A8A]/10 to-[#1E3A8A]/5 border border-white/10 rounded-[3rem] backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between gap-12 group">
           <div className="max-w-xl text-center md:text-left">
              <span className="inline-block text-[10px] text-[#F59E0B] font-bold uppercase tracking-[0.3em] mb-4">Enterprise Education</span>
              <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">The <span className="text-[#F59E0B]">Strategic</span> Masterclass Series.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Standardize your engineering knowledge. We offer private, custom-curated webinars for corporate teams of 50+ members. Get in touch for an organizational license.</p>
           </div>
           <div className="flex flex-col gap-4">
              <button className="px-10 py-5 bg-[#F59E0B] text-[#050814] font-bold rounded-full hover:scale-105 transition-transform shadow-2xl">
                 Inquire Corporate Access
              </button>
              <button className="px-10 py-5 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all text-sm">
                 Download Series Catalog
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
