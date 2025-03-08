import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
  title?: string;
  subtitle?: string;
}

const ProjectsSection = ({
  projects,
  title,
  subtitle,
}: ProjectsSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            {title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-6 px-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                    imageUrl={project.imageUrl}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-slate-950 to-transparent w-12 h-full"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-slate-950 to-transparent w-12 h-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View more projects on GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
