# ⚡ Jacobo Covarrubias - Portfolio

Personal portfolio showcasing fullstack cloud engineering expertise. Built with Astro, React, and deployed on Cloudflare Pages.

[![Live Site](https://img.shields.io/badge/Live-jacovzap.dev-blue?style=flat&logo=cloudflare)](https://jacovzap.dev)
[![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?style=flat&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)

<img width="1888" height="925" alt="image" src="https://github.com/user-attachments/assets/74f6f614-08e9-4e12-a03c-a9c5d9099d06" />

---

## ✨ Features

- **Astro Islands** - Zero JS by default, hydrate only what's needed
- **Interactive Tech Stack** - Draggable infinite carousel with smooth resume animation
- **Case Study Pages** - Markdown-driven project pages with custom components
- **Image Lightbox** - Click-to-zoom gallery with gestures & keyboard navigation
- **Dark Theme** - Sleek dark UI with blue/indigo accent gradients
- **Responsive** - Mobile-first design across all breakpoints

## 🛠 Tech Stack

| Category       | Technologies                                |
| -------------- | ------------------------------------------- |
| **Framework**  | Astro 5, React 18                           |
| **Language**   | TypeScript                                  |
| **Styling**    | Tailwind CSS, Framer Motion                 |
| **Content**    | Astro Content Collections (Markdown)        |
| **Deployment** | Cloudflare Pages (Edge)                     |
| **Icons**      | Simple Icons CDN, Tabler Icons, Custom SVGs |

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Twemoji lightning bolt
│   ├── Jacobo_Covarrubias.pdf
│   ├── icons/               # Custom AWS/S3/SNS icons
│   ├── images/              # Static images
│   └── projects/            # Project screenshots
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── InfiniteMovingCards.tsx
│   │   │   ├── ImageLightbox.tsx
│   │   │   ├── ChallengeAccordion.tsx
│   │   │   ├── TechChips.tsx
│   │   │   └── ...
│   │   ├── Hero.tsx
│   │   ├── TechStack.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── projects/        # Case study markdown files
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects/[slug].astro
│   └── styles/
│       └── global.css
└── astro.config.mjs
```

## 📄 Sections

### Home Page

- **Hero** - Name, title, description with spotlight effects
- **Tech Stack** - Interactive carousel (drag to scroll, auto-resumes)
- **Featured Projects** - Bento grid linking to case studies
- **Experience** - Animated timeline of professional journey
- **Contact** - Download CV & email CTAs

### Case Studies

Each project has a dedicated page with:

- Custom headers with project metadata
- Challenge/solution accordions
- Tech stack breakdown
- Screenshot gallery with lightbox
- Architecture insights

**Current Projects:**

- Event Notification Engine (AWS SNS/SQS)
- Financial Reconciliation System (WebSockets, K8s)
- Industrial ERP System (Full-stack)
- MediAsist SaaS (Healthcare Pre-MVP)

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/jacovzap/portfolio.git
cd portfolio

# Install
npm install

# Development
npm run dev        # http://localhost:4321

# Production
npm run build
npm run preview
```

## 📦 Deployment

Configured for **Cloudflare Pages**:

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Node version     | 18+             |

## 📊 Performance

- Lighthouse: 100/100
- First Contentful Paint: < 0.5s
- Only 5 hydrated components (Islands Architecture)

---

## 📬 Contact

**Jacobo Covarrubias Zapata**  
Fullstack Cloud Developer

- 📧 [jacobo.covarrubias.zapata@gmail.com](mailto:jacobo.covarrubias.zapata@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/jacovzap)
- 🌐 [jacovzap.dev](https://jacovzap.dev)

---

MIT License © 2024
