'use client';

import { projects } from '@/data/project';
import Project from './Project';

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {projects.map((proj, i) => (
        <Project
          key={i}
          name={proj.name}
          img={proj.img}
          desc={proj.desc}
          stack={proj.stack}
        />
      ))}
    </div>
  );
};

export default ProjectList;
