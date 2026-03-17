"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Company", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  explore: [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Resources", href: "#" },
  ],
  connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Support", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Sales", href: "#" },
  ],
  queries: [
    { label: "FAQs", href: "#faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const fadeSlideIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="bg-surface-2 pt-section pb-8">
      <div className="mx-auto max-w-[1200px] px-content-x">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid gap-8 pb-12 border-b border-muted/20 md:grid-cols-2 lg:grid-cols-6"
        >
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-syne text-xl font-bold text-white">N</span>
              </div>
              <span className="font-syne text-xl font-bold text-text">Netwit</span>
            </Link>
            <p className="mt-4 text-base text-muted max-w-[300px]">
              Empowering businesses worldwide with cutting-edge AI, cybersecurity, and sustainable technology solutions.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:info@netsmartz.com" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> info@netsmartz.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +1 (555) 000-0000
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin className="h-4 w-4" /> Rochester, NY, USA
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text">About</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text">Explore</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text">Connect</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text">Queries</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.queries.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row"
        >
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Netwit. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-muted transition-colors hover:bg-primary hover:text-white"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
