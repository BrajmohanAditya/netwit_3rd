"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, and technology. Our solutions are tailored to meet the unique challenges of each sector.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation timelines vary based on project complexity. Small to medium projects typically take 2-4 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support including 24/7 technical support, dedicated account managers, regular maintenance, and priority access to new features and updates.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we specialize in creating custom solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and deliver personalized implementations.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including project-based, subscription, and retainer options. We work with businesses of all sizes and can create a pricing plan that fits your budget.",
  },
  {
    question: "How do you ensure data security?",
    answer: "We follow industry-leading security practices including encryption, regular security audits, compliance with GDPR and SOC 2, and implementation of zero-trust security architecture.",
  },
];

const fadeSlideIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bg py-section">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-[800px] px-content-x"
      >
        <div className="mb-12 text-center">
          <h2 className="font-syne text-3xl font-bold text-text md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden rounded-card border border-muted/20 bg-surface"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-surface-2"
              >
                <span className="font-medium text-text">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="border-t border-muted/20 p-5">
                      <p className="text-base text-muted">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
