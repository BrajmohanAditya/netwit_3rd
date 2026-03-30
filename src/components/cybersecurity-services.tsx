"use client";

import { useState } from "react";
import { Eye, ShieldAlert, Lock, Cloud, FileText, ChevronRight, Target, ShieldCheck, Zap, Activity } from "lucide-react";

const consultingServices = [
  {
    id: "mdr",
    title: "MDR (Monitoring, Detection, and Response)",
    rightTitle: "Managed Detection and Response",
    description: "Our 24/7 MDR services provide continuous monitoring and rapid response to security threats. We use advanced AI to detect anomalies and neutralize potential breaches before they impact your business.",
    icon: Activity
  },
  {
    id: "vulnerability",
    title: "Vulnerability Scanning and Penetration Testing",
    rightTitle: "Vulnerability Management",
    description: "Identify and address security weaknesses with our comprehensive scanning and penetration testing. We simulate real-world attacks to find vulnerabilities and provide actionable remediation plans.",
    icon: ShieldAlert
  },
  {
    id: "integration",
    title: "Security Integration and Access Management",
    rightTitle: "DevSecOps and Workload Security",
    description: "Our AI-first DevSecOps strategy integrates security into every stage of your development lifecycle. With automated policy enforcement, real-time threat detection, and intelligent access controls in AI SaaS cybersecurity, we protect your workloads, data, and users—ensuring secure collaboration and continuous compliance.",
    icon: ShieldCheck
  },
  {
    id: "cloud",
    title: "Robust Cloud and API Security",
    rightTitle: "Cloud and API Security",
    description: "Our AI-powered cloud and API security solutions safeguard every interaction. With continuous monitoring, anomaly detection, and secure API gateways, we ensure your SaaS platforms operate smoothly and securely without compromising performance or innovation.",
    icon: Cloud
  },
  {
    id: "compliance",
    title: "Compliance and Risk Management",
    rightTitle: "Compliance & Risk",
    description: "Stay ahead of regulatory requirements and manage risks effectively. We help you navigate complex compliance landscapes like GDPR, HIPAA, and SOC2, ensuring your business stays protected and compliant.",
    icon: FileText
  }
];

export function CybersecurityServices() {
  const [activeTab, setActiveTab] = useState(consultingServices[2].id); // Default to Security Integration as in image

  const activeService = consultingServices.find(s => s.id === activeTab) || consultingServices[3];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#2d2d2d] mb-16">
          Our Comprehensive AI Based Cybersecurity Consulting Services
        </h2>
        
        <div className="grid lg:grid-cols-[450px_1fr] gap-0 bg-primary/5 rounded-3xl overflow-hidden border border-primary/20">
          {/* Left Side - Navigation */}
          <div className="flex flex-col border-r border-primary/20">
            {consultingServices.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`relative flex items-center gap-4 px-8 py-8 text-left transition-all group ${
                    isActive 
                      ? "bg-primary text-white" 
                      : "text-[#666] hover:bg-primary/10"
                  } border-b border-primary/10 last:border-0`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${
                    isActive ? "text-white" : "text-primary"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-lg leading-tight pr-8">
                    {service.title}
                  </span>
                  
                  {isActive && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-primary rotate-45 z-10" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side - Content */}
          <div className="p-12 md:p-20 flex items-center">
            <div className="max-w-[500px]">
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">
                {activeService.rightTitle}
              </h3>
              <p className="text-lg text-[#666] leading-relaxed">
                {activeService.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 py-20 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#2d2d2d] mb-6">
            Protect Your Business-Critical Data with AI-Powered
            <br />
            Cybersecurity Solutions
          </h2>
          <p className="max-w-[1000px] mx-auto text-lg text-[#666] leading-relaxed">
            Our AI-based SaaS cybersecurity solutions ensure real-time threat detection and mitigation, safeguarding sensitive data from breaches. Harness machine learning and automation to protect your SaaS operations and maintain uninterrupted business continuity with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
