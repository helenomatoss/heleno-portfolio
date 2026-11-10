/* Illustrated covers for projects that have no public UI to screenshot. */

function Node({ x, y, w, label, sub, strong }: { x: number; y: number; w: number; label: string; sub?: string; strong?: boolean }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={sub ? 54 : 40}
        rx={10}
        className={strong ? 'fill-fg' : 'fill-bg'}
        stroke="rgb(var(--line))"
      />
      <text
        x={x + w / 2}
        y={y + (sub ? 23 : 25)}
        textAnchor="middle"
        className={`font-mono text-[12px] ${strong ? 'fill-bg' : 'fill-fg'}`}
      >
        {label}
      </text>
      {sub ? (
        <text x={x + w / 2} y={y + 41} textAnchor="middle" className={`font-mono text-[10px] ${strong ? 'fill-bg/70' : 'fill-muted'}`}>
          {sub}
        </text>
      ) : null}
    </g>
  )
}

const arrow = { stroke: 'rgb(var(--muted))', strokeWidth: 1.25, fill: 'none', markerEnd: 'url(#arr)' }

export function AgentCover() {
  return (
    <svg viewBox="0 0 640 300" className="h-full w-full" role="img" aria-label="Architecture: WhatsApp messages go through Evolution API into an n8n workflow that checks human mode in PostgreSQL, calls Google Gemini and replies.">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="rgb(var(--muted))" />
        </marker>
      </defs>
      <rect x="196" y="24" width="248" height="252" rx="16" fill="none" stroke="rgb(var(--line))" strokeDasharray="4 5" />
      <text x="212" y="46" className="fill-muted font-mono text-[10px]">docker · self-hosted</text>

      <Node x={24} y={124} w={130} label="WhatsApp" sub="lead message" />
      <Node x={226} y={62} w={188} label="Evolution API" sub="webhook" />
      <Node x={226} y={150} w={188} label="n8n workflow" sub="human mode? → agent" strong />
      <Node x={226} y={222} w={188} label="PostgreSQL" />
      <Node x={486} y={84} w={130} label="Gemini" sub="LLM" />
      <Node x={486} y={176} w={130} label="Human" sub="owner replies" />

      <path d="M154 146 C 190 146, 190 89, 224 89" {...arrow} />
      <path d="M320 116 L320 148" {...arrow} />
      <path d="M320 204 L320 220" {...arrow} />
      <path d="M414 168 C 450 168, 450 111, 484 111" {...arrow} />
      <path d="M484 203 C 450 203, 450 186, 416 186" {...arrow} strokeDasharray="3 4" />
      <text x="430" y="230" className="fill-accent font-mono text-[10px]">handoff · 30 min</text>
    </svg>
  )
}

export function BlogCover() {
  const steps = ['cron · daily', 'LLM writes article', 'SQLite', 'Express API', 'React UI']
  return (
    <div className="flex h-full w-full flex-col justify-center gap-5 p-8">
      <div className="flex flex-wrap items-center gap-2 font-mono text-[12px]">
        {steps.map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            <span className={`rounded-lg border border-line px-3 py-2 ${i === 1 ? 'bg-fg text-bg' : 'bg-bg'}`}>{s}</span>
            {i < steps.length - 1 ? <span className="text-muted">→</span> : null}
          </span>
        ))}
      </div>
      <div className="font-mono text-[12px] text-muted">
        <span className="text-accent">$</span> CodeBuild → ECR → EC2 <span className="text-fg/70">docker compose up</span>
      </div>
    </div>
  )
}
