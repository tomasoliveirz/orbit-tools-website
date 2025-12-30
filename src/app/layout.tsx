import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Galaxy from "@/components/Galaxy";
import TransitionProvider from "@/components/TransitionProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbit Tools",
  description: "Premium, ultra-minimal tools for the modern web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[var(--bg)] text-[var(--fg)] font-sans font-light`}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
        <div className="fixed inset-0 bg-[#0A0A0F]/60 backdrop-blur-sm z-0 pointer-events-none" />
        <Navbar />
        <main className="h-screen overflow-hidden relative z-10 flex flex-col pt-40 pb-40">
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </main>
      </body>
    </html>
  );
}
