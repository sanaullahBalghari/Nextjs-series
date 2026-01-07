"use client";
import { useState } from "react";
import { Mail, Linkedin, Github, Instagram, Heart, ArrowUp, Send } from "lucide-react";
import { BackgroundLines } from "../ui/background-lines";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/sana-ullah-akhonzada-606767279/",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50"
    },
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/sanaullahBalghari",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:shadow-gray-500/50"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com/yourprofile",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:shadow-pink-500/50"
    },
    { 
      name: "Email", 
      icon: Mail, 
      url: "mailto:your.email@example.com",
      color: "from-red-500 to-orange-600",
      hoverColor: "hover:shadow-red-500/50"
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribe:", email);
      setEmail("");
    }
  };

  return (
<>
  
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 mt-11 animate-bounce -translate-x-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/50 z-20 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        
        {/* Main Footer Content */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Brand Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Sanaullah Akhonzada
              </h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
                Full Stack Developer crafting exceptional digital experiences with modern technologies. 
                Let's build something amazing together!
           
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`
                    group relative p-4 rounded-2xl
                    bg-gradient-to-br ${social.color}
                    hover:scale-110 transition-all duration-300
                    shadow-lg ${social.hoverColor}
                    ${hoveredSocial === index ? 'ring-4 ring-white/20' : ''}
                  `}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>

                  {/* Glow Effect */}
                  {hoveredSocial === index && (
                    <div className="absolute inset-0 bg-white/10 rounded-2xl animate-ping" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              © 2026 Sanaullah Akhonzada. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Gilgit Baltistan <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> Pakistan
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50" />
      </div>
    </footer>
      
    </>
  );
}