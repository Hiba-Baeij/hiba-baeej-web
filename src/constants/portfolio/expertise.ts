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
      "Accounting, invoicing, inventory, HR and reports for many companies on one system, each with its own data and roles. Includes ZATCA e-invoicing for Saudi businesses.",
    keywords: ["ERP", "Accounting", "ZATCA", "RBAC", "Multi-tenant"],
    emphasis: true,
  },
  {
    title: "SaaS Products",
    description:
      "Subscription products where each customer gets its own subdomain, with plan limits, payments in more than one currency and an admin portal to run it all.",
    keywords: ["SaaS", "Subdomains", "Payments", "Admin Portals"],
  },
  {
    title: "AI-Powered Applications",
    description:
      "Assistants that answer from your own documents and show where each answer came from, and MCP servers that give AI agents scoped access to your product.",
    keywords: ["RAG", "MCP", "LLMs", "AI Agents"],
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "React or Vue on the front, NestJS or Laravel behind it, PostgreSQL for the data, plus real-time updates, CI/CD and deployment.",
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
    description: "Answers questions from company documents in Arabic and English. Every answer cites its source, and if the answer isn't in the documents, it says so.",
  },
  {
    title: "e-Dukan MCP Server",
    description: "Generated from the store's OpenAPI spec and secured with OAuth 2.1 and scoped, hashed keys, so an AI agent can manage a store without full access.",
  },
  {
    title: "AI in the team workflow",
    description: "At Nirrov I set up AI-assisted workflows for repetitive work like refactoring, debugging and code review.",
  },
];

export const howIWorkSteps = [
  {
    title: "Understand the problem",
    description:
      "Who uses the system, what they do all day and what's broken now. I write it down first so we agree on the scope.",
  },
  {
    title: "Plan the structure",
    description:
      "Split the work into modules (UI, state, API layer, business rules) so new features don't mean rewriting old ones.",
  },
  {
    title: "Build the shared pieces first",
    description:
      "Tables, forms, CRUD views and API services are built once and reused, not copied into every screen.",
  },
  {
    title: "Connect and test",
    description:
      "Wire up the APIs with caching, loading and error states, permissions and validation, then write tests for the cases that usually break.",
  },
  {
    title: "Make it fast",
    description:
      "Virtualized tables for large data, fetching only what each screen needs and keeping the bundle small.",
  },
  {
    title: "Automate the boring parts",
    description:
      "CI/CD and coding agents take the repetitive work. Architecture decisions and code review stay with me.",
  },
];
