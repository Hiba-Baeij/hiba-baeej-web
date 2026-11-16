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
  liveUrl?: string;
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
  liveUrl?: string;
  description: string;
  tech: string[];
  visual: ProjectVisual;
}

export const projects: Project[] = [
  {
    slug: "asapi-erp",
    cover: { src: "/images/projects/asapi-erp/3.webp", width: 1280, height: 1154, caption: "Purchase invoice: line items, taxes and live totals" },
    gallery: [
      { src: "/images/projects/asapi-erp/3.webp", width: 1280, height: 1154, caption: "Purchase invoice: line items, taxes and live totals" },
      { src: "/images/projects/asapi-erp/1.webp", width: 1280, height: 747, caption: "Data table with advanced filters and bulk actions" },
      { src: "/images/projects/asapi-erp/4.webp", width: 1280, height: 846, caption: "Sales order with customer, warehouse and pricing" },
      { src: "/images/projects/asapi-erp/7.webp", width: 1280, height: 873, caption: "Product details: units, pricing and barcodes" },
      { src: "/images/projects/asapi-erp/9.webp", width: 1280, height: 606, caption: "Products catalogue built on the generic CRUD resource view" },
      { src: "/images/projects/asapi-erp/10.webp", width: 1280, height: 608, caption: "Accounting overview" },
      { src: "/images/projects/asapi-erp/11.webp", width: 1280, height: 604, caption: "Reports centre: financial and inventory reports" },
      { src: "/images/projects/asapi-erp/13.webp", width: 1280, height: 606, caption: "Fixed assets module" },
    ],
    title: "ASAPI ERP",
    category: "Multi-tenant SaaS ERP",
    description:
      "A cloud ERP for small and mid-sized Saudi businesses. Accounting, sales, inventory, POS, restaurants, HR and loyalty run in one system, and each company's data is kept separate.",
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
        "ASAPI ERP is a multi-tenant cloud ERP for small and mid-sized businesses in Saudi Arabia. Accounting, sales, inventory, POS, restaurants, HR and customer loyalty are in one platform, and every invoice, note or return is posted to the accounts automatically.",
      businessProblem:
        "Owners and accountants were using separate tools and spreadsheets for sales, stock and accounts, so the numbers rarely matched. On top of that, they had to comply with ZATCA e-invoicing.",
      myRole:
        "I was responsible for the frontend architecture, the shared component library, the typed data layer and the core financial modules.",
      technicalChallenges: [
        "Two very different users, the platform operator and each tenant business, had to be served without duplicating code.",
        "Precise financial calculations across invoices, notes, returns and prepayments.",
        "Large, data-heavy screens had to stay fast and look the same across dozens of modules.",
        "Permissions, bilingual RTL/LTR UI and real-time notifications across the whole product.",
      ],
      keyDecisions: [
        "Split the frontend into two isolated apps sharing one component library.",
        "Wrote one generic service template with TypeScript generics, so each new resource gets a typed API client without extra code.",
        "Used one generic CRUD resource view (table, card or kanban) with filters saved in the URL, instead of building screens per module.",
        "Let RBAC drive both routing and UI, so a permission is checked the same way on every screen.",
      ],
      result:
        "New modules are now assembled from the shared pieces instead of built from scratch. Financial documents post to the accounts on their own, and owners see live reports.",
    },
  },
  {
    slug: "safeer-digital",
    cover: { src: "/images/projects/safeer-digital/1.webp", width: 1280, height: 607, caption: "Requests list: filters by branch, shift, embassy and status" },
    gallery: [
      { src: "/images/projects/safeer-digital/1.webp", width: 1280, height: 607, caption: "Requests list: filters by branch, shift, embassy and status" },
      { src: "/images/projects/safeer-digital/3.webp", width: 1280, height: 604, caption: "Fingerprint appointment scheduling" },
      { src: "/images/projects/safeer-digital/6.webp", width: 1280, height: 608, caption: "Fingerprint capture and verification" },
      { src: "/images/projects/safeer-digital/9.webp", width: 1280, height: 732, caption: "Checkout: fees, payment methods and summary" },
      { src: "/images/projects/safeer-digital/11.webp", width: 1280, height: 606, caption: "Services catalogue" },
      { src: "/images/projects/safeer-digital/14.webp", width: 1280, height: 609, caption: "Service configuration: branches and fees" },
      { src: "/images/projects/safeer-digital/15.webp", width: 1280, height: 604, caption: "Configurable request workflow" },
      { src: "/images/projects/safeer-digital/18.webp", width: 1280, height: 580, caption: "Cashier shifts report" },
    ],
    title: "Safeer Digital (EDC)",
    category: "Embassy Services & Operations Platform",
    description:
      "An operations platform for an embassy-services provider in Saudi Arabia. It tracks each request from submission through payment and accounting to delivery.",
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
      "Designed and built cashier shift management end to end. Every payment, return and voucher belongs to an open shift, and the API enforces it.",
      "Built a complete accounting module (Trial Balance, Balance Sheet, Income Statement, Ledger) with ZATCA e-invoicing.",
      "Integrated RBAC, staff management, Google Drive backups, SMS and Google Maps.",
    ],
    tech: ["Vue 3", "TypeScript", "Laravel", "Vuetify", "REST APIs"],
    visual: { kind: "embassy" },
    caseStudy: {
      overview:
        "Safeer Digital is the system staff use across several branches of an embassy-services provider to handle each request from submission to delivery.",
      businessProblem:
        "Requests were tracked on paper. Files got lost, nobody could audit who did what, and invoicing and accounting were done separately.",
      myRole:
        "I built features on both the Vue 3 monorepo and the Laravel API, and owned several modules end to end.",
      technicalChallenges: [
        "Booking appointments across branches, time slots and holidays without double bookings.",
        "Checking people in by QR without duplicate check-ins, and logging every check-in.",
        "Cash had to add up exactly at the end of every shift.",
        "A full accounting module that complies with Saudi e-invoicing.",
      ],
      keyDecisions: [
        "Enforced cashier-shift rules at the API level, not only in the UI.",
        "Designed QR check-in as three steps (scan or enter code, review, confirm), with auto-verify and a duplicate check.",
        "Kept four apps in one monorepo to share components, types and API clients.",
      ],
      result:
        "Paper is gone. More than 100,000 requests a year now go through one system with a full audit log, PDF reconciliation reports and live financial statements.",
    },
  },
  {
    slug: "smartdocs-ai",
    cover: { src: "/images/projects/smartdocs-ai/2.webp", width: 1600, height: 757, caption: "Chat with cited source passages" },
    gallery: [
      { src: "/images/projects/smartdocs-ai/2.webp", width: 1600, height: 757, caption: "Chat with cited source passages" },
      { src: "/images/projects/smartdocs-ai/1.webp", width: 1600, height: 750, caption: "Document library: PDF, Word and Excel upload" },
      { src: "/images/projects/smartdocs-ai/cover.webp", width: 1600, height: 750, caption: "Arabic-first sign-in" },
    ],
    title: "SmartDocs AI",
    liveUrl: "https://smartdocs.e-dukkan.shop/",
    category: "AI Document Q&A (RAG)",
    description:
      "A RAG app that answers questions from a company's own PDF, Word and Excel files in Arabic and English. Every answer cites its sources, and when the answer isn't in the files, it says so.",
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
      "An answer is returned only if it cites retrieved passages. Otherwise the user gets a fixed \"not found\" reply.",
      "Designed an LLM layer that isn't tied to one provider: an OpenAI-compatible adapter plus a deterministic mock for tests, with API keys kept on the server.",
    ],
    tech: ["Angular", "NestJS", "PostgreSQL", "Vector Search", "LLMs", "RAG"],
    visual: { kind: "ai" },
    caseStudy: {
      overview:
        "SmartDocs AI lets a team ask questions about its own documents and see the exact passages each answer came from.",
      businessProblem:
        "General chatbots make things up when they don't know, which is a problem with internal documents. In Arabic it's harder still, because keyword search misses questions phrased differently from the text.",
      myRole: "Designed and built the full product: ingestion pipeline, retrieval, API and Angular UI.",
      technicalChallenges: [
        "Finding the right passage for paraphrased and cross-language (Arabic ↔ English) questions.",
        "Preventing hallucinated answers.",
        "Staying independent of any single LLM provider while remaining testable.",
      ],
      keyDecisions: [
        "Hybrid retrieval: PostgreSQL Arabic full-text search + vector similarity.",
        "A strict rule: no citation, no answer.",
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
    liveUrl: "https://e-dukkan.shop/",
    category: "Multi-tenant E-commerce SaaS",
    description:
      "A SaaS platform where merchants open an online store on their own subdomain and manage products, orders, promotions, payments and delivery from one dashboard.",
    highlight: "Live with 10+ merchants, plus an MCP server that gives AI agents limited access to a store.",
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
        "Small merchants want a proper online store with local-currency payments, but they don't have developers or a big monthly budget.",
      myRole: "Designed, built and deployed the full platform end to end.",
      technicalChallenges: [
        "Tenant isolation across subdomains in one codebase.",
        "Correct multi-currency pricing without floating-point errors.",
        "Letting AI agents work on a store without giving them full access.",
      ],
      keyDecisions: [
        "Turborepo monorepo sharing types between NestJS API and Next.js apps.",
        "Request-scoped currency context with decimal-safe math.",
        "An MCP server generated from the OpenAPI spec, protected by OAuth 2.1 and scoped hashed API keys.",
      ],
      result: "The platform is live with 10+ active merchants, and AI agents can already manage stores through the MCP server.",
    },
  },
  {
    slug: "jetorder",
    title: "JetOrder",
    category: "Store Management Platform",
    description:
      "A large store-management app that I moved from Nuxt 2 to Vue 3 and TypeScript while it stayed in use.",
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
        "JetOrder is a large store-management platform. The job was to move the frontend to Vue 3 while customers kept using it.",
      businessProblem:
        "The app was on Nuxt 2 with old patterns, so changes were slow and new features were risky to add.",
      myRole: "I led the migration and the refactoring.",
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
      result: "The app runs on Vue 3 with TypeScript, and code complexity dropped by about 30%.",
    },
  },
];

export const selectedProducts: SelectedProduct[] = [
  {
    slug: "voucher-buyer",
    title: "Voucher Buyer",
    liveUrl: "https://voucherbuyer.com/",
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
