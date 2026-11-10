import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/lib/data'
import Reveal from './reveal'

const terminal = [
  { k: 'role', v: '"Full-stack developer"' },
  { k: 'front', v: '["React", "Vue.js", "TypeScript"]' },
  { k: 'back', v: '["Node.js", "PostgreSQL", "REST"]' },
  { k: 'infra', v: '["Docker", "AWS", "n8n"]' },
  { k: 'ai', v: '["LLM APIs", "Prompt design"]' },
  { k: 'based', v: '"Dublin, IE"' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden />
      <div className="container relative grid items-center gap-14 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-bg/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-accent motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]">
              I build web apps
              <br />
              <span className="text-muted">and the automation</span>
              <br />
              behind them<span className="text-accent">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m Heleno, a full-stack developer in Dublin. React, Vue.js, TypeScript and Node.js on the front,
              Docker, PostgreSQL and n8n underneath. Co-founder of Webgest Solutions, studying for a BSc in Computing.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-85"
              >
                See my work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-sm font-medium transition-colors duration-200 hover:border-fg/40"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download CV
              </a>
              <div className="ml-1 flex items-center gap-1">
                {[
                  { href: profile.github, label: 'GitHub', Icon: Github },
                  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
                  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-surface hover:text-fg"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface/70 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
              <span className="ml-3 font-mono text-xs text-muted">heleno.ts</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7">
              <code>
                <span className="text-muted">const</span> heleno = {'{'}
                {'\n'}
                {terminal.map((l) => (
                  <span key={l.k}>
                    {'  '}
                    <span className="text-accent">{l.k}</span>: <span className="text-fg/80">{l.v}</span>,{'\n'}
                  </span>
                ))}
                {'}'}
                {'\n\n'}
                <span className="text-muted">{'// open to roles across Europe'}</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
