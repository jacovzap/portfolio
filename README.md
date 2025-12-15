# Portfolio - Jacobo Covarrubias Zapata

High-performance portfolio showcasing full-stack engineering expertise and cloud architecture projects. Built with Astro and deployed on Cloudflare Pages.

[![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?style=flat&logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)

## Features

- Astro Islands Architecture for optimal performance
- Aceternity UI components with Framer Motion animations
- Mobile-first responsive design
- Dark theme with blue/indigo/purple gradients
- SEO optimized with perfect Lighthouse scores
- Zero-JS by default with partial hydration

## Tech Stack

### Core

- **Astro 5.x** - Static site generator
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### UI & Animations

- **Aceternity UI** - Component library
- **Framer Motion** - Animations
- **Simple Icons CDN** - Brand icons

### Deployment

- **Cloudflare Pages** - Edge deployment

## Project Structure

```
portfolio/
├── public/
│   └── Jacobo_Covarrubias.pdf
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── BackgroundBeams.tsx
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── InfiniteMovingCards.tsx
│   │   │   ├── Spotlight.tsx
│   │   │   └── TracingBeam.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Hero.tsx
│   │   └── TechStack.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── lib/
│       └── utils.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Sections

### Hero

Animated spotlight effects, gradient text, tech stack badges, CTAs

### Trusted Tech Stack

Infinite scrolling carousel with CDN-based colored icons
Technologies: AWS, TypeScript, Node.js, NestJS, Docker, Kubernetes, React, PostgreSQL, S3, SQS

### Featured Projects

Bento Grid layout with 5 case studies:

- High-Scale Event Notification Engine (AWS SNS/SQS)
- Financial Real-Time Sync (WebSockets, Kubernetes)
- ACSYS Resource Planning (Full-stack ERP)
- High-Performance Media Streaming (Next.js)
- Medical Practice SaaS (Pre-MVP)

### Professional Journey

Animated timeline with 4 roles and achievement-focused descriptions

### Contact

Download CV & Email CTAs with BackgroundBeams animation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
git clone https://github.com/jacovzap/portfolio.git
cd portfolio
npm install
npm run dev
```

Development server: `http://localhost:4321`

### Build

```bash
npm run build
npm run preview
```

## Performance

- Lighthouse Score: 100/100
- First Contentful Paint: < 0.5s
- Time to Interactive: < 1.5s
- Total Bundle Size: < 100KB
- 3 interactive components with Islands Architecture

## Deployment

### Cloudflare Pages Configuration

- **Build command**: `npm run build`
- **Build output**: `dist`
- **Node version**: 18

## License

MIT License

## Contact

**Jacobo Covarrubias Zapata**

- Email: jacobo.covarrubias.zapata@gmail.com
- LinkedIn: [linkedin.com/in/jacovzap](https://linkedin.com/in/jacovzap)
