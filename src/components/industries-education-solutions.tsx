"use client";

import { Cloud, Lock, Settings, Zap, ArrowRight, ShieldCheck, Database, Accessibility } from "lucide-react";

export function EducationSolutions() {
  const challenges = [
    {
      icon: <Zap className="w-5 h-5 text-red-500" />,
      title: "High traffic during peak times",
      desc: "Simultaneous logins during exams cause server crashes.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
      title: "Student data security",
      desc: "Strict adherence to FERPA and GDPR regulations.",
    },
    {
      icon: <Database className="w-5 h-5 text-red-500" />,
      title: "Legacy system integration",
      desc: "Outdated Student Information Systems (SIS) causing data silos.",
    },
    {
      icon: <Accessibility className="w-5 h-5 text-red-500" />,
      title: "Accessibility requirements",
      desc: "Delivering content across diverse devices seamlessly.",
    }
  ];

  const solutions = [
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: "Scalable Cloud Infra",
      desc: "Autoscaling architectures that handle sudden spikes without latency.",
      bg: "bg-blue-600"
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Compliant Security",
      desc: "End-to-end encryption ensuring complete data privacy and GDPR compliance.",
      bg: "bg-indigo-600"
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Seamless API Integrations",
      desc: "Connecting LMS, SIS, and payment gateways into a unified ecosystem.",
      bg: "bg-emerald-600"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "CDN Optimization",
      desc: "Global content delivery networks guaranteeing zero-buffering video lessons.",
      bg: "bg-[#f06f12]"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
      <div className="max-w-[1200px] w-full grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Challenges */}
        <div className="flex flex-col">
          <p className="text-[11px] text-blue-600 font-bold tracking-[0.15em] uppercase mb-4">
            INDUSTRY CHALLENGES
          </p>
          <h2 className="text-[34px] md:text-[40px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.2]">
            Overcoming EdTech Hurdles
          </h2>
          <p className="text-[14px] text-gray-600 mb-10 leading-[1.6]">
            From unexpected exam-day traffic spikes to strict data protection regulations, modern educational platforms face complex technical barriers.
          </p>

          <div className="flex flex-col gap-6">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl border border-red-100 bg-red-50/30">
                 <div className="mt-1 w-10 h-10 shrink-0 bg-red-100 rounded-lg flex items-center justify-center">
                    {challenge.icon}
                 </div>
                 <div>
                    <h4 className="text-[16px] font-bold text-[#1a1f33] mb-1">{challenge.title}</h4>
                    <p className="text-[13px] text-gray-500">{challenge.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Solutions */}
        <div className="flex flex-col h-full">
           <div className="bg-[#1a1f33] rounded-[24px] p-8 md:p-12 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>

              <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 relative z-10">
                OUR SOLUTIONS
              </p>
              <h3 className="text-[28px] md:text-[34px] font-bold text-white mb-10 tracking-tight leading-[1.2] relative z-10">
                 Robust DevOps built for Scale
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                 {solutions.map((sol, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                       <div className={`${sol.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-${sol.bg}/20 group-hover:-translate-y-1 transition-transform`}>
                          {sol.icon}
                       </div>
                       <h4 className="text-[15px] font-bold text-white mb-2">{sol.title}</h4>
                       <p className="text-[12px] text-gray-400 leading-relaxed">{sol.desc}</p>
                    </div>
                 ))}
              </div>

              <button className="mt-10 flex items-center gap-2 text-white font-bold text-[14px] group w-fit relative z-10 hover:text-blue-400 transition-colors">
                 <span>Discuss your architecture</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

           </div>
        </div>

      </div>
    </section>
  );
}
