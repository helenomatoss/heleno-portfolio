export const profile = {
  name: 'Heleno Matos',
  fullName: 'Heleno Vitor Matos Leite',
  role: 'Full-Stack Developer',
  location: 'Dublin, Ireland',
  availability: 'Open to developer roles across Europe',
  email: 'helenovitor15@gmail.com',
  linkedin: 'https://www.linkedin.com/in/helenomatos/',
  github: 'https://github.com/helenomatoss',
  cv: '/cv/heleno-matos-cv.pdf',
  siteUrl: 'https://heleno-portfolio.vercel.app',
}

export type FeaturedProject = {
  slug: string
  title: string
  kind: string
  year: string
  summary: string
  stack: string[]
  cover?: string
  links: { demo?: string; repo?: string }
}

export const featured: FeaturedProject[] = [
  {
    slug: 'whatsapp-ai-agent',
    title: 'AI WhatsApp lead-qualification agent',
    kind: 'Automation · AI',
    year: '2026',
    summary:
      'Answers new leads on WhatsApp, works out what they need, collects their details and hands the chat to a human. Self-hosted, built from scratch for Webgest Solutions.',
    stack: ['Docker', 'Evolution API', 'n8n', 'Google Gemini', 'PostgreSQL'],
    links: {},
  },
  {
    slug: 'assimetria-auto-blog',
    title: 'Auto-generated tech blog',
    kind: 'Technical challenge · Cloud',
    year: '2025',
    summary:
      'A blog that writes one new technical article a day with an LLM. React front end, Express API, containerised and deployed on AWS through ECR, CodeBuild and EC2.',
    stack: ['React', 'Node.js', 'Express', 'SQLite', 'Docker', 'AWS'],
    links: { repo: 'https://github.com/helenomatoss/assimetria-auto-blog' },
  },
]

export type Site = {
  title: string
  description: string
  stack: string[]
  image: string
  demo: string
  repo?: string
}

export const sites: Site[] = [
  {
    title: 'Loyaltify',
    description: 'Marketing site for a loyalty platform, bilingual (PT/EN) with cookie consent and demo-request flow.',
    stack: ['React', 'TypeScript', 'Tailwind', 'i18n'],
    image: '/images/projects/loyaltify.jpg',
    demo: 'https://loyaltify.vercel.app',
    repo: 'https://github.com/helenomatoss/loyaltify',
  },
  {
    title: 'Webgest Solutions',
    description: 'Website for the digital studio I co-founded, bilingual with services, plans and portfolio.',
    stack: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui'],
    image: '/images/projects/webgest.jpg',
    demo: 'https://webgest-site.vercel.app',
    repo: 'https://github.com/helenomatoss/webgest-site',
  },
  {
    title: 'Machine Produtora',
    description: 'Site for an audiovisual production studio, with services, portfolio and contact.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/projects/produtora-machine.jpg',
    demo: 'https://site-produtoramachine.vercel.app',
    repo: 'https://github.com/helenomatoss/site-produtoramachine',
  },
  {
    title: 'Studio Bella Bronze',
    description: 'Institutional site for a beauty studio, with gallery, testimonials and booking CTA.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/projects/bella-bronze.jpg',
    demo: 'https://site-studio-bella-bronze.vercel.app',
    repo: 'https://github.com/helenomatoss/site-studio-bella-bronze',
  },
  {
    title: "Connect's Imports",
    description: 'Site for an electronics and gaming-PC store, with product showcase and WhatsApp contact.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/projects/connects-imports.jpg',
    demo: 'https://connects-imports-site.vercel.app',
    repo: 'https://github.com/helenomatoss/connects-imports-site',
  },
  {
    title: 'MindBrew Light',
    description: 'Landing page for a light-therapy café concept in Dublin.',
    stack: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui'],
    image: '/images/projects/mindbrew.jpg',
    demo: 'https://mind-brew-light.vercel.app',
    repo: 'https://github.com/helenomatoss/MindBrew-Light',
  },
]

export type SideProject = { title: string; description: string; stack: string[]; repo: string }

