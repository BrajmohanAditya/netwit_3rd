"use client";

import { Activity, ShieldCheck, HeartPulse, RefreshCcw } from "lucide-react";

export function HealthcareBenefits() {
  const benefits = [
    {
      icon: <Activity className="w-8 h-8 text-teal-600" />,
      title: "Better Patient Care",
      desc: "Empower clinicians with lightning-fast applications so they spend zero time waiting on loading bars and more time diagnosing.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      title: "Compliance Assurance",
      desc: "We embed compliance directly into the CI/CD pipeline, automatically catching vulnerabilities before they reach production.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-teal-600" />,
      title: "PHI Data Protection",
      desc: "Isolate sensitive Electronic Health Records (EHR) behind robust VPCs, encrypting all lateral traffic within your clusters.",
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-teal-600" />,
      title: "Streamlined Operations",
      desc: "Reduce clinical IT overhead by automating server provisions, patching, and data backups without disrupting the ER.",
    }
  ];

  return (
    <section className="w-full bg-[#f2fcfb] py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full text-center">
        
        <p className="text-[11px] text-teal-600 font-bold tracking-[0.15em] uppercase mb-4">
          IMPACT ON CARE DELIVERY
        </p>
        <h2 className="text-[34px] md:text-[42px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.1]">
          Where Technology Meets Empathy
        </h2>
        <p className="text-[14px] text-gray-600 mb-16 max-w-[600px] mx-auto leading-[1.6]">
          By bulletproofing your healthcare infrastructure, we ensure that doctors and patients always have an uninterrupted, secure bridge of communication.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-teal-50 flex flex-col items-center text-center hover:shadow-xl transition-all group">
               <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                 <div className="text-teal-600 group-hover:text-white transition-colors">
                    {benefit.icon}
                 </div>
               </div>
               <h4 className="text-[16px] font-bold text-[#1a1f33] mb-3">{benefit.title}</h4>
               <p className="text-[13px] text-gray-500 font-medium leading-[1.6]">{benefit.desc}</p>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
}
