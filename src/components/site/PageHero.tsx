import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-electric/5 to-transparent" />
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-electric/10 blur-3xl opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-electric font-medium mb-4"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
