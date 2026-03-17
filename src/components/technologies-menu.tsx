"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const hireTalentItems = [
  { label: "Generative AI", href: "#" },
  { label: "DevOps", href: "#" },
  { label: "Lead Generation", href: "#" },
  { label: "Product Development", href: "#" },
  { label: "Web Application Development", href: "#" },
  { label: "Mobile App Development", href: "#" },
  { label: "ERP & CRM Implementation", href: "#" },
  { label: "eCommerce Development", href: "#" },
  { label: "QA / Software Testing", href: "#" },
  { label: "Salesforce", href: "#" },
];

const technologies = {
  frontend: [
    { label: "AngularJS", href: "#" },
    { label: "ReactJS", href: "#" },
    { label: "Vue.js", href: "#" },
    { label: "Node.js", href: "#" },
  ],
  mobile: [
    { label: "React Native", href: "#" },
    { label: "Flutter", href: "#" },
    { label: "iOS Swift", href: "#" },
    { label: "Android", href: "#" },
    { label: "iOS", href: "#" },
  ],
  backend: [
    { label: "PHP", href: "#" },
    { label: "Ruby on Rails", href: "#" },
    { label: "Java", href: "#" },
    { label: "Python", href: "#" },
    { label: ".NET", href: "#" },
    { label: "Golang", href: "#" },
    { label: "Magento", href: "#" },
  ],
  others: [
    { label: "MEAN Stack", href: "#" },
    { label: "MERN Stack", href: "#" },
    { label: "DevOps – Azure", href: "#" },
    { label: "DevOps – AWS", href: "#" },
    { label: "Dynamics CRM", href: "#" },
    { label: "Testing", href: "#" },
    { label: "C# / MVC", href: "#" },
  ],
};

export function TechnologiesMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-muted hover:text-primary transition-colors duration-150">
        Technologies
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 w-[1100px] -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="flex">
                <div className="w-[320px] border-r border-[#eee] p-6">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[1px] text-[#888]">
                    Hire Talent For
                  </h3>
                  <ul className="space-y-[10px]">
                    {hireTalentItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-sm text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="mt-6 inline-block rounded-[8px] bg-[#ff7a00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e66f00]"
                  >
                    Hire Dedicated Team
                  </Link>
                </div>

                <div className="flex-1 p-6">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[1px] text-[#888]">
                    Technologies
                  </h3>
                  <div className="grid grid-cols-4 gap-x-8 gap-y-3">
                    <div>
                      <h4 className="mb-2 text-xs font-semibold text-[#666]">Frontend</h4>
                      <ul className="space-y-[8px]">
                        {technologies.frontend.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-sm text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-xs font-semibold text-[#666]">Mobile</h4>
                      <ul className="space-y-[8px]">
                        {technologies.mobile.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-sm text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-xs font-semibold text-[#666]">Backend</h4>
                      <ul className="space-y-[8px]">
                        {technologies.backend.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-sm text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-xs font-semibold text-[#666]">Others</h4>
                      <ul className="space-y-[8px]">
                        {technologies.others.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-sm text-[#222] transition-all duration-200 hover:translate-x-1 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
