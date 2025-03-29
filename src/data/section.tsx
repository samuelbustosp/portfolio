import { FaCode, FaFolder, FaHome, FaPlug, FaUser } from "react-icons/fa";

export const sections: Record<string, { name: string; icon: React.ReactElement, value:number, time: string}> = {
  "/": { name: "Inicio", icon: <FaHome />,value: 0 , time:'0:00'},
  "/#about": { name: "Sobre mí", icon: <FaUser /> , value: 25, time:'0:53'},
  "/#skills": { name: "Habilidades", icon: <FaCode /> ,value: 50, time:'1:45'},
  "/#projects": { name: "Proyectos", icon: <FaFolder /> ,value: 25, time:'2:38'},
  "/#powered": { name: "Powered By", icon: <FaPlug />, value:  100, time:'3:30'},
};
