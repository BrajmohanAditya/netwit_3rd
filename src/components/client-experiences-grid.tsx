"use client";

import { Quote, Star, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const experiences = [
  { 
    title: "Exceptional DevOps Support", 
    description: "Their team integrated with ours perfectly. We scaled our SaaS infrastructure by 300% without a single hour of downtime. Truly exceptional partners.", 
    author: "CTO, SaaS Industry",
    rating: 5,
    tag: "5 Stars",
    initials: "MS"
  },
  { 
    title: "Transformed Our Infrastructure", 
    description: "The transition to a fully automated pipeline was seamless. Our development velocity increased by 40% in the first quarter alone. Highly professional.", 
    author: "VP Engineering, Healthcare",
    rating: 5,
    tag: "5 Stars",
    initials: "AB"
  },
  { 
    title: "Best Team We've Worked With", 
    description: "Having worked with many outsourcing partners, Netsmartz stands out for their deep technical knowledge and clear communication. They own the results.", 
    author: "Director of Product, Fintech",
    rating: 5,
    tag: "Recommended",
    initials: "RK"
  },
  { 
    title: "Outstanding Results", 
    description: "We needed specialists who could handle complex AI integrations on a tight schedule. They delivered early and with better performance than expected.", 
    author: "Founder, Retail Tech",
    rating: 5,
    tag: "5 Stars",
    initials: "LT"
  },
  { 
    title: "Professional & Reliable", 
    description: "Reliability is key for our logistics network. Netsmartz provides round-the-clock support and proactive monitoring that keeps us online during peak seasons.", 
    author: "Operations Head, Logistics",
    rating: 5,
    tag: "Recommended",
    initials: "JV"
  },
  { 
    title: "Highly Recommend", 
    description: "Their commitment to security and compliance was evident from day one. They didn't just build the solution; they ensured it was future-proof and robust.", 
    author: "Principal Architect, Education",
    rating: 5,
    tag: "5 Stars",
    initials: "CP"
  },
];

export function ClientExperiencesGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "5 Stars", "Recommended"];

  const filteredItems = activeFilter === "All" 
    ? experiences 
    : experiences.filter(item => item.tag === activeFilter);

  return (
    <section id="testimonials" className="bg-[#050810] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The <span className="text-[#818CF8]">Expert</span> Sentiment.</h2>
              <p className="text-slate-400 font-light text-lg">Detailed reviews from industry leaders who have experienced the Netsmartz difference. Filter by rating or recommendation to explore our reputation.</p>
           </div>
           <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
              {filters.map((f) => (
                 <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      activeFilter === f 
                        ? "bg-[#4F46E5] text-white shadow-lg" 
                        : "text-slate-400 hover:text-white"
                    }`}
                 >
                    {f}
                 </button>
              ))}
           </div>
        </div>

        {/* Testimonial Masonry-like Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f111a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col h-full hover:border-[#4F46E5]/40 transition-all duration-500 hover:-translate-y-2 relative shadow-xl overflow-hidden"
            >
              <div className="absolute top-6 right-8 text-[#4F46E5]/10 group-hover:text-[#4F46E5]/20 transition-colors">
                 <Quote className="w-16 h-16 rotate-180" />
              </div>

              {/* Rating & Tag */}
              <div className="flex justify-between items-center mb-8 relative z-10">
                 <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                       <Star key={i} className={`w-3 h-3 ${i <= item.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-700"}`} />
                    ))}
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#818CF8]/80">{item.tag}</span>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                 <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#818CF8] transition-colors">{item.title}</h3>
                 <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 italic">
                   "{item.description}"
                 </p>
              </div>

              {/* Author */}
              <div className="pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#3B82F6] flex items-center justify-center font-bold text-xs text-white uppercase tracking-tighter">
                       {item.initials}
                    </div>
                    <div>
                       <span className="block text-xs font-bold text-white uppercase tracking-wider">{item.author}</span>
                       <span className="block text-[10px] text-slate-500 font-medium">Verified Client</span>
                    </div>
                 </div>
                 <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                 </button>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/0 via-[#4F46E5]/0 to-[#4F46E5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Abstract Row */}
        <div className="mt-20 flex flex-col items-center">
           <div className="max-w-4xl w-full bg-gradient-to-r from-[#1E3A8A]/10 via-[#4F46E5]/10 to-[#1E3A8A]/10 backdrop-blur-3xl border border-[#4F46E5]/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div>
                 <span className="text-[10px] text-[#818CF8] font-bold uppercase tracking-[0.3em] mb-2 block">Enterprise Partnerships</span>
                 <h4 className="text-2xl font-bold text-white">Join our circle of successful partners.</h4>
              </div>
              <button className="px-10 py-4 bg-white text-[#050810] font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 group/btn whitespace-nowrap">
                 Become a Client <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
