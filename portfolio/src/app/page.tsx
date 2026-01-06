// src/app/page.tsx
import AboutSection from "@/components/home/About";
import ExperienceSection from "@/components/home/Experience";
import FeaturedBlogsSection from "@/components/home/FeaturedBlogsSection";

import PortfolioHero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/Skills";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
// import { Hero } from "@/components/home/Hero";
// import About from "@/components/home/About";
// import Skills from "@/components/home/Skills";
// import FeaturedProjects from "@/components/home/FeaturedProjects";
// import LatestBlogs from "@/components/home/LatestBlogs";
// import Experience from "@/components/home/Experience";
// import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <PortfolioHero/>
      
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <FeaturedBlogsSection/>

      {/*
        Next sections baad mein:
        <About />
        <Skills />
        <FeaturedProjects />
        <LatestBlogs />
        <Experience />
        <Contact />
      */}
    </main>
  );
}
