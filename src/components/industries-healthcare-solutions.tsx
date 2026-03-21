"use client";

import { ShieldCheck, Crosshair, Network, Cpu, ArrowRight } from "lucide-react";

export function HealthcareSolutions() {
  const solutions = [
    {
      title: "HIPAA-Compliant Cloud Infra",
      desc: "Architectures designed specifically to exceed HIPAA and HITECH requirements, providing dedicated instances, encrypted databases, and comprehensive audit logging.",
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />
    },
    {
      title: "Seamless FHIR API Integration",
      desc: "Connect your new health applications with legacy EHR/EMR systems (Epic, Cerner) using modern FHIR APIs for secure, standardized data exchange.",
      icon: <Network className="w-8 h-8 text-teal-600" />
    },
    {
      title: "Medical IoT & Device Security",
      desc: "Protect sensitive patient telemetry with zero-trust network policies, ensuring wearables and connected medical devices transmit data immutably.",
      icon: <Cpu className="w-8 h-8 text-teal-600" />
    },
    {
      title: "Telemedicine Scalability",
      desc: "Eliminate video buffering during telehealth consultations with edge-optimized WebRTC streaming and auto-scaling media servers.",
      icon: <Crosshair className="w-8 h-8 text-teal-600" />
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full flex flex-col items-center">
         
         <div className="text-center mb-16 max-w-[800px]">
            <p className="text-[11px] text-teal-600 font-bold tracking-[0.15em] uppercase mb-4">
               CORE CAPABILITIES
            </p>
            <h2 className="text-[34px] md:text-[42px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.2]">
               Modernizing Healthcare Tech securely
            </h2>
            <p className="text-[14px] text-gray-600 mb-10 leading-[1.6]">
               We resolve the complex intersection of strict clinical regulations, outdated hospital architectures, and the pressing need for modern patient experiences.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {solutions.map((sol, i) => (
               <div key={i} className="group relative bg-[#f8fbff] p-8 md:p-10 rounded-2xl shadow-sm border border-teal-50 hover:shadow-2xl hover:border-teal-200 transition-all duration-300 flex flex-col items-start text-left">
                  
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:-translate-y-2 transition-transform border border-teal-50">
                     {sol.icon}
                  </div>
                  
                  <h3 className="text-[20px] font-bold text-[#1a1f33] mb-3">{sol.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-[1.7]">{sol.desc}</p>
                  
               </div>
            ))}
         </div>

         <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-700 w-full rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px]"></div>
            
            <div className="relative z-10 max-w-[600px] mb-8 md:mb-0">
               <h3 className="text-[24px] font-bold mb-2">Need a HIPAA Compliance Audit?</h3>
               <p className="text-teal-100 text-[14px]">Our security architects will review your current infrastructure to identify PHI vulnerabilities and recommend modern remediation strategies.</p>
            </div>
            
            <button className="relative z-10 whitespace-nowrap bg-white text-teal-700 font-bold text-[14px] px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
               Schedule Free Audit <ArrowRight className="w-4 h-4" />
            </button>
         </div>

      </div>

    </section>
  );
}
