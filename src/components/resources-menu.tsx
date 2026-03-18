"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const leftColumnItems = [
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Clients Experiences", href: "/resources/client-experiences" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Webinars", href: "/resources/webinars" },
  { label: "Press Release", href: "/resources/press-release" },
  { label: "Expert Q & A", href: "/resources/expert-qa" },
  { label: "Podcasts", href: "/resources/podcasts" },
  { label: "Whitepapers", href: "/resources/whitepapers" },
];

const rightColumnItems = [
  { label: "eBooks", href: "/resources/ebooks" },
  { label: "Brochure", href: "/resources/brochure" },
  { label: "Infographics", href: "/resources/infographics" },
  { label: "Tech Tales", href: "/resources/tech-tales" },
  { label: "SaaS Masterclasses", href: "/resources/saas-masterclasses" },
  { label: "FAQ", href: "/resources/faq" },
  { label: "All Resources", href: "/resources/all-resources" },
];

export function ResourcesMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 text-[16px] font-medium text-[#2d2d2d] transition-all duration-200 hover:text-primary">
        Resources
        <ChevronDown className="h-4 w-4 opacity-60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 top-full z-[10000] w-[580px]"
          >
            <div className="overflow-hidden rounded-[6px] bg-[#f5f5f5] shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-200">
              <div className="flex gap-[50px] px-8 py-7">
                <div className="flex-1">
                  <ul className="space-y-[11px]">
                    {leftColumnItems.map((item) => (
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
                    {rightColumnItems.map((item) => (
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
