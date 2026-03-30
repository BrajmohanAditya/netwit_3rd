"use client";

import { Cloud, Factory, HeartPulse } from "lucide-react";
import Link from "next/link";

export function MdrIndustries() {
  return (
    <section className="bg-surface-2 py-24 px-6 w-full flex flex-col items-center">
      
      {/* Top Banner section */}
      <div className="text-center mb-24 max-w-[800px] w-full">
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#2d2d2d] mb-4 tracking-tight leading-[1.3]">
          Understanding Detection & Response Risk in Modern Environments
        </h2>
        <p className="text-[14px] text-[#666] mb-8 font-medium">
          A concise executive brief for senior leadership
        </p>
        <button className="bg-primary hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-[4px] text-[15px] transition-colors shadow-sm tracking-wide">
          Download the Executive Brief
        </button>
      </div>

      {/* Industries grid */}
      <div className="max-w-[1100px] w-full text-center">
        <h3 className="text-[26px] md:text-[30px] font-bold text-[#2d2d2d] mb-12 tracking-tight">
          MDR Services Tailored by Industry
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* SaaS Card */}
          <div className="bg-white rounded-[10px] p-8 md:p-10 shadow-sm border border-primary/10 flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-md h-full">
            <div className="w-[46px] h-[46px] bg-primary/5 rounded-[8px] flex items-center justify-center text-primary mb-6 border border-primary/20">
              <Cloud className="w-[20px] h-[20px] text-primary" strokeWidth={1.5} />
            </div>
            <h4 className="text-[17.5px] font-bold text-[#222] mb-4 leading-snug tracking-tight">
              Managed Detection & Response for SaaS
            </h4>
            <p className="text-[13.5px] text-[#555] mb-8 leading-[1.6]">
              SaaS environments face constant exposure across cloud workloads, identities, and APIs. Our MDR helps SaaS teams detect and respond to threats without slowing product delivery or growth.
            </p>
            <Link href="#" className="mt-auto text-primary font-semibold text-[13.5px] hover:underline flex items-center gap-1.5 transition-colors">
              Explore MDR for SaaS <span className="text-[17px] font-normal leading-none">&rarr;</span>
            </Link>
          </div>

          {/* Manufacturing Card */}
          <div className="bg-white rounded-[10px] p-8 md:p-10 shadow-sm border border-primary/10 flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-md h-full">
            <div className="w-[46px] h-[46px] bg-primary/5 rounded-[8px] flex items-center justify-center text-primary mb-6 border border-primary/20">
              <Factory className="w-[20px] h-[20px] text-primary" strokeWidth={1.5} />
            </div>
            <h4 className="text-[17.5px] font-bold text-[#222] mb-4 leading-snug tracking-tight">
              Managed Detection & Response for Manufacturing
            </h4>
            <p className="text-[13.5px] text-[#555] mb-8 leading-[1.6]">
              Manufacturing operations require continuous uptime across IT and OT environments. Our MDR services protect production systems, supply chains, and industrial assets from evolving cyber threats.
            </p>
            <Link href="#" className="mt-auto text-primary font-semibold text-[13.5px] hover:underline flex items-center gap-1.5 transition-colors">
              Explore MDR for Manufacturing <span className="text-[17px] font-normal leading-none">&rarr;</span>
            </Link>
          </div>

          {/* Healthcare Card */}
          <div className="bg-white rounded-[10px] p-8 md:p-10 shadow-sm border border-primary/10 flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-md h-full">
            <div className="w-[46px] h-[46px] bg-primary/5 rounded-[8px] flex items-center justify-center text-primary mb-6 border border-primary/20">
              <HeartPulse className="w-[20px] h-[20px] text-primary" strokeWidth={1.5} />
            </div>
            <h4 className="text-[17.5px] font-bold text-[#222] mb-4 leading-snug tracking-tight">
              Managed Detection & Response for Healthcare
            </h4>
            <p className="text-[13.5px] text-[#555] mb-8 leading-[1.6]">
              Healthcare operations require continuous uptime across IT and clinical environments. Our MDR services protect patient systems, care platforms, and medical assets from evolving cyber threats.
            </p>
            <Link href="#" className="mt-auto text-primary font-semibold text-[13.5px] hover:underline flex items-center gap-1.5 transition-colors">
              Explore MDR for Healthcare <span className="text-[17px] font-normal leading-none">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
