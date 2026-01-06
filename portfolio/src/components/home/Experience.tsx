"use client";
import { useState } from "react";
import { Briefcase, Calendar, MapPin, TrendingUp, Award, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of enterprise-scale applications with modern tech stack. Architecting scalable solutions and mentoring junior developers.",
      achievements: [
        "Built microservices architecture serving 1M+ users",
        "Reduced API response time by 60% through optimization",
        "Led team of 5 developers on major product launch",
        "Implemented CI/CD pipeline reducing deployment time by 80%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Remote",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed and maintained multiple client projects, focusing on responsive web applications and RESTful APIs.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Improved application performance by 45%",
        "Introduced TypeScript to improve code quality",
        "Mentored 3 junior developers"
      ],
      technologies: ["Next.js", "Express", "PostgreSQL", "TailwindCSS"],
      color: "from-blue-500 to-cyan-500"
    },
   
   
  ];

  const currentExp = experiences[activeExperience];

  return (
    <section id="experience" className="min-h-screen bg-black text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-sm sm:text-base font-semibold text-purple-400 uppercase tracking-wider mb-3 sm:mb-4">
            My Professional Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Work Experience
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            A timeline of growth, learning, and impactful contributions
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Side - Timeline Navigation */}
            <div className="lg:col-span-4 relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 hidden sm:block" />
              
              <div className="space-y-4 sm:pl-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className={`
                    absolute -left-[34px] top-1/2 -translate-y-1/2 hidden sm:block
                    w-3 h-3 rounded-full border-4 border-black z-10
                    transition-all duration-300
                    ${activeExperience === index 
                      ? `bg-gradient-to-br ${exp.color} ring-4 ring-purple-500/30 scale-150` 
                      : 'bg-gray-600'
                    }
                  `} />
                  
                  <div
                    onClick={() => setActiveExperience(index)}
                    className={`
                      group cursor-pointer rounded-2xl p-4 sm:p-6
                      transition-all duration-500
                      ${activeExperience === index
                        ? `bg-gradient-to-br ${exp.color} shadow-2xl scale-105`
                        : 'bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800'
                      }
                    `}
                  >
                  {/* Timeline Dot */}
                  <div className="flex items-start gap-4">
                    <div className={`
                      p-3 rounded-xl transition-all duration-300
                      ${activeExperience === index 
                        ? 'bg-white/20 ring-4 ring-white/30' 
                        : 'bg-gray-800 group-hover:bg-gray-700'
                      }
                    `}>
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={`
                        text-base sm:text-lg font-bold mb-1 truncate
                        ${activeExperience === index ? 'text-white' : 'text-gray-300'}
                      `}>
                        {exp.role}
                      </h4>
                      <p className={`
                        text-sm sm:text-base mb-2 truncate
                        ${activeExperience === index ? 'text-white/90' : 'text-gray-400'}
                      `}>
                        {exp.company}
                      </p>
                      <div className={`
                        text-xs sm:text-sm flex items-center gap-2
                        ${activeExperience === index ? 'text-white/80' : 'text-gray-500'}
                      `}>
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {activeExperience === index && (
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                    )}
                  </div>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Right Side - Experience Details */}
            <div className="lg:col-span-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 lg:p-10 min-h-[500px] sm:min-h-[600px]">
                
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {currentExp.role}
                      </h3>
                      <p className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
                        {currentExp.company}
                      </p>
                    </div>
                    <span className={`
                      px-4 py-2 rounded-full text-xs sm:text-sm font-semibold
                      bg-gradient-to-r ${currentExp.color} whitespace-nowrap
                    `}>
                      {currentExp.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      {currentExp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      {currentExp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  {currentExp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                    <h4 className="text-lg sm:text-xl font-bold text-white">Key Achievements</h4>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {currentExp.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base text-gray-300 animate-in slide-in-from-left"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {currentExp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`
                          px-3 sm:px-4 py-1.5 sm:py-2
                          bg-gradient-to-r ${currentExp.color}
                          rounded-full text-xs sm:text-sm font-semibold
                          hover:scale-110 transition-transform duration-300
                          cursor-default
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      

      </div>
    </section>
  );
}