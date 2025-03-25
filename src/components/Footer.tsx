'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Hook para obtener el pathname
import { sections } from "@/data/section"; // Las secciones y sus íconos

const Footer = () => {
  const pathname = usePathname(); // Obtiene el pathname actual
  const [currentSection, setCurrentSection] = useState(sections[pathname] || sections["/"]); // Estado inicial

  const getPathBackground = (name: string) => {
    switch (name) {
        case 'Sobre mí':
            return 'bg-gradient-to-br from-teal-400 to-indigo-700';
        case 'Habilidades':
            return 'bg-gradient-to-br from-green-500 to-lime-500';
        case 'Powered By':
            return 'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-300';
        default:
            return 'bg-gray-300';
    }
};

  useEffect(() => {
    // Función para actualizar la sección dependiendo del hash
    const updateSection = () => {
      const hash = window.location.hash || "#"; // Obtiene el hash actual de la URL
      const sectionPath = `${pathname}${hash}`; // Combina pathname con el hash

      setCurrentSection(sections[sectionPath] || sections["/"]); // Actualiza la sección con el icono y nombre
    };

    // Llamada inicial para establecer la sección correcta
    updateSection();

    // Escucha los cambios en el hash
    window.addEventListener("hashchange", updateSection);

    // Cleanup: elimina el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("hashchange", updateSection);
    };
  }, [pathname]); // Solo actualiza cuando el pathname cambia

  return (
    <footer className="dark-bg text-white p-4 fixed bottom-0 w-full flex items-center z-50">
        <div className="flex items-center gap-5">
            <div className={`p-3 ml-1 rounded-md ${getPathBackground(currentSection.name)}`}>
                <span className="text-2xl">{currentSection.icon}</span>
            </div>
            <div>
                <p className="">{currentSection.name}</p>
                <p className="font-light text-sm leading-3">Samuel Bustos Puntis</p>
            </div>
        </div>
        <div>
            
        </div>
    </footer>
  );
};

export default Footer;
