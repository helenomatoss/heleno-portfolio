import { ReactNode } from 'react'

type Item = {
  key?: string | number
  content: ReactNode
}

export function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-[20px_12px_1fr]">
      {/* left vertical line column */}
      <div className="relative col-span-1">
        <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l-2 border-[var(--border)]" />
      </div>
      <div className="col-span-2" />
      {items.map((it, i) => (
        <div key={it.key ?? i} className="contents">
          {/* bullet */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-2 size-3 -translate-x-1/2 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)] dark:ring-[#033860]"
            />
          </div>
          {/* gutter */}
          <div />
          {/* content */}
          <div className="pb-5">{it.content}</div>
        </div>
      ))}
    </div>
  )
}
