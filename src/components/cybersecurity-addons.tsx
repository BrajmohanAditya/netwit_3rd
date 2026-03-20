"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const addons = [
  {
    title: "Security and Penetration Testing",
    items: [
      "Network",
      "Cloud Infrastructure (AWS, Azure, GCP)",
      "Web App Firewalls",
      "Web App APIs",
      "Web Apps"
    ]
  },
  {
    title: "MDR for Google Workspace",
    items: [
      "Session hijacking",
      "Credential theft",
      "Malicious inbox and forwarding rules",
      "Account takeover",
      "Business email compromise (BEC)"
    ]
  },
  {
    title: "CloudDR",
    items: [
      "Monitoring AWS, Azure, and GCP environments",
      "Detection and response to cloud-native workloads",
      "Active threat response with CWP and CSPM integration",
      "Monitoring and response to Indicators of Attack (IOAs)"
    ]
  }
];

export function CybersecurityAddons() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative py-24 bg-[#0a2342] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
            style={{ backgroundImage: 'url(/images/cyber_lock_banner.png)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2342] via-transparent to-[#0a2342]"></div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
               {/* Image will be on the left/background as in image, text on the right */}
               <div className="w-full h-1" /> {/* Spacer */}
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                Is Your SaaS Infrastructure Truly Protected?
              </h2>
              <Link 
                href="#contact"
                className="inline-block bg-white text-[#2d2d2d] px-8 py-4 rounded-lg font-bold transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Run a Free AI-enhanced Security Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-on Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-[#2d2d2d] mb-16 max-w-3xl mx-auto">
            We go beyond standard MDR with our custom-built AI enabled cybersecurity
            solutions and add-on services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((addon, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-[#FFE8D6] shadow-sm flex flex-col items-start"
              >
                <h3 className="text-lg font-bold text-[#2d2d2d] mb-6 min-h-[50px]">
                  {addon.title}
                </h3>
                <ul className="space-y-4">
                  {addon.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[#666] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
