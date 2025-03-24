'use client';

import Link from "next/link";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { TbFolderSearch } from "react-icons/tb";
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Navbar: React.FC = () => {
    return ( 
        <nav className="p-2 fixed top-0 left-0 w-full z-50 dark-bg">
            <ul className="flex items-center gap-4 justify-between">
                <li className="flex items-center">
                    <ChevronLeft className="w-8 h-8"/>
                    <ChevronRight className="w-8 h-8"/>
                </li>
                <div className="flex items-center gap-4">
                    <li className="bg-zinc-800 p-2 text-3xl rounded-full">
                        <Link href="/" >
                            <GoHomeFill/>
                        </Link>
                    </li>
                    <li className="bg-zinc-800 p-2 rounded-full flex items-center gap-3">
                        <span className="text-2xl"><GoSearch/></span>
                        <p className="text-zinc-300 mr-6">¿Qué estas buscando?</p>
                        <span className="text-2xl flex items-center gap-2 mr-2">|<TbFolderSearch/></span>
                    </li>
                </div>
                <li className="text-4xl">
                    <RxAvatar/>
                </li>
                
                
            </ul>
        </nav>
     );
}
 
export default Navbar;