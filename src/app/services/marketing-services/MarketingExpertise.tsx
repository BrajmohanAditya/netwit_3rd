"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function MarketingExpertise() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Centered Section */}
        <div className="text-center max-w-[900px] mx-auto mb-24">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] leading-snug mb-6">
            <span className="text-primary">Deliver the Right Messaging, </span>
            at the Right Time, in the Right Place, to the Right People
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#4b5563] leading-[1.6]">
            Our AI-powered marketing solutions ensure that your brand&apos;s messaging resonates with your target audience. We leverage AI to optimize content distribution across channels, engaging prospects at every stage of their journey.
          </p>
        </div>

        {/* Two Column Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[32px] md:text-[40px] font-bold text-primary leading-tight mb-6">
              Trusted SaaS Marketing <br className="hidden lg:block"/>
              Expertise
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#4b5563] mb-8 leading-[1.6]">
              Success in AI-powered SaaS marketing services requires a deep understanding of the industry&apos;s unique challenges, customer behaviors, and evolving trends. With years of experience and AI-enhanced insights, our experts craft B2B SaaS marketing solutions that align with your business goals.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0 mt-[2px]" />
                <span className="text-[15px] md:text-[16px] text-[#4b5563] font-medium">AI-driven Lead Generation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0 mt-[2px]" />
                <span className="text-[15px] md:text-[16px] text-[#4b5563] font-medium">Lower Customer Acquisition Costs with Predictive AI</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0 mt-[2px]" />
                <span className="text-[15px] md:text-[16px] text-[#4b5563] font-medium">Enhanced Customer Longevity</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0 mt-[2px]" />
                <span className="text-[15px] md:text-[16px] text-[#4b5563] font-medium">Increased Brand Awareness</span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Trusted SaaS Marketing Expertise Team"
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
