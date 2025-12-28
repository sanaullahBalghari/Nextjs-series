import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
function HeroSection() {
  return (
    <div
      className="relative flex h-auto md:h-[40rem] w-full overflow-hidden 
      rounded-md bg-black/[0.96] antialiased flex-col items-center justify-center 
      mx-auto py-10 md:py-0"
    >

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 [background-size:40px_40px] select-none 
        [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),
        linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
      />

      {/* Static Spotlight (does NOT move) */}
     <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Hero content */}
      <div className="relative z-10 p-4 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text 
        text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical journey today.
          Whether you're a beginner or looking to refine your skills, join us to unlock your 
          true potential.
        </p>

        <div className="mt-6  dark:bg-slate-900">
          <Link
            href={"/courses"}

          >
           <Button
        borderRadius="1.75rem"
        className="dark:bg-slate-900 text-black text-white border-neutral-200 dark:border-slate-800"
      >
      Explore
      </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
