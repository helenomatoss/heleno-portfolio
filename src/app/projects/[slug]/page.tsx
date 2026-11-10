import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { getProjectBySlug, getProjectSlugs, readProjectSource } from '@/lib/projects'
import { compileProjectMDX } from '@/lib/mdx'
import { AgentCover, BlogCover } from '@/components/covers'

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProjectBySlug(params.slug)
  if (!p) return {}
  return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${p.slug}` } }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  const source = readProjectSource(params.slug)
  if (!project || !source) notFound()
  const { content } = await compileProjectMDX(source)

  return (
    <article className="container max-w-3xl pb-24 pt-12 md:pt-16">
      <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
        <ArrowLeft className="h-4 w-4" aria-hidden /> Back to work
      </Link>

      <header className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent">case study</span> / {project.context ?? 'project'}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-8 grid gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="font-mono text-xs text-muted">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">Year</dt>
            <dd className="mt-1">{new Date(project.date).getFullYear()}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">Links</dt>
            <dd className="mt-1 flex flex-wrap gap-4">
              {project.links?.demo ? (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                  Live <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              ) : null}
              {project.links?.repo ? (
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                  <Github className="h-3.5 w-3.5" aria-hidden /> Code
                </a>
              ) : null}
              {!project.links?.demo && !project.links?.repo ? <span className="text-muted">Private infrastructure</span> : null}
            </dd>
          </div>
        </dl>
        <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted">{project.stack.join(' · ')}</p>
      </header>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-bg">
        {project.cover ? (
          <Image src={project.cover} alt={`Screenshot of ${project.title}`} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover object-top" />
        ) : (
          <>
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
            <div className="relative h-full p-4">{project.slug === 'whatsapp-ai-agent' ? <AgentCover /> : <BlogCover />}</div>
          </>
        )}
      </div>

      <div className="prose prose-lg mt-14 max-w-none prose-headings:tracking-tight prose-h2:mt-14 prose-h2:text-2xl prose-a:no-underline">
        {content}
      </div>

      <div className="mt-20 border-t border-line pt-8">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="h-4 w-4" aria-hidden /> All projects
        </Link>
      </div>
    </article>
  )
}
