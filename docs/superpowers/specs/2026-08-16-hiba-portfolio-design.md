# Hiba Baeij Portfolio — Design Specification

Date: 2026-08-16

## Goal

Build a premium personal portfolio website for **Hiba Baeij**, positioned as a **Senior Frontend & Full-Stack Engineer** specializing in enterprise platforms, ERP systems, SaaS products, full-stack web applications, and AI-powered / AI-assisted & agentic software engineering.

The portfolio must not feel like a generic frontend developer portfolio or a simple online CV. It must communicate engineering ownership, enterprise experience, full-stack capability, and practical AI/agentic engineering within the first 30 seconds.

Core message:

> **Hiba is a Senior Frontend & Full-Stack Engineer who can take ownership of complex software products, build scalable frontend and full-stack systems, understand enterprise business requirements, and use modern AI/agentic tooling to increase engineering velocity without sacrificing quality.**

## Positioning

- **Primary title:** Senior Frontend & Full-Stack Engineer
- **Main value proposition:** Building scalable digital products, enterprise platforms, and AI-powered applications.
- **Primary headline:** "I build software that scales beyond the first version."
- **Secondary positioning:** AI-Assisted & Agentic Software Engineering (explicitly NOT ML researcher / AI scientist / machine learning specialist — do not claim expertise in ML).

## Constraints

1. **Replace** the existing Avento AgencyOS landing page at `/` (approach A: replace in-place).
2. **Follow the Aceternity UI spec** (`hiba-portfolio-design.md`): install Aceternity UI components via the shadcn CLI (`npx shadcn@latest add @aceternity/<component>`), used selectively and with taste.
3. **Multi-page:** `/`, `/work`, `/work/[slug]`.
4. **TypeScript content modules** (not MDX) as the single source of truth for all copy/data.
5. **Placeholder profile links** for GitHub, LinkedIn, and email (clearly marked, replaceable before launch).
6. **Code-drawn abstract visuals** for projects — no fabricated screenshots, no invented metrics, no fake logos. Typographic labels for the experience strip.
7. **GitHub section is static** (placeholder repo data). Live GitHub API integration is deferred; the API is wired later once a real handle exists.
8. **Visual direction:** evolve the existing dark theme (near-black `#010104` background, tuned neutral/blue accent), keep Satoshi headings + Inter body, drop the Caveat handwriting font from the portfolio look.

## Architecture

- Keep the app shell, `Providers`, `FlareCursor`, `LoadingScreen`, `globals.css` theme tokens, and `/dashboard` route untouched.
- Rebuild the `(marketing)` route group as the portfolio.
- Delete unused Avento marketing components and their constants (see Cleanup).
- All content/data lives in `src/constants/portfolio/*.ts`:
  - `site.ts` — name, role, tagline, headline, description, social links (placeholders), contact email (placeholder), metrics.
  - `projects.ts` — featured projects (ASAPI ERP, Safeer Digital, Matrix ERP, JetOrder) with full case-study fields + selected products (Voucher Buyer, Paradise Road, Iqraa Dashboard) with lighter fields.
  - `experience.ts` — roles (Nirrov, Mind Torches, Freelance, ELKOOD) + education + soft skills + languages.
  - `expertise.ts` — capability groups (Frontend, Full-Stack, State & Data, Architecture, DevOps) + What-I-Build cards + AI capability chips + How-I-Work steps.
  - `repos.ts` — placeholder GitHub repos for the static engineering-activity section.
- A small helper to build `generateStaticParams` / lookups for case-study routes.

## Routes

- `/` — single-page homepage with all sections.
- `/work` — featured projects listing (case-study cards + selected products grid).
- `/work/[slug]` — case-study page for `asapi-erp`, `safeer-digital`, `matrix-erp`, `jetorder`. Unknown slugs call `notFound()`. Pages are static via `generateStaticParams`.

## Homepage Sections (in order)

