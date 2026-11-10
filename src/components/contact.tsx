'use client'
import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { profile } from '@/lib/data'
import ContactForm from './contact-form'
import Reveal from './reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="container py-20 md:py-28">
      <div className="grid gap-14 rounded-3xl border border-line bg-surface/50 p-7 md:p-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">04</span> / contact
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s talk<span className="text-accent">.</span>
          </h2>
          <p className="mt-5 max-w-md text-muted">
            I&apos;m based in Dublin and open to developer roles across Europe: on-site or hybrid in Ireland, remote or
            relocation elsewhere. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-85"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-line px-5 text-sm transition-colors duration-200 hover:border-fg/40"
              aria-label="Copy email address"
            >
              {copied ? <Check className="h-4 w-4 text-accent" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <ul className="mt-10 space-y-3 text-sm">
            {[
              { label: 'LinkedIn', href: profile.linkedin, text: 'linkedin.com/in/helenomatos' },
              { label: 'GitHub', href: profile.github, text: 'github.com/helenomatoss' },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3">
                  <span className="w-20 font-mono text-xs text-muted">{l.label}</span>
                  <span className="transition-colors group-hover:text-accent">{l.text}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
