"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, Settings, User, Library } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Inicia expandido

  return (
    <motion.div
      animate={{ width: isOpen ? "250px" : "70px" }}
      transition={{ duration: 0.3 }}
      className="fixed top-16 left-2 h-[calc(100%-4rem)] bg-zinc-900 text-white shadow-lg flex flex-col z-50 p-2 rounded-lg"
    >
      {/* Botón de abrir/cerrar dentro del Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition self-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Library className="w-6 h-6" />}
      </button>

      {/* Menú de opciones */}
      <nav className="flex flex-col gap-4 w-full">
        <a
          href="#"
          className={`flex items-center p-3 rounded-md hover:bg-zinc-800 transition ${
            isOpen ? "justify-start gap-3" : "justify-center"
          }`}
        >
          <Home className="w-6 h-6" />
          {isOpen && <span className="text-lg">Inicio</span>}
        </a>
        <a
          href="#"
          className={`flex items-center p-3 rounded-md hover:bg-zinc-800 transition ${
            isOpen ? "justify-start gap-3" : "justify-center"
          }`}
        >
          <User className="w-6 h-6" />
          {isOpen && <span className="text-lg">Perfil</span>}
        </a>
        <a
          href="#"
          className={`flex items-center p-3 rounded-md hover:bg-zinc-800 transition ${
            isOpen ? "justify-start gap-3" : "justify-center"
          }`}
        >
          <Settings className="w-6 h-6" />
          {isOpen && <span className="text-lg">Configuración</span>}
        </a>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
