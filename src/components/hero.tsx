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
    <section className="relative min-h-screen flex items-center justify-center bg-bg pt-[80px] px-4 sm:px-6 lg:pt-header">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute right-0 top-1/4 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-primary/10 blur-[80px] sm:blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-accent-teal/10 blur-[60px] sm:blur-[80px] md:blur-[100px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mx-auto max-w-[900px] text-center"
      >
        <motion.div variants={fadeSlideIn} transition={{ duration: 0.4, ease: "easeOut" }}>
          <span className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-primary">
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
          className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-hero font-bold leading-tight text-text"
        >
          Transform Your Business with{" "}
          <span className="text-primary">Intelligent</span> Solutions
        </motion.h1>

        <motion.p
          variants={fadeSlideIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto mt-4 sm:mt-6 max-w-[700px] text-base sm:text-lg text-muted md:text-xl px-2"
        >
          Empowering 2000+ businesses worldwide with cutting-edge AI, cybersecurity,
          automation, and sustainable technology solutions.
        </motion.p>

        <motion.div
          variants={fadeSlideIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <Link
            href="#contact"
            className="animate-button group flex items-center gap-2 rounded-button bg-cta px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-cta-text transition-all hover:bg-primary-600 active:scale-[0.98] w-full sm:w-auto justify-center"
          >
            Start Your Journey
            <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services"
            className="animate-button rounded-button border border-muted/30 bg-surface px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-text transition-all hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98] w-full sm:w-auto justify-center"
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          variants={fadeSlideIn}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-muted px-4"
        >
          <div className="flex items-center gap-2">
            <span className="font-syne text-xl sm:text-2xl font-bold text-primary">1500+</span>
            <span>SaaS Experts</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-muted/30" />
          <div className="flex items-center gap-2">
            <span className="font-syne text-xl sm:text-2xl font-bold text-primary">200+</span>
            <span>AI Experts</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-muted/30" />
          <div className="flex items-center gap-2">
            <span className="font-syne text-xl sm:text-2xl font-bold text-primary">2000+</span>
            <span>Clients</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="h-10 w-6 rounded-full border-2 border-muted/30 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-muted/50" />
        </div>
      </div>
    </section>
  );
}
