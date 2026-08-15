"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Network", href: "#network" },
];

export function Navbar() {
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
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm tracking-wide text-star"
        >
          <span className="font-display font-medium">ACOB</span>
          <span className="text-violet">★</span>
        </a>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[12px] font-medium uppercase tracking-widest2 text-mist transition-colors hover:text-star"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
