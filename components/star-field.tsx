"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number; // depth 0.2–1, controls size/speed/brightness
  r: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
};

/**
 * Full-viewport canvas of extremely faint, depth-layered points.
 * Deliberately restrained: low density, slow drift, subtle twinkle.
 * Respects prefers-reduced-motion by freezing the frame.
 */
export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;

    const density = window.innerWidth < 768 ? 0.00006 : 0.00011;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(width * height * density);
      stars = Array.from({ length: count }, () => {
        const z = 0.2 + Math.random() * 0.8;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: 0.4 + z * 1.1,
          baseAlpha: 0.15 + z * 0.45,
          twinkleSpeed: 0.4 + Math.random() * 0.8,
          twinklePhase: Math.random() * Math.PI * 2,
        };
      });
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    let t = 0;
    function draw() {
      ctx!.clearRect(0, 0, width, height);
      t += 0.008;

      for (const s of stars) {
        const parallax = 6 * s.z;
        const px = s.x + mouseX * parallax;
        const py = s.y + mouseY * parallax;

        const twinkle = reduceMotion
          ? 1
          : 0.6 + 0.4 * Math.sin(t * s.twinkleSpeed + s.twinklePhase);
        const alpha = s.baseAlpha * twinkle;

        ctx!.beginPath();
        ctx!.arc(px, py, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(245, 244, 248, ${alpha})`;
        ctx!.fill();
      }

      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
}
