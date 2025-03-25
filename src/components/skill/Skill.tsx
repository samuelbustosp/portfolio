'use client';

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

interface Skill{
    name: string;
    icon: React.ReactNode;
    category: string
}

const Skill = ({ name, icon,category }: Skill) => {
    const [isHovered, setIsHovered] = useState(false); 

    const getCategoryBackground = (name: string) => {
        switch (name) {
            case 'React':
                return 'bg-blue-500';
            case 'Java':
                return 'bg-red-700';
            case 'JavaScript':
                return 'bg-yellow-500';
            case 'Spring Boot':
                return 'bg-green-600';
            case 'Tailwind CSS':
                return 'bg-sky-700';
            case 'HTML5':
                return 'bg-orange-700';
            case 'CSS3':
                return 'bg-cyan-600';
            case 'TypeScript':
                return 'bg-blue-800';
            case 'Next':
                return 'bg-zinc-950';
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <main 
            className="flex items-center mt-2 bg-zinc-700/70 rounded-lg gap-4 m-2 cursor-pointer hover:bg-zinc-600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
        > 
            <article 
                className={`flex flex-col shadow-2xl ${getCategoryBackground(name)} bg-opacity-80 p-1 w-28 h-16 rounded-l-lg`}
            > 
                <div className='flex items-center justify-center h-full'>
                    <span className="text-4xl text-white">{icon}</span> 
                </div>
                
            </article>
            <div className='w-full ml-0'> {/* Eliminado margen izquierdo */}
                <h3 className="font-bold font-spotify text-white text-left mt-1 text-md">{name}</h3> {/* Reducido el tamaño del texto */}
            </div>
            <button
                className={`text-xl bg-green-500 mr-2 hover:bg-green-400 text-black hover:text-zinc-900 p-4 rounded-full shadow-2xl cursor-pointer ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                
            >
                <FaPlay />
            </button>
        </main>
    );
};

export default Skill;
