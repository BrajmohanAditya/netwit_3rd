"use client";

import React, { useState } from "react";

const defineModelData = [
  {
    aspect: "Ideal For Organizations",
    byt: "That are in the growth phase (SaaS, Startups, SME Scale-ups) looking for cost-effective scalability. This allows them to augment their IT teams with Netsmartz, enabling them to focus on key business priorities without disruption, while keeping their core team aligned to strategic goals.",
    bot: "That are expanding into new regions or global markets, enabling them to enhance their capabilities while minimizing internal disruption. This strategic approach prioritizes your organization's talent, culture, and brand experience.",
    gcc: "That are large enterprises or multinational corporations aiming to optimize operations, boost innovation, and enhance cost efficiency. By setting up a GCC, organizations gain access to highly skilled talent, enabling them to scale rapidly and lower operational expenses while maintaining local flexibility."
  },
  {
    aspect: "Team Size",
    byt: "You can start with as few as one team member.",
    bot: "Requires a minimum team size of 10 or more members to ensure optimal performance and operational efficiency.",
    gcc: "Requires a minimum team size of 50 members to ensure optimal performance and operational efficiency."
  },
  {
    aspect: "Ownership",
    byt: "Netsmartz manages the extended team while allowing these resources directly under your daily guidance for seamless integration.",
    bot: "Netsmartz establishes a dedicated extension for your existing legal entity for the BOT team, creating a well-defined and organized operational structure. This ensures efficient execution and offers flexibility with contract duration ranging from 12 to 24 months. At the end of the agreement, Netsmartz oversees a smooth transfer of ownership to the client, ensuring a seamless transition through its build-operate-transfer model. This timeframe provides a budget-friendly solution, while all personnel and assets are automatically handed over to the client, reducing risk and guaranteeing a smooth and efficient handover process.",
    gcc: "GCCs are entirely owned and managed by the parent company, granting it full control over operations and ensuring a direct alignment with corporate strategies and stringent quality standards. As a direct extension of the parent company, the GCC preserves and reflects its culture and core values. With in-house expertise and tailored capabilities, the GCC serves as a driving force for innovation and transformation across the organization, while reducing the need for external resources. This ownership structure strengthens the parent company's ability to shape and influence outcomes."
  },
  {
    aspect: "Recruitment",
    byt: "Recruitment and management are handled entirely by Netsmartz.",
    bot: "Netsmartz manages hiring throughout the contract, with client approval required for all key hiring decisions, including compensation and benefits.",
    gcc: "Netsmartz handles initial hiring with a final approval within the client entity and offers additional hiring and operational support services as needed."
  },
  {
    aspect: "Playbook",
    byt: "Taps into Netsmartz's proven playbook, backed by 24 years of experience, to drive efficient and effective execution.",
    bot: "Netsmartz assists in developing a comprehensive playbook during setup and refines it throughout the contract.",
    gcc: "Netsmartz develops the GCC Playbook, which will serve as a comprehensive guide outlining key decisions, a detailed action list, and a well-structured project plan."
  },
  {
    aspect: "Infrastructure",
    byt: "Offers shared or customized infrastructure tailored to client needs.",
    bot: "Provides customized infrastructure as per client requirements.",
    gcc: "Provides tailored, branded, and fully equipped workspaces with integrated IT infrastructure."
  },
  {
    aspect: "Operations Governance",
    byt: "Netsmartz handles end-to-end management, covering hiring, payroll, IT, infrastructure hardware, and all other administrative tasks.",
    bot: "Managed by the client with full policy control; Netsmartz takes care of HR, IT support, recruitment, housekeeping, accounting, and administrative services for the contracted period before transfer.",
    gcc: "The client retains full control over policies and processes, while Netsmartz provides infrastructure and supports operations that are in line with the agreement requirements."
  },
  {
    aspect: "Setup Expense",
    byt: "There are no upfront setup costs.",
    bot: "Low initial investment is required for infrastructure and setup.",
    gcc: "Involves upfront investment for infrastructure and setup."
  },
  {
    aspect: "Implementation Duration",
    byt: "Rapid setup, typically completed within a few weeks.",
    bot: "Generally, it is set up within 4 to 12 weeks, depending on approach.",
    gcc: "Usually, it takes 12 weeks or more for full setup and implementation."
  },
  {
    aspect: "Scalability",
    byt: "Highly scalable, enabling quick adjustments in team size, with Netsmartz maintaining a robust bench of resources across 45+ technology stacks.",
    bot: "Offers significant scalability, with turnaround time varying based on resource availability and the capabilities outlined in the contract.",
    gcc: "Offers flexible scalability options based on available resource pools, hiring capacity, infrastructure, and support operations."
  },
  {
    aspect: "Control level",
    byt: "Provides substantial control over team management, with Netsmartz overseeing all aspects from start to finish.",
    bot: "Offers high control over team management, with comprehensive support from Netsmartz's Managed Services.",
    gcc: "The client maintains full control over all operational aspects throughout the entire process."
  },
  {
    aspect: "Exit Options",
    byt: "Flexible exit options with transfer of knowledge.",
    bot: "Netsmartz ensures a seamless entity transfer to the client upon contract completion. All assets and employees are automatically transferred to the client, ensuring minimal risk.",
    gcc: "Offers straight-forward exit without complications."
  }
];

