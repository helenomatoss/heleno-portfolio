"use client"
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const active = (theme ?? resolvedTheme) === 'dark'
  return (
    <Button
      aria-label="Toggle theme"
      variant="outline"
      size="icon"
      onClick={() => setTheme(active ? 'light' : 'dark')}
    >
      <span aria-hidden>{mounted && active ? '🌙' : '☀️'}</span>
    </Button>
  )
}

export default ThemeToggle
