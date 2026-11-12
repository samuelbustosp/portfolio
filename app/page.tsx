import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EngineeringMindset from "@/components/sections/EngineeringMindset";
import Projects from "@/components/sections/Projects";
import ExperienceEducation from "@/components/sections/ExperienceEducation";
import FutureVision from "@/components/sections/FutureVision";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F8F7F4] text-neutral-900 overflow-x-clip">
      {/* Subtle Ambient Light Shapes for Glass Blur Depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-amber-200/35 blur-[130px]" />
        <div className="absolute top-[22%] -right-32 w-[520px] h-[520px] rounded-full bg-sky-200/30 blur-[140px]" />
        <div className="absolute bottom-[15%] left-[12%] w-[480px] h-[480px] rounded-full bg-stone-300/35 blur-[130px]" />
      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <EngineeringMindset />
        <Projects />
        <ExperienceEducation />
        <FutureVision />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
