"use client"
import { useEffect, useState } from 'react'

const TIME_ZONE = 'Europe/Dublin'

function tzOffsetMinutes(timeZone: string, date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(date).reduce<Record<string, string>>((acc, p) => {
    acc[p.type] = p.value
    return acc
  }, {})
  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  )
  return (asUTC - date.getTime()) / 60000
}

function getDublinInfo() {
  const now = new Date()
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(now)
  const diffHours = Math.round((tzOffsetMinutes(TIME_ZONE, now) - -now.getTimezoneOffset()) / 60)
  return { time, diffHours }
}

export function LocalClock() {
  const [mounted, setMounted] = useState(false)
  const [info, setInfo] = useState({ time: '', diffHours: 0 })

  useEffect(() => {
    setMounted(true)
    setInfo(getDublinInfo())
    const id = setInterval(() => setInfo(getDublinInfo()), 30_000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return <span>—</span>

  const { time, diffHours } = info
  if (diffHours === 0) return <span>{time} local time</span>
  const dir = diffHours > 0 ? 'ahead' : 'behind'
  return (
    <span>
      {time} {'//'} {Math.abs(diffHours)}h {dir}
    </span>
  )
}
