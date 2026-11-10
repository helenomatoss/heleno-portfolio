import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { featured, sideProjects, sites, type FeaturedProject } from '@/lib/data'
import Section from './section'
import Reveal from './reveal'
import Tag from './tag'
import { AgentCover, BlogCover } from './covers'

function Cover({ p }: { p: FeaturedProject }) {
  if (p.cover) {
    return (
      <Image
        src={p.cover}
        alt={`Screenshot of ${p.title}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    )
  }
  if (p.slug === 'whatsapp-ai-agent') return <AgentCover />
  return <BlogCover />
}

function ProjectLinks({ p }: { p: FeaturedProject }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
      <Link href={`/projects/${p.slug}`} className="group/l inline-flex items-center gap-1.5 font-medium">
        Read case study
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5" aria-hidden />
      </Link>
      {p.links.demo ? (
        <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-fg">
          Live demo
        </a>
      ) : null}
      {p.links.repo ? (
        <a href={p.links.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
          <Github className="h-4 w-4" aria-hidden /> Code
        </a>
      ) : null}
    </div>
  )
}

export default function Work() {
  return (
    <Section
      id="work"
      index="01"
      title="Selected work"
      intro="Things I designed and built end to end, from infrastructure to interface."
    >
      <div className="space-y-6">
        {featured.map((p, i) => (
          <Reveal key={p.slug}>
            <article className="group grid overflow-hidden rounded-3xl border border-line bg-surface/50 lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className={`relative aspect-[16/9] border-b border-line bg-bg lg:aspect-auto lg:min-h-[340px] lg:border-b-0 ${
                  i % 2 ? 'lg:order-2 lg:border-l' : 'lg:border-r'
                }`}
              >
                <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
                <div className="relative h-full w-full p-4">
                  <Cover p={p} />
                </div>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="font-mono text-xs text-muted">
                  {p.kind} · {p.year}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <ProjectLinks p={p} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-24 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Websites & landing pages</h3>
            <p className="mt-2 max-w-xl text-muted">Production sites I built and shipped, mostly with React, TypeScript and Tailwind CSS.</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.05}>
            <a href={s.demo} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`${s.title} — open live site`}>
              <div className="relative aspect-[1440/680] overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  src={s.image}
                  alt={`Screenshot of the ${s.title} website`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top grayscale-[35%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-medium">{s.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.description}</p>
                </div>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
              </div>
              <p className="mt-3 font-mono text-[11px] text-muted">{s.stack.join(' · ')}</p>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-24">
          <h3 className="text-2xl font-semibold tracking-tight">Side projects</h3>
          <p className="mt-2 max-w-xl text-muted">Smaller builds where I go back to fundamentals. Plain Python, no external packages.</p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {sideProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.05}>
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-200 hover:border-fg/30"
              aria-label={`${p.title} — view code on GitHub`}
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-medium">{p.title}</h4>
                <Github className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors duration-200 group-hover:text-fg" aria-hidden />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <p className="mt-auto pt-4 font-mono text-[11px] text-muted">{p.stack.join(' · ')}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
