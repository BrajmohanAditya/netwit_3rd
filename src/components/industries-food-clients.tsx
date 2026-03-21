"use client";

import { Utensils, Coffee, Pizza, Truck } from "lucide-react";

export function FoodClients() {
  return (
    <section className="w-full bg-[#f8fbff] py-16 px-6 flex flex-col items-center border-t border-orange-100">
      
      <div className="max-w-[1000px] w-full flex flex-col items-center">
         <p className="text-[14px] text-gray-500 font-medium mb-10 text-center uppercase tracking-widest">
           Powering National Food Chains & Delivery Networks
         </p>
         
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-60">
            {/* Dummy Client 1 */}
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center p-1 group-hover:bg-red-200 transition-colors"><Truck className="text-red-600" /></div>
              <div className="font-sans text-[24px] font-black text-gray-800 tracking-tight leading-none group-hover:text-red-600 transition-colors">Speedy<br/><span className="text-[14px] font-bold text-red-500 uppercase tracking-widest">Eats</span></div>
            </div>

            {/* Dummy Client 2 */}
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center p-1 group-hover:bg-orange-200 transition-colors"><Pizza className="text-orange-600" /></div>
              <div className="font-serif italic text-[24px] font-bold text-gray-800 tracking-tight group-hover:text-orange-600 transition-colors">Slice<br/><span className="font-sans text-[12px] not-italic font-bold text-gray-400">Pizzeria</span></div>
            </div>

            {/* Dummy Client 3 */}
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center p-1 group-hover:bg-yellow-200 transition-colors"><Utensils className="text-yellow-600" /></div>
              <div className="font-sans text-[20px] font-bold text-gray-700 tracking-tighter uppercase group-hover:text-yellow-600 transition-colors">Urban<br/><span className="text-[20px] text-yellow-500 font-black">Plates</span></div>
            </div>

            {/* Dummy Client 4 */}
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-[#f06f12]/10 flex items-center justify-center p-1 group-hover:bg-[#f06f12]/20 transition-colors"><Coffee className="text-[#f06f12]" /></div>
              <div className="font-serif text-[26px] font-bold text-gray-800 tracking-tight group-hover:text-[#f06f12] transition-colors">Brew<br/><span className="font-sans text-[12px] font-bold text-gray-500 uppercase tracking-[0.2em] relative -top-2">Station</span></div>
            </div>
         </div>
      </div>
      
    </section>
  );
}
