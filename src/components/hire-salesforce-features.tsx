"use client";

import { Cloud, Cog, Database, PenTool, LayoutTemplate, Briefcase } from "lucide-react";

export function SalesforceFeatures() {
  const capabilities = [
    {
      title: "Custom APEX Development",
      description: "When drag-and-drop logic fails, our master APEX developers step in. We write highly efficient, bulkified code, Custom Controllers, and asynchronous batches respecting strict governor limits.",
      icon: <Cog className="w-8 h-8 text-[#032d60]" />,
      bg: "bg-slate-100",
      border: "border-slate-200"
    },
    {
      title: "Lightning Web Components (LWC)",
      description: "Transform your dated Visualforce pages into lightning-fast, reactive, modern web standards. We build custom LWC architectures that are completely seamless across desktop and the Salesforce mobile app.",
      icon: <LayoutTemplate className="w-8 h-8 text-[#00A1E0]" />,
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "MuleSoft & API Integrations",
      description: "Salesforce shouldn't be a silo. We build unshakeable Middleware pipelines tying your CRM natively into ERPs (SAP/NetSuite), billing engines (Stripe), and HRIS systems (Workday).",
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    },
    {
      title: "Sales & RevOps Cloud",
      description: "Stop leaking pipeline. We configure complex territory modeling, CPQ (Configure, Price, Quote) logic, and specialized forecasting dashboards directly serving your CRO.",
      icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      title: "Marketing & Service Cloud",
      description: "Orchestrate massive, highly personalized customer journeys. We implement Marketing Cloud exact-target routing and configure omnichannel Service Cloud ticketing flows.",
      icon: <Cloud className="w-8 h-8 text-sky-500" />,
      bg: "bg-sky-50",
      border: "border-sky-100"
    },
    {
      title: "Architecture & Admin Support",
      description: "Continuous care for your instance. We provide Certified Administrators to manage roles, profiles, complex flow automation, and maintain strictly clean data hygiene.",
      icon: <PenTool className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  return (
    <section className="bg-white py-32 relative text-slate-900 border-y border-slate-100 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[#00A1E0] font-bold tracking-widest uppercase mb-4 text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Platform Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#032d60] mb-6 tracking-tight">
            Stop Altering Your Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] to-indigo-600">To Fit The Software.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Your CRM should bend to your exact sales process. Our certified developers utilize the full programmatic weight of the Salesforce platform to make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((c, i) => (
             <div 
               key={i} 
               className={`bg-[#fcfcfd] border ${c.border} p-8 rounded-3xl group hover:shadow-[0_20px_40px_rgba(0,161,224,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden cursor-default`}
             >
               <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center mb-6 border border-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-3 text-[#032d60] relative z-10">{c.title}</h3>
               <p className="text-slate-600 text-sm leading-relaxed font-light relative z-10">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
