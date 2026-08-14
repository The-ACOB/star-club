"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const labels = [
  { text: "THINK", x: 18, y: 22, delay: 0 },
  { text: "BUILD", x: 62, y: 14, delay: 0.5 },
  { text: "QUESTION", x: 82, y: 40, delay: 1.0 },
  { text: "DISCOVER", x: 46, y: 52, delay: 1.4 },
  { text: "CONNECT", x: 12, y: 58, delay: 0.8 },
  { text: "CREATE", x: 70, y: 66, delay: 1.8 },
];

export function NetworkForming() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-4xl font-medium tracking-tight text-star md:text-5xl"
        >
          The network is forming.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 text-balance text-mist"
        >
          Every great constellation begins with a few points of light.
        </motion.p>
      </div>

      <div ref={ref} className="relative mx-auto mt-20 h-[280px] max-w-4xl md:h-[360px]">
        {labels.map((l) => (
          <motion.div
            key={l.text}
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: l.delay, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-drift"
            style={{
              left: `${l.x}%`,
              top: `${l.y}%`,
              animationDelay: `${l.delay}s`,
            }}
          >
            <div className="flex items-center gap-2 rounded-full border border-line bg-void/60 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-cyan" />
              <span className="mono-meta text-[10px] text-mist">{l.text}</span>
            </div>
          </motion.div>
        ))}

        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(45%_45%_at_50%_50%,rgba(139,107,255,0.08),transparent_70%)]" />
      </div>
    </section>
  );
}
