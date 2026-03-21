"use client";

import { Check, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AiPodsComparison() {
  const idealFor = [
    "Organizations moving AI from pilot to production",
    "CTOs, CIOs, CDOs seeking delivery outcomes",
    "Teams needing speed without long-term hiring",
    "Enterprises requiring governance and compliance"
  ];

  const notIdealFor = [
    "Research-only AI experiments",
    "One-off demos or novelty builds",
    "Teams without production intent",
    "AI initiatives without clear ownership"
  ];

  const successStories = [
    {
      image: "/images/saas_ai.png",
      tag: "AI Pod - SaaS",
      title: "How a SaaS Company Achieved Production-Ready AI in 90 Days with Netsmartz AI Pods"
    },
    {
      image: "/images/manufacturing_ai.png",
      tag: "AI Pod - Manufacturing",
      title: "Netsmartz AI Pods Helped an Automotive Parts Manufacturer Avoid Downtime"
    },
    {
      image: "/images/healthcare_ai.png",
      tag: "AI Pod - Healthcare",
      title: "How a Healthcare Network Accelerated Clinical Trial Recruitment with Dedicated AI Pods"
    }
  ];

  return (
    <div className="w-full bg-white pb-20">
      {/* Target Audience Section */}
      <section className="pt-20 px-6 max-w-[1240px] mx-auto text-center">
        <h2 className="text-2xl md:text-[28px] font-bold text-text mb-4">
          Who AI Pods Are (and Aren't) For
        </h2>
        <div className="inline-block px-4 py-1.5 rounded-full mb-12 font-semibold text-xs md:text-sm bg-surface-2 border border-gray-200 text-text">
          Built for Teams Ready to Execute
        </div>

        <div className="max-w-[1000px] mx-auto border border-gray-200 rounded-[12px] bg-white overflow-hidden shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Ideal For Column */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="text-accent-gold font-bold text-lg mb-8 tracking-tight">
                Ideal For
              </h3>
              <div className="space-y-4">
                {idealFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-surface-2 py-3 px-4 rounded-[6px]">
                    <Check className="w-5 h-5 text-success stroke-[2.5] flex-shrink-0" />
                    <span className="text-sm md:text-[15px] font-medium text-text text-left leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Ideal For Column */}
            <div className="p-8 md:p-10">
              <h3 className="text-accent-gold font-bold text-lg mb-8 tracking-tight">
                Not Ideal For
              </h3>
              <div className="space-y-4">
                {notIdealFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#FFF1E5] py-3 px-4 rounded-[6px]">
                    <X className="w-5 h-5 text-danger stroke-[2.5] flex-shrink-0" />
                    <span className="text-sm md:text-[15px] font-medium text-text text-left leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Success Story Section */}
      <section className="py-24 max-w-[1240px] mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-[28px] font-bold text-text mb-12">
          From AI Pilot to Production: A Proven Success Story
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto mb-16">
          {successStories.map((story, idx) => (
            <div key={idx} className="bg-white border rounded-xl border-gray-200 overflow-hidden text-left flex flex-col hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image 
                  src={story.image} 
                  alt={story.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block w-max bg-surface-2 border border-gray-200 text-text font-bold text-[10px] md:text-xs py-1.5 px-3 rounded-full mb-4">
                  {story.tag}
                </span>
                <p className="text-text font-medium text-[15px] md:text-base leading-snug">
                  {story.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/success-stories"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[4px] font-bold transition-all bg-accent-gold text-white hover:bg-accent-gold/90 shadow-md text-sm md:text-base"
        >
          Explore All AI Pod Success Stories <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
