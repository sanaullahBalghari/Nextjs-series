"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, Code, BookOpen, Mail } from "lucide-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-5 w-5 text-white" />,
    },
    {
      name: "About",
      link: "#About",
      icon: <User className="h-5 w-5 text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <Briefcase className="h-5 w-5 text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <Code className="h-5 w-5 text-white" />,
    },
    {
      name: "Blogs",
      link: "#blogs",
      icon: <BookOpen className="h-5 w-5 text-white" />,
    },
 
  ];

  return (
    <div className="relative w-full">
      <FloatingNav 
        navItems={navItems}
        className="max-w-5xl mx-auto px-10 py-5 bg-gradient-to-r from-dark-900/95 backdrop-blur-xl border border-purple-400/40 shadow-2xl shadow-purple-500/30 "
      />
    </div>
  );
}