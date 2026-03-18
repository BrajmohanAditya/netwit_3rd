"use client";

import { motion } from "framer-motion";

const partners = [
  "Microsoft",
  "Salesforce",
  "Google",
  "Adobe",
  "IBM",
  "AWS",
  "Oracle",
  "SAP",
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

export function Partners() {
  return (
    <section className="bg-surface-2 py-12 sm:py-section">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center"
      >
        <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-text">
          Our Partners
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex h-12 sm:h-16 w-24 sm:w-32 items-center justify-center rounded-lg border border-muted/20 bg-surface px-3 sm:px-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              <span className="font-syne text-sm sm:text-base md:text-lg font-bold text-muted">{partner}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
