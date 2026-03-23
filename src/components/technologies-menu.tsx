"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const hireTalentItems = [
  { label: "Generative AI", href: "/hire/generative-ai" },
  { label: "DevOps", href: "/hire/devops" },
  { label: "Lead Generation", href: "/hire/lead-generation" },
  { label: "Product Development", href: "/hire/product-development" },
  { label: "Web Application Development", href: "/hire/web-application-development" },
  { label: "Mobile App Development", href: "/hire/mobile-app-development" },
  { label: "ERP & CRM Implementation", href: "/hire/erp-crm-implementation" },
  { label: "eCommerce Development", href: "/hire/ecommerce-development" },
  { label: "QA / Software Testing", href: "/hire/qa-software-testing" },
  { label: "Salesforce", href: "/hire/salesforce" },
];

const technologies = {
  frontend: [
    { label: "AngularJS", href: "/technology/angularjs" },
    { label: "ReactJS", href: "/technology/reactjs" },
    { label: "Vue.js", href: "/technology/vuejs" },
    { label: "Node.js", href: "/technology/nodejs" },
  ],
  mobile: [
    { label: "React Native", href: "/technology/react-native" },
    { label: "Flutter", href: "/technology/flutter" },
    { label: "iOS Swift", href: "/technology/ios-swift" },
    { label: "Android", href: "/technology/android" },
    { label: "iOS", href: "/technology/ios" },
  ],
  backend: [
    { label: "PHP", href: "/technology/php" },
    { label: "Ruby on Rails", href: "/technology/ruby-on-rails" },
    { label: "Java", href: "/technology/java" },
    { label: "Python", href: "/technology/python" },
    { label: ".NET", href: "/technology/dotnet" },
    { label: "Golang", href: "/technology/golang" },
    { label: "Magento", href: "/technology/magento" },
  ],
  others: [
    { label: "MERN Stack", href: "/technology/mern-stack" },
    { label: "DevOps – Azure", href: "/technology/devops-azure" },
    { label: "DevOps – AWS", href: "/technology/devops-aws" },
    { label: "Dynamics CRM", href: "/technology/dynamics-crm" },
    { label: "Testing", href: "/technology/testing" },
    { label: "C# / MVC", href: "/technology/csharp-mvc" },
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
            initial={{ opacity: 0, y: -8, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -8, x: "-50%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-[10000] w-[800px]"
          >
            <div className="overflow-hidden rounded-[6px] bg-[#f5f5f5] shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-200">
              <div className="flex">
                <div className="w-[220px] border-r border-gray-200 p-6">
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
                    href="/hire/dedicated-team"
                    className="mt-5 inline-block rounded-[4px] bg-primary px-4 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-primary-600 hover:shadow-lg"
                  >
                    Hire Dedicated Team
                  </Link>
                </div>

                <div className="flex-1 p-6">
                  <h3 className="mb-5 text-[14px] font-semibold uppercase tracking-[1px] text-[#000]">
                    Technologies
                  </h3>
                  <div className="grid grid-cols-4 gap-x-4 gap-y-3">
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
