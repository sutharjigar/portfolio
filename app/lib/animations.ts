// ─── Shared Framer Motion Variants ────────────────────────────────────────

/** Fade + slide up entrance. Pass delay in seconds. */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: "easeOut" },
});

/** Parent container variant for staggered children */
export const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

/** Fade + slide in from left */
export const fadeInLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

/** Scale in spring (used for modals / success states) */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
  transition: { type: "spring", stiffness: 300, damping: 25 },
};
