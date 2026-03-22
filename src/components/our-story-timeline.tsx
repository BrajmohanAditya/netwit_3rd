"use client";

import { CheckCircle, Flag, Globe, Layers, Rocket, Sparkles, TrendingUp, Zap } from "lucide-react";

const milestones = [
  { 
    year: "1999", 
    title: "The Genesis", 
    description: "Founded as a specialized tech consultancy in a single-room office, driven by the mission to simplify complex technical architectures.", 
    tag: "Formation",
    icon: Flag
  },
  { 
    year: "2010", 
    title: "Global Horizon", 
    description: "Expansion into our first international markets. Crossing the boundary of regional services to provide 24/7 global capability centers.", 
    tag: "Expansion",
    icon: Globe
  },
  { 
    year: "2018", 
    title: "The Intelligence Pivot", 
    description: "Launch of our dedicated AI & Machine Learning division. Embedding intelligent automation into every core solution we deliver.", 
    tag: "Innovation",
    icon: Sparkles
  },
  { 
    year: "2024", 
    title: "Citadel of Scale", 
    description: "Attaining a 50+ country presence with over 1500+ expert engineers working on world-class technical blueprints.", 
    tag: "Mastery",
    icon: Rocket
  },
];

export function OurStoryTimeline() {
  return (
    <section id="evolution" className="bg-[#02050b] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Evolutionary Section Header */}
        <div className="text-center mb-24 space-y-6">
           <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 inline-block">The Evolutionary Roadmap</span>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Transforming Since <span className="text-blue-500 underline decoration-blue-500/30">1999.</span></h2>
           <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl mx-auto">Our path is marked by consistent growth, technical audacity, and a relentless focus on client success across the globe.</p>
        </div>

        {/* Vertical Modern Timeline */}
        <div className="relative">
           {/* Center Central Line */}
           <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 hidden md:block"></div>

           <div className="space-y-24">
              {milestones.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                   
                   {/* Timeline Node Icon */}
                   <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0d121b] border border-blue-500/30 flex items-center justify-center z-10 hidden md:flex shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                      <item.icon className="w-6 h-6 text-blue-400" />
                   </div>

                   {/* Content Block */}
                   <div className="flex-1 w-full">
                      <div className={`p-10 bg-[#0d121b] border border-white/5 rounded-[3rem] shadow-2xl hover:border-blue-500/30 transition-all group scale-95 hover:scale-100 duration-500 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                         <span className="text-[4rem] font-black text-white/5 absolute -top-10 -right-4 group-hover:text-blue-500/10 transition-colors italic">{item.year}</span>
                         <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-4">{item.tag}</span>
                         <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
                         <p className="text-slate-400 text-sm leading-relaxed font-light">{item.description}</p>
                         
                         <div className={`flex items-center gap-3 mt-10 pt-8 border-t border-white/5 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                            <div className="flex -space-x-2">
                               {[1,2,3].map(i => (
                                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0d121b] bg-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-500">GCC</div>
                               ))}
                            </div>
                            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Global Partners</span>
                         </div>
                      </div>
                   </div>

                   {/* Empty Space for the other side */}
                   <div className="flex-1 hidden md:block"></div>

                </div>
              ))}
           </div>
        </div>

        {/* Global Impact Summary Footer */}
        <div className="mt-32 p-12 bg-gradient-to-br from-blue-900/20 via-[#0d121b] to-indigo-900/20 border border-white/10 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden backdrop-blur-3xl px-16">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="max-w-xl text-center md:text-left space-y-4">
              <span className="inline-block text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4">Total Social Accountability</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none italic">Scaling Since <span className="text-blue-500">Day Zero.</span></h2>
              <p className="text-slate-400 text-base font-light leading-relaxed">Our history is written in the success lines of over 2000+ global clients. We continue to evolve, iterate, and innovate for the legacy of your business.</p>
           </div>
           
           <div className="flex flex-col gap-4 w-full md:w-auto">
              <button className="px-12 py-5 bg-white text-black font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(255,255,255,0.1)]">
                 <CheckCircle className="w-5 h-5" /> View Current Milestones
              </button>
              <button className="px-12 py-5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                 <Zap className="w-4 h-4" /> Global Desk
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
