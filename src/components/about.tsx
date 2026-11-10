import { education } from '@/lib/data'
import Section from './section'
import Reveal from './reveal'

export default function About() {
  return (
    <Section id="about" index="03" title="About">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I started in São Paulo, at Odontoprev, building mobile features in Ionic and then front-end features for
              the company&apos;s new Vue.js e-commerce platform. Today I co-run{' '}
              <span className="text-fg">Webgest Solutions</span>, where I build websites, web apps and AI automations for
              clients.
            </p>
            <p>
              I like interfaces that are clean, accessible and fast, built from components that can be reused. I also
              like the parts most people don&apos;t see: containers, databases, webhooks and the glue between them.
            </p>
            <p>
              I try to keep things as simple as the problem allows, and I would rather remove a layer that
              doesn&apos;t earn its place than keep it because it was hard to build.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Education</h3>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.title} className="py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-medium">{e.title}</p>
                  <p className="shrink-0 font-mono text-xs text-muted">{e.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {e.school} · {e.note}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
