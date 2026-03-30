"use client";

import { Database, HeartPulse, Cloud, BarChart2 } from "lucide-react";
import Link from "next/link";

export function DataPodsIndustries() {
  return (
    <section className="bg-surface-2 py-24 px-6 w-full">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-3xl md:text-[32px] font-bold text-text mb-12">
          Data Pods Built for Industry-Specific Outcomes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto text-left">
          {/* Healthcare Card */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-primary/10 flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-lg h-full">
            <div className="w-12 h-12 bg-primary/5 rounded-lg border border-primary/20 shadow-sm flex items-center justify-center text-primary mb-6 relative">
              <Database className="w-[22px] h-[22px] absolute text-primary" strokeWidth={1.5} />
              <div className="absolute bottom-[-3px] right-[-3px] bg-primary/5 border border-primary/20 rounded-full w-[22px] h-[22px] flex items-center justify-center shadow-sm">
                <HeartPulse className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
              </div>
            </div>
            
            <h3 className="text-[18px] md:text-[20px] font-bold text-text mb-4">
              Data Pods for Healthcare Organizations
            </h3>
            
            <p className="text-[14px] md:text-[15px] text-muted mb-8 leading-relaxed">
              Healthcare AI fails when data quality and governance break down. Our Healthcare Data Pods stabilize clinical and operational data so analytics and AI can scale securely.
            </p>
            
            <Link href="#" className="text-primary font-bold text-[14px] hover:underline mt-auto flex items-center gap-1.5 transition-colors group">
              Explore Data Pods for Healthcare <span className="text-[18px] font-normal leading-none group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* SaaS Card */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-primary/10 flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-lg h-full">
            <div className="w-12 h-12 bg-primary/5 rounded-lg border border-primary/20 shadow-sm flex items-center justify-center text-primary mb-6 relative">
              <Cloud className="w-[24px] h-[24px] absolute text-primary" strokeWidth={1.5} />
              <div className="absolute bottom-[-3px] right-[-3px] bg-primary/5 border border-primary/20 rounded-full w-[22px] h-[22px] flex items-center justify-center shadow-sm">
                <BarChart2 className="w-3 h-3 text-primary" strokeWidth={2.5} />
              </div>
            </div>
            
            <h3 className="text-[18px] md:text-[20px] font-bold text-text mb-4">
              Data Pods for SaaS Companies
            </h3>
            
            <p className="text-[14px] md:text-[15px] text-muted mb-8 leading-relaxed">
              SaaS AI underperforms when product and revenue data aren't production-ready. Our SaaS Data Pods fix data reliability, so churn, pricing, and growth analytics deliver real ROI.
            </p>
            
            <Link href="#" className="text-primary font-bold text-[14px] hover:underline mt-auto flex items-center gap-1.5 transition-colors group">
              Explore Data Pods for SaaS <span className="text-[18px] font-normal leading-none group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
