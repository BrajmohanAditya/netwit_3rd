"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1500+", label: "SaaS Experts" },
  { value: "200+", label: "AI Experts" },
  { value: "2000+", label: "Clients" },
  { value: "10+", label: "Locations Worldwide" },
];

const fadeSlideIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Statistics() {
  return (
    <section className="bg-surface-2 py-12 sm:py-section">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1200px] px-4 sm:px-6 grid grid-cols-2 md:flex md:justify-around gap-6 sm:gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeSlideIn}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <span className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              {stat.value}
            </span>
            <span className="mt-1 sm:mt-2 text-sm sm:text-base text-muted">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
