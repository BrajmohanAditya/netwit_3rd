"use client";

import { Scale, Fingerprint, Rocket, ShieldOff } from "lucide-react";

export function FinanceBenefits() {
  const benefits = [
    {
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      title: "Regulatory Compliance",
      desc: "Stay ahead of changing financial regulations with infrastructure that is compliant by default, reducing audit stress.",
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-blue-600" />,
      title: "Enhanced Security",
      desc: "Protect sensitive customer financial profiles with multi-layered defense mechanisms and continuous scanning.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Faster Innovation",
      desc: "Adopt microservices and containerization to deploy new fintech features daily instead of quarterly.",
    },
    {
      icon: <ShieldOff className="w-8 h-8 text-blue-600" />,
      title: "Reduced Risk",
      desc: "Implement automated failovers and immutable backups to ensure continuity during cyber attacks or hardware failures.",
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full text-center">
        
        <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
          BUSINESS IMPACT
        </p>
        <h2 className="text-[34px] md:text-[42px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.1]">
          Why Finance Leaders Trust Us
        </h2>
        <p className="text-[14px] text-gray-600 mb-16 max-w-[600px] mx-auto leading-[1.6]">
          By bridging the gap between legacy systems and modern cloud architectures, we enable financial institutions to compete in a digital-first world safely.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all group">
               <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-[#0B1528] transition-colors">
                 <div className="text-blue-600 group-hover:text-emerald-400 transition-colors">
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
