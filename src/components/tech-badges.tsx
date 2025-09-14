import { Badge } from './ui/badge'
import { TechStrip } from './tech-strip'

const techs = [
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
  { name: 'JavaScript', title: 'JavaScript', icon: (
      <svg viewBox="0 0 128 128" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <path fill="#F7DF1E" d="M2 2h124v124H2z"/>
        <path d="M83 106c-7 0-12-3-15-8l9-6c2 3 4 5 9 5 5 0 8-2 8-6 0-4-3-6-9-8l-3-1c-9-4-16-9-16-20 0-10 8-17 21-17 9 0 16 3 21 12l-9 5c-2-4-5-6-12-6s-9 3-9 6c0 4 4 6 10 8l3 1c10 4 16 10 16 21 0 12-9 19-24 19zM45 106c-8 0-13-4-16-10l9-5c2 3 3 5 7 5 4 0 6-2 6-7V58h11v31c0 12-7 17-17 17z"/>
      </svg>
    ) },
  { name: 'HTML5', title: 'HTML5', icon: (
      <svg viewBox="0 0 128 128" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <path fill="#E44D26" d="M19 114L9 3h110l-10 111-45 12z"/>
        <path fill="#F16529" d="M64 117l36-10 8-86H64z"/>
      </svg>
    ) },
  { name: 'CSS3', title: 'CSS3', icon: (
      <svg viewBox="0 0 128 128" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <path fill="#1572B6" d="M19 114L9 3h110l-10 111-45 12z"/>
        <path fill="#33A9DC" d="M64 117l36-10 8-86H64z"/>
      </svg>
    ) },
  { name: 'Git', title: 'Git', icon: (
      <svg viewBox="0 0 256 256" className="h-4 w-4 md:h-5 md:w-5" aria-hidden>
        <path fill="#F05133" d="M251.2 116.6L139.4 4.8c-6.4-6.4-16.8-6.4-23.2 0l-23.2 23.2 29.3 29.3c6.7-2.3 14.4-.8 19.8 4.7 5.5 5.5 7 13.3 4.6 20l28.2 28.2c6.8-2.3 14.6-.8 20.1 4.7 7.9 7.9 7.9 20.7 0 28.6-7.9 7.9-20.7 7.9-28.6 0-5.7-5.7-7.3-14-4.8-21l-26.5-26.5v69.7c1.9.9 3.7 2.1 5.2 3.6 7.9 7.9 7.9 20.7 0 28.6-7.9 7.9-20.7 7.9-28.6 0-7.9-7.9-7.9-20.7 0-28.6 1.8-1.8 3.9-3.2 6.2-4.2V95.4c-2.3-1-4.4-2.4-6.2-4.2-5.8-5.8-7.3-14.5-4.4-21.7L52.6 40.3 4.8 88.1c-6.4 6.4-6.4 16.8 0 23.2l111.8 111.8c6.4 6.4 16.8 6.4 23.2 0l111.4-111.4c6.5-6.4 6.5-16.8 0-23.2z"/>
      </svg>
    ) },
]

export function TechBadges() {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Highlights">
      {['Vue.js', 'Ionic', 'JavaScript', 'Accessible UI', 'E-commerce'].map((t) => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>
  )
}

export function TrustedSkillsStrip() {
  return (
    <div className="glass rounded-2xl px-2 py-2">
      <TechStrip>
        <ul className="flex items-center gap-x-4 gap-y-2 md:gap-x-8 md:gap-y-3 text-app text-sm md:text-base" aria-label="Trusted skills">
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
