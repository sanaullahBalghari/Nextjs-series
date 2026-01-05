"use client";
import { useState, useEffect } from "react";

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const technologies = [
    // Frontend
    { name: "React", category: "frontend", color: "from-cyan-400 to-blue-500", size: "large" },
    { name: "Next.js", category: "frontend", color: "from-gray-200 to-gray-400", size: "large" },
    { name: "TypeScript", category: "frontend", color: "from-blue-500 to-blue-700", size: "medium" },
    { name: "JavaScript", category: "frontend", color: "from-yellow-400 to-yellow-600", size: "large" },
    { name: "TailwindCSS", category: "frontend", color: "from-teal-400 to-cyan-500", size: "medium" },
    { name: "HTML5", category: "frontend", color: "from-orange-500 to-red-500", size: "small" },
    { name: "CSS3", category: "frontend", color: "from-blue-400 to-blue-600", size: "small" },
    { name: "Redux", category: "frontend", color: "from-purple-500 to-purple-700", size: "small" },
    
    // Backend
    { name: "Node.js", category: "backend", color: "from-green-500 to-green-700", size: "large" },
    { name: "Express", category: "backend", color: "from-gray-600 to-gray-800", size: "medium" },
    { name: "MongoDB", category: "backend", color: "from-green-600 to-emerald-700", size: "medium" },
    { name: "PostgreSQL", category: "backend", color: "from-blue-600 to-indigo-700", size: "medium" },
    { name: "GraphQL", category: "backend", color: "from-pink-500 to-rose-600", size: "small" },
    { name: "REST API", category: "backend", color: "from-indigo-500 to-purple-600", size: "small" },
    { name: "Prisma", category: "backend", color: "from-slate-600 to-slate-800", size: "small" },
    
    // DevOps & Tools
    { name: "Docker", category: "devops", color: "from-blue-500 to-sky-600", size: "medium" },
    { name: "AWS", category: "devops", color: "from-orange-400 to-amber-600", size: "medium" },
    { name: "Git", category: "devops", color: "from-orange-600 to-red-700", size: "medium" },
    { name: "CI/CD", category: "devops", color: "from-teal-500 to-emerald-600", size: "small" },
    { name: "Nginx", category: "devops", color: "from-green-600 to-green-800", size: "small" },
    { name: "Linux", category: "devops", color: "from-yellow-500 to-orange-600", size: "small" },
    
    // Tools
    { name: "VS Code", category: "tools", color: "from-blue-500 to-cyan-600", size: "small" },
    { name: "Figma", category: "tools", color: "from-purple-500 to-pink-600", size: "small" },
    { name: "Postman", category: "tools", color: "from-orange-500 to-red-600", size: "small" },
    { name: "Jest", category: "tools", color: "from-red-600 to-rose-700", size: "small" },
  ];

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "devops", label: "DevOps" },
    { id: "tools", label: "Tools" },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg lg:text-xl";
      case "medium":
        return "px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg";
      case "small":
        return "px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base";
      default:
        return "px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base";
    }
  };

  const filteredTechs = activeCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-sm sm:text-base font-semibold text-purple-400 uppercase tracking-wider mb-3 sm:mb-4">
            Tools and Skills I Work With
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Technology Stack
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            A comprehensive toolkit of modern technologies I use to build exceptional digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12 sm:mb-16 lg:mb-20 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50 scale-105"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Technology Cloud */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 px-4">
            {filteredTechs.map((tech, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  ${getSizeClasses(tech.size)}
                  bg-gradient-to-br ${tech.color}
                  rounded-full font-bold
                  cursor-pointer
                  transition-all duration-500
                  hover:scale-125 hover:rotate-3
                  hover:shadow-2xl
                  animate-in fade-in
                  ${hoveredIndex === index 
                    ? 'shadow-2xl z-20 ring-4 ring-white/20' 
                    : 'hover:shadow-lg'
                  }
                  backdrop-blur-sm
                  relative
                  overflow-hidden
                  group
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationDuration: '600ms'
                }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Text */}
                <span className="relative z-10 drop-shadow-lg">
                  {tech.name}
                </span>

                {/* Glow Effect on Hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="inline-block bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-purple-500/50 transition-all duration-300">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Always Learning & Exploring
            </p>
            <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
              Continuously expanding my skill set to stay at the forefront of web development
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}