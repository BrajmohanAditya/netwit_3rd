"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export function DataPodsContent() {
  return (
    <>
      {/* 1. Why AI ROI Breaks at Scale */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-[34px] font-bold text-text mb-14 tracking-tight">
            Why AI ROI Breaks at Scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              "Leaders hesitate to act on insights they don't fully trust",
              "AI outputs become difficult to explain, govern, or audit",
              "Risk increases as AI moves closer to core business operations"
            ].map((text, idx) => (
              <div 
                key={idx} 
                className="bg-accent-gold rounded-md p-8 flex items-center justify-center text-center shadow-lg min-h-[140px]"
              >
                <p className="text-white font-medium text-[15px] md:text-[17px] leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto bg-[#FFF4EB] border-x-[3px] border-accent-gold rounded-sm shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] py-5 px-6 max-w-[850px]">
            <p className="text-[14px] md:text-[15px] text-text font-bold">
              At this stage, AI stops being a technical initiative and becomes an executive risk decision
            </p>
          </div>
        </div>
      </section>

      {/* 2. AI ROI Starts with Data Reliability */}
      <section className="bg-surface-2 py-16 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
            AI ROI Starts with Data Reliability
          </h2>
          <p className="text-[15px] md:text-[16px] text-muted mb-8 leading-relaxed font-medium">
            A concise executive brief on fixing data foundations, restoring trust in analytics, and scaling AI safely in 90 days.
          </p>
          <button className="bg-accent-gold hover:bg-accent-gold/90 text-white font-bold py-3.5 px-8 rounded-[4px] text-[15px] transition-colors shadow-md">
            Download the Executive Brief
          </button>
        </div>
      </section>

      {/* 3. The Solution: Data Pods */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1240px] mx-auto border border-gray-100 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14 md:pr-10 border-r border-gray-100 flex flex-col justify-center">
              <h2 className="text-[28px] md:text-3xl font-bold text-text mb-4">
                The Solution: Data Pods
              </h2>
              <p className="text-[14px] md:text-[15px] text-muted mb-8 leading-relaxed">
                Data Pods are 90-day, outcome-driven delivery units designed to fix data foundations before scaling AI and advanced analytics. They are built for organizations that need clarity, control, and results, not open-ended data programs.
              </p>
              
              <h3 className="font-bold text-text text-[15px] mb-4">
                What Data Pods Do:
              </h3>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Stabilize data pipelines across core systems",
                  "Enforce data quality, lineage, access control, and governance by design",
                  "Deliver production-ready analytics and AI use cases (not prototypes)",
                  "Tie every outcome to measurable business impact"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-[#f5f5f5] p-3 rounded-[4px]">
                    <Check className="w-4 h-4 text-accent-gold stroke-[3] mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] md:text-[14px] font-bold text-text">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="inline-block bg-[#FFF4EB] py-3 px-5 rounded-[4px] w-max font-bold text-text text-[14px]">
                Delivered in 90 days - not 12 months.
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <div className="absolute inset-4 rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-[#161a25]">
                <Image 
                  src="/images/data_pods_solution.png" 
                  alt="Data Solution Framework" 
                  fill 
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Use Cases We Enable */}
      <section className="bg-white pb-24 px-6 border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl md:text-[32px] font-bold text-text mb-4">Use Cases We Enable</h2>
          <p className="text-[15px] md:text-[16px] text-muted mb-12">
            Once data foundations are reliable, organizations unlock AI and analytics use cases such as:
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 max-w-[1100px] mx-auto mb-10">
            {[
              "Predictive analytics built on trusted, governed datasets",
              "Revenue, cost, or efficiency optimization using reconciled data",
              "Customer, user, or operational insights leaders actually trust",
              "Forecasting and decision intelligence grounded in consistent pipelines",
              "AI models that can move safely into production"
            ].map((text, idx) => (
              <div 
                key={idx} 
                className="bg-[#f06f12] rounded-[4px] p-5 flex items-center justify-center text-center shadow-md min-h-[140px] hover:bg-[#d5610e] transition-colors"
              >
                <p className="text-white font-medium text-[13px] md:text-[14px] leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto bg-[#FFF4EB] border-y-[3px] border-[#f06f12] rounded-sm py-5 px-6 max-w-[650px] shadow-sm">
            <p className="text-[14px] md:text-[15px] text-text font-bold italic tracking-wide">
              These are production deployments, not experiments.
            </p>
          </div>
        </div>
      </section>

      {/* 5. What You Own After 90 Days */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1240px] mx-auto border border-gray-100 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center">
              <h2 className="text-[28px] md:text-3xl font-bold text-text mb-4">
                What You Own After 90 Days
              </h2>
              <p className="text-[14px] md:text-[15px] text-muted mb-8 leading-relaxed">
                At the end of a Data Pod engagement, you own:
              </p>
              
              <ul className="space-y-3">
                {[
                  "A production-ready data architecture blueprint",
                  "Governed, documented, and auditable data pipelines",
                  "Three AI or advanced analytics use cases running in production",
                  "ROI models tied to measurable business outcomes",
                  "Dashboards showing before-and-after impact"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-[#f5f5f5] p-3 md:p-4 rounded-[4px]">
                    <Check className="w-5 h-5 text-accent-gold stroke-[3] mt-0 flex-shrink-0" />
                    <span className="text-[13px] md:text-[14px] font-bold text-text leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[400px]">
              <div className="absolute inset-5 md:inset-8 rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-white">
                <Image 
                  src="/images/data_pods_outcome.png" 
                  alt="Business Growth Outcomes" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
