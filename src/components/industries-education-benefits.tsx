"use client";

import { MonitorCheck, ShieldAlert, LineChart, Coins } from "lucide-react";

export function EducationBenefits() {
  const benefits = [
    {
      icon: <MonitorCheck className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      title: "Reliable Learning Platforms",
      desc: "Maintain 99.99% uptime so students never face interruptions during lectures or critical exams.",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      title: "Secure Student Data",
      desc: "Implement zero-trust security architecture to guarantee the privacy of sensitive academic records.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      title: "Better User Experience",
      desc: "Deliver HD video streaming globally with optimized CDNs and edge computing capabilities.",
    },
    {
      icon: <Coins className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      title: "Cost-effective Scaling",
      desc: "Pay only for what you use. Autoscaling algorithms ensure efficient resource utilization during holidays.",
    }
  ];

  return (
    <section className="w-full bg-[#f8fbff] py-24 px-6 flex flex-col items-center">

      <div className="max-w-[1200px] w-full text-center">

        <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
          WHY CHOOSE NETWIT
        </p>
        <h2 className="text-[34px] md:text-[42px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.1]">
          Impactful Results for EdTechs
        </h2>
        <p className="text-[14px] text-gray-600 mb-16 max-w-[600px] mx-auto leading-[1.6]">
          Our DevOps solutions provide the invisible infrastructure that lets students focus on learning and educators focus on teaching.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
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
