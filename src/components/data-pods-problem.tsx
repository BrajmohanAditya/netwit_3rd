"use client";

import { Database, LineChart, Search, Hourglass, Gauge } from "lucide-react";

export function DataPodsProblem() {
  const problems = [
    {
      icon: <Database className="w-12 h-12 text-primary stroke-[1.5] mb-6" />,
      text: "Critical data fragmented across operational, customer, financial, and product systems"
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary stroke-[1.5] mb-6" />,
      text: "Low trust in dashboards, forecasts, and AI outputs"
    },
    {
      icon: <Search className="w-12 h-12 text-primary stroke-[1.5] mb-6" />,
      text: 'Analytics and AI projects stuck in "proof-of-concept" mode'
    },
    {
      icon: <Hourglass className="w-12 h-12 text-primary stroke-[1.5] mb-6" />,
      text: "Teams spending more time fixing data than generating insights"
    },
    {
      icon: <Gauge className="w-12 h-12 text-primary stroke-[1.5] mb-6" />,
      text: "Governance and access controls added reactively, slowing execution"
    }
  ];

  return (
    <section className="bg-white py-20 px-6 w-full relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-3xl md:text-[34px] font-bold text-text mb-5 tracking-tight">
          The Real Problem Leaders Are Facing
        </h2>
        <p className="text-[15px] md:text-[16px] text-muted max-w-[900px] mx-auto mb-14 leading-relaxed font-medium">
          Across industries, organizations are investing heavily in AI and analytics, but results stall once initiatives move beyond pilots.<br className="hidden md:block"/>
          Common challenges we repeatedly see include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {problems.map((prob, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-[8px] p-6 md:p-8 flex flex-col items-center justify-start text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all cursor-pointer min-h-[220px]"
            >
              <div className="flex items-center justify-center p-2 rounded-full bg-primary/5 mb-4">
                {prob.icon}
              </div>
              <p className="text-[13px] md:text-[14px] text-text font-medium leading-snug">
                {prob.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-[1000px] mx-auto bg-surface-2 border-t-[4px] border-primary rounded-b-[6px] shadow-sm p-6 md:p-8">
          <p className="text-sm md:text-[16px] text-text font-bold italic leading-relaxed px-4 tracking-wide">
            Reality Check: You don&apos;t have an AI problem. You have a data reliability and control problem, and AI exposes it faster.
          </p>
        </div>
      </div>
    </section>
  );
}
