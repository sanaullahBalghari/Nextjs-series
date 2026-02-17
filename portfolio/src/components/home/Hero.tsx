"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
// Dynamically import the World component to avoid SSR issues
const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

   let startTime: number | undefined;
let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuad = 1 - Math.pow(1 - percentage, 3);
      const current = Math.floor(easeOutQuad * end);
      
      setCount(current);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

// Auto-typing effect component
function AutoTypeText({ texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }: { texts: string[]; typingSpeed?: number; deletingSpeed?: number; pauseDuration?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && displayText === currentText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}

export default function PortfolioHero() {
  const rotatingTexts = [
    "Hi, I'm Sanaullah Akhonzada",
    "Full Stack Developer",
    "Software Engineer",
  ];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        {/* Mobile Layout (Intro first, then Globe) */}
        <div className="lg:hidden flex flex-col min-h-[calc(100vh-4rem)]">
          
          {/* Mobile Intro Section */}
          <div className="flex-1 flex flex-col justify-center space-y-6 text-center py-8">
            {/* Auto-typing Name/Title */}
            <div className="min-h-[80px] sm:min-h-[100px] flex items-center justify-center px-4">
              <h1 className="text-2xl sm:text-6xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                <AutoTypeText 
                  texts={rotatingTexts} 
                  typingSpeed={80}
                  deletingSpeed={50}
                  pauseDuration={2000}
                />
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-light px-4">
              Trust me, I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-semibold">
                Software Engineer
              </span>
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed px-6">
              Crafting innovative solutions with cutting-edge technologies. 
              Passionate about building scalable applications and delivering 
              exceptional user experiences.
            </p>

           

             {/* CTA Buttons */}
<div className="flex gap-4 pt-4">
  
  {/* View Projects → Projects Page */}
  <Link href="/projects">
    <button className="px-6 py-2 border-2 border-purple-500 rounded-lg font-semibold text-base xl:text-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
      View Projects
    </button>
  </Link>

  {/* Contact Me → Home Page Contact Section */}
  <Link href="/#contact">
    <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-base xl:text-lg hover:opacity-90 transition-all duration-300 hover:scale-105">
      Contact Me
    </button>
  </Link>

</div>

 
            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center pt-6 px-4">
              <div className="text-center min-w-[90px]">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                  <AnimatedCounter end={2} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Years Experience</div>
              </div>
              <div className="text-center min-w-[90px]">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Projects</div>
              </div>
              <div className="text-center min-w-[90px]">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">
                  <AnimatedCounter end={90} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Mobile Globe Section */}
          <div className="flex-1 flex items-center justify-center py-8 min-h-[400px]">
            <div className="w-full max-w-md mx-auto relative h-[400px] sm:h-[450px]">
              <div className="absolute inset-0">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout (Intro left, Globe right) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Side - Intro Text Content */}
          <div className="space-y-8 text-left">
            {/* Auto-typing Name/Title */}
            <div className="min-h-[120px] xl:min-h-[140px] flex items-center">
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                <AutoTypeText 
                  texts={rotatingTexts} 
                  typingSpeed={80}
                  deletingSpeed={50}
                  pauseDuration={2000}
                />
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl xl:text-2xl 2xl:text-3xl text-gray-300 font-light">
              Trust me, I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-semibold">
                Software Engineer
              </span>
            </p>

            {/* Description */}
            <p className="text-base xl:text-lg text-gray-400 max-w-xl leading-relaxed">
              Crafting innovative solutions with cutting-edge technologies. 
              Passionate about building scalable applications and delivering 
              exceptional user experiences.
            </p>

             {/* CTA Buttons */}
<div className="flex gap-4 pt-4">
  
  {/* View Projects → Projects Page */}
  <Link href="/projects">
    <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-base xl:text-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
      View Projects
    </button>
  </Link>

  {/* Contact Me → Home Page Contact Section */}
  <Link href="/#contact">
    <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-base xl:text-lg hover:opacity-90 transition-all duration-300 hover:scale-105">
      Contact Me
    </button>
  </Link>

</div>

            {/* Stats */}
            <div className="flex gap-8 xl:gap-12 pt-8">
              <div className="text-left">
                <div className="text-3xl xl:text-4xl font-bold text-purple-400">
                  <AnimatedCounter end={2} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 mt-1">Years Experience</div>
              </div>
              <div className="text-left">
                <div className="text-3xl xl:text-4xl font-bold text-blue-400">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 mt-1">Projects</div>
              </div>
              <div className="text-left">
                <div className="text-3xl xl:text-4xl font-bold text-green-400">
                  <AnimatedCounter end={90} suffix="%" />
                </div>
                <div className="text-sm text-gray-500 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Globe */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto relative h-[500px] xl:h-[600px]">
              <div className="absolute inset-0">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}