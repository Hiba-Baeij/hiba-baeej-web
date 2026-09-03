export interface ExperienceRole {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experienceRoles: ExperienceRole[] = [
  {
    company: "Nirrov",
    title: "Frontend Developer",
    location: "KSA · Remote",
    period: "October 2023 – Present",
    highlights: [
      "Enterprise ERP systems (ASAPI ERP, Matrix ERP) and the Safeer Digital embassy platform.",
      "React and Vue applications with TypeScript.",
      "Complex data-driven interfaces and reusable component architecture.",
      "AI-assisted and agentic development workflows.",
    ],
  },
  {
    company: "Mind Torches",
    title: "Frontend Developer",
    location: "Jordan · Remote",
    period: "April 2022 – October 2023",
    highlights: [
      "JetOrder, a large-scale store management platform.",
      "Nuxt 2 → Vue 3 migration and TypeScript introduction.",
      "Large-scale frontend modernization.",
    ],
  },
  {
    company: "Freelance",
    title: "Frontend Developer",
    location: "Remote",
    period: "September 2023 – October 2024",
    highlights: [
      "Voucher Buyer, Paradise Road, and Iqraa Dashboard.",
      "Dental Clinic Management System.",
      "E-commerce and business applications with React, Next.js, Vue, TypeScript, and Tailwind CSS.",
    ],
  },
  {
    company: "ELKOOD",
    title: "Frontend Developer",
    location: "Syria · On-site",
    period: "January 2021 – August 2023",
    highlights: [
      "CRM, e-commerce, and educational platforms built with Vue.js and Nuxt.js.",
      "SSR and SEO work.",
      "Modular component systems and REST API integrations.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Information Engineering",
  school: "University of Aleppo",
  location: "Aleppo, Syria",
  period: "Graduated November 2024",
};

export const softSkills = [
  "Technical Leadership",
  "Team Collaboration",
  "Mentorship",
  "Problem Solving",
  "Product Thinking",
  "Architecture & Decision Making",
  "Communication",
  "Attention to Detail",
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional" },
];

export const aboutText = [
  "I'm an engineer who enjoys working on problems that are more complicated than they initially appear.",
  "My experience has primarily focused on business applications, enterprise platforms, ERP systems, dashboards, and SaaS products.",
  "I care about more than making an interface look good. I'm interested in how the entire system works: how data moves through the application, how components communicate, how APIs are designed, how architecture evolves, and how engineering teams can deliver faster without creating technical debt.",
  "I'm particularly interested in the intersection between modern web development and AI-assisted engineering, where intelligent tools can automate repetitive work and allow engineers to spend more time solving meaningful problems.",
];