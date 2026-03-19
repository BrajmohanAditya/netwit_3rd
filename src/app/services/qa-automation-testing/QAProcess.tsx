"use client";

import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Strategic Planning and Analysis",
    content: "We assess your SaaS product, identify risks, set test objectives, and select the best quality assurance automation tools for maximum efficiency."
  },
  {
    id: 2,
    title: "Automated & Manual Testing Integration",
    content: "We implement robust test automation frameworks while retaining strategic manual testing for complex elements, ensuring comprehensive coverage and rapid feedback."
  },
  {
    id: 3,
    title: "Continuous Testing & CI/CD Optimization",
    content: "We integrate automated test suites directly into your CI/CD pipelines enabling faster release cycles, immediate defect detection, and reliable software delivery."
  },
  {
    id: 4,
    title: "Ongoing Monitoring & Improvement",
    content: "We continuously monitor test results and system performance post-deployment, updating test scripts and leveraging AI insights to adapt to new features and maintain high quality."
  }
];

export default function QAProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] mb-6">
            <span className="text-[#ea580c]">A Reliable Process</span> for Reliable Results
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#4b5563] leading-relaxed max-w-4xl mx-auto">
            Our AI-driven testing services ensure that every aspect of your SaaS product is rigorously tested, refined, and
            optimized for seamless performance. Our proven AI test automation process includes:
          </p>
        </div>

        {/* Layout container */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
          
          {/* Sidebar Tabs */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center w-full px-5 py-4 text-left font-bold text-[14px] md:text-[15px] transition-all duration-300 shadow-sm border border-transparent ${
                  activeStep === step.id 
                    ? "bg-[#ea580c] text-white" 
                    : "bg-[#8a98a6] text-white hover:bg-[#6c7b8a] hover:shadow-md border-[#8a98a6]"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full md:flex-1 relative">
            <div className="bg-[#fff7ea] border border-[#fcefd8] h-full flex flex-col justify-center p-10 md:p-12 shadow-sm relative overflow-hidden transition-all duration-300">
              
              <div key={activeStep} className="animate-in fade-in slide-in-from-right-4 duration-500">
                <p className="text-[15px] md:text-[16px] leading-[1.8] font-medium text-[#4b5563]">
                  {steps.find(s => s.id === activeStep)?.content}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
