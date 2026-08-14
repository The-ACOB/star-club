import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACOB Star Club — An Intellectual Network by ACOB",
  description:
    "A new network for students, thinkers, builders, researchers, and curious minds — coming soon from Applied Cognitio Olympiad Bangladesh.",
  metadataBase: new URL("https://starclub.acob.org"),
  openGraph: {
    title: "ACOB Star Club",
    description: "Where curious minds find their constellation.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-void text-star font-body antialiased selection:bg-violet/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
