"use client";

import { Play, Quote } from "lucide-react";

export function SaasClients() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-20 px-6">
      
      <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] mb-16 text-center tracking-tight">
        What <span className="text-[#f06f12]">Our Clients</span> Say
      </h2>

      <div className="max-w-[900px] w-full flex flex-col md:flex-row items-center gap-12 bg-white">
        
        {/* Text / Quote side */}
        <div className="flex-1 flex flex-col relative pr-0 md:pr-10">
           <p className="text-[14.5px] text-[#444] leading-[1.8] font-medium italic mb-10 relative z-10">
             "My experience with Netsmartz far exceeded my expectations. They delivered on the same level as what I’m used to working with on our global outsourcing projects."
           </p>
           
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center rounded-[2px] mb-2">
                 <Quote className="w-5 h-5 text-white fill-white" /> 
                 {/* Standard quote icon replaces proxy */}
              </div>
              <div className="flex flex-col">
                 <h4 className="text-[14px] font-bold text-[#222]">Jeff Burton</h4>
                 <span className="text-[11px] text-gray-500 font-medium">Director of Technology, Mitek Tech</span>
              </div>
           </div>
        </div>

        {/* Video Thumbnail side */}
        <div className="w-full md:w-[380px] h-[220px] bg-[#f06f12] rounded-[2px] relative cursor-pointer group shadow-lg overflow-hidden flex-shrink-0">
           {/* Abstract orange background patterns matching the image */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/50 rounded-bl-full pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-600/30 rounded-tr-full pointer-events-none"></div>

           <div className="absolute top-6 left-6 z-10">
             <span className="text-white/90 text-[10.5px] font-bold uppercase tracking-widest block mb-2 opacity-90">#ClientSpeak</span>
             <h3 className="text-white text-[16px] font-bold leading-tight">
               JEFF<br/>BURTON
             </h3>
           </div>
           
           {/* The man's photo on the right side of the orange card */}
           <div className="absolute bottom-0 right-4 w-[160px] h-[180px] bg-cover bg-bottom bg-no-repeat transition-transform duration-500 group-hover:scale-105 z-10"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop)` }}
           ></div>

           {/* Play button overlay */}
           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-20 flex items-center justify-center">
               <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                   <Play className="w-4 h-4 text-[#f06f12] ml-1" fill="currentColor" />
               </div>
           </div>
        </div>

      </div>

      {/* Minor avatar dots underneath the video (abstract decorative piece from image) */}
      <div className="max-w-[900px] w-full flex justify-end mt-4">
         <div className="w-[380px] flex justify-center gap-2 pr-6">
            <div className="w-6 h-6 rounded-full bg-gray-200 border border-white shadow-sm overflow-hidden opacity-50"><img src="https://i.pravatar.cc/100?img=1" alt=""/></div>
            <div className="w-7 h-7 rounded-full bg-gray-300 border border-white shadow-sm overflow-hidden z-10 -ml-3"><img src="https://i.pravatar.cc/100?img=11" alt=""/></div>
            <div className="w-6 h-6 rounded-full bg-gray-200 border border-white shadow-sm overflow-hidden opacity-50 -ml-3"><img src="https://i.pravatar.cc/100?img=3" alt=""/></div>
         </div>
      </div>

    </section>
  );
}
