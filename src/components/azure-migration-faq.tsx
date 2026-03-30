"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function AzureMigrationFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Azure migration and why does my business need it?",
      answer: "Azure migration is the process of moving your digital assets—including data, workloads, applications, and IT infrastructure—from on-premises environments or other cloud providers into Microsoft Azure. Your business needs it to unlock massive scalability, optimize operational costs over legacy setups, drastically improve disaster recovery, and gain immediate access to AI-ready security and governance tools."
    },
    {
      question: "How long does an Azure migration project typically take?",
      answer: "The timeline for an Azure migration varies significantly depending on the size of your IT estate, the complexity of your legacy applications, and the chosen migration path (Rehost vs. Refactor). A standard lift-and-shift of a moderately sized environment can typically take 4-8 weeks, whereas a full modernization and refactoring project of enterprise-level infrastructure can take several months. We begin with an assessment to map out exact timelines."
    },
    {
      question: "Which databases can be migrated to Azure?",
      answer: "Over Microsoft Azure, nearly all major database ecosystems are supported for seamless migration. Whether you are running SQL Server, PostgreSQL, MySQL, MariaDB, MongoDB, or Oracle, Azure provides managed database instances that optimize their performance post-migration, leveraging tools like Azure Database Migration Service for near-zero downtime."
    }
  ];

  return (
    <section className="bg-[#fcfdfd] py-24 px-6 w-full pb-32">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[26px] md:text-[32px] font-bold text-center text-text mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-[6px] overflow-hidden bg-white shadow-sm transition-all hover:border-gray-300"
            >
              <button
                className="w-full px-6 py-[22px] text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-[14.5px] text-[#444] tracking-wide leading-tight px-1">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-[18px] h-[18px] text-gray-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  strokeWidth={2}
                />
              </button>
              
              <div 
                className={`px-7 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="w-full h-[1px] bg-gray-100 mb-5"></div>
                <p className="text-muted text-[13.5px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-left">
          <button className="text-primary font-bold text-[13px] hover:underline transition-all tracking-wide">
            Load More FAQs
          </button>
        </div>
      </div>
    </section>
  );
}
