import { FaCode, FaHome, FaPlug, FaUser } from "react-icons/fa";

export const sections: Record<string, { name: string; icon: React.ReactElement, value:number}> = {
  "/": { name: "Inicio", icon: <FaHome />,value: 0 },
  "/#about": { name: "Sobre mí", icon: <FaUser /> , value: 33},
  "/#skills": { name: "Habilidades", icon: <FaCode /> ,value: 66},
  "/#powered": { name: "Powered By", icon: <FaPlug />, value:  100},
};