export const sideProjects: SideProject[] = [
  {
    title: 'Neural network playground',
    description: 'A neural network written from scratch, with no ML libraries: forward pass, backpropagation and gradient descent, with the decision boundary redrawn live while it trains.',
    stack: ['Python', 'tkinter', 'Backpropagation'],
    repo: 'https://github.com/helenomatoss/neural-network-playground',
  },
  {
    title: 'CPU scheduling simulator',
    description: 'Compares FCFS, SRTF and Round Robin on an editable process table, with Gantt charts, waiting and turnaround times and a step-through time slider.',
    stack: ['Python', 'tkinter', 'Operating systems'],
    repo: 'https://github.com/helenomatoss/cpu-scheduling-simulator',
  },
  {
    title: 'Boids flocking simulator',
    description: "Craig Reynolds' Boids: separation, alignment and cohesion, with live sliders, an attractor and a predator. Delta-time movement and an OOP structure.",
    stack: ['Python', 'tkinter', 'Simulation'],
    repo: 'https://github.com/helenomatoss/boids-flocking-simulator',
  },
  {
    title: 'Fuga de Pedra Negra',
    description: 'A 2D top-down prison-escape game: daily routine clock, guards with vision cones and a suspicion system, crafting and four endings.',
    stack: ['Python', 'tkinter', 'Game dev'],
    repo: 'https://github.com/helenomatoss/fuga-de-pedra-negra',
  },
]

export type Job = {
  role: string
  company: string
  period: string
  place: string
  points: string[]
  stack: string[]
}

export const experience: Job[] = [
  {
    role: 'Co-Founder & Full-Stack Developer',
    company: 'Webgest Solutions',
    period: 'Jun 2025 — Present',
    place: 'Dublin · Remote',
    points: [
      'Build client websites and web apps with React, Next.js, Vue.js and TypeScript, from planning and UX to deployment.',
      'Designed and shipped the studio’s AI WhatsApp agent: self-hosted Docker stack, n8n workflows, Google Gemini and PostgreSQL.',
      'Shipped 6 production websites and landing pages, including bilingual (PT/EN) sites with cookie consent and lead capture.',
    ],
    stack: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'Docker'],
  },
  {
    role: 'Junior Front-End Analyst',
    company: 'Odontoprev',
    period: 'Jun 2022 — May 2023',
    place: 'São Paulo, Brazil · Hybrid',
    points: [
      'Built front-end features for the company’s new e-commerce platform with Vue 3.',
      'Refactored components and state management to make the codebase more reusable and consistent.',
      'Worked with designers and back-end engineers in an Agile team with code reviews.',
    ],
    stack: ['Vue 3', 'JavaScript', 'REST APIs', 'Agile'],
  },
  {
    role: 'Digital Channels Intern (Mobile)',
    company: 'Odontoprev',
    period: 'Jul 2021 — Jun 2022',
    place: 'São Paulo, Brazil',
    points: [
      'Built and maintained features for the company’s mobile app with Ionic.',
      'Debugged UI and performance issues and rotated across mobile, marketing and infrastructure teams.',
    ],
    stack: ['Ionic', 'TypeScript', 'HTML', 'CSS'],
  },
]

export const stack: { group: string; items: string[] }[] = [
  {
    group: 'Front end',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'Ionic'],
  },
  {
    group: 'Back end & data',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MySQL', 'Supabase', 'SQLite'],
  },
  {
    group: 'Infra & AI',
    items: ['Docker', 'AWS (EC2, ECR, CodeBuild)', 'Vercel', 'n8n', 'LLM APIs', 'Git & GitHub'],
  },
  {
    group: 'Also',
    items: ['Python', 'Java', 'Linux', 'Agile / Scrum'],
  },
]

export const education = [
  { title: 'BSc in Computing', school: 'Dorset College Dublin', period: '2026 — 2028', note: 'Year 2 of 3' },
  { title: 'Systems Analysis and Development', school: 'FMU, São Paulo', period: '2023 — 2025', note: 'Completed' },
  { title: 'Computer Technician', school: 'CEAP, São Paulo', period: '2019 — 2021', note: 'Technical degree' },
]
