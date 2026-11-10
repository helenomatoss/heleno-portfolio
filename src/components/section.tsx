import type { ReactNode } from 'react'
import Reveal from './reveal'

export default function Section({
  id,
  index,
  title,
  intro,
  children,
}: {
  id: string
  index: string
  title: string
  intro?: ReactNode
  children: ReactNode
}) {
  return (
    <section id={id} className="container py-20 md:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent">{index}</span> / {id}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {intro ? <p className="mt-4 max-w-2xl text-muted">{intro}</p> : null}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}
