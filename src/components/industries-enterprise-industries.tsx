"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

export function EnterpriseIndustries() {
  const industries = [
    {
      title: "Healthcare",
      desc: "Empowering the healthcare industry in a digital-first world",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
    },
    {
      title: "Telecommunication",
      desc: "Take advantage of our gamut of telecommunication IT solutions",
      img: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=800&auto=format&fit=crop"
    },
    {
      title: "Retail & Commerce",
      desc: "Harness intelligence & deep insights to improve customer experience",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop"
    },
    {
      title: "Banking & Finance",
      desc: "Exploit our domain expertise in banking & finance",
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center py-24 px-6 relative overflow-hidden">
      
      <p className="text-[10px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
        INDUSTRIES
      </p>
      <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] mb-6 text-center tracking-tight">
        Industries We Serve
      </h2>
      <p className="text-[13.5px] text-[#666] mb-16 text-center max-w-[700px] leading-[1.7]">
        Given our strategic partnerships with market leaders and a strong foothold in 10 key locations worldwide, we are uniquely positioned to power innovation across industries and help diverse businesses accelerate their digital journey.
      </p>

      {/* 2x2 Grid Layout */}
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 relative">
        
        {/* Navigation Arrows representation (absolute) */}
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:border-[#f06f12] z-10 hidden lg:flex">
           <ArrowLeft className="w-4 h-4 text-[#f06f12]" />
        </div>
        <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:border-[#f06f12] z-10 hidden lg:flex">
           <ArrowRight className="w-4 h-4 text-[#f06f12]" />
        </div>

        {industries.map((ind, idx) => (
          <div key={idx} className="relative w-full h-[260px] md:h-[300px] overflow-hidden group cursor-pointer border border-gray-100/50 shadow-sm">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
               style={{ backgroundImage: `url(${ind.img})` }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
             
             {idx === 2 && ( /* Grayscaling retail block to match visual reference */
               <div className="absolute inset-0 bg-gray-900/40 backdrop-grayscale z-0"></div>
             )}
             
             <div className="relative z-10 p-8 flex flex-col h-full justify-center w-[85%]">
               <h3 className="text-[20px] font-bold text-white mb-4 drop-shadow-sm">{ind.title}</h3>
               <p className="text-[12.5px] text-gray-200 mb-6 leading-[1.6] drop-shadow-sm font-medium">{ind.desc}</p>
               <span className="text-[12.5px] font-bold text-white flex items-center gap-1 group-hover:text-[#f06f12] transition-colors mt-auto w-fit">
                 Learn More
               </span>
             </div>
          </div>
        ))}

      </div>

      <p className="text-[12.5px] text-[#777] mb-12 text-center max-w-[750px] leading-[1.7] font-medium">
         Our premium services are focused on incorporating agility in business operations to help enterprises deliver a truly unified customer experience.
      </p>

      <button className="bg-black text-white text-[13.5px] font-bold py-3.5 px-10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-[2px] mb-8">
         Learn More
      </button>

    </section>
  );
}
