"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Network", href: "#network" },
];

export function Navbar({ onNotify }: { onNotify: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-void/70 backdrop-blur-md border-b border-line" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm tracking-wide text-star"
        >
          <span className="font-display font-medium">ACOB</span>
          <span className="text-violet">★</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="eyebrow text-[11px] text-mist transition-colors hover:text-star"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse2 rounded-full bg-violet" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet" />
            </span>
            <span className="eyebrow text-[10px] text-mist">FORMING</span>
          </div>
          <button
            onClick={onNotify}
            className="rounded-full border border-line-strong px-4 py-2 text-[12px] font-medium text-star transition-all duration-300 hover:border-violet/60 hover:bg-violet/[0.06]"
          >
            Notify me
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
