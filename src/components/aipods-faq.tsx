"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function AiPodsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly is an AI Pod?",
      answer: "An AI Pod is a self-contained, cross-functional execution team consisting of AI/ML engineers, data scientists, and domain experts dedicated to delivering your AI initiatives."
    },
    {
      question: "How AI Pods differ from traditional outsourcing/staff augmentation?",
      answer: "Unlike traditional staff augmentation which provides temporary individual roles, AI Pods are cohesive units taking full accountability for outcomes, timelines, and end-to-end delivery."
    },
    {
      question: "How quickly can we expect to see production results from AI Pods?",
      answer: "Our typical engagement model delivers tangible production results and live ROI-linked use cases within 6 to 8 weeks, depending on the complexity of your systems."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 w-full">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-2xl md:text-[28px] font-bold text-text mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 mb-8">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-[#F3F4F6] rounded-[6px] bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors"
            >
              <button 
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFaq(idx)}
              >
                <span className="text-[14px] md:text-[15px] font-medium text-text">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100 pb-5 px-5' : 'max-h-0 opacity-0 overflow-hidden px-5'
                }`}
              >
                <p className="text-muted text-[14px] md:text-[15px] leading-relaxed text-left border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-left w-full pl-1">
          <button className="text-accent-gold font-bold text-[13px] md:text-[14px] hover:underline transition-all">
            Load More FAQs
          </button>
        </div>
      </div>
    </section>
  );
}
