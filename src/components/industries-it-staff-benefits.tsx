"use client";

import { CheckCircle2, ShieldCheck, Zap, Globe2 } from "lucide-react";

export function ItStaffBenefits() {
  const benefits = [
    {
      icon: <Globe2 className="w-8 h-8 text-[#0B3D91]" strokeWidth={1.5} />,
      title: "Global Talent Pool",
      desc: "Tap into a worldwide network of pre-screened developers from our 10+ global locations, ensuring you always find the exact skill match.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#0B3D91]" strokeWidth={1.5} />,
      title: "Faster Time-to-Hire",
      desc: "Skip the weeks of resume screening. We match you with qualified candidates in 48 hours, so you can start building immediately.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0B3D91]" strokeWidth={1.5} />,
      title: "Zero-Risk Engagement",
      desc: "Try out your augmented developers with confidence. If they aren't the perfect fit, we replace them at no additional cost.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#0B3D91]" strokeWidth={1.5} />,
      title: "Seamless Integration",
      desc: "Our developers adapt to your time zones, your agile ceremonies, and your tech stack, working exactly like your internal team.",
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image / Graphics */}
        <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-[4px] overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
          
          {/* Overlay Box */}
          <div className="absolute bottom-6 left-6 bg-white p-6 rounded-[4px] shadow-xl max-w-[240px]">
             <p className="text-[28px] font-black text-[#f06f12] leading-none mb-2">40%</p>
             <p className="text-[12px] font-medium text-gray-700 leading-[1.4]">Average cost savings compared to local hiring without compromising on quality.</p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col">
          <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
            WHY AUGMENT WITH US
          </p>
          <h2 className="text-[34px] md:text-[42px] font-bold text-[#222] mb-6 tracking-tight leading-[1.1]">
            Build Better, Faster, and Smarter
          </h2>
          <p className="text-[14px] text-gray-600 mb-10 leading-[1.6]">
            Staff augmentation gives you the flexibility to scale rapidly, adapt to project demands, and hit your milestones without the overhead of traditional hiring.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-start pr-4">
                 <div className="mb-4 bg-blue-50 w-16 h-16 rounded-[4px] flex items-center justify-center">
                   {benefit.icon}
                 </div>
                 <h4 className="text-[16px] font-bold text-[#222] mb-3">{benefit.title}</h4>
                 <p className="text-[13px] text-gray-500 font-medium leading-[1.6]">{benefit.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
      
    </section>
  );
}
