"use client";
import { useState } from "react";
import { ArrowLeft, ExternalLink, Github, Check, Calendar, Tag, Users, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

// This would be used in Next.js app router: app/projects/[slug]/page.tsx
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("overview");
  
  // In real implementation, you'd use: const project = projects.find(p => p.slug === params.slug);
  // For demo, using first project
  const project = projects[0];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Full Stack": "from-purple-500 to-blue-500",
      "Web App": "from-green-500 to-emerald-500",
      "AI/ML": "from-pink-500 to-rose-500",
      "Dashboard": "from-orange-500 to-red-500",
      "Analytics": "from-cyan-500 to-blue-500",
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Back Button */}
          <Link href="/projects">
            <button className="absolute top-6 left-6 p-3 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-all group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
          </Link>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar className="w-4 h-4" />
                  {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                {project.title}
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mb-6">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          
          {/* Stats Cards */}
          {project.stats && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {project.stats.users && (
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6">
                  <Users className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{project.stats.users}</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
              )}
              {project.stats.performance && (
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 sm:p-6">
                  <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{project.stats.performance}</div>
                  <div className="text-sm text-gray-400">Performance</div>
                </div>
              )}
              {project.stats.rating && (
                <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4 sm:p-6">
                  <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{project.stats.rating}</div>
                  <div className="text-sm text-gray-400">User Rating</div>
                </div>
              )}
            </div>
          )}

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 border-b border-gray-800 pb-4">
            {["overview", "features", "technologies"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all capitalize ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {activeTab === "overview" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Project Overview</h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-all"
                    >
                      <div className="p-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "technologies" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tech Stack</h2>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl hover:border-purple-500/50 transition-all hover:scale-105"
                    >
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                        <span className="text-sm sm:text-base font-semibold">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* More Projects */}
          <div className="mt-16 sm:mt-20 lg:mt-24 pt-12 border-t border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">More Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`}>
                  <div className="group cursor-pointer bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all">
                    <div className="h-48 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">{p.title}</h3>
                      <p className="text-sm text-gray-400 line-clamp-2">{p.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}