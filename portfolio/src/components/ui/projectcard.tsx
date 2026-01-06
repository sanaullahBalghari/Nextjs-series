"use client";
import { useState } from "react";
import { ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    image: string;
    category: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    stats?: {
      users?: string;
      performance?: string;
      rating?: string;
    };
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Full Stack": "from-purple-500 to-blue-500",
      "Web App": "from-green-500 to-emerald-500",
      "AI/ML": "from-pink-500 to-rose-500",
      "Dashboard": "from-orange-500 to-red-500",
      "Analytics": "from-cyan-500 to-blue-500",
      "Mobile": "from-indigo-500 to-purple-500"
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} shadow-lg`}>
            {project.category}
          </span>
        </div>

        {/* Quick Action Buttons */}
        <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Stats Overlay */}
        {project.stats && (
          <div className={`absolute bottom-4 left-4 right-4 flex gap-2 sm:gap-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {project.stats.users && (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-semibold">{project.stats.users}</span>
              </div>
            )}
            {project.stats.performance && (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg">
                <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs font-semibold">{project.stats.performance}</span>
              </div>
            )}
            {project.stats.rating && (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-xs font-semibold">{project.stats.rating}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 cursor-pointer">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-800/50 border border-gray-700 rounded-md text-xs font-medium text-gray-300 hover:border-purple-500/50 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 bg-gray-800/50 border border-gray-700 rounded-md text-xs font-medium text-gray-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link href={`/projects/${project.slug}`}>
          <button className="w-full py-2.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg font-semibold text-sm hover:from-purple-500 hover:to-blue-500 hover:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50">
            View Details
          </button>
        </Link>
      </div>

      {/* Decorative Corner Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}