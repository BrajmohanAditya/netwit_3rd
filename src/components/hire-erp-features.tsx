"use client";

import { Cloud, DatabaseBackup, Lock, BarChart3, BoxSelect, Database } from "lucide-react";

export function ErpFeatures() {
  const capabilities = [
    {
      title: "Salesforce Architectures",
      description: "Hire certified Salesforce Architects to develop custom APEX code, Lightning Web Components (LWC), and configure complex Revenue Cloud and CPQ workflows.",
      icon: <Cloud className="w-8 h-8 text-sky-400" />
    },
    {
      title: "SAP Implementation",
      description: "Deploy robust SAP S/4HANA systems. Our specialists handle ABAP programming, Fiori UI integrations, and migrate massive on-premise footprints directly to the cloud.",
      icon: <Database className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Microsoft Dynamics 365",
      description: "Integrate your entire Microsoft suite seamlessly. Our deeply vetted Dynamics engineers connect Power BI, Teams, and CRM data into one cohesive ecosystem.",
      icon: <BoxSelect className="w-8 h-8 text-indigo-400" />
    },
    {
      title: "Zero-Downtime Migration",
      description: "Moving from a legacy CRM requires absolute surgical precision. Our data architects map custom fields natively, ensuring zero data loss and uninterrupted business continuity.",
      icon: <DatabaseBackup className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Third-Party API Integrations",
      description: "Your ERP doesn't exist in a vacuum. We build unshakeable Middleware (MuleSoft, Dell Boomi) integrating Stripe, Shopify, Workday, and internal proprietary databases.",
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Enterprise Role Security",
      description: "We architect impenetrable identity and access management (IAM) schemas. Restrict access granularly down to the individual field level based on territory and title.",
      icon: <Lock className="w-8 h-8 text-rose-400" />
    }
  ];

  return (
    <section className="bg-[#07101d] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-blue-900/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            System Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Stop Relying On <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Spreadsheets</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Your revenue ops demand enterprise-grade software. We provide the certified technical architects, business analysts, and developers needed to execute flawlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0f172a] border border-white/5 p-8 rounded-3xl group hover:bg-[#111827] hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-300 relative overflow-hidden cursor-default">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10">{c.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-slate-300 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
