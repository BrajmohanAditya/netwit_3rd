"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeSlideIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

export function StrategyCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-12 sm:py-section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-white/10 blur-[60px] sm:blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-accent-teal/20 blur-[50px] sm:blur-[60px] md:blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-[800px] px-4 sm:px-6 text-center"
      >
        <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-2">
          Ready to Embrace an AI-First SaaS Strategy?
        </h2>
        <p className="mx-auto mt-4 sm:mt-6 max-w-[600px] text-sm sm:text-base md:text-lg text-white/80 px-2">
          Join 2000+ businesses worldwide that have transformed their operations with our cutting-edge solutions.
        </p>
        <Link
          href="#contact"
          className="animate-button group mt-6 sm:mt-10 inline-flex items-center gap-2 rounded-button bg-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-primary transition-all hover:bg-white/90 active:scale-[0.98]"
        >
          Get Started
          <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
