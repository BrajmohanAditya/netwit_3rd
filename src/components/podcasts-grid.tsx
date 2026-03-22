"use client";

import { ArrowRight, AudioLines, Clock, Download, Headphones, Heart, MoreVertical, Play, Share2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const episodes = [
  { 
    title: "DevOps Unplugged Ep. 1", 
    description: "The future of DevOps and the role of developer experience in 2024. How we rethink continuous delivery at scale.", 
    tag: "Audio",
    duration: "42:15",
    date: "March 15, 2026",
    category: "DevOps",
    hosts: ["Elena M.", "Michael B."]
  },
  { 
    title: "Cloud Stories Ep. 2", 
    description: "Real-world customer success stories detailing the move from on-prem to cloud-native architectures in fintech.", 
    tag: "Audio",
    duration: "38:45",
    date: "March 12, 2026",
    category: "Cloud",
    hosts: ["Sarah L.", "Elena M."]
  },
  { 
    title: "Tech Talks Ep. 3", 
    description: "A deep dive into AI and machine learning integration patterns for established enterprise software products.", 
    tag: "Audio",
    duration: "55:20",
    date: "March 10, 2026",
    category: "AI",
    hosts: ["David K.", "Sarah L."]
  },
  { 
    title: "Startup Stories Ep. 4", 
    description: "Scaling tips for fast-growth startups. How to maintain development velocity while architecting for absolute scale.", 
    tag: "Audio",
    duration: "32:10",
    date: "March 08, 2026",
    category: "Growth",
    hosts: ["Michael B.", "James H."]
  },
  { 
    title: "Security First Ep. 5", 
    description: "Conversations on cybersecurity insights and building a security-first culture in distributed engineering teams.", 
    tag: "Audio",
    duration: "48:30",
    date: "March 05, 2026",
    category: "Security",
    hosts: ["Sarah L.", "David K."]
  },
  { 
    title: "Innovation Weekly Ep. 6", 
    description: "Discussing the latest tech trends and the impact of quantum computing on modern infrastructure encryption.", 
    tag: "Audio",
    duration: "25:15",
    date: "March 01, 2026",
    category: "Trends",
    hosts: ["James H.", "Michael B."]
  },
];

export function PodcastsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "DevOps", "Cloud", "AI", "Security", "Trends"];

  const filteredItems = activeFilter === "All" 
    ? episodes 
    : episodes.filter(item => item.category === activeFilter);

  return (
    <section id="episodes" className="bg-[#0a0510] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Genre/Category Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                 <button
                    key={c}
                    onClick={() => setActiveFilter(c)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeFilter === c 
                        ? "bg-[#7e22ce] text-white border-[#7e22ce] shadow-[0_0_20px_rgba(126,34,206,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {c}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0510] bg-slate-800 flex items-center justify-center text-[8px] font-bold">U{i}</div>)}
              </div>
              <span className="text-[10px] text-[#C084FC] font-bold uppercase tracking-widest">+12k Following</span>
           </div>
        </div>

        {/* Podcast Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#110b1a] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:border-[#7e22ce]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              {/* Interaction Strip Top */}
              <div className="px-8 py-6 bg-white/5 flex items-center justify-between border-b border-white/5">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <AudioLines className="w-4 h-4 text-[#7e22ce]" /> Waveform // 44.1kHz
                 </div>
                 <div className="flex gap-4">
                    <Heart className="w-4 h-4 text-slate-700 hover:text-rose-500 cursor-pointer transition-colors" />
                    <Share2 className="w-4 h-4 text-slate-700 hover:text-white cursor-pointer transition-colors" />
                 </div>
              </div>

              {/* Episode Details */}
              <div className="p-8 pb-4 flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                    <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-[#C084FC]">
                       {item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 uppercase tracking-widest"><Clock className="w-3.5 h-3.5" /> {item.duration}</span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-purple-50 transition-colors italic">
                    {item.title}
                 </h3>
                 <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 flex-1">
                    {item.description}
                 </p>

                 {/* Simulated Progress Bar */}
                 <div className="mt-auto h-1 w-full bg-white/5 rounded-full overflow-hidden mb-6 group/progress relative">
                    <div className="h-full bg-gradient-to-r from-[#7e22ce] to-[#db2777] w-[45%] rounded-full group-hover/progress:w-[60%] transition-all duration-1000"></div>
                 </div>
              </div>

              {/* Footer Attribution Row */}
              <div className="px-8 py-6 bg-white/5 border-t border-white/5 flex items-center justify-between group-hover:bg-[#7e22ce]/10 transition-colors duration-500">
                 <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                       {item.hosts.map((h, i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-[#110b1a] bg-[#7e22ce] flex items-center justify-center font-black text-[8px] text-white">
                             {h.split(' ').map(n=>n[0]).join('')}
                          </div>
                       ))}
                    </div>
                    <div className="text-[10px] space-y-0.5">
                       <span className="block text-white font-bold opacity-80">{item.hosts.join(' & ')}</span>
                    </div>
                 </div>
                 <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-[#C084FC] hover:shadow-[0_0_20px_rgba(192,132,252,0.5)] transition-all">
                    <Play className="w-5 h-5 fill-slate-900 translate-x-0.5" />
                 </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Broadcast Abstract Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#7e22ce]/10 via-[#0a0510] to-[#db2777]/10 border border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden backdrop-blur-3xl">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(126,34,206,0.1),transparent)] pointer-events-none"></div>
           
           <div className="max-w-xl text-center md:text-left space-y-4 relative z-10">
              <span className="inline-block text-[10px] text-[#C084FC] font-bold uppercase tracking-[0.4em]">Podcast Network</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">The <span className="text-[#db2777]">Pulse</span> of Engineering.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Experience our podcasts on your favorite platforms. From technical teardowns to leadership insights, we're broadcasting the future of global engineering.</p>
           </div>
           
           <div className="flex flex-wrap gap-4 items-center justify-center w-full md:w-auto relative z-10">
              <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl">
                 <Headphones className="w-4 h-4" /> Listen on Spotify
              </button>
              <button className="w-16 h-16 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-all">
                 <Download className="w-6 h-6" />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
