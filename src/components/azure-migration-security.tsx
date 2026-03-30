"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export function AzureMigrationSecurity() {
  return (
    <section className="bg-white py-24 px-6 w-full border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-[32px] font-bold text-text mb-4 tracking-tight">
            Built-In Security, Compliance, and Governance
          </h2>
          
          <p className="text-[14.5px] text-muted mb-8 leading-relaxed">
            Our Azure migration services are designed to be secure by default and audit-ready, including complex VMware to azure migration environments:
          </p>
          
          <ul className="space-y-3.5">
            {[
              "Identity and access management aligned to Zero Trust principles",
              "Network isolation, encryption, and secure connectivity",
              "Continuous threat detection and posture management",
              "Policy-driven governance to control cost, access, and configuration drift",
              "Operational readiness for post-migration incident response and compliance audits"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white border border-gray-100 p-3.5 rounded-[6px] shadow-sm transition-shadow hover:shadow-md">
                <Check className="w-[18px] h-[18px] text-primary stroke-[3] shrink-0" />
                <span className="text-[14px] text-text font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative min-h-[480px]">
          <div className="absolute inset-0 rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#0A192F]">
            <Image 
              src="/images/azure_security_img.png" 
              alt="Azure Built-In Security" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
