'use client';

import {projects} from '@/data/project'
import Project from './Project';


const ProjectList = () => {
    return ( 
        <main className='grid grid-cols-2 p-2 gap-4'>
            {projects.map((proj,index)=>(
                <Project key={index} name={proj.name} img={proj.img} desc={proj.desc} />
            ))}
        </main>
     );
}
 
export default ProjectList;