"use client"
import { useEffect, useState, memo, type ReactElement } from 'react'
import { useReducedMotion } from 'framer-motion'

type IconType =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'vue'
  | 'ionic'
  | 'node'
  | 'tailwind'
  | 'git'

type GlowColor = 'cyan' | 'purple' | 'emerald'

interface SkillConfig {
  id: string
  orbitRadius: number
  size: number
  speed: number
  iconType: IconType
  phaseShift: number
  glowColor: GlowColor
  label: string
}

const iconComponents: Record<IconType, { render: () => ReactElement; color: string }> = {
  html: {
    render: () => (
      <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden>
        <path fill="#E44D26" d="M19 114L9 3h110l-10 111-45 12z" />
        <path fill="#F16529" d="M64 117l36-10 8-86H64z" />
      </svg>
    ),
    color: '#E44D26',
  },
  css: {
    render: () => (
      <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden>
        <path fill="#1572B6" d="M19 114L9 3h110l-10 111-45 12z" />
        <path fill="#33A9DC" d="M64 117l36-10 8-86H64z" />
      </svg>
    ),
    color: '#1572B6',
  },
  javascript: {
    render: () => (
      <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden>
        <path fill="#F7DF1E" d="M2 2h124v124H2z" />
        <path d="M83 106c-7 0-12-3-15-8l9-6c2 3 4 5 9 5 5 0 8-2 8-6 0-4-3-6-9-8l-3-1c-9-4-16-9-16-20 0-10 8-17 21-17 9 0 16 3 21 12l-9 5c-2-4-5-6-12-6s-9 3-9 6c0 4 4 6 10 8l3 1c10 4 16 10 16 21 0 12-9 19-24 19zM45 106c-8 0-13-4-16-10l9-5c2 3 3 5 7 5 4 0 6-2 6-7V58h11v31c0 12-7 17-17 17z" />
      </svg>
    ),
    color: '#F7DF1E',
  },
  typescript: {
    render: () => (
      <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden>
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <text
          x="64"
          y="86"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontSize="60"
          fill="#fff"
        >
          TS
        </text>
      </svg>
    ),
    color: '#3178C6',
  },
  react: {
    render: () => (
      <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden>
        <circle cx="64" cy="64" r="11" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="6">
          <ellipse cx="64" cy="64" rx="50" ry="20" />
          <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(120 64 64)" />
        </g>
      </svg>
    ),
    color: '#61DAFB',
  },
  nextjs: {
    render: () => (
      <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden>
        <circle cx="64" cy="64" r="60" fill="#000" />
        <path fill="#fff" d="M46 42h9l31 42V42h7v54h-8L47 51v45h-7V42z" />
        <rect x="82" y="42" width="6" height="42" fill="#fff" />
      </svg>
    ),
    color: '#ffffff',
  },
  vue: {
    render: () => (
      <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden>
        <path fill="#41B883" d="M64 28L44 62l20 34 20-34z" />
        <path fill="#35495E" d="M44 62L24 28h20l20 34zM84 28h20L64 96 24 28h20l20 34z" />
      </svg>
    ),
    color: '#41B883',
  },
  ionic: {
    render: () => (
      <svg viewBox="0 0 512 512" className="h-full w-full" aria-hidden>
        <circle cx="256" cy="256" r="80" fill="#498AFF" />
        <circle cx="373" cy="139" r="40" fill="#498AFF" />
        <circle cx="256" cy="256" r="200" fill="none" stroke="#498AFF" strokeWidth="28" />
      </svg>
    ),
    color: '#498AFF',
  },
  node: {
    render: () => (
      <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden>
        <path fill="#539E43" d="M64 6 116 36v56L64 122 12 92V36z" />
      </svg>
    ),
    color: '#539E43',
  },
  tailwind: {
    render: () => (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="h-full w-full" aria-hidden>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
    color: '#06B6D4',
  },
  git: {
    render: () => (
      <svg viewBox="0 0 256 256" className="h-full w-full" aria-hidden>
        <path
          fill="#F05133"
          d="M251.2 116.6L139.4 4.8c-6.4-6.4-16.8-6.4-23.2 0l-23.2 23.2 29.3 29.3c6.7-2.3 14.4-.8 19.8 4.7 5.5 5.5 7 13.3 4.6 20l28.2 28.2c6.8-2.3 14.6-.8 20.1 4.7 7.9 7.9 7.9 20.7 0 28.6-7.9 7.9-20.7 7.9-28.6 0-5.7-5.7-7.3-14-4.8-21l-26.5-26.5v69.7c1.9.9 3.7 2.1 5.2 3.6 7.9 7.9 7.9 20.7 0 28.6-7.9 7.9-20.7 7.9-28.6 0-7.9-7.9-7.9-20.7 0-28.6 1.8-1.8 3.9-3.2 6.2-4.2V95.4c-2.3-1-4.4-2.4-6.2-4.2-5.8-5.8-7.3-14.5-4.4-21.7L52.6 40.3 4.8 88.1c-6.4 6.4-6.4 16.8 0 23.2l111.8 111.8c6.4 6.4 16.8 6.4 23.2 0l111.4-111.4c6.5-6.4 6.5-16.8 0-23.2z"
        />
      </svg>
    ),
    color: '#F05133',
  },
}

const skillsConfig: SkillConfig[] = [
  // Inner orbit — core languages
  { id: 'html', orbitRadius: 90, size: 34, speed: 0.5, iconType: 'html', phaseShift: 0, glowColor: 'cyan', label: 'HTML5' },
  { id: 'css', orbitRadius: 90, size: 34, speed: 0.5, iconType: 'css', phaseShift: (2 * Math.PI) / 4, glowColor: 'cyan', label: 'CSS3' },
  { id: 'javascript', orbitRadius: 90, size: 34, speed: 0.5, iconType: 'javascript', phaseShift: (4 * Math.PI) / 4, glowColor: 'cyan', label: 'JavaScript' },
  { id: 'typescript', orbitRadius: 90, size: 34, speed: 0.5, iconType: 'typescript', phaseShift: (6 * Math.PI) / 4, glowColor: 'cyan', label: 'TypeScript' },
  // Middle orbit — frameworks
  { id: 'react', orbitRadius: 160, size: 42, speed: -0.35, iconType: 'react', phaseShift: 0, glowColor: 'purple', label: 'React' },
  { id: 'nextjs', orbitRadius: 160, size: 42, speed: -0.35, iconType: 'nextjs', phaseShift: (2 * Math.PI) / 4, glowColor: 'purple', label: 'Next.js' },
  { id: 'vue', orbitRadius: 160, size: 42, speed: -0.35, iconType: 'vue', phaseShift: (4 * Math.PI) / 4, glowColor: 'purple', label: 'Vue.js' },
  { id: 'ionic', orbitRadius: 160, size: 42, speed: -0.35, iconType: 'ionic', phaseShift: (6 * Math.PI) / 4, glowColor: 'purple', label: 'Ionic' },
  // Outer orbit — runtime & tooling
  { id: 'node', orbitRadius: 225, size: 38, speed: 0.22, iconType: 'node', phaseShift: 0, glowColor: 'emerald', label: 'Node.js' },
  { id: 'tailwind', orbitRadius: 225, size: 38, speed: 0.22, iconType: 'tailwind', phaseShift: (2 * Math.PI) / 3, glowColor: 'emerald', label: 'Tailwind CSS' },
  { id: 'git', orbitRadius: 225, size: 38, speed: 0.22, iconType: 'git', phaseShift: (4 * Math.PI) / 3, glowColor: 'emerald', label: 'Git' },
]

const OrbitingSkill = memo(({ config, angle }: { config: SkillConfig; angle: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { orbitRadius, size, iconType, label } = config

  const x = Math.cos(angle) * orbitRadius
  const y = Math.sin(angle) * orbitRadius

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`glass relative flex h-full w-full cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-300 ${
          isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg'
        }`}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType].color}40, 0 0 60px ${iconComponents[iconType].color}20`
            : undefined,
        }}
      >
        {iconComponents[iconType].render()}
        {isHovered && (
          <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-card px-2 py-1 text-xs text-app shadow-app border border-app">
            {label}
          </div>
        )}
      </div>
    </div>
  )
})
OrbitingSkill.displayName = 'OrbitingSkill'

const glowColors: Record<GlowColor, { primary: string; secondary: string; border: string }> = {
  cyan: { primary: 'rgba(5, 178, 220, 0.35)', secondary: 'rgba(5, 178, 220, 0.15)', border: 'rgba(5, 178, 220, 0.3)' },
  purple: { primary: 'rgba(147, 51, 234, 0.35)', secondary: 'rgba(147, 51, 234, 0.15)', border: 'rgba(147, 51, 234, 0.3)' },
  emerald: { primary: 'rgba(16, 185, 129, 0.35)', secondary: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.3)' },
}

const OrbitPath = memo(({ radius, glowColor }: { radius: number; glowColor: GlowColor }) => {
  const colors = glowColors[glowColor]
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        border: `1px solid ${colors.border}`,
        boxShadow: `inset 0 0 30px ${colors.secondary}, 0 0 30px ${colors.secondary}`,
      }}
    />
  )
})
OrbitPath.displayName = 'OrbitPath'

const orbitRings: Array<{ radius: number; glowColor: GlowColor }> = [
  { radius: 90, glowColor: 'cyan' },
  { radius: 160, glowColor: 'purple' },
  { radius: 225, glowColor: 'emerald' },
]

export function OrbitingSkills() {
  const prefersReducedMotion = useReducedMotion()
  const [time, setTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    let animationFrameId: number
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000
      lastTime = currentTime
      setTime((prevTime) => prevTime + deltaTime)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused, prefersReducedMotion])

  return (
    <div
      className="relative mx-auto flex h-[420px] w-[420px] max-w-full items-center justify-center sm:h-[480px] sm:w-[480px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--accent-strong)] shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      {orbitRings.map((ring) => (
        <OrbitPath key={ring.radius} radius={ring.radius} glowColor={ring.glowColor} />
      ))}

      {skillsConfig.map((config) => {
        const angle = (prefersReducedMotion ? 0 : time) * config.speed + config.phaseShift
        return <OrbitingSkill key={config.id} config={config} angle={angle} />
      })}
    </div>
  )
}
