"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function NotifyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setEmail("");
      const t = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitted");
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Notify me when ACOB Star Club launches"
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm rounded-2xl border border-line-strong bg-surface px-8 py-9 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 text-ash transition-colors hover:text-star"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {status === "idle" ? (
              <>
                <p className="eyebrow mb-3 text-violet/70">Stay in orbit</p>
                <h3 className="font-display text-2xl font-medium leading-snug text-star">
                  Be among the first to know when ACOB Star Club opens its
                  doors.
                </h3>

                <form onSubmit={handleSubmit} className="mt-7 space-y-3">
                  <input
                    ref={inputRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-full border border-line bg-void px-5 py-3 text-sm text-star placeholder:text-ash focus:border-violet/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-star px-5 py-3 text-sm font-medium text-void transition-opacity hover:opacity-90"
                  >
                    Notify me
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="py-4 text-center"
              >
                <span className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-violet/40 bg-violet/10 text-violet">
                  ★
                </span>
                <h3 className="font-display text-xl font-medium text-star">
                  You&rsquo;re in the constellation.
                </h3>
                <p className="mt-2 text-sm text-mist">
                  We&rsquo;ll reach out the moment ACOB Star Club opens.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
