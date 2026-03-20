import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CybersecurityBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] min-h-[450px] md:min-h-[500px] flex items-center justify-center py-20">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Using a tech/cybersecurity themed background image */}
        <Image 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
          alt="Cybersecurity and technology network background"
          fill
          className="object-cover object-center opacity-30 mix-blend-color-dodge"
        />
        {/* Deep dark gradient overlay with a hint of warm orange/amber tint mimicking the reference */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#1a0b02]/90 w-full z-10"></div>
      </div>

      <div className="relative z-20 max-w-[1000px] mx-auto w-full px-6 flex flex-col items-center text-center">
        
        {/* Small Over Title */}
        <h3 className="text-[13px] md:text-[15px] font-semibold text-gray-300 mb-4 tracking-wide">
          Advanced Security &amp; Threat Management
        </h3>
        
        {/* Main Title */}
        <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-white leading-[1.2] mb-5 tracking-tight max-w-[800px]">
          Comprehensive, AI-Enhanced Cybersecurity <br className="hidden sm:block"/>
          for Global Hubs
        </h2>
        
        {/* Subtitle */}
        <p className="text-[15px] md:text-[17px] text-gray-300 mb-10 font-medium leading-[1.6] max-w-[600px]">
          Complete 360&deg; protection for your GCC infrastructure, regional networks, and extended cloud environments.
        </p>
        
        {/* CTA Button */}
        <Link 
          href="#contact" 
          className="bg-[#f26522] hover:bg-[#d9531e] text-white font-bold py-3.5 px-8 rounded-[4px] shadow-[0_4px_20px_rgba(242,101,34,0.3)] transition-all flex items-center gap-2 text-[14px] md:text-[15px] tracking-wide"
        >
          Secure Your Global Operations Today
        </Link>
        
      </div>
    </section>
  );
}
