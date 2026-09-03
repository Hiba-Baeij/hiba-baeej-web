# Hiba Baeij Portfolio — UI/UX Implementation Specification

## Goal

Build a premium personal portfolio for **Hiba Baeij**, positioned as:

> **Senior Frontend & Full-Stack Engineer building scalable enterprise platforms, SaaS products, and AI-powered applications.**

Use **Aceternity UI** components extensively, but selectively. The site must feel like a sophisticated engineering/product portfolio, not a demo page where every component is animated simply because it exists.

Aceternity UI provides React/Next.js components with Tailwind CSS and Motion, including Hero sections, Bento Grid, Floating Dock, Timeline, Background Beams, Spotlight, Moving Border, Tracing Beam, Text Generate Effect, Card Hover Effect, and more. Prefer the official component implementations and installation patterns from:
https://ui.aceternity.com/components

Useful official references:

- Spotlight: https://ui.aceternity.com/components/spotlight
- Background Beams: https://ui.aceternity.com/components/background-beams
- Bento Grid: https://ui.aceternity.com/bento-grid
- Timeline: https://ui.aceternity.com/components/timeline
- Floating Dock: https://ui.aceternity.com/components/floating-dock
- Moving Border: https://ui.aceternity.com/components/moving-border
- Hero Highlight: https://ui.aceternity.com/components/hero-highlight

---

# Design Direction

## Overall Feel

Create a:

- Premium
- Technical
- Modern
- Dark-first
- Minimal
- High-contrast
- Editorial
- Product-oriented
- Engineering-focused

portfolio.

The site should feel closer to a high-end SaaS/product landing page than a traditional developer CV.

### Avoid

- Generic portfolio templates
- Excessive neon
- Excessive glassmorphism
- Huge gradients everywhere
- Skill percentage bars
- Generic "passionate developer" copy
- Too many 3D effects
- Animating every element
- Random decorative blobs
- Fake statistics
- Unnecessary terminal animations
- Overloading the page with Aceternity components

Animation should support hierarchy and interaction.

---

# Recommended Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- Aceternity UI
- Motion / Framer Motion
- shadcn/ui
- MDX for case studies
- Lucide icons

Optional:

- GitHub API
- Resend
- Vercel Analytics
- Three.js only if genuinely useful

---

# Global Layout

Use a centered content container around:

`max-width: 1200px - 1280px`

Desktop:

- generous vertical spacing
- 24px+ horizontal page padding
- 12-column grid where useful

Mobile:

- 16px horizontal padding
- simplified animations
- no horizontal overflow
- touch-friendly navigation

Use a consistent section rhythm:

- Small eyebrow
- Large heading
- Supporting paragraph
- Main visual/content
- Optional CTA

---

# Navigation

## Component

Use:

**Aceternity Floating Dock**

Official component:
https://ui.aceternity.com/components/floating-dock

Use it as the primary desktop navigation.

Navigation items:

- Home
- Work
- Expertise
- Experience
- About
- Contact

Also include:

- GitHub
- LinkedIn

### Behavior

- Floating/sticky navigation
- Appears near bottom or top depending on chosen composition
- Magnetic/scale hover behavior from the component
- Smooth anchor scrolling
- Active section indicator
- Mobile version must remain usable

Do NOT use a huge traditional navbar.

---

# Section 01 — Hero

## Purpose

Immediately establish seniority and positioning.

## Aceternity Components

Use:

1. `Spotlight New` or `Spotlight`
2. `Text Generate Effect`
3. `Moving Border` for primary CTA
4. Optional `Background Beams`

Official references:
https://ui.aceternity.com/components/spotlight-new
https://ui.aceternity.com/components/spotlight
https://ui.aceternity.com/components/moving-border
https://ui.aceternity.com/components/background-beams

## Layout

Full viewport hero.

Left/main content:

Eyebrow:

`SENIOR FRONTEND & FULL-STACK ENGINEER`

Headline:

> I build software that scales beyond the first version.

