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
    <section className="relative overflow-hidden bg-primary py-section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-white/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-accent-teal/20 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-[800px] px-content-x text-center"
      >
        <h2 className="font-syne text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Ready to Embrace an AI-First SaaS Strategy?
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-lg text-white/80">
          Join 2000+ businesses worldwide that have transformed their operations with our cutting-edge solutions.
        </p>
        <Link
          href="#contact"
          className="animate-button group mt-10 inline-flex items-center gap-2 rounded-button bg-white px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-white/90 active:scale-[0.98]"
        >
          Get Started
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
