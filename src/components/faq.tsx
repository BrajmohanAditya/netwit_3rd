"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Q: What is an AI SaaS solution?",
    answer: "An AI SaaS (Software as a Service) solution leverages artificial intelligence capabilities hosted in the cloud. It allows businesses to access advanced machine learning models, predictive analytics, and natural language processing without managing the underlying complex infrastructure. This enables rapid scaling and continuous feature updates.",
  },
  {
    question: "Q: What makes Netsmartz the ideal partner to accelerate your business growth with AI?",
    answer: "Netsmartz combines decades of enterprise software engineering expertise with cutting-edge AI research. We don't just provide off-the-shelf tools; we act as a dedicated partner, deeply integrating custom AI models seamlessly into your existing tech stack ensuring data security and measurable ROI.",
  },
  {
    question: "Q: Why should a SaaS business adopt an AI-first approach?",
    answer: "An AI-first approach shifts the focus from simply digitizing workflows to actively automating decisions and personalizing user experiences at scale. It significantly drives better user retention, lowers churn through predictive analytics, and provides a continuous competitive moat in rapidly evolving industries.",
  },
  {
    question: "Q: Can AI help reduce SaaS operational costs?",
    answer: "Yes, significantly. AI automates repetitive administrative tasks, streamlines customer support through intelligent agents, optimizes server resource allocation, and improves incident response times. This allows your human team to focus exclusively on high-value strategic initiatives.",
  },
  {
    question: "Q: What unique benefit does Netsmartz offer to drive success in the AI-powered SaaS industry?",
    answer: "Our unique differentiator is our proprietary integration framework paired with global technology centers. We deploy specialized, home-grown AI accelerators that cut development timelines in half, supported by dedicated 24/7 global talent that scales with your growth.",
  },
];

const fadeSlideIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white dark:bg-[var(--color-bg)] py-20 px-6 font-sans">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center w-full mb-10"
        >
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[#111827] dark:text-[var(--color-text)]">
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>
        </motion.div>

        <div className="w-full space-y-[2px] mb-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeSlideIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#8f96a1] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:px-6 md:py-4 text-left transition-colors hover:bg-[#7e8590]"
              >
                <span className="font-semibold text-white text-[13px] md:text-[14px]">
                  {faq.question}
                </span>
                <span className="text-white ml-4 shrink-0 transition-transform duration-300">
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="p-4 md:px-6 md:pb-5 text-white/90 text-[13px] md:text-[14px] leading-relaxed border-t border-white/20 bg-[#7e8590]/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/faq"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-2.5 rounded-[4px] text-[13px] font-bold uppercase tracking-wide hover:bg-primary-600 transition-colors shadow-sm"
          >
            See All FAQs
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
