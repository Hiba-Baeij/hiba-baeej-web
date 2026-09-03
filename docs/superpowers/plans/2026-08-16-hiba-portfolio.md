# Hiba Baeij Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Avento AgencyOS landing page at `/` with a premium multi-page portfolio for Hiba Baeij (Senior Frontend & Full-Stack Engineer), adding `/work` and `/work/[slug]` case-study routes, per the approved design spec.

**Architecture:** The existing `(marketing)` route group becomes the portfolio. All copy/data lives in typed TS modules under `src/constants/portfolio/`. Homepage and case-study pages render from those modules. Aceternity UI components (installed via the shadcn CLI) provide the visual effects. The `/dashboard` route, app shell, providers, and theme tokens are preserved. Unused Avento marketing components are deleted.

**Tech Stack:** Next.js 16 (App Router, Server Components), TypeScript, Tailwind CSS v4, shadcn/ui, Aceternity UI (via `shadcn` CLI), Motion (Framer Motion), lucide-react, @tabler/icons-react.

## Global Constraints

- **Build check:** `pnpm build` must pass after every task. There is no lint or test script; the build (TypeScript + Next) is the gate.
- **Package manager:** pnpm. The shadcn CLI is installed globally (`shadcn` on PATH). Network to npm registry is slow/flaky — use `pnpm` with retries for package installs, and prefer cached/global installs.
- **Aceternity install command:** `shadcn add @aceternity/<component> --yes` run from the repo root. The CLI rewrites `@/lib/utils` imports to `@/utils/index` automatically based on `components.json`.
- **No invented content:** never add metrics, stats, logos, screenshots, GitHub repos, or claims not present in the source spec files (`hiba-portfolio-content.md`, `hiba-portfolio-design.md`). Metrics are limited to `5+ Years Engineering`, `3+ Enterprise Platforms`, `10+ Products & Applications`, `Multiple Business Domains`.
- **Placeholder links:** GitHub/LinkedIn/email are clearly-marked placeholders in `src/constants/portfolio/site.ts` (e.g. `https://github.com/hiba-baeij`, `mailto:hello@example.com`) with a `// TODO: replace with real profile links` comment.
- **Positioning rules:** Do NOT position Hiba as ML engineer / AI researcher / ML specialist. Position as "AI-Assisted & Agentic Software Engineering". No skill bars ("React 95%"). No fake activity.
- **Performance:** no `three`/`@react-three/fiber`. If an Aceternity component depends on it (e.g. `card-spotlight` → `canvas-reveal-effect`), strip the dependency by editing the component rather than installing three.js.
- **Route group:** all new pages go in `src/app/(marketing)/`. Keep `src/app/dashboard/` working.
- **Component names:** Aceternity exports are referenced exactly as in the registry (verified): `Spotlight` (spotlight-new), `BackgroundBeams`, `TextGenerateEffect`, `Button` + `MovingBorder` (moving-border), `BentoGrid` + `BentoGridItem`, `HoverEffect` + `Card` + `CardTitle` + `CardDescription` (card-hover-effect), `CardContainer` + `CardBody` + `CardItem` (3d-card), `CardSpotlight` (card-spotlight, edit to remove three dep), `Timeline` (timeline), `TracingBeam`, `FloatingDock`, `AnimatedTooltip` (existing in `src/components/ui/`).

---

### Task 1: Install Aceternity UI components

**Files:**
- Modify: `package.json` (deps auto-added by CLI)
- Create: `src/components/ui/spotlight-new.tsx`, `background-beams.tsx`, `text-generate-effect.tsx`, `moving-border.tsx`, `bento-grid.tsx`, `card-hover-effect.tsx`, `3d-card.tsx`, `card-spotlight.tsx`, `timeline.tsx`, `tracing-beam.tsx`, `floating-dock.tsx`

**Interfaces:**
- Consumes: existing `components.json` (aliases `@/components`, `@/utils`, `@/components/ui`).
- Produces: the Aceternity component exports used by later tasks (see Global Constraints for exact export names and props).

- [ ] **Step 1: Install the components**

Run (each may take 1-3 min due to slow network; if a command fails with a network error, retry it):

```bash
shadcn add @aceternity/spotlight-new --yes
shadcn add @aceternity/background-beams --yes
shadcn add @aceternity/text-generate-effect --yes
shadcn add @aceternity/moving-border --yes
shadcn add @aceternity/bento-grid --yes
shadcn add @aceternity/card-hover-effect --yes
shadcn add @aceternity/3d-card --yes
shadcn add @aceternity/timeline --yes
shadcn add @aceternity/tracing-beam --yes
shadcn add @aceternity/floating-dock --yes
```

Do NOT run `@aceternity/card-spotlight` via the CLI yet — its registry dependency `canvas-reveal-effect` pulls in `three`. Instead create it manually in Task 8.

Note on CSS: `components.json` points `css` at `src/app/globals.css` (which does not exist; the real styles are at `src/styles/globals.css`). The CLI does NOT require the css file to exist and will not modify it. All the components installed above are Motion-based and need no extra CSS keyframes (the old `spotlight` component would need `--animate-spotlight`, but `spotlight-new` does not). No changes to `globals.css` are needed for the install.

- [ ] **Step 2: Ensure @tabler/icons-react is installed**

`floating-dock` imports `IconLayoutNavbarCollapse` from `@tabler/icons-react`, and `bento-grid` uses it in examples. Verify it's in `package.json` dependencies (the CLI should have added it):

```bash
pnpm add @tabler/icons-react
```

- [ ] **Step 3: Verify components installed**

```bash
Get-ChildItem src/components/ui | Select-Object Name
```

Expected: `spotlight-new.tsx`, `background-beams.tsx`, `text-generate-effect.tsx`, `moving-border.tsx`, `bento-grid.tsx`, `card-hover-effect.tsx`, `3d-card.tsx`, `timeline.tsx`, `tracing-beam.tsx`, `floating-dock.tsx` all exist.

- [ ] **Step 4: Build check**

```bash
pnpm build
```

Expected: build succeeds (the installed components compile; they import `cn` from `@/utils/index`).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: install Aceternity UI components"
```

---

### Task 2: Create portfolio content modules

**Files:**
- Create: `src/constants/portfolio/site.ts`
- Create: `src/constants/portfolio/projects.ts`
- Create: `src/constants/portfolio/experience.ts`
- Create: `src/constants/portfolio/expertise.ts`
- Create: `src/constants/portfolio/repos.ts`
- Create: `src/constants/portfolio/index.ts`

**Interfaces:**
- Consumes: nothing external.
- Produces: `siteConfig`, `metrics`, `projects`, `selectedProducts`, `getProjectBySlug`, `experienceRoles`, `education`, `softSkills`, `languages`, `whatIBuild`, `expertiseGroups`, `aiCapabilities`, `howIWorkSteps`, `repos` — all typed, used by every later task.

- [ ] **Step 1: Write `src/constants/portfolio/site.ts`**

```ts
export const siteConfig = {
  name: "Hiba Baeij",
  role: "Senior Frontend & Full-Stack Engineer",
  headline: "I build software that scales beyond the first version.",
  supporting:
    "Building scalable enterprise platforms, SaaS products, and AI-powered applications with modern TypeScript architecture.",
  techLine: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "AI Agents"],
  description:
    "Senior Frontend & Full-Stack Engineer building scalable enterprise platforms, SaaS products, and AI-powered applications with React, Next.js, TypeScript, and Node.js.",
  // TODO: replace with real profile links
  githubUrl: "https://github.com/hiba-baeij",
  linkedinUrl: "https://linkedin.com/in/hiba-baeij",
  email: "mailto:hello@example.com",
  contactText:
    "I'm interested in working with ambitious teams building SaaS products, enterprise platforms, AI-powered applications, and technically challenging products.",
} as const;

