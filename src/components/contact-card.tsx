import { Card, CardContent } from './ui/card'
import type { ReactNode } from 'react'

export function ContactCard({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children: ReactNode
}) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-2xl">
      <Card className="transition hover:shadow-soft">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="h-10 w-10 rounded-lg bg-primary-400/20 grid place-items-center text-primary-400" aria-hidden>
            ↗
          </div>
          <div>
            <div className="text-base font-semibold">{title}</div>
            <div className="text-sm text-slate-300">{children}</div>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
