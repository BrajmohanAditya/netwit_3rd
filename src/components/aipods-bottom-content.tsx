"use client";

import { Brain, Database, Settings, Code, ShieldCheck, UserCog } from "lucide-react";

export function AiPodsBottomContent() {
  const industries = ["SaaS", "Healthcare", "Manufacturing"];

  const podMembers = [
    { title: "AI/ML\nEngineers", icon: <Brain className="w-8 h-8 text-primary mb-3 stroke-[1.5]" /> },
    { title: "Data\nScientists", icon: <Database className="w-8 h-8 text-primary mb-3 stroke-[1.5]" /> },
    { title: "MLOps & DevOps\nSpecialists", icon: <Settings className="w-8 h-8 text-primary mb-3 stroke-[1.5]" /> },
    { title: "Product-Focused\nSoftware Engineers", icon: <Code className="w-8 h-8 text-primary mb-3 stroke-[1.5]" /> },
    { title: "Delivery\nAssurance & QA Experts", icon: <ShieldCheck className="w-8 h-8 text-primary mb-3 stroke-[1.5]" /> },
    { title: "Dedicated Pod\nLead/Delivery Owner", icon: <UserCog className="w-8 h-8 text-primary mb-3 stroke-[1.5]" /> }
  ];

  const packages = ["Foundation", "Scale", "Enterprise"];

  return (
    <div className="w-full">
      {/* Banner 1: Launch Production-Safe AI */}
      <section className="w-full bg-primary/5 py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
          Launch Production-Safe AI Without Disrupting Your Business Operations
        </h2>
        <p className="text-muted text-[15px] md:text-base mb-8">
          A 1-Page Executive Brief on How AI Pods Ensure Fast, Governed AI Execution.
        </p>
        <button className="bg-primary hover:bg-primary-600 transition-colors text-white font-bold py-3 px-8 rounded-[4px] shadow-md text-sm md:text-base cursor-pointer">
          Download the Executive Brief
        </button>
      </section>

      <div className="w-full bg-white">
        {/* Key Industries Section */}
        <section className="py-20 max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-[28px] font-bold text-text mb-4">
            Key Industries Our AI Pods Serve
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-xs md:text-sm bg-surface-2 border border-gray-200 text-text">
            Adapting Across Complex Domains & Challenges
          </div>
          <p className="text-[16px] text-muted max-w-[800px] mx-auto mb-12 leading-relaxed">
            Our AI Pods are industry-agnostic by design, embedding domain context while maintaining execution discipline. Each pod adapts to the regulatory states and operational realities of major industries, including:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-primary text-white font-bold text-lg md:text-[22px] py-10 md:py-14 rounded-[8px] shadow-sm transform transition-transform hover:scale-105 cursor-pointer">
                {ind}
              </div>
            ))}
          </div>
        </section>

        {/* What's inside an AI Pod Section */}
        <section className="py-10 max-w-[1240px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-[28px] font-bold text-text mb-4">
            What's Inside a Netwit AI Pod?
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-xs md:text-sm bg-surface-2 border border-gray-200 text-text">
            A Complete, Accountable Delivery Unit
          </div>
          <p className="text-[16px] text-muted max-w-[800px] mx-auto mb-12 leading-relaxed">
            Each AI Pod operates as a self-contained execution team aligned to your roadmap and accountable for outcomes. A typical AI Pod includes:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {podMembers.map((member, idx) => (
              <div key={idx} className="bg-primary/5 rounded-[8px] p-6 flex flex-col items-center justify-center text-center shadow-sm border border-primary/10 hover:bg-primary/10 transition-colors cursor-pointer min-h-[160px]">
                {member.icon}
                <span className="text-text font-bold text-[13px] md:text-[14px] leading-tight whitespace-pre-line">
                  {member.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* AI Pod Packages Section */}
        <section className="py-20 max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-[28px] font-bold text-text mb-4">
            AI Pod Packages We Offer
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full mb-12 font-semibold text-xs md:text-sm bg-surface-2 border border-gray-200 text-text">
            Select What Fits Your Needs
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-primary text-white font-bold text-lg md:text-[22px] py-10 md:py-14 rounded-[8px] shadow-sm transform transition-transform hover:scale-105 cursor-pointer">
                {pkg}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Banner 2: Ready to Turn AI Ideas */}
      <section className="w-full bg-primary/5 py-16 text-center px-6">
        <h2 className="text-2xl md:text-[28px] font-bold text-text mb-8">
          Ready to Turn AI Ideas into Production Reality?
        </h2>
        <button className="bg-primary hover:bg-primary-600 transition-colors text-white font-bold py-3 px-8 rounded-[4px] shadow-md text-sm md:text-base cursor-pointer">
          Design Your AI Pod Today
        </button>
      </section>
    </div>
  );
}
