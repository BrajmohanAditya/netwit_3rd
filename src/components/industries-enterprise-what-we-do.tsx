"use client";

import { Monitor, Smartphone, Globe, Database, Settings, RefreshCcw } from "lucide-react";

export function EnterpriseWhatWeDo() {
  const services = [
    {
      icon: <Monitor className="w-7 h-7 text-primary" strokeWidth={1.5} />,
      title: "Custom Enterprise Software\nDevelopment",
      desc: "Leverage robust enterprise applications and eCommerce solutions - web and mobile"
    },
    {
      icon: <Smartphone className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "Enterprise Mobility Services",
      desc: "Maximize digital workplace potential and glean accurate visibility into your network capacity"
    },
    {
      icon: <Globe className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "Digital Transformation Services",
      desc: "Thrive in the current digital world with our end-to-end omnichannel and multichannel solutions"
    },
    {
      icon: <Database className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "Data Management",
      desc: "Become data-driven through transformative cloud-based solutions and agile analytics"
    },
    {
      icon: <Settings className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "Software Integration",
      desc: "Optimize workloads and performance through integration with leading technologies"
    },
    {
      icon: <RefreshCcw className="w-7 h-7 text-[#f06f12]" strokeWidth={1.5} />,
      title: "Legacy App Modernization",
      desc: "Review the maintenance and upgrade of your existing business models"
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-28 px-6 flex flex-col items-center text-center relative overflow-hidden">

      {/* Background Abstract Hands Visual */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px]">
        <p className="text-[10px] text-primary font-bold tracking-[0.15em] uppercase mb-4">
          SERVICES
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#222] mb-6 tracking-tight">
          What We Do
        </h2>
        <p className="text-[13.5px] text-[#555] mb-20 max-w-[750px] leading-[1.6]">
          Netwit&apos;s depth and breadth in global IT solutions provides access to secure and reliable Cloud technologies that help modernize dynamic workloads and maximize business value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 justify-items-center w-full mb-16 px-4">
          {services.map((svc, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-[300px] group cursor-pointer hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 drop-shadow-sm group-hover:border-primary/20 transition-colors">
                {svc.icon}
              </div>
              <h4 className="text-[15px] font-bold text-[#222] mb-4 tracking-wide whitespace-pre-line leading-tight">{svc.title}</h4>
              <p className="text-[12.5px] text-gray-500 font-medium leading-[1.6]">{svc.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-gray-500 font-medium leading-[1.6] max-w-[700px] mb-12">
          Leverage Our Expertise, Infrastructure, Resources, and Flexible Engagement Models to fulfill your comprehensive IT Infrastructure needs.
        </p>

        <button className="bg-black text-white text-[13.5px] font-bold py-3.5 px-10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-[2px]">
          Get Started
        </button>
      </div>

    </section>
  );
}
