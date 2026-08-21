"use client"
import Image from 'next/image'
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
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" aria-hidden />
      <div className="container relative grid items-center gap-8 md:gap-12 py-12 sm:py-16 md:grid-cols-2 md:py-24">
        <div>
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
            className="mt-6 max-w-xl space-y-2 text-muted"
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
            className="mt-6 flex gap-3"
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
        <div className="relative mx-auto">
          <div className="absolute -inset-3 rounded-3xl bg-[var(--accent)]/20 blur-xl" aria-hidden />
          <div className="flex items-center justify-center">
            <Image
              src="/images/profile-heleno.jpg"
              alt="Portrait of Heleno Vitor Matos Leite"
              width={320}
              height={320}
              priority
              sizes="(max-width: 768px) 220px, 320px"
              style={{ height: 'auto' }}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container relative pb-12">
        <TrustedSkillsStrip />
      </div>
    </section>
  )
}
