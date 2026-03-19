"use client";

import React from "react";
import Image from "next/image";

const toolsData = [
  {
    title: "Test Management",
    tools: [
      { name: "Jira", color: "bg-blue-50 text-blue-600" },
      { name: "Zephyr", color: "bg-teal-50 text-teal-600" },
      { name: "TestRail", color: "bg-green-50 text-green-600" },
    ]
  },
  {
    title: "Test Automation Frameworks",
    tools: [
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
      { name: "Cypress", color: "bg-gray-100 text-gray-800" },
      { name: "TestComplete", color: "bg-blue-50 text-blue-500" },
    ]
  },
  {
    title: "CI/CD Integration",
    tools: [
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
      { name: "CircleCI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg", fallbackColor: "bg-blue-50 text-blue-600" },
    ]
  },
  {
    title: "Cybersecurity",
    tools: [
      { name: "VeraCode", color: "bg-red-50 text-red-600" },
      { name: "Checkmarx", color: "bg-gray-100 text-gray-700" },
      { name: "Fortify", color: "bg-red-50 text-red-800" },
    ]
  },
  {
    title: "Functional/UI Testing",
    tools: [
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
      { name: "Katalon", color: "bg-green-50 text-green-600" },
      { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
    ]
  },
  {
    title: "Code Quality & Coverage",
    tools: [
      { name: "SonarQube", color: "bg-teal-50 text-teal-600" },
      { name: "JaCoCo", color: "bg-pink-50 text-pink-600" },
      { name: "Checkstyle", color: "bg-yellow-50 text-yellow-600" },
    ]
  },
  {
    title: "Performance Testing",
    tools: [
      { name: "JMeter", color: "bg-orange-50 text-orange-600" },
      { name: "LoadRunner", color: "bg-slate-100 text-slate-600" },
      { name: "Gatling", color: "bg-orange-50 text-orange-500" },
    ]
  },
  {
    title: "Security Testing",
    tools: [
      { name: "OWASP ZAP", color: "bg-blue-50 text-blue-600" },
      { name: "Burp Suite", color: "bg-orange-50 text-orange-600" },
      { name: "Acunetix", color: "bg-red-50 text-red-600" },
    ]
  },
  {
    title: "Cloud-Based Testing",
    tools: [
      { name: "Sauce Labs", color: "bg-red-50 text-red-600" },
      { name: "BrowserStack", color: "bg-orange-50 text-orange-600" },
      { name: "AWS Farm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    ]
  },
  {
    title: "API Testing",
    tools: [
      { name: "Postman", color: "bg-orange-50 text-orange-600" },
      { name: "SoapUI", color: "bg-green-50 text-green-600" },
      { name: "REST Assured", color: "bg-blue-50 text-blue-600" },
    ]
  },
  {
    title: "Mobile Testing",
    tools: [
      { name: "Appium", color: "bg-blue-50 text-blue-600" },
      { name: "Espresso", color: "bg-gray-100 text-gray-600" },
      { name: "XCUITest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" },
    ]
  }
];

export default function QAAutomationTools() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] mb-16">
          QA & Automation Testing <span className="text-[#ea580c]">Tools and Platforms</span>
        </h2>

        {/* Grid Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {toolsData.map((category, idx) => (
            <div 
              key={idx} 
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border border-gray-100 p-8 flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-[15px] font-bold text-[#111827] mb-8 text-center uppercase tracking-wide">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-6 w-full mt-auto">
                {category.tools.map((tool, tIdx) => (
                  <div key={tIdx} className="flex flex-col items-center gap-2">
                    {tool.icon ? (
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img 
                          src={tool.icon} 
                          alt={tool.name} 
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            // Fallback if devicon fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.nextElementSibling) {
                                (target.nextElementSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                        {/* Fallback box shown if image fails */}
                        <div className={`hidden w-10 h-10 rounded-lg flex items-center justify-center text-[18px] font-bold ${tool.fallbackColor || 'bg-gray-100 text-gray-600'}`}>
                          {tool.name.charAt(0)}
                        </div>
                      </div>
                    ) : (
                      <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-[20px] font-bold shadow-sm border border-black/5 ${tool.color}`}>
                        {tool.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-[12px] font-medium text-gray-500 whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
