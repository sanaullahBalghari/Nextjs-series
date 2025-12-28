'use client'
import { WavyBackground } from "./wavy-background"
import { AnimatedTooltip } from "./animated-tooltip";
export const instructors = [
  {
    id: 1,
    name: "Ahsan Ali",
    designation: "Senior Music Instructor & Composer",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  },
  {
    id: 2,
    name: "Ahsan",
    designation: "Vocal Training Specialist",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  },
  {
    id: 3,
    name: "Ali",
    designation: "Music Production & Sound Design Expert",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    id: 4,
    name: "Ah Ali",
    designation: "Classical & Contemporary Music Mentor",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  },
];


function Instructors() {
  return (
  <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">

    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
    Meet Our Instructors
  </h1>

  <p className="text-white text-lg dark:text-gray-300">
    Learn with the Best
  </p>

  <div className="flex flex-row items=center justify-center mb-10 w-full">
        <AnimatedTooltip items={instructors} />
  </div>
    </WavyBackground>
  </div>
  )
}

export default Instructors