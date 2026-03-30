"use client";

import { useState } from "react";

export function AiPodsContent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const consequenceCards = [
    {
      title: "Slower Operational Efficiency",
      description: "Manual processes remain unchanged, while competitors automate decision-making, analysis, and response processes.",
    },
    {
      title: "Missed Revenue Opportunities",
      description: "AI-powered personalization, insights, and automation have become the hallmark of premium offerings or services.",
    },
    {
      title: "Competitive Displacement",
      description: "Competitors leveraging AI will capture market share faster through innovative, intelligent solutions embedded in their products.",
    },
    {
      title: "Fragmented Innovation",
      description: "Disconnected AI pilots cause internal conflicts, redundant work, and sunk costs with no long-term value.",
    }
  ];

  const approachTable = [
    { challenge: "AI stuck in PoC cycles", approach: "Production-first AI pods", outcome: "Live AI use cases in 6-8 weeks" },
    { challenge: "Shortage of AI talent", approach: "Dedicated pod team", outcome: "No hiring or ramp-up delays" },
    { challenge: "Rising delivery costs", approach: "Fixed-scope execution", outcome: "Predictable spending" },
    { challenge: "Integration complexity", approach: "Pods embed into existing stack", outcome: "No architectural disruption" },
    { challenge: "Slow decision cycles", approach: "Customer-owned delivery", outcome: "Faster execution with clarity" },
    { challenge: "Governance & compliance gaps", approach: "Built to enterprise controls", outcome: "Secure, auditable AI from day one" },
  ];

  const useCases = [
    {
      title: "RAG & Intelligent\nKnowledge Systems",
      desc: "AI-powered access to documents, records, tickets, and enterprise knowledge."
    },
    {
      title: "AI Assistants &\nCopilots",
      desc: "Context-aware assistants embedded into workflows to support operations and decision-making."
    },
    {
      title: "Search &\nDiscovery Engines",
      desc: "Semantic search across structured and unstructured enterprise data."
    },
    {
      title: "Workflow &\nProcess Automation",
      desc: "AI-assisted automation with human 'in-the-loop' controls."
    },
    {
      title: "Task-Oriented\nAI Agents",
      desc: "Autonomous agents executing defined business or operational tasks."
    },
    {
      title: "AI Operations\n& Monitoring",
      desc: "Post-deployment monitoring, cost controls, and reliability for production AI systems."
    }
  ];

  return (
    <div className="w-full bg-white pb-32">
      {/* Section 1: Why Can't AI Stay Experimental */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[28px] md:text-3xl font-bold text-text mb-4">
          Why Can't AI Stay Experimental Anymore?
        </h2>
        <div className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-xs md:text-sm bg-surface-2 border border-gray-200 text-text">
          Delaying AI is Now a Business Risk
        </div>
        <p className="text-[17px] text-muted max-w-[900px] mx-auto mb-14 leading-relaxed">
          Across industries, AI has shifted from experimentation to expectation. Organizations that fail to operationalize AI are already facing a negative business impact. Some common consequences of delayed AI execution include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
          {consequenceCards.map((card, idx) => (
            <div
              key={idx}
              className="relative h-[180px] w-full rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 transform perspective-1000"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`absolute inset-0 w-full h-full rounded-[10px] transition-all duration-300 ease-in-out p-6 flex items-center justify-center text-center
                  ${hoveredIndex === idx 
                    ? 'bg-primary/10 text-text border border-primary/20' 
                    : 'bg-primary text-white'
                  }`}
              >
                {hoveredIndex === idx ? (
                  <p className="text-[13px] md:text-[14px] leading-snug font-medium opacity-100 transition-opacity delay-100">
                    {card.description}
                  </p>
                ) : (
                  <h3 className="text-[17px] md:text-[19px] font-bold opacity-100 transition-opacity delay-100 px-4">
                    {card.title}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Why Do Most AI Initiatives Fail? */}
      <section className="py-10 max-w-[1240px] mx-auto px-6 text-center">
        <h2 className="text-[28px] md:text-3xl font-bold text-text mb-4">
          Why Do Most AI Initiatives Fail?
        </h2>
        <div className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-xs md:text-sm bg-surface-2 border border-gray-200 text-text">
          How Netwit's AI Pods Fix It
        </div>
        <p className="text-[17px] text-muted max-w-[950px] mx-auto mb-14 leading-relaxed">
          Most AI initiatives fail not because of ambition but because execution fails between PoC and production. Netwit's AI Pods are designed specifically to eliminate this bottleneck by integrating cross-functional teams directly into your delivery pipeline.
        </p>

        <div className="max-w-[1000px] mx-auto border border-[#E5E7EB] rounded-[16px] p-6 md:p-10 bg-white shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)]">
          {/* Headers */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-primary font-bold text-sm md:text-lg tracking-tight">Common AI Challenge</div>
            <div className="text-primary font-bold text-sm md:text-lg tracking-tight">Our AI Pod Approach</div>
            <div className="text-primary font-bold text-sm md:text-lg tracking-tight">Business Outcome</div>
          </div>
          
          {/* Rows */}
          <div className="space-y-3.5">
            {approachTable.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-4 md:gap-6 items-center">
                <div className="bg-[#F3F4F6] text-text font-semibold text-[11px] md:text-[14px] py-3.5 px-4 rounded-[6px] text-center w-full leading-tight">
                  {row.challenge}
                </div>
                <div className="bg-primary/5 text-primary font-bold text-[11px] md:text-[14px] py-3.5 px-4 rounded-[6px] text-center w-full leading-tight">
                  {row.approach}
                </div>
                <div className="bg-primary text-white font-bold text-[11px] md:text-[14px] py-3.5 px-4 rounded-[6px] shadow-sm text-center w-full leading-tight">
                  {row.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Top AI Use Cases */}
      <section className="pt-24 max-w-[1240px] mx-auto px-6 text-center">
        <h2 className="text-[26px] md:text-3xl font-bold text-text mb-4">
          Top AI Use Cases of AI Pods
        </h2>
        <div className="inline-block px-4 py-1.5 rounded-full mb-14 font-semibold text-xs md:text-sm bg-surface-2 border border-gray-200 text-text">
          Built for Real Data, Real Systems, Real Users
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {useCases.map((useCase, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-gray-200 hover:border-primary/40 p-8 text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgb(11,61,145,0.06)]"
            >
              <h3 className="text-primary font-bold text-lg md:text-[19px] leading-tight mb-4 whitespace-pre-line">
                {useCase.title}
              </h3>
              <p className="text-[#64748B] text-[15px] leading-relaxed">
                {useCase.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
