"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const testimonials = [
  {
    quote: "Netwit transformed our business with their AI solutions. We've seen a 300% increase in operational efficiency.",
    author: "Sarah Chen",
    role: "CEO, TechCorp",
    image: "/placeholder-avatar.jpg",
  },
  {
    quote: "Their cybersecurity expertise is unmatched. They protected our sensitive data and prevented potential breaches.",
    author: "Michael Roberts",
    role: "CTO, FinanceHub",
    image: "/placeholder-avatar.jpg",
  },
  {
    quote: "The QA automation they implemented saved us countless hours and improved our release quality significantly.",
    author: "Emily Watson",
    role: "VP Engineering, StartupX",
    image: "/placeholder-avatar.jpg",
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

export function Testimonials() {
  return (
    <section className="bg-surface-2 py-section">
      <div className="mx-auto max-w-[1200px] px-content-x">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="font-syne text-3xl font-bold text-text md:text-4xl">
            Client Testimonials
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group rounded-card border border-muted/20 bg-surface p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 text-4xl text-primary/30">"</div>
              <p className="mb-6 text-base text-muted">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold text-text">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
              <button className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-600">
                <Play className="h-4 w-4" /> Watch Video
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
