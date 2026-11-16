export interface ExperienceRole {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tech: string[];
}

export const experienceRoles: ExperienceRole[] = [
  {
    company: "Nirrov",
    title: "Frontend Developer",
    location: "KSA · Remote",
    period: "Dec 2023 – Present",
    current: true,
    highlights: [
      "Build enterprise frontends with React, Vue.js and TypeScript for ERP and digital-services platforms (ASAPI ERP, Safeer Digital).",
      "Designed reusable component and CRUD systems using Factory, HOC and Compound Component patterns, improving reuse and reducing technical debt.",
      "Integrated REST APIs with TanStack Query — caching, error/loading states and permissions.",
      "Introduced AI-assisted workflows that reduced time spent on repetitive tasks.",
    ],
    tech: ["React", "Vue 3", "TypeScript", "TanStack Query", "Laravel"],
  },
  {
    company: "Freelance",
    title: "Frontend Developer",
    location: "Remote",
    period: "Oct 2023 – Mar 2024",
    highlights: [
      "Voucher Buyer — multilingual gift-card resale platform with payment flows.",
      "Iqraa Dashboard — currency-exchange monitoring platform connected to mobile apps.",
      "Paradise Road — high-performance responsive website for a Saudi client.",
      "Delivered a Dental Clinic Management System and other e-commerce / business apps.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Mind Torches",
    title: "Frontend Developer",
    location: "Jordan · Remote",
    period: "Apr 2022 – Oct 2023",
    highlights: [
      "Migrated JetOrder, a large store-management app, from Nuxt 2 to Vue 3.",
      "Introduced TypeScript across the codebase, improving type safety and maintainability.",
      "Refactored legacy frontend patterns, reducing code complexity by 30%.",
    ],
    tech: ["Vue 3", "Nuxt", "TypeScript"],
  },
  {
    company: "ELKOOD",
    title: "Frontend Developer",
    location: "Syria · On-site",
    period: "Jan 2021 – Aug 2023",
    highlights: [
      "Built CRM, e-commerce and educational platforms with Vue.js and Nuxt.js.",
      "Improved structure and maintainability of 10+ applications through TypeScript and domain-driven design.",
      "Integrated .NET APIs with SignalR for real-time notifications.",
    ],
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "SignalR"],
  },
];

export const education = {
  degree: "B.Sc. in Information Engineering",
  school: "University of Aleppo",
  location: "Aleppo, Syria",
  period: "Nov 2024",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional" },
];

export const aboutText = [
  "I'm a Full-Stack Engineer with 5+ years of experience designing, developing and modernizing SaaS platforms, ERP systems and business-critical web applications.",
  "My specialty is scalable frontend architecture — reusable component systems and complex, data-driven interfaces — backed by hands-on work on APIs, backend services and workflow automation.",
  "I have a track record of modernizing legacy codebases and setting development patterns that make teams faster and products more consistent across business domains.",
  "I use AI-assisted, agentic engineering workflows to move faster and raise code quality — delivering modular, reliable software that keeps evolving with the business.",
];

export const aboutFacts = [
  { label: "Based in", value: "Syria · Remote worldwide" },
  { label: "Focus", value: "SaaS · ERP · AI platforms" },
  { label: "Education", value: "B.Sc. Information Engineering" },
  { label: "Languages", value: "Arabic (Native) · English (Professional)" },
];
