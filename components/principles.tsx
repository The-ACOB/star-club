"use client";

import { motion } from "framer-motion";

type Principle = {
  index: string;
  title: string;
  copy: string;
  points: [number, number][];
  edges: [number, number][];
};

const principles: Principle[] = [
  {
    index: "01",
    title: "Curiosity",
    copy: "Question beyond the obvious.",
    points: [
      [10, 44],
      [30, 12],
      [52, 30],
      [44, 54],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
  },
  {
    index: "02",
    title: "Connection",
    copy: "Ideas become stronger when minds intersect.",
    points: [
      [8, 20],
      [34, 8],
      [56, 24],
      [40, 48],
      [14, 44],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [0, 3],
    ],
  },
  {
    index: "03",
    title: "Discovery",
    copy: "Explore what hasn't been mapped yet.",
    points: [
      [12, 10],
      [50, 16],
      [56, 46],
      [24, 54],
      [8, 32],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ],
  },
];

function ConstellationGlyph({ points, edges }: Pick<Principle, "points" | "edges">) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-14 w-14"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke="rgba(139,107,255,0.35)"
          strokeWidth="0.75"
        />
      ))}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 2.2 : 1.4} fill="#f5f4f8" />
      ))}
    </svg>
  );
}

export function Principles() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line/40 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-void px-8 py-12 transition-colors duration-500 hover:bg-surface"
            >
              <div className="mono-meta mb-8 text-[11px] text-ash">
                {p.index}
              </div>
              <ConstellationGlyph points={p.points} edges={p.edges} />
              <h3 className="mt-8 font-display text-xl font-medium text-star">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
