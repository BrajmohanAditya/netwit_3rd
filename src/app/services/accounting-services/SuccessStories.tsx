"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    title: "Streamlining Integration of External Partnerships to Propel IT Product Development"
  },
  {
    image: "https://images.unsplash.com/photo-1576086208226-e137651a134a?q=80&w=600&auto=format&fit=crop",
    title: "Leading US-based Healthcare Provider Leverages Netwit to Develop Facial Analysis Software for PTSD and TBI Detection"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    title: "US-Based SaaS Company Leverages Netwit to Successfully Migrate from GCP to AWS"
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
    title: "The Complete Real Estate Transaction Management Solution"
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
    title: "Netwit Boosts a Fundraising Platform's User Experience Capabilities with AI Chatbot Integration"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    title: "Building a Flexible, Secure eCommerce Site for an Education Firm"
  }
];

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 400; // Expected card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden px-4 md:px-0">
      <div className="max-w-[1300px] mx-auto w-full relative">

        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14 relative px-4 md:px-16">
          <h2 className="text-[32px] md:text-[38px] font-medium text-[#111827] mb-3">
            Success Stories
          </h2>
          <p className="text-[#6b7280] text-[15px] max-w-2xl mx-auto">
            Discover how our cutting-edge and tailored solutions contributed to the growth of multiple businesses
          </p>

          {/* Navigation Arrows (Visible on desktop) */}
          <div className="hidden md:flex absolute right-4 top-1 gap-4">
            <button
              onClick={() => scroll("left")}
              className="text-gray-900 hover:text-gray-600 transition-colors focus:outline-none"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="text-gray-900 hover:text-gray-600 transition-colors focus:outline-none"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-end gap-4 mb-4 md:hidden px-4">
          <button
            onClick={() => scroll("left")}
            className="text-gray-900 hover:text-gray-600 transition-colors focus:outline-none"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="text-gray-900 hover:text-gray-600 transition-colors focus:outline-none"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-8 px-4 md:px-6 w-full no-scrollbar"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[300px] md:w-[380px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[200px] md:h-[220px] w-full border-b border-gray-100">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between bg-white">
                <h3 className="text-[17px] md:text-[18px] font-bold text-gray-900 leading-[1.4] mb-8 line-clamp-4">
                  {story.title}
                </h3>

                <Link
                  href="#contact"
                  className="inline-flex items-center text-[#e91e63] font-medium text-[15px] hover:text-[#c2185b] transition-colors gap-2 w-fit mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
