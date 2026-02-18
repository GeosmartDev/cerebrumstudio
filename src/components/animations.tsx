import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Fade up on scroll — use `custom` prop to pass delay
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
};

// Staggered container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

// Generic section wrapper that triggers animation when in view
interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInSection = ({ children, className, delay = 0 }: FadeInSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Grid wrapper with stagger
interface GridProps {
  children: ReactNode;
  className?: string;
}

export const StaggerGrid = ({ children, className }: GridProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger card
export const StaggerCard = ({ children, className }: GridProps) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);
