"use client";

import { Building2, KeyRound, LockKeyhole, Zap, DatabaseZap, Clock, ArrowRight } from "lucide-react";

export function FinanceSolutions() {
  const features = [
    {
      challenge: "Strict regulatory compliance",
      solutionTitle: "PCI-DSS & SOC2 Compliance",
      solutionDesc: "Automated compliance checks and audit-ready infrastructure configurations ensure you exceed regulatory standards effortlessly.",
      icon: <Building2 className="w-6 h-6 text-emerald-400" />
    },
    {
      challenge: "Security requirements",
      solutionTitle: "Bank-Grade Security",
      solutionDesc: "Zero-trust architectures with strict role-based access control, end-to-end encryption, and real-time threat detection.",
      icon: <LockKeyhole className="w-6 h-6 text-cyan-400" />
    },
    {
      challenge: "Legacy mainframe systems",
      solutionTitle: "Mainframe Modernization",
      solutionDesc: "Seamlessly migrate monolithic financial systems to microservices-based cloud environments without disrupting core operations.",
      icon: <DatabaseZap className="w-6 h-6 text-blue-400" />
    },
    {
      challenge: "Real-time transactions",
      solutionTitle: "High-Frequency Infra",
      solutionDesc: "Ultra-low latency pipelines and optimized edge compute resources designed for algorithmic trading and real-time clearing.",
      icon: <Zap className="w-6 h-6 text-[#f06f12]" />
    }
  ];

  return (
    <section className="w-full bg-[#f8fbff] py-24 px-6 flex flex-col items-center border-t border-gray-100">
      
      <div className="max-w-[1200px] w-full flex flex-col items-center">
         
         <div className="text-center mb-16 max-w-[800px]">
            <p className="text-[11px] text-blue-700 font-bold tracking-[0.15em] uppercase mb-4">
               CORE CAPABILITIES
            </p>
            <h2 className="text-[34px] md:text-[42px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.2]">
               Modernizing Finance Without Risk
            </h2>
            <p className="text-[14px] text-gray-600 mb-10 leading-[1.6]">
               We understand that in the financial sector, a single minute of downtime or a minor security flaw is unacceptable. Our DevOps strategies are engineered for zero-tolerance environments.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {features.map((feat, i) => (
               <div key={i} className="group relative bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300">
                  
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                  <div className="flex flex-col mb-6">
                     <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <Clock className="w-3 h-3 text-red-500" />
                        Challenge: {feat.challenge}
                     </span>
                  </div>

                  <div className="flex gap-6 items-start">
                     <div className="w-14 h-14 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {feat.icon}
                     </div>
                     <div className="flex flex-col">
                        <h3 className="text-[20px] font-bold text-[#1a1f33] mb-3">{feat.solutionTitle}</h3>
                        <p className="text-[14px] text-gray-600 leading-[1.7]">{feat.solutionDesc}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <button className="mt-16 flex items-center gap-2 border-[1.5px] border-blue-600 text-blue-700 text-[14px] font-bold px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-colors group">
            Speak to a Finance Architect
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </button>

      </div>

    </section>
  );
}
