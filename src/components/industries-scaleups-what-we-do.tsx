"use client";

import { Monitor, Layers, PenTool, CheckSquare, Terminal } from "lucide-react";

export function ScaleupsWhatWeDo() {
  const services = [
    {
       icon: <Monitor className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
       title: "Product Discovery",
       desc: "Redefine the foundation of your startup by validating your product idea"
    },
    {
       icon: <Layers className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
       title: "UI / UX",
       desc: "Devise a product design strategy that drives customer experience"
    },
    {
       icon: <PenTool className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
       title: "Software / Product Dev",
       desc: "Design secure and scalable apps to unlock unprecedented performance"
    },
    {
       icon: <CheckSquare className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
       title: "QA / Testing",
       desc: "Ensure app security and privacy with ongoing quality testing and end-to-end data protection"
    },
    {
       icon: <Terminal className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
       title: "DevOps & Support",
       desc: "Take advantage of our dedicated teams at every stage of the product development cycle"
    }
  ];

  return (
    <section className="w-full bg-[#1e2331] py-28 px-6 flex flex-col items-center text-center">
      <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.2em] uppercase mb-5">
        EXPLORE
      </p>
      <h2 className="text-[34px] md:text-[42px] font-bold text-white mb-6 tracking-tight drop-shadow-sm">
        What We Do
      </h2>
      <p className="text-[14px] text-gray-300 mb-20 max-w-[550px] leading-[1.6]">
        We offer a complete suite of services to power businesses online through cloud-ready infrastructure and agile workflows.
      </p>

      <div className="max-w-[1100px] w-full mb-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 justify-items-center mb-16">
              {services.slice(0, 3).map((svc, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center max-w-[280px]">
                    <div className="mb-6">{svc.icon}</div>
                    <h4 className="text-[16.5px] font-bold text-white mb-4 tracking-wide">{svc.title}</h4>
                    <p className="text-[12.5px] text-gray-400 font-medium leading-[1.6]">{svc.desc}</p>
                 </div>
              ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-y-16 gap-x-12 md:gap-x-[120px] max-w-[850px] mx-auto">
             {services.slice(3, 5).map((svc, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center max-w-[280px] w-full">
                    <div className="mb-6">{svc.icon}</div>
                    <h4 className="text-[16.5px] font-bold text-white mb-4 tracking-wide">{svc.title}</h4>
                    <p className="text-[12.5px] text-gray-400 font-medium leading-[1.6]">{svc.desc}</p>
                 </div>
              ))}
          </div>
      </div>

      <p className="text-[13.5px] text-gray-400 font-medium leading-[1.6] max-w-[700px] mb-12">
         Our on-time process methodology and low-cost services fulfillment has helped startups launch powerful and quickly scalable solutions.
      </p>
      
      <button className="bg-white text-black text-[13.5px] font-bold py-4 px-10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-[3px]">
         Get Started
      </button>

    </section>
  );
}