export const metrics = [
  { value: "5+", label: "Years Engineering" },
  { value: "3+", label: "Enterprise Platforms" },
  { value: "10+", label: "Products & Applications" },
  { value: "Multiple", label: "Business Domains" },
] as const;
```

- [ ] **Step 2: Write `src/constants/portfolio/projects.ts`**

```ts
export interface ProjectVisual {
  kind: "erp" | "embassy" | "store" | "saas" | "dashboard" | "website";
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  role: string;
  period: string;
  contribution: string[];
  tech: string[];
  visual: ProjectVisual;
  caseStudy: {
    overview: string;
    businessProblem: string;
    myRole: string;
    technicalChallenges: string[];
    keyDecisions: string[];
    result: string;
  };
}

export interface SelectedProduct {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  visual: ProjectVisual;
}

export const projects: Project[] = [
  {
    slug: "asapi-erp",
    title: "ASAPI ERP",
    category: "Enterprise Resource Planning Platform",
    description:
      "A flexible ERP platform connecting an organization's operations within a unified system, providing dashboards and reports for better business decisions.",
    highlight: "Building complex business workflows into a consistent, reusable enterprise interface.",
    role: "Frontend Engineer",
    period: "Nirrov",
    contribution: [
      "Developed complex enterprise interfaces across multiple business domains.",
      "Built reusable and modular UI architecture.",
      "Implemented dynamic tables, filtering, grouping, sorting, and data-driven workflows.",
      "Developed dashboards for operational and management use cases.",
      "Worked with API-driven architecture and scalable frontend patterns.",
      "Focused on maintainability and consistency across a large application.",
    ],
    tech: ["React", "TypeScript", "MUI", "React Query", "REST APIs"],
    visual: { kind: "erp" },
    caseStudy: {
      overview:
        "ASAPI ERP is a flexible ERP platform designed to connect an organization's operations within a unified system, providing dashboards, reports, and operational tools for better business decisions.",
      businessProblem:
        "Organizations operate across fragmented modules — inventory, HR, finance, sales, purchasing, and accounting — with no unified interface, making operations and reporting slow and inconsistent.",
      myRole:
        "Senior frontend engineer on a large enterprise team, responsible for complex business interfaces across multiple domains and the reusable UI architecture they run on.",
      technicalChallenges: [
        "Large datasets rendered as dynamic tables with filtering, grouping, and sorting.",
        "Many business domains sharing a single consistent component system.",
        "API-driven architecture with frequent data mutations and cache invalidation.",
        "Maintaining visual and behavioral consistency across a very large application.",
      ],
      keyDecisions: [
        "Built reusable table and CRUD primitives instead of per-domain screens.",
        "Centralized server state handling with React Query for caching and optimistic workflows.",
        "Enforced a modular component architecture to keep the growing codebase maintainable.",
      ],
      result:
        "A unified enterprise platform where complex business workflows ship consistently, and new domains are added on top of reusable systems rather than duplicated code.",
    },
  },
  {
    slug: "safeer-digital",
    title: "Safeer Digital",
    category: "Embassy Digital Platform",
    description:
      "A specialized digital platform for embassies and diplomatic missions, delivering digital services, improving beneficiary experience, and automating administrative workflows.",
    highlight: "Designing complex service workflows and hierarchical interfaces for diplomatic digital services.",
    role: "Frontend Engineer",
    period: "Nirrov",
    contribution: [
      "Developed complex service interfaces using Vue.js and TypeScript.",
      "Built recursive components for hierarchical and tree-based workflows.",
      "Created reusable UI components using Vuetify.",
      "Implemented dynamic forms and service workflows.",
      "Worked on complex administrative interfaces and data-driven processes.",
      "Improved maintainability through modular component architecture.",
    ],
    tech: ["Vue.js", "TypeScript", "Nuxt.js", "Vuetify", "REST APIs"],
    visual: { kind: "embassy" },
    caseStudy: {
      overview:
        "Safeer Digital is a specialized digital platform designed for embassies and diplomatic missions, enabling digital services, improved beneficiary experience, and automated administrative workflows.",
      businessProblem:
        "Diplomatic missions needed to digitize complex, multi-step services while keeping beneficiary experience simple and administrative workflows reliable.",
      myRole:
        "Frontend engineer on the platform team, building the service interfaces and the reusable components behind them.",
      technicalChallenges: [
        "Hierarchical, tree-based workflows that required recursive component composition.",
        "Dynamic forms that adapt to service type and context.",
        "Complex administrative interfaces handling real-time data.",
        "Maintainability across a modular Vue/Vuetify codebase.",
      ],
      keyDecisions: [
        "Used recursive components to model deep, variable-depth workflows.",
        "Standardized forms and service workflows as reusable, data-driven components.",
        "Kept components modular so new services compose from existing pieces.",
      ],
      result:
        "A platform where embassies deliver digital services with a consistent beneficiary experience and significantly automated administrative work.",
    },
  },
  {
    slug: "matrix-erp",
    title: "Matrix ERP",
    category: "Enterprise ERP Platform",
    description:
      "A modern, scalable enterprise resource planning platform managing operational, financial, and administrative processes across multiple business domains.",
    highlight: "Building reusable systems across inventory, HR, finance, sales, purchasing, and accounting.",
    role: "Frontend Engineer",
    period: "Nirrov",
    contribution: [
      "Developed enterprise dashboards and business management interfaces.",
      "Worked across inventory, HR, finance, products, sales, purchasing, and accounting modules.",
      "Built reusable components and scalable frontend patterns.",
      "Implemented dynamic filtering, grouping, sorting, and data visualization.",
      "Worked with complex CRUD workflows and API-driven applications.",
      "Contributed to architecture decisions and frontend engineering standards.",
      "Focused on creating maintainable systems capable of evolving with business requirements.",
    ],
    tech: ["React", "TypeScript", "MUI", "React Query", "REST APIs"],
    visual: { kind: "erp" },
    caseStudy: {
      overview:
        "Matrix ERP is a modern, scalable enterprise resource planning platform designed to manage operational, financial, and administrative processes, supporting multiple business domains with room for customization and integration.",
      businessProblem:
        "Businesses needed one ERP that spans inventory, HR, finance, products, sales, purchasing, and accounting without forcing them into rigid per-module silos.",
      myRole:
        "Frontend engineer contributing across nearly every module, plus architecture decisions and frontend engineering standards.",
      technicalChallenges: [
        "Seven-plus business domains with overlapping but distinct data models.",
        "Dynamic tables with filtering, grouping, sorting, and visualization.",
        "Complex CRUD workflows on an API-driven backend.",
        "Keeping the system maintainable as requirements evolve.",
      ],
      keyDecisions: [
        "Standardized on reusable CRUD and data-visualization components shared across modules.",
        "Introduced frontend engineering standards to keep cross-module consistency.",
        "Chose API-driven architecture to decouple modules from each other.",
      ],
      result:
        "A scalable ERP where new business requirements land in existing reusable systems, and cross-module consistency is the default rather than the exception.",
    },
  },
  {
    slug: "jetorder",
    title: "JetOrder",
    category: "Store Management Platform",
    description:
      "A large-scale store management platform, modernized through a migration from Nuxt 2 to Vue 3 and TypeScript.",
    highlight: "Modernizing a large legacy frontend without losing business functionality.",
    role: "Frontend Developer",
    period: "Mind Torches",
    contribution: [
      "Migrated legacy application architecture to Vue 3.",
      "Introduced TypeScript across the application.",
      "Improved component modularity and maintainability.",
      "Refactored legacy patterns and improved frontend structure.",
      "Worked with complex business workflows and data-driven interfaces.",
    ],
    tech: ["Vue 3", "Nuxt.js", "TypeScript"],
    visual: { kind: "store" },
    caseStudy: {
      overview:
        "JetOrder is a large-scale store management platform where Hiba contributed to the migration from Nuxt 2 to Vue 3 and TypeScript.",
      businessProblem:
        "A large, long-lived store management platform was stuck on Nuxt 2 with legacy patterns, making it hard to maintain, type, and evolve safely.",
      myRole:
        "Frontend developer leading the modernization effort alongside the team.",
      technicalChallenges: [
        "Migrating a large codebase from Nuxt 2 to Vue 3 without breaking business functionality.",
        "Introducing TypeScript incrementally across the application.",
        "Refactoring legacy patterns while features stayed live.",
      ],
      keyDecisions: [
        "Treated the migration as a series of incremental, behavior-preserving refactors.",
        "Introduced TypeScript as a foundation for the new component structure.",
        "Increased component modularity to reduce coupling in the legacy code.",
      ],
      result:
        "A modernized, typed, and more maintainable store management platform, with business functionality preserved throughout the migration.",
    },
  },
];

