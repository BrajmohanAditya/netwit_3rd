import React from "react";
import Image from "next/image";

const challenges = [
  {
    question: "Don't have enough in-house accountants?",
    title: "Customized Teams for AI Augmented Accounting Support",
    description: "Access skilled professionals via an AI-powered service model to augment your accounting on demand and scale up resource utilization quickly, rather than increasing internal headcount unnecessarily."
  },
  {
    question: "Can't cope with daily bookkeeping?",
    title: "AI-driven Day-to-Day Bookkeeping and Monthly Reports",
    description: "From general ledger management to reconciliation and reporting, our intelligent systems automate routine tasks and unlock real-time actionable insights effortlessly."
  },
  {
    question: "Not able to keep up with scaling requirements?",
    title: "On-demand AI-Optimized Accounting Support",
    description: "Let us handle your back-office financial tasks comprehensively with startup agility, enterprise-level scale, extra efficiency, and error-proof bookkeeping automation to match your pace."
  }
];

export default function AccountingChallenges() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827]">
            AI Tools to <span className="text-[#ea580c]">Solve Your Bookkeeping</span> & Accounting Challenges
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-[45%] rounded-lg overflow-hidden relative min-h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" 
              alt="Accounting work on laptop" 
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side: Accordion-like list */}
          <div className="w-full lg:w-[55%] flex flex-col gap-5 border lg:border-none p-5 lg:p-0 rounded-lg lg:rounded-none border-gray-200 shadow-sm lg:shadow-none">
            {challenges.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col pb-6 ${idx !== challenges.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <h4 className="text-[15px] font-bold text-[#ea580c] mb-2 uppercase tracking-wide">
                  {item.question}
                </h4>
                <h3 className="text-[16px] md:text-[17px] font-bold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#4b5563]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
