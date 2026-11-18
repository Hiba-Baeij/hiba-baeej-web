export interface ProjectVisual {
  kind: "erp" | "embassy" | "store" | "saas" | "dashboard" | "website" | "ai" | "commerce";
}

export interface ProjectImage {
  src: string;
  caption: string;
  width: number;
  height: number;
}

export type ProjectGroup = "erp" | "saas" | "ai" | "commerce" | "web";

/** Filter labels on the /work page, in display order. Only groups that have projects are shown. */
export const projectGroups: { id: ProjectGroup; label: string }[] = [
  { id: "erp", label: "ERP & Operations" },
  { id: "saas", label: "SaaS" },
  { id: "ai", label: "AI" },
  { id: "commerce", label: "E-commerce" },
  { id: "web", label: "Websites" },
];

export interface Project {
  slug: string;
  /** Filter group on the /work page. */
  group: ProjectGroup;
  /** Show on the home page "Selected projects" section (first 4 featured are shown). */
  featured?: boolean;
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  title: string;
  /** Brand mark shown as the project icon (public path). Missing → initials fallback. */
  logo?: string;
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
  logo?: string;
  liveUrl?: string;
  description: string;
  tech: string[];
  visual: ProjectVisual;
}

export const projects: Project[] = [
  {
    slug: "asapi-erp",
    group: "erp",
    featured: true,
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
    logo: "/logo/brands/asapi-mark.svg",
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
    slug: "asapi-website",
    group: "web",
    cover: { src: "/images/projects/asapi-website/cover.png", width: 1918, height: 911, caption: "Arabic hero with a live product preview of the fleet module" },
    gallery: [
      { src: "/images/projects/asapi-website/cover.png", width: 1918, height: 911, caption: "Arabic hero with a live product preview of the fleet module" },
      { src: "/images/projects/asapi-website/3.png", width: 1918, height: 909, caption: "\"One transaction updates everything\": animated data-flow section" },
      { src: "/images/projects/asapi-website/2.png", width: 1918, height: 909, caption: "Industry picker that recommends apps, next to the ZATCA invoice preview" },
      { src: "/images/projects/asapi-website/5.png", width: 1919, height: 906, caption: "E-invoicing landing page for ZATCA Phase 2" },
      { src: "/images/projects/asapi-website/4.png", width: 1919, height: 906, caption: "General accounting app page" },
      { src: "/images/projects/asapi-website/1.png", width: 1917, height: 894, caption: "Why ASAPI, with a book-a-demo card" },
    ],
    title: "ASAPI Website",
    logo: "/logo/brands/asapi-mark.svg",
    liveUrl: "https://asapi.sa/ar",
    category: "SaaS Marketing Website",
    description:
      "The public website of ASAPI, a cloud ERP for Saudi businesses. It explains each app, shows ZATCA e-invoicing, recommends apps by industry and turns visitors into free-trial and demo sign-ups.",
    highlight: "Arabic-first, RTL by default, with English, dark mode and in-page product previews built in code instead of static screenshots.",
    role: "Frontend Engineer",
    period: "Nirrov · 2026",
    impact: [
      { value: "AR/EN", label: "Arabic-first with RTL" },
      { value: "8", label: "Industries with tailored app picks" },
      { value: "ZATCA", label: "Phase 2 e-invoicing page" },
    ],
    contribution: [
      "Built the marketing site in Next.js (App Router) and TypeScript: home, app pages, e-invoicing, pricing, about and contact.",
      "Made it Arabic-first with full RTL, an English version with locale-based routes (/ar, /en), and a light/dark theme.",
      "Recreated product screens in code (fleet bookings, monthly summary, tax invoice with QR) so previews stay sharp, translatable and in sync with the theme.",
      "Built an interactive industry picker (retail, restaurants, wholesale, contracting, services, workshops, car rental, manufacturing) that suggests the right apps.",
      "Added an animated data-flow section and live activity log that show one sale updating stock, journal entries, ZATCA and reports.",
      "Wired the free-trial and book-a-demo calls to action, and optimized metadata and Open Graph for SEO in both languages.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n (RTL)", "SEO"],
    visual: { kind: "website" },
    caseStudy: {
      overview:
        "asapi.sa is where Saudi business owners first meet ASAPI ERP. It presents the platform's apps (accounting, inventory, POS, CRM, HR, car rental and more), explains ZATCA e-invoicing and leads visitors to a 14-day free trial or a demo.",
      businessProblem:
        "An ERP is hard to explain with text alone, and the target audience reads Arabic first. The site had to show how the product works, prove ZATCA compliance and help each type of business find the apps it needs.",
      myRole: "I built the website frontend: layout, components, Arabic/English content structure, interactive sections and SEO.",
      technicalChallenges: [
        "Arabic-first RTL layouts that still look right in English LTR.",
        "Showing realistic product screens without heavy screenshots that go out of date.",
        "Keeping an animation-rich, image-light page fast and indexable in two languages.",
      ],
      keyDecisions: [
        "Built product previews as real components, so they follow the theme, language and direction automatically.",
        "Locale-based routing with separate metadata per language for SEO.",
        "One industry picker that maps each business type to recommended apps, instead of a long feature list.",
      ],
      result:
        "The site is live at asapi.sa and serves as the main entry point to ASAPI ERP, with clear paths to a free trial or a demo in Arabic and English.",
    },
  },
  {
    slug: "nirrov",
    group: "web",
    cover: { src: "/images/projects/nirrov/cover.png", width: 1919, height: 906, caption: "Arabic hero slider with animated brand shapes" },
    gallery: [
      { src: "/images/projects/nirrov/cover.png", width: 1919, height: 906, caption: "Arabic hero slider with animated brand shapes" },
      { src: "/images/projects/nirrov/1.png", width: 1918, height: 902, caption: "About section: operate, grow and go digital, in dark mode" },
      { src: "/images/projects/nirrov/3.png", width: 1919, height: 909, caption: "Business intelligence: ASAPI ERP, Safeer Digital and Matrix ERP" },
      { src: "/images/projects/nirrov/2.png", width: 1919, height: 896, caption: "Sectors carousel: retail, logistics, healthcare, education" },
      { src: "/images/projects/nirrov/5.png", width: 1919, height: 898, caption: "Five-step methodology, from discovery to follow-up" },
      { src: "/images/projects/nirrov/4.png", width: 1919, height: 901, caption: "Service page: business excellence" },
    ],
    title: "Nirrov Website",
    logo: "/logo/brands/nirrov-mark.svg",
    liveUrl: "https://nirrov.com/ar",
    category: "Corporate Website",
    description:
      "The corporate website of Nirrov, a Riyadh company offering business intelligence, e-services, business excellence and advertising. It presents the services, the company's own products, the sectors it serves and a knowledge center.",
    highlight: "Arabic-first bilingual site with dark mode, structured data for SEO and a knowledge center for articles.",
    role: "Frontend Engineer",
    period: "Nirrov · 2026",
    impact: [
      { value: "AR/EN", label: "Arabic-first with RTL" },
      { value: "4", label: "Service lines, each with its own page" },
      { value: "SEO", label: "JSON-LD structured data per page" },
    ],
    contribution: [
      "Built the site in Next.js (App Router), TypeScript and Tailwind CSS: home, about, four service pages, knowledge center, contact and privacy.",
      "Made it Arabic-first with full RTL, an English version on locale-based routes (/ar, /en), and a light/dark theme.",
      "Built the hero slider, the tabbed about section (operate, grow, digital platforms), the sectors carousel and the five-step methodology section.",
      "Added a knowledge center for articles, and a products section linking the company's platforms (ASAPI ERP, Safeer Digital, Matrix ERP).",
      "Set up SEO in both languages: per-page metadata, Open Graph and JSON-LD structured data, plus a downloadable company profile and WhatsApp contact.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n (RTL)", "SEO"],
    visual: { kind: "website" },
    caseStudy: {
      overview:
        "nirrov.com is the main website of Nirrov, a Saudi company that helps organizations run better through ERP systems, digital e-services, business excellence programs and advertising.",
      businessProblem:
        "Nirrov offers very different services, from consulting to software products, to clients in many sectors. The site had to explain all of them clearly, in Arabic first, and lead each visitor to the right service or a direct contact.",
      myRole: "I built the website frontend: the page layouts, components, bilingual content structure, theming and SEO.",
      technicalChallenges: [
        "Organizing four service lines and several products so a visitor finds the right one quickly.",
        "Arabic-first RTL layouts and typography that still work in English.",
        "Getting a mostly Arabic site indexed well, with correct metadata in both languages.",
      ],
      keyDecisions: [
        "One service-page template reused for every service line, so new services take content only.",
        "Locale-based routing with separate metadata and JSON-LD per language.",
        "A knowledge center for articles, to bring search traffic and show the company's expertise.",
      ],
      result:
        "The site is live at nirrov.com in Arabic and English, presenting Nirrov's services, products and sectors with direct paths to contact, WhatsApp and the company profile.",
    },
  },
  {
    slug: "unique-home",
    group: "web",
    cover: { src: "/images/projects/unqhome/cover.png", width: 1919, height: 911, caption: "Arabic hero slider with project gallery" },
    gallery: [
      { src: "/images/projects/unqhome/cover.png", width: 1919, height: 911, caption: "Arabic hero slider with project gallery" },
      { src: "/images/projects/unqhome/1.png", width: 1919, height: 907, caption: "About section with experience and client counters" },
      { src: "/images/projects/unqhome/2.png", width: 1919, height: 904, caption: "Services: interior, villas & homes, and office design" },
      { src: "/images/projects/unqhome/3.png", width: 1919, height: 906, caption: "Team carousel: execution, project management, consulting" },
      { src: "/images/projects/unqhome/4.png", width: 1919, height: 906, caption: "Vision, mission and about accordion" },
    ],
    title: "Unique Home",
    liveUrl: "https://unqhome-client.vercel.app/ar",
    category: "Interior Design Company Website",
    description:
      "The website of Unique Home, an interior design, execution and turnkey home-furnishing company with 13+ years of experience. It presents custom kitchens and wardrobes made in the company's own factory, apartment furnishing, project management and ready-to-build designs.",
    highlight: "A visual, Arabic-first site with Framer Motion animations and content managed from Strapi.",
    role: "Frontend Developer",
    period: "Freelance · Aug 2025",
    impact: [
      { value: "AR/EN", label: "Arabic-first with RTL" },
      { value: "CMS", label: "Content and projects managed in Strapi" },
      { value: "Motion", label: "Animated sliders and sections" },
    ],
    contribution: [
      "Built the website in Next.js: home, about, projects, services and contact.",
      "Connected pages to a Strapi headless CMS, so the team updates projects, services and text without a developer.",
      "Built the hero slider, project gallery, services cards, team carousel and the vision/mission accordion.",
      "Added Framer Motion animations for slides, counters and section reveals, keeping pages smooth on mobile.",
      "Made it Arabic-first with RTL and an English version, with social links and a request form as the main call to action.",
    ],
    tech: ["Next.js", "React", "Strapi", "Framer Motion", "i18n (RTL)"],
    visual: { kind: "website" },
    caseStudy: {
      overview:
        "Unique Home designs and furnishes homes, villas and offices from start to finish: custom kitchens and wardrobes made from European materials in its own factory, apartment furnishing and decoration, and full project management with a dedicated project manager.",
      businessProblem:
        "An interior design company sells through visuals. Unique Home needed a site that shows its work beautifully, explains its services in Arabic first, and lets the team add new projects themselves.",
      myRole: "I built the frontend and connected it to the Strapi CMS.",
      technicalChallenges: [
        "Image-heavy pages that still load fast.",
        "Smooth animations that don't hurt performance or RTL layout.",
        "Letting non-technical staff manage projects and content in two languages.",
      ],
      keyDecisions: [
        "Strapi as a headless CMS, with Next.js fetching content per locale.",
        "Framer Motion for sliders and reveal animations, instead of heavy slider libraries.",
        "Optimized images with next/image for the large project galleries.",
      ],
      result:
        "The site presents Unique Home's services and projects in Arabic and English, and the team updates its portfolio from the CMS on its own.",
    },
  },
  {
    slug: "safeer-digital",
    group: "erp",
    featured: true,
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
    logo: "/logo/brands/safeer-digital-mark.svg",
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
    group: "ai",
    featured: true,
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
    group: "commerce",
    featured: true,
    cover: { src: "/images/projects/e-dukan/cover.webp", width: 1600, height: 755, caption: "Arabic-first landing page" },
    gallery: [
      { src: "/images/projects/e-dukan/cover.webp", width: 1600, height: 755, caption: "Arabic-first landing page" },
      { src: "/images/projects/e-dukan/1.webp", width: 1600, height: 763, caption: "Merchant sign-in by phone or email" },
    ],
    title: "e-Dukan",
    logo: "/logo/brands/e-dukan-mark.svg",
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
    slug: "voucher-buyer",
    group: "commerce",
    cover: { src: "/images/projects/voucher-buyer/1.png", width: 1919, height: 911, caption: "Brands catalogue: 100+ gift-card brands with live search" },
    gallery: [
      { src: "/images/projects/voucher-buyer/1.png", width: 1919, height: 911, caption: "Brands catalogue: 100+ gift-card brands with live search" },
      { src: "/images/projects/voucher-buyer/2.png", width: 1919, height: 906, caption: "Payout methods strip: local wallets, transfers and USDT" },
      { src: "/images/projects/voucher-buyer/cover.png", width: 1919, height: 905, caption: "Sign-in screen with WhatsApp support shortcut" },
    ],
    title: "Voucher Buyer",
    logo: "/logo/brands/voucher-buyer-mark.svg",
    liveUrl: "https://voucherbuyer.com/",
    category: "Gift-card Resale Platform",
    description:
      "A bilingual platform where people sell unused gift cards for cash. Users pick a brand from 100+ supported cards, submit their codes, and get paid to the payout method they choose after the team verifies the cards.",
    highlight: "Arabic/English with RTL, light and dark themes, and a payout flow covering local wallets, money transfers and USDT.",
    role: "Frontend Developer",
    period: "Freelance · 2023 – 2024",
    impact: [
      { value: "100+", label: "Supported gift-card brands" },
      { value: "AR/EN", label: "Bilingual UI with RTL" },
      { value: "8+", label: "Payout methods incl. USDT" },
    ],
    contribution: [
      "Built the public site and user area in Next.js 15 and TypeScript: landing page, how-it-works, brands, FAQ, sign-up, login and password recovery.",
      "Implemented Arabic/English localization with locale-based routing (/en, /ar), full RTL layout and a light/dark theme switch.",
      "Built a searchable brands catalogue and a payout-methods strip that shows the currencies each method supports (SYP, USDT).",
      "Connected the card-submission and payout-method flows to the backend REST API, with validated forms and clear error states.",
      "Added motion with Framer Motion and Lottie animations, and kept pages fast with SSR, Open Graph metadata and an Nginx-served deployment.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MUI", "Framer Motion"],
    visual: { kind: "commerce" },
    caseStudy: {
      overview:
        "Voucher Buyer lets people turn unused gift cards (Amazon, iTunes, PlayStation, Steam and more) into cash, paid out through local wallets, money-transfer offices or USDT.",
      businessProblem:
        "Selling a gift card used to mean finding a buyer in chat groups with no fixed rate and no trust. The business needed one trusted place that explains the process, lists supported brands and takes card submissions in Arabic and English.",
      myRole: "I built the frontend: the marketing pages, the authentication screens and the user flows for submitting cards and choosing a payout method.",
      technicalChallenges: [
        "One codebase serving Arabic (RTL) and English (LTR) with no layout breaks.",
        "Presenting 100+ brands and many payout methods in a way that is quick to search and scan on mobile.",
        "Keeping an animation-rich landing page fast and SEO-friendly.",
      ],
      keyDecisions: [
        "Locale-based routing in the Next.js App Router, so each language has its own indexable URLs.",
        "Tailwind CSS for layout and theming, with MUI used for complex form controls.",
        "WhatsApp kept as a direct contact channel on every brand card, since that is how most users ask for the day's rate.",
      ],
      result:
        "The platform is live at voucherbuyer.com, serving sellers in Arabic and English with a clear three-step flow from choosing a brand to getting paid.",
    },
  },
  {
    slug: "qr-code-germany",
    group: "saas",
    cover: { src: "/images/projects/qr-germany/cover.png", width: 1917, height: 907, caption: "Landing page: create your own QR codes" },
    gallery: [
      { src: "/images/projects/qr-germany/cover.png", width: 1917, height: 907, caption: "Landing page: create your own QR codes" },
      { src: "/images/projects/qr-germany/1.png", width: 1919, height: 899, caption: "Create QR: dynamic code types (invoice, CV, food, shop page, medical...)" },
      { src: "/images/projects/qr-germany/3.png", width: 1843, height: 844, caption: "More dynamic types, plus free static codes (e-mail, Giro code, contact data)" },
      { src: "/images/projects/qr-germany/2.png", width: 1839, height: 842, caption: "Invoice QR form with a live phone preview" },
      { src: "/images/projects/qr-germany/4.png", width: 1903, height: 855, caption: "QR designer: frame shapes, body shapes, eye styles and colors" },
      { src: "/images/projects/qr-germany/5.png", width: 1919, height: 905, caption: "Pricing: one-time payment plans with unlimited scans" },
    ],
    title: "QR Code Germany",
    liveUrl: "https://qrcodegermany.de/en",
    category: "QR Code SaaS Platform",
    description:
      "A platform where businesses and individuals create QR codes that link printed products, cards, vehicles and ads to digital content: websites, contact details, social media, invoices, menus, product information and more.",
    highlight: "16 dynamic QR types with live phone previews, a full QR designer and one-time-payment plans.",
    role: "Frontend Developer",
    period: "ELKOOD · Nov 2022",
    impact: [
      { value: "16", label: "Dynamic QR content types" },
      { value: "60+", label: "Frame shapes in the QR designer" },
      { value: "DE/EN", label: "Bilingual for the German market" },
    ],
    contribution: [
      "Built the frontend in Nuxt.js, Vue and TypeScript with Vuetify: landing, pricing, FAQ, contact, sign-up and login.",
      "Built the Create QR flow: a type picker for 16 dynamic codes (invoice, CV, food and medical products, shop page, business card, cars, PDF, video...) and free static codes (e-mail, Giro code, website, contact data).",
      "Built multi-step forms for each QR type with a live phone preview that updates as the user types, including file and logo upload.",
      "Built the QR designer: 60+ frame shapes with frame text and color, body shapes, eye styles and colors, then save & download.",
      "Implemented German/English localization and the pricing page with one-time-payment plans.",
    ],
    tech: ["Nuxt.js", "Vue", "TypeScript", "Vuetify"],
    visual: { kind: "saas" },
    caseStudy: {
      overview:
        "QR Code Germany turns a physical interaction into a digital one with a single scan. A QR code on a product, business card, vehicle, restaurant table or ad takes the customer straight to the right information.",
      businessProblem:
        "Most QR generators only make a plain link. Businesses in Germany wanted codes that open real content (an invoice, a menu, a product sheet, a contact card), look like their brand, and don't come with a monthly subscription.",
      myRole: "I built the frontend: the public pages, the QR creation flow, the per-type forms with live previews and the QR designer.",
      technicalChallenges: [
        "Supporting many QR types, each with its own fields and preview, without building 16 separate screens from scratch.",
        "Keeping the phone preview in sync with long forms as the user types.",
        "A designer with dozens of frames, shapes and colors that still renders a scannable code.",
      ],
      keyDecisions: [
        "One shared multi-step form layout and preview frame, with each QR type supplying only its own fields and template.",
        "Split the catalogue into dynamic (editable, paid) and free static codes, so users can start for free.",
        "Vuetify components for the forms and dialogs, to ship fast with a consistent UI.",
      ],
      result:
        "The platform is live at qrcodegermany.de. Businesses create branded QR codes for many use cases, preview them on a phone before printing, and pay once instead of monthly.",
    },
  },
  {
    slug: "jetorder",
    group: "commerce",
    title: "JetOrder",
    logo: "/logo/brands/jetorder.png",
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
    slug: "iqraa-dashboard",
    title: "Iqraa Dashboard",
    logo: "/logo/brands/iqra-mark.svg",
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

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
