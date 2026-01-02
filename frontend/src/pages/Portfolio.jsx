import React from "react";
import { useState } from "react";
import IndustriesWeServe from "./IndustriesWeServe";
import HowWeWork from "./HowWeWork";
import PerformancePackagesFlip from "./PerformancePackagesFlip";
import PackageComparisonDropdown from "./PackageComparisonDropdown";
import IndividualServicesDropdown from "./IndividualServicesDropdown";
import CorePhilosophy from "./CorePhilosophy";
import Contact from "./Contact";

export default function NavoraAdsFullPage() {

  return (
<main className="min-h-screen text-white bg-black">
  {/*bg-[radial-gradient(ellipse_at_top,_var(--bg-glow)_0%,_transparent_45%),linear-gradient(to_bottom,_var(--bg-soft),_var(--bg-main))] */}
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center">
  {/* LOGO + BRAND IN ONE LINE */}
  <div className="flex items-center justify-center gap-4 mb-6">
    <video
      src="/log.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-12 h-14 md:w-14 md:h-14 object-contain"
    />

    <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
      <span className="text-white">NAVORA </span>
      <span className="text-[#2F80FF]">ADS</span>
    </h1>
  </div>

  {/* TAGLINE */}
  <p className="mt-2 text-3xl md:text-4xl font-semibold text-white">
    Performance-Driven Digital Marketing Agency
  </p>

  <p className="mt-6 max-w-3xl mx-auto text-gray-400">
    We help startups, local businesses, and growing brands generate
    predictable leads and revenue through structured digital marketing
    systems.
  </p>
</section>


      {/* ================= ABOUT ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center  font-bold tracking-wide mb-6">
      <span className="text-white">ABOUT NAVORA </span>
      <span className="text-[#2F80FF]">ADS</span></h2>
        <p className="mb-4  text-lg md:text-xl font-semibold">
          Navora Ads is a Chennai-based digital marketing agency focused on
          performance, scalability, and measurable ROI.
        </p>
        <p className="mb-4 text-base md:text-lg">
          We partner with businesses that want clarity, transparency, and
          long-term value from their marketing investments. Our approach
          combines strategy, paid advertising, automation, and analytics to
          deliver consistent and sustainable growth.
        </p>
        <p className=" text-base md:text-lg">
          Unlike agencies that focus on vanity metrics such as likes and reach,
          we build conversion-focused systems that turn traffic into leads and
          leads into customers.
        </p>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <CorePhilosophy />

      {/* ================= INDUSTRIES ================= */}
      <IndustriesWeServe />

      {/* ================= HOW WE WORK ================= */}
      <HowWeWork />

      {/* ================= PACKAGES ================= */}
      <PerformancePackagesFlip />
      
      {/* ================= PACKAGE COMPARISON TABLE ================= */}
      <PackageComparisonDropdown />

      {/* ================= INDIVIDUAL SERVICES ================= */}
      <IndividualServicesDropdown />

      {/* ================= WHY US ================= */}
      <section className="py-20 px-6 relative">
  {/* Background */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12)_0%,_transparent_45%),linear-gradient(to_bottom,#111827,#0b0f14)]" />

  <div className="max-w-4xl mx-auto text-white text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide">
      <span className="text-white">Why Choose NAVORA </span>
      <span className="text-[#2F80FF]">ADS</span>
    </h2>

    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
      <ul className="space-y-4 text-lg">
        <li className="flex items-center justify-center gap-3">
          Performance-first mindset
        </li>
        <li className="flex items-center justify-center gap-3">
          Transparent pricing & reporting
        </li>
        <li className="flex items-center justify-center gap-3">
          Funnel-based execution
        </li>
        <li className="flex items-center justify-center gap-3">
          Startup-friendly approach
        </li>
        <li className="flex items-center justify-center gap-3">
          Chennai-based team with India & global experience
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* ================= FOOTER CTA ================= */}
      <footer className="py-16 px-6 text-center bg-transparent">
  {/* LOGO + BRAND */}
  <div className="flex items-center justify-center gap-4 mb-4">
    <video
      src="/log.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-10 h-10 md:w-12 md:h-12 object-contain"
    />

    <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
      <span className="text-white">NAVORA </span>
      <span className="text-[#2F80FF]">ADS</span>
    </h2>
  </div>

  {/* TAGLINE */}
  <p className="mt-2 text-lg md:text-xl text-gray-400">
    Performance Marketing That Scales With Your Business
  </p>
  <Contact />
  <p>© {new Date().getFullYear()} Navora Ads. All rights reserved.</p>
</footer>

    </main>
  );
}
