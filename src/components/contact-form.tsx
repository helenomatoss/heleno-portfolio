"use client"
import { useRef, useState, type FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [serverMessage, setServerMessage] = useState('')
  const [values, setValues] = useState({ name: '', email: '', message: '', company: '' })
  const [errors, setErrors] = useState<Partial<Record<'name' | 'email' | 'message', string>>>({})
  const statusRef = useRef<HTMLDivElement>(null)
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)
  const endpoint = 'https://formspree.io/f/xwpnzjkl'

  function validate() {
    const nextErrors: Partial<Record<'name' | 'email' | 'message', string>> = {}
    if (!values.name || values.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!values.email || !emailRegex.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.message || values.message.trim().length < 10) {
      nextErrors.message = 'Please enter at least 10 characters.'
    }
    setErrors(nextErrors)
    return nextErrors
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setServerMessage('')
    const errs = validate()
    if (Object.keys(errs).length) {
      // focus the first invalid field
      const id = (['name', 'email', 'message'] as const).find((k) => errs[k])
      if (id) {
        const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null
        firstErrorRef.current = el
        el?.focus()
      }
      return
    }
    try {
      setStatus('loading')
      // Honeypot: if filled, pretend success and skip sending
      if (values.company && values.company.trim().length > 0) {
        setStatus('success')
        setValues({ name: '', email: '', message: '', company: '' })
        setErrors({})
        setServerMessage('Thanks! Your message has been sent.')
        requestAnimationFrame(() => statusRef.current?.focus())
        return
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: values.name, email: values.email, message: values.message }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to send message')
      }
      setStatus('success')
      setValues({ name: '', email: '', message: '', company: '' })
      setErrors({})
      setServerMessage('Thanks! Your message has been sent.')
      // move focus to status region
      requestAnimationFrame(() => statusRef.current?.focus())
    } catch (err: any) {
      setStatus('error')
      setServerMessage(err?.message || 'Something went wrong. Please try again later.')
      requestAnimationFrame(() => statusRef.current?.focus())
    }
  }

  return (
    <form className="glass rounded-2xl p-6" onSubmit={onSubmit} noValidate aria-busy={status === 'loading'}>
      <div className="space-y-4">
        {/* Honeypot field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company" className="mb-1 block text-sm">Company</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            tabIndex={-1}
            value={values.company}
            onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm">
            Name
          </label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-600 dark:text-red-300">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-300">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <p className="mt-1 text-xs text-muted">Briefly describe your project or question.</p>
          {errors.message ? (
            <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-300">
              {errors.message}
            </p>
          ) : null}
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={status === 'loading'} className={status === 'loading' ? 'opacity-60 cursor-not-allowed' : undefined}>
            {status === 'loading' ? (
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden>
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Sending…
              </span>
            ) : (
              'Send message'
            )}
          </Button>
        </div>
        <div
          ref={statusRef}
          tabIndex={-1}
          aria-live="polite"
          role="status"
          className="min-h-5 text-sm"
        >
          {status === 'success' ? (
            <span className="text-emerald-600 dark:text-emerald-300">{serverMessage}</span>
          ) : status === 'error' ? (
            <span className="text-red-600 dark:text-red-300">{serverMessage}</span>
          ) : null}
        </div>
        <p className="text-xs text-muted">Handled by Formspree via secure POST.</p>
      </div>
    </form>
  )
}
