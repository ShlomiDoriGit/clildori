import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Strong ease-out used across the Sunrise theme. */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

/** Heading text that rises out of an invisible mask when scrolled into view. */
export const MaskRise = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  // The wrapper is what gets observed: the inner text starts fully clipped,
  // so an observer on it would never see it enter the viewport.
  <motion.span
    className="inline-block overflow-hidden align-bottom pb-[0.08em]"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
  >
    <motion.span
      className="inline-block"
      variants={{ hidden: { y: "105%" }, show: { y: 0 } }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.span>
  </motion.span>
);

/** Wipes an image (or any block) in from the bottom with clip-path. */
export const WipeIn = ({
  children,
  className = "",
  radius = "1.5rem",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  radius?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ clipPath: `inset(100% 0% 0% 0% round ${radius})` }}
    whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius})` }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, delay, ease: EASE_IN_OUT }}
  >
    {children}
  </motion.div>
);

/**
 * Marks its element with data-inview="true" once it scrolls into view.
 * CSS (.stagger-in) uses that to cascade the direct children in, 70ms apart.
 */
export const InView = ({
  children,
  className = "",
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount });
  return (
    <div ref={ref} className={className} data-inview={seen}>
      {children}
    </div>
  );
};

/** Product / photo entrance: rises and settles, with a hint of tilt. */
export const SettleIn = ({ children, className = "", tilt = -2, delay = 0.1 }: { children: ReactNode; className?: string; tilt?: number; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28, scale: 0.96, rotate: tilt }}
    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay, ease: EASE_OUT }}
  >
    {children}
  </motion.div>
);
