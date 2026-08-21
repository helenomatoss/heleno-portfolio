import Hero from '@/components/hero'
import Section from '@/components/section'
import { Reveal } from '@/components/reveal'
import { Badge } from '@/components/ui/badge'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Home' }

const highlights = [
  {
    title: 'Full-Stack Delivery',
    text: 'End-to-end product builds with React, Next.js, Vue.js, and Node.js — from UX structure to deployment on Vercel.',
  },
  {
    title: 'AI-Assisted Development',
    text: 'I use tools like Claude and ChatGPT to speed up delivery, automate repetitive work, and ship production-ready code faster.',
  },
  {
    title: 'Accessible, Performant UI',
    text: 'Clean, inclusive interfaces with strong contrast, keyboard navigation, and meaningful motion.',
  },
]

const work = [
  {
    title: 'Webgest Solutions',
    role: 'Co-Founder & Full-Stack Developer',
    period: '2025 — Present',
    text: 'Freelance studio delivering end-to-end websites and web apps for international clients — planning, UX, development, and deployment.',
    stack: ['React', 'Next.js', 'Vue.js', 'Node.js'],
    href: 'https://webgestsolutions.com',
  },
  {
    title: 'WhatsApp Lead Qualification Agent',
    role: 'AI Automation',
    period: '2025',
    text: 'AI-powered WhatsApp agent that automatically qualifies inbound leads, built on the WhatsApp Business API with n8n workflow automation.',
    stack: ['n8n', 'WhatsApp API', 'AI Agents'],
  },
  {
    title: 'E-commerce Redesign',
    role: 'Junior Front-End Analyst — Odontoprev',
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
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section as="section" className="scroll-mt-24" id="work">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-muted">
            A mix of freelance delivery, AI-driven automation, and production front-end work.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className="h-full">
              <div className="glass flex h-full flex-col rounded-2xl p-6">
                <p className="font-mono-tech text-xs text-muted">{w.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{w.title}</h3>
                <p className="text-sm text-muted">{w.role}</p>
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
                    Visit site ↗
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
