// src/app/page.tsx
import AboutSection from "@/components/home/About";
import ExperienceSection from "@/components/home/Experience";
import FeaturedBlogsSection from "@/components/home/FeaturedBlogsSection";

import PortfolioHero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/Skills";

import ContactSection from "@/components/home/Contact";


export default function Home() {
  return (
    <main className="flex flex-col">
      <PortfolioHero/>
      
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <FeaturedBlogsSection/>
      <ContactSection/>

     
    </main>
  );
}
