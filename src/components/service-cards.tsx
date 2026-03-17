"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Shield, TestTubes, Leaf } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Scale Smarter with AI",
    description: "Leverage cutting-edge artificial intelligence to automate processes, gain insights, and accelerate growth.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Lockdown Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions and threat detection systems.",
    color: "accent-teal",
  },
  {
    icon: TestTubes,
    title: "QA & Automation Testing",
    description: "Ensure software quality with automated testing pipelines and comprehensive quality assurance.",
    color: "accent-gold",
  },
  {
    icon: Leaf,
    title: "Build a Sustainable Future",
    description: "Implement green technology solutions that reduce carbon footprint and promote sustainability.",
    color: "success",
  },
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

const cardHover: Variants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.15, ease: "easeOut" as const },
  },
};

export function ServiceCards() {
  return (
    <section id="services" className="bg-bg py-section">
      <div className="mx-auto max-w-[1200px] px-content-x">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="font-syne text-3xl font-bold text-text md:text-4xl">
            What Are You Looking to Do?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-base text-muted">
            Explore our comprehensive range of services designed to transform your business
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover="hover"
              className="group relative overflow-hidden rounded-card border border-muted/20 bg-surface p-8 transition-colors hover:border-primary/30"
            >
              <motion.div
                variants={cardHover}
                className="flex flex-col gap-4"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-panel bg-${service.color}/10`}>
                  <service.icon className={`h-7 w-7 text-${service.color}`} />
                </div>
                <h3 className="font-syne text-xl font-bold text-text">
                  {service.title}
                </h3>
                <p className="text-base text-muted">{service.description}</p>
                <Link
                  href="#contact"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:gap-3"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
