"use client";
import { useState, useEffect, useRef } from "react";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

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
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
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

export default function PortfolioHero() {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = [
    "Hi, I'm Sanaullah Akhonzada",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            {/* Animated Name/Title */}
            <div className="h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center lg:justify-start">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse transition-all duration-500 px-2">
                {rotatingTexts[currentText]}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light px-2">
              Trust me, I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-semibold">
                Software Engineer
              </span>
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2">
              Crafting innovative solutions with cutting-edge technologies. 
              Passionate about building scalable applications and delivering 
              exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 px-2">
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 rounded-lg font-semibold text-base sm:text-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
                View Projects
              </button>
            </div>

            {/* Stats or Badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start pt-6 sm:pt-8 text-sm px-2">
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl font-bold text-green-400">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Pixelated Canvas */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="mx-auto mt-8">
              <PixelatedCanvas
                src="/images/two-removebg-preview.png"
                width={500}
                height={500}
                cellSize={3}
                dotScale={0.9}
                shape="square"
                backgroundColor="#000000"
                dropoutStrength={0.4}
                interactive
                distortionStrength={3}
                distortionRadius={80}
                distortionMode="swirl"
                followSpeed={0.2}
                jitterStrength={4}
                jitterSpeed={4}
                sampleAverage
                tintColor="#FFFFFF"
                tintStrength={0.2}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for extra flair */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}