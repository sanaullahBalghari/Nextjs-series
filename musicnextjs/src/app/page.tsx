import Featuredcourses from "@/components/Featuredcourses";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import Footer from "@/components/ui/Footer";
import Instructors from "@/components/ui/Instructors";
import UpcomingWwbiners from "@/components/ui/UpcomingWwbiners";
import WhyChooseus from "@/components/WhyChooseus";

export default function Home() {
  return (


    <main className="min-h-screen bg-black/[0.96 bg-grid-white/[0.2]">

     

      <HeroSection/>
      <Featuredcourses/>
      <WhyChooseus/>
      <InfiniteMovingCardsDemo/>
      <UpcomingWwbiners/>
      <Instructors/>
      <Footer/>
    </main>


  );
}
