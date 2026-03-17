"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    title: "SecureSmartz",
    subtitle: "Cybersecurity Solutions",
    href: "#",
  },
  {
    title: "CyberSmartz",
    subtitle: "AI for All Businesses",
    href: "#",
  },
  {
    title: "QASmartz",
    subtitle: "Quality Assurance & Automation Testing",
    href: "#",
  },
  {
    title: "DataSmartz360",
    subtitle: "Data & Analytics Solutions",
    href: "#",
  },
];

export function EnterpriseMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 text-[16px] font-medium text-[#2d2d2d] transition-all duration-200 hover:text-primary">
        Enterprise Solutions
        <ChevronDown className="h-4 w-4 opacity-60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 top-full z-[10000] w-[300px]"
          >
            <div className="overflow-hidden rounded-[6px] bg-[#f5f5f5] shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-gray-200">
              <div className="p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex flex-col rounded-md px-4 py-3 transition-all duration-200 hover:bg-white hover:shadow-sm"
                  >
                    <span className="text-[15px] font-semibold text-[#333] group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </span>
                    <span className="mt-1 text-[13px] italic text-[#666]">
                      {item.subtitle}
                    </span>
                  </Link>
                ))}
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
