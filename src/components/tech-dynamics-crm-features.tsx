"use client";

import { BarChart3, Users, Workflow, MessageSquare, Briefcase, Bot } from "lucide-react";

export function DynamicsCrmFeatures() {
  const capabilities = [
    {
      title: "Omnichannel Sales Hub",
      description: "Arm your sales force. Dynamics 365 intrinsically tracks emails in Outlook, records calls via Teams, and instantly logs LinkedIn messages natively into the CRM pipeline without manual data entry.",
      icon: <Briefcase className="w-8 h-8 text-[#00A4EF]" />,
      bg: "bg-[#00A4EF]/10",
      border: "border-[#00A4EF]/20"
    },
    {
      title: "Power Automate (Flow)",
      description: "Completely eradicate repetitive administrative tasks. We hook Dynamics 365 into Power Automate, allowing zero-code logic branches to automatically route sales leads across global time zones.",
      icon: <Workflow className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Copilot AI Integration",
      description: "Generative AI natively injected into your CRM. Copilot automatically summarizes 40-email-deep Outlook threads, writes professional follow-up proposals, and flags pipeline deals most likely to churn.",
      icon: <Bot className="w-8 h-8 text-[#5C2D91]" />,
      bg: "bg-[#5C2D91]/10",
      border: "border-[#5C2D91]/20"
    },
    {
      title: "Customer Service Voice",
      description: "Transform reactive support into predictable operations. D365 natively unifies help desk ticketing with live global VoIP transcription, immediately assigning priority cases to specialized service agents.",
      icon: <MessageSquare className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Dataverse Architecture",
      description: "Stop relying on fragile APIs pulling from isolated SaaS apps. Dataverse stores your CRM entities in an indestructible Azure-bound schema that natively integrates with your corporate ERP structures.",
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Power BI Embedded",
      description: "Spreadsheets lie; data does not. We embed hyper-vibrant, deeply relational Power BI dashboards directly into your CRM homepage, granting extreme executive visibility into real-time global revenue models.",
      icon: <BarChart3 className="w-8 h-8 text-amber-500" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="bg-[#050b14] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#015CBB]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#00A4EF] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#00A4EF]/10 border border-[#00A4EF]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The Microsoft Engine
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Consolidate corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#015CBB]">Chaos.</span>
          </h2>
          <p className="text-blue-50/60 text-lg max-w-2xl leading-relaxed font-light">
            When organizations outgrow simple CRMs, revenue begins to slip through the cracks of disconnected systems. Dynamics 365 enforces a rigid, unified, highly automated process across Sales, Service, and Marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#081220]/50 border border-[#14233a] p-8 rounded-3xl group hover:bg-[#0c182a] hover:border-[#015CBB]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#00A4EF] to-[#015CBB] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-semibold mb-4 text-white tracking-tight relative z-10">{c.title}</h3>
               <p className="text-blue-50/50 text-sm leading-relaxed font-light relative z-10 group-hover:text-blue-50/80 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
