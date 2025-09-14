# Heleno Vitor Matos Leite — Portfolio (Next.js 14)

Production-ready, responsive, accessible portfolio for a front-end developer based in Dublin, Ireland.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom theme tokens)
- shadcn/ui primitives (Button, Card, Badge, Dialog, Input, Textarea, Tabs)
- Framer Motion (reduced motion respected)
- MDX (local files under `src/content/projects`)
- No backend; contact form posts to Formspree
- ESLint + Prettier

## Getting Started

1. Install dependencies:

```
npm install
```

2. Run the dev server:

```
npm run dev
```

Visit http://localhost:3000.

3. Build for production:

```
npm run build && npm start
```

## Project Structure

```
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    contact/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    sitemap.ts
    robots.ts
  components/
    navbar.tsx, footer.tsx, hero.tsx, project-card.tsx, tech-badges.tsx,
    timeline.tsx, contact-card.tsx, section.tsx
    ui/ (shadcn) button.tsx, card.tsx, badge.tsx, dialog.tsx, input.tsx, textarea.tsx, tabs.tsx
  lib/
    mdx.ts, projects.ts, seo.ts, utils.ts
  content/
    projects/
      odontoprev-redesign.mdx
      ionic-features.mdx
      ui-components-library.mdx
styles/
  globals.css
public/
  images/
    profile-heleno.jpg (add your photo here)
```

## Adding a New Project (MDX)

1. Create a new `.mdx` file under `src/content/projects/your-project.mdx` with frontmatter:

```
---
title: "Project Title"
date: "2024-06-01"
summary: "Short summary"
stack: ["Vue.js", "Vite"]
role: "Your Role"
impact: ["Result 1", "Result 2"]
links:
  repo: "https://github.com/..."
  demo: "https://..."
cover: "https://images.unsplash.com/..." # optional
---

## Problem
...

## Solution
...

## Impact/Results
...

## Stack
...

## Links
...
```

2. The page will be available at `/projects/your-project`.

## Theming & Accessibility
- Colors mapped to Navy/Cyan palette with high contrast.
- Focus rings, keyboard nav, semantic landmarks.
- Animations respect `prefers-reduced-motion`.

## SEO
- Next Metadata API per route.
- Sitemap and robots at `src/app/sitemap.ts` and `src/app/robots.ts`.
- JSON-LD for Person/Article included.

## Deploy to Vercel
1. Push to a GitHub repo.
2. Import to Vercel → Framework: Next.js.
3. Add `SITE_URL` env var (e.g., `https://your-domain.com`).
4. Deploy.

## Notes
- Add your portrait at `public/images/profile-heleno.jpg` (JPG). A missing file will just render a broken image placeholder; replace with your actual photo.
- Update social links in `src/lib/seo.ts` and `src/app/contact/page.tsx`.
- Replace placeholder GitHub/demo links in MDX files when available.

