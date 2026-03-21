"use client";

import { Expand, PlayCircle, Coins, Layers } from "lucide-react";

export function MediaBenefits() {
  const benefits = [
    {
      icon: <Expand className="w-8 h-8 text-fuchsia-400" />,
      title: "Limitless Global Reach",
      desc: "Remove geographic barriers. Our CDN networking scales your content distribution so users in Tokyo experience the same quality as users in New York.",
    },
    {
      icon: <PlayCircle className="w-8 h-8 text-cyan-400" />,
      title: "Zero Buffering",
      desc: "Retain your audience by eradicating stuttering and long load times. Smooth, responsive playback is the cornerstone of viewing satisfaction.",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: "Auto-Scalable Backends",
      desc: "Stop overpaying for idle servers. Scale your computing power automatically based on actual viewer count and gaming lobby populations.",
    },
    {
      icon: <Coins className="w-8 h-8 text-pink-400" />,
      title: "Revenue Optimization",
      desc: "Integrate server-side ad insertions seamlessly, preventing ad-blockers from cutting into your streaming monetization strategy.",
    }
  ];

  return (
    <section className="w-full bg-[#130A1F] py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full text-center">
        
        <p className="text-[11px] text-cyan-400 font-bold tracking-[0.15em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          YOUR COMPETITIVE ADVANTAGE
        </p>
        <h2 className="text-[34px] md:text-[42px] font-black text-white mb-6 tracking-tight leading-[1.1]">
          Keep Your Audience Captivated
        </h2>
        <p className="text-[14px] text-gray-400 mb-16 max-w-[600px] mx-auto leading-[1.6]">
          When latency equals lost subscribers, our architectural expertise provides the invisible backbone that keeps your users immersed in your content.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-[#0a0510]/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-fuchsia-500/10 flex flex-col items-center text-center hover:border-cyan-500/30 transition-all group">
               <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(192,38,211,0.0)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                 <div className="transition-all">
                    {benefit.icon}
                 </div>
               </div>
               <h4 className="text-[16px] font-bold text-gray-100 mb-3">{benefit.title}</h4>
               <p className="text-[13px] text-gray-400 font-medium leading-[1.6]">{benefit.desc}</p>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
}
