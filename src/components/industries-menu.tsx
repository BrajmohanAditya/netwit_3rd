"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const whoWeServe = [
  { label: "Startups", href: "/industries/startups" },
  { label: "Scaleups", href: "/industries/scaleups" },
  { label: "Enterprises", href: "/industries/enterprises" },
  { label: "Product / SaaS firm", href: "/industries/saas" },
  { label: "IT Staff Agency", href: "/industries/it-staff" },
];

const industriesColumn1 = [
  { label: "Education & Learning", href: "/industries/education" },
  { label: "Finance & Banking", href: "/industries/finance" },
  { label: "Food and Beverage", href: "/industries/food" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Media & Entertainment", href: "/industries/media" },
];

const industriesColumn2 = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Retail & Commerce", href: "/industries/retail" },
  { label: "Sports", href: "/industries/sports" },
  { label: "Telecommunication", href: "/industries/telecom" },
  { label: "Transport & Logistics", href: "/industries/logistics" },
  { label: "Travel & Hospitality", href: "/industries/travel" },
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
            initial={{ opacity: 0, y: -8, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -8, x: "-50%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-[10000] w-[750px]"
          >
            <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-200">
              <div className="flex gap-[40px] px-[30px] py-8">
                <div className="w-[170px] flex-shrink-0">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-gray-500">
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

                <div className="w-[200px] flex-shrink-0 border-l border-gray-200 pl-[30px]">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-gray-500">
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

                <div className="w-[200px] flex-shrink-0 border-l border-gray-200 pl-[30px]">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-gray-500">
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
