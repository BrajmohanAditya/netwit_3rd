"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, MessageCircle, X } from "lucide-react";

export function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-primary-600"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
        className="fixed bottom-6 right-24 z-50"
      >
        <AnimatePresence mode="wait">
          {showChat ? (
            <motion.div
              key="chat-open"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-4 w-[300px] rounded-card border border-muted/20 bg-surface p-4 shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-text">Chat Support</h4>
                <button
                  onClick={() => setShowChat(false)}
                  className="p-1 text-muted hover:text-text transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-muted mb-4">
                Hi! How can we help you today?
              </p>
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full rounded-input border border-muted/30 bg-surface-2 px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowChat(!showChat)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-primary-600"
          aria-label="Open chat"
        >
          {showChat ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </motion.button>
      </motion.div>
    </>
  );
}
