"use client";

import { CheckCircle2 } from "lucide-react";

export function TelecomBenefits() {
  const benefits = [
    "Accelerated 5G Rollouts",
    "Massively Reduced OpEx",
    "Carrier-Grade 99.999% Reliability",
    "Elastic Traffic Scaling",
    "Automated Compliance & Security",
    "Zero-Downtime Updates",
  ];

  return (
    <section className="bg-gradient-to-b from-[#020817] to-gray-950 py-24 relative overflow-hidden text-white">
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-blue-900/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Unmatched Speed & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Network Efficiency</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            In an industry measured in gigabits and nanoseconds, your development and operations pipeline cannot be the bottleneck. Our DevOps experts transform your workflows to rival the speed of your fiber.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
               <li key={i} className="flex items-center gap-3 text-sm text-gray-200 font-medium bg-white/5 px-4 py-3 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  {b}
               </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 relative z-10 w-full mt-10 lg:mt-0">
          <div className="bg-[#050b1a] border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(59,130,246,0.1)] relative overflow-hidden">
             {/* decorative lines */}
             <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
             <div className="absolute top-10 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
             
             <div className="relative z-10">
                <span className="text-6xl font-black text-white block mb-2">40<span className="text-cyan-400">%</span></span>
                <h4 className="text-lg font-bold text-gray-300 mb-6">Reduction in Time-to-Market</h4>
                
                <span className="text-6xl font-black text-white block mb-2">60<span className="text-blue-500">%</span></span>
                <h4 className="text-lg font-bold text-gray-300 mb-6">Decrease in Infrastructure Costs</h4>

                <p className="text-xs text-gray-500 uppercase tracking-widest mt-8 font-semibold">
                   *Based on average client results after 6 months of CI/CD and NFV orchestration.
                </p>
             </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
