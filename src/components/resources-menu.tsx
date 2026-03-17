"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const leftColumnItems = [
  { label: "Case Studies", href: "#" },
  { label: "Clients Experiences", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Webinars", href: "#" },
  { label: "Press Release", href: "#" },
  { label: "Expert Q & A", href: "#" },
  { label: "Podcasts", href: "#" },
  { label: "Whitepapers", href: "#" },
];

const rightColumnItems = [
  { label: "eBooks", href: "#" },
  { label: "Brochure", href: "#" },
  { label: "Infographics", href: "#" },
  { label: "Tech Tales", href: "#" },
  { label: "SaaS Masterclasses", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "All Resources", href: "#" },
];

export function ResourcesMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-[#FF7A00] transition-colors duration-150">
        Resources
        <ChevronDown className="h-4 w-4 opacity-60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-[100] w-[1000px] -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-[4px] border border-[#E5E5E5] bg-[#F5F5F5] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <div className="flex gap-[80px] px-10 py-8">
                <div className="flex-1">
                  <ul className="space-y-[14px]">
                    {leftColumnItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] transition-colors duration-200 hover:text-[#FF7A00]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <ul className="space-y-[14px]">
                    {rightColumnItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] transition-colors duration-200 hover:text-[#FF7A00]"
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
