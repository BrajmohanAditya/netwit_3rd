"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const leftColumnItems = [
  { label: "Tailored Tech & Non-tech Teams", href: "#" },
  { label: "DevOps", href: "#" },
  { label: "Sales Acceleration", href: "#" },
  { label: "QA & Automation Testing", href: "#" },
  { label: "Accounting Services", href: "#" },
  { label: "Customer Support", href: "#" },
  { label: "Marketing Services", href: "#" },
  { label: "Global Capability Center (GCC)", href: "#" },
];

const rightColumnItems = [
  { label: "Cybersecurity", href: "#", badge: null },
  { label: "ESG", href: "#", badge: null },
  { label: "AI Pods", href: "#", badge: "NEW", arrow: false },
  { label: "Data Pods", href: "#", badge: "NEW", arrow: true },
  { label: "Azure Migration", href: "#", badge: "NEW", arrow: true },
  { label: "Managed Detection Response", href: "#", badge: "NEW", arrow: true },
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-muted hover:text-primary transition-colors duration-150">
        Key Offerings
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 w-[700px] -translate-x-1/4 pt-3"
          >
            <div className="overflow-hidden rounded-[6px] bg-[#f5f5f5] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200">
              <div className="flex p-5">
                <div className="w-1/2 pr-6">
                  <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Services
                  </h3>
                  <ul className="space-y-0.5">
                    {leftColumnItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="flex items-center rounded-md px-3 py-2 text-[14px] text-[#333] font-medium transition-all duration-150 hover:bg-white hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-1/2 pl-6 border-l border-gray-200">
                  <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Solutions
                  </h3>
                  <ul className="space-y-0.5">
                    {rightColumnItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between rounded-md px-3 py-2 text-[14px] text-[#333] font-medium transition-all duration-150 hover:bg-white hover:text-primary"
                        >
                          <span className="flex items-center gap-2">
                            {item.label}
                            {item.badge && (
                              <span className="rounded-[12px] bg-primary px-2 py-0.5 text-[10px] font-semibold text-white shadow-[0_2px_8px_rgba(11,61,145,0.4)]">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          {item.arrow && (
                            <ChevronRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                          )}
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
