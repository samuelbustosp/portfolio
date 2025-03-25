import { FaCode, FaHome, FaPlug, FaUser } from "react-icons/fa";

export const sections: Record<string, { name: string; icon: React.ReactElement}> = {
  "/": { name: "Inicio", icon: <FaHome /> },
  "/#about": { name: "Sobre mí", icon: <FaUser /> },
  "/#skills": { name: "Habilidades", icon: <FaCode /> },
  "/#powered": { name: "Powered By", icon: <FaPlug /> },
};
