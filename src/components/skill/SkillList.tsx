'use client';

import { skills } from "@/data/skill";
import Skill from "./Skill";

interface SkillListProps {
    selectedCategory: string; 
}

const SkillList = ({selectedCategory}: SkillListProps) => {

    const filteredSkills = selectedCategory === 'All'
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    return ( 
        <main className="grid grid-cols-3 min-h-60 items-start">
            {filteredSkills.map((skill, index)=>(
                <Skill key={index} name={skill.name} category={skill.category} icon={skill.icon} /> 
            ))}

        </main>
     );
}
 
export default SkillList;