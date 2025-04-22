'use client';

interface Technology {
  name: string;
  icon: string;
  desc: string;
  category: string;
  img: string;
}

const Technology = ({ name, icon, desc, category, img }: Technology) => {
  return (
    <article className="w-full h-48 md:h-96 bg-zinc-800 p-4 rounded-lg relative flex flex-col justify-between overflow-hidden shadow-xl">
      {/* Imagen de fondo con blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[2px] opacity-90"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="absolute inset-0 bg-black/20 shadow-inner"></div>

      {/* Contenido encima sin blur */}
      <div className="relative z-10 rounded-lg flex items-center gap-3">
        <div className="bg-zinc-800/80 p-3 rounded-lg flex items-center justify-center">
          <span className="text-3xl sm:text-4xl">{icon}</span>
        </div>
        <div>
          <h1 className="text-white text-base sm:text-lg font-semibold">{name}</h1>
          <p className="font-light text-sm text-gray-300">{category}</p>
        </div>
      </div>

      <p className="relative z-10 font-light text-sm sm:text-base text-gray-300 mt-2">
        {desc}
      </p>
    </article>
  );
};

export default Technology;