Supporting copy:

> Building scalable enterprise platforms, SaaS products, and AI-powered applications with modern TypeScript architecture.

Technology line:

`React · Next.js · TypeScript · Node.js · NestJS · AI Agents`

CTA:

`View My Work`

Secondary:

`Let's Talk`

## Visual

Right side or background:

Create a sophisticated abstract engineering visual.

Possible visual:

- subtle architecture graph
- animated nodes
- API → Application → Database flow
- glowing connection lines
- code fragments
- enterprise system topology

Do NOT use a generic laptop mockup.

## Animation

On load:

1. Eyebrow fades/slides in.
2. Headline uses Text Generate Effect.
3. Supporting copy fades in.
4. CTA appears.
5. Background spotlight/beams animate slowly.

Keep animation subtle.

---

# Section 02 — Trust / Experience Strip

## Purpose

Establish credibility before showing projects.

## UI

Use an elegant horizontal logo/experience strip.

Companies / products:

- Nirrov
- Mind Torches
- ELKOOD
- ASAPI ERP
- Safeer Digital
- Matrix ERP
- JetOrder

If company logos are unavailable, use typographic labels.

## Aceternity

Use:

- Infinite Moving Cards

or a simple logo cloud style.

Do not fabricate logos.

---

# Section 03 — Metrics

## Purpose

Communicate seniority quickly.

Use a clean 4-column stats layout.

Suggested:

`5+`  
Years Engineering

`3+`  
Enterprise Platforms

`10+`  
Products & Applications

`Multiple`  
Business Domains

IMPORTANT:

Only display metrics that are factually supported.

## Aceternity

Use subtle card hover interaction.

Do NOT use animated counters unless actual numeric values are available.

---

# Section 04 — What I Build

## Purpose

Explain capabilities before technologies.

## Aceternity

Use:

**Bento Grid**

Official:
https://ui.aceternity.com/bento-grid

Create a 2x2 or asymmetric bento layout.

### Card 1

## Enterprise Platforms

Complex business applications supporting operational workflows, large datasets, permissions, reporting, and multiple business domains.

Tags:

`ERP` `CRM` `Finance` `HR` `Operations`

Visual:

subtle dashboard/architecture illustration.

### Card 2

## SaaS Products

Scalable web applications with reusable architecture, authentication, APIs, dashboards, and modern user experiences.

Tags:

`SaaS` `Multi-Tenant` `Admin Portals`

### Card 3

## AI-Powered Applications

Applications enhanced with AI agents, intelligent workflows, automation, and LLM-powered capabilities.

Tags:

`AI Agents` `LLMs` `Automation` `Agentic Workflows`

This card should receive slightly stronger visual emphasis.

### Card 4

## Full-Stack Applications

End-to-end applications covering frontend, APIs, databases, authentication, and deployment.

Tags:

`Next.js` `Node.js` `NestJS` `PostgreSQL` `Prisma`

---

# Section 05 — Featured Work

## Purpose

This is the most important portfolio section.

Do NOT present projects as simple cards.

Each featured project should look like a mini case study.

## Aceternity

Use a combination of:

- Card Hover Effect
- 3D Card Effect, very subtly
- Moving Border
- Parallax Scroll if useful

Official component catalog:
https://ui.aceternity.com/components

---

# Project Card — ASAPI ERP

## Category

Enterprise Resource Planning

## Title

ASAPI ERP

## Description

A flexible ERP platform connecting an organization's operations within a unified system, providing dashboards and reports for better business decisions.

## Highlight

> Building complex business workflows into a consistent, reusable enterprise interface.

## Technologies

React · TypeScript · MUI · React Query · REST APIs

## Visual

Use a large dashboard screenshot.

Add subtle animated overlays showing:

- Inventory
- Finance
- HR
- Sales
- Purchasing
- Accounting

## Interaction

Hover:

- screenshot scales slightly
- metadata slides in
- border becomes subtly active
- project CTA appears

---

