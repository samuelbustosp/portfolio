'use client';

interface Project{
    name: string;
    img: string;
    desc: string;
}

const Project = ({name, img, desc}: Project) => {
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
          <header className="py-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {name}
            </h2>
          </header>
          <p className="text-gray-400 text-sm leading-relaxed">
            {desc}
          </p>
        </article>
      );
      
}
 
export default Project;
