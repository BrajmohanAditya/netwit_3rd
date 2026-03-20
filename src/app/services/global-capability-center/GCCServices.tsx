"use client";

import React from "react";
import Image from "next/image";
import { Scale, Building2, Cpu, Users, HandCoins, ShieldCheck, Truck } from "lucide-react";

const servicesList = [
  {
    icon: <Scale className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    title: "Legal and regulatory compliance",
    description: "Before anything else, your GCC needs to be legally sound. This means making sure you're aligned with local rules—whether it's labor laws, tax requirements, or environmental regulations. It's about getting it right from day one so you can focus on growing confidently."
  },
  {
    icon: <Building2 className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    title: "Real estate",
    description: "Your team needs a home base—a well-located, thoughtfully designed space where they can collaborate, innovate, and thrive. A good office isn't just about desks; it's about creating an environment where people want to be."
  },
  {
    icon: <Cpu className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    title: "Technology",
    description: "Smooth collaboration starts with strong tech. That means fast internet, secure systems, video conferencing tools, and the software your team needs to do their best work—wherever they are."
  },
  {
    icon: <Users className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    title: "Human resources",
    description: "People are the heart of your GCC. From hiring and onboarding to supporting employee growth and well-being, a great HR team helps build a positive, high-performing workplace culture."
  },
  {
    icon: <HandCoins className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    title: "Financial support",
    description: "Every new center needs an investment—whether it's for rent, salaries, tools, or operations. Solid financial planning keeps your GCC running smoothly while you focus on impact."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    title: "Support services",
    description: "Behind every productive team is a well-run space. Services like cleaning, security, maintenance, and catering may seem small—but they make a big difference in creating a safe, comfortable, and functional work environment."
  },
  {
    icon: <Truck className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    title: "Transportation and logistics",
    description: "Depending on your operations, you might need support with moving people and materials—whether it's daily commutes, inter-office travel, or delivery of equipment and supplies."
  }
];

export default function GCCServices() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Content Area */}
          <div className="lg:col-span-8">
            
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#111827] mb-4 leading-snug pr-4">
              What Services Will Help You Build The Global Capability Center That Your Business Needs?
            </h2>
            
            <p className="text-[14px] md:text-[15px] text-[#4b5563] mb-6 leading-[1.6]">
              Setting up a Global Capability Centre (GCC) is an exciting step—but the kind of support you need can vary based on your goals. Whether you&apos;re building a center for tech, finance, R&amp;D, or customer support, the right mix of services can make all the difference.
            </p>
            
            <p className="text-[14px] md:text-[15px] text-[#4b5563] mb-10 font-medium">
              Common services to consider:
            </p>

            {/* Services List */}
            <div className="flex flex-col gap-8">
              {servicesList.map((service, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  {/* Icon */}
                  <div className="w-12 h-12 shrink-0 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
                    {service.icon}
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 className="text-[15px] md:text-[16px] font-bold text-[#111827] mb-1.5 inline-block mr-1">
                      {service.title}:
                    </h3>
                    <span className="text-[13px] md:text-[14px] text-[#4b5563] leading-[1.6]">
                      {service.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Image Area */}
          <div className="lg:col-span-4 mt-8 lg:mt-0 flex items-stretch rounded-lg overflow-hidden">
            <div className="relative w-full min-h-[400px] lg:min-h-full h-full">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                alt="Modern curved glass skyscraper representing Global Capability Center real estate"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
