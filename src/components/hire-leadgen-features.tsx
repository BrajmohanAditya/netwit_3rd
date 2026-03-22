"use client";

import { Bot, MailOpen, Database, BarChart4, Filter, UserPlus } from "lucide-react";

export function LeadGenFeatures() {
  const capabilities = [
    {
      title: "AI-Powered Prospecting",
      description: "We don't buy stale lists. Our specialists use proprietary AI scrapers and intent-data tools like Apollo and ZoomInfo to build highly targeted ICP databases from scratch.",
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Multi-Channel Sequences",
      description: "Touchpoints across LinkedIn, cold email, and dialers are orchestrated perfectly to ensure your brand appears omnipresent to top-tier accounts.",
      icon: <MailOpen className="w-8 h-8 text-orange-500" />,
      bg: "bg-orange-50"
    },
    {
      title: "CRM Architectural Hygiene",
      description: "HubSpot and Salesforce are only as good as the data inside. We implement strict data-cleaning rules, ensuring no duplicates and perfectly mapped properties.",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      bg: "bg-emerald-50"
    },
    {
      title: "Dynamic Lead Scoring",
      description: "Stop guessing who is ready to buy. We configure algorithmic lead scoring so your Account Executives only speak to hyper-qualified prospects.",
      icon: <Filter className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50"
    },
    {
      title: "A/B Message Testing",
      description: "We continually pit messaging frameworks against each other. Our copywriters find the exact pain-point triggers that generate high-ticket conversions.",
      icon: <BarChart4 className="w-8 h-8 text-rose-500" />,
      bg: "bg-rose-50"
    },
    {
      title: "Inbound Capture Optimization",
      description: "We optimize your web forms, implement intelligent chatbots, and create gated-content workflows to capture and instantly qualify organic traffic.",
      icon: <UserPlus className="w-8 h-8 text-teal-500" />,
      bg: "bg-teal-50"
    }
  ];

  return (
    <section className="bg-white py-32 relative border-y border-slate-100 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-orange-600 font-bold tracking-widest uppercase mb-4 text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
            Full-Funnel Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            The Anatomy of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Sales Machine</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Our talent operates at the bleeding-edge of B2B growth. From setting up complex DNS configurations to ensure email deliverability to writing cold copy that actually gets replies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((c, i) => (
             <div 
               key={i} 
               className="bg-[#fcfcfd] border border-slate-200 p-8 rounded-3xl group hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 relative overflow-hidden"
             >
               <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-3 text-slate-800 relative z-10">{c.title}</h3>
               <p className="text-slate-600 text-sm leading-relaxed font-light relative z-10">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
