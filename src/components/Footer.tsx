'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Hook para obtener el pathname
import { sections } from "@/data/section"; // Las secciones y sus íconos
import { IoMdPlayCircle, IoMdVolumeHigh } from "react-icons/io";
import { IoPlaySkipBack, IoPlaySkipBackSharp, IoPlaySkipForward, IoRepeat, IoShuffle, IoVolumeHigh } from "react-icons/io5";
import { MdDevices } from "react-icons/md";

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
        {/* Contenedor izquierdo (sección y nombre) */}
        <div className="flex items-center gap-5 justify-start">
            <div className={`p-3 ml-1 rounded-md ${getPathBackground(currentSection.name)}`}>
                <span className="text-2xl">{currentSection.icon}</span>
            </div>
            <div>
                <p className="">{currentSection.name}</p>
                <p className="font-light text-sm leading-3">Samuel Bustos Puntis</p>
            </div>
        </div>
      
        {/* Contenedor central para los botones de reproducción */}
        <div className="flex flex-col justify-center items-center gap-1.5 flex-grow cursor-pointer">
            <div className="flex gap-3 items-center">
                <span className="text-zinc-300 text-2xl"><IoShuffle /></span>
                <span className="text-zinc-300 text-2xl"><IoPlaySkipBack /></span>
                <span className="text-white text-4xl"><IoMdPlayCircle /></span>
                <span className="text-zinc-300 text-2xl"><IoPlaySkipForward /></span>
                <span className="text-zinc-300 text-2xl"><IoRepeat /></span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-light">{currentSection.time}</span>
              <input
                type="range"
                min="0"
                max="100"
                value={currentSection.value}
                className="slider w-96 h-1 rounded-2xl"
                disabled
              />
              <span className="text-xs font-light">3:30</span>
            </div>
            

        </div>

        {/* Contenedor derecho para el volumen */}
        <div className="flex items-center ">
          <span className="text-zinc-300 text-2xl mr-4"><MdDevices /></span>
          <span className="text-zinc-300 text-2xl"><IoMdVolumeHigh /></span>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            className="w-26 h-1 rounded-2xl cursor-pointer"
            disabled
          />
        </div>
    </footer>
  );
};

export default Footer;
