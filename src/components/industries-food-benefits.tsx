"use client";

import { CheckCircle2, TrendingUp, Cpu, Smile } from "lucide-react";

export function FoodBenefits() {
  const benefits = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#f06f12]" />,
      title: "Never Miss An Order",
      desc: "Maintain 100% availability for your delivery portals, ensuring every hungry customer can place their order instantly.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#f06f12]" />,
      title: "Optimized Operations",
      desc: "Automate kitchen routing logic and driver dispatch networks to shave critical minutes off delivery times.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#f06f12]" />,
      title: "Actionable Insights",
      desc: "Unify data streams from multi-tenant apps to track high-performing menu items across your entire enterprise footprint.",
    },
    {
      icon: <Smile className="w-8 h-8 text-[#f06f12]" />,
      title: "Customer Satisfaction",
      desc: "Deliver flawless app experiences with zero crashes—building undeniable brand loyalty through reliability.",
    }
  ];

  return (
    <section className="w-full bg-[#fcf8f5] py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full text-center">
        
        <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
          THE ROI OF DEPENDABILITY
        </p>
        <h2 className="text-[34px] md:text-[42px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.1]">
          Feed Your Business Growth
        </h2>
        <p className="text-[14px] text-gray-600 mb-16 max-w-[600px] mx-auto leading-[1.6]">
          By bulletproofing your app infrastructure and automating your supply chain APIs, we empower food brands to focus on cooking, while we handle the scaling.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-orange-50 flex flex-col items-center text-center hover:shadow-xl transition-all group">
               <div className="w-16 h-16 rounded-full bg-orange-100/50 flex items-center justify-center mb-6 group-hover:bg-[#f06f12] transition-colors">
                 <div className="group-hover:text-white transition-colors">
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
