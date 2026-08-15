"use client";

import { motion } from "framer-motion";

export function ComingSoon() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 md:px-10 md:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_60%_at_50%_50%,rgba(139,107,255,0.12),transparent_70%)]"
      />

      <div aria-hidden="true" className="pointer-events-none absolute h-[440px] w-[440px]">
        <div className="absolute inset-0 animate-[spin_70s_linear_infinite] rounded-full border border-line" />
        <div className="absolute inset-12 animate-[spin_100s_linear_infinite_reverse] rounded-full border border-line" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="eyebrow relative z-10 mb-6 text-violet/70"
      >
        ACOB Star Club
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center font-display text-[16vw] font-medium leading-[0.9] tracking-tighter text-gradient sm:text-7xl md:text-8xl"
      >
        COMING
        <br />
        SOON
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 mt-10 text-balance text-center text-mist"
      >
        The next constellation is forming.
      </motion.p>
    </section>
  );
}
