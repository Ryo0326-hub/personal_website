import React from "react";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";

import Footer from "./Footer";

const Home: React.FC = () => {
  // Personal information
  const personalInfo = {
    name: "John Doe",
    tagline: "Honours Mathematics @ University of Waterloo",
    photoUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
    email: "john.doe@uwaterloo.ca",
    githubUrl: "https://github.com/johndoe",
    linkedinUrl: "https://linkedin.com/in/johndoe",
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Algorithm Visualizer",
      description:
        "Interactive web application that visualizes various sorting and pathfinding algorithms with step-by-step animations and time complexity analysis.",
      techStack: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
      githubUrl: "https://github.com/johndoe/algorithm-visualizer",
      demoUrl: "https://algorithm-visualizer-demo.com",
      imageUrl:
        "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=450&q=80",
    },
    {
      id: 2,
      title: "Machine Learning Research Paper",
      description:
        "Implementation of a novel approach to neural network optimization based on mathematical principles from calculus of variations.",
      techStack: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/johndoe/ml-research",
      demoUrl: "https://ml-research-demo.com",
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=450&q=80",
    },
    {
      id: 3,
      title: "Cryptography Tool Suite",
      description:
        "A comprehensive toolkit for encryption, decryption, and cryptanalysis with implementations of various cryptographic algorithms.",
      techStack: ["JavaScript", "Node.js", "Express", "Web Crypto API"],
      githubUrl: "https://github.com/johndoe/crypto-tools",
      demoUrl: "https://crypto-tools-demo.com",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=450&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero section */}
      <Header
        name={personalInfo.name}
        tagline={personalInfo.tagline}
        photoUrl={personalInfo.photoUrl}
        navLinks={[
          { label: "Projects", href: "#projects" },
          { label: "Experience", href: "#experience" },

          { label: "Contact", href: "#contact" },
        ]}
      />

      {/* Projects section */}
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Featured Projects"
          subtitle="A showcase of my technical work and mathematical applications"
        />
      </div>

      {/* Experience section */}
      <div id="experience">
        <ExperienceSection />
      </div>

      {/* Contact footer */}
      <div id="contact">
        <Footer
          email={personalInfo.email}
          githubUrl={personalInfo.githubUrl}
          linkedinUrl={personalInfo.linkedinUrl}
        />
      </div>
    </div>
  );
};

export default Home;
