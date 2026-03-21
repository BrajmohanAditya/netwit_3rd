"use client";

import { Activity, Clock, Zap, Shield } from "lucide-react";

export function SecureSmartzFeatures() {
  const features = [
    {
      icon: <Activity className="w-5 h-5 text-[#f06f12]" strokeWidth={2} />,
      title: "Unified Telemetry & Correlation",
      desc: "Endpoint, network, cloud, and identity data analyzed through AI-driven analytics for high-confidence detection."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#f06f12]" strokeWidth={2} />,
      title: "24/7 SOC & Threat Hunting",
      desc: "Always-on monitoring, proactive threat hunting, and analyst-led investigation to identify and contain active threats."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#f06f12]" strokeWidth={2} />,
      title: "Rapid Incident Response",
      desc: "Guided containment and remediation workflows designed to reduce dwell time and operational disruption."
    },
    {
      icon: <Shield className="w-5 h-5 text-[#f06f12]" strokeWidth={2} />,
      title: "Security Posture Optimization",
      desc: "Ongoing risk assessment, readiness planning, and security maturity improvements over time."
    }
  ];

  return (
    <section className="w-full bg-[#050505] py-24 px-6 flex flex-col items-center">
      <div className="max-w-[1000px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="bg-[#0A0A0A] border border-[#f06f12]/20 rounded-[8px] p-8 pb-12 transition-all hover:bg-[#111] hover:border-[#f06f12]/40 hover:shadow-[0_0_20px_rgba(240,111,18,0.05)] cursor-default"
          >
            <div className="w-[36px] h-[36px] bg-[#141414] border border-[#f06f12]/20 rounded-md flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-[17px] font-bold text-gray-100 mb-3 tracking-wide">
              {feature.title}
            </h3>
            <p className="text-[13.5px] text-gray-400 leading-[1.6]">
              {feature.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
