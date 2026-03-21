"use client";

import { Monitor, Server, Cloud, Code2, Users, PieChart } from "lucide-react";

export function ItStaffServices() {
  const roles = [
    {
      icon: <Monitor className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "Frontend Development",
      desc: "Hire expert React, Angular, Vue.js, and Next.js developers to build intuitive, dynamic, and fast user interfaces."
    },
    {
      icon: <Server className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "Backend Development",
      desc: "Augment your team with senior Node.js, Python, Java, and .NET engineers who build scalable architectures."
    },
    {
      icon: <Cloud className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "DevOps & Cloud",
      desc: "Accelerate delivery with AWS, Azure, and GCP certified DevOps engineers for CI/CD and infrastructure automation."
    },
    {
      icon: <Code2 className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "QA & Test Automation",
      desc: "Ensure zero-defect releases with meticulous QA engineers specializing in Selenium, Cypress, and Appium."
    },
    {
      icon: <Users className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "Scrum Masters & PMs",
      desc: "Get experienced Agile leaders to keep your projects on track, within budget, and delivered on time."
    },
    {
      icon: <PieChart className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "UX/UI Design",
      desc: "Hire creative designers who translate business requirements into beautiful, user-centric experiences."
    }
  ];

  return (
    <section className="w-full bg-[#f8fbff] py-24 px-6 flex flex-col items-center relative overflow-hidden">
      
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-bl-full z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px] text-center">
        
        <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
          ROLES WE HIRE FOR
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#222] mb-6 tracking-tight">
          Find Your Perfect Fit
        </h2>
        <p className="text-[14px] text-gray-600 mb-16 max-w-[700px] leading-[1.6]">
          Whether you need a single developer to fill a skill gap or an entire dedicated team to build your MVP, we provide pre-vetted experts across the entire software development lifecycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {roles.map((role, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[4px] shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col items-start text-left group hover:-translate-y-1">
                   <div className="w-14 h-14 rounded-full bg-blue-50/50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-[#fff5ee] group-hover:border-orange-200 transition-colors">
                       {role.icon}
                   </div>
                   <h4 className="text-[18px] font-bold text-[#222] mb-3 tracking-tight">{role.title}</h4>
                   <p className="text-[13px] text-gray-500 font-medium leading-[1.6]">{role.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
