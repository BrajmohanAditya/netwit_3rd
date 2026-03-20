"use client";

import React, { useState } from "react";
import Image from "next/image";

const servicesData = [
  {
    id: "content",
    title: "AI-Driven Content Marketing",
    items: [
      "AI-Optimized Content Strategy and Scaling",
      "High-Quality Blog and Article Writing",
      "Interactive Infographics and Visual Content",
      "Executive Whitepapers and eBooks",
      "Content Performance Metrics and AI Analytics"
    ],
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "social",
    title: "Social Media and PR",
    items: [
      "Monthly Calendars and Organic Social Media Outreach",
      "LinkedIn Profile Optimization",
      "Thought Leadership Profiling with AI Sentiment and Influence Analysis",
      "Customer Success Stories and Award Nominations",
      "Press Releases and Authored Articles using AI Content Tools",
      "Media Kit"
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "seo",
    title: "SEO",
    items: [
      "Comprehensive AI-Assisted Website Audit",
      "On-Page Content and Meta Optimization",
      "Technical SEO and Core Web Vitals Enhancements",
      "Advanced Keyword Research and Gap Analysis",
      "Local and Global SEO Link Building Strategies"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "lead",
    title: "Lead Generation",
    items: [
      "Targeted Account-Based Marketing (ABM)",
      "Automated Email Marketing Campaigns",
      "Data-Driven PPC and Paid Advertising",
      "High-Converting Landing Page Optimization",
      "Intelligent Lead Nurturing Workflows"
    ],
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ComprehensiveMarketing() {
  const [activeTab, setActiveTab] = useState("social");

  const activeData = servicesData.find(s => s.id === activeTab) || servicesData[1];

  return (
    <section className="py-20 bg-[#fefaf6]">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111827] mb-4">
            Comprehensive <span className="text-[#ea580c]">Marketing Services</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.7] max-w-[850px] mx-auto">
            We offer a full suite of AI-integrated B2B SaaS marketing strategies tailored for SaaS businesses, including content marketing, SEO, paid advertising, and social media. By blending innovation, data intelligence, and strategic execution, we empower brands to achieve sustainable growth through our SaaS marketing services.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-14 max-w-[1050px] mx-auto items-stretch">
          
          {/* Left Tabs Sidebar */}
          <div className="flex flex-col gap-4 w-full md:w-[280px] shrink-0 border-r-0 md:border-r border-gray-300 pr-0 md:pr-10 py-2">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left px-5 py-4 rounded-xl font-bold text-[14px] transition-all duration-300 ${
                  activeTab === service.id
                    ? "bg-[#ea580c] text-white shadow-[0_8px_20px_rgba(234,88,12,0.3)]"
                    : "bg-white text-gray-800 shadow-[0_4px_15px_rgba(234,88,12,0.08)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.15)]"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Middle List */}
          <div className="flex-grow py-4 pl-0 md:pl-2">
            <ul className="flex flex-col gap-4">
              {activeData.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-[5px] h-[5px] bg-gray-500 rounded-sm shrink-0 mt-[8px]" />
                  <span className="text-[14px] md:text-[15px] text-[#4b5563] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 h-[220px] md:h-auto min-h-[250px] relative mt-6 md:mt-0">
            <Image
              src={activeData.image}
              alt={activeData.title}
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
