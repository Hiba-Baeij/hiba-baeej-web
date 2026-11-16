export interface CapabilityCard {
  title: string;
  description: string;
  keywords: string[];
  emphasis?: boolean;
}

export const whatIBuild: CapabilityCard[] = [
  {
    title: "Enterprise & ERP Platforms",
    description:
      "Multi-tenant ERP and operations systems with accounting, invoicing, inventory, HR, RBAC and real-time reporting — including ZATCA e-invoicing for Saudi businesses.",
    keywords: ["ERP", "Accounting", "ZATCA", "RBAC", "Multi-tenant"],
    emphasis: true,
  },
  {
    title: "SaaS Products",
    description:
      "Subscription products with tenant isolation, plan limits, payments, multi-currency and admin portals — built to launch fast and scale cleanly.",
    keywords: ["SaaS", "Subdomains", "Payments", "Admin Portals"],
  },
  {
    title: "AI-Powered Applications",
    description:
      "RAG assistants with cited answers, MCP servers that let AI agents act safely on your product, and LLM features that don't hallucinate.",
    keywords: ["RAG", "MCP", "LLMs", "AI Agents"],
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end delivery: typed React/Vue frontends, NestJS or Laravel APIs, PostgreSQL, real-time features, CI/CD and deployment.",
    keywords: ["Next.js", "NestJS", "Laravel", "PostgreSQL", "WebSockets"],
    emphasis: true,
  },
];

export interface ExpertiseGroup {
  title: string;
  skills: string[];
}

export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Frontend & UI",
    skills: ["TypeScript", "React", "Next.js", "Vue 3", "Angular", "Tailwind CSS", "Shadcn", "MUI", "Vuetify"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "NestJS", "Laravel", "PostgreSQL", "Prisma", "TanStack Query", "REST APIs", "WebSockets"],
  },
  {
    title: "Tooling & DevOps",
    skills: ["Git", "Docker", "CI/CD", "Vercel", "Vite", "Vitest", "Playwright", "Performance"],
  },
  {
    title: "AI & Agentic Workflows",
    skills: ["Agentic Engineering (TDD/SDD)", "Multi-Agent Architectures", "MCP Integration", "RAG", "LLM Adapters"],
  },
  {
    title: "Architecture & Patterns",
    skills: ["Design Systems", "Factory / HOC / Compound", "Generic CRUD", "RBAC", "i18n & RTL", "Monorepos"],
  },
];

export const aiCapabilities = [
  "Agentic Engineering (TDD / SDD)",
  "Multi-Agent Architectures",
  "MCP Servers & Integration",
  "RAG Pipelines",
  "Hybrid Vector + Full-text Search",
  "Provider-agnostic LLM Layers",
  "Grounded, Cited Answers",
  "AI-assisted Refactoring & Review",
];

export const aiWorkflowSteps = [
  { title: "Spec", description: "Requirements become a written spec (SDD)" },
  { title: "Tests first", description: "Behaviour pinned down with tests (TDD)" },
  { title: "Agents build", description: "AI agents implement with full context" },
  { title: "Review", description: "Human review of architecture & security" },
  { title: "Ship", description: "CI/CD, monitoring, iterate" },
];

export const aiHighlights = [
  {
    title: "SmartDocs AI",
    description: "RAG over company documents in Arabic & English — every answer cites its source, or it says it doesn't know.",
  },
  {
    title: "e-Dukan MCP Server",
    description: "Generated from OpenAPI, secured by OAuth 2.1 and scoped hashed keys, so AI agents can run a store safely.",
  },
  {
    title: "AI in the team workflow",
    description: "Introduced AI-assisted workflows at Nirrov that cut time spent on repetitive engineering tasks.",
  },
];

export const howIWorkSteps = [
  {
    title: "Understand the Problem",
    description:
      "Start from the business: users, workflows, constraints and what success looks like — before writing a single component.",
  },
  {
    title: "Design the Architecture",
    description:
      "Split the system into clear modules — UI, state, typed API layer, business logic and data — so it can grow without rewrites.",
  },
  {
    title: "Build Reusable Systems",
    description:
      "Generic CRUD views, shared component libraries and typed service templates instead of solving the same problem twice.",
  },
  {
    title: "Integrate & Validate",
    description:
      "Wire APIs with caching, loading/error states, permissions and validation. Cover the edge cases with tests.",
  },
  {
    title: "Optimize",
    description:
      "Virtualized tables, smart data fetching, rendering strategy and bundle size. Performance is part of the feature.",
  },
  {
    title: "Automate",
    description:
      "AI agents and CI/CD remove repetitive work, while architecture and quality stay under engineering control.",
  },
];
