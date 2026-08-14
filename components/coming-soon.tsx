"use client";

import { motion } from "framer-motion";

export function ComingSoon({ onNotify }: { onNotify: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-36 md:py-52">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_60%_at_50%_50%,rgba(139,107,255,0.14),transparent_70%)]"
      />

      {/* faint orbiting points behind the type */}
      <div aria-hidden="true" className="pointer-events-none absolute h-[520px] w-[520px]">
        <div className="absolute inset-0 animate-[spin_60s_linear_infinite] rounded-full border border-line" />
        <div className="absolute inset-10 animate-[spin_90s_linear_infinite_reverse] rounded-full border border-line" />
        <div className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-violet shadow-[0_0_12px_3px_rgba(139,107,255,0.5)]" />
        <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_10px_3px_rgba(109,224,255,0.4)]" />
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
        className="relative z-10 text-center font-display text-[18vw] font-medium leading-[0.9] tracking-tighter text-gradient sm:text-7xl md:text-8xl lg:text-9xl"
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

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
        onClick={onNotify}
        className="group relative z-10 mt-10 overflow-hidden rounded-full border border-violet/40 bg-violet/[0.06] px-8 py-3.5 text-sm font-medium text-star transition-all duration-300 hover:border-violet/70 hover:bg-violet/[0.12]"
      >
        <span className="relative z-10">Stay in orbit →</span>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </motion.button>
    </section>
  );
}
