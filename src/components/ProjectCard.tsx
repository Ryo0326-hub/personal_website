import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name = "React" }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mr-2 mb-2">
      {name}
    </span>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing key features and technologies used in development.",
  techStack = ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  githubUrl = "https://github.com",
  demoUrl = "https://example.com",
  imageUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=450&q=80",
}: ProjectCardProps) => {
  return (
    <Card className="w-[350px] h-[500px] overflow-hidden flex flex-col bg-slate-900 border-slate-800 text-white hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-blue-400">
          {title}
        </CardTitle>
        <CardDescription className="text-slate-400">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap mt-2">
          {techStack.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-4 border-t border-slate-800">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <Github size={16} />
          Code
        </Button>
        <Button
          variant="default"
          size="sm"
          className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => window.open(demoUrl, "_blank")}
        >
          <ExternalLink size={16} />
          Live Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
