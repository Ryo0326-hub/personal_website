import React from "react";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    proficiency: number; // 1-5 scale
  }[];
}

const SkillCategory = ({
  title = "Programming Languages",
  skills = [
    { name: "JavaScript", proficiency: 4 },
    { name: "TypeScript", proficiency: 3 },
    { name: "Python", proficiency: 4 },
  ],
}: SkillCategoryProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-1">
              <span className="text-white group-hover:text-blue-300 transition-colors">
                {skill.name}
              </span>
              <span className="text-sm text-slate-400">
                {
                  [
                    "Beginner",
                    "Elementary",
                    "Intermediate",
                    "Advanced",
                    "Expert",
                  ][skill.proficiency - 1]
                }
              </span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(skill.proficiency / 5) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SkillsSectionProps {
  programmingLanguages?: {
    name: string;
    proficiency: number;
  }[];
  frameworks?: {
    name: string;
    proficiency: number;
  }[];
  tools?: {
    name: string;
    proficiency: number;
  }[];
  mathematicalSkills?: {
    name: string;
    proficiency: number;
  }[];
}

const SkillsSection = ({
  programmingLanguages = [
    { name: "JavaScript", proficiency: 4 },
    { name: "TypeScript", proficiency: 3 },
    { name: "Python", proficiency: 4 },
    { name: "Java", proficiency: 3 },
    { name: "C++", proficiency: 2 },
  ],
  frameworks = [
    { name: "React", proficiency: 4 },
    { name: "Next.js", proficiency: 3 },
    { name: "Node.js", proficiency: 3 },
    { name: "Express", proficiency: 3 },
    { name: "Tailwind CSS", proficiency: 4 },
  ],
  tools = [
    { name: "Git", proficiency: 4 },
    { name: "Docker", proficiency: 2 },
    { name: "AWS", proficiency: 2 },
    { name: "VS Code", proficiency: 5 },
    { name: "Figma", proficiency: 3 },
  ],
  mathematicalSkills = [
    { name: "Calculus", proficiency: 5 },
    { name: "Linear Algebra", proficiency: 4 },
    { name: "Discrete Mathematics", proficiency: 4 },
    { name: "Statistics", proficiency: 3 },
    { name: "Numerical Analysis", proficiency: 3 },
  ],
}: SkillsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-slate-900 text-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400"
          >
            Skills &amp; Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <SkillCategory
                title="Programming Languages"
                skills={programmingLanguages}
              />
              <SkillCategory title="Frameworks" skills={frameworks} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SkillCategory title="Tools" skills={tools} />
              <SkillCategory
                title="Mathematical Skills"
                skills={mathematicalSkills}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
