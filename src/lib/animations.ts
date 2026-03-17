import { type Variants } from "framer-motion";

export const fadeSlideIn: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
};

export const fadeSlideInSlow: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerFadeSlide: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const cardHover: Variants = {
  initial: { y: 0 },
  hover: {
    y: -2,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

export const buttonTap: Variants = {
  initial: { scale: 1 },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
  hover: { scale: 1.02, transition: { duration: 0.1 } },
};
