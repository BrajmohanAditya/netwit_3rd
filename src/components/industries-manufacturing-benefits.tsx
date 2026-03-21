"use client";

import { Box, TimerOff, Maximize2, LineChart } from "lucide-react";

export function ManufacturingBenefits() {
  const benefits = [
    {
      icon: <Box className="w-8 h-8 text-amber-500" />,
      title: "Smart Factories",
      desc: "Connect disparate machinery into an intelligent, communicative ecosystem that self-reports inventory and operational health.",
    },
    {
      icon: <TimerOff className="w-8 h-8 text-amber-500" />,
      title: "Reduced Downtime",
      desc: "Stop unexpected halts on the assembly line. Predictive analytics drastically reduces OEE (Overall Equipment Effectiveness) losses.",
    },
    {
      icon: <Maximize2 className="w-8 h-8 text-amber-500" />,
      title: "Optimized Production",
      desc: "Dynamically adjust machine speeds and raw material input based on live supply chain telemetry and fluctuating market demand.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-amber-500" />,
      title: "Actionable Analytics",
      desc: "Provide factory floor managers with clear, centralized dashboards instead of decentralized legacy PLC readouts.",
    }
  ];

  return (
    <section className="w-full bg-[#171a21] py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full text-center">
        
        <p className="text-[11px] text-amber-500 font-bold tracking-[0.15em] uppercase mb-4">
          QUANTIFIABLE RESULTS
        </p>
        <h2 className="text-[34px] md:text-[42px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
          The ROI of Industrial DevOps
        </h2>
        <p className="text-[14px] text-gray-400 mb-16 max-w-[600px] mx-auto leading-[1.6]">
          By digitizing your manufacturing operations, we turn isolated mechanical assets into integrated, high-performing digital entities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-[#222733] p-8 rounded-[4px] shadow-sm border border-gray-800 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all group">
               <div className="w-16 h-16 rounded-sm bg-[#171a21] border border-gray-700 flex items-center justify-center mb-6 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-colors">
                 <div className="text-amber-500 transition-colors">
                    {benefit.icon}
                 </div>
               </div>
               <h4 className="text-[16px] font-bold text-gray-100 mb-3">{benefit.title}</h4>
               <p className="text-[13px] text-gray-500 font-medium leading-[1.6]">{benefit.desc}</p>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
}
