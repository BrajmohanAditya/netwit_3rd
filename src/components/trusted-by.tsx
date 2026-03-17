"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Clutch", logo: "/logos/clutch.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
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

export function TrustedBy() {
  return (
    <section className="bg-bg py-section">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] px-content-x text-center"
      >
        <p className="text-base font-medium text-muted">Trusted By 2000+ SaaS Businesses</p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {companies.map((company) => (
            <motion.div
              key={company.name}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex h-12 w-32 items-center justify-center rounded-lg border border-muted/20 bg-surface-2 px-4 transition-colors hover:border-primary/30"
            >
              <span className="font-syne text-lg font-bold text-muted">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
