import React from "react";
import { MessageSquarePlus, Activity, ShieldCheck, Megaphone } from "lucide-react";

export default function ComprehensiveSupport() {
  const cards = [
    {
      title: "24/7 Multilingual Support",
      icon: <Activity className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
      description: "Our globally distributed teams provide round-the-clock assistance in multiple languages, ensuring your customers are supported no matter where they are or when they reach out."
    },
    {
      title: "Omnichannel Engagement",
      icon: <Megaphone className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
      description: "We meet your customers where they are, across email, chat, phone, social media, and in-app messaging. Our AI-first systems unify these channels, enabling consistent, context-aware support experiences across every touchpoint."
    },
    {
      title: "AI-Augmented Ticketing & Resolution",
      icon: <ShieldCheck className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
      description: "Leverage intelligent automation to route tickets, suggest solutions, and resolve common issues instantly — freeing up your human agents for high-value interactions."
    },
    {
      title: "Customizable Support Teams",
      icon: <MessageSquarePlus className="w-8 h-8 text-[#111827] stroke-[1.5]" />,
      description: "Build your ideal support team with our flexible engagement models. Whether you need a dedicated team, shared agents, or a hybrid approach, we are here."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto text-center">

        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#111827] mb-4">
          Comprehensive Customer <span className="text-primary">Support Services</span>
        </h2>

        <p className="text-[14px] md:text-[15px] font-medium text-[#6b7280] leading-[1.8] max-w-[900px] mx-auto mb-16 px-4">
          At Netwit, we offer complete customer service AI solutions tailored to meet the evolving needs of modern businesses. Whether you're a startup scaling fast or an enterprise optimizing global operations, our flexible, AI-powered customer support solutions ensure your customers receive timely, empathetic, and effective support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-start shadow-[0px_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-[18px] font-bold text-primary leading-tight mb-4 pr-4">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#4b5563] font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
