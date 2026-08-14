"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const KnowledgeCore = dynamic(
  () => import("@/components/knowledge-core").then((m) => m.KnowledgeCore),
  { ssr: false }
);

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero({ onNotify }: { onNotify: () => void }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-16"
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        className="eyebrow relative z-10 mb-6 text-violet/80"
      >
        An Intellectual Network by ACOB
      </motion.p>

      <div className="relative z-10 -mb-6 md:-mb-16">
        <KnowledgeCore />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
        className="relative z-10 text-balance text-center font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-gradient sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Where curious minds
        <br />
        find their constellation.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
        className="relative z-10 mt-7 max-w-md text-balance text-center text-[15px] leading-relaxed text-mist md:text-base"
      >
        A new network for students, thinkers, builders, researchers, and
        curious minds — coming soon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: easeOut }}
        className="relative z-10 mt-10 flex flex-col items-center gap-5"
      >
        <button
          onClick={onNotify}
          className="group relative overflow-hidden rounded-full border border-violet/40 bg-violet/[0.06] px-7 py-3 text-[13px] font-medium text-star transition-all duration-300 hover:border-violet/70 hover:bg-violet/[0.12]"
        >
          <span className="relative z-10">Notify me when we launch</span>
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>
        <span className="eyebrow text-[10px] text-ash">
          The next constellation is forming
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute bottom-8 left-0 right-0 z-10 hidden items-center justify-between px-10 md:flex"
      >
        <span className="mono-meta text-[10px] text-ash">
          23.8103&deg; N / 90.4125&deg; E
        </span>
        <span className="mono-meta text-[10px] text-ash">ACOB / SC&#8209;001</span>
      </motion.div>
    </section>
  );
}
