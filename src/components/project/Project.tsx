'use client';

interface Project {
  name: string;
  img: string;
  desc: string;
  stack: string;
}

const Project = ({ name, img, desc, stack }: Project) => {
  return (
    <article className="w-full bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-md p-4">
      {img && (
        <figure>
          <img
            src={img}
            alt={name}
            className="w-full h-48 object-cover rounded-md"
          />
        </figure>
      )}
      <header>
        <h2 className="text-xl text-white mt-3 font-bold">{name}</h2>
      </header>
      <p className="text-zinc-300 text-sm mt-1">{desc}</p>
      <p className="text-zinc-400 text-xs mt-2">{stack}</p>
    </article>
  );
};

export default Project;
