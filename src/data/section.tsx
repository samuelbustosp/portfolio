import { FaCode, FaHome, FaPlug, FaUser } from "react-icons/fa";

export const sections: Record<string, { name: string; icon: React.ReactElement, value:number, time: string}> = {
  "/": { name: "Inicio", icon: <FaHome />,value: 0 , time:'0:00'},
  "/#about": { name: "Sobre mí", icon: <FaUser /> , value: 33, time:'1:09'},
  "/#skills": { name: "Habilidades", icon: <FaCode /> ,value: 66, time:'2:19'},
  "/#powered": { name: "Powered By", icon: <FaPlug />, value:  100, time:'3:30'},
};
