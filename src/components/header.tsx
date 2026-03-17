"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MegaMenu } from "./mega-menu";
import { EnterpriseMenu } from "./enterprise-menu";
import { IndustriesMenu } from "./industries-menu";
import { TechnologiesMenu } from "./technologies-menu";
import { ResourcesMenu } from "./resources-menu";
import { AboutMenu } from "./about-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] h-[80px] bg-white border-b border-gray-200 shadow-sm overflow-visible">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-[50px]">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary">
            <span className="font-syne text-xl font-bold text-white">N</span>
          </div>
          <span className="font-syne text-2xl font-bold text-[#2d2d2d]">Netwit</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <MegaMenu />
          <EnterpriseMenu />
          <IndustriesMenu />
          <TechnologiesMenu />
          <ResourcesMenu />
          <AboutMenu />
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary-600 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2d2d2d] hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              <Link
                href="#"
                className="text-base font-medium text-[#2d2d2d] hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Key Offerings
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-[#2d2d2d] hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise Solutions
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-[#2d2d2d] hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-[#2d2d2d] hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technologies
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-[#2d2d2d] hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-[#2d2d2d] hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 rounded-full bg-primary px-6 py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </AnimatePresence>
      </header>
  );
}
