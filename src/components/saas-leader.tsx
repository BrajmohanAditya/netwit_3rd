"use client";

import { Sparkles, ShieldCheck, Network } from "lucide-react";
import Link from "next/link";

export function SaasLeaderSection() {
  const cards = [
    {
      title: "Scale Smarter with AI",
      icon: Sparkles,
      href: "/services/sales-acceleration",
    },
    {
      title: "Lockdown Cybersecurity",
      icon: ShieldCheck,
      href: "/cyber-smartz",
    },
    {
      title: "Perfect Your QA and Automation Testing",
      icon: Network,
      href: "/qa-smartz",
    },
    {
      title: "Build a Sustainable Future",
      icon: null,
      href: "/data-smartz360",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-surface)] dark:bg-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[28px] md:text-[36px] font-bold text-center mb-16 text-[var(--color-text)]">
          <span className="text-[#ea580c]">As a SaaS leader,</span> what are you looking to do?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <Link 
              key={idx} 
              href={card.href}
              className="bg-[#f8f9fa] dark:bg-[var(--color-surface-2)] aspect-square flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group"
            >
              {card.icon && (
                <card.icon className="w-[42px] h-[42px] text-[#111827] dark:text-[var(--color-text)] mb-5 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
              )}
              <h3 className="text-[15px] font-bold text-[#111827] dark:text-[var(--color-text)] leading-snug">
                {card.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