# Project Card — Safeer Digital

## Category

Embassy Digital Platform

## Title

Safeer Digital (EDC)

## Description

A specialized digital platform for embassies and diplomatic missions, designed to deliver digital services, improve beneficiary experience, and automate workflows.

## Highlight

> Designing complex service workflows and hierarchical interfaces for diplomatic digital services.

## Technologies

Vue.js · TypeScript · Nuxt.js · Vuetify · REST APIs

## Visual

Show service portal UI.

If no real screenshots can be publicly shown, create a representative mockup without exposing confidential data.

---

# Project Card — Matrix ERP

## Category

Enterprise ERP Platform

## Title

Matrix ERP

## Description

A scalable ERP platform for operational, financial, and administrative processes.

## Highlight

> Building reusable systems across inventory, HR, finance, sales, purchasing, and accounting.

## Technologies

React · TypeScript · MUI · React Query · REST APIs

## Visual

Use dashboard composition with multiple modules.

---

# Project Card — JetOrder

## Category

Store Management Platform

## Title

JetOrder

## Description

A large-scale store management platform migrated from Nuxt 2 to Vue 3 and TypeScript.

## Highlight

> Modernizing a large legacy frontend without losing business functionality.

## Technologies

Vue 3 · Nuxt.js · TypeScript

---

# Section 06 — Selected Products

Use a compact project grid for:

- Voucher Buyer
- Paradise Road
- Iqraa Dashboard
- Dental Clinic Management System

These should be secondary projects.

Use:

**Card Hover Effect**

Keep descriptions short.

Do not give these projects the same visual weight as ASAPI ERP, Safeer Digital, Matrix ERP, and JetOrder.

---

# Section 07 — AI & Agentic Engineering

## Purpose

This is a differentiator and should be visually distinct.

## Heading

> Building with AI, not just using AI.

## Supporting Text

> I use AI as an engineering multiplier to automate repetitive work, accelerate implementation, and improve development velocity while keeping architecture, business logic, security, and quality under engineering control.

## Aceternity

Use:

- Background Beams
- Card Spotlight
- Moving Border
- Terminal
- Sparkles, but very subtly

Official:
https://ui.aceternity.com/components/background-beams
https://ui.aceternity.com/components/card-spotlight

## Visual Concept

Create an animated engineering workflow:

`Requirement`

↓

`AI Agent`

↓

`Context`

↓

`Implementation`

↓

`Tests / Review`

↓

`Human Engineering Decision`

The visual should communicate that AI is part of the engineering workflow.

## Capabilities

Create interactive cards:

- AI Coding Agents
- Agentic Development Workflows
- LLM Integration
- Prompt & Context Engineering
- AI-assisted Debugging
- AI-assisted Refactoring
- Code Review Automation
- Development Automation

## Important Positioning

Do NOT claim:

- ML Engineer
- AI Researcher
- Machine Learning Specialist

Position as:

> **AI-Assisted & Agentic Software Engineer**

---

# Section 08 — Engineering Expertise

## Purpose

Demonstrate technical depth without dumping a giant list.

## Aceternity

Use:

**Bento Grid**

Create groups.

### Frontend Engineering

React  
Next.js  
Vue.js  
Nuxt.js  
TypeScript  
Tailwind CSS  
MUI  
Vuetify

### Full-Stack

Next.js  
Node.js  
NestJS  
REST APIs  
PostgreSQL  
Prisma  
Authentication  
Authorization

### State & Data

TanStack Query  
React Query  
Zustand  
Redux  
Pinia  
Caching  
Optimistic Updates

### Architecture

Modular Architecture  
Component Systems  
API-driven Architecture  
Design Patterns  
Scalable Frontend Architecture  
Performance Optimization

### DevOps

Git  
GitHub  
Docker  
Linux  
CI/CD  
Nginx  
PM2  
Vercel  
Coolify

---

# Section 09 — How I Work

## Purpose

Show engineering maturity.

## Aceternity

