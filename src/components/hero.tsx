"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import { TechBadges, TrustedSkillsStrip } from './tech-badges'

const bio = [
  'Full-Stack Developer with production experience across React, Next.js, Vue.js, and Node.js — focused on clean, accessible, end-to-end delivery.',
  'Co-founder of Webgest Solutions, building and shipping client websites and web apps from planning to deployment.',
  'AI-assisted workflows (Claude, ChatGPT) are part of how I build — used to move faster without cutting corners.',
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 12 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  }

  return (
    <section className="relative overflow-hidden theme-light-hero">
      <div className="absolute inset-0 bg-grid-fade" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-72 w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[var(--accent)]/20 blur-3xl"
        aria-hidden
      />
      <div className="container relative py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="font-extrabold text-4xl tracking-tight sm:text-5xl md:text-6xl"
            {...fadeUp}
            transition={{ duration: 0.6 }}
          >
            Heleno Vitor Matos Leite
          </motion.h1>
          <motion.p
            className="mt-3 text-lg text-app"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Full-Stack Developer — React · Next.js · Node.js · TypeScript
          </motion.p>
          <motion.ul
            className="mx-auto mt-6 max-w-xl space-y-2 text-left text-muted"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {bio.map((line) => (
              <li key={line} className="flex gap-2">
                <span aria-hidden className="text-app">·</span>
                <span>{line}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div
            className="mt-6 flex justify-center gap-3"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Button asChild size="lg">
              <a href="#work">View Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </motion.div>
          <motion.div
            className="mt-8"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TechBadges />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="container relative pb-12"
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <div className="mx-auto max-w-3xl">
          <TrustedSkillsStrip />
        </div>
      </motion.div>
    </section>
  )
}
