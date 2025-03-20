'use client';

interface Skill{
    name: string;
    icon: React.ReactNode;
    category: string
}

const Skill = ({ name, icon,category }: Skill) => {
    const getCategoryBackground = (category: string) => {
        switch (category) {
            case 'Language':
                return 'bg-green-500';
            case 'Library':
                return 'bg-yellow-500';
            case 'Framework':
                return 'bg-red-500';
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <main className="flex flex-col items-start mb-0 mt-6"> {/* Eliminado el margen inferior */}
            <article 
                className="flex flex-col shadow-lg bg-gray-950 bg-opacity-80 p-1 border border-gray-800 w-36 h-36 rounded-xl hover:bg-gray-800 hover:shadow-slate-700"
            > 
                <div className='flex items-center justify-center h-full'>
                    <span className="text-5xl text-white">{icon}</span> 
                    
                </div>
                <div className={`text-white leading-3 p-1 rounded-lg ${getCategoryBackground(category)} inline-block`}></div>
            </article>
            <div className='w-full ml-0'> {/* Eliminado margen izquierdo */}
                <h3 className="font-bold font-spotify text-white text-left mt-1 text-sm">{name}</h3> {/* Reducido el tamaño del texto */}
                
            </div>
        </main>
    );
};

export default Skill;
