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
    <main className="p-4 ml-22 bg-zinc-900 rounded-lg w-full mr-3 mt-[64px] mb-[93px]">
      <section id="about" className="bg-gradient-to-tr from-zinc-950 to-zinc-900 p-6 rounded-lg flex">
        <Image
          src="/images/perfil.jpg"
          alt="Descripción de la imagen"
          width={200}  // Ancho en píxeles
          height={200} // Alto en píxeles
          className="rounded-md"
        />
        <div className="px-4 py-2">
          <p className="font-light text-zinc-300/50">Software Developer</p>
          <h1 className="font-black text-5xl mb-2 flex items-center">
            Samuel Bustos Puntis 
            <span className='ml-3 text-4xl text-blue-500/80'><MdVerified/></span>
          </h1>
          <p className="font-light mb-2 leading-4">Soy estudiante avanzado de Ingeniería en Sistemas de Información con una 
            <br/>fuerte pasión por el desarrollo de software y la gestión de proyectos.
          </p>
          <p className="font-light leading-4 mb-2">Me encanta trabajar en equipo, aplicar la creatividad para resolver problemas 
            <br/>complejos y explorar nuevas tecnologías.</p>
          <div className="text-2xl flex gap-2">
            <Link 
              href={'https://www.linkedin.com/in/samuelbustospuntis'}
              className="hover:text-zinc-700"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin/>
            </Link>
            <Link 
              href={'https://www.instagram.com/samubustoss/'}
              className="hover:text-zinc-700"
              target="_blank" rel="noopener noreferrer"
            >
              <FaInstagram/>
            </Link>
            <Link 
              href={'https://x.com/Samu_Bus'}
              className="hover:text-zinc-700"
              target="_blank" rel="noopener noreferrer"
            >
              <FaSquareXTwitter/>
            </Link>
          </div>
        </div>
        
      </section>
      <section id="skills" className="mb-12">
        <SkillFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <SkillList selectedCategory={selectedCategory}/>
      </section>
      <section id="projects" className="mb-12">
        <h1 className="p-2 text-3xl font-bold ">¡Proyectos!</h1>
        <ProjectList/>
      </section>
      <section id="powered" className="h-auto">
        <h2 className="p-2 text-3xl font-bold">¡Powered By!</h2>
        <TechnologyList/>
      </section>
    </main>
  );
}
