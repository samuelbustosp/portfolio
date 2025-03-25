'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Home, Settings, User, Library } from "lucide-react";
import { FaBolt, FaPlug, FaUser } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Inicia expandido

  return (
    <motion.div
      animate={{ width: isOpen ? "250px" : "70px" }}
      transition={{ duration: 0.2 }}
      className="fixed top-16 bottom-21 bg-zinc-900 ml-2 text-white shadow-2xl flex flex-col z-50 p-2 rounded-lg"
    >
      {/* Botón de abrir/cerrar dentro del Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 p-2 bg-zinc-800 rounded-full cursor-pointer hover:bg-zinc-700 transition self-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Library className="w-6 h-6" />}
      </button>

      {/* Menú de opciones */}
      <nav className="flex flex-col gap-4 w-full">
        <a
          href="#about"
          className={`flex items-center m-0.5 transition ${
            isOpen ? "justify-start gap-3 " : "justify-center"
          }`}
        > 
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-50 py-3 px-4 rounded-lg">
            <FaUser className="w-4 h-6" />
          </div>
          {isOpen && <span className="text-lg">Sobre Mí</span>}
        </a>
        <a
          href="#skills"
          className={`flex items-center m-0.5 transition ${
            isOpen ? "justify-start gap-3 " : "justify-center "
          }`}
        >
          <div className="bg-emerald-800 text-green-500 py-3 px-4 rounded-lg hover:bg-zinc-800">
            <FaBolt className="w-4 h-6" />
          </div>
          
          {isOpen && <span className="text-lg">Habilidades</span>}
        </a>
        <a
          href="#powered"
          className={`flex items-center m-0.5  transition ${
            isOpen ? "justify-start gap-3" : "justify-center "
          }`}
        >
          <div className="bg-yellow-500 hover:text-yellow-500 py-3 px-4 rounded-lg hover:bg-zinc-800">
            <FaPlug className="w-4 h-6" />
          </div>
          
          {isOpen && <span className="text-lg">Powered By</span>}
        </a>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