export default function GCCFramework() {
  const [activeTab, setActiveTab] = useState("Define Your Model");

  const tabs = ["Define Your Model", "Structure Your Setup", "Optimize Your Costs"];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] mb-4">
            Our GCC Framework
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#4b5563] max-w-[800px] mx-auto">
            To truly grasp the potential of Global Capability Centers, delve into our diverse models, key aspects, implementation approaches, and comprehensive capabilities.
          </p>
        </div>

        {/* Massive Tabs Container */}
        <div className="flex flex-col md:flex-row w-full border border-gray-200 mb-8 rounded-sm overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-[14px] md:text-[15px] font-semibold transition-colors duration-300 text-center ${
                activeTab === tab
                  ? "bg-[#ea580c] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-b md:border-b-0 md:border-r last:border-r-0 border-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="w-full">
          {activeTab === "Define Your Model" && (
            <div className="w-full overflow-x-auto pb-4">
              <p className="text-[13px] text-gray-500 mb-4 italic">
                *BOT model helps businesses reduce expenses by 30% to 50% &amp; accelerates development time compared to local outsourcing or typical onsite teams.
              </p>
              
              <table className="w-full min-w-[1100px] border-collapse text-[12px] md:text-[13px] leading-[1.5]">
                {/* Table Header */}
                <thead>
                  <tr className="bg-black text-white text-left font-bold">
                    <th className="p-4 border border-gray-700 w-[15%]">Aspect</th>
                    <th className="p-4 border border-gray-700 w-[28.33%]">Build Your Team (BYT) with Netsmartz</th>
                    <th className="p-4 border border-gray-700 w-[28.33%]">Build Operate Transfer (BOT) Model</th>
                    <th className="p-4 border border-gray-700 w-[28.33%]">Global Capability Center (GCC) Accelerator Model</th>
                  </tr>
                </thead>
                
                {/* Table Body */}
                <tbody>
                  {defineModelData.map((row, index) => (
                    <tr key={index} className="transition-colors hover:bg-orange-50/50">
                      {/* Left Header Column */}
                      <td className="bg-[#ea580c] text-white font-bold p-4 border border-gray-300 align-top">
                        {row.aspect}
                      </td>
                      {/* Data Columns */}
                      <td className={`p-4 border border-gray-200 align-top text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        {row.byt}
                      </td>
                      <td className={`p-4 border border-gray-200 align-top text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        {row.bot}
                      </td>
                      <td className={`p-4 border border-gray-200 align-top text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        {row.gcc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          )}

          {activeTab === "Structure Your Setup" && (
            <div className="p-12 text-center text-gray-500 bg-gray-50 border border-gray-200 rounded-sm">
              Setup structure overview coming soon...
            </div>
          )}

          {activeTab === "Optimize Your Costs" && (
            <div className="p-12 text-center text-gray-500 bg-gray-50 border border-gray-200 rounded-sm">
              Cost optimization strategies coming soon...
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
