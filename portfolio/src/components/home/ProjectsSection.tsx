"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../ui/projectcard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Full Stack", label: "Full Stack" },
    { id: "Web App", label: "Web Apps" },
    { id: "AI/ML", label: "AI/ML" },
    { id: "Dashboard", label: "Dashboards" },
  ];

  // Show only featured projects on home page
  const featuredProjects = projects.filter(project => project.featured);
  
  const filteredProjects = activeFilter === "all" 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-sm sm:text-base font-semibold text-purple-400 uppercase tracking-wider mb-3 sm:mb-4">
            My Recent Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Featured Projects
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work in web development, featuring modern technologies and innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50 scale-105"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link href="/projects">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 inline-flex items-center gap-3">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

      
      </div>
    </section>
  );
}