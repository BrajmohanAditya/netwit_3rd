import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function TrustedExpertise() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-[32px] md:text-[38px] font-bold text-primary mb-6 leading-[1.2]">
              Trusted Customer Support Expertise
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#4b5563] leading-[1.8] mb-8">
              With over two decades of experience in customer support services, and a global team of support professionals, Netwit is the partner of choice for businesses looking to elevate AI-powered customer support. Our AI customer service solutions are trusted by startups, enterprises, and everything in between.
            </p>
            
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[15px] md:text-[16px] text-[#4b5563] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#111827]" />
                Omnichannel Engagement
              </li>
              <li className="flex items-center gap-3 text-[15px] md:text-[16px] text-[#4b5563] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#111827]" />
                SLA-driven Performance
              </li>
              <li className="flex items-center gap-3 text-[15px] md:text-[16px] text-[#4b5563] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#111827]" />
                Scalable Teams & Flexible Models
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000" 
                alt="Customer Support Team" 
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
