"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export function AzureMigrationValue() {
  return (
    <section className="bg-white py-24 px-6 w-full border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-[34px] font-bold text-text mb-6 tracking-tight">
            The Business Value of Azure Cloud Transformation
          </h2>
          
          <div className="bg-[#F5F5F5] p-5 rounded-md mb-8 border border-gray-100">
            <p className="font-bold text-text text-[15px] leading-snug italic">
              <span className="text-primary text-[26px] mr-1">80%</span> of organizations believe outdated technology is holding back their progress and innovation efforts.
            </p>
          </div>
          
          <p className="text-[15px] text-muted mb-8 leading-relaxed">
            Cloud transformation means more than migrating IT systems. It requires rethinking how technology supports business objectives and how a cloud-first operating model enables resilience, agility, and competitiveness through proven Azure migration solutions.
          </p>
          
          <p className="text-[14px] text-text font-semibold mb-5">
            A successful migration to Microsoft Azure focuses on:
          </p>
          
          <ul className="space-y-3 mb-8">
            {[
              "Establishing clear business and modernization goals",
              "Identifying priority business domains for transformation",
              "Defining the right migration strategy and execution roadmap"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white border border-gray-100 p-3.5 rounded-[4px] shadow-sm">
                <Check className="w-4 h-4 text-primary stroke-[3]" />
                <span className="text-[14px] text-text font-medium">{item}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-[14px] text-muted leading-relaxed">
            By following this approach, organizations unlock cloud scale, performance, cost optimization, and AI readiness—while maintaining control over security, governance, and long-term outcomes as business demands evolve across azure cloud migration services.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative min-h-[500px]">
          <div className="absolute inset-0 rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#0A192F]">
            <Image 
              src="/images/azure_value_img.png" 
              alt="Azure Cloud Transformation Model" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
