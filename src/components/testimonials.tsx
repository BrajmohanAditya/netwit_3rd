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
    <section className="bg-surface-2 py-12 sm:py-section">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-text">
            Client Testimonials
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group rounded-card border border-muted/20 bg-surface p-5 sm:p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-primary/30">"</div>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted">{testimonial.quote}</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold text-text text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
              <button className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm font-medium text-primary transition-colors hover:text-primary-600">
                <Play className="h-3 w-3 sm:h-4 sm:w-4" /> Watch Video
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
