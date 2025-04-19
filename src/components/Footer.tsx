'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Hook para obtener el pathname
import { sections } from "@/data/section"; // Las secciones y sus íconos
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { IoPlaySkipBack, IoPlaySkipForward, IoRepeat, IoShuffle } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname(); // Obtiene el pathname actual
  const [currentSection, setCurrentSection] = useState(sections[pathname] || sections["/"]); // Estado inicial
  const [isMuted, setIsMuted] = useState(false);
  const [isPlay, setIsPlay] = useState(true);
  const [value, setValue] = useState('100');
  const [isShuffleClicked, setIsShuffleClicked] = useState(false);
  const [isRepeatClicked, setIsRepeatClicked] = useState(false);

  const sectionPaths = Object.keys(sections).filter(path => path.includes('#'));

  
  const getPathBackground = (name: string) => {
    switch (name) {
      case 'Sobre mí':
        return 'bg-gradient-to-br from-teal-400 to-indigo-700';
      case 'Proyectos':
        return 'bg-gradient-to-br from-violet-600 to-indigo-400';
      case 'Habilidades':
        return 'bg-gradient-to-br from-green-500 to-lime-500';
      case 'Powered By':
        return 'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-300';
      default:
        return 'bg-gradient-to-br from-gray-700 to-slate-400';
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

  const handleMuted = () => {
    setIsMuted(prev => {
      const newMuted = !prev;
      setValue(newMuted ? '0' : '66');
      return newMuted;
    });
  };

  const handlePlay = () => {
    setIsPlay(!isPlay);
  };
  
  
  const handleSkipForward = () => {
    const currentFullPath = `${pathname}${window.location.hash || '#'}`;
    const index = sectionPaths.indexOf(currentFullPath);
    const nextIndex = (index + 1) % sectionPaths.length;
    const nextHash = sectionPaths[nextIndex].split('#')[1];
    window.location.hash = `#${nextHash}`;
  };
  
  const handleSkipBack = () => {
    const currentFullPath = `${pathname}${window.location.hash || '#'}`;
    const index = sectionPaths.indexOf(currentFullPath);
    const prevIndex = (index - 1 + sectionPaths.length) % sectionPaths.length;
    const prevHash = sectionPaths[prevIndex].split('#')[1];
    window.location.hash = `#${prevHash}`;
  };
  
  const handleShuffleClick = () => {
    setIsShuffleClicked(!isShuffleClicked);
  };

  const handleRepeatClick = () => {
    setIsRepeatClicked(!isRepeatClicked);
  };

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
              <button 
                onClick={handleShuffleClick}
                className={`text-2xl cursor-pointer ${isShuffleClicked ? 'text-green-500' : 'text-zinc-300'} hover:text-white`}>
                <IoShuffle />
                {isShuffleClicked && (
                  <span className="block w-1 h-1 bg-green-500 rounded-full mx-auto"></span> 
                )}
              </button>
              <span 
                onClick={handleSkipBack}
                className="text-zinc-300 hover:text-white text-2xl"><IoPlaySkipBack />
              </span>
              
              <button onClick={handlePlay} className="text-white/80 text-3xl cursor-pointer hover:text-white">
                {isPlay ? <FaPlayCircle /> : <FaCirclePause />}
              </button>
                  
              <span 
                onClick={handleSkipForward}
                className="text-zinc-300 hover:text-white text-2xl"><IoPlaySkipForward />
              </span>
              
              <button 
                onClick={handleRepeatClick}
                className={`text-2xl cursor-pointer ${isRepeatClicked ? 'text-green-500' : 'text-zinc-300'} hover:text-white`}>
                  <IoRepeat />
                {isRepeatClicked && (
                  <span className="block w-1 h-1 bg-green-500 rounded-full mx-auto"></span> 
                )}
              </button>
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
          <button 
            onClick={handleMuted}
            className="text-zinc-300 text-2xl cursor-pointer">
              {isMuted ? <span><IoMdVolumeOff /> </span> : <span><IoMdVolumeHigh /></span>}
              </button>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            className="w-26 h-1 rounded-2xl cursor-pointer"
            disabled
          />
        </div>
    </footer>
  );
};

export default Footer;