1. **Hero** — `Spotlight` + `Background Beams` background; `Moving Border` on primary CTA; animated headline. Eyebrow `SENIOR FRONTEND & FULL-STACK ENGINEER`; headline "I build software that scales beyond the first version."; supporting copy; tech line `React · Next.js · TypeScript · Node.js · NestJS · AI Agents`; CTAs `View My Work` (→ `/work`) + `Get in Touch` (→ contact) + GitHub + LinkedIn. Right-side code-drawn architecture-graph visual (API → Application → Database nodes, animated connection lines). No generic laptop mockup.
2. **Trust / Experience strip** — typographic marquee (`Nirrov · Mind Torches · ELKOOD · ASAPI ERP · Safeer Digital · Matrix ERP · JetOrder`) using the existing `Marquee` UI component. No fabricated logos.
3. **Metrics** — 4-column stats, plain typography (no animated counters): `5+ Years Engineering`, `3+ Enterprise Platforms`, `10+ Products & Applications`, `Multiple Business Domains`. Only factually supported numbers.
4. **What I Build** — `Bento Grid` (2×2): Enterprise Platforms, SaaS Products, AI-Powered Applications (slightly stronger visual emphasis), Full-Stack Applications. Tags as pills.
5. **Featured Projects** — 4 case-study cards using `Card Hover Effect` + subtle `3D Card`; each a mini case study with highlight quote, tech stack, code-drawn abstract visual, and CTA to `/work/[slug]`.
6. **AI & Agentic Engineering** — `Card Spotlight` + `Background Beams`. Heading "Building with AI, not just using AI."; supporting copy; animated workflow visual (`Requirement → AI Agent → Context → Implementation → Tests/Review → Human Engineering Decision`); 8 capability chips (AI Coding Agents, Agentic Development Workflows, LLM Integration, Prompt & Context Engineering, AI-assisted Debugging, AI-assisted Refactoring, Code Review Automation, Development Automation). Positioned as AI-Assisted & Agentic Software Engineer.
7. **Engineering Expertise** — `Bento Grid` with 5 groups (Frontend Engineering, Full-Stack Development, State & Data Management, Architecture, DevOps & Engineering Tools). No skill bars.
8. **How I Work** — `Timeline` + `Tracing Beam`, six numbered steps (01 Understand → 02 Design Architecture → 03 Build Reusable Systems → 04 Integrate & Validate → 05 Optimize → 06 Automate).
9. **Experience** — `Timeline` for 4 roles: Nirrov (KSA · Remote · Oct 2023 – Present), Mind Torches (Jordan · Remote · Apr 2022 – Oct 2023), Freelance (Sep 2023 – Oct 2024), ELKOOD (Syria · On-site · Jan 2021 – Aug 2023), with highlights.
10. **About** — two-column layout; heading "Engineering products, not just interfaces."; story copy; optional `Animated Tooltip` for core tech.
11. **Education + Soft Skills + Languages** — compact cards: Bachelor of Information Engineering (University of Aleppo, Syria · Graduated Nov 2024); soft-skill chips; Arabic (Native) / English (Professional).
12. **GitHub / Engineering Activity** — static showcase of placeholder repos using `Card Hover Effect`; labeled clearly as awaiting real data; GitHub API integration deferred.
13. **Contact CTA** — `Spotlight New` background; `Moving Border` primary CTA; heading "Let's build something meaningful."; copy; CTAs LinkedIn / GitHub / Email.
14. **Footer** — minimal: Hiba Baeij, Senior Frontend & Full-Stack Engineer, links (GitHub/LinkedIn/Email), © 2026 Hiba Baeij, "Built with Next.js, TypeScript, and modern web technologies."

## Navigation

- `Floating Dock` (Aceternity) as primary desktop nav: Home, Work, Expertise, Experience, About, Contact + GitHub + LinkedIn.
- Anchor scrolling, active-section indicator, magnetic/scale hover.
- Mobile: usable menu (compact bottom dock or minimal hamburger/sheet) with touch-friendly targets, no horizontal overflow.

## Case Study Page (`/work/[slug]`)

Layout: sticky side panel (title, category, role/period, tech stack, link-back) + main content column following the writing pattern:

Overview → Business Problem → My Role → Technical Challenges → Key Engineering Decisions → Result / Impact → Technologies.

- Rendered from `projects.ts`; `notFound()` for unknown slugs.
- Static generation via `generateStaticParams` + `generateMetadata` (title/description/canonical per project).
- Subtle `Tracing Beam`-style scroll progress. Code-drawn abstract visual at top.

## Theme / Visual System

- Evolve existing dark tokens: keep `#010104` background; tune accent toward refined neutral/blue; remove Caveat (handwriting) from portfolio look; keep Satoshi headings + Inter body.
- Per spec: minimal gradients, no glassmorphism overload, no excessive neon, generous spacing, strong hierarchy, `prefers-reduced-motion` respected, accessible contrast and focus states, semantic HTML, keyboard navigation.
- Restraint: animation supports hierarchy and interaction; the interface should feel alive, not busy.

## SEO / Metadata

- Route-level `generateMetadata`: title "Hiba Baeij — Senior Frontend & Full-Stack Engineer", description, Open Graph, Twitter/X, canonical.
- JSON-LD Person schema on `/`.
- Sitemap + robots.txt.
- Semantic headings; descriptive project URLs.

## Error Handling

- Unknown case-study slugs → `notFound()`.
- Placeholder social links clearly marked in `site.ts` for easy replacement.
- GitHub section degrades gracefully to static placeholder content (no API calls in this iteration).

## Testing / Verification

- `pnpm build` must pass (TypeScript + Next build).
- Dev-server smoke check: all homepage sections render; `/work` and `/work/[slug]` resolve; unknown slug → 404; anchor links work; mobile nav usable; reduced-motion does not break layout.
- Manual Lighthouse smoke check (performance / accessibility).

## Cleanup (delete unused Avento marketing files)

Components removed from `src/components/marketing/`: `hero`, `dashboard`, `socials`, `difference`, `workflow`, `capibilities`, `integrations`, `membership`, `wall-of-love`, `cta`, `navbar`, `mobile-menu`, `footer`. Related constants removed from `src/constants/`: `capabilities`, `difference`, `integrations`, `membership`, `testimonials`, `workflow`, and any routes no longer used. Existing `container`, `wrapper`, `background`, `loading-screen`, `providers`, `flare-cursor`, `icons` global components are reused where appropriate.

## Out of Scope (this iteration)

- Live GitHub API integration.
- Real profile links, logos, and screenshots (placeholders/code-drawn visuals only).
- MDX content pipeline.
- Resend/contact form, analytics.
- `/about`, `/experience`, `/contact` as separate routes.
- Light theme.
