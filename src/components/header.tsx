"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MegaMenu } from "./mega-menu";
import { EnterpriseMenu } from "./enterprise-menu";
import { IndustriesMenu } from "./industries-menu";
import { TechnologiesMenu } from "./technologies-menu";
import { ResourcesMenu } from "./resources-menu";
import { AboutMenu } from "./about-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Hide the navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[9999] h-[80px] bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="mx-auto flex h-full max-w-[1440px] w-full items-center justify-between px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 xl:gap-3 flex-shrink-0 z-10 w-fit">
          <div className="flex h-10 w-10 xl:h-11 xl:w-11 items-center justify-center rounded-lg bg-primary">
            <span className="font-syne text-[18px] xl:text-xl font-bold text-white">N</span>
          </div>
          <span className="font-syne text-[20px] xl:text-2xl font-bold text-[#2d2d2d]">Netwit</span>
        </Link>

        {/* Center: Navigation Links (Only visible on lg and up) */}
        <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center">
           <nav className="flex items-center justify-center gap-2 lg:gap-4 xl:gap-6 px-2 whitespace-nowrap">
             <MegaMenu />
             <EnterpriseMenu />
             <IndustriesMenu />
             <TechnologiesMenu />
             <ResourcesMenu />
             <AboutMenu />
           </nav>
        </div>

        {/* Right: CTA Button (Visible on lg and up) */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-end z-10 w-fit">
          <Link
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 xl:px-6 xl:py-3 text-[14px] xl:text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary-600 hover:shadow-lg whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle (Visible below lg) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex-shrink-0 p-2 text-[#2d2d2d] hover:text-primary transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col px-6 py-6 gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
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
                className="mt-4 rounded-full bg-primary px-6 py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-primary-600 w-full max-w-sm"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
