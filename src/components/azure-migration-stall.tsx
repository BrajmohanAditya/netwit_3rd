"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export function AzureMigrationStall() {
  return (
    <section className="bg-white py-24 px-6 w-full border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center">

        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative min-h-[450px]">
          <div className="absolute inset-0 rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#0d0700]">
            <Image 
              src="/images/azure_stall_img.png" 
              alt="Azure Migration Stall" 
              fill 
              className="object-cover opacity-90"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-[34px] font-bold text-text mb-6 tracking-tight">
            Why Azure Migrations Stall or Underperform?
          </h2>
          
          <p className="text-[15px] text-muted mb-8 leading-relaxed">
            Most Azure migrations fail to deliver ROI not because of the platform, but because of how migration decisions are made and executed; often without structured enterprise Azure migration services.
          </p>
          
          <ul className="space-y-4">
            {[
              "Security and identity gaps introduced during lift-and-shift migrations",
              "Limited visibility into compliance, misconfigurations, and threat exposure",
              "Cost overruns once workloads scale without governance guardrails",
              "Fragmented ownership after go-live, slowing optimization and response",
              "AI and analytics initiatives blocked by weak data security and access controls"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
                <Check className="w-[18px] h-[18px] text-primary stroke-[3] shrink-0" />
                <span className="text-[14px] text-text font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
