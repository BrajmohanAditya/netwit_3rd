"use client";

import { CheckCircle2, Link2, BrainCircuit, Globe, Building2 } from "lucide-react";
import Link from "next/link";

export function DynamicsCrmBenefits() {
  const points = [
    "Native synchronization with your active Microsoft 365 licensing (Outlook, Teams, Excel, SharePoint).",
    "Absolute abolition of 'Data Silos'; Service agents can view the exact promises made by Sales execs.",
    "Copilot AI identifies high-churn-risk accounts weeks before an unhappy client explicitly tells you.",
    "Microsoft Azure foundational layer means your CRM meets extreme ISO, SOC2, and HIPAA compliances.",
    "Completely eliminates the need for expensive Zapier or third-party webhooks dragging down operations.",
    "Scales infinitely from a 10-person regional sales team to a 10,000-person global marketing enterprise."
  ];

  return (
    <section className="bg-gradient-to-b from-[#050b14] to-[#02050a] py-24 relative overflow-hidden text-white border-t border-[#14233a] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#015CBB]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Monolithic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#015CBB]">Visibility.</span>
          </h2>
          <p className="text-blue-100/50 text-lg mb-8 leading-relaxed font-light">
            Isolated CRMs that don't talk to your ERP cost you revenue. By aggressively transitioning an enterprise into Microsoft Dynamics 365, leadership gains the absolute capability to track a customer interaction natively from a cold email entirely through to a closed-paid invoice.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-blue-100/70 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#00A4EF] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#015CBB] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(1,92,187,0.3)] hover:shadow-[0_0_50px_rgba(1,92,187,0.5)]">
             Begin D365 Migration
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#081220]/50 border border-[#14233a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0c182a] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Building2 className="w-8 h-8 text-[#00A4EF] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Unified</span>
              <span className="text-xs text-blue-200/50 tracking-widest uppercase font-semibold">Single Source of Truth</span>
           </div>
           
           <div className="bg-[#081220]/50 border border-[#14233a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0c182a] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Link2 className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Office</span>
              <span className="text-xs text-blue-200/50 tracking-widest uppercase font-semibold">Native App Synergy</span>
           </div>
           
           <div className="bg-[#081220]/50 border border-[#14233a] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#0c182a] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <BrainCircuit className="w-8 h-8 text-[#5C2D91] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">AI</span>
              <span className="text-xs text-blue-200/50 tracking-widest uppercase font-semibold">Copilot Assisted Selling</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#061e38] to-[#04101e] border border-[#015CBB]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00A4EF]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Scale.</h4>
              <p className="text-sm text-blue-200/70 leading-relaxed relative z-10 font-light">Configure deeply custom relational Dataverse architectures designed explicitly for your absolute niche.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
