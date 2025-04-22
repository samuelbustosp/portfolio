import { FaReact, FaJava, FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

export const skills = [
    { name: "React", level: "Medium", icon: <FaReact />, category: "Library" },
    { name: "Java", level: "Low", icon: <FaJava />, category: "Language" },
    { name: "JavaScript", level: "High", icon: <FaJsSquare />, category: "Language" },
    { name: "Tailwind", level: "High", icon: <RiTailwindCssFill />, category: "Framework" },
    { name: "HTML5", level: "High", icon: <FaHtml5 />, category: "Markup" },
    { name: "CSS3", level: "High", icon: <FaCss3 />, category: "Style" },
    { name: "TypeScript", level: "High", icon: <SiTypescript />, category: "Language" },
    { name: "Next", level: "High", icon: <SiNextdotjs />, category: "Framework" }
];
