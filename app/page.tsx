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

export default function Home() {
  return (
    <SmoothScroll>
      <Atmosphere />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <Vision />
          <Principles />
          <Constellation />
          <NetworkForming />
          <ComingSoon />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
