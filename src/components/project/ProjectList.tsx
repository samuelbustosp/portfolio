'use client';

import { useState } from 'react';
import { projects } from '@/data/project';
import Project from './Project';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectList = () => {
    const [index, setIndex] = useState(0);
    const totalProjects = projects.length;
    const visibleProjects = 3;

    const nextSlide = () => {
        if (index < totalProjects - visibleProjects) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className='relative w-full overflow-hidden p-2'>
            <div className='flex gap-6 transition-transform' style={{ transform: `translateX(-${index * (118 / visibleProjects)}%)` }}>
                {projects.map((proj, i) => (
                    <div key={i} className='w-1/3 flex-shrink-0'>
                        <Project name={proj.name} img={proj.img} desc={proj.desc} stack={proj.stack} />
                    </div>
                ))}
            </div>
            <button 
                className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-zinc-800/80 text-white p-2 rounded-full shadow-lg opacity-50 hover:opacity-100 disabled:opacity-0 disabled:cursor-default cursor-pointer' 
                onClick={prevSlide} 
                disabled={index === 0}
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-800/80 text-white p-2 rounded-full shadow-lg opacity-50 hover:opacity-100 disabled:opacity-0 disabled:cursor-default cursor-pointer' 
                onClick={nextSlide} 
                disabled={index >= totalProjects - visibleProjects}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default ProjectList;
