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