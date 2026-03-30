"use client";

import Image from "next/image";
import { Crosshair, Link as LinkIcon, Clock, Moon } from "lucide-react";

export function MdrAssessment() {
  return (
    <section className="bg-[#fdfdfd] py-24 px-6 w-full border-t border-gray-100 flex flex-col items-center">
      
      {/* Top CTA */}
      <div className="text-center mb-16">
        <h2 className="text-[26px] md:text-[30px] font-bold text-[#2d2d2d] mb-6 tracking-tight">
          Identify Your Detection Blind Spots Before They&apos;re Exploited
        </h2>
        <button className="bg-primary hover:bg-primary-600 text-white font-medium py-3.5 px-8 rounded-[6px] text-[15px] transition-colors shadow-sm tracking-wide">
          Get Your Free Executive Threat Exposure Assessment
        </button>
        <p className="text-[12px] text-[#555] italic mt-3 font-medium">
          Limited availability each month
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Column Text */}
        <div className="w-full lg:w-1/2 p-0 md:pr-4 flex flex-col justify-center h-full min-h-[460px]">
          <h3 className="text-[24px] md:text-[26px] font-bold text-[#222] leading-[1.25] mb-5 tracking-tight">
            What the Executive Threat Exposure Assessment<br/> Delivers In
          </h3>
          <p className="text-[13.5px] text-[#666] mb-8 leading-[1.6]">
            In just 14 days, executives gain a realistic view of how exposed their environment actually is, without disruption. The assessment evaluates:
          </p>
          
          <ul className="space-y-2.5 mb-8">
            <li className="flex items-center gap-4 bg-[#F5F7F9] rounded-[6px] px-5 py-4 text-[13.5px] font-medium text-[#444]">
              <Crosshair className="w-5 h-5 text-primary stroke-[1.5] shrink-0" />
              How an attacker would realistically gain access
            </li>
            <li className="flex items-center gap-4 bg-[#F5F7F9] rounded-[6px] px-5 py-4 text-[13.5px] font-medium text-[#444]">
              <LinkIcon className="w-5 h-5 text-primary stroke-[1.5] shrink-0" />
              Where detection and response break down across identity, cloud, and endpoint environments
            </li>
            <li className="flex items-center gap-4 bg-[#F5F7F9] rounded-[6px] px-5 py-4 text-[13.5px] font-medium text-[#444]">
              <Clock className="w-5 h-5 text-primary stroke-[1.5] shrink-0" />
              Estimated Mean Time to Detection (MTTD)
            </li>
            <li className="flex items-center gap-4 bg-[#F5F7F9] rounded-[6px] px-5 py-4 text-[13.5px] font-medium text-[#444]">
              <Moon className="w-5 h-5 text-primary stroke-[1.5] shrink-0" />
              Overnight and after-hours monitoring gaps
            </li>
          </ul>

          <div className="bg-primary/5 p-5 shadow-sm border border-primary/20 border-l-[4px] border-l-primary">
            <p className="text-[13px] text-[#333] leading-[1.6]">
              <strong className="font-bold text-[#111]">Executive outcome:</strong> A clear understanding of what would be compromised first and how long it would take to know.
            </p>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="w-full lg:w-1/2 relative min-h-[460px] p-2 bg-white border border-gray-100 rounded-[8px] shadow-sm">
          <div className="absolute inset-2 rounded-[6px] overflow-hidden bg-black">
            <Image 
              src="/images/mdr_threat_img.png" 
              alt="Cyber Threat Detection" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
