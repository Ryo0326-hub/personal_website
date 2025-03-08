import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeaderProps {
  name?: string;
  tagline?: string;
  photoUrl?: string;
  navLinks?: Array<{ label: string; href: string }>;
}

const Header = ({
  name = "John Doe",
  tagline = "Honours Mathematics @ University of Waterloo",
  photoUrl = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
  navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
}: HeaderProps) => {
  return (
    <header className="relative w-full h-[700px] bg-slate-900 text-white overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 opacity-90"></div>

      {/* Animated particles/dots effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 md:px-16 lg:px-24">
        <div className="text-xl font-bold text-blue-400">Portfolio</div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button
          variant="outline"
          className="md:hidden bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          Menu
        </Button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 h-[calc(700px-88px)] flex flex-col md:flex-row items-center justify-center md:justify-between">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="text-blue-400">{name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8">{tagline}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 rounded-md text-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="md:w-2/5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 blur-md opacity-70"></div>
            <img
              src={photoUrl}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-lg shadow-blue-900/30"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-slate-400 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
