"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
     icon?: React.ReactElement
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center",
            "hidden md:flex pr-2 pl-8 py-2 space-x-12",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 text-white items-center flex space-x-2 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors"
              )}
            >
              <span className="text-lg md:text-lg lg:text-lg">{navItem.name}</span>
            </a>
          ))}
          <Link href="#contact">
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all">
              <span>Hire Me</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Hamburger Button */}
      <motion.button
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={cn(
          "md:hidden flex fixed top-10 right-6 z-[5001] p-3 rounded-full",
          "dark:bg-black bg-white border border-transparent dark:border-white/[0.2]",
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {mobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[4999]"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "md:hidden fixed top-0 right-0 h-full w-[280px] z-[5000]",
                "dark:bg-black bg-white border-l border-transparent dark:border-white/[0.2]",
                "shadow-[-10px_0px_30px_-15px_rgba(0,0,0,0.3)] overflow-y-auto",
                className
              )}
            >
              <div className="flex flex-col p-8 space-y-6 mt-20">
                {navItems.map((navItem: any, idx: number) => (
                  <motion.a
                    key={`mobile-link=${idx}`}
                    href={navItem.link}
                    onClick={handleNavClick}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className={cn(
                      "flex items-center space-x-4 group",
                      "dark:text-neutral-50 text-white text-lg font-medium",
                      "hover:translate-x-2 transition-transform duration-200"
                    )}
                  >
                    <span className="p-2 rounded-lg dark:bg-white/[0.1] bg-gray-800/10 group-hover:bg-blue-500/20 transition-colors">
                      {navItem.icon}
                    </span>
                    <span>{navItem.name}</span>
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="mt-4"
                >
                  <Link href="#contact" onClick={handleNavClick}>
                    <button className="w-full border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-6 py-3 rounded-full hover:bg-blue-500/10 transition-all">
                      <span>Hire Me</span>
                      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};