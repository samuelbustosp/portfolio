'use client';

interface Skill{
    name: string;
    icon: React.ReactNode;
    category: string
}

const Skill = ({ name, icon,category }: Skill) => {
    const getCategoryBackground = (name: string) => {
        switch (name) {
            case 'React':
                return 'bg-blue-500';
            case 'Java':
                return 'bg-red-700';
            case 'JavaScript':
                return 'bg-yellow-500';
            case 'Spring Boot':
                return 'bg-green-600';
            case 'Tailwind CSS':
                return 'bg-sky-700';
            case 'HTML5':
                return 'bg-orange-700';
            case 'CSS3':
                return 'bg-cyan-600';
            case 'TypeScript':
                return 'bg-blue-800';
            case 'Next':
                return 'bg-zinc-950';
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <main className="flex items-center mt-2 bg-zinc-700/70 rounded-lg gap-4 m-2"> 
            <article 
                className={`flex flex-col shadow-lg ${getCategoryBackground(name)} bg-opacity-80 p-1 border-gray-800 w-28 h-16 rounded-l-lg hover:bg-gray-800 hover:shadow-slate-700`}
            > 
                <div className='flex items-center justify-center h-full'>
                    <span className="text-4xl text-white">{icon}</span> 
                </div>
                <div className={`text-white leading-3 p-1 rounded-lg ${getCategoryBackground(category)} inline-block`}></div>
            </article>
            <div className='w-full ml-0'> {/* Eliminado margen izquierdo */}
                <h3 className="font-bold font-spotify text-white text-left mt-1 text-md">{name}</h3> {/* Reducido el tamaño del texto */}
            </div>
        </main>
    );
};

export default Skill;
