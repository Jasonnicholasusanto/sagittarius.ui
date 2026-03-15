"use client";

import Header from "@/components/layout/landing/header";
import LandingHero from "./components/landing-hero";

export default function LandingpPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />
      <LandingHero />
    </main>
  );
}