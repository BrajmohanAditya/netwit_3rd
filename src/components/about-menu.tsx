"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const column1 = [
  { label: "Our Story", href: "#" },
  { label: "25+ Years of Excellence", href: "#" },
  { label: "Why Netsmartz", href: "#" },
  { label: "Timeline", href: "#" },
  { label: "Leadership Team", href: "#" },
  { label: "Life at Netsmartz", href: "#" },
  { label: "Netsmartz Academy", href: "#" },
  { label: "Learning & Development", href: "#" },
];

const column2 = [
  { label: "AI-First Culture", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Talent Stories", href: "#" },
  { label: "The GPW Journal", href: "#" },
  { label: "Events", href: "#" },
  { label: "We're Hiring", href: "#" },
  { label: "Giving Back", href: "#" },
  { label: "Referral Partners", href: "#" },
];

const column3 = [
  { label: "Thought Leadership", href: "#" },
];

export function AboutMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 text-[16px] font-medium text-[#2d2d2d] transition-all duration-200 hover:text-primary">
        About Us
        <ChevronDown className="h-4 w-4 opacity-60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 top-full z-[10000] w-[720px]"
          >
            <div className="overflow-hidden rounded-[6px] bg-[#f5f5f5] shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-200">
              <div className="flex gap-[40px] px-6 py-6">
                <div className="flex-1">
                  <ul className="space-y-[11px]">
                    {column1.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] font-medium transition-all duration-200 hover:text-primary hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <ul className="space-y-[11px]">
                    {column2.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] font-medium transition-all duration-200 hover:text-primary hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <ul className="space-y-[11px]">
                    {column3.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] font-medium transition-all duration-200 hover:text-primary hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
