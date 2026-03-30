"use client";

import { Settings, Box, UserCog, Award, Handshake, Globe } from "lucide-react";

export function AiPodsWorkflow() {
  const steps = [
    { step: "01", text: "AI Risk & ROI\nAssessment" },
    { step: "02", text: "Use Case\nPrioritization\n& Architecture\nDesign" },
    { step: "03", text: "AI Pod\nDeployment\n& Integration" },
    { step: "04", text: "Production\nRelease (6–8\nWeeks)" },
    { step: "05", text: "Iterative\nOptimization\n& Scaling" }
  ];

  const customPodFeatures = [
    "Pod size &\nteam composition",
    "AI focus areas or\nhigh-impact use cases",
    "Engagement model\n(Dedicated/Hybrid/On-demand)",
    "Advanced needs (data engineering,\nsecurity, compliance)"
  ];

  const choosingReasons = [
    { title: "25+ Years of\nEnterprise\nTechnology\nDelivery", icon: <Settings className="w-8 h-8 text-gray-700 stroke-[1.5]" /> },
    { title: "100% Production-\nReady AI\nDeployments", icon: <Box className="w-8 h-8 text-gray-700 stroke-[1.5]" /> },
    { title: "90-Day Outcome-\nLinked AI Delivery\nModel", icon: <UserCog className="w-8 h-8 text-gray-700 stroke-[1.5]" /> },
    { title: "360° IP\nOwnership/No\nVendor Lock-In", icon: <Award className="w-8 h-8 text-gray-700 stroke-[1.5]" /> },
    { title: "2000+ Happy\nClients Worldwide", icon: <Handshake className="w-8 h-8 text-gray-700 stroke-[1.5]" /> },
    { title: "10+ Cutting-Edge\nGlobal Campuses", icon: <Globe className="w-8 h-8 text-gray-700 stroke-[1.5]" /> }
  ];

  return (
    <div className="w-full bg-white pb-20 overflow-hidden">
      {/* 5-Step Workflow Section */}
      <section className="py-24 max-w-[1240px] mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-[28px] font-bold text-text mb-4">
          How the AI Pod Engagement Works?
        </h2>
        <div className="inline-block px-4 py-1.5 rounded-full mb-16 font-semibold text-[11px] md:text-sm bg-surface-2 border border-gray-200 text-text">
          A Tested & Proven Execution Flow
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between w-full gap-y-12 gap-x-4 text-left">
          {/* Main absolute line connecting the boxes on Desktop */}
          <div className="hidden md:block absolute top-[60%] left-0 w-full h-[1.5px] bg-gray-600 z-0"></div>

          {steps.map((item, idx) => (
            <div key={idx} className="relative w-full md:w-[19%] h-[160px] md:h-[180px] flex justify-center">

              {/* Outer Wrapper for positioning */}
              <div className="relative w-[200px] md:w-full h-full pt-4">

                {/* Connector Circle directly on the line (Right side, disabled for last) */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute right-[-10px] top-[calc(60%-4px)] w-[8px] h-[8px] rounded-full border-[1.5px] border-gray-600 bg-white z-20"></div>
                )}

                {/* The Top Pill */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-max pointer-events-none">
                  <div className="relative">
                    {/* Pill Shadow */}
                    <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] border-[1.5px] border-gray-600 rounded-full"></div>
                    {/* Pill Main */}
                    <div className="relative bg-primary text-white font-bold text-[13px] px-6 py-1.5 border-[1.5px] border-gray-600 rounded-full uppercase tracking-wider">
                      STEP {item.step}
                    </div>
                  </div>
                </div>

                {/* The Main Box */}
                <div className="relative w-full h-full z-10 pt-2">
                  <div className="relative w-full h-full">
                    {/* Box Shadow */}
                    <div className="absolute inset-0 translate-x-[4px] translate-y-[4px] border-[1.5px] border-gray-600 rounded-[16px]"></div>
                    {/* Box Main */}
                    <div className="relative bg-white w-full h-full border-[1.5px] border-gray-600 rounded-[16px] flex items-center justify-center p-4 text-center">
                      <span className="text-gray-800 font-bold text-[14px] leading-snug whitespace-pre-line">
                        {item.text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Build Your Custom AI Pod */}
      <section className="py-16 max-w-[1240px] mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-[26px] font-bold text-text mb-4">
          Build Your Custom AI Pod
        </h2>
        <div className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-[11px] md:text-sm bg-surface-2 border border-gray-200 text-text">
          Tailored to Your Unique AI Needs
        </div>
        <p className="text-[14px] md:text-[15px] text-muted max-w-[800px] mx-auto mb-12 leading-relaxed whitespace-pre-line">
          Every business environment is unique, so we design AI Pods tailored to your technical, operational, and business priorities.
          Customize your pod based on:
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {customPodFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-primary text-white font-bold text-[13px] md:text-[14px] py-6 px-4 rounded-[6px] shadow-sm flex items-center justify-center text-center whitespace-pre-line leading-snug"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Why Enterprises Choose... */}
      <section className="pt-20 px-6 max-w-[1240px] mx-auto text-center">
        <h2 className="text-2xl md:text-[26px] font-bold text-text mb-4">
          Why Do Enterprises Choose Netwit AI Pods?
        </h2>
        <div className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-[11px] md:text-sm bg-surface-2 border border-gray-200 text-text">
          Ensuring Execution Without Enterprise Risk
        </div>
        <p className="text-[14px] md:text-[15px] text-muted max-w-[800px] mx-auto mb-14 leading-relaxed whitespace-pre-line">
          Netwit AI Pods are built for organizations that value outcomes over experimentation. We combine deep AI capability with
          enterprise-grade delivery discipline.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {choosingReasons.map((reason, idx) => (
            <div key={idx} className="bg-primary/5 rounded-[8px] p-6 flex flex-col items-center justify-start text-center border border-primary/10">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-200 mb-4 shadow-sm">
                {reason.icon}
              </div>
              <span className="text-text font-bold text-[12px] leading-tight whitespace-pre-line">
                {reason.title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
