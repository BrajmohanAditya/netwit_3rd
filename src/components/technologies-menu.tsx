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
      <button className="flex items-center gap-2 text-[16px] font-medium text-[#2d2d2d] transition-all duration-200 hover:text-primary">
        Technologies
        <ChevronDown className="h-4 w-4 opacity-60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-[10000] w-[1150px] -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-[6px] bg-[#f5f5f5] shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-200">
              <div className="flex">
                <div className="w-[300px] border-r border-gray-200 p-7">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-[#000]">
                    Hire Talent For
                  </h3>
                  <ul className="space-y-[11px]">
                    {hireTalentItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block text-[15px] text-[#333] transition-all duration-200 hover:text-primary hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="mt-5 inline-block rounded-[4px] bg-primary px-4 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-primary-600 hover:shadow-lg"
                  >
                    Hire Dedicated Team
                  </Link>
                </div>

                <div className="flex-1 p-7">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-[#000]">
                    Technologies
                  </h3>
                  <div className="grid grid-cols-4 gap-x-10 gap-y-3">
                    <div>
                      <h4 className="mb-3 text-[13px] font-semibold text-[#666]">Frontend</h4>
                      <ul className="space-y-[10px]">
                        {technologies.frontend.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-[14px] text-[#333] transition-all duration-200 hover:text-primary hover:underline"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-[13px] font-semibold text-[#666]">Mobile</h4>
                      <ul className="space-y-[10px]">
                        {technologies.mobile.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-[14px] text-[#333] transition-all duration-200 hover:text-primary hover:underline"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-[13px] font-semibold text-[#666]">Backend</h4>
                      <ul className="space-y-[10px]">
                        {technologies.backend.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-[14px] text-[#333] transition-all duration-200 hover:text-primary hover:underline"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-[13px] font-semibold text-[#666]">Others</h4>
                      <ul className="space-y-[10px]">
                        {technologies.others.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-[14px] text-[#333] transition-all duration-200 hover:text-primary hover:underline"
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
