import React from "react";
import { Brain, Target, Presentation, Users } from "lucide-react";

const planFeatures = [
  {
    icon: <Brain className="w-8 h-8 md:w-10 md:h-10 text-gray-800 stroke-[1.5]" />,
    title: "AI-powered Audience Insights",
    description: "Understand your ideal customer profile with precision. Our AI tools for marketing analyze behavioral data, engagement patterns, and market trends to identify high-converting segments enabling smarter lead generation marketing and targeted B2B SaaS marketing strategies."
  },
  {
    icon: <Target className="w-8 h-8 md:w-10 md:h-10 text-gray-800 stroke-[1.5]" />,
    title: "Hyper-Personalized Campaigns",
    description: "Deliver the right message to the right person at the right time. From email marketing services and ad targeting tailored content, we use AI to personalize every touchpoint."
  },
  {
    icon: <Presentation className="w-8 h-8 md:w-10 md:h-10 text-gray-800 stroke-[1.5]" />,
    title: "Predictive Performance Optimization",
    description: "Our AI models for AI-driven B2B SaaS marketing solutions forecast campaign outcomes and continuously optimize for better ROI, reducing acquisition costs and increasing customer lifetime value."
  },
  {
    icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-gray-800 stroke-[1.5]" />,
    title: "Multi-Channel Strategy Execution",
    description: "Whether it&apos;s SEO marketing services, paid ads, content marketing services, or social media marketing services, we ensure your brand is visible where your audience is most active, using AI to maximize reach and engagement."
  }
];

export default function CustomMarketingPlan() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-[1000px] mx-auto mb-16">
          <h2 className="text-[30px] md:text-[38px] font-bold text-[#111827] mb-6 leading-tight">
            Leverage a Custom <span className="text-[#ea580c]">AI-informed</span> Marketing Plan
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.7] max-w-[900px] mx-auto">
            Our AI-first SaaS marketing solutions are tailored to your SaaS product&apos;s unique value proposition, customer journey, and growth goals. By combining deep industry insights with advanced data analytics, we craft strategies that are not only intelligent—but also actionable for marketing SaaS products and enhancing AI-driven digital marketing efforts.
          </p>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {planFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div className="mb-6 flex justify-start">
                <div className="p-1">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#ea580c] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
