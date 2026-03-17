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
    <section className="bg-bg py-section">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] px-content-x"
      >
        <div className="mb-12 text-center">
          <h2 className="font-syne text-3xl font-bold text-text md:text-4xl">
            Product & Company Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-base text-muted">
            Explore our suite of products designed to power your business
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group animate-card-hover rounded-card border border-muted/20 bg-surface p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <span className="font-syne text-lg font-bold text-primary">
                  {product.name.charAt(0)}
                </span>
              </div>
              <h3 className="mt-4 font-syne text-lg font-bold text-text">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{product.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
