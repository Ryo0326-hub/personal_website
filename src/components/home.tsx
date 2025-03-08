import React from "react";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";

import Footer from "./Footer";

const Home: React.FC = () => {
  // Personal information
  const personalInfo = {
    name: "Ryo Kitano",
    tagline: "University of Waterloo Math Student",
    photoUrl:
      "",
    email: "rkitano@uwaterloo.ca",
    githubUrl: "https://github.com/Ryo0326-hub",
    linkedinUrl: "https://linkedin.com/in/ryo-kitano",
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Automated Algorithm Trade",
      description:
        "Implementation of automated algorithmic trading strategies with the OANDA trading platform.",
      techStack: ["Python", "OANDA API", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/johndoe/algorithm-visualizer",
      demoUrl: "https://algorithm-visualizer-demo.com",
      imageUrl:
        "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=450&q=80",
    },
    {
      id: 2,
      title: "Generating Stock Price Prediction using Machine Learning",
      description:
        "Using LSTM neural networks to predict stock prices and visualize the results.",
      techStack: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/johndoe/ml-research",
      demoUrl: "https://ml-research-demo.com",
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=450&q=80",
    },
    {
      id: 3,
      title: "Mathematical VR Application for Meta Quest 3s",
      description:
        "A virtual reality application that visualizes mathematical concepts in 3D space.",
      techStack: ["Unity", "C#", "Oculus Integration", "SteamVR"],
      githubUrl: "https://github.com/johndoe/crypto-tools",
      demoUrl: "https://crypto-tools-demo.com",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=450&q=80",
    },
    {
      id: 4,
      title: "Bitcoin Mining using C++",
      description:
        "Using C++ programming to mine Bitcoin and visualize the results.",
      techStack: ["C++"],
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
