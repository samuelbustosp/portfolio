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
        <main>
            <article 
                className="h-96 w-64 bg-zinc-800 p-4 rounded-lg relative flex flex-col justify-between overflow-hidden shadow-xl"
            >
                {/* Imagen de fondo con blur */}
                <div 
                    className="absolute inset-0 bg-cover bg-center filter blur-xs opacity-90"
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="absolute inset-0 bg-black/20 shadow-inner shwadow-black"></div>

                {/* Contenido encima sin blur */}
                <div className="relative z-10 rounded-lg flex items-center gap-3">
                    <div className="bg-zinc-800/80 p-4 rounded-lg flex items-center justify-start ">
                        <span className="text-4xl">{icon}</span>
                    </div>
                    <div>
                        <h1 className="text-white">{name}</h1>
                        <p className="font-light text-sm text-gray-300">{category}</p>
                    </div>
                </div>
                
                <p className="relative font-light text-sm opacity-80">{desc}</p>
                
                
            </article>
            
        </main>
    );
}

export default Technology;
