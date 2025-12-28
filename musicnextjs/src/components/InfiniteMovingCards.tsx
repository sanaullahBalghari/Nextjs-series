"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="relative h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">

      {/* 🔥 Grid + Dot Background */}
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      {/* ⭐ Soft radial fade */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* ⭐ Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-wide">
        What People Say About Our Music
      </h2>

      {/* ⭐ Infinite Cards */}
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This platform completely changed the way I discover music. The playlists are always on point!This platform completely changed the way I discover music. The playlists are always on point!",
    name: "Ayesha Khan",
    title: "Music Enthusiast",
  },
  {
    quote:
      "As a producer, I love how clean and punchy the audio sounds. Perfect for inspiration on the go.",
    name: "DJ Rameez",
    title: "Music Producer",
  },
  {
    quote:
      "I’ve found so many underrated artists here. The recommendations feel personal and accurate.",
    name: "Hassan Ali",
    title: "Indie Music Lover",
  },
  {
    quote:
      "Great UI, smooth playback, and zero interruptions. This is my go-to app for daily music sessions.",
    name: "Sara Mehmood",
    title: "Student",
  },
  {
    quote:
      "Whether I'm working, driving, or relaxing, the mood-based playlists always fit perfectly.",
    name: "Bilal Ahmed",
    title: "Software Engineer",
  },
];
