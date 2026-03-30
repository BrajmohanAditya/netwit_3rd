import React from "react";
import Image from "next/image";

const stats = [
  { value: "5+", label: "GCC Centers" },
  { value: "70+", label: "Customers" },
  { value: "2,000,000+", label: "SQFT Across" },
  { value: "25+", label: "Years of experience" },
];

const buildingCards = [
  {
    image: "https://images.unsplash.com/photo-1541884485741-f67f65fca1c6?auto=format&fit=crop&q=80&w=800",
    title: "Netwit Towers",
    description: "Netwit Towers redefines modern workspaces with a perfect blend of thoughtful amenities and cutting-edge infrastructure."
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    title: "Netwit House",
    description: "Located in the heart of Chandigarh Technology Park, our prime facility fosters a dynamic, collaborative environment, attracting top-tier returns."
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    title: "Sebiz Square",
    description: "Sebiz Square is a state-of-the-art commercial hub, blending modern workspaces with strategic amenities."
  },
  {
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=800",
    title: "Netwit Center",
    description: "Netwit Center, located in Mohali's IT hub, offers premium workspaces that combine comfort, productivity, and convenience."
  },
  {
    image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&q=80&w=800",
    title: "Netwit Square",
    description: "Netwit Square, our very campus in Mohali IT Park, offers premium facilities on one acre, redefining the corporate workspace experience."
  },
  {
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
    title: "AppWorx",
    description: "Netwit AppWorx, located in Panchkula, is a platform for innovation, collaboration, and business growth."
  }
];

export default function WhyPartner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header Section */}
        <div className="text-center max-w-[1000px] mx-auto mb-16">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] mb-6 leading-snug">
            Why Netwit is the Ideal Partner for Your GCC
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.7] max-w-[900px] mx-auto">
            Managing over 2 million SQFT globally and serving 70+ clients, we offer integrated PropTech, optimized workflows, and access to top-tier talent—transforming your GCC into a future-ready innovation engine through smart tech integration and risk mitigation.
          </p>
        </div>

        {/* Expertise & Badges Row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 mb-14 items-center max-w-[1050px] mx-auto">

          {/* Collage Simulation */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 h-[300px] md:h-[350px]">
            <div className="relative h-full rounded-tl-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1541884485741-f67f65fca1c6?auto=format&fit=crop&q=80&w=600" alt="Building 1" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 h-full">
              <div className="relative h-1/2 rounded-tr-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Building 2" fill className="object-cover" />
              </div>
              <div className="flex gap-2 h-1/2">
                <div className="relative w-1/2 h-full rounded-bl-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" alt="Building 3" fill className="object-cover" />
                </div>
                <div className="relative w-1/2 h-full rounded-br-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=400" alt="Building 4" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.65] mb-8">
              With 25+ years of expertise and 5+ strategic GCCs, Netwit helps enterprises build high-performing, sustainable global hubs. Our centers are PLATINUM LEED and WELL certified, backed by $100M+ in infrastructure investment, and designed for secure, efficient operations—supported by ISO 9001, ISO 27001, and CMMI Level 3 standards.
            </p>

            {/* Badges Simulators */}
            <div className="flex gap-4 md:gap-6 flex-wrap">
              <div className="flex flex-col items-center w-[70px]">
                <img src="https://img.icons8.com/color/48/000000/iso.png" alt="ISO 9001" className="w-[45px] h-[45px] object-contain mb-2" />
                <span className="text-[9px] text-center text-gray-500 font-bold leading-tight">ISO 9001<br />QUALITY<br />MANAGEMENT</span>
              </div>
              <div className="flex flex-col items-center w-[70px]">
                <img src="https://img.icons8.com/color/48/000000/shield.png" alt="ISO 27001" className="w-[45px] h-[45px] object-contain mb-2" />
                <span className="text-[9px] text-center text-gray-500 font-bold leading-tight">ISO 27001<br />INFORMATION<br />SECURITY</span>
              </div>
              <div className="flex flex-col items-center w-[70px]">
                <img src="https://img.icons8.com/color/48/000000/medal2.png" alt="CMMI" className="w-[45px] h-[45px] object-contain mb-2" />
                <span className="text-[9px] text-center text-gray-500 font-bold leading-tight">CMMI<br />SOFTWARE<br />DEVELOPMENT</span>
              </div>
              <div className="flex flex-col items-center w-[70px]">
                <img src="https://img.icons8.com/color/48/000000/verified-badge.png" alt="SOC" className="w-[45px] h-[45px] object-contain mb-2" />
                <span className="text-[9px] text-center text-gray-500 font-bold leading-tight">SOC SECURITY<br />OPERATIONS<br />CENTER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1050px] mx-auto mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="border border-gray-200 rounded-sm p-6 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow bg-white">
              <span className="text-[26px] md:text-[32px] font-bold text-primary mb-1">
                {stat.value}
              </span>
              <span className="text-[13px] md:text-[14px] text-gray-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Building Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 max-w-[1100px] mx-auto">
          {buildingCards.map((card, idx) => (
            <div key={idx} className="relative h-[250px] md:h-[280px] w-full overflow-hidden group cursor-pointer">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-left">
                <h3 className="text-primary font-bold text-[16px] md:text-[18px] mb-2">
                  {card.title}
                </h3>
                <p className="text-white/90 text-[11px] md:text-[12px] leading-[1.5] opacity-90 group-hover:opacity-100 transition-opacity">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
