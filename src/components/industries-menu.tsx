"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const whoWeServe = [
  { label: "Startups", href: "#" },
  { label: "Scaleups", href: "#" },
  { label: "Enterprises", href: "#" },
  { label: "Product / SaaS firm", href: "#" },
  { label: "IT Staff Agency", href: "#" },
];

const industriesColumn1 = [
  { label: "Education & Learning", href: "#" },
  { label: "Finance & Banking", href: "#" },
  { label: "Food and Beverage", href: "#" },
  { label: "Healthcare", href: "#" },
  { label: "Manufacturing", href: "#" },
  { label: "Media & Entertainment", href: "#" },
];

const industriesColumn2 = [
  { label: "Real Estate", href: "#" },
  { label: "Retail & Commerce", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Telecommunication", href: "#" },
  { label: "Transport & Logistics", href: "#" },
  { label: "Travel & Hospitality", href: "#" },
];

export function IndustriesMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 text-[16px] font-medium text-[#2d2d2d] transition-all duration-200 hover:text-primary">
        Industries
        <ChevronDown className="h-4 w-4 opacity-60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-[10000] w-[1100px] -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-[6px] bg-[#f5f5f5] shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-200">
              <div className="flex gap-[60px] px-[50px] py-9">
                <div className="w-[200px] flex-shrink-0">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-[#000]">
                    Who We Serve
                  </h3>
                  <ul className="space-y-[13px]">
                    {whoWeServe.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] transition-colors duration-200 hover:text-primary hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-[280px] flex-shrink-0 border-l border-gray-200 pl-[50px]">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-[#000]">
                    Industries
                  </h3>
                  <ul className="space-y-[13px]">
                    {industriesColumn1.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] transition-colors duration-200 hover:text-primary hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-[280px] flex-shrink-0">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-[#000]">
                    Industries
                  </h3>
                  <ul className="space-y-[13px]">
                    {industriesColumn2.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] transition-colors duration-200 hover:text-primary hover:underline"
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
