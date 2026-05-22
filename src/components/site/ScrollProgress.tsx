import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0%" }}
      className="fixed top-0 inset-x-0 h-[2px] bg-electric z-[60]"
    />
  );
}
