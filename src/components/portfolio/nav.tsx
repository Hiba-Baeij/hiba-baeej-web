"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, Briefcase, Cpu, Clock, User, Mail, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/constants/portfolio";

const navItems = [
  { title: "Home", icon: <Home className="h-4 w-4" />, href: "/" },
  { title: "Work", icon: <Briefcase className="h-4 w-4" />, href: "/#work" },
  { title: "Expertise", icon: <Cpu className="h-4 w-4" />, href: "/#expertise" },
  { title: "Experience", icon: <Clock className="h-4 w-4" />, href: "/#experience" },
  { title: "About", icon: <User className="h-4 w-4" />, href: "/#about" },
  { title: "Contact", icon: <Mail className="h-4 w-4" />, href: "/#contact" },
  { title: "GitHub", icon: <Github className="h-4 w-4" />, href: siteConfig.githubUrl },
  { title: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, href: siteConfig.linkedinUrl },
];

export const PortfolioNav = () => {
  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <FloatingDock
        items={navItems}
        desktopClassName="mx-auto"
        mobileClassName="fixed bottom-6 right-6"
      />
    </div>
  );
};

export default PortfolioNav;