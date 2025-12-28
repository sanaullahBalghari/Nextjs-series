"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Create & Mix Together",
    description:
      "Collaborate with artists, producers, and friends in real time. Mix tracks, share ideas instantly, and build your sound without the hassle. Make music together—no matter where you are.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Create & Mix Together
      </div>
    ),
  },
  {
    title: "Live Music Updates",
    description:
      "Hear changes to your track the moment they happen. Whether you're adjusting beats, vocals, or effects, our platform updates instantly—making collaboration smooth and effortless.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="music waveform"
        />
      </div>
    ),
  },
  {
    title: "Track Version History",
    description:
      "Never lose an idea again. Every edit to your tracks is saved and organized, so you can revisit older versions anytime. Keep your creative flow without worrying about losing progress.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Track Version History
      </div>
    ),
  },
  {
    title: "Unlimited Inspiration",
    description:
      "Access endless sound samples, loops, and music tools to spark new ideas. Whether you're producing your first beat or your next hit, you’ll never run out of creative inspiration.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Unlimited Inspiration
      </div>
    ),
  },
];


function WhyChooseus() {
  return (
    <div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseus