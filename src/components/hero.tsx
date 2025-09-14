"use client"
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import { TechBadges, TrustedSkillsStrip } from './tech-badges'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden theme-light-hero">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" aria-hidden />
      <div className="container grid items-center gap-8 md:gap-12 py-12 sm:py-16 md:grid-cols-2 md:py-24">
        <div>
          <motion.h1
            className="font-extrabold text-4xl tracking-tight sm:text-5xl md:text-6xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Heleno Vitor Matos Leite
          </motion.h1>
          <p className="mt-3 text-lg text-app">
            Front-End Developer — Vue.js · Ionic · JavaScript
          </p>
          <p className="mt-6 max-w-xl text-muted">
            Front-end developer focused on clean, accessible interfaces and high-quality delivery. I’ve contributed to a large e-commerce redesign at Odontoprev, building reusable Vue components and improving performance on mobile.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="mt-8">
            <TechBadges />
          </div>
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
      <div className="container pb-12">
        <TrustedSkillsStrip />
      </div>
    </section>
  )
}
