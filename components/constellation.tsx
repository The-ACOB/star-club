"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Node = { id: string; label: string; x: number; y: number };

const nodes: Node[] = [
  { id: "curiosity", label: "Curiosity", x: 12, y: 28 },
  { id: "knowledge", label: "Knowledge", x: 30, y: 10 },
  { id: "research", label: "Research", x: 52, y: 18 },
  { id: "ideas", label: "Ideas", x: 70, y: 8 },
  { id: "collaboration", label: "Collaboration", x: 86, y: 30 },
  { id: "discovery", label: "Discovery", x: 66, y: 46 },
  { id: "leadership", label: "Leadership", x: 40, y: 52 },
  { id: "innovation", label: "Innovation", x: 20, y: 60 },
];

const edges: [string, string][] = [
  ["curiosity", "knowledge"],
  ["knowledge", "research"],
  ["research", "ideas"],
  ["ideas", "collaboration"],
  ["collaboration", "discovery"],
  ["discovery", "leadership"],
  ["leadership", "innovation"],
  ["innovation", "curiosity"],
  ["knowledge", "leadership"],
  ["research", "discovery"],
];

function find(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function Constellation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="network" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4 text-violet/70">Constellation / 01</p>
        <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-star md:text-4xl">
          A constellation is never one star.
        </h2>
      </div>

      <div
        ref={ref}
        className="relative mx-auto mt-16 aspect-[16/10] w-full max-w-4xl"
      >
        <svg
          viewBox="0 0 100 65"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {edges.map(([a, b], i) => {
            const na = find(a);
            const nb = find(b);
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="rgba(139,107,255,0.28)"
                strokeWidth="0.15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{
                  duration: 1.1,
                  delay: 0.4 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            );
          })}
        </svg>

        {nodes.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <div className="relative flex flex-col items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-star shadow-[0_0_10px_2px_rgba(139,107,255,0.4)] transition-shadow duration-300 group-hover:shadow-[0_0_18px_5px_rgba(139,107,255,0.6)]" />
              <span className="eyebrow mt-2 whitespace-nowrap text-[9px] text-mist transition-colors duration-300 group-hover:text-star">
                {n.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
