"use client";

import Image from "next/image";
import { Check, ClipboardList, Network, ShieldCheck, ListChecks } from "lucide-react";

export function AzureMigrationAMMP() {
  return (
    <>
      <section className="bg-white py-24 px-6 w-full text-center lg:text-left">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-[26px] md:text-3xl font-bold text-text mb-4 tracking-tight leading-snug">
              What Changes with a Security-Led,<br className="hidden md:block" /> Partner-Funded Migration?
            </h2>
            
            <p className="text-[14px] md:text-[15px] text-muted mb-8 leading-relaxed">
              Azure migration succeeds when security, compliance, and cost governance are built in from day one—not layered on later. With AMMP-funded migration and a disciplined delivery model, led by an experienced Azure cloud solution partner, organizations gain:
            </p>
            
            <ul className="space-y-3 mb-8 w-full">
              {[
                "Predictable execution from assessment through steady-state operations",
                "Architectures aligned to Zero Trust and cloud governance best practices",
                "Clear accountability across migration, security, and optimization",
                "Faster time-to-value with reduced upfront investment",
                "An AI-ready foundation built on secure, well-governed data platforms"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 border border-gray-100 p-3.5 rounded-[4px] shadow-sm bg-white">
                  <Check className="w-[15px] h-[15px] text-accent-gold stroke-[3] shrink-0" />
                  <span className="text-[13px] font-medium text-text leading-[1.2]">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-[15px] font-bold text-text mb-4">
              Make Your Cloud Journey Secure and Compliant
            </h3>
            
            <button className="bg-accent-gold hover:bg-accent-gold/90 text-white font-bold py-[14px] px-8 rounded-[4px] text-[14px] w-full max-w-[340px] transition-colors shadow-sm">
              Start Your Cloud Assessment
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative min-h-[480px]">
            <div className="absolute inset-0 rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-[#0B132B]">
              <Image 
                src="/images/azure_partner_img.png" 
                alt="Partner Funded Migration" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AMMP Funds Block */}
      <section className="bg-white pb-20 px-6 w-full text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-bold text-text mb-4">
            What Does AMMP Fund?
          </h2>
          <p className="text-[14.5px] text-muted mb-12 max-w-[800px] mx-auto leading-relaxed">
            Microsoft's Azure Migration and Modernization Program helps reduce both financial risk and execution risk by funding eligible Azure data migration service, including:
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-center">
            <div className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] rounded-[10px] p-6 flex flex-col items-center">
              <ClipboardList className="w-10 h-10 text-accent-gold mb-5 stroke-[1.5]" />
              <p className="text-[13px] font-bold text-text leading-tight max-w-[150px]">Cloud readiness and<br/>migration assessments</p>
            </div>
            <div className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] rounded-[10px] p-6 flex flex-col items-center">
              <Network className="w-10 h-10 text-accent-gold mb-5 stroke-[1.5]" />
              <p className="text-[13px] font-bold text-text leading-tight max-w-[150px]">Architecture design and<br/>Azure cloud<br/>modernization planning</p>
            </div>
            <div className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] rounded-[10px] p-6 flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-accent-gold mb-5 stroke-[1.5]" />
              <p className="text-[13px] font-bold text-text leading-tight max-w-[150px]">Security, compliance,<br/>and governance<br/>enablement</p>
            </div>
            <div className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] rounded-[10px] p-6 flex flex-col items-center">
              <ListChecks className="w-10 h-10 text-accent-gold mb-5 stroke-[1.5]" />
              <p className="text-[13px] font-bold text-text leading-tight max-w-[150px]">Migration execution and<br/>workload optimization</p>
            </div>
          </div>

          <div className="mx-auto bg-[#FFF4EB] border-y-[3px] border-accent-gold rounded-sm py-3.5 px-6 shadow-sm inline-block max-w-[800px]">
            <p className="text-[13px] md:text-[14px] text-text font-bold italic tracking-wide">
              Funding eligibility depends on workload type, scale, and migration scope—early validation is key to maximize program benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Executive Brief Banner */}
      <section className="bg-surface-2 py-[70px] px-6 w-full text-center border-t border-gray-100">
        <h2 className="text-xl md:text-[22px] font-bold text-text mb-3">
          Secure Azure Migration: An Executive Perspective
        </h2>
        <p className="text-[14.5px] text-muted mb-8 font-medium">
          A concise executive brief on reducing risk, controlling cost, and maximizing ROI with Microsoft-funded, security-led Azure migrations.
        </p>
        <button className="bg-accent-gold hover:bg-accent-gold/90 text-white font-bold py-3 px-8 rounded-[4px] text-[14px] transition-colors shadow-sm">
          Download the Executive Brief
        </button>
      </section>
    </>
  );
}
