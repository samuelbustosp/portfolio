'use client';

import ProjectList from "@/components/project/ProjectList";
import SkillFilter from "@/components/skill/SkillFilter";
import SkillList from "@/components/skill/SkillList";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <main className="p-4 bg-zinc-900 rounded-lg w-full mr-3">
      <section className="bg-gradient-to-tr from-zinc-950 to-zinc-900 p-6 rounded-lg flex">
        <Image
          src="/images/perfil.jpg"
          alt="Descripción de la imagen"
          width={200}  // Ancho en píxeles
          height={200} // Alto en píxeles
          className="rounded-md"
        />
        <div className="px-4 py-2">
          <h1 className="font-black text-5xl mb-2">Samuel Bustos Puntis</h1>
          <p className="font-light mb-2">Soy estudiante avanzado de Ingeniería en Sistemas de Información con una 
            <br/>fuerte pasión por el desarrollo de software y la gestión de proyectos.
          </p>
          <p className="font-light">Me encanta trabajar en equipo, aplicar la creatividad para resolver problemas 
            <br/>complejos y explorar nuevas tecnologías.</p>
        </div>
        
      </section>
      <section>
        <SkillFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <SkillList selectedCategory={selectedCategory}/>
      </section>
      <section>
        <h1 className="p-2 text-2xl font-bold">¡Proyectos!</h1>
        <ProjectList/>
      </section>
    </main>
  );
}
