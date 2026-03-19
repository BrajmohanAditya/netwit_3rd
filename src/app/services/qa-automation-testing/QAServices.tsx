"use client";

import React from "react";
import { MonitorPlay, Zap, ShieldCheck, RefreshCw, Infinity as InfinityIcon } from "lucide-react";

const services = [
  {
    title: "Functional Testing",
    icon: <MonitorPlay className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
    description: "We validate every core feature of your application using AI-enabled test case generation and prioritization, ensuring it functions as expected in various real-world scenarios. This intelligent approach to software testing tools helps maintain a smooth and intuitive user experience."
  },
  {
    title: "Performance Testing",
    icon: <Zap className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
    description: "We assess your product's ability to handle different levels of usage, using anomaly detection and AI tools for software testing to ensure it remains fast, responsive, and stable even under peak traffic conditions."
  },
  {
    title: "Security Testing",
    icon: <ShieldCheck className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
    description: "Protecting user data is a top priority. We conduct rigorous security assessments to identify vulnerabilities, safeguard against potential threats, and prevent unauthorized access, ensuring your application remains safe and trustworthy."
  },
  {
    title: "Regression Testing",
    icon: <RefreshCw className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
    description: "Every update or new feature should integrate seamlessly without disrupting existing functionalities. We automate regression tests using self-healing AI scripts to ensure continuous stability and prevent unexpected issues in evolving software environments."
  },
  {
    title: "Continuous Integration & Delivery (CI/CD) Testing",
    icon: <InfinityIcon className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
    description: "We support modern development workflows with AI test automation at every stage of CI/CD. Our data-driven pipelines enable quicker deployments, early bug detection, and improved reliability helping you maintain a fast-paced development cycle."
  }
];

export default function QAServices() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#111827] mb-6">
            Comprehensive QA & Automation Testing Services
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#4b5563] leading-relaxed">
            We offer a full spectrum of software testing services tailor-made for SaaS products, enhanced with insights and AI-led automation, including:
          </p>
        </div>

        {/* Grid Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-gray-200 rounded-xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow ${idx > 2 ? 'lg:w-[calc(40%-16px)]' : ''}`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-[18px] font-bold text-[#ea580c] mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-[14px] leading-[1.8] text-[#4b5563]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
