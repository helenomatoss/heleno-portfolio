import { experience, stack } from '@/lib/data'
import Section from './section'
import Reveal from './reveal'

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="border-t border-line">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.period} delay={i * 0.04}>
            <li className="grid gap-4 border-b border-line py-10 md:grid-cols-[220px_1fr] md:gap-10">
              <div>
                <p className="font-mono text-xs text-muted">{job.period}</p>
                <p className="mt-1 font-mono text-xs text-muted">{job.place}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-muted">
                  {job.points.map((pt) => (
                    <li key={pt} className="relative pl-5 leading-relaxed">
                      <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-muted" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-mono text-[11px] text-muted">{job.stack.join(' · ')}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <h3 className="mt-20 text-2xl font-semibold tracking-tight">Stack</h3>
      </Reveal>
      <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((g) => (
          <div key={g.group} className="bg-bg p-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{g.group}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
