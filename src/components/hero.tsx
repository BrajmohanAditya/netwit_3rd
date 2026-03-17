"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeSlideIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-bg pt-header">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent-teal/10 blur-[100px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mx-auto max-w-[900px] px-content-x text-center"
      >
        <motion.div variants={fadeSlideIn} transition={{ duration: 0.4, ease: "easeOut" }}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AI-First SaaS Solutions
          </span>
        </motion.div>

        <motion.h1
          variants={fadeSlideIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-syne text-4xl font-bold leading-tight text-text md:text-5xl lg:text-hero"
        >
          Transform Your Business with{" "}
          <span className="text-primary">Intelligent</span> Solutions
        </motion.h1>

        <motion.p
          variants={fadeSlideIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-[700px] text-lg text-muted md:text-xl"
        >
          Empowering 2000+ businesses worldwide with cutting-edge AI, cybersecurity,
          automation, and sustainable technology solutions.
        </motion.p>

        <motion.div
          variants={fadeSlideIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#contact"
            className="animate-button group flex items-center gap-2 rounded-button bg-cta px-8 py-3.5 text-base font-semibold text-cta-text transition-all hover:bg-primary-600 active:scale-[0.98]"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services"
            className="animate-button rounded-button border border-muted/30 bg-surface px-8 py-3.5 text-base font-semibold text-text transition-all hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]"
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          variants={fadeSlideIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-muted"
        >
          <div className="flex items-center gap-2">
            <span className="font-syne text-2xl font-bold text-primary">1500+</span>
            <span>SaaS Experts</span>
          </div>
          <div className="h-4 w-px bg-muted/30" />
          <div className="flex items-center gap-2">
            <span className="font-syne text-2xl font-bold text-primary">200+</span>
            <span>AI Experts</span>
          </div>
          <div className="h-4 w-px bg-muted/30" />
          <div className="flex items-center gap-2">
            <span className="font-syne text-2xl font-bold text-primary">2000+</span>
            <span>Clients</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-muted/30 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-muted/50" />
        </div>
      </div>
    </section>
  );
}
