'use client';

import { technologies } from '@/data/technology';
import Technology from './Technology';

const TechnologyList = () => {
  return (
    <main className="p-4 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {technologies.map((tech, index) => (
        <Technology
          key={index}
          name={tech.name}
          icon={tech.icon}
          desc={tech.desc}
          category={tech.category}
          img={tech.img}
        />
      ))}
    </main>
  );
};

export default TechnologyList;