Use:

**Tracing Beam + Timeline**

Official:
https://ui.aceternity.com/components/timeline

The timeline should be vertically connected by a tracing beam.

Steps:

### 01 — Understand the Problem

Start from business requirements.

### 02 — Design the Architecture

Define boundaries between UI, state, APIs, business logic, and data.

### 03 — Build Reusable Systems

Create components and patterns that scale.

### 04 — Integrate & Validate

Handle APIs, errors, loading states, permissions, caching, validation, and edge cases.

### 05 — Optimize

Rendering, data fetching, caching, bundle size, and UX.

### 06 — Automate

Use AI and automation to eliminate repetitive engineering work.

---

# Section 10 — Experience

## Aceternity

Use:

**Timeline**

This should be one of the strongest sections.

Timeline:

### 2023 — Present

## Nirrov

Frontend Developer

KSA · Remote

Highlights:

- Enterprise ERP systems
- Safeer Digital embassy platform
- React and Vue applications
- TypeScript
- Complex data-driven interfaces
- Reusable component architecture
- AI-assisted development workflows

### 2022 — 2023

## Mind Torches

Frontend Developer

Jordan · Remote

Highlights:

- JetOrder
- Nuxt 2 → Vue 3 migration
- TypeScript
- Large-scale frontend modernization

### 2023 — 2024

## Freelance

Frontend Developer

Selected products:

- Voucher Buyer
- Paradise Road
- Iqraa Dashboard
- Dental Clinic Management System

### 2021 — 2023

## ELKOOD

Frontend Developer

Syria · On-site

Highlights:

- CRM
- E-commerce
- Educational platforms
- Vue.js
- Nuxt.js
- SSR
- SEO

---

# Section 11 — About

## Heading

> Engineering products, not just interfaces.

## Layout

Two-column layout.

Left:

Professional portrait or abstract identity visual.

Right:

Short story:

> I'm an engineer who enjoys working on problems that are more complicated than they initially appear.
>
> My experience has primarily focused on business applications, enterprise platforms, ERP systems, dashboards, and SaaS products.
>
> I care about more than making an interface look good. I'm interested in how the entire system works: how data moves through the application, how components communicate, how APIs are designed, how architecture evolves, and how engineering teams can deliver faster without creating technical debt.
>
> I'm particularly interested in the intersection between modern web development and AI-assisted engineering.

## Optional

Use Animated Tooltip for:

- React
- Next.js
- TypeScript
- Node.js
- AI

Official:
https://ui.aceternity.com/components/animated-tooltip

---

# Section 12 — Education

Keep this intentionally compact.

## Bachelor of Information Engineering

University of Aleppo

Aleppo, Syria · Graduated November 2024

Use a clean card, not a large section.

---

# Section 13 — GitHub / Engineering Activity

## Purpose

Provide evidence that the developer actively builds.

If GitHub API integration is available:

Display:

- recent repositories
- contribution activity
- selected open-source projects
- language distribution
- recent commits

Do NOT create fake activity.

## UI

Use:

- Card Hover Effect
- Animated Tooltip
- Infinite Moving Cards where useful

---

# Section 14 — Contact CTA

## Purpose

End with a strong hiring-oriented CTA.

## Heading

> Let's build something meaningful.

## Text

> I'm interested in working with ambitious teams building SaaS products, enterprise platforms, AI-powered applications, and technically challenging products.

## CTA

Primary:

`Start a Conversation`

Secondary:

`View GitHub`

## Aceternity

Use:

**Moving Border**

for the main CTA.

Use:

**Spotlight New**

for the section background.

---

# Section 15 — Footer

Minimal footer.

Content:

Hiba Baeij

Senior Frontend & Full-Stack Engineer

Links:

- GitHub
- LinkedIn
- Email

Copyright:

© 2026 Hiba Baeij

Small line:

> Built with Next.js, TypeScript, and modern web technologies.

---

# Animation Rules

Animation is important, but restraint is more important.

