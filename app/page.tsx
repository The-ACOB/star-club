"use client";

import { useState } from "react";
import { Atmosphere } from "@/components/atmosphere";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Vision } from "@/components/vision";
import { Principles } from "@/components/principles";
import { Constellation } from "@/components/constellation";
import { NetworkForming } from "@/components/network-forming";
import { ComingSoon } from "@/components/coming-soon";
import { Footer } from "@/components/footer";
import { NotifyModal } from "@/components/notify-modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SmoothScroll>
      <Atmosphere />

      <div className="relative z-10">
        <Navbar onNotify={() => setModalOpen(true)} />

        <main>
          <Hero onNotify={() => setModalOpen(true)} />
          <Vision />
          <Principles />
          <Constellation />
          <NetworkForming />
          <ComingSoon onNotify={() => setModalOpen(true)} />
        </main>

        <Footer />
      </div>

      <NotifyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </SmoothScroll>
  );
}
