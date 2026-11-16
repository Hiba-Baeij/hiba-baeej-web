export interface ProjectVisual {
  kind: "erp" | "embassy" | "store" | "saas" | "dashboard" | "website" | "ai" | "commerce";
}

export interface ProjectImage {
  src: string;
  caption: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  title: string;
  category: string;
  description: string;
  highlight: string;
  role: string;
  period: string;
  impact: { value: string; label: string }[];
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
    cover: { src: "/images/projects/asapi-erp/3.webp", width: 1280, height: 1154, caption: "Purchase invoice — line items, taxes and live totals" },
    gallery: [
      { src: "/images/projects/asapi-erp/3.webp", width: 1280, height: 1154, caption: "Purchase invoice — line items, taxes and live totals" },
      { src: "/images/projects/asapi-erp/1.webp", width: 1280, height: 747, caption: "Data table with advanced filters and bulk actions" },
      { src: "/images/projects/asapi-erp/4.webp", width: 1280, height: 846, caption: "Sales order with customer, warehouse and pricing" },
      { src: "/images/projects/asapi-erp/7.webp", width: 1280, height: 873, caption: "Product details — units, pricing and barcodes" },
      { src: "/images/projects/asapi-erp/9.webp", width: 1280, height: 606, caption: "Products catalogue built on the generic CRUD resource view" },
      { src: "/images/projects/asapi-erp/10.webp", width: 1280, height: 608, caption: "Accounting overview" },
      { src: "/images/projects/asapi-erp/11.webp", width: 1280, height: 604, caption: "Reports centre — financial and inventory reports" },
      { src: "/images/projects/asapi-erp/13.webp", width: 1280, height: 606, caption: "Fixed assets module" },
    ],
    title: "ASAPI ERP",
    category: "Multi-tenant SaaS ERP",
    description:
      "A cloud ERP that lets small and mid-sized Saudi businesses run accounting, sales, inventory, POS, restaurants, HR and loyalty in one system — every company in its own isolated space.",
    highlight:
      "Two isolated apps on one shared component library, a typed API layer and ZATCA-compliant invoicing.",
    role: "Frontend Engineer",
    period: "Nirrov · 2023 – Present",
    impact: [
      { value: "2", label: "Isolated apps, one shared library" },
      { value: "AR/EN", label: "Full i18n with RTL" },
      { value: "ZATCA", label: "E-invoicing with QR codes" },
    ],
    contribution: [
      "Architected the frontend as two isolated apps (Admin portal + Client Dashboard) on a shared component library.",
      "Built a typed API layer on a generic service template (TypeScript generics) with TanStack Query caching, invalidation and request cancellation.",
      "Implemented sales & purchase invoices, credit/debit notes, returns and prepayments with precise financial calculations and ZATCA e-invoicing.",
      "Developed a generic CRUD resource view (table, card and kanban modes, URL-synced filters, pagination), virtualized tables and a dynamic report builder.",
      "Implemented RBAC with permission-driven routing and UI, Arabic/English i18n with RTL, real-time notifications (Pusher, Laravel Echo), Google Maps and Excel import/export.",
    ],
    tech: ["React", "TypeScript", "TanStack Query", "MUI", "Pusher", "REST APIs"],
    visual: { kind: "erp" },
    caseStudy: {
      overview:
        "ASAPI ERP is a multi-tenant cloud ERP for small and mid-sized businesses in Saudi Arabia. Accounting, sales, inventory, POS, restaurants, HR and customer loyalty live in one platform, and every financial document flows straight into the books.",
      businessProblem:
        "Owners and accountants were juggling separate tools and spreadsheets, with no single source of truth and no real-time view of the business — while also needing to comply with ZATCA e-invoicing rules.",
      myRole:
        "Frontend engineer responsible for the frontend architecture, the shared component library, the typed data layer and core financial modules.",
      technicalChallenges: [
        "Serving two very different audiences — the platform operator and each tenant business — without duplicating code.",
        "Precise financial calculations across invoices, notes, returns and prepayments.",
        "Large, data-heavy screens that must stay fast and consistent across dozens of modules.",
        "Permissions, bilingual RTL/LTR UI and real-time notifications across the whole product.",
      ],
      keyDecisions: [
        "Split the frontend into two isolated apps sharing one component library.",
        "Built a generic, TypeScript-generic service template so every resource gets a typed API client for free.",
        "Standardized on a generic CRUD resource view (table / card / kanban) with URL-synced filters instead of per-module screens.",
        "Made RBAC drive routing and UI, so permissions are enforced consistently everywhere.",
      ],
      result:
        "A unified ERP where new modules are composed from reusable building blocks, financial documents post to the books automatically, and owners get accurate real-time reports.",
    },
  },
  {
    slug: "safeer-digital",
    cover: { src: "/images/projects/safeer-digital/1.webp", width: 1280, height: 607, caption: "Requests list — filters by branch, shift, embassy and status" },
    gallery: [
      { src: "/images/projects/safeer-digital/1.webp", width: 1280, height: 607, caption: "Requests list — filters by branch, shift, embassy and status" },
      { src: "/images/projects/safeer-digital/3.webp", width: 1280, height: 604, caption: "Fingerprint appointment scheduling" },
      { src: "/images/projects/safeer-digital/6.webp", width: 1280, height: 608, caption: "Fingerprint capture and verification" },
      { src: "/images/projects/safeer-digital/9.webp", width: 1280, height: 732, caption: "Checkout — fees, payment methods and summary" },
      { src: "/images/projects/safeer-digital/11.webp", width: 1280, height: 606, caption: "Services catalogue" },
      { src: "/images/projects/safeer-digital/14.webp", width: 1280, height: 609, caption: "Service configuration — branches and fees" },
      { src: "/images/projects/safeer-digital/15.webp", width: 1280, height: 604, caption: "Configurable request workflow" },
      { src: "/images/projects/safeer-digital/18.webp", width: 1280, height: 580, caption: "Cashier shifts report" },
    ],
    title: "Safeer Digital (EDC)",
    category: "Embassy Services & Operations Platform",
    description:
      "An operations platform for a leading embassy-services provider in Saudi Arabia, managing every request from submission through invoicing and accounting to delivery.",
    highlight:
      "Replaced paper-based workflows with one auditable system handling 100,000+ requests per year.",
    role: "Full-Stack Engineer",
    period: "Nirrov · 2023 – Present",
    impact: [
      { value: "100K+", label: "Requests handled per year" },
      { value: "4", label: "Apps in a Vue 3 monorepo" },
      { value: "QR", label: "Attendance verification + audit log" },
    ],
    contribution: [
      "Built full-stack features across a Vue 3 monorepo (Admin, Customer, Driver and Landing apps) and a modular Laravel REST API.",
      "Delivered the fingerprint-appointment system: branch schedules, time slots, holidays, booking actions and QR attendance verification with audit log.",
      "Designed and built cashier shift management end to end — every payment, return and voucher tied to an open shift and enforced at the API level.",
      "Built a complete accounting module (Trial Balance, Balance Sheet, Income Statement, Ledger) with ZATCA e-invoicing.",
      "Integrated RBAC, staff management, Google Drive backups, SMS and Google Maps.",
    ],
    tech: ["Vue 3", "TypeScript", "Laravel", "Vuetify", "REST APIs"],
    visual: { kind: "embassy" },
    caseStudy: {
      overview:
        "Safeer Digital is an end-to-end operations platform for an embassy-services provider, used by staff across multiple branches to manage each service request from submission to delivery.",
      businessProblem:
        "High-volume service requests were tracked through manual, paper-based workflows — hard to audit, easy to lose, and disconnected from invoicing and accounting.",
      myRole:
        "Full-stack engineer building features across the Vue 3 frontend monorepo and the modular Laravel API, owning several modules end to end.",
      technicalChallenges: [
        "Appointment scheduling across branches, time slots and holidays with reliable booking actions.",
        "QR attendance verification that prevents duplicate check-ins and leaves an audit trail.",
        "Cash handling that must reconcile perfectly across shifts.",
        "A complete accounting layer with Saudi e-invoicing compliance.",
      ],
      keyDecisions: [
        "Enforced cashier-shift rules at the API level, not only in the UI.",
        "Designed QR verification as scan/code → review → confirm, with auto-verify and duplicate-check prevention.",
        "Kept four apps in one monorepo to share components, types and API clients.",
      ],
      result:
        "One auditable system that handles 100,000+ requests per year, with PDF reconciliation reports and real-time financial statements.",
    },
  },
  {
    slug: "smartdocs-ai",
    cover: { src: "/images/projects/smartdocs-ai/2.webp", width: 1600, height: 757, caption: "Chat with cited source passages" },
    gallery: [
      { src: "/images/projects/smartdocs-ai/2.webp", width: 1600, height: 757, caption: "Chat with cited source passages" },
      { src: "/images/projects/smartdocs-ai/1.webp", width: 1600, height: 750, caption: "Document library — PDF, Word and Excel upload" },
      { src: "/images/projects/smartdocs-ai/cover.webp", width: 1600, height: 750, caption: "Arabic-first sign-in" },
    ],
    title: "SmartDocs AI",
    category: "AI Document Q&A (RAG)",
    description:
      "A RAG application that answers questions about a company's own PDF, Word and Excel files in Arabic and English — every answer cites its sources, and it says so when the answer isn't there.",
    highlight: "Grounded, cited answers with hybrid Arabic full-text + vector retrieval.",
    role: "Full-Stack Engineer",
    period: "Personal product",
    impact: [
      { value: "AR/EN", label: "Cross-language retrieval" },
      { value: "Cited", label: "Every answer links its source" },
      { value: "Hybrid", label: "Full-text + vector search" },
    ],
    contribution: [
      "Built an end-to-end RAG pipeline: parsing, chunking, embeddings, retrieval and grounded generation with citations.",
      "Implemented hybrid retrieval combining PostgreSQL full-text search (Arabic) with vector similarity search.",
      "Enforced grounded answers — a response is returned only if it cites retrieved passages; otherwise a fixed fallback.",
      "Designed a provider-agnostic LLM layer (OpenAI-compatible adapter + deterministic mock for tests) with keys kept server-side.",
    ],
    tech: ["Angular", "NestJS", "PostgreSQL", "Vector Search", "LLMs", "RAG"],
    visual: { kind: "ai" },
    caseStudy: {
      overview:
        "SmartDocs AI lets teams ask questions about their own documents and get answers they can trust, with the exact source passages cited.",
      businessProblem:
        "Generic chatbots hallucinate and can't be trusted with internal documents — especially in Arabic, where keyword search alone misses paraphrased questions.",
      myRole: "Designed and built the full product: ingestion pipeline, retrieval, API and Angular UI.",
      technicalChallenges: [
        "Finding the right passage for paraphrased and cross-language (Arabic ↔ English) questions.",
        "Preventing hallucinated answers.",
        "Staying independent of any single LLM provider while remaining testable.",
      ],
      keyDecisions: [
        "Hybrid retrieval: PostgreSQL Arabic full-text search + vector similarity.",
        "A strict grounding rule — no citation, no answer.",
        "An OpenAI-compatible adapter with a deterministic mock for testing.",
      ],
      result:
        "A document assistant that answers in Arabic and English with citations, and openly says when the documents don't hold the answer.",
    },
  },
  {
    slug: "e-dukan",
    cover: { src: "/images/projects/e-dukan/cover.webp", width: 1600, height: 755, caption: "Arabic-first landing page" },
    gallery: [
      { src: "/images/projects/e-dukan/cover.webp", width: 1600, height: 755, caption: "Arabic-first landing page" },
      { src: "/images/projects/e-dukan/1.webp", width: 1600, height: 763, caption: "Merchant sign-in by phone or email" },
    ],
    title: "e-Dukan",
    category: "Multi-tenant E-commerce SaaS",
    description:
      "A SaaS platform that lets merchants open their own online store in minutes on its own subdomain, and run products, orders, promotions, payments and delivery from one dashboard.",
    highlight: "Live with 10+ merchants — plus an MCP server so AI agents can operate stores safely.",
    role: "Full-Stack Engineer",
    period: "Personal product · Live",
    impact: [
      { value: "10+", label: "Active merchants" },
      { value: "MCP", label: "Server generated from OpenAPI" },
      { value: "4", label: "Notification channels" },
    ],
    contribution: [
      "Built and deployed a multi-tenant TypeScript monorepo (NestJS, Next.js, Turborepo).",
      "Implemented request-scoped multi-currency pricing with decimal-safe math and plan-limit enforcement guards.",
      "Built wildcard event-driven notifications over FCM, Telegram, WhatsApp and SMTP.",
      "Shipped a Model Context Protocol (MCP) server generated from OpenAPI specs, secured by OAuth 2.1 and scoped, hashed API keys.",
    ],
    tech: ["Next.js", "NestJS", "Turborepo", "PostgreSQL", "Prisma", "MCP"],
    visual: { kind: "commerce" },
    caseStudy: {
      overview:
        "e-Dukan is an Arabic-first e-commerce SaaS: merchants get a store on their own subdomain, shoppers get a fast storefront with guest checkout and local-currency pricing, and the operator manages every store from a central admin panel.",
      businessProblem:
        "Small merchants need a professional online store without technical skills, local-currency payments, or a big monthly bill.",
      myRole: "Designed, built and deployed the full platform end to end.",
      technicalChallenges: [
        "Tenant isolation across subdomains in one codebase.",
        "Correct multi-currency pricing without floating-point errors.",
        "Letting AI agents act on a store without compromising security.",
      ],
      keyDecisions: [
        "Turborepo monorepo sharing types between NestJS API and Next.js apps.",
        "Request-scoped currency context with decimal-safe math.",
        "An MCP server generated from the OpenAPI spec, protected by OAuth 2.1 and scoped hashed API keys.",
      ],
      result: "A live platform serving 10+ active merchants, ready for AI-agent automation.",
    },
  },
  {
    slug: "jetorder",
    title: "JetOrder",
    category: "Store Management Platform",
    description:
      "A large store-management application migrated from Nuxt 2 to Vue 3 and TypeScript without losing business functionality.",
    highlight: "Modernized a large legacy frontend and cut code complexity by 30%.",
    role: "Frontend Developer",
    period: "Mind Torches · 2022 – 2023",
    impact: [
      { value: "30%", label: "Less code complexity" },
      { value: "Vue 3", label: "Migrated from Nuxt 2" },
      { value: "TS", label: "Type safety across the codebase" },
    ],
    contribution: [
      "Migrated the application from Nuxt 2 to Vue 3.",
      "Introduced TypeScript across the codebase.",
      "Refactored legacy frontend patterns, reducing code complexity by 30%.",
    ],
    tech: ["Vue 3", "Nuxt", "TypeScript"],
    visual: { kind: "store" },
    caseStudy: {
      overview:
        "JetOrder is a large store-management platform. The goal was to modernize the frontend while the product stayed live.",
      businessProblem:
        "The app was stuck on Nuxt 2 with legacy patterns, making it slow to change and risky to extend.",
      myRole: "Frontend developer driving the migration and refactoring work.",
      technicalChallenges: [
        "Migrating a large codebase without breaking business features.",
        "Introducing TypeScript incrementally.",
        "Refactoring legacy patterns while features kept shipping.",
      ],
      keyDecisions: [
        "Incremental, behavior-preserving migration steps.",
        "TypeScript as the foundation of the new component structure.",
        "Smaller, decoupled components to reduce complexity.",
      ],
      result: "A typed, maintainable Vue 3 codebase with 30% less code complexity.",
    },
  },
];

export const selectedProducts: SelectedProduct[] = [
  {
    slug: "voucher-buyer",
    title: "Voucher Buyer",
    description: "Multilingual gift-card resale platform with payment flows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    visual: { kind: "saas" },
  },
  {
    slug: "iqraa-dashboard",
    title: "Iqraa Dashboard",
    description: "Currency-exchange monitoring platform connected to mobile apps.",
    tech: ["React", "Tailwind CSS", "REST APIs"],
    visual: { kind: "dashboard" },
  },
  {
    slug: "paradise-road",
    title: "Paradise Road",
    description: "High-performance responsive website for a Saudi client.",
    tech: ["Next.js", "Tailwind CSS"],
    visual: { kind: "website" },
  },
  {
    slug: "dental-clinic",
    title: "Dental Clinic System",
    description: "Dental clinic management system delivered as a freelance project.",
    tech: ["Business App", "REST APIs"],
    visual: { kind: "dashboard" },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
