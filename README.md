# ACOB Star Club — Coming Soon

A single-page, production-ready coming-soon site for ACOB Star Club, built as
a fusion of the ACOB brand language and a Resend-grade level of polish, with
an original "knowledge core" 3D centerpiece.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- React Three Fiber / Three.js — the hero's rotating knowledge core
- Framer Motion — scroll reveals and micro-interactions
- Lenis — smooth scrolling (disabled automatically for `prefers-reduced-motion`)
- `geist` (self-hosted Vercel font, no external font requests at build time)

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

Push this project to a Git repo and import it in Vercel, or run:

```bash
npx vercel
```

No environment variables are required. The "Notify me" modal is frontend-only
(no backend call) — wire `handleSubmit` in `components/notify-modal.tsx` to
your email provider (e.g. a Vercel Edge Function, Resend, or a form service)
when ready to collect real signups.

## Structure

```
app/
  layout.tsx        — fonts, metadata, root shell
  page.tsx           — composes all sections
  globals.css        — atmosphere, grain, hairline grid, type helpers
components/
  atmosphere.tsx      — background layer stack
  star-field.tsx       — canvas-based depth-layered star particles
  knowledge-core.tsx   — R3F "knowledge core" 3D centerpiece
  navbar.tsx
  hero.tsx
  vision.tsx
  principles.tsx        — Curiosity / Connection / Discovery
  constellation.tsx      — concept-node constellation network
  network-forming.tsx     — drifting action-labeled points
  coming-soon.tsx           — climax section
  notify-modal.tsx
  footer.tsx
  smooth-scroll.tsx         — Lenis provider
lib/cn.ts                    — className helper
```

## Notes

- The 3D core degrades to a CSS fallback if WebGL is unavailable.
- All motion respects `prefers-reduced-motion`.
- Particle density and geometry are reduced automatically on narrow viewports.