## Use animation for:

- Page entrance
- Scroll reveal
- Project hover
- Navigation interaction
- CTA emphasis
- Background atmosphere
- Timeline progress
- Case study transitions

## Avoid:

- Constant movement
- Excessive particle effects
- Large parallax on mobile
- Animations that delay content
- Animating every word
- Infinite flashy gradients

## Motion principle

> The interface should feel alive, not busy.

---

# Responsive Rules

## Desktop

Use:

- large typography
- 2-column layouts
- bento grids
- timeline
- floating navigation
- project visuals

## Tablet

Reduce:

- grid complexity
- animation intensity
- visual density

## Mobile

Prioritize:

- readable typography
- single-column layout
- simple project cards
- accessible navigation
- reduced background effects

Disable or simplify expensive visual effects on mobile where appropriate.

---

# Accessibility

The portfolio must meet modern accessibility expectations.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Good contrast
- Reduced motion support
- Alt text for images
- Accessible buttons
- Accessible navigation
- No information conveyed only through animation
- Respect `prefers-reduced-motion`

---

# Performance

The portfolio itself should demonstrate engineering quality.

Requirements:

- Next.js optimized images
- Lazy load non-critical visuals
- Avoid unnecessary client components
- Keep animations lightweight
- Minimize JavaScript where possible
- Use server components by default
- Avoid loading large libraries unnecessarily
- Optimize fonts
- Optimize project screenshots
- Good Lighthouse scores

Do not turn the portfolio into a 2MB animation experiment.

---

# SEO

Implement:

- Strong title
- Meta description
- Open Graph
- Twitter/X metadata
- Canonical URL
- JSON-LD Person schema
- Sitemap
- Robots
- Semantic headings
- Descriptive project URLs

Suggested title:

> Hiba Baeij — Senior Frontend & Full-Stack Engineer

Suggested description:

> Senior Frontend & Full-Stack Engineer building scalable enterprise platforms, SaaS products, and AI-powered applications with React, Next.js, TypeScript, and Node.js.

---

# Suggested Routes

Main:

`/`

Projects:

`/work`

Individual projects:

`/work/asapi-erp`
`/work/safeer-digital`
`/work/matrix-erp`
`/work/jetorder`
`/work/voucher-buyer`

Optional:

`/about`
`/experience`
`/contact`

---

# Recommended Component Mapping

| Website Section   | Aceternity Component                 |
| ----------------- | ------------------------------------ |
| Navigation        | Floating Dock                        |
| Hero              | Spotlight New + Text Generate Effect |
| Hero Background   | Background Beams                     |
| Hero CTA          | Moving Border                        |
| Experience Strip  | Infinite Moving Cards                |
| Metrics           | Card Hover Effect                    |
| What I Build      | Bento Grid                           |
| Featured Projects | Card Hover Effect + 3D Card          |
| AI Section        | Card Spotlight + Background Beams    |
| Expertise         | Bento Grid                           |
| How I Work        | Timeline + Tracing Beam              |
| Experience        | Timeline                             |
| About             | Animated Tooltip                     |
| GitHub            | Card Hover Effect                    |
| Contact           | Spotlight New + Moving Border        |
| Footer            | Spotlight / subtle background        |

---

# Critical Design Principle

Do not use every Aceternity component simply because the library contains it.

The site should demonstrate **taste**.

The most impressive portfolio is not the one with the most effects.

It is the one where every interaction has a reason.

The final result should make a hiring manager think:

> "This person understands frontend engineering, full-stack systems, enterprise software, product thinking, and modern AI development."

Not:

> "Someone discovered Aceternity UI."

---

# Final Content Positioning

The website should consistently communicate:

> **Hiba is a Senior Frontend & Full-Stack Engineer who can take ownership of complex software products, build scalable frontend and full-stack systems, understand enterprise business requirements, and use modern AI/agentic tooling to increase engineering velocity without sacrificing quality.**

The first 30 seconds of the website should communicate this clearly.
