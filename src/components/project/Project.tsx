'use client';

interface Project{
    name: string;
    img: string;
    desc: string;
    stack: string;
}

const Project = ({name, img, desc, stack}: Project) => {
    return (
        <article className="max-w-md bg-zinc-800/80 border border-zinc-700 rounded-lg overflow-hidden shadow-lg p-4">
          {img && (
            <figure>
              <img 
                src={img} 
                alt="Imagen del proyecto." 
                className="w-full h-48 object-cover rounded-md"
              />
            </figure>
          )}
          <header >
            <h2 className="text-2xl tracking-tight text-white mt-2">
              {name}
            </h2>
          </header>
          <p className="text-zinc-300 font-light">
            {desc}
          </p>
          <p className="text-zinc-400 text-xs font-light">
            {stack}
          </p>
        </article>
      );
      
}
 
export default Project;
