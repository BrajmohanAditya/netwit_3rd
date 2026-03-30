"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe2 } from "lucide-react";

const locations = [
  {
    id: "Rochester",
    title: "Rochester, NY (Headquarters)",
    address: "1250 Pittsford Victor Road Ste 310\nPittsford, NY 14534",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "Vancouver",
    title: "Vancouver, BC",
    address: "500 Tech Boulevard\nVancouver, BC V6B 2W7",
    image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "Mississauga",
    title: "Mississauga, ON",
    address: "100 City Centre Dr\nMississauga, ON L5B 2C9",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "Dubai",
    title: "Dubai, UAE",
    address: "Dubai Internet City, Building 12\nDubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "Australia",
    title: "Sydney, Australia",
    address: "100 George Street\nSydney, NSW 2000",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800",
  },
  { 
    id: "Singapore", 
    title: "Singapore", 
    address: "Marina Bay Financial Centre\nSingapore 018981", 
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: "Pune", 
    title: "Pune, India", 
    address: "Hinjewadi IT Park, Phase 1\nPune, MH 411057", 
    image: "https://images.unsplash.com/photo-1565017349147-3841ad09cbbe?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: "Gurugram", 
    title: "Gurugram, India", 
    address: "Cyber City, DLF Phase 2\nGurugram, HR 122002", 
    image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: "Noida", 
    title: "Noida, India", 
    address: "Sector 62, IT Hub\nNoida, UP 201309", 
    image: "https://images.unsplash.com/photo-1605648834011-09418af88523?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: "Chandigarh", 
    title: "Chandigarh, India", 
    address: "Rajiv Gandhi IT Park\nChandigarh 160101", 
    image: "https://images.unsplash.com/photo-1587895047466-4f7f2b934785?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: "Mohali", 
    title: "Mohali, India", 
    address: "Industrial Area Phase 8A\nMohali, PB 160055", 
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" 
  }
];

export function GlobalTechCenters() {
  const [activeId, setActiveId] = useState(locations[0].id);

  const activeLocation = locations.find(loc => loc.id === activeId) || locations[0];

  return (
    <section className="bg-[var(--color-surface-2)] py-20 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center w-full"
        >
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#111827] dark:text-[var(--color-text)] mb-12 lg:mb-16">
            Our <span className="text-primary">Global Technology Centers</span> at a Glance
          </h2>
        </motion.div>

        <div className="w-full max-w-[1000px] flex flex-col gap-12 lg:gap-16">
          
          {/* Top Row: Description & Map */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <p className="text-[14px] md:text-[15px] text-[#4b5563] dark:text-[var(--color-muted)] font-medium leading-[1.8] max-w-[420px]">
                With 10+ state-of-the-art global campuses spanning over 2,000,000 square feet and $100M+ investments, we provide the foundation for your business to thrive in the digital age.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[400px] aspect-[2/1] text-gray-200 dark:text-gray-800 flex items-center justify-center">
                <Globe2 className="w-full h-full stroke-[0.3]" />
                
                {/* Simulated Location Pins */}
                <div className="absolute top-[30%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary drop-shadow-lg" />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-0.5 blur-[1px]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Image & Details */}
          <div className="flex flex-col min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeLocation.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full"
              >
                <div className="w-full md:w-[55%] aspect-[21/9] bg-gray-100 dark:bg-gray-800 rounded-sm overflow-hidden shadow-sm">
                  <img 
                    src={activeLocation.image} 
                    alt={activeLocation.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[45%] flex flex-col justify-center h-full pt-2 md:pt-6 text-center md:text-left">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111827] dark:text-[var(--color-text)] mb-3">
                    {activeLocation.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#4b5563] dark:text-[var(--color-muted)] whitespace-pre-line leading-[1.8] font-medium">
                    {activeLocation.address}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Global Tab List */}
        <div className="w-full max-w-[1100px] mt-16 md:mt-24">
          <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-3 text-[11px] md:text-[12px] font-bold uppercase tracking-wider">
            {locations.map((loc, idx) => (
              <div key={loc.id} className="flex items-center">
                <button 
                  onClick={() => setActiveId(loc.id)}
                  className={`px-1.5 py-1 transition-colors ${
                    activeId === loc.id 
                      ? 'text-primary' 
                      : 'text-[#4b5563] dark:text-[var(--color-muted)] hover:text-[#111827] dark:hover:text-white'
                  }`}
                >
                  {loc.id}
                </button>
                {idx < locations.length - 1 && (
                  <span className="text-primary font-light mx-0.5 md:mx-1 opacity-80">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
