"use client"
import type { ElementType } from 'react'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  as: As = 'h2',
  delay = 0,
}: {
  eyebrow: string
  title: string
  as?: ElementType
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-center gap-3">
        <span className="font-mono-tech text-xs tracking-widest text-[var(--accent)]">{eyebrow}</span>
        <span aria-hidden className="h-px max-w-[80px] flex-1 bg-[var(--border)]" />
      </div>
      <As className={As === 'h1' ? 'mt-2 text-3xl font-bold sm:text-4xl' : 'mt-2 text-2xl font-bold sm:text-3xl'}>
        {title}
      </As>
    </Reveal>
  )
}
