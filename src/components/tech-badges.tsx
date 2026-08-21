import { Badge } from './ui/badge'
import { TechStrip } from './tech-strip'

const techs = [
  { name: 'React', title: 'React', icon: (
      <svg viewBox="0 0 128 128" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <circle cx="64" cy="64" r="11" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="6">
          <ellipse cx="64" cy="64" rx="50" ry="20" />
          <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(120 64 64)" />
        </g>
      </svg>
    ) },
  { name: 'Next.js', title: 'Next.js', icon: (
      <svg viewBox="0 0 128 128" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <circle cx="64" cy="64" r="60" fill="#000" />
        <path fill="#fff" d="M46 42h9l31 42V42h7v54h-8L47 51v45h-7V42z" />
        <rect x="82" y="42" width="6" height="42" fill="#fff" />
      </svg>
    ) },
  { name: 'TypeScript', title: 'TypeScript', icon: (
      <svg viewBox="0 0 128 128" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <text x="64" y="86" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="60" fill="#fff">TS</text>
      </svg>
    ) },
  { name: 'Node.js', title: 'Node.js', icon: (
      <svg viewBox="0 0 128 128" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <path fill="#539E43" d="M64 6 116 36v56L64 122 12 92V36z" />
      </svg>
    ) },
  { name: 'Vue.js', title: 'Vue.js', icon: (
      <svg viewBox="0 0 128 128" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <path fill="#41B883" d="M64 28L44 62l20 34 20-34z"/>
        <path fill="#35495E" d="M44 62L24 28h20l20 34zM84 28h20L64 96 24 28h20l20 34z"/>
      </svg>
    ) },
  { name: 'Ionic', title: 'Ionic', icon: (
      <svg viewBox="0 0 512 512" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <circle cx="256" cy="256" r="80" fill="#498AFF"/>
        <circle cx="373" cy="139" r="40" fill="#498AFF"/>
        <circle cx="256" cy="256" r="200" fill="none" stroke="#498AFF" strokeWidth="28"/>
      </svg>
    ) },
]

export function TechBadges() {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Highlights">
      {['React', 'Next.js', 'Node.js', 'TypeScript', 'AI-Assisted Dev'].map((t) => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>
  )
}

export function TrustedSkillsStrip() {
  return (
    <div className="glass rounded-2xl px-2 py-2">
      <TechStrip>
        <ul className="flex items-center gap-x-4 gap-y-2 md:gap-x-8 md:gap-y-3 text-app text-sm md:text-base" aria-label="Tech stack">
          {techs.map((t) => (
            <li key={t.name} className="flex items-center gap-2 whitespace-nowrap" aria-label={t.title}>
              <span className="inline-flex items-center justify-center">{t.icon}</span>
              <span className="text-sm">{t.name}</span>
            </li>
          ))}
        </ul>
      </TechStrip>
    </div>
  )
}
