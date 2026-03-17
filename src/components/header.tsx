"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MegaMenu } from "./mega-menu";
import { EnterpriseMenu } from "./enterprise-menu";
import { IndustriesMenu } from "./industries-menu";

const navItems = [
  { label: "Technologies", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

const fadeSlideIn = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-header bg-surface/80 backdrop-blur-md border-b border-muted/10"
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-content-x">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-syne text-xl font-bold text-white">N</span>
          </div>
          <span className="font-syne text-xl font-bold text-text">Netwit</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <MegaMenu />
          <EnterpriseMenu />
          <IndustriesMenu />
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-1 text-sm font-medium text-muted hover:text-primary transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="animate-button rounded-button bg-cta px-5 py-2.5 text-sm font-semibold text-cta-text transition-all duration-100 hover:bg-primary-600 active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-muted hover:text-text transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden border-t border-muted/10 bg-surface"
          >
            <nav className="flex flex-col p-content-x py-6 gap-4">
              <Link
                href="#"
                className="text-base font-medium text-muted hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Key Offerings
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-muted hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise Solutions
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-muted hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-muted hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 rounded-button bg-cta px-5 py-3 text-center text-sm font-semibold text-cta-text transition-colors hover:bg-primary-600"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
