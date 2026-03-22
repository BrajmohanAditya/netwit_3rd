"use client";

import { ArrowRight, CheckCircle2, Clock, Cpu, Filter, HelpCircle, MessageSquare, Search, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const qaItems = [
  { 
    title: "DevOps Implementation FAQ", 
    description: "How to transition from manual builds to a fully automated CI/CD pipeline without slowing down development cycles.", 
    expert: "Elena M. - Principal DevOps",
    category: "DevOps",
    tag: "Popular",
    time: "4h Resolution"
  },
  { 
    title: "Cloud Security Q&A", 
    description: "Defining role-based access control and secrets management in multi-cloud environments for high-compliance industries.", 
    expert: "Sarah L. - Security Lead",
    category: "Security",
    tag: "Security",
    time: "2h Resolution"
  },
  { 
    title: "AI Integration FAQ", 
    description: "Step-by-step guidance on fine-tuning LLMs on private enterprise datasets while maintaining data privacy using VPC isolation.", 
    expert: "David K. - AI Architect",
    category: "AI",
    tag: "AI",
    time: "8h Resolution"
  },
  { 
    title: "Kubernetes Troubleshooting", 
    description: "Diagnosing resource starvation and node pressure issues in production GKE clusters with automated horizontal pod autoscaling.", 
    expert: "Michael B. - K8s Specialist",
    category: "Technical",
    tag: "Technical",
    time: "1h Resolution"
  },
  { 
    title: "Cost Optimization Tips", 
    description: "Strategies for significant annual cloud savings using spot instance fleets and automated scheduling for non-production environments.", 
    expert: "James H. - FinOps Manager",
    category: "Popular",
    tag: "Popular",
    time: "12h Resolution"
  },
  { 
    title: "Compliance Questions", 
    description: "How to navigate the complex landscape of HIPAA, SOC2, and GDPR as a fast-growth tech startup scaling to Europe.", 
    expert: "Jane D. - Compliance Officer",
    category: "Compliance",
    tag: "Compliance",
    time: "24h Resolution"
  },
];

export function ExpertQaGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "DevOps", "Security", "AI", "Technical", "Compliance", "Popular"];

  const filteredItems = activeCategory === "All" 
    ? qaItems 
    : qaItems.filter(item => item.category === activeCategory || item.tag === activeCategory);

  return (
    <section id="qa-feed" className="bg-[#050a10] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Category Navigation & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                 <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeCategory === c 
                        ? "bg-[#06b6d4] text-[#050a10] border-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {c}
                 </button>
              ))}
           </div>
           
           <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#06b6d4] transition-colors" />
              <input 
                 type="text" 
                 placeholder="Search architectural solutions..." 
                 className="w-full bg-[#0d141c] border border-white/5 rounded-full py-4 pl-14 pr-6 text-sm text-slate-300 focus:outline-none focus:border-[#06b6d4]/30 focus:bg-white/[0.08] transition-all placeholder:text-slate-600 shadow-2xl"
              />
           </div>
        </div>

        {/* Technical Dialogue Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d141e] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:border-[#06b6d4]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              {/* Question Space */}
              <div className="p-10 pb-4 flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-[#06b6d4] bg-[#06b6d4]/10 px-4 py-1 rounded-full border border-[#06b6d4]/10">
                       {item.category === "AI" ? <Zap className="w-3.5 h-3.5" /> : item.category === "Security" ? <ShieldCheck className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                       {item.category}
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]"><Clock className="w-3.5 h-3.5" /> {item.time}</span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-6 leading-snug group-hover:text-cyan-50 transition-colors flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-[#06b6d4] flex-shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                    {item.title}
                 </h3>
                 <p className="text-[13px] text-slate-400 font-light leading-relaxed mb-8 flex-1 pl-10 italic">
                    "{item.description}"
                 </p>
              </div>

              {/* Expert Attribution Row */}
              <div className="p-10 pt-4 mt-auto">
                 <div className="bg-[#050a10]/50 border border-white/5 rounded-2xl p-4 flex items-center justify-between group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/20 transition-all duration-500">
                    <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-[#84cc16]" />
                       <span className="text-[10px] font-black text-white/50 group-hover:text-white transition-colors uppercase tracking-widest">{item.expert}</span>
                    </div>
                    <Link href="#" className="w-8 h-8 rounded-full border border-white/10 text-slate-500 flex items-center justify-center hover:bg-[#06b6d4] hover:text-[#050a10] transition-all">
                       <ArrowRight className="w-4 h-4" />
                    </Link>
                 </div>
              </div>

              {/* Interaction Strip */}
              <div className="px-10 py-4 bg-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 group-hover:text-[#06b6d4] transition-colors">
                 <span>Collaborate</span>
                 <MessageSquare className="w-3.5 h-3.5" />
              </div>

            </div>
          ))}
        </div>

        {/* Global Access Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-r from-cyan-900/10 via-[#0d141e] to-lime-900/10 border border-white/10 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden backdrop-blur-3xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.1),transparent)] pointer-events-none"></div>
           
           <div className="max-w-xl text-center md:text-left space-y-4 relative z-10">
              <span className="inline-block text-[10px] text-[#06b6d4] font-bold uppercase tracking-[0.4em]">Intelligence Exchange</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Access the <span className="text-[#84cc16]">Engineers</span> Behind the Cloud.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Can't find your specific architectural challenge? Our technical desk is open for direct inquiries. Submit your infrastructure brief for a public or private resolution.</p>
           </div>
           
           <div className="flex flex-col gap-4 w-full md:w-auto relative z-10">
              <button className="px-10 py-5 bg-[#06b6d4] text-[#050a0f] font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl">
                 Submit New Inquiry
              </button>
              <button className="px-10 py-5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                 Institutional Advisory
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
