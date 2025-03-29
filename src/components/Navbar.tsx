'use client';

import Link from "next/link";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { TbFolderSearch } from "react-icons/tb";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from "react";
import { sections } from "@/data/section";

const Navbar: React.FC = () => {
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const filteredSections = Object.entries(sections).filter(([_, section]) =>
        search
            ? section.name.toLowerCase().includes(search.toLowerCase()) // Filtra cuando hay búsqueda
            : isFocused // Si el input está enfocado y no hay búsqueda, muestra todo
    );

    const handleSelect = () => {
        setSearch("");
        setIsFocused(false);
    };

    return ( 
        <nav className="p-2 fixed top-0 left-0 w-full z-50 dark-bg">
            <ul className="flex items-center gap-4 justify-between">
                <li className="flex items-center">
                    <ChevronLeft className="w-8 h-8"/>
                    <ChevronRight className="w-8 h-8"/>
                </li>
                <div className="flex items-center gap-4">
                    <li className="bg-zinc-800 p-2 text-3xl rounded-full">
                        <a href="/#" >
                            <GoHomeFill/>
                        </a>
                    </li>
                    <li className="bg-zinc-800 p-2 rounded-full flex items-center justify-center gap-3">
                        <span className="text-2xl"><GoSearch/></span>
                        <input
                            type="text"
                            placeholder="¿Qué estás buscando?"
                            value={search}
                            onChange={(e)=> setSearch(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                            className="bg-transparent text-zinc-300 outline-none border-none"
                        />
                        <span className="text-2xl font-light flex items-center gap-2 mr-2">
                            |
                            <TbFolderSearch/>
                        </span>
                        {isFocused && (
                            <ul className="absolute top-16 w-96 bg-zinc-800 rounded-lg shadow-lg ">
                                {filteredSections.length > 0 ? (
                                    filteredSections.map(([path, section]) => (
                                        <li key={path}>
                                            <a href={path} 
                                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-700"
                                                onClick={handleSelect}
                                                >
                                                <span className="bg-zinc-600/50 p-4 rounded-lg">{section.icon}</span>
                                                 {section.name}
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-2 text-zinc-400">No encontrado</li>
                                )}
                            </ul>
                        )}
                    </li>
                </div>
                <li className="text-4xl mr-2">
                    <img src="/images/perfil-bw.jpg"
                        className="h-9 rounded-full"
                    />
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;