"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "Migrating VM to Kubernetes for End-to-End Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 2,
    title: "End-to-end Testing and High-Volume Load Testing for E-commerce Industry",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 3,
    title: "Server Management and Performance Optimization for Retail Electronics Giant",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 4,
    title: "Upgrading Solution with New Features for a SaaS Company",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 5,
    title: "Refining B2C Sports Betting Platform for iGaming Industry",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 6,
    title: "Streamlining Integration of External Partnerships to Propel IT Product Development",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 7,
    title: "The Complete Real Estate Transaction Management Solution",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 8,
    title: "Netsmartz Boosts a Fundraising Platform's User Experience Capabilities with AI Chatbot Integration",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 9,
    title: "Building a Flexible, Secure eCommerce Site for an Education Firm",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 10,
    title: "AI-Driven Predictive Analytics Engine for a FinTech Startup",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 11,
    title: "Enhancing Cybersecurity Posture for a Global Healthcare Provider",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 12,
    title: "Automating Supply Chain Operations for a Logistics Leader",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    link: "#"
  }
];

export default function SuccessStoriesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[var(--color-bg)] w-full">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col mb-10 w-full relative">
          <div className="text-center w-full mx-auto">
            <h2 className="text-[30px] md:text-[36px] font-bold text-[#111827] dark:text-[var(--color-text)] mb-3 relative z-10">
              Success Stories
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#4b5563] dark:text-[var(--color-muted)] relative z-10 mb-2">
              Discover how our cutting-edge and tailored solutions contributed to the growth of multiple businesses
            </p>
          </div>

          {/* Navigation Arrows positioned absolutely for large screens, static for small */}
          <div className="md:absolute md:top-1 md:right-0 mt-6 md:mt-0 flex items-center justify-center gap-4 z-20">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Previous story"
            >
              <ArrowLeft className="w-6 h-6 stroke-[1.5]" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Next story"
            >
              <ArrowRight className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {stories.map((story) => (
            <div 
              key={story.id} 
              className="min-w-[320px] max-w-[320px] md:min-w-[370px] md:max-w-[370px] snap-start shrink-0 flex flex-col bg-white dark:bg-[#1f2937] rounded-md border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="w-full h-[180px] relative mt-1 mx-1 rounded-t-md overflow-hidden" style={{ width: 'calc(100% - 8px)' }}>
                <Image 
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover rounded-t-md"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[14px] font-bold text-[#111827] dark:text-white leading-relaxed mb-4 flex-1">
                  {story.title}
                </h3>
                <Link 
                  href={story.link}
                  className="text-[#e20b5b] dark:text-[#f43f5e] text-[13px] font-medium flex items-center gap-2 hover:underline mt-auto"
                >
                  Learn More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
