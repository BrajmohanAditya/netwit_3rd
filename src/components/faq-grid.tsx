"use client";

import { ArrowRight, ChevronDown, ChevronUp, Globe, HelpCircle, Layout, LifeBuoy, MessageSquare, Search, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqItems = [
  { 
    title: "What is DevOps?", 
    description: "DevOps is an organizational culture and technical methodology that combines development and operations to accelerate the delivery of high-quality software through automation and continuous collaboration.", 
    tag: "Popular",
    category: "General"
  },
  { 
    title: "How long does implementation take?", 
    description: "TIMELINES VARY BY COMPLEXITY: Typically, an initial DevOps maturity assessment and implementation roadmap are delivered within 4-6 weeks, with full-scale automation phasing occurring over 3-6 months.", 
    tag: "Popular",
    category: "Timeline"
  },
  { 
    title: "What are your pricing plans?", 
    description: "We offer tailored engagement models including project-based fixed costs, managed service subscriptions, and flexible 'Team-as-a-Service' hourly structures based on your technical volume and duration.", 
    tag: "Popular",
    category: "Pricing"
  },
  { 
    title: "Do you offer support?", 
    description: "YES: Our global support desks provide 24/7/365 coverage with tiered SLA agreements ensuring response times as fast as 15 minutes for critical infrastructure events.", 
    tag: "Service",
    category: "Operations"
  },
  { 
    title: "What industries do you serve?", 
    description: "We serve high-compliance and high-scale technical sectors including Fintech, Healthcare (HIPAA), SaaS, E-commerce, and Logistics across global markets.", 
    tag: "General",
    category: "Verticals"
  },
  { 
    title: "How do I get started?", 
    description: "Initiating a project begins with a discovery session. Simply request a strategic consultation, and our architects will reach out within 24 hours to begin your technical assessment.", 
    tag: "Popular",
    category: "Onboarding"
  },
];

export function FaqGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const categories = ["All", "General", "Timeline", "Pricing", "Operations", "Verticals", "Onboarding"];

  const filteredItems = activeCategory === "All" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#05060b] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Support Category Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                 <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeCategory === c 
                        ? "bg-[#6366f1] text-white border-[#6366f1] shadow-[0_0_20px_rgba(99,102,241,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {c}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full border border-white/5 flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-emerald-500" /> Resolution Desk
              </span>
           </div>
        </div>

        {/* FAQ Accordion System */}
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className={`group bg-[#0d0f17] border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                expandedIndex === index ? "border-[#6366f1]/50 shadow-[0_20px_60px_rgba(0,0,0,0.4)]" : "border-white/5 hover:border-white/10 shadow-xl"
              }`}
            >
              <button 
                onClick={() => toggleExpand(index)}
                className="w-full text-left p-10 flex items-center justify-between group-hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-6">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                     expandedIndex === index ? "bg-[#6366f1] text-white" : "bg-white/5 text-slate-600"
                   }`}>
                      <HelpCircle className="w-6 h-6" />
                   </div>
                   <div>
                      <span className="text-[10px] font-bold text-[#6366f1]/60 uppercase tracking-widest mb-1 block">{item.category} Query</span>
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight">{item.title}</h3>
                   </div>
                </div>
                <div className={`transition-transform duration-500 ${expandedIndex === index ? "rotate-180 text-[#6366f1]" : "text-slate-700"}`}>
                   <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-10 pb-10 pt-2 border-t border-white/5 mx-10 mt-2">
                   <div className="pt-8 text-slate-400 text-lg leading-relaxed font-light border-l border-[#6366f1]/20 pl-8 group-hover:border-[#6366f1] transition-colors">
                      {item.description}
                   </div>
                   
                   <div className="mt-10 flex flex-wrap items-center gap-8">
                      <div className="flex items-center gap-2">
                         <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Was this helpful?</span>
                         <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white/5 rounded-md hover:bg-emerald-500/10 hover:text-emerald-500 text-[10px] font-bold transition-all">YES</button>
                            <button className="px-3 py-1 bg-white/5 rounded-md hover:bg-rose-500/10 hover:text-rose-500 text-[10px] font-bold transition-all">NO</button>
                         </div>
                      </div>
                      <div className="h-4 w-px bg-white/10 hidden md:block"></div>
                      <Link href="#" className="flex items-center gap-2 text-[10px] font-black text-indigo-400 uppercase tracking-widest group/link hover:text-indigo-300">
                         Still curious? Contact Hub <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Support Call Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#1e1b4b] via-[#0d0f17] to-slate-900 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent)] flex items-center justify-center grayscale opacity-10">
              <MessageSquare className="w-[800px] h-[800px]" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-indigo-500 font-bold uppercase tracking-[0.4em] mb-4">Dedicated Technical Support</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#6366f1]">Direct</span> Resolution?</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our support architects are on standby across all global time zones. If your question remains unanswered, reach out for a 1-on-1 discovery session.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-12 py-5 bg-[#6366f1] text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(99,102,241,0.3)]">
                    <Zap className="w-5 h-5" /> Request Live Support
                 </button>
                 <button className="px-12 py-5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Globe className="w-4 h-4" /> View Global Locations
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
