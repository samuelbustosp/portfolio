'use client';

import { GoHomeFill, GoSearch } from "react-icons/go";
import { TbFolderSearch } from "react-icons/tb";
import { useState } from "react";
import { sections } from "@/data/section";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const filteredSections = Object.entries(sections).filter(([, section]) =>
        search
            ? section.name.toLowerCase().includes(search.toLowerCase()) // Filtra cuando hay búsqueda
            : isFocused // Si el input está enfocado y no hay búsqueda, muestra todo
    );

    const handleSelect = () => {
        setSearch("");
        setIsFocused(false);
    };

    return ( 
        <nav className="p-2 fixed top-0 left-0 z-50 dark-bg w-full">
            <ul className="flex items-center gap-4 justify-between">
                

                {/* Sección central: Home + Search */}
                <div className="flex items-center gap-4 sm:gap-6 flex-1 justify-center">
                    <li className="bg-zinc-800 p-2 text-xl sm:text-2xl rounded-full">
                        <Link href="/#">
                            <GoHomeFill />
                        </Link>
                    </li>

                    <li className="relative flex items-center bg-zinc-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full gap-2 w-full max-w-sm">
                        <GoSearch className="text-lg sm:text-xl text-gray-300" />
                        <input
                            type="text"
                            placeholder="¿Qué estás buscando?"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                            className="flex-1 bg-transparent text-sm sm:text-base text-zinc-100 placeholder-zinc-400 outline-none"
                        />
                        <span className="text-lg sm:text-xl font-light text-zinc-400 flex items-center gap-1">
                            |
                            <TbFolderSearch />
                        </span>

                        {isFocused && (
                            <ul className="absolute top-12 left-0 w-full bg-zinc-800 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                                {filteredSections.length > 0 ? (
                                    filteredSections.map(([path, section]) => (
                                        <li key={path}>
                                            <a
                                                href={path}
                                                className="flex items-center gap-2 p-3 rounded-lg hover:bg-zinc-700 transition-colors"
                                                onClick={handleSelect}
                                            >
                                                <span className="bg-zinc-700/50 p-2 rounded-lg">
                                                    {section.icon}
                                                </span>
                                                <span className="text-zinc-100">{section.name}</span>
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-3 text-zinc-400">No encontrado</li>
                                )}
                            </ul>
                        )}
                    </li>
                    <li className="mr-2">
                        <img
                            src="/images/perfil-bw.jpg"
                            alt="Foto de perfil"
                            className="h-8 w-8 sm:h-9 sm:w-9 object-cover rounded-full border border-zinc-700"
                        />
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
