"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const KnowledgeCore = dynamic(
  () => import("@/components/knowledge-core").then((m) => m.KnowledgeCore),
  { ssr: false }
);

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-28 md:px-10"
    >
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          className="text-[11px] font-medium uppercase tracking-widest2 text-violet/70"
        >
          An Intellectual Network by ACOB
        </motion.p>

        <div className="mt-10 md:mt-12">
          <KnowledgeCore />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
          className="mt-10 text-balance text-center font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-gradient sm:text-6xl md:mt-14 md:text-7xl"
        >
          Where curious minds
          <br />
          find their constellation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
          className="mt-7 max-w-md text-balance text-center text-[15px] leading-relaxed text-mist md:text-base"
        >
          A new network for students, thinkers, builders, researchers, and
          curious minds.
        </motion.p>
      </div>

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
