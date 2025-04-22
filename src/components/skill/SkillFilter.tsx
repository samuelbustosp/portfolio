"use client";

import React from "react";

interface SkillFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const SkillFilter: React.FC<SkillFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  
  const getButtonClass = (category: string) => 
    `md:px-2 md:py-1 rounded-full  transition-all md:text-md text-sm px-1.5 py-0.5 ${
      selectedCategory === category ? "bg-zinc-100 text-zinc-900 cursor-pointer font-light" 
        : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 cursor-pointer"
    }`;

  return (
    <div className="flex items-center gap-1 p-1 mt-4">
      {["All", "Language", "Framework", "Library"].map((category) => (
        <button
          key={category}
          className={getButtonClass(category)}
          onClick={() => setSelectedCategory(category)}
        >
          {category === "All" ? "Todo" : category}
        </button>
      ))}
    </div>
  );
};

export default SkillFilter;
