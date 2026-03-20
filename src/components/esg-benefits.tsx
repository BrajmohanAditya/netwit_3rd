"use client";

import { Lightbulb } from "lucide-react";

const benefits = [
  {
    title: "Stakeholder Expectations:",
    description: "Stakeholders, including investors, customers, and employees, are increasingly demanding transparency in how companies address environmental, social, and governance issues. ESG reporting provides a structured way for enterprises to communicate their efforts, performance, and initiatives in these critical areas, meeting stakeholder expectations for accountability.",
    caseStudy: "Tesla, an electric vehicle manufacturer, incorporates ESG considerations into its business strategy. By focusing on clean energy and addressing supply chain concerns, Tesla mitigates risks associated with environmental regulators and social responsibility, ensuring long-term viability."
  },
  {
    title: "Risk Management:",
    description: "ESG reporting helps companies identify and assess risks associated with environmental impacts (e.g., climate change regulation), social controversies (e.g., labor practices), and governance issues (e.g., ethical lapses in leadership). By recognizing and addressing these risks proactively, enterprises can mitigate potential legal, financial, and reputational challenges.",
    caseStudy: "Tesla, an electric vehicle manufacturer, incorporates ESG considerations into its business strategy. By focusing on clean energy and addressing supply chain concerns, Tesla mitigates risks associated with environmental regulators and social responsibility, ensuring long-term viability."
  },
  {
    title: "Competitive Advantage:",
    description: "Companies embracing ESG reporting gain a competitive advantage by differentiating themselves in the market as socially responsible and environmentally conscious. This appeal can attract consumers who prioritize sustainable products and services and investors seeking companies with long-term, responsible business practices.",
    caseStudy: "Patagonia, an outdoor apparel company, has positioned itself as a leader in sustainable fashion. Its commitment to ethical sourcing, fair labor practices, and environmental conservation not only aligns with environmentally conscious consumers but also sets it apart in a competitive market."
  },
  {
    title: "Investor Relations:",
    description: "Many investors, including institutional investors and asset managers, consider ESG factors in their investment decisions. ESG reporting allows enterprises to align with the preferences of investors who prioritize sustainable investments, enhancing investor relations and potentially attracting capital from ESG-focused funds.",
    caseStudy: "BlackRock, one of the world&apos;s largest asset managers, emphasizes the integration of ESG factors into its investment decisions. This approach influences companies to prioritize ESG reporting as it aligns with the preferences of major institutional investors."
  },
  {
    title: "Brand Reputation:",
    description: "ESG initiatives positively influence brand reputation by highlighting a commitment to ethical practices, community engagement, and sustainability. Consumers are increasingly making choices based on values, and a strong ESG reputation can enhance brand loyalty and attract socially conscious customers.",
    caseStudy: "Ben & Jerry&apos;s, an ice cream company, is known for its social activism and commitment to social justice issues. Through transparent communication about its efforts, the company has built a strong brand reputation, attracting consumers who value ethical business practices."
  },
  {
    title: "Regulatory Compliance:",
    description: "ESG reporting ensures that companies adhere to evolving regulatory requirements related to environmental protection, social responsibility, and governance standards. Staying compliant with these standards is crucial for avoiding legal issues and penalties while contributing to overall corporate responsibility.",
    caseStudy: "Microsoft has been actively involved in advocating for stronger privacy regulations and has implemented measures to enhance data security and privacy. By proactively addressing governance issues, Microsoft stays compliant with evolving regulations and sets industry standards."
  },
  {
    title: "Innovation and Efficiency:",
    description: "Pursuing ESG goals often drives innovation in processes, products, and services, leading to increased operational efficiency. Companies that integrate sustainability into their business models are better positioned to adapt to market changes and demonstrate resilience.",
    caseStudy: "Google&apos;s parent company, Alphabet, invests in renewable energy projects and has committed to operating its data centers using 100% renewable energy. This not only aligns with environmental goals but also drives innovation in sustainable energy practices."
  },
  {
    title: "Employee Engagement:",
    description: "ESG initiatives contribute to a positive workplace culture, fostering employee engagement and satisfaction. Employees increasingly seek employers who share their values, and a commitment to ESG principles can enhance recruitment and retention efforts.",
    caseStudy: "Salesforce, a cloud computing company, is recognized for its commitment to social responsibility. The company actively engages employees in volunteer programs and philanthropy, contributing to a positive workplace culture and high employee satisfaction."
  },
  {
    title: "Long-Term Viability:",
    description: "Addressing ESG factors is crucial for the long-term viability of enterprises, considering the impact of global challenges like climate change, social inequality, and changing regulatory landscapes. Companies that proactively manage ESG issues are better prepared for a sustainable and resilient future.",
    caseStudy: "Ørsted, a Danish renewable energy company, transformed itself from a fossil fuel-based utility to a leader in wind energy. This strategic shift not only aligns with ESG principles but positions Ørsted for long-term success in a world transitioning to clean energy solutions."
  }
];

export function EsgBenefits() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-4">
                {benefit.title}
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                {benefit.description}
              </p>
              
              <div className="pt-6 border-t border-gray-50">
                <div className="flex items-center gap-2 text-[#F05A22] font-semibold text-sm mb-3">
                  <Lightbulb className="w-4 h-4" />
                  <span>Case in point:</span>
                </div>
                <p className="text-[#64748b] text-sm leading-relaxed italic">
                  {benefit.caseStudy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
