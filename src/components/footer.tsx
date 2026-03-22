"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, ShieldCheck, Sparkles, Globe, ArrowUpRight, CheckCircle } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Leadership", href: "/about/leadership-team" },
    { label: "Timeline", href: "/about/timeline" },
    { label: "Blog", href: "/resources/blog" },
  ],
  services: [
    { label: "QA Automation", href: "/services/qa-automation-testing" },
    { label: "Accounting", href: "/services/accounting-services" },
    { label: "DevOps", href: "/services/devops" },
    { label: "Cloud Ops", href: "/services/global-capability-center" },
  ],
  solutions: [
    { label: "CyberSmartz", href: "/cyber-smartz" },
    { label: "QASmartz", href: "/qa-smartz" },
    { label: "DataSmartz 360", href: "/data-smartz360" },
    { label: "SecureSmartz", href: "/secure-smartz" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Ethics & Compliance", href: "#" },
    { label: "Cookie Settings", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]" },
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]" },
];

export function Footer() {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Abstracts */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-600/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-indigo-600/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1250px] mx-auto px-6 relative z-10">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16 mb-24 pb-20 border-b border-white/5 items-center">
           <div className="space-y-8">
              <Link href="/" className="flex items-center gap-4 group">
                 <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
                    <span className="text-2xl font-black text-white italic tracking-tighter">N</span>
                 </div>
                 <span className="text-3xl font-black text-white italic tracking-tighter uppercase underline decoration-blue-600/30">Netwit.</span>
              </Link>
              <h2 className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-xl italic">
                 Architecting the <span className="text-white font-bold">future of digital capital</span> through high-fidelity AI, cybersecurity, and global technical stewardship.
              </h2>
              <div className="flex flex-wrap gap-8 items-center">
                 <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> ISO 27001 Certified
                 </div>
                 <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-blue-500" /> GDPR SOC2 Type II
                 </div>
                 <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <Globe className="w-4 h-4 text-indigo-500" /> Global Operations
                 </div>
              </div>
           </div>

           <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                 <span className="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em] block italic">The Global Dispatch</span>
                 <h3 className="text-2xl font-black text-white italic tracking-tight uppercase">Strategic Insight Sync.</h3>
                 <p className="text-sm text-slate-400 font-light italic">Join 10,000+ technical leaders receiving our weekly roadmap audit.</p>
                 <div className="flex gap-4">
                    <input 
                      type="email" 
                      placeholder="Principal Email" 
                      className="flex-1 bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                    />
                    <button className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-95">
                       <ArrowUpRight className="w-6 h-6" />
                    </button>
                 </div>
              </div>
              <Sparkles className="absolute -bottom-4 -right-4 w-24 h-24 text-blue-500/5 rotate-12" />
           </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div>
            <h4 className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-10 italic">Institutional</h4>
            <ul className="space-y-5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-medium italic">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.5em] mb-10 italic">Services</h4>
            <ul className="space-y-5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-medium italic">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-sky-500 font-black uppercase tracking-[0.5em] mb-10 italic">Solutions</h4>
            <ul className="space-y-5">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-medium italic">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-[0.5em] mb-10 italic">Governance</h4>
            <ul className="space-y-5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-medium italic">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Social */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-10">
              <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] italic">
                 © {new Date().getFullYear()} NETWIT GLOBAL SYSTEMS. REFINED ARCHITECTURE.
              </p>
              <div className="hidden md:flex gap-6">
                 <Link href="#" className="text-[10px] text-slate-600 font-bold uppercase tracking-widest hover:text-white transition-colors italic">Site Map</Link>
                 <Link href="#" className="text-[10px] text-slate-600 font-bold uppercase tracking-widest hover:text-white transition-colors italic">Registry</Link>
              </div>
           </div>

           <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center text-slate-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
           </div>
        </div>

      </div>
    </footer>
  );
}
