import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({
  href = "#",
  icon,
  label = "Social Link",
}: SocialLinkProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-blue-400 hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            {icon}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface FooterProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

const Footer = ({
  email = "student@uwaterloo.ca",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
}: FooterProps) => {
  return (
    <footer className="w-full py-12 px-4 md:px-8 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Let's Connect
            </h3>
            <p className="text-slate-400 max-w-md">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-4">
              <SocialLink
                href={githubUrl}
                icon={<Github size={20} />}
                label="GitHub Profile"
              />
              <SocialLink
                href={linkedinUrl}
                icon={<Linkedin size={20} />}
                label="LinkedIn Profile"
              />
              <SocialLink
                href={`mailto:${email}`}
                icon={<Mail size={20} />}
                label="Email Me"
              />
            </div>

            <Button
              variant="outline"
              className="mt-4 border-blue-500 text-blue-400 hover:bg-blue-900/30 hover:text-white group transition-all duration-300"
              onClick={() => (window.location.href = `mailto:${email}`)}
            >
              <Mail size={16} className="mr-2 group-hover:animate-pulse" />
              {email}
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} | Designed & Built with 💙</p>
          <p className="mt-1">University of Waterloo Mathematics Student</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
