import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { CalendarDays, Building2, Briefcase } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const ExperienceItem = ({
  title = "Software Developer",
  company = "Tech Company",
  location = "Waterloo, ON",
  period = "May 2023 - Aug 2023",
  description = [
    "Developed and maintained web applications using React and TypeScript",
    "Collaborated with cross-functional teams to implement new features",
    "Improved application performance by optimizing database queries",
  ],
  skills = ["React", "TypeScript", "Node.js"],
}: ExperienceItemProps) => {
  return (
    <Card className="w-full mb-8 bg-slate-900 border-slate-800 text-white relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-blue-400">
              {title}
            </CardTitle>
            <div className="flex items-center mt-1 text-slate-300">
              <Building2 size={16} className="mr-1" />
              <span className="font-medium">{company}</span>
              <span className="mx-2">•</span>
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center text-slate-400">
            <CalendarDays size={16} className="mr-1" />
            <span>{period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 text-slate-300 space-y-1 mb-4">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-blue-900/30 text-blue-300 border-blue-800 hover:bg-blue-800/50"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ExperienceSection = () => {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Software Engineering Intern",
      company: "Tech Innovations Inc.",
      location: "Waterloo, ON",
      period: "May 2023 - Aug 2023",
      description: [
        "Developed full-stack features for a customer-facing web application using React and Node.js",
        "Implemented responsive UI components that improved user engagement by 15%",
        "Collaborated with senior developers to optimize database queries, reducing load times by 30%",
      ],
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Research Assistant",
      company: "University of Waterloo",
      location: "Waterloo, ON",
      period: "Sep 2022 - Apr 2023",
      description: [
        "Assisted in developing algorithms for data analysis in mathematical modeling projects",
        "Implemented statistical models using Python and R to analyze large datasets",
        "Co-authored a research paper on computational methods in applied mathematics",
      ],
      skills: [
        "Python",
        "R",
        "Statistical Analysis",
        "Mathematical Modeling",
        "LaTeX",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "University of Waterloo",
      location: "Waterloo, ON",
      period: "Jan 2022 - Apr 2022",
      description: [
        "Conducted tutorial sessions for undergraduate Calculus and Linear Algebra courses",
        "Provided one-on-one assistance to students during office hours",
        "Graded assignments and exams for a class of 120 students",
      ],
      skills: ["Mathematics", "Teaching", "Problem Solving", "Communication"],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <Briefcase className="text-blue-500 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <Separator className="flex-grow ml-6 bg-slate-800" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-slate-800 hidden md:block"></div>

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <ExperienceItem {...experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
