"use client"
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Code2, MapPin, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { LocalClock } from './local-clock'
import { TrustedSkillsStrip } from './tech-badges'

const facts = [
  { icon: Code2, text: 'Full-Stack Developer @Webgest' },
  { icon: MapPin, text: 'Dublin, Ireland' },
]

const socials = [
  { icon: Github, href: 'https://github.com/helenomatoss', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/heleno-vitor-matos-leite-993684211/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:helenovitor15@gmail.com', label: 'Email' },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 12 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade" aria-hidden />
      <div className="container relative py-12 sm:py-16 md:py-20">
        <motion.div
          className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-app bg-card"
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-hatch h-16 border-b border-app" aria-hidden />

          <div className="px-6 py-6 sm:px-8">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Heleno Vitor Matos Leite
            </h1>
            <p className="mt-1 text-muted">Creating with code. Small details matter.</p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-app px-6 py-6 font-mono-tech text-sm sm:grid-cols-2 sm:px-8">
            {facts.map((f) => (
              <div key={f.text} className="flex items-center gap-2.5 text-app">
                <f.icon className="size-4 text-muted" aria-hidden />
                {f.text}
              </div>
            ))}
            <div className="flex items-center gap-2.5 text-app">
              <span aria-hidden className="size-4 text-center text-muted">
                ⏱
              </span>
              <LocalClock />
            </div>
            <a
              href="mailto:helenovitor15@gmail.com"
              className="flex items-center gap-2.5 text-app transition hover:text-[var(--accent-strong)]"
            >
              <Mail className="size-4 text-muted" aria-hidden />
              helenovitor15@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 border-t border-app px-6 py-4 sm:px-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-app text-muted transition hover:text-app"
              >
                <s.icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-3"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Button asChild size="lg">
            <a href="#work">View Work</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-2xl"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <TrustedSkillsStrip />
        </motion.div>
      </div>
    </section>
  )
}
