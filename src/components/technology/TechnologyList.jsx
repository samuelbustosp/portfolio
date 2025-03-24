'use client';
import {technologies} from '@/data/technology'
import Technology from './Technology'

const TechnologyList = () => {
    return ( 
        <main className='p-2 w-full gap-8 grid-cols-4 grid'>
            {technologies.map((tech,index) =>(
                <div key={index} className='flex'>
                    <Technology 
                        name={tech.name} 
                        icon={tech.icon} 
                        desc={tech.desc} 
                        category={tech.category}
                        img={tech.img}
                    />
                </div>
            ))}
        </main>
     );
}
 
export default TechnologyList;