"use client";

import { motion } from "framer-motion";

export function Vision() {
  return (
    <section id="vision" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6 text-violet/70"
        >
          The Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-4xl font-medium leading-[1.08] tracking-tight text-star md:text-5xl"
        >
          Not another club.
          <br />
          A constellation of minds.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-mist"
        >
          ACOB Star Club is being built as a space for people who are curious
          enough to ask better questions, ambitious enough to explore them,
          and open enough to learn from one another.
        </motion.p>
      </div>
    </section>
  );
}
