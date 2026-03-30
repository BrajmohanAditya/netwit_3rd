"use client";

import { Database, HeartPulse, Cloud, BarChart2 } from "lucide-react";
import Link from "next/link";

export function AzureMigrationIndustries() {
  return (
    <section className="bg-surface-2 py-24 px-6 w-full">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-3xl md:text-[32px] font-bold text-text mb-12 tracking-tight">
          Industries We Serve
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto text-left">
          {/* Healthcare Card */}
          <div className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-primary/10 flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-lg h-full">
            <div className="w-[50px] h-[50px] bg-primary/5 rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 relative">
              <Database className="w-[20px] h-[20px] absolute text-primary" strokeWidth={1.5} />
              <div className="absolute top-[28px] left-[26px] bg-white border border-primary/10 rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-sm">
                <HeartPulse className="w-[12px] h-[12px] text-primary" strokeWidth={2.5} />
              </div>
            </div>
            
            <h3 className="text-[17.5px] font-bold text-text mb-4">
              Azure Migration for Healthcare Organizations
            </h3>
            
            <p className="text-[13.5px] text-muted mb-8 leading-[1.6]">
              Healthcare migrations demand compliance, security, and reliability. We migrate healthcare systems to Azure with a focus on data protection and operational continuity.
            </p>
            
            <Link href="#" className="text-primary font-bold text-[13.5px] hover:underline mt-auto flex items-center gap-1.5 transition-colors group">
              Explore Azure Migration for Healthcare <span className="text-[16px] font-normal leading-none group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* SaaS Card */}
          <div className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-primary/10 flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-lg h-full">
            <div className="w-[50px] h-[50px] bg-primary/5 rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 relative">
              <Cloud className="w-[22px] h-[22px] absolute text-primary" strokeWidth={1.5} />
              <div className="absolute top-[28px] left-[26px] bg-white border border-primary/10 rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-sm">
                <BarChart2 className="w-[12px] h-[12px] text-primary" strokeWidth={2.5} />
              </div>
            </div>
            
            <h3 className="text-[17.5px] font-bold text-text mb-4">
              Azure Migration for SaaS Companies
            </h3>
            
            <p className="text-[13.5px] text-muted mb-8 leading-[1.6]">
              SaaS platforms require scalability, uptime, and cost control from day one. We help SaaS teams migrate to Azure without disrupting product velocity or customer experience.
            </p>
            
            <Link href="#" className="text-primary font-bold text-[13.5px] hover:underline mt-auto flex items-center gap-1.5 transition-colors group">
              Explore Azure Migration for SaaS <span className="text-[16px] font-normal leading-none group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
