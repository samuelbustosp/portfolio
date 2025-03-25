import {  RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

export const technologies = [
    {name:'Next JS', icon:<SiNextdotjs/>,desc: 'Framework React con renderizado híbrido.',category:'Framework',img: '/images/next-wall.jpg'},
    {name:'TypeScript', icon:<SiTypescript/>,desc:'Extiende JavaScript con tipado estático.',category:'Languague',img: '/images/ts-wall.jpg'},
    {name:'Tailwind CSS', icon:<RiTailwindCssFill/>,desc:'Framework CSS con utilidades predefinidas.',category:'Library',img: '/images/tailwind-wall.png'},
    {name:'Vercel', icon:<RiVercelFill/>, desc:'Plataforma de hosting optimizada para frontend.',category:'Deployment Platform',img: '/images/vercel-wall.jpeg' }
]