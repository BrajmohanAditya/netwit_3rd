"use client";

import { Cpu, Wifi, Wrench, Maximize, Settings2, BarChart4 } from "lucide-react";

export function ManufacturingSolutions() {
  const solutions = [
    {
      title: "IIoT Infrastructure Integration",
      desc: "Seamlessly bridge the gap between Operations Technology (OT) and IT. We integrate legacy PLCs with modern cloud protocols, creating a unified data lake across your entire factory floor.",
      icon: <Wifi className="w-8 h-8 text-amber-500" />,
      features: ["Protocol Translation", "OT/IT Convergence", "Secure Data Pipelines"]
    },
    {
      title: "Industrial Edge Computing",
      desc: "Process critical manufacturing data exactly where it's generated. Our edge architectures eliminate latency, ensuring automated assembly lines react in milliseconds.",
      icon: <Cpu className="w-8 h-8 text-amber-500" />,
      features: ["Micro-datacenters", "Real-time Processing", "Bandwidth Optimization"]
    },
    {
      title: "Predictive Maintenance AI",
      desc: "Transform maintenance from reactive to predictive. By analyzing machine vibration and temperature telemetry in real-time, we alert teams before catastrophic failures occur.",
      icon: <Wrench className="w-8 h-8 text-amber-500" />,
      features: ["Anomaly Detection", "Automated Alerts", "Lifecycle Extension"]
    },
    {
      title: "Digital Twin Support",
      desc: "Create comprehensive virtual replicas of your physical assets. Test production changes, optimize supply chains, and train staff virtually without disrupting actual operations.",
      icon: <Maximize className="w-8 h-8 text-amber-500" />,
      features: ["3D Modeling", "Scenario Simulation", "Process Optimization"]
    }
  ];

  return (
    <section className="w-full bg-[#f8fbff] py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full flex flex-col items-center">
         
         <div className="text-center mb-16 max-w-[800px]">
            <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
               CORE CAPABILITIES
            </p>
            <h2 className="text-[34px] md:text-[42px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.2]">
               Engineering the Connected Factory
            </h2>
            <p className="text-[14px] text-gray-600 mb-10 leading-[1.6]">
               Manufacturing is evolving from mass production to smart customization. Our DevOps engineers build the technological backbone necessary to digitize hardware-heavy environments securely.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {solutions.map((sol, i) => (
               <div key={i} className="group bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 flex flex-col items-start relative overflow-hidden">
                  
                  {/* Hover effect background slice */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  
                  <div className="flex justify-between items-start w-full mb-6 relative z-10">
                     <div className="w-16 h-16 rounded-xl bg-[#222733] flex items-center justify-center shadow-lg group-hover:-translate-y-2 group-hover:bg-amber-500 transition-all">
                        <div className="group-hover:text-black transition-colors">
                           {sol.icon}
                        </div>
                     </div>
                  </div>
                  
                  <h3 className="text-[20px] font-bold text-[#1a1f33] mb-3 relative z-10">{sol.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-[1.7] mb-6 relative z-10">{sol.desc}</p>

                  <div className="mt-auto grid grid-cols-1 sm:grid-cols-3 gap-2 w-full pt-6 border-t border-gray-100 relative z-10">
                     {sol.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                           <span className="text-[11px] font-bold text-gray-500 uppercase">{feat}</span>
                        </div>
                     ))}
                  </div>
                  
               </div>
            ))}
         </div>

      </div>

    </section>
  );
}
