import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleMesh from "@/components/background/ParticleMesh";
import Hero from "@/components/sections/Hero";
import DataPipeline from "@/components/sections/DataPipeline";
import Projects from "@/components/sections/Projects";
import SkillsMatrix from "@/components/sections/SkillsMatrix";
import ExperienceEducation from "@/components/sections/ExperienceEducation";
import TerminalConsole from "@/components/sections/TerminalConsole";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-white/20 selection:text-white">
      {/* Monochrome Minimal Particle Mesh */}
      <ParticleMesh />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col space-y-8 sm:space-y-16">
        <Hero />
        <DataPipeline />
        <Projects />
        <SkillsMatrix />
        <ExperienceEducation />
        <TerminalConsole />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
