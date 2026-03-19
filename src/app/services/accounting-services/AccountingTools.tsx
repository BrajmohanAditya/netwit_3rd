"use client";

import React from "react";

const tools = [
  { name: "QuickBooks", domain: "quickbooks.intuit.com" },
  { name: "Zoho Books", domain: "zoho.com" },
  { name: "Xero", domain: "xero.com" },
  { name: "Bill.com", domain: "bill.com" },
  { name: "Dext", domain: "dext.com" },
  { name: "FreshBooks", domain: "freshbooks.com" },
  { name: "Wave", domain: "waveapps.com" },
  { name: "MYOB", domain: "myob.com" },
  { name: "Sage", domain: "sage.com" },
  { name: "NetSuite", domain: "netsuite.com" }
];

export default function AccountingTools() {
  return (
    <section className="py-20 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111827]">
            <span className="text-[#ea580c]">AI-Powered</span> Accounting Tools & SaaS Platforms
          </h2>
        </div>

        {/* Tools Container */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center p-3 hover:shadow-md transition-shadow"
              title={tool.name}
            >
              <img 
                src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`} 
                alt={`${tool.name} Logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div 
                className="hidden w-full h-full flex-col items-center justify-center text-center leading-tight"
                title={tool.name}
              >
                <span className="text-[10px] md:text-[12px] font-bold text-gray-500 line-clamp-2">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
