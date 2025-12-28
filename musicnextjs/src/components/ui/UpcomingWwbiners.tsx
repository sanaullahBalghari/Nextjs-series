'use client'
import Link from 'next/link'
import { HoverEffect } from './card-hover-effect';

export const upcomingWebinarss = [
  {
    title: "Mastering Music Monetization",
    description:
      "Learn how modern musicians can build sustainable income streams through digital platforms and global audiences.",
    host: "Stripe Music Lab",
    date: "2025-01-10",
    time: "6:00 PM GMT",
    // link: "https://stripe.com",
    featured: true,
  },
  {
    title: "Scoring Music for Film & Series",
    description:
      "Explore how music is created and licensed for TV shows, films, and streaming platforms.",
    host: "Netflix Music Studios",
    date: "2025-01-15",
    time: "7:00 PM GMT",
 
    featured: true,
  },
  {
    title: "AI & the Future of Music Production",
    description:
      "Discover how AI tools are transforming music composition, mixing, and sound design.",
    host: "Google Audio Labs",
    date: "2025-01-20",
    time: "5:00 PM GMT",
  
    featured: false,
  },
  {
    title: "Building Music Communities Online",
    description:
      "Learn how artists can grow loyal fan bases using social media and immersive digital experiences.",
    host: "Meta Creators Hub",
    date: "2025-01-25",
    time: "6:30 PM GMT",

    featured: false,
  },
  {
    title: "Independent Music Distribution 101",
    description:
      "A complete guide to releasing, distributing, and promoting your music globally as an independent artist.",
    host: "Amazon Music for Artists",
    date: "2025-02-01",
    time: "7:00 PM GMT",

    featured: true,
  },
  {
    title: "Music Technology & Digital Instruments",
    description:
      "Dive into modern music software, digital instruments, and tools shaping the sound of tomorrow.",
    host: "Microsoft Sound Studio",
    date: "2025-02-05",
    time: "5:30 PM GMT",
  
    featured: false,
  },
];


function UpcomingWwbiners() {
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                 <p className="text-gray-600 text-lg dark:text-gray-300">
  FEATURED WEBINERS
  </p>
 <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-teal-600">
    Enhance Your Musical journey
  </h2>

 
            </div>
            <div className='mt-10'>
                  <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={upcomingWebinarss} />
    </div>
            </div>
            <div className='mt-10 text-center'>
                  <Link
    href="/"
    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition inline-block"
  >
    View All Webiners
  </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWwbiners