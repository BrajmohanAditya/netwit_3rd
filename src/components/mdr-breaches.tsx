"use client";

import { AlertTriangle, RefreshCcw, BellOff, CloudOff, BellRing } from "lucide-react";

export function MdrBreaches() {
  const breaches = [
    {
      icon: <AlertTriangle className="w-[32px] h-[32px] text-primary stroke-[1.5] mb-4" />,
      text: "Initial access through identity misuse, stolen credentials, or misconfigurations"
    },
    {
      icon: <RefreshCcw className="w-[32px] h-[32px] text-primary stroke-[1.5] mb-4" />,
      text: "Quiet lateral movement across systems and environments"
    },
    {
      icon: <BellOff className="w-[32px] h-[32px] text-primary stroke-[1.5] mb-4" />,
      text: "Alerts accumulating while teams are offline"
    },
    {
      icon: <CloudOff className="w-[32px] h-[32px] text-primary stroke-[1.5] mb-4" />,
      text: "Identity abuse and cloud misconfigurations going unchallenged"
    },
    {
      icon: <BellRing className="w-[32px] h-[32px] text-primary stroke-[1.5] mb-4" />,
      text: "Incidents discovered only after damage, disruption, or external notification"
    }
  ];

  return (
    <section className="bg-white py-24 px-6 w-full flex flex-col items-center">
      <div className="max-w-[1200px] w-full text-center">
        
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#2d2d2d] mb-4 tracking-tight">
          Most Breaches Aren&apos;t Loud — Until It&apos;s Too Late
        </h2>
        
        <p className="text-[14.5px] text-[#666] mb-12 font-medium">
          Across modern environments, breaches follow a familiar pattern:
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 w-full mb-12">
          {breaches.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-[8px] py-10 px-5 flex flex-col items-center text-center shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-primary/30 transition-all"
            >
              {item.icon}
              <p className="text-[13px] text-[#444] font-medium leading-[1.6]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Bar */}
        <div className="inline-flex">
          <div className="border border-primary/30 bg-primary/5 px-8 py-4 flex items-center shadow-[2px_2px_10px_rgba(11,61,145,0.05)] border-l-[4px] border-l-primary">
            <p className="text-[14px] text-[#333]">
              <strong className="font-bold text-[#111]">Hard truth:</strong> Most organizations detect incidents after impact has already begun.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
