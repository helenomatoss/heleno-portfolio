import Hero from '@/components/hero'
import Section from '@/components/section'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { OrbitingSkills } from '@/components/ui/orbiting-skills'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Home' }

const experience = [
  {
    company: 'Webgest Solutions',
    role: 'Co-Founder & Full-Stack Developer',
    period: '2025 — Present',
    location: 'Dublin · Remote',
    stack: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript'],
    practices: ['Client Delivery', 'UX Structure', 'Deployment', 'AI-Assisted Workflows'],
    href: 'https://webgestsolutions.com.br/',
  },
  {
    company: 'Odontoprev',
    role: 'Junior Front-End Analyst',
    period: '2022 — 2023',
    location: 'Barueri, Brazil',
    stack: ['Vue.js', 'REST APIs'],
    practices: ['Agile / Scrum', 'Component Architecture', 'Code Review'],
  },
  {
    company: 'Odontoprev',
    role: 'Digital Channels Intern — Mobile/Ionic',
    period: '2021 — 2022',
    location: 'Barueri, Brazil',
    stack: ['Ionic', 'Angular', 'Capacitor'],
    practices: ['Mobile Performance', 'Cross-Team Rotation'],
  },
]

const work = [
  {
    title: 'Webgest Solutions',
    period: '2025 —',
    text: 'Freelance studio delivering end-to-end websites and web apps for international clients — planning, UX, development, and deployment.',
    stack: ['React', 'Next.js', 'Vue.js', 'Node.js'],
    href: 'https://webgestsolutions.com.br/',
  },
  {
    title: 'WhatsApp Lead Qualification Agent',
    period: '2025',
    text: 'AI-powered WhatsApp agent that automatically qualifies inbound leads, built on the WhatsApp Business API with n8n workflow automation.',
    stack: ['n8n', 'WhatsApp API', 'AI Agents'],
  },
  {
    title: 'E-commerce Redesign — Odontoprev',
    period: '2022 — 2023',
    text: 'Contributed to a large-scale e-commerce redesign, building reusable Vue components and improving mobile performance.',
    stack: ['Vue.js', 'REST APIs'],
  },
]

export default function HomePage() {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Heleno Vitor Matos Leite',
    jobTitle: 'Full-Stack Developer',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    sameAs: [
      'https://www.linkedin.com/in/heleno-vitor-matos-leite-993684211/',
      'https://github.com/helenomatoss',
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
  }
  return (
    <>
      <Hero />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <Section as="section" id="skills" className="border-t border-app">
        <SectionHeading eyebrow="01 · SKILLS" title="Skills" />
        <Reveal delay={0.1}>
          <OrbitingSkills />
        </Reveal>
      </Section>

      <Section as="section" id="experience" className="border-t border-app">
        <SectionHeading eyebrow="02 · EXPERIENCE" title="Experience" />
        <div className="mt-8 space-y-6">
          {experience.map((e, i) => (
            <Reveal key={`${e.company}-${e.role}`} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 transition-transform duration-300 motion-safe:hover:-translate-y-1 hover:shadow-app">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">
                    {e.role} —{' '}
                    {e.href ? (
                      <a
                        href={e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[var(--accent-strong)]"
                      >
                        {e.company}
                      </a>
                    ) : (
                      e.company
                    )}
                  </h3>
                  <p className="font-mono-tech text-xs text-muted">{e.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{e.location}</p>

                <p className="mt-4 text-xs uppercase tracking-wide text-muted">Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <p className="mt-4 text-xs uppercase tracking-wide text-muted">Practices</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {e.practices.map((s) => (
                    <Badge key={s} className="bg-transparent">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section as="section" className="scroll-mt-24 border-t border-app" id="work">
        <SectionHeading eyebrow="03 · WORK" title="Work" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className="h-full">
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 motion-safe:hover:-translate-y-1 hover:shadow-app">
                <p className="font-mono-tech text-xs text-muted">{w.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{w.title}</h3>
                <p className="mt-3 flex-1 text-sm text-app">{w.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {w.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                {w.href ? (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm underline underline-offset-4 text-muted hover:text-app focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded"
                  >
                    webgestsolutions.com.br ↗
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
