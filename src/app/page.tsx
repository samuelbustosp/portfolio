'use client';

import ProjectList from "@/components/project/ProjectList";
import SkillFilter from "@/components/skill/SkillFilter";
import SkillList from "@/components/skill/SkillList";
import Image from "next/image";
import { useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import TechnologyList from "@/components/technology/TechnologyList"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="p-4 md:ml-22 md:mr-3 bg-zinc-900 rounded-lg w-full mt-[64px] mb-[93px]">
      
      {/* ABOUT SECTION */}
      <section id="about" className="bg-gradient-to-tr from-zinc-950 to-zinc-900 p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-4">
        <Image
          src="/images/perfil.jpg"
          alt="Foto de perfil"
          width={200}
          height={200}
          className="rounded-md mx-auto md:mx-0"
        />

        <div className="px-2 md:px-4 py-2 text-start md:text-left">
          <p className="font-light text-zinc-300/50 text-sm md:text-base">Software Developer</p>
          <h1 className="font-black text-3xl md:text-5xl mb-2 flex justify-center md:justify-start items-center">
            Samuel Bustos Puntis 
            <span className="ml-2 text-2xl md:text-4xl text-blue-500/80 hidden sm:block"><MdVerified /></span>
          </h1>
          <p className="font-light mb-2 leading-5 text-sm md:text-base">
            Soy estudiante avanzado de Ingeniería en Sistemas de Información con una 
            <br className="hidden md:block"/>fuerte pasión por el desarrollo de software y la gestión de proyectos.
          </p>
          <p className="font-light leading-5 mb-2 text-sm md:text-base">
            Me encanta trabajar en equipo, aplicar la creatividad para resolver problemas 
            <br className="hidden md:block"/>complejos y explorar nuevas tecnologías.
          </p>
          <div className="text-xl md:text-2xl flex justify-center md:justify-start gap-4 mt-2">
            <Link href="https://www.linkedin.com/in/samuelbustospuntis" className="hover:text-zinc-700" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </Link>
            <Link href="https://www.instagram.com/samubustoss/" className="hover:text-zinc-700" target="_blank" rel="noopener noreferrer">
              <FaInstagram/>
            </Link>
            <Link href="https://x.com/Samu_Bus" className="hover:text-zinc-700" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter/>
            </Link>
          </div>
        </div>
      </section>

      
      <section id="skills" className="my-8">
        <SkillFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <SkillList selectedCategory={selectedCategory}/>
      </section>

      
      <section id="projects" className="md:mb-6">
        <h1 className="p-2 text-2xl md:text-3xl font-bold">¡Proyectos!</h1>
        <ProjectList/>
      </section>
      
      <section id="powered" className="h-auto">
        <h2 className="p-2 text-2xl md:text-3xl font-bold">¡Powered By!</h2>
        <TechnologyList/>
      </section>
      
    </main>
  );
}
