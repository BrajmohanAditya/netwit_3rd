"use client";

import { motion } from "framer-motion";

const products = [
  { name: "ProjectPro", description: "Project Management Solution" },
  { name: "CareSmartz", description: "Healthcare Management Platform" },
  { name: "DataSync", description: "Data Integration Tools" },
  { name: "CloudFlow", description: "Cloud Infrastructure" },
  { name: "SecureOps", description: "Security Operations" },
  { name: "TestAutomate", description: "QA Automation Platform" },
  { name: "AIVentures", description: "AI Consulting Services" },
  { name: "GreenTech", description: "Sustainability Solutions" },
];

const fadeSlideIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export function ProductEcosystem() {
  return (
    <section className="bg-bg py-12 sm:py-section">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] px-4 sm:px-6"
      >
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-text">
            Product & Company Ecosystem
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-[600px] text-sm sm:text-base text-muted px-2">
            Explore our suite of products designed to power your business
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group animate-card-hover rounded-card border border-muted/20 bg-surface p-4 sm:p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <span className="font-syne text-base sm:text-lg font-bold text-primary">
                  {product.name.charAt(0)}
                </span>
              </div>
              <h3 className="mt-3 sm:mt-4 font-syne text-base sm:text-lg font-bold text-text">
                {product.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">{product.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