export const selectedProducts: SelectedProduct[] = [
  {
    slug: "voucher-buyer",
    title: "Voucher Buyer",
    description: "A multilingual platform for selling unused gift cards and receiving cash.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    visual: { kind: "saas" },
  },
  {
    slug: "paradise-road",
    title: "Paradise Road",
    description: "A responsive website for a Saudi client focused on performance, responsive design, and user experience.",
    tech: ["Next.js", "Tailwind CSS"],
    visual: { kind: "website" },
  },
  {
    slug: "iqraa-dashboard",
    title: "Iqraa Dashboard",
    description: "A currency management platform connected to mobile applications for monitoring currency exchange and digital transfers.",
    tech: ["React", "Tailwind CSS", "REST APIs"],
    visual: { kind: "dashboard" },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
```

- [ ] **Step 3: Write `src/constants/portfolio/experience.ts`**

```ts
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
```

- [ ] **Step 4: Write `src/constants/portfolio/expertise.ts`**

```ts
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
```

- [ ] **Step 5: Write `src/constants/portfolio/repos.ts`**

```ts
// TODO: replace with real GitHub repositories once a real account exists.
// This section is intentionally static — no fake activity.
export const repos = [
  {
    name: "portfolio",
    description: "This portfolio. Built with Next.js, TypeScript, Tailwind, and Motion.",
    language: "TypeScript",
  },
  {
    name: "enterprise-ui-systems",
    description: "Patterns and components for large-scale enterprise frontend applications.",
    language: "TypeScript",
  },
  {
    name: "agentic-engineering",
    description: "Notes and workflows for AI-assisted and agentic software development.",
    language: "Markdown",
  },
];
```

- [ ] **Step 6: Write `src/constants/portfolio/index.ts`**

```ts
export * from "./site";
export * from "./projects";
export * from "./experience";
export * from "./expertise";
export * from "./repos";
```

- [ ] **Step 7: Build check**

```bash
pnpm build
```

Expected: build succeeds (these are pure TS modules, no runtime references yet).

- [ ] **Step 8: Commit**

```bash
git add src/constants/portfolio
git commit -m "feat: add portfolio content modules"
```

---

### Task 3: Update theme tokens and app metadata

**Files:**
- Modify: `src/styles/globals.css`
- Modify: `src/utils/metadata.ts`
- Modify: `src/constants/index.ts` (add portfolio export)

**Interfaces:**
- Consumes: nothing from portfolio tasks.
- Produces: tuned theme tokens (neutral/blue accent preserved), `generateMetadata` accepting a full site config, and `export * from "./portfolio"` from the constants barrel.

- [ ] **Step 1: Tune theme tokens in `src/styles/globals.css`**

The `.dark` block currently defines `--primary: #0055FF` and a neutral near-black background (`#010104`). Keep the near-black background; adjust the primary to a slightly refined blue for the portfolio. Replace these lines inside the `.dark` block:

```css
  --primary: #0055FF;
```

with:

```css
  --primary: #3b82f6;
```

Also add a subtle white/muted border override is NOT required — keep the rest of the tokens unchanged. Verify the file still compiles.

- [ ] **Step 2: Update `src/utils/metadata.ts`**

Replace the whole file so it derives defaults from the portfolio site config and adds Open Graph / Twitter / JSON-LD-friendly fields:

```ts
import { Metadata } from "next";
import { siteConfig } from "@/constants/portfolio";

export const generateMetadata = ({
  title = `${siteConfig.name} — ${siteConfig.role}`,
  description = siteConfig.description,
  image = "/images/og-image.png",
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/icons/icon.svg",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/icons/icon.svg",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  icons,
  openGraph: {
    title,
    description,
    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    siteName: siteConfig.name,
    images: image ? [image] : [],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: image ? [image] : [],
  },
  ...(noIndex && { robots: { index: false, follow: false } }),
});
```

Note: `src/app/layout.tsx` calls `generateMetadata()` with no args — that still works because defaults come from the portfolio config.

- [ ] **Step 3: Add portfolio export to `src/constants/index.ts`**

```ts
export * from './fonts';
export * from './links';
export * from './routes';
export * from './portfolio';
```

(Remove `export * from './membership'` and `export * from './testimonials'` — those files are deleted in Task 16. If the build fails because other files still import them, keep the exports until Task 16 removes the marketing components.)

- [ ] **Step 4: Build check**

```bash
pnpm build
```

Expected: build succeeds. If it fails because `membership`/`testimonials` are still imported by existing components, keep their exports for now (they're deleted in Task 20) and re-verify after Task 20.

- [ ] **Step 5: Commit**

```bash
git add src/styles/globals.css src/utils/metadata.ts src/constants/index.ts
git commit -m "feat: tune theme tokens and wire portfolio metadata"
```

---

### Task 4: Build the navigation and rebuild the marketing layout

**Files:**
- Create: `src/components/portfolio/nav.tsx`
- Modify: `src/app/(marketing)/layout.tsx`

**Interfaces:**
- Consumes: `siteConfig` (Task 2), `FloatingDock` (Task 1), lucide icons.
- Produces: a client `PortfolioNav` component rendering the `FloatingDock` (desktop bottom / mobile), and a rewritten marketing layout that renders `PortfolioNav` + children + a footer placeholder.

- [ ] **Step 1: Write `src/components/portfolio/nav.tsx`**

```tsx
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
```

Note: `FloatingDock` renders both a desktop variant (`hidden md:flex`, centered via the wrapper's flex + `desktopClassName="mx-auto"`) and a mobile variant (`block md:hidden`). The mobile variant uses `mobileClassName="fixed bottom-6 right-6"` so it anchors to the bottom-right corner on small screens, independent of the wrapper. The wrapper `fixed inset-x-0 bottom-6 z-50 flex justify-center` centers the desktop dock only.

- [ ] **Step 2: Rewrite `src/app/(marketing)/layout.tsx`**

```tsx
import PortfolioNav from "@/components/portfolio/nav";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full relative min-h-dvh">
      {children}
      <PortfolioNav />
    </main>
  );
};

export default MarketingLayout;
```

(Footer is added in Task 15. The old `Footer`/`Navbar` imports are removed here; those files are deleted in Task 20.)

- [ ] **Step 3: Build check**

```bash
pnpm build
```

Expected: build succeeds. `@/components/marketing/footer` and `@/components/marketing/navbar` may still exist but are no longer imported — that's fine.

- [ ] **Step 4: Commit**

```bash
git add src/components/portfolio/nav.tsx "src/app/(marketing)/layout.tsx"
git commit -m "feat: add floating dock navigation"
```

---

### Task 5: Hero section

**Files:**
- Create: `src/components/portfolio/hero.tsx`
- Create: `src/components/portfolio/visuals.tsx` (code-drawn project visuals, also used by Tasks 7, 9, 17)

**Interfaces:**
- Consumes: `siteConfig`, `metrics` (Task 2); `Spotlight`, `BackgroundBeams`, `TextGenerateEffect`, `Button`/`MovingBorder` (Task 1); `Button` from `@/components/ui/button`.
- Produces: `<Hero />` (server component importing client bits) and a `ProjectVisual` component mapping `ProjectVisual["kind"]` to an abstract engineering graphic.

- [ ] **Step 1: Write `src/components/portfolio/visuals.tsx`**

A server-compatible abstract visual per project kind. Uses SVG with animated (CSS `animate-pulse`) nodes and lines. Keep it lightweight — no canvas, no three.

```tsx
import { cn } from "@/utils";
import type { ProjectVisual as PV } from "@/constants/portfolio";

const palette = {
  line: "stroke-white/15",
  node: "fill-white/10",
  accent: "fill-[#3b82f6]/30",
  text: "fill-white/40",
};

export const ProjectVisual = ({ kind, className }: { kind: PV["kind"]; className?: string }) => {
  return (
    <div className={cn("relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]", className)}>
      <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
        {kind === "erp" && (
          <>
            <line x1="40" y1="125" x2="360" y2="125" className={palette.line} />
            <line x1="200" y1="30" x2="200" y2="125" className={palette.line} />
            <line x1="200" y1="125" x2="80" y2="220" className={palette.line} />
            <line x1="200" y1="125" x2="320" y2="220" className={palette.line} />
            <circle cx="200" cy="30" r="14" className={palette.accent} />
            <circle cx="40" cy="125" r="10" className={palette.node} />
            <circle cx="360" cy="125" r="10" className={palette.node} />
            <circle cx="80" cy="220" r="10" className={palette.node} />
            <circle cx="320" cy="220" r="10" className={palette.node} />
            <text x="200" y="18" textAnchor="middle" className={palette.text} fontSize="10">ERP</text>
          </>
        )}
        {kind === "embassy" && (
          <>
            <rect x="30" y="40" width="340" height="170" rx="12" className="fill-none stroke-white/15" />
            <rect x="50" y="60" width="300" height="130" rx="8" className={palette.node} />
            <path d="M50 110 h100 M50 150 h60 M180 110 h120 M180 150 h170" className={palette.line} />
            <circle cx="200" cy="60" r="10" className={palette.accent} />
            <text x="200" y="32" textAnchor="middle" className={palette.text} fontSize="10">EMBASSY SERVICES</text>
          </>
        )}
        {kind === "store" && (
          <>
            <line x1="60" y1="200" x2="60" y2="50" className={palette.line} />
            <line x1="60" y1="200" x2="340" y2="200" className={palette.line} />
            <path d="M60 200 L120 130 L180 160 L240 90 L300 120 L340 80" className="stroke-[#3b82f6]/50" fill="none" />
            <circle cx="120" cy="130" r="8" className={palette.accent} />
            <circle cx="180" cy="160" r="8" className={palette.node} />
            <circle cx="240" cy="90" r="8" className={palette.node} />
            <circle cx="300" cy="120" r="8" className={palette.node} />
            <text x="60" y="220" className={palette.text} fontSize="10">STORES</text>
            <text x="310" y="68" className={palette.text} fontSize="10">SALES</text>
          </>
        )}
        {kind === "saas" && (
          <>
            <rect x="40" y="50" width="150" height="150" rx="10" className={palette.node} />
            <rect x="210" y="50" width="150" height="150" rx="10" className="fill-none stroke-white/15" />
            <path d="M190 125 H210" className="stroke-[#3b82f6]/50" />
            <circle cx="285" cy="100" r="6" className={palette.node} />
            <circle cx="285" cy="140" r="6" className={palette.node} />
            <circle cx="285" cy="180" r="6" className={palette.node} />
            <text x="40" y="40" className={palette.text} fontSize="10">SAAS APP</text>
          </>
        )}
        {kind === "dashboard" && (
          <>
            <rect x="30" y="30" width="340" height="190" rx="10" className={palette.node} />
            <rect x="50" y="50" width="140" height="60" rx="6" className="fill-none stroke-white/15" />
            <rect x="50" y="130" width="140" height="70" rx="6" className="fill-none stroke-white/15" />
            <rect x="210" y="50" width="140" height="150" rx="6" className="fill-none stroke-white/15" />
            <path d="M60 190 h30 M110 190 h20 M60 180 h45" className="stroke-[#3b82f6]/50" />
            <circle cx="300" cy="90" r="30" className="fill-none stroke-white/15" />
            <path d="M300 120 A30 30 0 0 1 270 95" className="stroke-[#3b82f6]/60" fill="none" />
          </>
        )}
        {kind === "website" && (
          <>
            <rect x="40" y="40" width="320" height="180" rx="8" className={palette.node} />
            <rect x="40" y="40" width="320" height="24" rx="8" className="fill-white/5" />
            <circle cx="52" cy="52" r="4" className={palette.node} />
            <rect x="70" y="80" width="120" height="12" rx="3" className="fill-white/15" />
            <rect x="70" y="104" width="200" height="8" rx="3" className="fill-white/8" />
            <rect x="70" y="120" width="160" height="8" rx="3" className="fill-white/8" />
          </>
        )}
      </svg>
    </div>
  );
};
```

- [ ] **Step 2: Write `src/components/portfolio/hero.tsx`**

Server component composing the Aceternity effects. The `TextGenerateEffect`, `Spotlight`, and `BackgroundBeams` are client components — import and render them here (they keep their own `"use client"`).

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/constants/portfolio";
import { ProjectVisual } from "./visuals";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" id="home">
      <Spotlight />
      <BackgroundBeams />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-24 pb-16 md:px-8 md:pt-32 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">
            Senior Frontend &amp; Full-Stack Engineer
          </p>
          <TextGenerateEffect
            words={siteConfig.headline}
            className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl"
            duration={0.6}
          />
          <p className="mt-6 text-base text-white/60 md:text-lg">{siteConfig.supporting}</p>
          <p className="mt-4 text-sm text-white/40">{siteConfig.techLine.join(" · ")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <MovingBorderButton
              as="a"
              href="/#work"
              borderRadius="1.75rem"
              containerClassName="h-12 w-auto"
              className="px-6"
            >
              View My Work
            </MovingBorderButton>
            <Link href={siteConfig.linkedinUrl}>
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-12 w-full max-w-lg lg:mt-0">
          <ProjectVisual kind="erp" className="shadow-[0_0_80px_rgba(59,130,246,0.15)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

Note: the moving-border `Button` accepts `as="a"`, `href`, `containerClassName` (overrides the default `h-16 w-40` outer box), and `className` (styles the inner content). If the inner text inherits a large size from the component defaults (`text-xl`), override with `text-sm font-medium` via `className`.

- [ ] **Step 3: Wire hero into the homepage**

Modify `src/app/(marketing)/page.tsx` to render only the hero for now (other sections are added in later tasks):

```tsx
import Hero from "@/components/portfolio/hero";

const HomePage = () => {
  return (
    <div className="w-full min-h-dvh pt-0">
      <Hero />
    </div>
  );
};

export default HomePage;
```

- [ ] **Step 4: Build check**

```bash
pnpm build
```

Expected: build succeeds. `spotlight-new.tsx` defines an `animate-spotlight`-independent animation (it uses motion), so no extra CSS keyframes are required. If `text-generate-effect` or `spotlight-new` reference a CSS class not defined, add the keyframes from the Aceternity docs to `globals.css` (spotlight uses `animate-spotlight` only in the OLD `spotlight.tsx`, not `spotlight-new`).

- [ ] **Step 5: Commit**

```bash
git add src/components/portfolio/hero.tsx src/components/portfolio/visuals.tsx "src/app/(marketing)/page.tsx"
git commit -m "feat: add portfolio hero section"
```

---

### Task 6: Trust strip and metrics sections

**Files:**
- Create: `src/components/portfolio/trust-strip.tsx`
- Create: `src/components/portfolio/metrics.tsx`

**Interfaces:**
- Consumes: `metrics` (Task 2); existing `Marquee` from `@/components/ui/marquee`.
- Produces: `<TrustStrip />` and `<Metrics />` for the homepage.

- [ ] **Step 1: Write `src/components/portfolio/trust-strip.tsx`**

Uses the existing `Marquee` component with typographic labels (no fabricated logos).

```tsx
import { Marquee } from "@/components/ui/marquee";

const companies = ["Nirrov", "Mind Torches", "ELKOOD", "ASAPI ERP", "Safeer Digital", "Matrix ERP", "JetOrder"];

export const TrustStrip = () => {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-10 md:px-8" aria-label="Experience">
      <p className="mb-6 text-center text-xs uppercase tracking-widest text-white/40">
        Experience across enterprise teams and products
      </p>
      <Marquee pauseOnHover className="[--duration:30s]">
        {companies.map((c) => (
          <span key={c} className="px-8 text-lg font-medium text-white/50">
            {c}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustStrip;
```

- [ ] **Step 2: Write `src/components/portfolio/metrics.tsx`**

Plain typography, no animated counters (per spec).

```tsx
import { metrics } from "@/constants/portfolio";

export const Metrics = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8" aria-label="Metrics">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center gap-1 bg-[#010104] px-4 py-10 text-center">
            <span className="text-4xl font-semibold text-white md:text-5xl">{m.value}</span>
            <span className="text-sm text-white/50">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
```

- [ ] **Step 3: Wire into homepage**

Append `TrustStrip` and `Metrics` to `src/app/(marketing)/page.tsx`:

```tsx
import Hero from "@/components/portfolio/hero";
import TrustStrip from "@/components/portfolio/trust-strip";
import Metrics from "@/components/portfolio/metrics";

const HomePage = () => {
  return (
    <div className="w-full min-h-dvh pt-0">
      <Hero />
      <TrustStrip />
      <Metrics />
    </div>
  );
};

export default HomePage;
```

- [ ] **Step 4: Build check**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/components/portfolio/trust-strip.tsx src/components/portfolio/metrics.tsx "src/app/(marketing)/page.tsx"
git commit -m "feat: add trust strip and metrics sections"
```

---

### Task 7: What I Build (Bento Grid)

**Files:**
- Create: `src/components/portfolio/what-i-build.tsx`

**Interfaces:**
- Consumes: `whatIBuild` (Task 2); `BentoGrid` + `BentoGridItem` (Task 1); lucide icons.
- Produces: `<WhatIBuild />` for the homepage with section id `work` (Work anchor) — the nav "Work" href is `/#work`.

- [ ] **Step 1: Write `src/components/portfolio/what-i-build.tsx`**

```tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Building2, Rocket, Sparkles, Layers } from "lucide-react";
import { whatIBuild } from "@/constants/portfolio";

const icons = [Building2, Rocket, Sparkles, Layers];

export const WhatIBuild = () => {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">What I Build</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Capabilities, not just screens</h2>
      <BentoGrid className="mt-10 mx-auto">
        {whatIBuild.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <BentoGridItem
              key={item.title}
              title={item.title}
              description={item.description}
              header={
                <div className="flex h-full min-h-[8rem] items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Icon className="h-10 w-10 text-[#3b82f6]/70" />
                </div>
              }
              className={item.emphasis ? "md:col-span-2 lg:col-span-2 border-[#3b82f6]/40" : "border-white/10"}
            />
          );
        })}
      </BentoGrid>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {whatIBuild.flatMap((c) => c.keywords).map((k) => (
          <span key={k} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
            {k}
          </span>
        ))}
      </div>
    </section>
  );
};

export default WhatIBuild;
```

Note: check `BentoGrid`'s exported prop names in `src/components/ui/bento-grid.tsx` after install. The registry `BentoGridItem` accepts `title`, `description`, `header`, `icon`, `className`. If the installed file's `BentoGridItem` prop names differ, adjust to match.

- [ ] **Step 2: Wire into homepage**

Append `WhatIBuild` to `page.tsx`.

- [ ] **Step 3: Build check**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/portfolio/what-i-build.tsx "src/app/(marketing)/page.tsx"
git commit -m "feat: add what-i-build bento grid"
```

---

### Task 8: Featured projects (homepage) + AI & Agentic Engineering

**Files:**
- Create: `src/components/portfolio/featured-projects.tsx`
- Create: `src/components/portfolio/ai-section.tsx`
- Modify: `src/components/ui/card-spotlight.tsx` (create manually, stripped of three.js)

**Interfaces:**
- Consumes: `projects`, `aiCapabilities`, `aiWorkflowSteps` (Task 2); `HoverEffect`/`Card`/`CardTitle`/`CardDescription` (card-hover-effect, Task 1); `CardSpotlight` (this task); `ProjectVisual` (Task 5); lucide icons.
- Produces: `<FeaturedProjects />` and `<AiSection />`.

- [ ] **Step 1: Create `src/components/ui/card-spotlight.tsx` without three.js**

Write it manually (do NOT use the CLI — it would pull in `canvas-reveal-effect` → three). Use a motion-based radial gradient that follows the mouse:

```tsx
"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group/spotlight relative rounded-md border border-neutral-800 bg-black p-10",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};
```

- [ ] **Step 2: Write `src/components/portfolio/featured-projects.tsx`**

Note: the `3d-card` component (`CardContainer`/`CardBody`/`CardItem`) is installed and available. The featured cards below use a lightweight custom treatment (border + hover translate) for performance and restraint — the design spec says "3D Card, very subtly". If you want the subtle tilt, wrap the card interior in `CardContainer` + `CardItem` (translateZ) instead of the plain `div`; keep it `md+` only and disable on touch devices. The code below is the default (no 3D tilt) so the build is predictable.

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/constants/portfolio";
import { ProjectVisual } from "./visuals";

export const FeaturedProjects = () => {
  return (
    <section id="featured" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">Featured Work</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Case studies, not screenshots</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1 transition-colors hover:border-white/25"
          >
            <ProjectVisual kind={p.visual.kind} />
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-white/40">{p.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm text-white/60">{p.highlight}</p>
              <p className="mt-4 flex flex-wrap gap-2 text-xs text-white/40">
                {p.tech.join(" · ")}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#3b82f6]">
                View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
```

- [ ] **Step 3: Write `src/components/portfolio/ai-section.tsx`**

```tsx
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { aiCapabilities, aiWorkflowSteps } from "@/constants/portfolio";
import { ArrowDown } from "lucide-react";

export const AiSection = () => {
  return (
    <section id="ai" className="relative mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">AI &amp; Agentic Engineering</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Building with AI, not just using AI.</h2>
      <p className="mt-4 max-w-2xl text-white/60">
        I use AI as an engineering multiplier to automate repetitive work, accelerate implementation, and
        improve development velocity while keeping architecture, business logic, security, and quality under
        engineering control.
      </p>

      <CardSpotlight className="mt-10">
        <div className="flex flex-col items-center gap-2">
          {aiWorkflowSteps.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div className="rounded-lg border border-[#3b82f6]/40 bg-[#3b82f6]/10 px-4 py-2 text-sm text-white">
                {step}
              </div>
              {i < aiWorkflowSteps.length - 1 && <ArrowDown className="h-4 w-4 text-white/40" />}
            </div>
          ))}
        </div>
      </CardSpotlight>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {aiCapabilities.map((c) => (
          <span key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/70">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AiSection;
```

- [ ] **Step 4: Wire both into homepage** (after `WhatIBuild`).

- [ ] **Step 5: Build check**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/card-spotlight.tsx src/components/portfolio/featured-projects.tsx src/components/portfolio/ai-section.tsx "src/app/(marketing)/page.tsx"
git commit -m "feat: add featured projects and AI section"
```

---

### Task 9: Engineering Expertise and How I Work

**Files:**
- Create: `src/components/portfolio/expertise.tsx`
- Create: `src/components/portfolio/how-i-work.tsx`

**Interfaces:**
- Consumes: `expertiseGroups`, `howIWorkSteps` (Task 2); `BentoGrid`/`BentoGridItem` (Task 1); `Timeline` + `TracingBeam` (Task 1).
- Produces: `<Expertise />` (id `expertise`) and `<HowIWork />`.

- [ ] **Step 1: Write `src/components/portfolio/expertise.tsx`**

```tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { expertiseGroups } from "@/constants/portfolio";

export const Expertise = () => {
  return (
    <section id="expertise" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">Engineering Expertise</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Technical depth without the list dump</h2>
      <BentoGrid className="mt-10 mx-auto">
        {expertiseGroups.map((group) => (
          <BentoGridItem
            key={group.title}
            title={group.title}
            description={""}
            header={
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
                    {s}
                  </span>
                ))}
              </div>
            }
            className="border-white/10"
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Expertise;
```

Note: `BentoGridItem` may render an empty `description` awkwardly. If so, use the raw `BentoGrid` children pattern from the installed component instead of the wrapper item — inspect `src/components/ui/bento-grid.tsx` and match its intended usage.

- [ ] **Step 2: Write `src/components/portfolio/how-i-work.tsx`**

```tsx
import { TracingBeam } from "@/components/ui/tracing-beam";
import { howIWorkSteps } from "@/constants/portfolio";

export const HowIWork = () => {
  return (
    <section id="how-i-work" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">How I Work</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">A repeatable engineering process</h2>
      <TracingBeam className="mt-10">
        <div className="flex flex-col gap-10">
          {howIWorkSteps.map((step, i) => (
            <div key={step.title} className="relative pl-8">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#3b82f6]/40 bg-[#3b82f6]/10 text-xs text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
};

export default HowIWork;
```

- [ ] **Step 3: Wire both into homepage** (Expertise after AI section, HowIWork after Expertise).

- [ ] **Step 4: Build check**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/components/portfolio/expertise.tsx src/components/portfolio/how-i-work.tsx "src/app/(marketing)/page.tsx"
git commit -m "feat: add expertise and how-i-work sections"
```

---

### Task 10: Experience timeline

**Files:**
- Create: `src/components/portfolio/experience.tsx`

**Interfaces:**
- Consumes: `experienceRoles`, `education`, `softSkills`, `languages` (Task 2); `Timeline` (Task 1).
- Produces: `<Experience />` (id `experience`).

- [ ] **Step 1: Write `src/components/portfolio/experience.tsx`**

The `Timeline` component takes `data: { title: string; content: React.ReactNode }[]` (verified API). Build entries from `experienceRoles` plus compact education/soft-skills/languages blocks.

```tsx
import { Timeline } from "@/components/ui/timeline";
import { experienceRoles, education, softSkills, languages } from "@/constants/portfolio";

const educationEntry = {
  title: "Education",
  content: (
    <div>
      <p className="text-base font-semibold text-white">{education.degree}</p>
      <p className="text-sm text-white/60">{education.school} · {education.location}</p>
      <p className="mt-1 text-sm text-white/40">{education.period}</p>
      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-white/40">Soft Skills</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">{s}</span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-white/40">Languages</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {languages.map((l) => (
            <span key={l.name} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
              {l.name} — {l.level}
            </span>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Experience = () => {
  const data = [
    ...experienceRoles.map((r) => ({
      title: `${r.period}`,
      content: (
        <div>
          <p className="text-base font-semibold text-white">{r.title}</p>
          <p className="text-sm text-white/60">{r.company} · {r.location}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/50">
            {r.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      ),
    })),
    educationEntry,
  ];

  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">Experience</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Five years across enterprise teams</h2>
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
```

- [ ] **Step 2: Wire into homepage** (after HowIWork).

- [ ] **Step 3: Build check**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/portfolio/experience.tsx "src/app/(marketing)/page.tsx"
git commit -m "feat: add experience timeline"
```

---

### Task 11: About section

**Files:**
- Create: `src/components/portfolio/about.tsx`

**Interfaces:**
- Consumes: `aboutText`, `siteConfig` (Task 2); existing `AnimatedTooltip` from `@/components/ui/animated-tooltip` (optional; requires avatar images — use text chips instead to avoid fake avatars).
- Produces: `<About />` (id `about`).

- [ ] **Step 1: Write `src/components/portfolio/about.tsx`**

```tsx
import { siteConfig } from "@/constants/portfolio";
import { aboutText } from "@/constants/portfolio";

export const About = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Engineering products, not just interfaces.</h2>
          <div className="mt-6 space-y-4 text-white/60">
            {aboutText.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-xs uppercase tracking-widest text-white/40">Core Focus</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Node.js", "AI-Assisted Engineering"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/70">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-white/10 bg-[#010104] p-6">
            <p className="text-sm leading-relaxed text-white/60">
              “{siteConfig.headline}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

- [ ] **Step 2: Wire into homepage** (after Experience).

- [ ] **Step 3: Build check**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/portfolio/about.tsx "src/app/(marketing)/page.tsx"
git commit -m "feat: add about section"
```

---

### Task 12: GitHub activity, Contact CTA, and Footer

**Files:**
- Create: `src/components/portfolio/github-section.tsx`
- Create: `src/components/portfolio/contact.tsx`
- Create: `src/components/portfolio/footer.tsx`

**Interfaces:**
- Consumes: `repos`, `siteConfig` (Task 2); `HoverEffect`/`Card` (Task 1); `CardSpotlight` (Task 8); lucide icons.
- Produces: `<GithubSection />` (static), `<Contact />` (id `contact`), `<Footer />`.

- [ ] **Step 1: Write `src/components/portfolio/github-section.tsx`**

Static placeholder showcase; clearly not fabricated. Uses the installed `HoverEffect` (card-hover-effect) as the design mapping specifies.

```tsx
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { repos, siteConfig } from "@/constants/portfolio";

export const GithubSection = () => {
  const items = repos.map((r) => ({
    title: r.name,
    description: r.description,
    link: siteConfig.githubUrl,
  }));

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8" aria-label="Engineering activity">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">GitHub / Engineering Activity</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Actively building in public</h2>
      <p className="mt-3 text-sm text-white/40">
        Live repository data will be wired once the GitHub integration is configured.
      </p>
      <HoverEffect items={items} className="mt-8 grid-cols-1 md:grid-cols-3" />
    </section>
  );
};

export default GithubSection;
```

- [ ] **Step 2: Write `src/components/portfolio/contact.tsx`**

```tsx
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/constants/portfolio";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">Let&apos;s build something meaningful.</h2>
        <p className="mt-5 text-white/60">{siteConfig.contactText}</p>
        <p className="mt-3 text-sm text-white/40">Available for remote opportunities and engineering collaborations.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Start a Conversation</Button>
          </Link>
          <Link href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">View GitHub</Button>
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/50">
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={siteConfig.email} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 3: Write `src/components/portfolio/footer.tsx`**

```tsx
import { siteConfig } from "@/constants/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 text-center md:px-8">
        <p className="font-medium text-white">{siteConfig.name}</p>
        <p className="text-sm text-white/40">{siteConfig.role}</p>
        <p className="text-xs text-white/30">© 2026 {siteConfig.name} · Built with Next.js, TypeScript, and modern web technologies.</p>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 4: Wire into homepage + layout**

Append `GithubSection`, `Contact` to `page.tsx`. Add `Footer` to `src/app/(marketing)/layout.tsx` (replace the `{children}` tail):

```tsx
import PortfolioNav from "@/components/portfolio/nav";
import Footer from "@/components/portfolio/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full relative min-h-dvh">
      {children}
      <Footer />
      <PortfolioNav />
    </main>
  );
};

export default MarketingLayout;
```

- [ ] **Step 5: Build check**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/components/portfolio/github-section.tsx src/components/portfolio/contact.tsx src/components/portfolio/footer.tsx "src/app/(marketing)/page.tsx" "src/app/(marketing)/layout.tsx"
git commit -m "feat: add github, contact, and footer sections"
```

---

### Task 13: `/work` listing page

**Files:**
- Create: `src/app/(marketing)/work/page.tsx`

**Interfaces:**
- Consumes: `projects`, `selectedProducts` (Task 2); `ProjectVisual` (Task 5); metadata util (Task 3).
- Produces: the `/work` page listing featured projects (case-study cards) + selected products (compact cards).

- [ ] **Step 1: Write `src/app/(marketing)/work/page.tsx`**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, selectedProducts } from "@/constants/portfolio";
import { ProjectVisual } from "@/components/portfolio/visuals";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
  title: "Work — Hiba Baeij",
  description: "Case studies and selected products built by Hiba Baeij.",
});

const WorkPage = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-24 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">Work</p>
      <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Selected case studies</h1>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1 transition-colors hover:border-white/25">
            <ProjectVisual kind={p.visual.kind} />
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-white/40">{p.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{p.title}</h2>
              <p className="mt-3 text-sm text-white/60">{p.highlight}</p>
              <p className="mt-4 text-xs text-white/40">{p.tech.join(" · ")}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#3b82f6]">
                View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="mt-20 text-2xl font-semibold text-white">Selected Products</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {selectedProducts.map((p) => (
          <div key={p.slug} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <ProjectVisual kind={p.visual.kind} />
            <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/60">{p.description}</p>
            <p className="mt-4 text-xs text-white/40">{p.tech.join(" · ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
```

- [ ] **Step 2: Build check**

```bash
pnpm build
```

Expected: build succeeds and `/work` routes statically.

- [ ] **Step 3: Commit**

```bash
git add "src/app/(marketing)/work/page.tsx"
git commit -m "feat: add work listing page"
```

---

### Task 14: `/work/[slug]` case-study page

**Files:**
- Create: `src/app/(marketing)/work/[slug]/page.tsx`

**Interfaces:**
- Consumes: `projects`, `getProjectBySlug` (Task 2); `ProjectVisual` (Task 5); metadata util (Task 3); `notFound` from next/navigation.
- Produces: static case-study page per project with `generateStaticParams` + `generateMetadata` + 404 handling.

- [ ] **Step 1: Write `src/app/(marketing)/work/[slug]/page.tsx`**

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/constants/portfolio";
import { ProjectVisual } from "@/components/portfolio/visuals";
import { generateMetadata } from "@/utils";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return generateMetadata({
    title: `${project.title} — Hiba Baeij`,
    description: project.description,
  });
}

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-24 pt-24 md:px-8">
      <Link href="/work" className="text-sm text-white/40 hover:text-white">
        ← Back to work
      </Link>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-widest text-white/40">{project.category}</p>
        <h1 className="mt-2 text-4xl font-semibold text-white md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-white/60">{project.description}</p>
      </div>

      <div className="mt-10">
        <ProjectVisual kind={project.visual.kind} />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Role</p>
            <p className="mt-1 text-sm text-white/80">{project.role}</p>
            <p className="text-xs text-white/40">{project.period}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Technologies</p>
            <p className="mt-2 flex flex-wrap gap-2 text-xs text-white/70">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-3 py-1">{t}</span>
              ))}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm italic text-white/60">“{project.highlight}”</p>
          </div>
        </aside>

        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-white">Overview</h2>
            <p className="mt-2 text-white/60">{project.caseStudy.overview}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Business Problem</h2>
            <p className="mt-2 text-white/60">{project.caseStudy.businessProblem}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">My Role</h2>
            <p className="mt-2 text-white/60">{project.caseStudy.myRole}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Technical Challenges</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/60">
              {project.caseStudy.technicalChallenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Key Engineering Decisions</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/60">
              {project.caseStudy.keyDecisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Result / Impact</h2>
            <p className="mt-2 text-white/60">{project.caseStudy.result}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Contribution</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/60">
              {project.contribution.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/#contact">
          <Button size="lg">Let&apos;s talk about a similar problem</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
```

- [ ] **Step 2: Add a 404 route for case studies (optional but recommended)**

The `notFound()` call renders the app-level 404. No extra file required.

- [ ] **Step 3: Build check**

```bash
pnpm build
```

Expected: build succeeds; case-study pages are statically generated (you'll see `/work/asapi-erp`, etc. in the build output). Visit `/work/asapi-erp` in dev and confirm it renders; visit `/work/nonexistent` and confirm a 404.

- [ ] **Step 4: Commit**

```bash
git add "src/app/(marketing)/work/[slug]/page.tsx"
git commit -m "feat: add case study pages"
```

---

### Task 15: SEO — JSON-LD, sitemap, robots

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/(marketing)/page.tsx` JSON-LD block

**Interfaces:**
- Consumes: `siteConfig`, `projects` (Task 2); Next `MetadataRoute`.
- Produces: sitemap.xml, robots.txt, and Person JSON-LD on `/`.

- [ ] **Step 1: Write `src/app/sitemap.ts`**

```ts
import { MetadataRoute } from "next";
import { projects } from "@/constants/portfolio";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const workRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    ...workRoutes,
  ];
}
```

- [ ] **Step 2: Write `src/app/robots.ts`**

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/sitemap.xml`,
  };
}
```

- [ ] **Step 3: Add JSON-LD Person schema to the homepage**

Modify `src/app/(marketing)/page.tsx` to include the schema via a `<script type="application/ld+json">` block:

```tsx
import Hero from "@/components/portfolio/hero";
import TrustStrip from "@/components/portfolio/trust-strip";
import Metrics from "@/components/portfolio/metrics";
import WhatIBuild from "@/components/portfolio/what-i-build";
import FeaturedProjects from "@/components/portfolio/featured-projects";
import AiSection from "@/components/portfolio/ai-section";
import Expertise from "@/components/portfolio/expertise";
import HowIWork from "@/components/portfolio/how-i-work";
import Experience from "@/components/portfolio/experience";
import About from "@/components/portfolio/about";
import GithubSection from "@/components/portfolio/github-section";
import Contact from "@/components/portfolio/contact";
import { siteConfig } from "@/constants/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
};

const HomePage = () => {
  return (
    <div className="w-full min-h-dvh pt-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TrustStrip />
      <Metrics />
      <WhatIBuild />
      <FeaturedProjects />
      <AiSection />
      <Expertise />
      <HowIWork />
      <Experience />
      <About />
      <GithubSection />
      <Contact />
    </div>
  );
};

export default HomePage;
```

- [ ] **Step 4: Build check**

```bash
pnpm build
```

Expected: build succeeds; `/sitemap.xml` and `/robots.txt` are generated.

- [ ] **Step 5: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts "src/app/(marketing)/page.tsx"
git commit -m "feat: add sitemap, robots, and Person JSON-LD"
```

---

### Task 16: Delete unused Avento marketing code

**Files:**
- Delete: `src/components/marketing/hero.tsx`, `socials.tsx`, `difference.tsx`, `workflow.tsx`, `capibilities.tsx`, `integrations.tsx`, `membership.tsx`, `wall-of-love.tsx`, `cta.tsx`, `navbar.tsx`, `mobile-menu.tsx`, `footer.tsx`
- Delete: `src/constants/capabilities.ts`, `difference.ts`, `integrations.ts`, `membership.ts`, `testimonials.ts`, `workflow.ts`
- Modify: `src/constants/index.ts` (drop `membership`/`testimonials` exports)
- **Keep** `src/components/marketing/dashboard.tsx` — it is imported by `src/app/dashboard/page.tsx` (route must stay working).

**Interfaces:**
- Consumes: nothing (no portfolio component imports from the `@/constants` barrel; they import `@/constants/portfolio` directly).
- Produces: a clean repo without Avento marketing code.

- [ ] **Step 1: Verify nothing else imports the files before deleting**

```bash
rg "components/marketing" src
rg "membership|testimonials|capabilities|difference|integrations|workflow" src/components src/app
```

Expected: the only `components/marketing` reference left is `src/app/dashboard/page.tsx` → `marketing/dashboard` (kept). No references to the deleted constants remain after Task 15.

- [ ] **Step 2: Delete the files**

```bash
Remove-Item src/components/marketing/hero.tsx, src/components/marketing/socials.tsx, src/components/marketing/difference.tsx, src/components/marketing/workflow.tsx, src/components/marketing/capibilities.tsx, src/components/marketing/integrations.tsx, src/components/marketing/membership.tsx, src/components/marketing/wall-of-love.tsx, src/components/marketing/cta.tsx, src/components/marketing/navbar.tsx, src/components/marketing/mobile-menu.tsx, src/components/marketing/footer.tsx
Remove-Item src/constants/capabilities.ts, src/constants/difference.ts, src/constants/integrations.ts, src/constants/membership.ts, src/constants/testimonials.ts, src/constants/workflow.ts
```

- [ ] **Step 3: Update `src/constants/index.ts`**

```ts
export * from './fonts';
export * from './links';
export * from './routes';
export * from './portfolio';
```

- [ ] **Step 4: Build check**

```bash
pnpm build
```

Expected: build succeeds. `/dashboard` still renders.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove unused Avento marketing code"
```

---

### Task 17: Update remaining constants and env config

**Files:**
- Modify: `src/constants/links.ts`
- Modify: `src/constants/routes.ts`
- Modify: `.env.example`

**Interfaces:**
- Consumes: nothing (after Task 16, nothing imports `NAV_LINKS` or old `Routes` fields).
- Produces: cleaned-up constants with no references to deleted Avento content; `.env.example` updated to portfolio defaults.

- [ ] **Step 1: Replace `src/constants/links.ts`**

```ts
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
```

- [ ] **Step 2: Replace `src/constants/routes.ts`**

```ts
export const Routes = {
  Home: "/",
  Work: "/work",
  WorkSection: "/#work",
  Expertise: "/#expertise",
  Experience: "/#experience",
  About: "/#about",
  Contact: "/#contact",
} as const;
```

- [ ] **Step 3: Update `.env.example`**

```
# app
NEXT_PUBLIC_APP_NAME="Hiba Baeij"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

- [ ] **Step 4: Build check**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/constants/links.ts src/constants/routes.ts .env.example
git commit -m "chore: update constants for portfolio"
```

---

### Task 18: Final verification pass

**Files:** none (verification only).

**Interfaces:** n/a.

- [ ] **Step 1: Full build**

```bash
pnpm build
```

Expected: clean pass with all routes: `/`, `/work`, `/work/asapi-erp`, `/work/safeer-digital`, `/work/matrix-erp`, `/work/jetorder`, `/dashboard`, `/sitemap.xml`, `/robots.txt`.

- [ ] **Step 2: Dev-server smoke test**

```bash
pnpm dev
```

Check in the browser:
- `/` renders all 12 sections with no horizontal overflow on mobile widths.
- Floating dock appears at bottom center (desktop) and bottom-right (mobile).
- Anchor links (`/#work`, `/#expertise`, etc.) scroll to sections.
- `/work` lists featured + selected products.
- `/work/asapi-erp` renders a case study; `/work/nope` renders 404.
- `prefers-reduced-motion` does not break layout.
- No console errors.

- [ ] **Step 3: Accessibility/quality spot-check**

- All images (the code-drawn visuals) have no `alt` requirement since they are decorative `<svg aria-hidden>` — confirm.
- Headings are semantic (`h1` per page, `h2` per section).
- Focus states visible on dock and links.
- Contact links target `_blank` with `rel="noopener noreferrer"`.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: final verification pass"
```

(Only commit if changes were made; otherwise skip.)