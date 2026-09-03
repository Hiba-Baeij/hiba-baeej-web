export interface CapabilityCard {
  title: string;
  description: string;
  keywords: string[];
  emphasis?: boolean;
}

export const whatIBuild: CapabilityCard[] = [
  {
    title: "Enterprise Platforms",
    description:
      "Complex business applications supporting operational workflows, large datasets, permissions, reporting, and multiple business domains.",
    keywords: ["ERP", "CRM", "Finance", "HR", "Operations"],
  },
  {
    title: "SaaS Products",
    description:
      "Scalable web applications with reusable architecture, authentication, APIs, dashboards, and modern user experiences.",
    keywords: ["SaaS", "Multi-Tenant", "Admin Portals"],
  },
  {
    title: "AI-Powered Applications",
    description:
      "Applications enhanced with AI agents, intelligent workflows, automation, and LLM-powered capabilities.",
    keywords: ["AI Agents", "LLMs", "Automation", "Agentic Workflows"],
    emphasis: true,
  },
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end applications covering frontend interfaces, APIs, databases, authentication, and deployment.",
    keywords: ["Next.js", "Node.js", "NestJS", "PostgreSQL", "Prisma"],
  },
];

export interface ExpertiseGroup {
  title: string;
  skills: string[];
}

export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Frontend Engineering",
    skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "MUI", "Vuetify"],
  },
  {
    title: "Full-Stack Development",
    skills: ["Next.js", "Node.js", "NestJS", "REST APIs", "PostgreSQL", "Prisma", "Authentication", "Authorization"],
  },
  {
    title: "State & Data Management",
    skills: ["TanStack Query", "React Query", "Zustand", "Redux", "Pinia", "Caching", "Optimistic Updates"],
  },
  {
    title: "Architecture",
    skills: ["Modular Architecture", "Component Systems", "API-driven Architecture", "Design Patterns", "Scalable Frontend Architecture", "Performance Optimization"],
  },
  {
    title: "DevOps & Engineering Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "CI/CD", "Nginx", "PM2", "Vercel", "Coolify"],
  },
];

export const aiCapabilities = [
  "AI Coding Agents",
  "Agentic Development Workflows",
  "LLM Integration",
  "Prompt & Context Engineering",
  "AI-assisted Debugging",
  "AI-assisted Refactoring",
  "Code Review Automation",
  "Development Automation",
];

export const aiWorkflowSteps = [
  "Requirement",
  "AI Agent",
  "Context",
  "Implementation",
  "Tests / Review",
  "Human Engineering Decision",
];

export const howIWorkSteps = [
  {
    title: "Understand the Problem",
    description:
      "Start from business requirements. Understand users, workflows, constraints, and expected behavior before writing components.",
  },
  {
    title: "Design the Architecture",
    description:
      "Break complex requirements into maintainable modules with clear boundaries between UI, state, APIs, business logic, and data.",
  },
  {
    title: "Build Reusable Systems",
    description:
      "Create reusable components, patterns, utilities, and abstractions instead of repeatedly solving the same problem.",
  },
  {
    title: "Integrate & Validate",
    description:
      "Connect frontend with APIs and backend services while handling loading states, errors, caching, permissions, validation, and edge cases.",
  },
  {
    title: "Optimize",
    description:
      "Consider rendering strategy, data fetching, caching, bundle size, component architecture, and user experience. Performance is part of engineering.",
  },
  {
    title: "Automate",
    description:
      "Use AI and automation to eliminate repetitive engineering work while maintaining quality and architectural control.",
  },
];