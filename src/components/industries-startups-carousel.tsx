"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function StartupsCarousel() {
  const industries = [
    { title: "Healthcare", desc: "Empowering the healthcare industry in a digital-first world.", iconColor: "from-blue-600 to-cyan-500" },
    { title: "Telecommunication", desc: "Take advantage of our portal & telecommunication IT solutions.", iconColor: "from-purple-600 to-pink-500" },
    { title: "Retail & Commerce", desc: "Harness intelligence & deep insights to improve customer experience.", iconColor: "from-emerald-500 to-teal-400" },
    { title: "Banking & Finance", desc: "Exploit our domain expertise in banking & finance.", iconColor: "from-amber-500 to-orange-400" },
  ];

  return (
    <section className="bg-white py-24 px-6 w-full flex flex-col items-center border-t border-gray-100 overflow-hidden">
      
      <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
        INDUSTRIES
      </p>
      <h2 className="text-[32px] md:text-[36px] font-bold text-[#222] mb-6 text-center tracking-tight">
        Industries We Serve
      </h2>
      <p className="text-[13px] text-[#666] mb-16 text-center max-w-[700px] leading-[1.6]">
        Given our strategic partnerships with market leaders and a strong foothold in 10 key locations worldwide, we are uniquely positioned to power innovation across industries and help diverse businesses accelerate their digital journey.
      </p>

      <div className="w-full max-w-[950px] relative flex items-center justify-center mb-16">
        
        {/* Navigation Arrows */}
        <button className="absolute -left-16 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#f06f12] hover:bg-gray-50 transition-colors z-10 hidden md:flex border border-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="absolute -right-16 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#f06f12] hover:bg-gray-50 transition-colors z-10 hidden md:flex border border-gray-100">
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* CSS Grid for exactly 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-white w-full">
          {industries.map((ind, idx) => (
            <div key={idx} className="relative h-[220px] w-full bg-slate-900 group overflow-hidden cursor-pointer">
              {/* Abstract Visual Overlay because specific photos are missing */}
              <div className={`absolute inset-0 bg-gradient-to-br ${ind.iconColor} opacity-50 mix-blend-multiply group-hover:scale-110 transition-transform duration-700`}></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              
              {/* Text Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-[22px] font-bold text-white mb-2 tracking-tight drop-shadow-md">
                  {ind.title}
                </h3>
                <p className="text-[12px] text-gray-200 mb-4 max-w-[280px] drop-shadow-sm font-medium">
                  {ind.desc}
                </p>
                <div className="mt-auto">
                    <span className="text-[12.5px] font-bold text-white flex items-center gap-1.5 opacity-90 group-hover:text-accent-gold transition-colors">
                    Learn More <span className="text-[16px] leading-[0]">&rarr;</span>
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <p className="text-[12px] text-[#666] font-medium leading-[1.6] max-w-[600px] mb-10 text-center">
           Our premium vendors are focused on incorporating agility in business operations to help enterprises deliver a truly unified customer experience.
      </p>

      <Link 
        href="/industries" 
        className="bg-black text-white text-[13px] font-bold py-3.5 px-10 shadow-md hover:-translate-y-0.5 transition-transform rounded-sm flex items-center justify-center w-fit"
      >
           Learn More
      </Link>

    </section>
  );
}
