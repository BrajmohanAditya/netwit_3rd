"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const tools = [
  { name: "Intercom", domain: "intercom.com" },
  { name: "Totango", domain: "totango.com" },
  { name: "Freshworks", domain: "freshworks.com" },
  { name: "Zendesk", domain: "zendesk.com" },
  { name: "Gainsight", domain: "gainsight.com" },
  { name: "LiveChat", domain: "livechat.com" },
  { name: "Gorgias", domain: "gorgias.com" },
  { name: "ChurnZero", domain: "churnzero.com" },
  { name: "Aircall", domain: "aircall.io" },
];

export default function CustomerSupportTools() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Amount to scroll per click
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827]">
            <span className="text-[#ea580c]">Customer Support</span> Tools and Platforms
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center group">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-2 md:-left-6 z-10 bg-white border border-gray-300 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-sm hover:bg-gray-50 focus:outline-none shadow-sm transition-opacity"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
          </button>

          {/* Slider */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-center gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-8 md:px-12 w-full no-scrollbar"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* Duplicated for a pseudo-infinite feel if needed, but we'll stick to original set for purity */}
            {tools.map((tool, idx) => (
              <div 
                key={idx} 
                className="snap-start shrink-0 w-[140px] md:w-[180px] h-[60px] md:h-[75px] bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center p-4 hover:shadow-md transition-shadow"
                title={tool.name}
              >
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`} 
                  alt={`${tool.name} Logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div 
                  className="hidden w-full h-full flex-col items-center justify-center text-center leading-tight"
                >
                  <span className="text-[14px] md:text-[16px] font-bold text-gray-700 line-clamp-1">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-2 md:-right-6 z-10 bg-[#ea580c] text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-sm hover:bg-[#c2410c] focus:outline-none shadow-md transition-colors"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Custom Pagination Indicator matching screenshot */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {[0, 1, 2, 3, 4, 5].map((dotIndex) => {
            // Very simple calculation to match progress to 6 states
            const isActive = Math.round(scrollProgress * 5) === dotIndex;
            return (
              <div 
                key={dotIndex}
                className={`transition-all duration-300 rounded-full ${
                  isActive 
                    ? 'w-6 h-1.5 md:h-2 bg-[#ea580c]' 
                    : 'w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-100'
                }`}
              />
            );
          })}
        </div>
        
      </div>

      {/* Adding custom style directly to handle no-scrollbar specifically since some Tailwind setups miss it */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
