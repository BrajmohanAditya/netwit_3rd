"use client";

import { ArrowRight, BarChart3, Building2, Globe, Heart, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const caseStudies = [
  { 
    title: "How We Helped a Startup Scale to 1M Users", 
    description: "Cloud infrastructure case study focusing on horizontal scaling and database optimization for rapid global growth.", 
    tag: "Featured",
    metric: "1M+ Users",
    metricLabel: "Active Traffic",
    icon: <Globe className="w-5 h-5" />,
    color: "emerald"
  },
  { 
    title: "Enterprise DevOps Transformation", 
    description: "A Fortune 500 company's journey from manual legacy deployments to a fully automated CI/CD pipeline meeting strict compliance.", 
    tag: "Enterprise",
    metric: "40% Time Savings",
    metricLabel: "Dev Cycle",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "blue"
  },
  { 
    title: "Mobile App Success Story", 
    description: "Building a scalable fintech platform with banking-grade security and real-time transaction processing using React Native.", 
    tag: "Fintech",
    metric: "$2.5B Processing",
    metricLabel: "Annual Volume",
    icon: <Zap className="w-5 h-5" />,
    color: "amber"
  },
  { 
    title: "Healthcare Compliance Made Easy", 
    description: "Implementing HIPAA-compliant cloud solutions with automated audit logging and granular access controls for a national health network.", 
    tag: "Healthcare",
    metric: "100% HIPAA",
    metricLabel: "Audit Pass Rate",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "emerald"
  },
  { 
    title: "Retail Transformation with AI", 
    description: "Modernizing a global e-commerce platform with AI-driven inventory prediction and real-time personalized shopping experiences.", 
    tag: "Retail",
    metric: "+25% Revenue",
    metricLabel: "Organic Increase",
    icon: <Building2 className="w-5 h-5" />,
    color: "rose"
  },
  { 
    title: "Manufacturing IoT Implementation", 
    description: "Smart factory solutions utilizing edge computing and real-time sensor data to optimize assembly line efficiency and reduce downtime.", 
    tag: "Manufacturing",
    metric: "0.01% Error Rate",
    metricLabel: "Precision Level",
    icon: <Zap className="w-5 h-5" />,
    color: "indigo"
  },
];

export function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Featured", "Enterprise", "Fintech", "Healthcare", "Retail", "Manufacturing"];

  const filteredItems = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(item => item.tag === activeFilter);

  return (
    <section id="cases" className="bg-[#050608] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                 <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                      activeFilter === f 
                        ? "bg-[#10B981] text-[#050608] border-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.3)]" 
                        : "bg-white/5 text-slate-400 border-white/10 hover:border-white/20"
                    }`}
                 >
                    {f}
                 </button>
              ))}
           </div>
           <div className="text-right">
              <span className="block text-xl font-bold text-white tracking-tight">Showcasing {caseStudies.length} Transformations</span>
              <span className="text-xs text-[#10B981] font-medium tracking-widest uppercase">Verified for 2024-2025</span>
           </div>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f1115] border border-white/5 rounded-3xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {/* Card Header (Metric focused) */}
              <div className="p-8 pb-4">
                 <div className="flex justify-between items-center mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-[#10B981]/10 group-hover:border-[#10B981]/30 group-hover:text-[#10B981] transition-all duration-500`}>
                       {item.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 group-hover:text-[#10B981] transition-colors">{item.tag}</span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-emerald-50 transition-colors">
                    {item.title}
                 </h3>
                 <p className="text-sm text-slate-400 font-light leading-relaxed flex-1">
                    {item.description}
                 </p>
              </div>

              {/* Card Body (Data Visualization) */}
              <div className="p-8 pt-4 flex-1 flex flex-col justify-end">
                 <div className="bg-[#050608] border border-white/5 p-4 rounded-2xl relative overflow-hidden group-hover:bg-[#10B981]/5 group-hover:border-[#10B981]/20 transition-all duration-500">
                    <div className="relative z-10">
                       <span className="block text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-1">{item.metricLabel}</span>
                       <span className="text-2xl font-black text-white tracking-tighter">{item.metric}</span>
                    </div>
                    {/* Abstract Mini Graph Background */}
                    <div className="absolute right-4 bottom-4 w-16 h-8 flex items-end gap-1 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700">
                       <div className="w-2 bg-[#10B981] h-[30%] rounded-t-sm"></div>
                       <div className="w-2 bg-[#3b82f6] h-[60%] rounded-t-sm"></div>
                       <div className="w-2 bg-[#10B981] h-[45%] rounded-t-sm"></div>
                       <div className="w-2 bg-[#3b82f6] h-[90%] rounded-t-sm shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    </div>
                 </div>
              </div>

              {/* Card Footer */}
              <div className="px-8 py-6 bg-white/5 border-t border-white/5 flex items-center justify-between group-hover:bg-[#10B981]/10 transition-colors duration-500">
                 <Link 
                    href={`#`} 
                    className="text-xs font-bold text-white flex items-center gap-2 group/btn tracking-widest uppercase hover:text-[#10B981] transition-all"
                 >
                    Read Technical Spec 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                 </Link>
                 <Heart className="w-4 h-4 text-slate-600 hover:text-rose-500 cursor-pointer transition-colors" />
              </div>

            </div>
          ))}
        </div>

        {/* Load More Abstract */}
        <div className="mt-20 flex justify-center">
           <button className="group relative px-10 py-5 font-bold tracking-[0.2em] text-white uppercase transition-all duration-300">
              <span className="relative z-10 transition-transform group-hover:scale-110 block">Request Archive Access</span>
              <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-[#10B981]/50 group-hover:scale-105 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-white/5 rounded-full blur-xl scale-90 group-hover:bg-[#10B981]/5 transition-all duration-500"></div>
           </button>
        </div>

      </div>
    </section>
  );
}
