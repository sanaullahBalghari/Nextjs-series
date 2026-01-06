"use client";
import { Download } from "lucide-react";

export default function AboutSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sanaullah_Akhonzada_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen bg-black text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-sm sm:text-base font-semibold text-purple-400 uppercase tracking-wider mb-3 sm:mb-4">
            Get To Know More
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h3>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1">
                <div className="bg-black rounded-2xl overflow-hidden">
                  <img
                    src="/images/sana1.jpeg"
                    alt="Sanaullah Akhonzada"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl -z-10 blur-xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl -z-10 blur-xl" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Introduction */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Passionate Developer</span>
              </h4>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in building scalable, high-performance web applications. My expertise spans across modern JavaScript frameworks, backend technologies, and cloud infrastructure.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                I'm driven by the challenge of turning complex problems into elegant solutions. Whether it's crafting intuitive user interfaces or architecting robust backend systems, I bring creativity and technical excellence to every project.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
            </div>

            {/* Download Resume Button */}
            <div className="flex justify-center lg:justify-start pt-4">
              <button
                onClick={handleDownloadResume}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 flex items-center gap-3"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}